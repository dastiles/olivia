import React from 'react'
import moment from 'moment/moment'
import Link from 'next/link'

const Section = ({ post: { title, postIntro, createdAt, postUrl, imageUrl: { url }, author: { name, avatar } } }) => {
    return (
        <section className="shadow-md w-[90vw] md:w-[70vw] mx-auto relative my-5 rounded-md">
            <div>
                <div className="flex items-center gap-2 p-2">
                    <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
                        <img src={avatar.url} />
                    </div>
                    <p className="text-sm text-black font-semibold">{name}</p>
                </div>
            </div>
            <Link href={`post/${postUrl}`}>
                <div className="flex flex-col-reverse w-full mt-2 md:mt-0 items-center md:flex-row ">
                    <div className=" w-full md:w-3/4 py-5 md:py-0 px-2 ">
                        <h4 className="font-bold text-md text-black mb-2">{title}</h4>
                        <p className='message_p'>{postIntro}</p>
                    </div>
                    <div className=" w-full md:w-1/4 h-[40vh] md:h-[25vh]">
                        <img src={url} className='w-full object-cover h-full' />
                    </div>
                </div>
            </Link>
            <div className="flex px-2 gap-5 pb-2">
                <p className="text-black opacity-60 text-[0.7em]"> <b>Published:</b>{moment(createdAt).fromNow(true)}</p>
                <p className="text-black opacity-60 text-[0.7em]">15mins read</p>
            </div>
        </section>
    )
}

export default Section