import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
const instance = axios.create(
    {
        withCredentials:true,
        baseURL: `https://localhost:7189/api/`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,

        }
    }
);


instance.interceptors.request.use(
    (config) => {
        const currentToken = localStorage.getItem('accessToken');
        if (currentToken) {
            config.headers.Authorization = `Bearer ${currentToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const productsAPI = {
  getProducts(category){
    return instance.get(`Products/getByCategory/${category}`);
  },

  getProductById(productId){
       return instance.get(`Products/${productId}`)
    },  
  getProductByName(productName){
       return instance.post(`Products/search?productName=${productName}`  )
    },  

}


export const loginAPI = {
  login(email , password){
      return instance.post(`auth/authenticate` , {
        email,
        password,
    })
  },
  registration(email , password , confirmPassword){
      return instance.post(`auth/register` , {
        email,
        password,
        confirmPassword,
    })
  },
  logout(){
      return instance.post(`auth/authenticate`)
  }
}


export const profileAPI = {
  getProfile(){
      return instance.get(`Customer/getUserById`)
  },
  setNewInfo(data){
      return instance.put(`Customer/updateUserInfo`, {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        email: data.email,
        phone: data.phone,
        streetAddress: data.streetAddress,
        city: data.city,
        postalCode: data.postalCode,
      })
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
export const reviewsAPI = {
  getReviews(productId){
      return instance.get(`Reviews/?id= ${productId}`)
  },
  postReviews(productId , comment){
      return instance.post(`Reviews`, {productId , comment} )
  },
  deleteReviews(productId){
      return instance.delete(`Reviews/?id${productId}`)
  },

} 