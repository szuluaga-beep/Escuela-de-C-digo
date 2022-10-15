import React from 'react'

const Titulo = ({titulo}) => {
     return (
          <div>
               <h1 style={{ fontSize: '7rem', textAlign: 'center', fontFamily: 'coogose-thin' }}
               ><span style={{ color: '#ffcb05', fontSize: '5rem', fontFamily: 'coogose-bold' }}>{titulo}</span> Comuna 13</h1>
          </div>
     )
}

export default Titulo