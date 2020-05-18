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
    "revision": "d697cd759aa85ee747f77ed81a4464fb"
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
    "url": "assets/js/9.3e4d85f3.js",
    "revision": "ddcbf0938fe5e64a1f0e9d3345890cbd"
  },
  {
    "url": "assets/js/app.bafd3a65.js",
    "revision": "362eac159c7aa7d7f32f2cda45d1a79e"
  },
  {
    "url": "de/imprint.html",
    "revision": "9866b6adb84eabc557070b959b0ecf70"
  },
  {
    "url": "de/index.html",
    "revision": "65472cc6f0c5a55f31ef97fc31bccdec"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "bfb560de9e2c6f6df8518454da04baab"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "5166de4afb962afaef93a518f4d6efce"
  },
  {
    "url": "de/menu.html",
    "revision": "73d03ebac504c15c7d8878b4dfe83a8d"
  },
  {
    "url": "de/privacy.html",
    "revision": "e4e96c306fe46af21af85b67002ec3c9"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "2c0f3bc7bc1f877e59e44409145a5275"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "b24fe8ffa55695207ca94d8dff70f842"
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
    "revision": "d2b0a99dbf78a163464f896a5384ec07"
  },
  {
    "url": "index.html",
    "revision": "4bc643eb6ef9d6cead463515e6bb15e8"
  },
  {
    "url": "it/imprint.html",
    "revision": "468483a374524a0367339d564d1a15ee"
  },
  {
    "url": "it/index.html",
    "revision": "44c379442a8045a0e490ec06a3b4c5c2"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "4baa91c4aabae69c0a8d224cd4389a9d"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "78bc3cc1ce793fb3e2b78c8bfdc4036c"
  },
  {
    "url": "it/menu.html",
    "revision": "06b02659f6fec497c194f63292bc19b4"
  },
  {
    "url": "it/privacy.html",
    "revision": "cfdd564f27fb5ca4150b6b9b6558cbc7"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "71b795d3dc11e1eee0f0e8758965a059"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "c1c6ec368ba5ec904183676efb1ab4ef"
  },
  {
    "url": "legal/privacy.html",
    "revision": "3187517548e464858b01b06d1c25d8ee"
  },
  {
    "url": "legal/terms.html",
    "revision": "9e46f39ea148adb6ce659f46a7664f15"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "13f5ca19b8ed946290710eb016e5ef80"
  },
  {
    "url": "privacy.html",
    "revision": "e4536996e35ff204538bddb0382f7f49"
  },
  {
    "url": "restaurant/about.html",
    "revision": "8bb661e977e0ff388c7c1c9c94a5750c"
  },
  {
    "url": "restaurant/career.html",
    "revision": "4eed81eec478257da6edeba55e2b7394"
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
