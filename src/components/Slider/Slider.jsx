import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import './Slide.css'
const Slider = () => {
  const news = [{
    id: 1,
    name: 'Noticia 1',
    urlImagen: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg'
  },
  {
    id: 2,
    name: 'Noticia 2',
    urlImagen: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
  },
  {
    id: 3,
    name: 'Noticia 3',
    urlImagen: 'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg'
  },
  ];
  return (<div>
    

    <Slide>

      {
        news.map(noticia => (
          <div key={noticia.id}>
            <div className='each-slide-effect' >
              <img src={noticia.urlImagen} className='image' alt='dhajsdh' />

              <a href={noticia.urlImagen}>
                {`Ver ${noticia.name}`}
              </a>
            </div>
          </div>
        ))

      }
    </Slide>
  </div>
  )
}

export default Slider