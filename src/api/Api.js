import axios from 'axios';

const instance = axios.create(
    {
        withCredentials:true,
        baseURL: `https://localhost:7189/api/`,
        headers: {
          'Content-Type': 'application/json',

        }
    }
);

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMjNiM2FkOS1kMzg4LTQyOWUtOWZlNC03NDlkOWM1OGFjZTQiLCJqdGkiOiJKVEliZmY1NzdhMC01NGYyLTRlMWItODQ3Ni1iYTgxYjA1MGEyNDciLCJuYmYiOjE3MTQ2NjkwOTAsImV4cCI6MTcxNDY3MjY5MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.tMvrQS4A-swy0n5FIHyRlJsLBtgDsbOrxsFJAByBZvhGU0kRx2cBM-P85QoiA0U09LsRRRZ_ZVJwPNYY29Z2IVjN_BooR_eI4eZ91li6kuezoD_4SJ5UEdzKqKT8fZiVXz5MLbRoqj94Ve4tvOCuxt_c5i_I_8HxFbalEcmgZ4-ZeAI6wPTzyGUU5LChzWMA0pNJojymMsKbz6TARAkeV_MsVoS13jyoyEb8STlljBFSnxlPTQ4dzaUexb9Zy8hyAEcbzYPm6IrQoIWCpERZrzk4IX2p7vy-UYKpFQoqb-ONIhEjBajESb7roY2SWePzlukD1HGo0AN-ogSQENh_iw';

instance.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const productsAPI = {
  getMenProducts(){
    return instance.get(`Products/Sort`);
  },

  getProductById(productId){
       return instance.get(`Products/${productId}`)
   },  
}


export const loginAPI = {
  login(email , password){
      return instance.post(`auth/authenticate` , {
        email,
        password,
    })
  },
  logout(){
      return instance.delete(`auth/authenticate`)
  }
}


export const profileAPI = {
  getProfile(){
      return instance.get(`Customer/getUserById`)
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