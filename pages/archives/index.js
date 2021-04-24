import React, { memo } from 'react'
import Layout from '../../components/app-layout'
import {ArchivesWrapper} from '../../lib/archives.style' 
import ToastCard from '../../components/toast-card'
import {getPostList} from '../../lib/api'
import Link from 'next/link'
import dayjs from 'dayjs'
import PostFilter from '../../components/post-filter'
export default memo(function Archives(props) {
    const {posts}=props
    return (
        <Layout>
            <ArchivesWrapper>
                <div className='archives-banner h-h400 sm:h-h400 md:h-h500'>

                </div>
                <ToastCard height={-30}>
                    <div className="p-5 sm:p-5 md:px-20 md:py-10">
                       <PostFilter posts={posts} year={2021}/>
                       <PostFilter posts={posts} year={2020}/>
                       <PostFilter posts={posts} year={2019}/>

                    </div>
                </ToastCard>
            </ArchivesWrapper>
        </Layout>
    )
})

export const getStaticProps=()=>{
    const posts=getPostList()
    return {
        props:{
            posts
        }
    }
}