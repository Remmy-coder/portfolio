import './topbar.scss'
import {Person, Mail, MonochromePhotos, FilterDrama} from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <FilterDrama style={{fontSize: "50px", paddingRight: "5px"}}/>
                <a href='#intro' className='logo'>Pape.</a>
                <div className='itemContainer'>
                    <Person className='icon'/>
                    <span>+234 810 658 2590</span>
                </div>
                <div className='itemContainer'>
                    <Mail className='icon'/>
                    <span>remmy.ro@gmail.com</span>
                </div>
            </div>
            <div className='right'>
                <div className='hamburger' onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
 