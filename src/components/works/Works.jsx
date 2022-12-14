import { useState } from 'react'
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: "assets/camclip.png",
      title: "Bio",
      desc: 
      "My Name is OMEJE REMMY IFEANYI JNR, a Software Engineer from Lagos, Nigeria. December 2021, i graduated from Augustine University with a Second Class Honors BSc Computer Science.",
      img: 
      "https://i.pinimg.com/564x/6b/22/db/6b22db6acc461701e55527d45eff3790.jpg"
    },
    {
      id: "2",
      icon: "assets/camclip.png",
      title: "Skills",
      desc:
      "HTML & CSS, JavaScript, Java, TypeScript, React, Node, MongoDb, Git, Visual Studio Code, WordPress",
      img: 
      "https://i.pinimg.com/564x/05/4a/2e/054a2eaee91d7265dfe61228c27fbc00.jpg"
    },
    // {
    //   id: "3",
    //   icon: "assets/laptop.png",
    //   title: "Experience",
    //   desc: 
    //   "1year experience with react js/ts. ",
    //   img: 
    //   "https://i.pinimg.com/564x/19/5f/0e/195f0eac6e02097facf13cc5f12a6095.jpg",
    // },
  ]

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div 
      className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >

        {data.map((d)=>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div> */}
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
            {/* <div className="right">
              <img 
              src={d.img}
              alt="" 
              />
            </div> */}
          </div>
          
        </div>
        ))
        }
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=> handleClick()}/>
    </div>
  )
}
