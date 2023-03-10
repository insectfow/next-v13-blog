"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../public/favicon.svg";
import Ummee from "../public/umee.png";
import Ummee2 from "../public/umee2.png";
import Ummee3 from "../public/umee3.png";
import { useState, useEffect, useRef } from "react";
export default function Home() {
  const section = useRef();
  const tabRef = useRef([]);
  const btnRef = useRef([]);
  const [isStop, setIsStop] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const [tabs, setTabs] = useState([
    {
      idx: 0,
      title: "첫번째 세션입니다.",
      color: "3541b1",
      image: Ummee,
    },
    {
      idx: 1,
      title: "2번째 세션입니다.",
      color: "BB2649",
      image: Ummee2,
    },
    {
      idx: 2,
      title: "3번째 세션입니다.",
      color: "768852",
      image: Ummee3,
    },
    {
      idx: 3,
      title: "4번째 세션입니다.",
      color: "768231",
      image: Ummee3,
    },
    {
      idx: 4,
      title: "5번째 세션입니다.",
      color: "322231",
      image: Ummee,
    },
  ]);
  // 클릭시 세션 이동 함수
  const heightCheck = (e) => {
    const {
      target: { name },
    } = e;
    setIsStop(true);
    tabRef.current[name].scrollIntoView();
  };

  useEffect(() => {
    let options = {
      root: document.querySelector(".container"),
      rooMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!isStop) {
          setCurrentTab(Number(entry.target.id));
        }
      }
    }, options);

    tabRef.current.map((v) => {
      observer.observe(v);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isStop) {
      const height = section.current.clientHeight;
      section.current.scrollTop = height * currentTab;
    }
  }, [currentTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsStop(false);
      clearInterval(timer);
    }, tabs.length * 500);
  }, [isStop]);
  return (
    <main>
      <div className="logo">
        <Image src={HeaderLogo} width={60} height={60} alt="logo image"></Image>
      </div>
      <nav className="nav">
        {tabs.map(({ title, color, idx }) => {
          return (
            <button
              onClick={heightCheck}
              className={currentTab == idx ? "active" : null}
              name={idx}
              key={"nav" + idx}
            >
              {"section" + (idx + 1)}
            </button>
          );
        })}
      </nav>
      <nav className="middle-nav">
        {tabs.map(({ idx }) => {
          return (
            <button
              ref={(el) => (btnRef.current[idx] = el)}
              name={idx}
              className={currentTab == idx ? "active" : null}
              key={"middle-nav" + idx}
              onClick={heightCheck}
            ></button>
          );
        })}
      </nav>
      <div ref={section} id="fullPage" className="container">
        {tabs.map(({ title, color, idx, image }) => {
          const style = {
            background: "#" + color,
          };
          return (
            <div
              ref={(el) => (tabRef.current[idx] = el)}
              id={idx}
              className="section"
              style={style}
              key={"section" + idx}
            >
              <h1>{title}</h1>
              {image && (
                <Image src={image} width={400} height={400} alt="ummm"></Image>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
