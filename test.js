window.SdkModule = function() {
  function init() {
    console.log("init")
  }
  return {
    init
  }
};

(function() {
  window.psdk = SdkModule;
})()
