<template>
  <div>
    <h1>Empleados Oficio</h1>
    <br />
    <table
      class="table table-striped text-center"
      style="width: 70%; margin: 0 auto"
    >
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado">
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const service = new ServiceEmpleados();

export default {
  name: "EmpladosOficio",
  data() {
    return {
      empleados: [],
    };
  },
  methods: {
    loadEmpleados() {
      var oficio = this.$route.params.oficio;

      service.getEmpleadosOficio(oficio).then((result) => {
        this.empleados = result;
      });
    },
  },
  mounted() {
    this.loadEmpleados();
  },
  watch: {
    "$route.params.oficio"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadEmpleados();
      }
    },
  },
};
</script>