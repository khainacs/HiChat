import React from 'react'
import hung_avatar from '../../../assets/image/hung.jpg';
import UserProfileMenu from './UserProfileMenu';
import './index.css'
import Header from './Header';
import Content from './Content/Content';

const Section = () => {
    return (  
            <div className="w-full h-screen">
                <div className="flex h-full">
                    <UserProfileMenu/>
                    <div className="flex-1 bg-gray-100 w-full h-full">
                        <div className="main-body container m-auto w-11/12 h-full flex flex-col">
                            <Header/>
                            <Content/>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Section
