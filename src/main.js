import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPopper } from '@popperjs/core';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(router);

// Call createPopper in the mounted hook of the App component
app.mounted = function() {
  const button = document.querySelector('#button');
  const tooltip = document.querySelector('#tooltip');
  createPopper(button, tooltip);
}

app.mount("#app");
