import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { getAllNews } from '../../Helpers/actions'

import './Slide.css'
const Slider = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {

    (async () => {
      const result = await getAllNews()

      result.statusResponse && setNewsData(result.data)
      
    })()
  }, [])

  return (<div>


    <Slide>

      {
        newsData.length===0?null:
        newsData.map(noticia => (
          <div key={noticia._id}>
            <div className='each-slide-effect' >
              <img src={noticia.imageNew} className='image' alt='dhajsdh' />

              <a href={noticia.name}>
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