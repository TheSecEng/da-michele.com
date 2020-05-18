/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "da83130cc70ee9b39ce13f74471c83e0"
  },
  {
    "url": "assets/css/0.styles.a9a75545.css",
    "revision": "21da6dc2a26515caf6c3be8476e217f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.641e9cc5.js",
    "revision": "991361514f67924ba577bf404e6e60f1"
  },
  {
    "url": "assets/js/11.0bab57c1.js",
    "revision": "a268aa16172f872e0f770fec99c8db2d"
  },
  {
    "url": "assets/js/12.435c5b3b.js",
    "revision": "95e5b734843e7a5381b663bee8d4efd8"
  },
  {
    "url": "assets/js/13.8e18035a.js",
    "revision": "b5be94664c7d82d9b8d649dff180d0d9"
  },
  {
    "url": "assets/js/14.0e5e0089.js",
    "revision": "140efe9b8ed6851243200ad43a133dcf"
  },
  {
    "url": "assets/js/15.c8e1b430.js",
    "revision": "9c431ffc9c7d4e4d986b327722ae5b14"
  },
  {
    "url": "assets/js/16.9649f806.js",
    "revision": "5d5742a523dd96d82c79210f6124e97f"
  },
  {
    "url": "assets/js/17.f1ac7398.js",
    "revision": "edc6a39c9bbecad3bf448dd95f2c1509"
  },
  {
    "url": "assets/js/18.5b393fc0.js",
    "revision": "e8c92c4e81a184a92ac37051690b5e68"
  },
  {
    "url": "assets/js/19.0c55d695.js",
    "revision": "ab2fd17ea0e404a19b01162f8df198f7"
  },
  {
    "url": "assets/js/2.611c53a0.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.e61130fd.js",
    "revision": "ee6c2f35b3be233a40f76d3fe0017b0d"
  },
  {
    "url": "assets/js/21.7fd48a6d.js",
    "revision": "75c238c8558f5473c999209c76d0461a"
  },
  {
    "url": "assets/js/22.7002e71e.js",
    "revision": "ad4a345f0dd5e8881e272f0698003922"
  },
  {
    "url": "assets/js/23.7bb3baf7.js",
    "revision": "ca9d82f757725823806abaddced8ab60"
  },
  {
    "url": "assets/js/24.4390c563.js",
    "revision": "401ff5c18326972702d43d69250a823d"
  },
  {
    "url": "assets/js/25.418157e7.js",
    "revision": "60746400ba8f5cccd2750e460f3eb85f"
  },
  {
    "url": "assets/js/26.53276982.js",
    "revision": "0c4b1cea5d99e64c158996db68fb481a"
  },
  {
    "url": "assets/js/27.ceb36de9.js",
    "revision": "612922fd6cc3e9c89f5441c15dca2b14"
  },
  {
    "url": "assets/js/28.f5ae11e3.js",
    "revision": "3a22aeb3229aaabcfc5f86d3e74f85de"
  },
  {
    "url": "assets/js/29.a5839d83.js",
    "revision": "05293e4071981c84022dcea6962ef5d2"
  },
  {
    "url": "assets/js/3.ea46d58a.js",
    "revision": "c62191fea83b0363c98653f879d1af90"
  },
  {
    "url": "assets/js/30.a125f7cc.js",
    "revision": "89ae44d584c9788c3f36570da1bd21bf"
  },
  {
    "url": "assets/js/31.1436db8b.js",
    "revision": "0e07a251295041a1f2096d08fcbef4c1"
  },
  {
    "url": "assets/js/32.ba679a0d.js",
    "revision": "0e90aac138bf6ab802770e3c9cf53f2b"
  },
  {
    "url": "assets/js/33.d0dfdc0f.js",
    "revision": "99c67fe12b1a63265c00e31ebafbb909"
  },
  {
    "url": "assets/js/34.deea57d7.js",
    "revision": "0b0ca87bbb909e5a4d3b22a379f150e7"
  },
  {
    "url": "assets/js/35.1226ea7e.js",
    "revision": "aa7fc552466dcd125e4df32d6201af25"
  },
  {
    "url": "assets/js/4.d3ab0d3f.js",
    "revision": "ecc2417dbb262db221bb0ba63cdcd00b"
  },
  {
    "url": "assets/js/5.4a8cfa81.js",
    "revision": "9c3043a8cac5cf926ab5456499f8f39d"
  },
  {
    "url": "assets/js/6.db8208e5.js",
    "revision": "7d1c7cb9eab6dce6cf2c8019fa5c37ea"
  },
  {
    "url": "assets/js/7.7a29f653.js",
    "revision": "a52ca5da7cfb2507027dd4ed150c2882"
  },
  {
    "url": "assets/js/8.6d041c5f.js",
    "revision": "e2691989e6a48aa4b670d20d320978b5"
  },
  {
    "url": "assets/js/9.f59da434.js",
    "revision": "8fabcf5154cdbffe22127892ee3bfbfa"
  },
  {
    "url": "assets/js/app.fbb78ed6.js",
    "revision": "3454c025dda25eb672c03d86d18bc092"
  },
  {
    "url": "de/imprint.html",
    "revision": "ca48f5801919ebce1f12fed3b7e6ecdd"
  },
  {
    "url": "de/index.html",
    "revision": "f40acc3807f32ef6866e1e658f58e50b"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "822e2147f76532bef83a4fa0e938f705"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "b339601b3628fe8ab8e282cddbd2d64f"
  },
  {
    "url": "de/menu.html",
    "revision": "4d81a5c74b3a47c47cc59d2a81ed7a19"
  },
  {
    "url": "de/privacy.html",
    "revision": "c79887f08b56d715a850f87050b9a681"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "4f110330d59c82a048feadd0c2c34904"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "1ef1183f8bfc61e959bf990a192b4dbc"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "8cabe66f6c004bfe792b83e0cc8797be"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "f8b76898955bc024291dfae5216b9db4"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "79bce1f9cff125e432ead2f39c310691"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "278bfa93fb49d3e9c79b9e1f0da79f87"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "4d0b6809899b8f63210d8fe8c955972e"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "c408e3c9dc88fadf170607f89b15ddc3"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "491f8cee7d391c83cfae68ee433437be"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "4d0b6809899b8f63210d8fe8c955972e"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "2da72a53f01c4b5b370e846df3039b72"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "a075685cedee205196f4be34940de310"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "40494998a34d33f37558089faf08fa62"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "79111c34c40c5a3fa7e20ce34aabf778"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "e73e46c8348e3f1b662620eac4ad31b8"
  },
  {
    "url": "food/burrata_zucchini_asparagi.jpg",
    "revision": "0303044ad115ebe623fd0d2781878a16"
  },
  {
    "url": "food/polpo_riso_asparagi.jpg",
    "revision": "5ccc279b74bb39f9e992734a6554188e"
  },
  {
    "url": "food/tagliata.jpg",
    "revision": "1db56d88b42063545028cad95c32cbba"
  },
  {
    "url": "food/tartara_di_tonno.jpg",
    "revision": "8d3d91ba909934cc38150de0b5a61f2b"
  },
  {
    "url": "hero.jpg",
    "revision": "da7df5e02b0bcbe63e5b661924470082"
  },
  {
    "url": "imprint.html",
    "revision": "852a7f1c05645cc2ebd9bf6763b69ea0"
  },
  {
    "url": "index.html",
    "revision": "6f2671cb742dc0aad949c3991fa3d16f"
  },
  {
    "url": "it/imprint.html",
    "revision": "10185b7f145915136f06c6288d352c0f"
  },
  {
    "url": "it/index.html",
    "revision": "1d8468a3031421a464bacff29488d500"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "918691b6dacdf2ff373f7b1f76929a06"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "90f49c50d84dfd01e9c1a36098677e15"
  },
  {
    "url": "it/menu.html",
    "revision": "95258948f02b56ae57129380b28616af"
  },
  {
    "url": "it/privacy.html",
    "revision": "270a72f29f70d8f308d4cb539d6a13b9"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "61386bee981f90f922cc0f33b07e8e23"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "498ccebf07a13d613aba7b761eb5a23c"
  },
  {
    "url": "legal/privacy.html",
    "revision": "71c80c37ccdf620ec37c667656a4587e"
  },
  {
    "url": "legal/terms.html",
    "revision": "384bcdadcf872e52444865a7949414b5"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "d0349dfe3da947eafa0874f9f9e856ab"
  },
  {
    "url": "privacy.html",
    "revision": "83d17f5e2f0fb57218d0acf4a23e393d"
  },
  {
    "url": "restaurant/about.html",
    "revision": "3b8332e717e2955c14125558abeb9029"
  },
  {
    "url": "restaurant/career.html",
    "revision": "5511404ba85b560e8b5d2f78b4513542"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
