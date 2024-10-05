import React from 'react'
import hung_avatar from '../../../../assets/image/hung.jpg';
import SideBar from './SideBar/SideBar';
import ChatArea from './ChatArea/Chat';
const Content = () => {
    return (
        <div className="main flex-1 flex flex-col">
            <div className="hidden lg:block heading flex-2">
                <h1 className="text-3xl text-gray-700 mb-4">Chat</h1>
            </div>
            <div className="flex-1 flex h-full">
                <SideBar/>
                <ChatArea/>
            </div>
        </div>
    )
}

export default Content