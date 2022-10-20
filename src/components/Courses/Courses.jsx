import React from 'react'
import Course from './Course/Course'
import './Courses.css'
const Courses = () => {
     const coursesInfo = [
          {
               id: 1,
               name: 'Frontend',
               imageCourse: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg',
               teacher:"Steven Zuluaga Cortes",
               skills: ['HTML', 'CSS', 'JS']
          },
          {
               id: 2,
               name: 'Backend',
               imageCourse: 'https://media.istockphoto.com/photos/male-and-female-architects-in-office-working-at-desk-on-laptop-and-picture-id1317442297?k=20&m=1317442297&s=612x612&w=0&h=x3n617VWc2IPNyY9Z5Hypw30yLIhNu7JCO8LJ5s9XvU=',
               teacher:"Sergio Manrique",

               skills:['Node JS','MySQL','JS']
          },
          {
               id: 3,
               name: 'FullStack',
               imageCourse: 'https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg',
               teacher:"Jordan Rendon",

               skills: ['HTML', 'CSS', 'JS', 'Node JS', 'MySQL', 'JS']
          },
          {
               id: 4,
               name: 'Analista de Datos',
               imageCourse: 'https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg',
               teacher:"Estevenson Murillo",

               skills: ['Power BI', 'Excel', 'DAX','Informes']
          }
     ]


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