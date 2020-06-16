<template>
  <div>
    <section>
      <div class="producto_header">
        <h4
          class="producto_header_description"
        >Excelente opción para llevar a todos lados. Luego de la selección del modelo podes seleccionar la Taza o Mate.</h4>
      </div>
      <div class="producto producto_tamanio">
        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh5.googleusercontent.com/pMYWSNGafIIjUPGFo29JSO8AZUA1kGc5j7_so9uIpAcUee7NovGLTOcplhdgzgNb9xNWk6Y6dp_tBtjGPUHvJc-dWiYF4Jb3DlJ9HsBLdHC85DzqfT_I7ER3BclO=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="tamanio"
              id="grande"
              value="Grande"
              v-model="form.tamanio"
              @change="selectSize(800,'Grande')"
            />
            <label
              for="grande"
            >GRANDE | $800 en EFECTIVO | Taza o Mate a elección + Galletas Pitusas + bizcochitos + pic nic + chicle emoji + gomitas fini + bombón obli bon + alfajor minyo + botella Pepsi + golosina malvavisco + cubanitos + dancig + orange pie + galleta polvorita + dorins + caramelo masticable + caramelos Billiken + pink pie + conito dulce de leche + turron y maní + leche descremada + té + azúcar + chocolate submarino.</label>
          </div>
        </div>

        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="tamanio"
              id="gigante"
              value="Gigante"
              v-model="form.tamanio"
              @change="selectSize(1100,'Gigante')"
            />
            <label
              for="gigante"
            >GIGANTE | $1100 en EFECTIVO | Taza o Mate a elección + Turrón y mani + monedas de chocolate + oblea polvorita + cubanitos + alfajor minyo + tita + bombón obli bon + orange pie + pink pie + dorins + pic NIC + caramelo masticable + botella Pepsi golosina + dulce de leche + mermelada + dancig + palito para untar + taza o mate + jugo pepito + malvavisco + mini Coronitas + gomitas fini + bizcochitos + conito dulce de leche + paraguitas + caramelos Billiken + chocolate submarino + leche descremada + azúcar + té + chicle emoji + cucharita.</label>
          </div>
        </div>

        <div class="producto_container">
          <div class="producto_imagen">
            <img
              src="https://lh6.googleusercontent.com/YVXDyKK3bqs74Uy5yWjrFOVDBf_WSnQhjacSv1SzbVFFHwPOr0M2EuP-63IB1JsmfPoAzooVarR-QVgv2XE0yT29331eMIuY-CnuUYiOKtyCXq-1XGj6pzrlc5Ej=w260"
              alt
            />
          </div>
          <div class="producto_meta">
            <input
              type="radio"
              name="premium"
              id="gigante"
              value="Premium"
              v-model="form.tamanio"
              @change="selectSize(1500,'Premium')"
            />
            <label
              for="premium"
            >PREMIUM | $1500 en EFECTIVO | Taza Artesanal o Set Matero + Mini coronitas + gomitas yumy + pepitos + malvavisco + pink pie + tita + kroony blanco + sapito + conito dulce de leche + hababitos + bon o bon + dancig + mini oreo + paraguitas + jugo pepito + bubbalo + dulce de leche + mermelada frutilla + gomitas fini + chocolinas + marroc + cubanitos + turron y maní + chocolate submarino + leche descremada + azucar + te + kooky bon + mate cocido + caramelosmasticable + palito para untar + cucharita + alfajor tofi + moneda de chocolate + taza o mate.</label>
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
         
      }
    };
  },
  
  methods: {
    selectSize:function(newPrice,size)
    {
      this.$store.commit('selectSize', {
        size:size,
        total:newPrice,

      })
    }
  }
};
</script>