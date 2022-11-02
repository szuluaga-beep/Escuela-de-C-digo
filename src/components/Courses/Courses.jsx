import React, { useState, useEffect } from 'react'
import { getAllCourses } from '../../Helpers/actions'
import  Course  from './Course/Course'
import './Courses.css'

const Courses = () => {
     const [newsData, setNewsData] = useState([])
     useEffect(() => {
          (async () => {
               const result = await getAllCourses()
               
               result.statusResponse && setNewsData(result.data)
               
          })()
     }, [])

     return (

          <div id='Cursos'>
               <h1 className='title-courses'>Carreras</h1>
               <div className='container-courses'>
                    {
                         newsData.length === 0 ?
                              <h1>No hay carreras</h1>:
                              newsData.map(course => (
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