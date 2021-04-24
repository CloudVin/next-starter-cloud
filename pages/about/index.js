import React, { memo } from 'react'
import Layout from '../../components/app-layout'
import { AboutWrapper } from '../../lib/about.style'
import ToastCard from '../../components/toast-card'

export default memo(function About() {
    
    const  resume=[
        {
            data:'web前端开发者，❤React/👌vue'
        },
        {
            data:'cloud vin是我社交网络上的网名，cloud直译云☁，音译克劳德,取至《三体》我最喜欢的一个人物--云天明，以及最终幻想的男主'
        },
        {
            data:'笔记app重度爱好者，始终相信好记性不如烂笔头，用过oneNote,有道云,为知，Nation,语雀，目前投入wolai（安利给你们，wolai记得给我广告费😂）'
        },
        {
            data:'轻度强迫症，但有时很佛系，且相信代码将带来更好的世界'
        },
        {
            data:'致力于成为一个全栈/周期工程师，成为行业内的大师，打造出令人兴奋的产品。'
        }
    ]
    return (
        <Layout>
            <AboutWrapper>
                <div className='about-banner h-h400 sm:h-h400 lg:h-h500'>

                </div>
                <ToastCard height={-30}>
                    <div className='text-gray-700 p-5 sm:p-5 lg:p-10'>
                        <p>你好，我是Cloud Vin,一名前端工程师，很高兴认识你</p>
                        <h2>About Me</h2>
                        <ul>
                            {
                                resume.map((item)=>{
                                    return (
                                        <li key={item.data} className='p-2'>{item.data}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </ToastCard>
            </AboutWrapper>
        </Layout>
    )
})
