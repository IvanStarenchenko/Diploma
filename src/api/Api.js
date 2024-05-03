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

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MDI3YThiYS1kNmZiLTRlNGItYThiMi0wMzAwZTc3M2JmMGYiLCJqdGkiOiJKVElkMDJlMmZmZi04NTI5LTQyODAtYTE1Ni1kNjMwM2ZkNTk1NGYiLCJuYmYiOjE3MTQ3NTE3MTIsImV4cCI6MTcxNDc1NTMxMiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.g10r6fhTf-_qPBqnCuDpmLjiIY9cbF2wGNj5iQI5aA1hBrPIAQ-ICOVOWpNbNcANqfG5TCKV4ObqS8Tv51LoNsHcvGci__m3X6KGXfh4LANo8J2RhfsxBC4C8wDbvUE3gAmWtuBlFWuXPYdyg0PBhOcS32TU77U2VbEPexAqXbb1k5Lt5qAijHyhRe6721PJPYE6qS0lhamrdgXJPkQUe5TI1qxmX6RAm1n89V4CZf7chA0gGKWaQVGR1v23rT0G9KfcEjDlyezRUjnpguq7kJIVf-x_VgKrCKSrC3ZzfbPdz7tmrubdXFWPd8NWNCP8w2w0txUMC5rLktOZeJVIWw';

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
//   setColor(productId , color){
//        return instance.put(`Products/${productId}`, {
//         color,
//     })
//    },  
//   setSize(productId , size){
//        return instance.put(`Products/${productId}`, {
//         size,
//     })
//    },  
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