<template>
  <div>
    <h1>Empleados Detalle</h1>
    <form v-on:submit.prevent="buscarEmpleado()">
      <label>Seleccione un empleado </label>
      <select
        v-model="idEmpleado"
        class="form-control"
        style="width: 70%; margin: 0 auto"
      >
        <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
          {{ emp.apellido }}
        </option>
      </select>
      <br />
      <button class="btn btn-outline-success">Detalles</button>
    </form>
    <div v-if="empleado">
      <h2>{{ empleado.apellido }}</h2>
      <dl>
        <dt>Oficio:</dt>
        <dd>{{ empleado.oficio }}</dd>
        <dt>Salario:</dt>
        <dd>{{ empleado.salario }}</dd>
        <dt>Departamento:</dt>
        <dd>{{ empleado.departamento }}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const service = new ServiceEmpleados();

export default {
  name: "EmpleadosDetalle",
  data() {
    return {
      empleados: [],
      empleado: null,
      idEmpleado: 0,
    };
  },
  methods: {
    buscarEmpleado() {
      service.findEmpleado(this.idEmpleado).then((result) => {
        this.empleado = result;
      });
    },
  },
  mounted() {
    service.getEmpleados.then((result) => {
      this.empleados = result;
    });
  },
};
</script>