window.SdkModule = (function() {

  function httpGet(url) {
    return fetch(url, {
      headers: headers
    })
    .then(checkHttpStatus)
  }

  function init() {
    console.log("init")
    let url = `http://0.0.0.0:6800/api/notify/get_notify`
    return httpGet(url)
    .then(data => {
      if (data.success) {
        console.log(data)
      }else {
        console.log("false")
      }
    })
    .catch(err => console.log(err))
  }
})();

(function() {
  window.psdk = SdkModule;
})();
