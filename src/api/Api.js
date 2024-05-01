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

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMjNiM2FkOS1kMzg4LTQyOWUtOWZlNC03NDlkOWM1OGFjZTQiLCJqdGkiOiJKVEllZjcxN2RjYS02YmFmLTQ3NGItOTQ1Yy0yMzVkNmIzMmY3NWEiLCJuYmYiOjE3MTQ1Nzk4NjEsImV4cCI6MTcxNDU4MzQ2MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCJ9.rWylBii3Z1WvIqWNxKjK4gY2JjvL_PktuzMHGd-0XXSs_pHFldAi-BG1Hr_nPk-e1E0JdWYuJxBNx3rcF7Ftot7qt0G---Ta1mrWcLSpPHTPbWLh9POt-TdVdyX7uxA9gTkpS82L39r7E1NSkz2rQp-9nlBKN7gLSTpPsBEYUquPHLGd6GAg34qyHJHvcfW7_CYssVffBeKJPEYXebS5EaB6o1l8fBmdo-qxneieBXUwDUjL_EfFqlEoHS3gUthL7SDkPKKtmDPa9BccVQ5Cuv0CFaD10cxm5ppffPAznOEEs7MWt8XtLbwn8OV90zBFhHTuzuXgEXQoHxbCy2J4pw';

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