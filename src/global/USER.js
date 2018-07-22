import Cookies from 'js-cookie';

let USER = {
  setToken(str) {
    Cookies.set('token', str)
  },
  getToken(){
    return Cookies.get('token')
  },

  setLoginName(str){
    Cookies.set('loginName', str)
  },

  getLoginName() {
    return Cookies.get('loginName')
  },

  setPassword(str) {
    Cookies.set('password', str)
  },
  getPassword(){
    return Cookies.get('password')
  },

  logout(){
    Cookies.remove('token')
    Cookies.remove('loginName')
    Cookies.remove('password')
  }
}

export default USER
