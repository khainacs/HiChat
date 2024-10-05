import React from 'react'
import hung_avatar from '../../../../../assets/image/hung.jpg';
import Search from './Search';

const SideBar = () => {
    return (
        <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
            <Search />
            <div className="flex-1 h-full overflow-auto px-2">
                {/* Online Pending Message User*/}
                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img
                                className="w-12 h-12 rounded-full mx-auto"
                                src={hung_avatar}
                                alt="chat-user"
                            />
                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="truncate w-32">
                            <span className="text-gray-800">Ryann Remo</span>
                        </div>
                        <div>
                            <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                    </div>
                    <div className="flex-2 text-right">
                        <div>
                            <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                            <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                                23
                            </small>
                        </div>
                    </div>
                </div>
                {/* Offline Pending Message User*/}
                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img
                                className="w-12 h-12 rounded-full mx-auto"
                                src={hung_avatar}
                                alt="chat-user"
                            />
                            <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="truncate w-32">
                            <span className="text-gray-800">Karp Bonolo</span>
                        </div>
                        <div>
                            <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                    </div>
                    <div className="flex-2 text-right">
                        <div>
                            <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                            <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                                10
                            </small>
                        </div>
                    </div>
                </div>
                {/* User in Conversation */}
                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img
                                className="w-12 h-12 rounded-full mx-auto"
                                src={hung_avatar}
                                alt="chat-user"
                            />
                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="truncate w-32">
                            <span className="text-gray-800">Mercedes Yemelyan</span>
                        </div>
                        <div>
                            <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                    </div>
                    <div className="flex-2 text-right">
                        <div>
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Online Seen Message User*/}
                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img
                                className="w-12 h-12 rounded-full mx-auto"
                                src={hung_avatar}
                                alt="chat-user"
                            />
                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="truncate w-32">
                            <span className="text-gray-800">Cadi Kajetán</span>
                        </div>
                        <div>
                            <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                    </div>
                    <div className="flex-2 text-right">
                        <div>
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Offline Seen Message User*/}
                <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img
                                className="w-12 h-12 rounded-full mx-auto"
                                src={hung_avatar}
                                alt="chat-user"
                            />
                            <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="truncate w-32">
                            <span className="text-gray-800">Rina Samuel</span>
                        </div>
                        <div>
                            <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                    </div>
                    <div className="flex-2 text-right">
                        <div>
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar