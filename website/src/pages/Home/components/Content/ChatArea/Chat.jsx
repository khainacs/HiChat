import React from 'react'
import TextArea from './TextArea';
import hung_avatar from '../../../../../assets/image/hung.jpg';
const Chat = () => {
    return (
        <div className="chat-area flex-1 flex flex-col">
            <div className="flex-3">
                <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
                    Chatting with <b>Mercedes Yemelyan</b>
                </h2>
            </div>
            <div className="messages flex-1 overflow-auto">
                {/* Example Receiver Message*/}
                <div className="message mb-4 flex">
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
                        <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>
                                Hey there. We would like to invite you over to our
                                office for a visit. How about it?
                            </span>
                        </div>
                        <div className="pl-4">
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Example Receiver Message*/}
                <div className="message mb-4 flex">
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
                        <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>
                                All travel expenses are covered by us of course :D
                            </span>
                        </div>
                        <div className="pl-4">
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Example Sender Message*/}
                <div className="message me mb-4 flex text-right">
                    <div className="flex-1 px-2">
                        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                            <span>It's like a dream come true</span>
                        </div>
                        <div className="pr-4">
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Example Sender Message*/}
                <div className="message me mb-4 flex text-right">
                    <div className="flex-1 px-2">
                        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                            <span>I accept. Thank you very much.</span>
                        </div>
                        <div className="pr-4">
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
                {/* Example Receiver Message*/}
                <div className="message mb-4 flex">
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
                        <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                            <span>You are welome. We will stay in touch.</span>
                        </div>
                        <div className="pl-4">
                            <small className="text-gray-500">15 April</small>
                        </div>
                    </div>
                </div>
            </div>
            <TextArea/>
        </div>
    )
}

export default Chat