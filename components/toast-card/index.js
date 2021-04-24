import React, { memo,useState,useEffect,useCallback } from 'react'
import {ToastCardWrapper} from './style'

export default memo(function ToastCard(props) {

    const [windowScroolTop,setWindowScrollTop] =useState(0)
    const [otherTop,setOtherTop]=useState(props.height)
    const [cardHeight,setCardHeight]=useState(0);
    //scroll回调函数
    const handleScroll=useCallback(()=>{
        
        const scrollTop=document.documentElement.scrollTop
        // console.log(scrollTop);
        if(scrollTop<100){
          // console.log(123);
          setWindowScrollTop(-document.documentElement.scrollTop)
        }else if(scrollTop>=100 && scrollTop<200){
          setWindowScrollTop(-110)
          setOtherTop(-50)
        }else if(scrollTop>=200 && scrollTop<=300){
          setWindowScrollTop(-120)
          setOtherTop(-80)
        }
      });
    const handeleResize=useCallback(()=>{
      setCardHeight(document.querySelector('.blogList').scrollHeight)
    })

      //hooks
      useEffect(() => {
        setCardHeight(document.querySelector('.blogList').scrollHeight)
        
        // 监听
        window.addEventListener('scroll',handleScroll)
        window.addEventListener('resize',handeleResize)
        // 销毁
        return () => {
          window.removeEventListener('scroll',handleScroll)
          window.removeEventListener('resize',handeleResize)
        };
      },[]);

    return (
        <ToastCardWrapper height={cardHeight-50}>
            <div className='blogList w-full sm:w-full md:w-4/6' style={{top:( props.height?otherTop: windowScroolTop)}}>
              {
                  props.children
              }
            </div>
        </ToastCardWrapper>
    )
})
