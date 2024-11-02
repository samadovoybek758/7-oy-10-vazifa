import React from 'react'
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import library from '../assets/library.svg';
import create_list from '../assets/create_list.svg';
import liked_songs from '../assets/liked_song.svg';
import user1 from '../assets/user1.svg';
import user2 from '../assets/user2.svg';
import close from '../assets/close.svg';
import message from '../assets/message.svg'

function MainLayouts({children}) {
  return (
    <div>
        <div className='left_side fixed w-[20vw] bg-black h-[100vw] top-0'>
            <div className='flex flex-col gap-5 pt-[70px] pr-10 pb-5 pl-8'>
           <div className='flex gap-5 items-center'>
                <img src={home} alt="" />
                <h1 className='text-white text-lg font-bold hover:text-gray-400 cursor-pointer'>Home</h1>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={search} alt="" />
                <h1 className='text-white text-lg font-bold hover:text-gray-400 cursor-pointer'>Search</h1>
            </div>
            <div className='flex gap-5 items-center mb-5'>
                <img src={library} alt="" />
                <h1 className='text-white text-lg font-bold hover:text-gray-400 cursor-pointer'>Your Library</h1>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={create_list} alt="" />
                <h1 className='text-white text-lg font-bold hover:text-gray-400 cursor-pointer'>Create Playlist</h1>
            </div>
            <div className='flex gap-5 items-center'>
                <img src={liked_songs} alt="" />
                <h1 className='text-white text-lg font-bold hover:text-gray-400 cursor-pointer'>Liked Songs</h1>
            </div>
           </div>
        </div>

        <div className='w-[60vw] h-[100vw] top-0 mx-auto'>{children}</div>

        <div className='right_side fixed w-[20vw]  bg-black h-[100vw] right-0 top-0 text-gray-200 pt-5 pl-5 '>
            <div>
                <div className='flex justify-between items-center mb-10 max-w-[326px]'>
                    <span className='text-xl  font-bold'>Friend Activity</span>
                    <div className='flex'>
                        <img src={user1} alt="" />
                        <img src={close} alt="" />
                    </div>
                </div>
                <p className='text-lg mb-6 mr-5 max-w-[306px]'>Let friends and followers on Spotify see what you’re listening to.</p>
                <div className='mb-5  flex flex-col gap-5'>
                    <div className='flex gap-4 items-center'>
                         <img src={user2} alt="" />
                        <img src={message} alt="" />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src={user2} alt="" />
                        <img src={message} alt="" />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img src={user2} alt="" />
                        <img src={message} alt="" />
                    </div>
                </div>
                <p className='text-lg mb-6 mr-5 max-w-[306px]'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
                <button className='py-5 max-w-[233px] mx-auto px-16 bg-white text-black rounded-3xl border-none text-lg font-bold'>SETTINGS</button>

            </div>
        </div>

        <div className='footer w-[100vw] fixed bg-black h-[112px] z-10 bottom-0'>
            <h1>fvdfvdsv</h1>
        </div>
    </div>
  )
}

export default MainLayouts