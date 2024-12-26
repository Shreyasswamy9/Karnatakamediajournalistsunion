import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageData from './imageData.json'; // Import JSON data

interface Image {
  id: number;
  url: string;
  folder: string;
}

// Function to generate image list from JSON
const generateImageList = (folders: typeof imageData): Record<string, Image[]> => {
  const groupedImages: Record<string, Image[]> = {};
  Object.entries(folders).forEach(([folder, filenames], folderIndex) => {
    groupedImages[folder] = filenames.map((filename, imageIndex) => ({
      id: folderIndex * 1000 + imageIndex + 1, // Unique ID
      url: `/Gallery/${folder}/${filename}`, // Image URL
      folder,
    }));
  });
  return groupedImages;
};

const Gallery: React.FC = () => {
  const groupedImages = generateImageList(imageData); // Grouped images by folder
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="page-container">
      {/* Display Gallery Folders */}
      {!selectedFolder ? (
        <div>
          <h1 className="section-title text-center text-3xl font-bold text-[--primary] mb-8">
            Gallery
          </h1>
          {Object.keys(groupedImages).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.keys(groupedImages).map((folder) => (
                <div
                  key={folder}
                  className="card bg-white p-4 shadow-md cursor-pointer"
                  onClick={() => setSelectedFolder(folder)}
                >
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800">{folder}</p>
                    <p className="text-sm text-gray-500">{groupedImages[folder].length} images</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500">No folders available.</p>
          )}
        </div>
      ) : (
        // Display Selected Folder's Images in a Slider
        <div>
          <button
            onClick={() => setSelectedFolder(null)}
            className="text-[--primary] mb-4 underline hover:text-[--primary-dark]"
          >
            Back to Gallery
          </button>

          <div className="card bg-white p-6 shadow-md">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
              {selectedFolder}
            </h2>
            <Slider {...sliderSettings}>
              {groupedImages[selectedFolder].map((image) => (
                <div key={image.id}>
                  <img
                    src={image.url}
                    alt={`Image ${image.id}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
