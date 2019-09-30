import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD0pLytZQigGh8wSfM6lhrb_71jY1ggGTA",
  authDomain: "damportafolio91.firebaseapp.com",
  databaseURL: "https://damportafolio91.firebaseio.com",
  projectId: "damportafolio91",
  storageBucket: "",
  messagingSenderId: "300702085911",
  appId: "1:300702085911:web:3a07185bf6f8c64e3d3d52",
  measurementId: "G-TFF2S65KF5"
};

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
