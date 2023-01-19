'use client'
import Image from 'next/image';
import Link from 'next/link';
import HeaderLogo from '../public/favicon.svg';
import { useState, useEffect, useRef } from 'react';
export default function Home() {
  const section = useRef();
  const tabRef = useRef([]);
  const btnRef = useRef([]);
  const [isStop, setIsStop] = useState(false)
  const [currentTab, setCurrentTab] = useState(0);

  const [tabs, setTabs] = useState([
    {
      idx: 0,
      title: '첫번째 세션입니다.',
      color: '3541b1'
    },
    {
      idx: 1,
      title: '2번째 세션입니다.',
      color: 'BB2649'
    },
    {
      idx: 2,
      title: '3번째 세션입니다.',
      color: '768852'
    }
  ]);
  // 클릭시 세션 이동 함수
  const heightCheck = (e) => {
    const { target: { name } } = e;

    setIsStop(true);

    tabRef.current[name].scrollIntoView();
    console.log('이동할 덱스 :', name);
    setCurrentTab(Number(name));

  }

  useEffect(() => {
    let options = {
      root: document.querySelector('.container'),
      rooMargin: '0px',
      threshold: 0.02
    }
    const observer = new IntersectionObserver(([entry]) => { 
      // console.log(entry.isIntersecting, entry.target.id, entry);
      if (entry.isIntersecting) {
        
        if (!isStop) {
          console.log(entry.target.id);
          setCurrentTab(Number(entry.target.id));
        }

      }
    }, options);
    observer.observe(tabRef.current[0])
    observer.observe(tabRef.current[1])
    observer.observe(tabRef.current[2])
    return () => {
      observer.disconnect();
    };
  }, [])
  

  useEffect(() => {
    if (!isStop) {
      const height = section.current.clientHeight;
      section.current.scrollTop = height * currentTab
    }
  }, [currentTab])
  

  useEffect(() => {
    console.log('isStop', isStop);

    const timer = setInterval(() => {
      setIsStop(false);

      clearInterval(timer)
    }, 1000)
    


  },[isStop])






  return (
    <main>
      <div className='logo'>
        <Image src={HeaderLogo} width={60} height={60} alt="logo image"></Image>
      </div>
      <nav className='nav'>
        {tabs.map(({ title, color, idx }) => {
          return <button onClick={heightCheck} className={currentTab == idx ? 'active' : null} name={idx} key={'nav' + idx}>{ 'section'+ (idx + 1) }</button>
        } )}
      </nav>
      <nav className='middle-nav'>
      {tabs.map(({ idx }) => {
        return <button ref={el => (btnRef.current[idx] = el)} className={currentTab == idx ? 'active' : null} name={idx} key={'middle-nav' + idx} onClick={heightCheck} />
        })}
      </nav>
      <div ref={section} id='fullPage' className='container'>
        {tabs.map(({ title, color, idx }) => {
          const style = {
            background: '#' + color
          }
          return <div ref={el => (tabRef.current[idx] = el)} id={idx} className='section' style={style} key={'section' + idx}>{ title }</div>
        })}
      </div>
    </main>
  )
}