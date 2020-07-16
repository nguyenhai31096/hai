window.SdkModule = (function() {
  
  const headers = {
    'Accept': 'application/json',
  };
  
  function getHostname() {
    return location.hostname !== "localhost" && location.hostname !== "local.docker" ? "http://api.susa.snappy.vn/api" : `http://${location.hostname}:6800/api`;
  }

  function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      var isJSON = true;
      var result;
  
      try {
        result = response.json();
        result.success = false;
      } catch (e) {
        isJSON = false;
      }
  
      if (isJSON) {
        return result;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }
  
  function httpGet(url) {
    return fetch(url, {
      headers: headers
    })
    .then(checkHttpStatus)
  }

  function init() {
    console.log("init")
    let url = `${getHostname()}/notify/get_notify`
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
  
  return {
    init 
  }
})();

(function() {
  window.psdk = SdkModule;
})();
