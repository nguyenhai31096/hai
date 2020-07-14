import axios from 'axios';

window.SdkModule = (function() {
  function init() {
    console.log("init")
    const url = `http://0.0.0.0:6800/api/notify/get_notify`
    return axios
    .get(url, { params })
    .then(res => res.data && res.data.data)
    .catch(error => {
      console.log("error", error);
      return [];
    });
  }
})();

(function() {
  window.psdk = SdkModule;
})();
