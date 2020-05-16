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
    "revision": "648ef670a72461c6d52f6c1cd422a006"
  },
  {
    "url": "assets/css/0.styles.259bb392.css",
    "revision": "e003456097299637e3eef933abd29ac4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.687e2b80.js",
    "revision": "29702e39d3efb68052c28cd1e31429d3"
  },
  {
    "url": "assets/js/11.a8d60ba7.js",
    "revision": "7277ebac76a89d848e116ba4f6ea7bac"
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
    "url": "assets/js/15.b8a155b9.js",
    "revision": "adc744a773fe1450324157d05a0fc2dd"
  },
  {
    "url": "assets/js/16.d4c321d6.js",
    "revision": "f155728bb20b24fd6c1dc83c1e0e297e"
  },
  {
    "url": "assets/js/17.73e15e7f.js",
    "revision": "7d91cff1d0a9ba3c5739c5dd15908312"
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
    "url": "assets/js/20.ff3dd791.js",
    "revision": "b3a59634afe9d438358a5a5ad61edbaf"
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
    "url": "assets/js/26.821d34e4.js",
    "revision": "5a8869da1cc5b737c13056bfa781a85a"
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
    "url": "assets/js/3.79f0f77b.js",
    "revision": "f0474a35df8e6159386e191cc460d8c3"
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
    "url": "assets/js/32.55d2dffa.js",
    "revision": "211fbbe9465f41ca2f6f961103193acc"
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
    "url": "assets/js/4.d021003c.js",
    "revision": "5ee7cd1b9866ef71933473ef22a49af6"
  },
  {
    "url": "assets/js/5.bdbf8cdd.js",
    "revision": "24be4a1c18266e255529488e8d7a78ab"
  },
  {
    "url": "assets/js/6.43fdb0ae.js",
    "revision": "d4c50c49ac4a11eba46e40ac9d7d60d9"
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
    "url": "assets/js/app.91087131.js",
    "revision": "6c5c154dd16decc83a0247c3cb6d8ccf"
  },
  {
    "url": "de/imprint.html",
    "revision": "c6ed3253cb00f8e4acd8c697d610f6a9"
  },
  {
    "url": "de/index.html",
    "revision": "8a6733856e1604c0daa33e79a66c0efe"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "07a89b59ea30f822e9e0a67e18146ac2"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "bf345dec9c6853ec908c1d72bea816e3"
  },
  {
    "url": "de/menu.html",
    "revision": "2bd7c9316be926af4b20c19551229f59"
  },
  {
    "url": "de/privacy.html",
    "revision": "d4a2df03eaa6b98549acc98a50220abd"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "2c7a8eeb53cf120581a2c78407fc6c03"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "44710c77dd640bc1ddd7bb4e5e3d920a"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "30e5889a2a940cd19c431e1c54d9fbc3"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "6294efc099e309cc072b460a5a0d9c83"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "54cdf4d9d4a93509c292307772b252c0"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "188fbd7896789731ffd64269e5fc5c4d"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "1f8df8ba49c813cc36a393fcb1b7b74f"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "471c3bbd76895590048b64c6b6e5cdca"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "9a3e952e60f0f930248ce3e01fd7706f"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "1f8df8ba49c813cc36a393fcb1b7b74f"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "2d65a0527a0c1acfb32d7c07923df242"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "9bfef5cd866d9a7db57b4148401de0a4"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "2d6521c3d6505f9b7cc5847d1add2fff"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "1e30122987bd12fec0bb605516f2d5f6"
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
    "revision": "b03779c8e080a19ae8073d3d9f9c6f94"
  },
  {
    "url": "index.html",
    "revision": "3a3f2ae867cd02ca4fe6a49f3e63964f"
  },
  {
    "url": "it/imprint.html",
    "revision": "e28a7ad662f5afdcde789a60eb001a5c"
  },
  {
    "url": "it/index.html",
    "revision": "cbe5c7b30b52f545123c996cd72ee3fb"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "b6afab87d090821741836ab778962979"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "c1d04ba654cd62c34528b4fe82d5b8d5"
  },
  {
    "url": "it/menu.html",
    "revision": "b728a51a9cc1d58ec06aad085fa1cd1a"
  },
  {
    "url": "it/privacy.html",
    "revision": "4c0f592a10e735a22952c44e654776e9"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "5638e279a85d37bccb01ba765d66dbcf"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "88269f2ecdbe93be22e976e16a55df32"
  },
  {
    "url": "legal/privacy.html",
    "revision": "7668bd3f1aa8f42191b8f6858c82c39b"
  },
  {
    "url": "legal/terms.html",
    "revision": "37532b31892caf49a7949fcf75bab87a"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "d00254846f6dbb3f6d9d1121900d6c0b"
  },
  {
    "url": "privacy.html",
    "revision": "82f22e884c964be0b7ac8f287d37efd2"
  },
  {
    "url": "restaurant/about.html",
    "revision": "e0376eb4dccf5ddcc8a90b6b51d4d16a"
  },
  {
    "url": "restaurant/career.html",
    "revision": "f7d7bab427badac7aad0e468b2962d9b"
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
