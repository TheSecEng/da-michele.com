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
    "revision": "723640f6b66048dac6ce82915453f9c2"
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
    "url": "assets/js/12.bc1adc08.js",
    "revision": "97008f45a6f7ca31eeb57b058c848919"
  },
  {
    "url": "assets/js/13.600415d6.js",
    "revision": "dd70eddef13ec80772823b90ea3e3cb7"
  },
  {
    "url": "assets/js/14.1c2a8f9c.js",
    "revision": "ffe55bdee7d78205108164052489b26a"
  },
  {
    "url": "assets/js/15.b8a155b9.js",
    "revision": "adc744a773fe1450324157d05a0fc2dd"
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
    "url": "assets/js/24.29cc692b.js",
    "revision": "7dd6208a6ebe44a825cac1b76ce24fdf"
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
    "url": "assets/js/3.86786bed.js",
    "revision": "ab1244d266ea634825d11f9f486fc3c3"
  },
  {
    "url": "assets/js/30.58520af2.js",
    "revision": "d6f0bb7c82f680895b4368092d27ba95"
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
    "url": "assets/js/app.4a550c10.js",
    "revision": "52d29876ca21f5d0c9dc8c3416b8f536"
  },
  {
    "url": "de/imprint.html",
    "revision": "563a2ac73807512b27d60dc7314e2b8c"
  },
  {
    "url": "de/index.html",
    "revision": "b7431608308102c8a3e2b178bf51e991"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "00a3d2d47133c9f52d05fa916b761485"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "51e460f38252f8ce11396b4875ce8b79"
  },
  {
    "url": "de/menu.html",
    "revision": "c5f7274c7d99f7b8f1fa06bab5b3cde9"
  },
  {
    "url": "de/privacy.html",
    "revision": "cf42a976de1b2d46770b585d2a146041"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "a968f14be6518e97bcb6541efdaaf644"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "684fd1d05bf5fabaa1f9d7ada008e13a"
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
    "url": "hero.jpg",
    "revision": "da7df5e02b0bcbe63e5b661924470082"
  },
  {
    "url": "imprint.html",
    "revision": "6aea2d555ac79e91919409a6dc6351f5"
  },
  {
    "url": "index.html",
    "revision": "9cbf28f6d6886392f032b7a5b3d4570f"
  },
  {
    "url": "it/imprint.html",
    "revision": "5db6b04b14b7c1331b0975e86a65233c"
  },
  {
    "url": "it/index.html",
    "revision": "497ecb1793c5e16030435281dba0645c"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "d5cf3f80a69b0deaca91fb49d56da064"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "12fa4830748741403a2f8f0b4c750c61"
  },
  {
    "url": "it/menu.html",
    "revision": "22ced619934c8093a8e095cf475bf34f"
  },
  {
    "url": "it/privacy.html",
    "revision": "55c3cff38a3d4ffb52bbf8de0a1f598c"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "b7c2a1012e786b6b36db41d89f3b0915"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "0c2f043bd499e613c34fbe3bef0f8037"
  },
  {
    "url": "legal/privacy.html",
    "revision": "f2fe83d91feeb73ae531c6d7e87fc4ba"
  },
  {
    "url": "legal/terms.html",
    "revision": "8ce510cfa0f8156e8e3266fd5610aa53"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "1e9555ce106fe0e357d1f1c261a8c421"
  },
  {
    "url": "privacy.html",
    "revision": "c09f6bfb111d203b28ee4c786f7d41b2"
  },
  {
    "url": "restaurant/about.html",
    "revision": "134fba2c8419def86f6adb024fb72dfa"
  },
  {
    "url": "restaurant/career.html",
    "revision": "ccb8be84670d4f27605e1c465b263b1e"
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
