import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };  

  const validate = () => {
    const { username, email, password } = formData;
    const newErrors = {};
  
    if (!username) {
      if (!newErrors.username) newErrors.username = "Username is required.";
    }
  
    if (!email) {
      if (!newErrors.email) newErrors.email = "Email is required.";
    }
  
    if (!password) {
      if (!newErrors.password) newErrors.password = "Password is required.";
    }
  
    return newErrors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
    // Mock API call logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
         type="text"
         name="username"
         value={username} // Uses the username state
         onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
         name="email"
         value={email} // Uses the email state
         onChange={handleChange}
         />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
         type="password"
         name="password"
         value={password} // Uses the password state
         onChange={handleChange}
         />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
