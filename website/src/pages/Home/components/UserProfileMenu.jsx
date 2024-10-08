import React, { useState, useEffect } from 'react'; // Nhập useState và useEffect
import hung_avatar from '../../../assets/image/hung.jpg'; // Đảm bảo đường dẫn đến hình ảnh avatar là đúng
import './index.css';

const UserProfileMenu = () => {
    const [userName, setUserName] = useState(""); // Khởi tạo state rỗng

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
        
            if (email && password) {
                try {
                    const response = await fetch('http://localhost:3000/api/users/me', {
                        method: 'POST', // Hoặc GET nếu API của bạn hỗ trợ
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log('Fetched user data:', data); // Kiểm tra phản hồi từ API
                        setUserName(data.user.name); // Cập nhật tên người dùng từ phản hồi API
                    } else {
                        console.error('Failed to fetch user data:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName); // Nếu có tên trong localStorage, cập nhật state
        } else {
            fetchUserData(); // Gọi API để lấy tên người dùng
        }
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <div className="hidden xl:block sm:flex-2 w-64 bg-gray-200">
            <div className="user-profile text-center">
                <div className="w-20 h-20 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg">
                    <img
                        src={hung_avatar}
                        alt="user"
                        className="block rounded-full" // Tùy chọn để làm cho hình ảnh tròn
                    />
                </div>

                <div className="text-gray-800 mt-8">
                {userName ? userName : "Loading..."}
                    <span className="inline-block align-text-bottom">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="menu mt-8">
                <a
                    className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
                    href="javascript:return false;"
                >
                    <span className="inline-block align-text-bottom mr-2">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                        >
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </span>
                    Home
                </a>
                {/* Các liên kết khác trong menu giống như trước */}
            </div>
        </div>
    );
};

export default UserProfileMenu;
