import React from 'react'
import Logo from '../../Assets/img/Logo.png'
import './Navbar.css'

const Navbar = () => {
     return (
          <nav className='navbar'>
               <div >
                    <img className='logo-navbar' src={ Logo} alt='Logo de la escuela de código C13'/>
               </div>
               <div>
                    <ul className='items-navbar'>
                         <li className='item-navbar'><a className='link-item' href='#Slider'>Sobre nosotros</a></li>
                         <li className='item-navbar'><a className='link-item' href='#About'>Carreras</a></li>
                         <li className='item-navbar'><a className='link-item'  href='#'>Noticias</a></li>
                         
                    </ul>
               </div>
          </nav>
     )
}

export default Navbar