<template>
  <div>
    <h1>Api Coches</h1>
    <hr>
    <div v-for="car in coches" :key="car">
      <h1 style="color:purple">{{ car.marca }}, {{ car.modelo }}</h1>
      <h2 style="color:darkslateblue">Conductor: {{ car.conductor }}</h2>
      <img :src="car.imagen" style="width: 150px;">
      <hr>
    </div>
  </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches'
const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted(){
    // una promesa no es un metodo, es un objeto
    service.getCoches.then(result => {
      this.coches = result;
    })

    service.getMetodoParametros("dato2").then(result => {
      console.log(result)
    })
  }
};
</script>