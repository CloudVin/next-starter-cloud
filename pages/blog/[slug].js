
import React, { memo } from 'react'
import Layout from '../../components/app-layout'
import {BlogWrapper} from '../../lib/blog.style'
import ToastCard from '../../components/toast-card'
import hydrate from 'next-mdx-remote/hydrate'
import {getPostSlugList,getPostBySlug } from '../../lib/api'
import 'prism-themes/themes/prism-vsc-dark-plus.css';

export default memo(function Blog({post}) {

    const content =hydrate(post.content,{components:{}})

    return (
        <Layout>
            <BlogWrapper>
                <div className="blog-banner h-h400 sm:h-h400 lg:h-h500" >
                    <div className='text-2xl sm:text-2xl lg:text-4xl text-center font-sans font-blod text-white absolute top-1/3 left-1/2 transform -translate-x-1/2'>
                        <span>{post.title}</span><span className='animate-show'>_</span>
                        <p className='text-xl sm:text-xl lg:text-2xl '>
                            <i className='dateIcon mr-2 transform translate-y-1'> </i>
                            <span>{post.date}</span>
                        </p>
                    </div>
                </div>
                <ToastCard height={-30}>
                    <article className='p-10'>
                        {
                            content
                        }
                    </article>
                </ToastCard>
            </BlogWrapper>
        </Layout>
    )
})

export const getStaticPaths=async ()=>{
    const posts=getPostSlugList()

    return {
        paths:posts.map(post=>({
            params:{slug:post}
        })),
        fallback:false ,
    }
}

export const getStaticProps=async ({params})=>{
    const post=await getPostBySlug(params.slug)
    return {
        props:{
            post
        }
    }
}