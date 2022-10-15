import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
                         <li className='item-navbar'><a className='link-item' href='#Cursos'>Carreras</a></li>
                         <li className='item-navbar'><a className='link-item'  href='#Noticias'>Noticias</a></li>
                         
                    </ul>
                   
               </div>
               <a href='#Login' className='link-item'>
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.8rem' }} />

               </a>
          </nav>
     )
}

export default Navbar