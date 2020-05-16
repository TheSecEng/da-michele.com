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
    "revision": "f125367d63cf7c5b7a91b1b3dd90f5bc"
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
    "url": "assets/js/14.e13750d3.js",
    "revision": "cfee19ce1b1fb53f6666c97cfdc9b28e"
  },
  {
    "url": "assets/js/15.eda6f619.js",
    "revision": "93dc1e42ae39d230182e8cb6f3a41509"
  },
  {
    "url": "assets/js/16.b6be571a.js",
    "revision": "92de4eea11a8ebef23f1a054fc02e4b6"
  },
  {
    "url": "assets/js/17.a85f7c54.js",
    "revision": "b7a716157ba309e2987df64abf900f1f"
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
    "url": "assets/js/3.c646a28d.js",
    "revision": "239487144490240c7ee845707c55cd3b"
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
    "url": "assets/js/app.4d4903e7.js",
    "revision": "72ef8ec6a5c3add7647b31b81d2ae1d2"
  },
  {
    "url": "de/imprint.html",
    "revision": "139a6b2e39f9cbab11195e366c5e8c22"
  },
  {
    "url": "de/index.html",
    "revision": "b429886f4dfee210a6e6d20cadc1483c"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "1bc322e5bf5b258e8a5d434636294bf8"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "06340c5065f164a4599b3ba116044e4c"
  },
  {
    "url": "de/menu.html",
    "revision": "accc76941f420d3ecd03866b4242d9d0"
  },
  {
    "url": "de/privacy.html",
    "revision": "f52122bf1f44924bdd00d17123a8b73f"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "d4c45382c577b22df4b370dc9e823311"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "b56492a198273c4b9383e578efc494a6"
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
    "revision": "9b75a8b2a58218098726f750e3e2e9c8"
  },
  {
    "url": "index.html",
    "revision": "168425b4a2c1551fe3503ca2233a6139"
  },
  {
    "url": "it/imprint.html",
    "revision": "8e541fba06fcb0c0ac9ef759c46b1cf1"
  },
  {
    "url": "it/index.html",
    "revision": "311746b388675e00f8b5944212cb527c"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "3ef1f7a659537b67d04ac22b48af9b87"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "193160f439e5a77d5938479d1e6f7c47"
  },
  {
    "url": "it/menu.html",
    "revision": "14374d094345779a2688f3d93d6f7d67"
  },
  {
    "url": "it/privacy.html",
    "revision": "a995564be7c61a5bd0e581836cb6da57"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "21418d32b57a83c0c394708738dbcea2"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "0e028dd05fe3dde36f003b465953acaf"
  },
  {
    "url": "legal/privacy.html",
    "revision": "aa558da8fd37b7f39146e8f0f803ea74"
  },
  {
    "url": "legal/terms.html",
    "revision": "1e8a974f4c3112869c40a3912f9f3a2d"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "2830420fedf72ed46fea3772abe74f4f"
  },
  {
    "url": "privacy.html",
    "revision": "b1e1377c7adb8ed77469d542f08dc0ae"
  },
  {
    "url": "restaurant/about.html",
    "revision": "acfa65d6bf11636578e1dc8608f2d25b"
  },
  {
    "url": "restaurant/career.html",
    "revision": "a62bff9ea2a98b5d6a30bc9835975761"
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
