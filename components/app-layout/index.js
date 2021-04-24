import React, { memo,useState,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/Home.module.css'
export default memo(function AppLayout(props) {

  const [top,setTop]=useState(70)
  const [blur,setBlur]=useState(0)
  const [isShow,setisShow]=useState(true)
  const navTags=[
    {
      path:'/',
      name:'blog'
    },
    {
      path:'/archives',
      name:'归档'
    },
    {
      path:'/tags',
      name:'标签'
    },
    {
      path:'/about',
      name:'关于'
    },

  ]

  const handleScrollTop=()=>{

    const scrollTop=document.documentElement.scrollTop
      if(scrollTop>100){
        setTop(55)
        setBlur(5)
      }else{
        setTop(70)
        setBlur(0)
      }
      
  }

  useEffect(()=>{
      window.addEventListener('scroll',handleScrollTop)
  },[])
  //
  const showNavBar=()=>{
    setisShow(!isShow)
    const lis=document.querySelector("#navbar").querySelectorAll('a')
    console.log(lis);
    lis.forEach((item, index) => {
      if (item.style.animation) {
          item.style.animation = '';
      } else {
          item.style.animation = `${style.sadeIn} 0.4s ease-in forwards ${(index*0.1+0.3)}s`
      }
  })
    }
    return (
        <div>
    <Head>
        <title>Cloud Vin </title>
    </Head>
      <header className={isShow?style.header:(style.header+' '+style.changeBoxS)}
      style={isShow?{}:{height:'270px',backdropFilter:`blur(${blur}px)`}}>
        <div className={style.nav}  
        style={{height:top,backdropFilter:`blur(${blur}px)` }}>
           <div className={style.navTitle}>
                <span><Link href='/'>Cloud Vin</Link></span> 
            </div> 
          <div id='navbar' 
               className={isShow?style.navbar:(style.navbar+' '+style.open)}
               style={isShow?{}:{top:`${top}px`}}>
            {
              navTags.map((item)=>{
                  return (
                    <Link key={item.name} href={item.path}><a>{item.name}</a></Link>
                  )
              })
            }
            
          </div>
          <div class={isShow?style.burger:(style.burger+' '+style.active)} 
               style={isShow?{}:{}}
               onClick={e=>{showNavBar()}}>
            <div class={style.topLine}></div>
            <div class={style.middleLine}></div>
            <div class={style.bottomLine}></div>
        </div>
        </div>
      </header>
        <main className={style.contain}>
            {props.children}
        </main>
      
      <footer className={style.footer}>
        <p>
            Website designed by Cloud Vin 
            <br/>
            Powered by React and Next.js
        </p>
      </footer>
        </div>
    )
})
