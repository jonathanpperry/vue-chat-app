import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDs2zfDy1pG5pKmBZJJWTggP7yzBKsCYN4",
  authDomain: "vue-chat-8f583.firebaseapp.com",
  databaseURL: "https://vue-chat-8f583.firebaseio.com",
  projectId: "vue-chat-8f583",
  storageBucket: "",
  messagingSenderId: "439310740690",
  appId: "1:439310740690:web:a57751f788b7121f08510b"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
window.db = db;
db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
