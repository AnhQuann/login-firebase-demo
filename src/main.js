import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false

let app = '';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHQTIcJdAAy2cMjmiTSFBnhNLjWL_W74E",
    authDomain: "login-firebase-vue.firebaseapp.com",
    databaseURL: "https://login-firebase-vue.firebaseio.com",
    projectId: "login-firebase-vue",
    storageBucket: "login-firebase-vue.appspot.com",
    messagingSenderId: "214529547258"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});



