(function() {
  window.psdk = SdkModule;
})()

const SdkModule = (function() {
  function init() {
    console.log("init")
  }
  return {
    init
  }
})()
