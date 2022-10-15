import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

const Skill = ({ skill }) => {
  return (
    <div className='skill'>
      <FontAwesomeIcon icon={ faCode} />  
      <span>

        {
          skill
        }
      </span>
    </div>

  )
}

export default Skill