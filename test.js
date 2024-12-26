import fs from 'fs';
import path from 'path';

// Define the gallery folders
const galleryFolders = {
  KFF: './public/Gallery/KFF',
  Mahila: './public/Gallery/Mahila',
};

// Output file
const outputFile = './src/imageData.json';

// Function to read file names from folders
const generateImageList = (folders) => {
  const result = {};
  Object.keys(folders).forEach((folderKey) => {
    const folderPath = folders[folderKey];
    const files = fs.readdirSync(folderPath).filter((file) =>
      /\.(png|jpe?g|svg)$/i.test(file) // Only include image files
    );
    result[folderKey] = files;
  });
  return result;
};

// Generate and save the JSON file
const imageList = generateImageList(galleryFolders);
fs.writeFileSync(outputFile, JSON.stringify(imageList, null, 2));
console.log(`Image list saved to ${outputFile}`);
