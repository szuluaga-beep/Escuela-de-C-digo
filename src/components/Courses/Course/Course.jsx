import React from 'react'
import './Course.css'
import Skill from './Skill/Skil'

const Course = ({ course: { _id, name, teacher, imgCareer,program, skills } }) => {
     return (
          <section className='course'>
               <img className='image-course' src={imgCareer} alt={name} />
               <div>
                    <span className='title-course'>
                         {name}
                    </span>
                    <p className='description-course'>
                         {
                              teacher
                         }
                    </p>
                    <div className='container-skills'>

                    {
                         skills.map((skill,index) => (
                              <div key={index} >

                              <Skill skill={skill} />
                              </div>
                         ))
                    }
                    </div>
               </div>

          </section>
     )
}

export default Course