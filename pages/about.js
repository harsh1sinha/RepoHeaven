import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/about.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap" rel="stylesheet"/>
      </Head>
     
      
      <main  className={style.container}>
        
        <div className={style.icon}>
           <div className={style.circle} ></div>
            <img className={style.blackcat}  src='/Screenshot 2023-06-11 150834_preview_rev_1.png' />
            </div>
            <div className={style.righttext}>
              <u className={style.underline}>About The Website</u>  
            <div className={`${style.box} ${style.aboutbox}`}>
            Introducing Repo Heaven, a web application designed to immerse users in the world of open-source projects hosted on GitHub. With its user-friendly interface and seamless navigation, Repo Heaven offers a gateway to explore countless repositories and GitHub users effortlessly. Users have the freedom to search for repositories based on specific languages, stars, and forks, enabling them to discover projects that align with their interests and needs. In addition, Repo Heaven provides a comprehensive view of each user's GitHub profile, repositories, and commit history, allowing for a personalized experience tailored to individual preferences. This responsive web app ensures a consistent and enjoyable user experience across all devices, enabling users to explore the vast GitHub ecosystem from anywhere. With Repo Heaven, discovering and engaging with open-source projects has never been easier, making it the ultimate heaven for GitHub enthusiasts and developers alike.
            </div>
            </div>
            <div className={style.us}>
            <u className={`${style.underline} ${style.creator}`}>Creators</u>
            <div className={`${style.box} ${style.creatinfo} ${style.hinfo}`} >
            I'm Harsh Sinha, the creator of Repo Heaven. As a mechanical engineering student at IIT Indore, I have a passion for building full-stack websites. With skills in HTML, CSS, JavaScript, and frameworks like Next.js and React, I enjoy blending creativity with technology. Currently, I'm exploring the fascinating world of AI/ML. Repo Heaven is my humble endeavor to contribute meaningfully to the digital realm.
            </div>
            <div className={`${style.box} ${style.creatinfo} ${style.kinfo}`} >
            I'm Kaushiki Nanda Duarah, a mechanical engineering student at IIT Indore, and I have a strong passion for building full-stack websites. With proficiency in HTML, CSS, JavaScript, and frameworks like Next.js and React, I strive to create captivating user experiences. Currently, I'm expanding my knowledge in cyber security and UI/UX design. In addition to my technical pursuits, I find joy in debating and literature. Being part of this project allows me to combine my interests and skills to create something remarkable.
            </div>
            </div>
            <div className={style.ourphotos}>
              <img className={`${style.image} ${style.Harsh}`}  src='/Ellipse 2.png' alt="Harsh Sinha" />
              <img className={`${style.image} ${style.Kaushiki}`}  src='/Ellipse 3.png' alt="Kaushiki" />
            </div>
            
            
            
      </main>
    </>
  )
}