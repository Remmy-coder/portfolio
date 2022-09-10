import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react';
import { 
  featuredPortfolio,  
  backend, 
  frontend,
  problemsolve
} from '../../data';

export default function Portfolio() {

  const  [selected, setSelected] = useState('featured');
  const [data, setData] = useState([])
  

  const list = [{
    id: 'featured',
    title: 'Featured',
  }, 
  {
    id: 'frontend',
    title: 'Front End',
  }, 
  {
    id: 'backend',
    title: 'Back End',
  },
  {
    id: 'problemsolve',
    title: 'Problem Solver',
  },
  ]

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
        case "frontend":
        setData(frontend);
        break;
        case "backend":
        setData(backend);
        break;
        case "problemsolve":
        setData(problemsolve);
        break;
        case "wedding":
        default:
          setData(featuredPortfolio);
    } 
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>{
          return (
            <PortfolioList  
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          )
        })}
      </ul>
      <div className='container'>
        {data.map((d) =>(
        <div className='item'>
          <img 
          src={d.img}
          alt='' />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
  