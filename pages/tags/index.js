import React, { memo } from 'react'
import Layout from '../../components/app-layout'
import { TagsWrapper } from '../../lib/tags.style'
import ToastCard from '../../components/toast-card'


export default memo(function Tags() {
    const tags= ['JavaCript','Vue','React','Html','css','Next.js','数据结构与算法','leetCode','日常','设计模式','读书笔记','Node.js','MySql']
    return (
        <Layout>
            <TagsWrapper>
                <div className='tags-banner h-h400 sm:h-h400 lg:h-h500'>

                </div>
                <ToastCard height={-30}>
                    <div className='p-5 sm:p-5 md:p-10'>
                        <ul className='flex justify-around flex-wrap p-1 sm:p-1 md:p-5 text-gray-500 w-15 cursor-pointer font-mono text-lg sm:text-lg md:text-lg align-middle'>
                           {
                               tags.map((tag,index)=>{
                                    if(index%2===0){
                                        return(
                                            <li className=' list-none p-1 sm:p-1 md:p-2 m-3 rounded hover:bg-blue-300 hover:text-white'>#{tag}</li>
                                        )}
                                   else if(index%3===0){
                                        return(
                                            <li className=' list-none  p-1 sm:p-1 md:p-2 m-3 rounded hover:bg-red-200 hover:text-white'>#{tag}</li>
                                        )
                                   }else if(index%4===0){
                                    return(
                                        <li className=' list-none  p-1 sm:p-1 md:p-2 m-3 rounded hover:bg-green-200 hover:text-white'>#{tag}</li>
                                    )
                                   }else{
                                    return(
                                        <li className=' list-none  p-1 sm:p-1 md:p-2 m-3 rounded hover:bg-purple-200 hover:text-white'>#{tag}</li>
                                    )
                                   }
                               })
                           }
                        </ul>
                    </div>
                </ToastCard>
            </TagsWrapper>
        </Layout>
    )
})
