import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <h1 className="section-title text-center text-3xl font-bold text-[--primary] mb-8">
        About Us
      </h1>

      <div className="space-y-12">
        {/* Card 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="card bg-white p-6 shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              Karnataka Media Journalist Union (KMJU) is an esteemed organization constantly striving for the welfare of fellow journalists. 
              Established in 2017, KMJU has a rich legacy of conducting various cultural and social events to honour journalists and 
              movers and shakers of society who have made a difference with their noble service.
            </p>
          </div>
          <div className="image-container">
            <img
              src="/path/to/image1.jpg"
              alt="KMJU Overview"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="card bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[--primary] mb-4">
              Our Legacy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Since 2007, KMJU has organized interdisciplinary meets with journalists from Sri Lanka and other states. 
              In collaboration with the International Media Forum (IMF), KMJU honours media legends and achievers across various fields. 
              Together, KMJU and IMF are proud to present the first-ever overseas prestigious
              <span className="font-semibold"> GLOBAL ICON MEDIA AWARDS </span> in Dubai on February 22, 2025, 
              recognizing individuals for their noble service.
            </p>
          </div>
          <div className="image-container">
            <img
              src="/path/to/image2.jpg"
              alt="Our Legacy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="card bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[--primary] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              KMJU is dedicated to the welfare of journalists from print and electronic media. 
              The union honours eminent journalists with <span className="font-semibold"> "Achiever Awards" </span> and 
              recognizes the remarkable contributions of institutions and individuals with <span className="font-semibold"> "Excellence Awards" </span>. 
              These awards are presented in the august presence of eminent personalities, celebrating their invaluable contributions to society.
            </p>
          </div>
          <div className="image-container">
            <img
              src="/path/to/image3.jpg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
