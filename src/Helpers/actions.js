const KEY_API = process.env.REACT_APP_CRUD_KEY
const API_URL = `https://crudcrud.com/api/${KEY_API}/News`

export const getAllNews = async () => {
     const result = {
          statusResponse: false,
          data: null,
          error: null
     }

     try {
          const response = await fetch(API_URL)
          result.data = await response.json()
          result.statusResponse = true
     } catch (error) {
          result.error = error
     }
     return result
}