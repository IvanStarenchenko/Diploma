import axios from 'axios';

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: `https://localhost:7201/api/`,
        headers: {"API-KEY" : "x5XlkaH4V0nfVjWee/DIlA=="}
    }
);


export const productsAPI = {
  getMenProducts(currentPage, pageSize){
    return instance.get(`users?pageNumber=${currentPage}&pageSize=${pageSize}`)
  },

  getProduct(productId){
       return instance.get(`product/` + productId)
   },  
}


export const loginAPI = {
  myself(){
    return instance.get(`users/me`)
  },
  login(email , password){
      return instance.post(`users/register` , {email , password })
  },
  logout(){
      return instance.delete(`users/register`)
  }
}


export const profileAPI = {
  getProfile(customerId){
      return instance.get(`users/` + customerId)
  },

  setProfileImage(image){
      let formData = new FormData()
      formData.append("image" , image)
      return instance.put(`/profile/photo/` , formData , {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
  },
  saveProfileChanges(profile){
      return instance.put('profile' , profile)
  }
}