import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

// Card
const cardData = [
  {
    images:"./images/1.png",
    initalMark : "The", 
    title:"Algorithm",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus libero quasi quae dignissimos dolorum?",
  },
  {
    images:"./images/2.png",
    initalMark : "The", 
    title:"Data",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus libero quasi quae dignissimos dolorum?",
  },
  {
    images:"./images/3.png",
    initalMark : "The", 
    title:"Structure",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus libero quasi quae dignissimos dolorum?",
  },
  {
    images:"./images/4.png",
    initalMark : "The", 
    title:"Desgin",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus libero quasi quae dignissimos dolorum?",
  },
  {
    images:"./images/5.png",
    initalMark : "The", 
    title:"Analysis",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus libero quasi quae dignissimos dolorum?",
  },
]

export const Card = () => {

  useEffect(()=>{
    gsap.utils.toArray('.card').forEach(card=>{
      gsap.to(card,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger:card,
            start:"top 15%",
            end:"bottom 15%",
            markers:true,
            scrub:true
        }
     })
    })
  },[])
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-white pt-[20px]">
      Scroll Trigger Animation
    </h1>
    <main
      className="text-white w-full text-center flex flex-col gap-4 items-center py-[5vh]"
    >
      {
        cardData.map((card,index)=>{
          return(
             <div key={index}
        className="card sticky top-[5vh] flex flex-col items-center bg-[#2e251e] sm:w-[400px] w-[300px] rounded-[25px] py-[15vh] gap-4 px-[20px]"
      >
        <img src={card.images} alt="" className="w-[180px] aspect-square" />
        <h1 className="text-4xl font-thin">
          {card.initalMark} <br />
          <span className="font-bold">{card.title}</span>
        </h1>
        <p>
          {card.description}
        </p>
      </div>
          )
        })
      }
    </main>
    </>


   
  )
}
