import React, { useEffect, useState } from 'react'
import { getAllNews } from '../../Helpers/actions'
import NewCard from './New/NewCard'
import './News.css'

const News = () => {
     const [newsData, setnewsData] = useState([])
     useEffect(() => {
          (async () => {
               const result = await getAllNews()
               result.statusResponse && setnewsData(result.data)
          })()
     }, [])

     return (
          <div id='Noticias'>
               <h1 className='title-courses'>Noticias</h1>
               <section className="container-news">

               {
                   newsData.length===0?<h1>No hay noticias</h1>:
                    newsData.map(newData => (
                    
                         <div key={newData._id}>
                         

                              <NewCard newsData={newData} />
                         </div>
                    ))
               }
               </section>
          </div>
     )
}

export default News