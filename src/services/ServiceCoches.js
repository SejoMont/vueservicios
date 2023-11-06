import Global from "../Global";
import axios from "axios";

export default class ServiceCoches {
  getMetodoParametros(param1) {
    return new Promise(function (resolve) {
      resolve("OK" + param1);
    });
  }

  getCoches = new Promise(function (resolve) {
    var request = "/webresources/coches";
    var url = Global.urlApiCoches + request;
    var coches = [];

    axios.get(url).then((response) => {
      coches = response.data;
      resolve(coches);
    });
  });
}
