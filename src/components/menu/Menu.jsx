import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen}) {
    const menuClose = () => {
        setMenuOpen(false)
    }
  return (
    <div className={'menu ' +(menuOpen && 'active')}>
        <ul>
            <li onClick={()=>menuClose()}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>menuClose()}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>menuClose()}>
                <a href="#works">About</a>
            </li>
            <li onClick={()=>menuClose()}>
                <a href="#testimonials">Repositories</a>
            </li>
            <li onClick={()=>menuClose()}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
