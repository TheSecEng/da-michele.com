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
    "revision": "e1afccb55336915808c38af79a7a08b6"
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
    "url": "assets/js/11.a547e596.js",
    "revision": "5c56070429dcd034ae7d0d3540753384"
  },
  {
    "url": "assets/js/12.51cdf68b.js",
    "revision": "a1b5c50e6ce3c86916d7edf74bdd040f"
  },
  {
    "url": "assets/js/13.66a272c6.js",
    "revision": "5ebf7a20fac223084960f48c50e4d38f"
  },
  {
    "url": "assets/js/14.0831fec5.js",
    "revision": "a149debf808ced7e78036edfaeee9b9c"
  },
  {
    "url": "assets/js/15.843f426b.js",
    "revision": "302a5c30dc31160be310d70c32cab923"
  },
  {
    "url": "assets/js/16.cb782d77.js",
    "revision": "68d1fb43c1278aeb3195b2f384cdcac4"
  },
  {
    "url": "assets/js/17.8f601e93.js",
    "revision": "735be43096f97cadaed3a8f390454efb"
  },
  {
    "url": "assets/js/18.0da3b0e7.js",
    "revision": "4185e841189c06ba15b6c2f7b54dc2b8"
  },
  {
    "url": "assets/js/19.5261ac8f.js",
    "revision": "c1fd8e04662e5599c2c91b40c8aadeeb"
  },
  {
    "url": "assets/js/2.611c53a0.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.ea7da0cf.js",
    "revision": "88a94270d0210eaa46f0afd2c30b4b1b"
  },
  {
    "url": "assets/js/21.6fe137ea.js",
    "revision": "12ff654666256d97606981724a1d27cd"
  },
  {
    "url": "assets/js/22.43499d21.js",
    "revision": "dfe2df13cfc441f7268ed2ca6e5325ef"
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
    "url": "assets/js/9.f587b089.js",
    "revision": "567108071de80cdf5a2d5b05e3caf89b"
  },
  {
    "url": "assets/js/app.c3dd8bbc.js",
    "revision": "9b84838049a3750e0324bb62f7b85c5c"
  },
  {
    "url": "de/imprint.html",
    "revision": "e79132975c2c97dfa89cbc6f6f1fe7ab"
  },
  {
    "url": "de/index.html",
    "revision": "4a8aae4fcb3d27b34fa16b23913c4880"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "e34672e6abaf6a038c1aa4e1167ff9fd"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "d802f8804793ce73156f41d885823b91"
  },
  {
    "url": "de/menu.html",
    "revision": "a21f4c93b16b2915ff40107dfbdb72a4"
  },
  {
    "url": "de/privacy.html",
    "revision": "e07999fe26f5e2a92b0bc565304d9efa"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "0796233f2ca0057b7526e00d90a593ad"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "9a5ed8fb45ce29bc208b5bf34b08cb2e"
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
    "revision": "9c34a1299756e5e28f3b483f5e60707c"
  },
  {
    "url": "index.html",
    "revision": "fa321a549f27419f5854e9186b3da3c7"
  },
  {
    "url": "it/imprint.html",
    "revision": "1f3a19f2fda10512ac5d25c4d21ad59f"
  },
  {
    "url": "it/index.html",
    "revision": "15757be1203bcfb00d120f999654298f"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "eae444ca8156a32a9e975c6d2bf613d7"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "eb254b462a11c7f99d064bc278a15972"
  },
  {
    "url": "it/menu.html",
    "revision": "a32602f1bb8a93bf80ec726817a0e18d"
  },
  {
    "url": "it/privacy.html",
    "revision": "c61fa944a154e6eab80d3f49caf16d9c"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "7352e8026bc515700430ea90124a30e2"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "90038895c3d061cbbc50f5216e80b0c4"
  },
  {
    "url": "legal/privacy.html",
    "revision": "6647df13c49ffb8af8bd761c4f5c229f"
  },
  {
    "url": "legal/terms.html",
    "revision": "94166ca9e233b8f1ff22955fffabf696"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "1b689efc68f51786caf202a247856e9d"
  },
  {
    "url": "privacy.html",
    "revision": "1de8b0e4ad8867d3110dfb112fe5cd8b"
  },
  {
    "url": "restaurant/about.html",
    "revision": "b31358f172deedc52c7876e14f5ee3d0"
  },
  {
    "url": "restaurant/career.html",
    "revision": "be33972540a12d827045afdfec37f16b"
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
