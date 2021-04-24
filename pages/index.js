import React,{useState,useEffect,useCallback} from 'react'
import Layout from '../components/app-layout'
import style from '../styles/Home.module.css'
import axios from 'axios'
import ToastCard from '../components/toast-card'
import {getPostList} from '../lib/api'

import BlogListItem from '../components/blog-list-item'

 const Home=(props)=> {
  //getInitalProps传来的数据
  const {content,posts} =props
  //获取浏览器的可视区域高度和宽度
  const getWindowSize = useCallback(() => ({
    innerHeight: window.innerHeight+'px',
    innerWidth: document.documentElement.clientWidth+'px',
  }));
  
  
  //设置state,初始值需要为空数组，因为会先在服务端执行后返回，所以没有window对象
  const [windowSize, setWindowSize] = useState({});
  
  //resize事件回调函数，修改windowSize的值
  const handleResize = useCallback(() => {
    setWindowSize(getWindowSize());
  });

  useEffect(() => {
    setWindowSize(getWindowSize());
    // 监听
    window.addEventListener("resize", handleResize);
    // 销毁
    return () => {
      window.removeEventListener("resize", handleResize)
   
    };
  },[]);
  
  
  return (
    <Layout>
      
      <div id='banner' className={style.banner+' sm:w-screen'}  
      style={{width:windowSize.innerWidth ,height:windowSize.innerHeight }}>
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 text-2xl lg:text-6xl font-bold text-white sm:text-2xl'>
          CloudVin<span className='animate-show'>_</span>Blog
          </div>
          <p className={style.oneWord}>
              {content}
          </p>
          <div className='absolute left-1/2 bottom-8  animate-down'>
            <span className={style.down}></span>
          </div>
      </div>
      <ToastCard>
        
          <div className='p-4 sm:p-4 md:p-20'>
            {
              posts.map((post)=>(
                <BlogListItem post={post} key={post.title}/>
              ))
            }
          </div>
        
      </ToastCard>
      
      
    </Layout>
  )
}
export const getStaticProps=async ()=>{
  const postsList=getPostList()
  const res= await axios.get('https://api.xygeng.cn/one')
  return {
    props:{
      posts:postsList,
      content:res.data.data.content,
      author:res.data.data.origin
    }
  }
}



export default Home