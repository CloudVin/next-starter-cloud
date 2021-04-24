import React, { memo } from 'react'
import Link from 'next/link'
import {BlogListItemWrapper} from './style'


export default memo(function BlogListItem(props) {

    const {post}=props

    return (
        <BlogListItemWrapper className='mb-1 sm:mb-1 md:mb-2 font-sans'>
            <p className='mb-1 sm:mb-1 md:mb-3 text-xl sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-blue-500'> 
                <Link href={`/blog/${post.slug}`}>
                <a >{post.title}</a>
                </Link>
            </p>
            <p className='mb-1 sm:mb-1 md:mb-3 text-base sm:text-base  md:text-xl text-gray-600 '>{post.description}</p>
            <p className='text-gray-500'>
                <i className='dateIcon mr-2 transform translate-y-0.5'></i>
                <span>{post.date}</span>
                <i className='tags ml-5 mr-2 transform translate-y-1'></i>
                <span>{post.tag}</span>
            </p>
        </BlogListItemWrapper>
    )
})
