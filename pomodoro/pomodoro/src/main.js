import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */

Vue.filter('lowercase', (key)=>{
  return key.toLowerCase()
})

Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})

Vue.filter('addspace', (value) => {
  return ' '+ value;
})

Vue.filter('leftpad', (value) => {
  if( value >= 10){
    return value;
  }
  return '0'+value;
})
new Vue({
  el: 'app',
  components: { App }
})