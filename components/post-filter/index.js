import React, { memo } from 'react'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import Link from 'next/link'

dayjs.extend(isBetween)
export default memo(function PostFilter(props) {
    const {posts,year} =props
    return (
        <div>
            <div className='text-xl font-bold sm:text-xl lg:text-2xl text-gray-600 '>{year}</div>
            <ul>
            {
             posts.map((post)=>{
                if(dayjs(post.date).isBetween(`${year}-1-1`, dayjs(`${year+1}-1-1`))){
                    return (
                    <li className='flex justify-between text-gray-600 text-base sm:text-base md:text-xl p-2 hover:text-blue-500' key={post.title}>
                            <div>
                                <Link href={`/blog/${post.slug}`}>
                                    <a>{post.title}</a>
                                </Link>
                            </div>
                            <div>{post.date}</div>
                    </li>
                )
            } 

            })
        }
            </ul>
        
        </div>
    )
})
