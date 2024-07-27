import React, { useState } from 'react';

const InputValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const validateEmail = (value) => {
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    const minLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setPasswordValid(minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex justify-center mb-6">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=sph"
          alt="Profile"
          className="rounded-full w-[20%] h-[10%] border-gray-300"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
          className={`w-full p-2 border ${emailValid === null ? '' : emailValid ? 'border-green-500' : 'border-red-500'}`}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          className={`w-full p-2 border ${passwordValid === null ? '' : passwordValid ? 'border-green-500' : 'border-red-500'}`}
        />
      </div>
    </div>
  );
};

export default InputValidation;
