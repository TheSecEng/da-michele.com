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
    "revision": "1bf5cb79d4fd478d2ac3444ed81a193c"
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
    "url": "assets/js/3.dd935c14.js",
    "revision": "32138eddcd4e3bb37ca189e523ce34c3"
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
    "url": "assets/js/app.b74e4b7f.js",
    "revision": "8b08aa245b405ef9c609f16cea483721"
  },
  {
    "url": "de/imprint.html",
    "revision": "751d0ed855e949eee161e33f097b2349"
  },
  {
    "url": "de/index.html",
    "revision": "6da1ebd41e6cd15801c751ab8209b0ca"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "7dfffd3e4c87b433420a8c9730dc5563"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "656b2028205fa54084ffb7168471224d"
  },
  {
    "url": "de/menu.html",
    "revision": "a23d8b52d2334321bd4168bc1fd0cc24"
  },
  {
    "url": "de/privacy.html",
    "revision": "ac7821e74c2e65ffc3240a9291d0485f"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "8c1ad8aec439d0f954e03cf84f49516f"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "b93ed360eaefcb7f418dab6e327c34ce"
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
    "revision": "ee06e1757a28123e28b98649668cbba7"
  },
  {
    "url": "index.html",
    "revision": "10c71d7140ef0ae39568356f3ab0912a"
  },
  {
    "url": "it/imprint.html",
    "revision": "c2f257c63102a48e9e582820c892e3b3"
  },
  {
    "url": "it/index.html",
    "revision": "eec649da9f8467d6e43ed859d92ad59e"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "55d857b5cf4386053ed24a407edcd515"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "cd660d76ce0d3e84fb6f751cbb0e8adf"
  },
  {
    "url": "it/menu.html",
    "revision": "a8fb4124548b62543cde0271ed6d9c5f"
  },
  {
    "url": "it/privacy.html",
    "revision": "9f2b7ee4db326f6517051abf6886c28f"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "6ca8c1e0a58df49b11757fa9577e656d"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "c5c0b9699022ecf4a87fbd528c2d5950"
  },
  {
    "url": "legal/privacy.html",
    "revision": "2ce540314f5502b09b57cadddd208a38"
  },
  {
    "url": "legal/terms.html",
    "revision": "b0bc9823aea2ae160bdba86fd32514d3"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "e4f08f28b7f24b65a0b8c9525f2edeb2"
  },
  {
    "url": "privacy.html",
    "revision": "59da875a64b14e55ed2e3cb81de3a7d3"
  },
  {
    "url": "restaurant/about.html",
    "revision": "0b9dbbb6a48c84dc6fb23ace53e4d4c8"
  },
  {
    "url": "restaurant/career.html",
    "revision": "af789db8cf8d2858a562c128e0a11add"
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
