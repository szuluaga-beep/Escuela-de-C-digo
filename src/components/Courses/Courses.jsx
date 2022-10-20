import React from 'react'
import Course from './Course/Course'
import './Courses.css'
import coursesInfo from '../../Assets/Helpers/Cursos'

const Courses = () => {

 return (
          <div id='Cursos'>
               <h1 className='title-courses'>Carreras</h1>
               <div className='container-courses'>
                    {
                         coursesInfo.map(course => (
                              <div key={course.id}>

                                   <Course course={course} />
                              </div>
                         ))
                    }
               </div>



          </div>
     )
}

export default Courses