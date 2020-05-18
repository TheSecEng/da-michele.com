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
    "revision": "9272cdd8c8f2cd3f086ac51b7faf09fd"
  },
  {
    "url": "assets/css/0.styles.271f9eed.css",
    "revision": "21da6dc2a26515caf6c3be8476e217f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.acd35cc7.js",
    "revision": "8907a4f02dfd386051521a962470298d"
  },
  {
    "url": "assets/js/11.9841dc84.js",
    "revision": "6adcd9c9c542ca4f04caf6d36205d565"
  },
  {
    "url": "assets/js/12.d86fc90f.js",
    "revision": "8ae844eaa590909f5030b2f4d0840682"
  },
  {
    "url": "assets/js/13.2119e938.js",
    "revision": "802228da9a5a550b2a161c2bee3f647f"
  },
  {
    "url": "assets/js/14.ba3ecafa.js",
    "revision": "cca3b462f757e58cbec7118bb413213b"
  },
  {
    "url": "assets/js/15.17a076f9.js",
    "revision": "2ae53c9f68953dc56e143b941d730408"
  },
  {
    "url": "assets/js/16.33871494.js",
    "revision": "8bdb8b13115a19001406078e6843b9e3"
  },
  {
    "url": "assets/js/17.9b0694a5.js",
    "revision": "f9e341f0121e749eda0b7fb80c523755"
  },
  {
    "url": "assets/js/18.80b1c937.js",
    "revision": "40b414b2a1523336c488be9ec2f8f616"
  },
  {
    "url": "assets/js/19.b13bec1c.js",
    "revision": "36a84b7461abf9909fe5dc668107e10a"
  },
  {
    "url": "assets/js/2.dfa53e52.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.436caf1a.js",
    "revision": "ee4d97445733ef7a6eb97ff608b1549f"
  },
  {
    "url": "assets/js/21.9131ad35.js",
    "revision": "4d9787eee149d46b7079b306c8112253"
  },
  {
    "url": "assets/js/22.3cdc294b.js",
    "revision": "afb8286dbc6b5ef6c8edfe18ac82ee2c"
  },
  {
    "url": "assets/js/23.45e359ab.js",
    "revision": "57eb3cd6a6026d607d56e4870f1f59ef"
  },
  {
    "url": "assets/js/24.02cf2d27.js",
    "revision": "2d491255ba818cd55cc35b6b8de14001"
  },
  {
    "url": "assets/js/25.8a2b5120.js",
    "revision": "5a8b3626716fa7d44bca834f78a60577"
  },
  {
    "url": "assets/js/26.0a88622a.js",
    "revision": "d3f9c04f952863883c30d331baa3bce2"
  },
  {
    "url": "assets/js/27.0d1f0dce.js",
    "revision": "91b1163ac5d60ea9da6f56727b5c8268"
  },
  {
    "url": "assets/js/28.e0922eae.js",
    "revision": "5d2c15a6645666d214ba7c20be7a6a64"
  },
  {
    "url": "assets/js/29.db262f5c.js",
    "revision": "de3ba47b119439ab2ea641b6efa990ac"
  },
  {
    "url": "assets/js/3.e00ba0bc.js",
    "revision": "c62191fea83b0363c98653f879d1af90"
  },
  {
    "url": "assets/js/30.38ca4143.js",
    "revision": "d0cb16cc00bab4ae0e5f93981d7514d3"
  },
  {
    "url": "assets/js/31.c3cc539e.js",
    "revision": "2b155d92affc22df877181d5675c42a1"
  },
  {
    "url": "assets/js/32.54fecb48.js",
    "revision": "2bf733b82bea6a01f7f3ba6f10c8a2cd"
  },
  {
    "url": "assets/js/33.b019936e.js",
    "revision": "60807d1533efae76f078bdf264fe839a"
  },
  {
    "url": "assets/js/34.77d97aa6.js",
    "revision": "eb9a59dce3342f0801079e8ad00869db"
  },
  {
    "url": "assets/js/4.6eb7bf27.js",
    "revision": "ecc2417dbb262db221bb0ba63cdcd00b"
  },
  {
    "url": "assets/js/5.d1744ca5.js",
    "revision": "9c3043a8cac5cf926ab5456499f8f39d"
  },
  {
    "url": "assets/js/6.ac2b239f.js",
    "revision": "f09f7bdd2186f6f5b4959a3c5df2227e"
  },
  {
    "url": "assets/js/7.7859312b.js",
    "revision": "a52ca5da7cfb2507027dd4ed150c2882"
  },
  {
    "url": "assets/js/8.3061a0d4.js",
    "revision": "4418dd3550493587fe0a08337f81c016"
  },
  {
    "url": "assets/js/9.493ed192.js",
    "revision": "8b634e585ddec52ca948232fa0778c56"
  },
  {
    "url": "assets/js/app.601d56e1.js",
    "revision": "6ff5e3d3d63eddd4f8e70e39f3d8720a"
  },
  {
    "url": "de/imprint.html",
    "revision": "b6aacedf679da76a630a35dae566fc71"
  },
  {
    "url": "de/index.html",
    "revision": "373fcfbbc0f6c44e376a72fd66ce3e5c"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "f5021740607d8a4c8fbd2205a1bcc4fd"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "f3acb327c64f83ead505d39e011423df"
  },
  {
    "url": "de/menu.html",
    "revision": "c1f5fa4b09146ec52a318de96c63ff8b"
  },
  {
    "url": "de/privacy.html",
    "revision": "51a207a2c79da69c2e3ec0eb34f6839e"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "dfe6e33b57d1bc05956a18977ff53954"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "feb8b4fa68cbf361e927182fec1383e7"
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
    "revision": "b359d87a13d08e9da524aa23addc7d7e"
  },
  {
    "url": "index.html",
    "revision": "4488666f356f48eee3cdff4a1e380cd1"
  },
  {
    "url": "it/imprint.html",
    "revision": "f17c2003e7ed744357f5b441af1559f6"
  },
  {
    "url": "it/index.html",
    "revision": "0f8ce9d9ae6a14a287ed1d3132de5ca3"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "6251282da29e075224078f3a1a64db61"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "2f6a235d20446866629ea13a69cb75f9"
  },
  {
    "url": "it/menu.html",
    "revision": "f7445f0dd4e3e365bea6d367181919a8"
  },
  {
    "url": "it/privacy.html",
    "revision": "849e17b5905a0b7715b6133935e09021"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "548249830eb75dfd0316075e94cf7fc4"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "204fc13d0cb48f4728eb96d230356cfc"
  },
  {
    "url": "legal/privacy.html",
    "revision": "1b32d78cb9944e3ab3c011312d4dd121"
  },
  {
    "url": "legal/terms.html",
    "revision": "3a29f5b9c520b8ac0b7d7c92db790763"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "9e37d29724e3cc582cd2cd66b2f2b35d"
  },
  {
    "url": "privacy.html",
    "revision": "3e3f76427a5b944362cb91945e2fb597"
  },
  {
    "url": "restaurant/about.html",
    "revision": "cc40d2e0bd1474c0e9c892532f5b2f94"
  },
  {
    "url": "restaurant/career.html",
    "revision": "344310d6829a71816bcad646d63b08b4"
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
