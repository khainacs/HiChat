import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Nhập useNavigate

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const [name, setName] = useState(''); // Add state for name

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
        const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
        console.log(response.data); // Kiểm tra phản hồi từ server

        // Kiểm tra xem phản hồi có chứa thông báo thành công hay không
        if (response.data.message === "Đăng nhập thành công") {
            setName(response.data.user.name); // Lưu tên người dùng
            navigate('/'); // Chuyển hướng đến trang mong muốn
        } else {
            setError("Đăng nhập không thành công."); // Thông báo lỗi
        }
    } catch (error) {
        console.error("Login failed:", error.response?.data); 
        setError("Đăng nhập không thành công."); // Thông báo lỗi nếu có lỗi từ server
    }
};

  const getUserNameFromAPI = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`, // Include your auth token
        }
      });

      return response.data.name; // Return the user's name
    } catch (error) {
      console.error('Error fetching user name:', error);
      return null; // Handle error
    }
  };

  const handleLogin = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Lưu email và password vào localStorage hoặc state
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            // Có thể lưu tên người dùng nếu có
            localStorage.setItem('userName', data.name);
            console.log('Stored email:', email); // Kiểm tra email
            console.log('Stored password:', password); // Kiểm tra password
        } else {
            console.error('Login failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
