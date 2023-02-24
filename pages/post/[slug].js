import { useRouter } from 'next/router'
import React from 'react'
import { getPostDetails, getPosts } from '../../services/hygraph'
import moment from 'moment/moment'
import PostContent from '../../components/postContent'

const PostDetails = ({ post: { post: { title, author, createdAt, postIntro, imageUrl, content } } }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <p>please wait</p>
    }

    return (
        <main className='w-[90vw] md:w-[70vw] mx-auto my-10'>
            <div className='flex gap-2'>
                <div className='w-[50px] overflow-hidden h-[50px] rounded-full bg-white'>
                    <img src={author.avatar.url} />
                </div>
                <div>
                    <h4>{author.name}</h4>
                    <div className='flex gap-5 mt-1'>
                        <p className="text-black opacity-60 text-[0.7em]"> <b>Published:</b>{moment(createdAt).fromNow(true)}</p>
                        <p className="text-black opacity-60 text-[0.7em]">15mins read</p>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl mt-5 font-bold capitalize'>{title}</h1>
            <p className='text-lg text-black opacity-60 mt-2'>{postIntro}</p>

            <div className='w-full my-4'>
                <img src={imageUrl.url} />
            </div>
            <PostContent content={content} />
        </main>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: {
                post: data
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map((post) => (
            {
                params: { slug: post.postUrl }
            }
        )),
        fallback: false,
    }
}