import logo from '../../images/amcadev.png'
import data from './data'
import { IoIosColorPalette } from 'react-icons/IoIosColorPalette
import "./Navbar.css" 

const Navbar = () => {
  return (
  <nav>
      <div className="container Nav__container">
      <a href ="index.html" className='Nav__logo'>
      <img src={logo} alt="logo" />
      </a>
      <ul className='Nav__menu">
      {
        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
      </ul>
      <button id="theme__icon"><IoIosColorPalette></button>
      </div>
  </nav>
            
  )
}
export default Navbar
