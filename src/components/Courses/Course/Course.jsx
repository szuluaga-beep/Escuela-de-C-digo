import React from 'react'
import './Course.css'
import Skill from './Skill/Skil'

const Course = ({ course: { id, name, imageCourse, teacher, skills } }) => {
     return (
          <section className='course'>
               <img className='image-course' src={imageCourse} alt={name} />
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