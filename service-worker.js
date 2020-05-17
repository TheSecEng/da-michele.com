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
    "revision": "036d0cde5e8cd2ecc4a9fbd3c54819f5"
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
    "url": "assets/js/10.281e9ba3.js",
    "revision": "921ea83cd479aa73f71373e1e76cc277"
  },
  {
    "url": "assets/js/11.c103e628.js",
    "revision": "49a27dc12bf80ef0335a5b88c71ddd95"
  },
  {
    "url": "assets/js/12.01d8aada.js",
    "revision": "b7de5b9171dba0fbebf644828c5644db"
  },
  {
    "url": "assets/js/13.e7f467e8.js",
    "revision": "674f4663376ccb679df7e4c4496b9566"
  },
  {
    "url": "assets/js/14.1c2a8f9c.js",
    "revision": "ffe55bdee7d78205108164052489b26a"
  },
  {
    "url": "assets/js/15.9fb331af.js",
    "revision": "97227c13cd5f5e44c884f0549f767c47"
  },
  {
    "url": "assets/js/16.e06c0f89.js",
    "revision": "6fa6fdc39542b087fb438573995624a3"
  },
  {
    "url": "assets/js/17.2d7bf6d7.js",
    "revision": "2703137d6957a6438212746591064a4e"
  },
  {
    "url": "assets/js/18.eea2b159.js",
    "revision": "8d55480786fdec48c6a76034d269f3d5"
  },
  {
    "url": "assets/js/19.26436560.js",
    "revision": "286de6ca1a1789554ccdd22f265a8d42"
  },
  {
    "url": "assets/js/2.dfa53e52.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.82e3cf80.js",
    "revision": "7398d738c522276ad06dcadf12633252"
  },
  {
    "url": "assets/js/21.000451ab.js",
    "revision": "4e32cb520181074c5144e9d17cda0c3e"
  },
  {
    "url": "assets/js/22.0c9d4fd8.js",
    "revision": "2baaf1bb581900f5e9e689338e456c13"
  },
  {
    "url": "assets/js/23.c0ab616a.js",
    "revision": "dd23546952531eb2fb4d8e3abab6f873"
  },
  {
    "url": "assets/js/24.d08e9a4c.js",
    "revision": "c8c1c21448c89dd8a1913fffd964c89b"
  },
  {
    "url": "assets/js/25.58c0d0d6.js",
    "revision": "62b5c941cf38ce8b25ce0185ea306f6b"
  },
  {
    "url": "assets/js/26.ef834e12.js",
    "revision": "21fc8208bae5f778d2566f0b670f7f08"
  },
  {
    "url": "assets/js/27.ee2872a9.js",
    "revision": "23a12e24b3979a2c3890ceb83321f07d"
  },
  {
    "url": "assets/js/28.8e876cd3.js",
    "revision": "b198da0f6ee6f0b0157668fd9381c62b"
  },
  {
    "url": "assets/js/29.b1b2e33d.js",
    "revision": "761fe124e680287eed3388a0f2b37baf"
  },
  {
    "url": "assets/js/3.302b165f.js",
    "revision": "6a40a209d61a7964348ff43b04b33383"
  },
  {
    "url": "assets/js/30.9542c5b3.js",
    "revision": "7b7de815c59c02ddb15a6dd584e0681e"
  },
  {
    "url": "assets/js/31.86f1488c.js",
    "revision": "38cb518937c7f4af7812b4a03c163c8d"
  },
  {
    "url": "assets/js/32.af421704.js",
    "revision": "76c21975b6f04bc527f1e9baaf0486e0"
  },
  {
    "url": "assets/js/33.c50f0dfb.js",
    "revision": "e64a28fe4b823352738b2c8b3040e795"
  },
  {
    "url": "assets/js/34.77d97aa6.js",
    "revision": "eb9a59dce3342f0801079e8ad00869db"
  },
  {
    "url": "assets/js/4.aff28e7b.js",
    "revision": "dc61d28b339a45fda8d34d458ebe05f0"
  },
  {
    "url": "assets/js/5.5145f5f8.js",
    "revision": "937024081c618a49c032a2f0683a0a30"
  },
  {
    "url": "assets/js/6.5efc74be.js",
    "revision": "650591c39705b33941e2c6e08abaef25"
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
    "url": "assets/js/app.3201f124.js",
    "revision": "7095420c3f7d66887c4ae9dee440031f"
  },
  {
    "url": "de/imprint.html",
    "revision": "21101ec20e98fcf62feb9db62621dc9e"
  },
  {
    "url": "de/index.html",
    "revision": "cf551d133f95139eddaf85f89d094499"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "6fad5799986f1490bbd5e5d1725d0517"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "bbc8b2713b598b5b2bee8f94c106c9aa"
  },
  {
    "url": "de/menu.html",
    "revision": "55576cdb96bea58f40f9c1544f5ca458"
  },
  {
    "url": "de/privacy.html",
    "revision": "d2c937a46e198b04525f71395807c0fc"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "11cfddf10296418c8a217cb7a4056bf8"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "530067b0f94c9da7ef06d432ac8af7f2"
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
    "revision": "1c6a0bd573042e0d697401937aeaba14"
  },
  {
    "url": "index.html",
    "revision": "d8f470c0577653baff00169007e1cea9"
  },
  {
    "url": "it/imprint.html",
    "revision": "20bc9ff309c15d8696d2c3879a5f854d"
  },
  {
    "url": "it/index.html",
    "revision": "a34e872966f1091cd76247ee8c2c684c"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "1fc55b83dd9b9c36be486fb52e1277d7"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "271b120fca6b201cba438c99220cb247"
  },
  {
    "url": "it/menu.html",
    "revision": "c6929385dd0cabec2b9304520a11407d"
  },
  {
    "url": "it/privacy.html",
    "revision": "dc927cfbd129202429068792f2338954"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "f368b70cc3293924af88ebec9ea52422"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "cb64d13769e333fbc6d4e2263cd08b0e"
  },
  {
    "url": "legal/privacy.html",
    "revision": "01884fb42dedbcd36ac05a64163ca997"
  },
  {
    "url": "legal/terms.html",
    "revision": "557dccc5ebcce467bd579869d4794e10"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "18e46ff371f21f214e71f3862295aa50"
  },
  {
    "url": "privacy.html",
    "revision": "b7fa4c8633b9b3ba3b969e22729af581"
  },
  {
    "url": "restaurant/about.html",
    "revision": "bf0a29e8df378f1a692e5da70a1059c8"
  },
  {
    "url": "restaurant/career.html",
    "revision": "b24739509a32053340908a1ab9b5e356"
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
