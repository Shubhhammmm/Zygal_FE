
import React from 'react';

const ScrollingSections = () => {
  const avatars = [
    'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
    'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
    'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
     'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
  ];
  const images = ['Image 1', 'Image 2', 'Image 3'];

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex items-center justify-center overflow-x-auto mb-4 space-x-4">
        {avatars.map((avatar, index) => (
          <div key={index} className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-300">
            <img src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full rounded-full object-cover" />
          </div>
        ))}
      </div>
      <div className="overflow-y-auto h-64 md:h-auto md:flex md:flex-col md:space-y-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-32 bg-gray-300 flex items-center justify-center mb-4 md:mb-0">
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSections;
