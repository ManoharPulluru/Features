import React, { useState } from 'react';

const CloudinaryTest = () => {
  const [binaryData, setBinaryData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const binaryString = reader.result;
      setBinaryData(binaryString);
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    console.log('Binary Data:', binaryData);
  };

  return (
    <div className='CloudinaryTestMain'>
      <input
        type='file'
        // accept='image/*'
        
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default CloudinaryTest;
