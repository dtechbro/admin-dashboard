import { useState } from "react";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    input1: "",
    images: Array(5).fill(null),
    input2: "",
    input3: "",
  });

  const handleNext = () => {
    if (currentStep === 1 && !formData.input1.trim())
      return alert("First input is required.");
    if (currentStep === 2 && formData.images.some((image) => image === null))
      return alert("All 5 images are required.");
    if (
      currentStep === 3 &&
      (!formData.input2.trim() || !formData.input3.trim())
    )
      return alert("All inputs on this step are required.");
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = file;
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {currentStep === 1 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Step 1</h2>
          <input
            type="text"
            name="input1"
            value={formData.input1}
            onChange={handleInputChange}
            placeholder="Enter required input"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Step 2</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formData.images.map((_, index) => (
              <div key={index}>
                <label className="block mb-2 text-sm font-medium">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2 className="text-lg font-bold mb-4">Step 3</h2>
          <input
            type="text"
            name="input2"
            value={formData.input2}
            onChange={handleInputChange}
            placeholder="Enter input 2"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="text"
            name="input3"
            value={formData.input3}
            onChange={handleInputChange}
            placeholder="Enter input 3"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepForm;
