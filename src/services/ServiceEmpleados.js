import Global from "../Global";
import axios from "axios";

export default class ServiceCoches {
  getEmpleados = new Promise(function (resolve) {
    var request = "api/empleados/";
    var url = Global.urlApiEmpleados + request;
    var empleados = [];

    axios.get(url).then((response) => {
      empleados = response.data;
      resolve(empleados);
    });
  });

  findEmpleado(idEmpleado) {
    return new Promise(function (resolve) {
      var request = "api/empleados/" + idEmpleado;
      var url = Global.urlApiEmpleados + request;
      var empleado = [];

      axios.get(url).then((response) => {
        empleado = response.data;
        resolve(empleado);
      });
    });
  }

  getOficios = new Promise(function (resolve) {
    var request = "api/empleados/oficios";
    var url = Global.urlApiEmpleados + request;
    var oficios = [];

    axios.get(url).then((response) => {
      oficios = response.data;
      resolve(oficios);
    });
  });

  getEmpleadosOficio(oficio) {
    return new Promise(function (resolve) {
        var request = "api/empleados/empleadosoficio/"+ oficio;
        var url = Global.urlApiEmpleados + request;
        var empleados = [];

        axios.get(url).then(response => {
            empleados = response.data;
            resolve(empleados)
        })
    });
  }
}
