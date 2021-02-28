import Vue from 'vue';
import App from './App.vue';
import constPlugin from './plugins/const-plugin.js';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(constPlugin);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC0m6cM1EYezpN9-QyEQEO8BRAxWQah9UM',
  },

  installComponents: true
});

new Vue({
  render: h => h(App),
}).$mount('#app');
