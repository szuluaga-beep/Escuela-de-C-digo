const KEY_API = process.env.REACT_APP_CRUD_KEY
const API_URL = `https://crudcrud.com/api/${KEY_API}`

export const getAllNews = async () => {
     const result = {
          statusResponse: false,
          data: null,
          error: null
     }

     try {
          const response = await fetch(`${API_URL}/News`)
          result.data = await response.json()
          result.statusResponse = true
     } catch (error) {
          result.error = error
     }
     return result
}

export const getAllCourses = async () => {
     const result = {
          statusResponse: false,
          data: null,
          error: null
     }

     try {
          const response = await fetch(`${API_URL}/careers`)
          result.data = await response.json()
          result.statusResponse = true
     } catch (error) {
          result.error = error
     }
     return result
}