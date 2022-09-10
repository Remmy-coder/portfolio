import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id: "1",
      name: "Remmy-Coder",
      title: "Personal Repo",
      img: 
      "https://i.pinimg.com/564x/28/26/bf/2826bf19ba7b3644b5ea908e904442f1.jpg",
      icon: "assets/twitter.png",
      desc:
      "github.com/Remmy-coder",
      featured: true,
      link: "https://github.com/Remmy-coder"
    },
    {
      id: "2",
      name: "RemmyCodes",
      title: "Offical Repo",
      img: 
      "https://i.pinimg.com/564x/df/c9/eb/dfc9ebf7bcfb7a90ec2932942194be19.jpg",
      icon: "assets/youtube.png",
      desc: 
      "github.com/RemmyCodes",
      link: "https://github.com/RemmyCodes",
    },
  ]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Repositories</h1>
      <div className="container">
        {data.map(d=>(
        <div className={d.featured ? "card featured" : "card"}>
          {/* <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img 
            className="user" 
            src={d.img}
            alt="" 
            />
            <img className="right" src={d.icon} alt="" />
          </div> */}
          <div className="center">
            <a href={d.link} style={{textDecoration: "none", color: "black"}}>{d.desc}</a>
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
