import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      step:1,
      totalSteps:5,
      errors:[],
      total:0,
      prevTotal:0,
      form: {
          bandejaSeleccionada : null,
          tamanio:null,
          tazaOmate:null,
          globo:null
      },
    },
    getters:{
      getTotalSteps(state){
        return state.totalSteps
      }
    },
    mutations: {
      updateBandeja(state,bandeja)
      {
            state.form.bandejaSeleccionada = bandeja
      },
      selectSize(state,payload)
      {
            state.form.tamanio = payload.size
            state.total = payload.total
            state.prevTotal = payload.total
      },
      plus(state,producto)
      {
            state.total = state.prevTotal + 200
            state.form.tazaOmate = producto
      
            //state.form.tazaOmate = plusPrice
           
      },
      restarPlus(state,producto)
      {
            state.total -= 200
            state.form.tazaOmate = producto
            //state.form.tazaOmate = plusPrice
           
      },
      addStep(state)
      {
            //checkear q los pasos no sean mas que el total
            if(state.step <= state.totalSteps)
            {
                  state.step++
            }     
      },
      removeStep(state)
      {
            //checkear q los pasos 
            state.step--
      },
    }
  })