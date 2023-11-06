<template>
  <div>
    <h1>Home</h1>
    <h2>{{ mensaje }}</h2>
  </div>
</template>
  
<script>
import ServiceEjemplo from "../services/ServiceEjemplo";
// para utilizar un servicio, debemos crear una constante que esa ojeto de la clase service
const service = new ServiceEjemplo();

export default {
  name: "ComponenteHome",
  mounted() {
    this.mensaje = service.getSaludo("Sejo");
  },
  data() {
    return {
      mensaje: "",
    };
  },
};
</script>