import React, { useState } from 'react';

const AdminAddCarImages = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCarSelect = (e) => {
    setSelectedCar(e.target.value);
  };

  const handleImageChange = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (selectedImages.length > 0) {
      selectedImages.forEach((image, index) => {
        formData.append(`thumbnail[${index}]`, image);
      });

      fetch('http://example.com/admin/add-car/images', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Files uploaded successfully', data);
        window.location.href = 'http://example.com/admin/cars'; // Redirect on success
      })
      .catch(error => {
        console.error('Error uploading files', error);
      });
    } else {
      setErrorMessage('Please choose at least one photo for the gallery');
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="carSelect" className="form-label">Choose Car</label>
              <select
                id="carSelect"
                className="form-select"
                value={selectedCar}
                onChange={handleCarSelect}
                required
              >
                <option value="">Select a Car</option>
                {/* Map your car options here */}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="imageInput" className="form-label">Choose Images</label>
              <input
                type="file"
                className="form-control"
                id="imageInput"
                name="thumbnail[]"
                accept=".jpeg,.jpg,.png"
                multiple
                onChange={handleImageChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button style={{marginLeft:'-35px'}} type="submit" className="btn btn-primary">Submit</button>
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminAddCarImages;
