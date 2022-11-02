import React from 'react'
import './NewCard.css'

const NewCard = ({ newsData: { _id, name, imageNew, Date, author } }) => {
     return (
          <div className='card-new'>
               <h1 className='titulo-noticia'>
                    {name}
               </h1>
               <img
                    className='imagen-noticia'
                    src={imageNew}
                    alt={name}

               />
               <span>
                    {
                         author
                    }
               </span>
               <p>
                    { Date}
               </p>
          </div>
     )
}

export default NewCard