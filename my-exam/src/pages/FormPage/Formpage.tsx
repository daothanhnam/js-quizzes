import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email "
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submit && (
        <div>
          <p>{data.email}</p>
          <p> {data.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
