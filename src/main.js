import Vue from 'vue'
import Formulario from './components/Formulario.vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { store } from './store';

new Vue({
  el: '#app',
  store,
  components:{
    Formulario,
  }
})
