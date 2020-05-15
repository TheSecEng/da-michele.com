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
    "revision": "876471571bf596beac3e69dfd0b1b411"
  },
  {
    "url": "assets/css/0.styles.670d18b5.css",
    "revision": "8105c39ed71e74a7ef3669c14543deef"
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
    "url": "assets/js/12.805262f7.js",
    "revision": "345241bee81b4c7e11e30bb9314d8606"
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
    "url": "assets/js/5.69930902.js",
    "revision": "70b5c2c91cd747d1c217df1ff546560e"
  },
  {
    "url": "assets/js/6.9e8eb5f8.js",
    "revision": "dfc3ac362689f46d591f004bdff017cf"
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
    "url": "assets/js/app.0f843174.js",
    "revision": "06f58a8d936bfab91b545d028b523a90"
  },
  {
    "url": "de/imprint.html",
    "revision": "5b96e46f7639773408d03c672ad10f8c"
  },
  {
    "url": "de/index.html",
    "revision": "586d5279a603bc5aa4fb3003afb1edaa"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "189b9c9ab3eefb5eb2be586de833a601"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "619978a2d1afe84f97b70810676c1e66"
  },
  {
    "url": "de/menu.html",
    "revision": "1a29beb7c72cb44dc5fbcb6e6f1b3a2f"
  },
  {
    "url": "de/privacy.html",
    "revision": "4c435058c55cd7eefc924279b2b3b74a"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "8d051b2a39dfd64cb7a67cfc0dd31dbb"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "3243da79d114c29f9d55e6bde27ac194"
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
    "revision": "b9f78f1c7270216bc6a8ffd61877e6ef"
  },
  {
    "url": "index.html",
    "revision": "fc5d06818c57b705752988b80221207f"
  },
  {
    "url": "it/imprint.html",
    "revision": "1c6ceb634d01838d32e486f371a3c8d3"
  },
  {
    "url": "it/index.html",
    "revision": "46d065e5bdf56b7b9f5d77524aa75089"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "1577b656f67c1e9d66116185296054ad"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "d32714566ba85213209627815161472a"
  },
  {
    "url": "it/menu.html",
    "revision": "1a723573f506537ddf30e183dbca0917"
  },
  {
    "url": "it/privacy.html",
    "revision": "fd491f9a80b377abfbe57f0f1d8083e7"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "dbf97019c1045e566df7ff66416da97b"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "af80d27d1aaefeb5f38a5ebc58cf88d7"
  },
  {
    "url": "legal/privacy.html",
    "revision": "35426ed3670891122345413236d84ea9"
  },
  {
    "url": "legal/terms.html",
    "revision": "ebd9d8d631724cf80fa7745c47724ac6"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "dd027b3407df48e449323413d1bc7670"
  },
  {
    "url": "privacy.html",
    "revision": "6c62f3e8f8a125583f478a6f498a07c3"
  },
  {
    "url": "restaurant/about.html",
    "revision": "c610a6a5b9fd3676f61c86d79c95847e"
  },
  {
    "url": "restaurant/career.html",
    "revision": "5a1e05e240308b50fd008cfe649b3fc3"
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
