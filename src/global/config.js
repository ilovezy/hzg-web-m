window.CONFIG = {
  server: {
    development: 'http://ep2.viphk1.ngrok.org',
    production: 'http://ep2.viphk1.ngrok.org'
  },

  serverDocUrl: 'http://ep2.viphk1.ngrok.org/swagger-ui.html',

  version: 'v3.15.0',
  isWindows: navigator.userAgent.indexOf("Windows", 0) != -1 || navigator.userAgent.indexOf('Android') > -1 ||navigator.userAgent.indexOf('Linux') > -1,
  // 微信appId
  appId: {
    dev: 'wx3ea60e78ddfa277e',
    rc: 'wx5c5a1fb71ecab7bc',
    prod: 'wxdd6b458500d4c224'
  },

  ILoliUploadUrl: 'https://sm.ms', // 好用的图片上传地址
  phone: '+86-13651943930',
  defaultUser: {
    loginName: 'admin',
    password: '1qaz2wsx'
  }
};
