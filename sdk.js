import axios from "axios"

window.sdk = {
  getHostname: function() {console.log("test")}
}
export {}

// function() {
//   return location.hostname !== "localhost" && location.hostname !== "local.docker" ? "http://api.susa.snappy.vn/api" : `http://${location.hostname}:6800/api`;
// }
