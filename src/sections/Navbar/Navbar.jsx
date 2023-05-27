import logo from '../../images/amcaweb1.png'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './Navbar'


const Navbar = () => {
  return (
     <nav>
      <div className="container Nav__container">
      <a href ="index.html" className='Nav__logo'>        
      <img src={logo} alt="logo" />
      
      </a> 
      <ul className="Nav__list"> 
       {data.map(item =><li key={item.id}><a href={item.link}>{item.title}</a></li>)}       
      </ul>
       <button><IoIosColorPalette></IoIosColorPalette></button>
      </div>
      </nav>
  )
    }

export default Navbar
