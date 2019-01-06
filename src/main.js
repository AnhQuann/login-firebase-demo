import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false

let app = '';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPO4o2IFz6XP6pngXCIsgfPrxAvSzPA4I",
  authDomain: "login-firebase-demo.firebaseapp.com",
  databaseURL: "https://login-firebase-demo.firebaseio.com",
  projectId: "login-firebase-demo",
  storageBucket: "login-firebase-demo.appspot.com",
  messagingSenderId: "609306869040"
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



