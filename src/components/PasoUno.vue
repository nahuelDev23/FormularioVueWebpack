<template>
  <div>
    <section>
      <h2>¿Que opción prefieres?</h2>
      <h3>La bandeja puede venir de carton o de madera. Contamos con opciones de GRANDE, GIGANTE y PREMIUM en sus dos opciones.</h3>
      <div class="producto">
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="bandeja"
              id="bandejaSinPatas"
              value="bandejaSinPatas"
              v-model="form.bandejaSeleccionada"
              @change="updateBandeja"
            />
            <label for="bandejaSinPatas">Desayuno en BANDEJA | Entre $800 y $1500 (EFECTIVO)</label>
          </div>
        </div>
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh5.googleusercontent.com/KAqLYd6y-6EQfNOGOAEKqoLIoHV7VMb4CGl3qT2rphY2CynM54saE2ckCvBQHN09avKueaXgCuPvyhXOTYyqZ5hxzWfKV8xAzWaVKSR8OHRIRmslTBzHdrIOQ0as=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="bandeja"
              id="bandejaConPatas"
              value="bandejaConPatas"
              v-model="form.bandejaSeleccionada"
              @change="updateBandeja"
            />
            <label
              for="bandejaConPatas"
            >Desayuno en BANDEJA con PATAS | Entre $1500 y $3000 (EFECTIVO)</label>
          </div>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
         bandejaSeleccionada : null,
      }
    };
  },
  
  methods: {
    updateBandeja:function()
    {
      this.$store.commit('updateBandeja', this.form.bandejaSeleccionada)
    }
  }
};
</script>