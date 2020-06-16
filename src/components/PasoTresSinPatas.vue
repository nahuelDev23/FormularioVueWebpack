<template>
  <div>
    <section>
      <div class="producto_header"></div>
      <!--TAZAS-->
      <div class="producto_carrusel">
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src=""
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="tazaOmate"
              id="nogracias"
              value="no"
              @change="restarPrecio"
            />
            <label for="tazaOmate0">No, gracias</label>
          </div>
        </div>
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh3.googleusercontent.com/JDpEpA0zG-KusmGuhD3AbQ5ol9NPj3IYt1fqST6offVwSOuZMfamNTfjuYw_Bs9ydcvSB8msGMgCbv6K1VCFCBqfZW5jCB7h0W84e-ONLFjUv6Au08ApDYqXstRH=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="tazaOmate"
              id="tazaOmate1"
              value="taza1"
              @change="plus"
            />
            <label for="tazaOmate1">Taza 1 - Papa sos mi Rockstar.</label>
          </div>
        </div>
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh3.googleusercontent.com/JDpEpA0zG-KusmGuhD3AbQ5ol9NPj3IYt1fqST6offVwSOuZMfamNTfjuYw_Bs9ydcvSB8msGMgCbv6K1VCFCBqfZW5jCB7h0W84e-ONLFjUv6Au08ApDYqXstRH=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="tazaOmate"
              id="tazaOmate2"
              value="taza2"
              @change="plus"
            />
            <label for="tazaOmate2">Taza 2 - Sos un loro.</label>
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
      
    };
  },

  methods: {
    /*
    updateBandeja: function() {
      this.$store.commit("updateBandeja", this.form.bandejaSeleccionada);
    }
    */

   plus:function(){
      
      this.$store.commit('plus');
      
    },
    restarPrecio:function()
    {
        if(this.$store.state.prevTotal < this.$store.state.total)
        {
              this.$store.commit('restarPlus');  
        }
        
    }
  }
};
</script>