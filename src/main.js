import Vue from 'vue'
import Formulario from './components/Formulario.vue'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
new Vue({
  el: '#app',
  components:{
    Formulario,
  }
})
