import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly capture target value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation function
  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Recipe title is required.";
    if (!formData.ingredients) errors.ingredients = "Ingredients are required.";
    if (!formData.steps) errors.steps = "Preparation steps are required.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate a successful submission
      console.log("Recipe Submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange} // Correct use of handleChange
            className={`mt-1 block w-full p-3 border rounded-md ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Correct use of handleChange
            rows="4"
            className={`mt-1 block w-full p-3 border rounded-md ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Correct use of handleChange
            rows="6"
            className={`mt-1 block w-full p-3 border rounded-md ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
