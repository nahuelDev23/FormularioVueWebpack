<template>
    <div id="formulario">
      <span>Bandeja: {{ this.$store.state.form.bandejaSeleccionada }}</span>
      <span>Total: {{ this.$store.state.total }}</span>
      <span>Tamaño: {{ this.$store.state.form.tamanio }}</span>
      <span>Taza o Mate: {{ this.$store.state.form.tazaOmate }}</span>
        <div v-if="this.$store.state.step == 1">
          <PasoUno></PasoUno>
        </div>
        <div v-if="this.$store.state.step == 2 && this.$store.state.form.bandejaSeleccionada == 'bandejaSinPatas' ">
          <!-- bandeja sin patas -->
          <PasoDosSinPatas></PasoDosSinPatas>
          <!-- bandeja con patas -->
        </div>
        <div v-if="this.$store.state.step == 3 && this.$store.state.form.bandejaSeleccionada == 'bandejaSinPatas' ">
          <!-- bandeja sin patas + taza o mate -->
          <PasoTresSinPatas></PasoTresSinPatas>
        </div>
         <button v-if="this.$store.state.step != 1" @click.prevent="previusStep">volver</button>
         <button v-if="this.$store.state.step != this.$store.getters.getTotalSteps" @click.prevent="nextStep">Siguiente</button>
        <button v-if="this.$store.state.step == totalSteps" @click.prevent="sendPedido">Pedir producto</button>
    </div>

</template>

<script>
import PasoUno from './PasoUno.vue'
import PasoDosSinPatas from './PasoDosSinPatas.vue'
import PasoTresSinPatas from './PasoTresSinPatas.vue'
export default {
  name: 'formulario',
  components:{
    PasoUno,
    PasoDosSinPatas,
    PasoTresSinPatas,
  },
  
  data () {
      return {
        //step:1,
        totalSteps:5,
        errors:[],
        total:0,
        prevTotal:0,
        form: {
            tamanio:null,
            tazaOmate:null,
            globo:null
        },
      }
  },
  methods: {
      nextStep: function() {
      this.errors = null;
      if (this.$store.state.step == 1) {
        if (!this.$store.state.form.bandejaSeleccionada) {
          this.errors = "Porfavor seleccione un producto";
          return false;
        }
      }
/*
      if (this.step == 2) {
        if (!this.form.tamanio) {
          this.errors = "Porfavor seleccione el tamaño ";
          return false;
        }
      }
      if (this.step == 3) {
        if (!this.form.tazaOmate) {
          this.errors = "Porfavor seleccione una taza o un juego de mate ";
          return false;
        }
      }
     */
      //this.step++; 
      //this.$store.state.step = this.step++;
      this.$store.commit('addStep')
    },
    previusStep: function() {
      //this.step--;
      this.$store.commit('removeStep')
    },
    sendPedido: function() {
      alert("enviado");
    }
  }
}
</script>

<style lang="scss">

</style>