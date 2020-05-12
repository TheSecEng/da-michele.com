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
    "revision": "cbc24a4215a26a8884a848b42d498515"
  },
  {
    "url": "assets/css/0.styles.da13f948.css",
    "revision": "a6659a1341613a8c0037c760050da458"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b05ce048.js",
    "revision": "88e151ae3092ff62875a224e29517ee4"
  },
  {
    "url": "assets/js/11.21e12734.js",
    "revision": "c29dc339472b846d45a487da7e4194b5"
  },
  {
    "url": "assets/js/12.d1fd4924.js",
    "revision": "54b499ee4aefa1dc2bf28fa2933582bb"
  },
  {
    "url": "assets/js/13.00076cef.js",
    "revision": "2fdba3c93f16caabeb54e7d223992d3d"
  },
  {
    "url": "assets/js/14.f1d0ea3e.js",
    "revision": "0a7e98bb21ac180df915ea051039fe07"
  },
  {
    "url": "assets/js/15.a12a34b5.js",
    "revision": "e599a407a19d2c725a7683f6c6a71d76"
  },
  {
    "url": "assets/js/16.512a9626.js",
    "revision": "2e6a984614e41285b46c8a9945916c00"
  },
  {
    "url": "assets/js/17.b0ffbb17.js",
    "revision": "882b5374508c119d434948501de14093"
  },
  {
    "url": "assets/js/18.a4097d92.js",
    "revision": "28fa2e07656c94677542a2cbf9f77a2e"
  },
  {
    "url": "assets/js/19.f3d352c0.js",
    "revision": "e9febe2a8a9bdd5ccf848ea99cf4ec49"
  },
  {
    "url": "assets/js/2.6670b8d7.js",
    "revision": "5353b2f516f67cb654982c52e4e03c0e"
  },
  {
    "url": "assets/js/20.c13db889.js",
    "revision": "df10dd6f32ffd39e258b79104b290b25"
  },
  {
    "url": "assets/js/21.baf2ad96.js",
    "revision": "ab92addcaabf90d786b2b281e07b7b4a"
  },
  {
    "url": "assets/js/22.8b045b80.js",
    "revision": "6d87781e13eaab6b85b20329e15b8108"
  },
  {
    "url": "assets/js/23.13fddf21.js",
    "revision": "11c05a2eef91bfdb8455e36e43adaa19"
  },
  {
    "url": "assets/js/24.52f564d2.js",
    "revision": "434bc034102b5808abf68a3a8e22534a"
  },
  {
    "url": "assets/js/25.2bc961ce.js",
    "revision": "f09714881fa58c0c1fb3e89589b1e7b0"
  },
  {
    "url": "assets/js/26.485da469.js",
    "revision": "5a2fe80474387a2a4d0b695e8cb6d3ce"
  },
  {
    "url": "assets/js/27.9e8ddd8f.js",
    "revision": "7f60c77335687acc18e85db0002a8297"
  },
  {
    "url": "assets/js/28.9cee4b56.js",
    "revision": "10d5017c728ed3c2d7e9ca57ee4c6069"
  },
  {
    "url": "assets/js/29.e6ff962f.js",
    "revision": "3ee94ca66f0c3092b4b25bf55f728085"
  },
  {
    "url": "assets/js/3.e1e71c1b.js",
    "revision": "745079bb75f193d7c3823dcf3358e05e"
  },
  {
    "url": "assets/js/30.e6021b6b.js",
    "revision": "1c8cdda7ae8f3cc08623cbc5814b8eb1"
  },
  {
    "url": "assets/js/31.22712038.js",
    "revision": "0b884c372345dd3513b4e90806bcbfe1"
  },
  {
    "url": "assets/js/32.843236b0.js",
    "revision": "f52abeabc556db8e3a5593e2e8397ea1"
  },
  {
    "url": "assets/js/33.c4742e9a.js",
    "revision": "a54d537c64a69bb662ffb7c3369a0cac"
  },
  {
    "url": "assets/js/4.61a338c3.js",
    "revision": "d9fed31fffbca8e440e6ac5b1c4433e7"
  },
  {
    "url": "assets/js/5.481ef9a1.js",
    "revision": "2ad82dfde1db67fa4d70d536c13e486b"
  },
  {
    "url": "assets/js/6.e986337a.js",
    "revision": "4273c980ed624deebad5faa4adc6d15c"
  },
  {
    "url": "assets/js/7.cd31cc0c.js",
    "revision": "24622fc82869bdf814f9fcaadcbd6df0"
  },
  {
    "url": "assets/js/8.1857f1d6.js",
    "revision": "1553ed72dfd6c2513a69d0d56994a81e"
  },
  {
    "url": "assets/js/9.f1134ee7.js",
    "revision": "4fed6eb018495d14becb3870bcaf8d3f"
  },
  {
    "url": "assets/js/app.8795601a.js",
    "revision": "1c75f971915d1b879272e248e862968d"
  },
  {
    "url": "de/imprint.html",
    "revision": "ac3ddef1d9dcad70ae6f657a8790c226"
  },
  {
    "url": "de/index.html",
    "revision": "689fac1fc31868d263d54c8ac5bb860a"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "04bfac122d1d83233e24f7ec83c50dc1"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "f4a1f299672cb234929ac0d9d43c8058"
  },
  {
    "url": "de/menu.html",
    "revision": "ef12b6fc62e5cab3a590834623a206eb"
  },
  {
    "url": "de/privacy.html",
    "revision": "9363f6a8bd5298acf1c9b319e85373a3"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "8c9fcbc8df6dbdcb9cc9bbdf5f475ddd"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "025746446d8b550327ac7b8d787e5b52"
  },
  {
    "url": "hero.jpg",
    "revision": "da7df5e02b0bcbe63e5b661924470082"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "30e5889a2a940cd19c431e1c54d9fbc3"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6294efc099e309cc072b460a5a0d9c83"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "54cdf4d9d4a93509c292307772b252c0"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "188fbd7896789731ffd64269e5fc5c4d"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "1f8df8ba49c813cc36a393fcb1b7b74f"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "471c3bbd76895590048b64c6b6e5cdca"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "9a3e952e60f0f930248ce3e01fd7706f"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "1f8df8ba49c813cc36a393fcb1b7b74f"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "2d65a0527a0c1acfb32d7c07923df242"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9bfef5cd866d9a7db57b4148401de0a4"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "2d6521c3d6505f9b7cc5847d1add2fff"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "1e30122987bd12fec0bb605516f2d5f6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "e73e46c8348e3f1b662620eac4ad31b8"
  },
  {
    "url": "imprint.html",
    "revision": "c8d25700707e8e9681982edf94fd5e15"
  },
  {
    "url": "index.html",
    "revision": "23c52352262ee04955362282cd1eb658"
  },
  {
    "url": "it/imprint.html",
    "revision": "9fb4f20e1e293051173fba5c6a64418b"
  },
  {
    "url": "it/index.html",
    "revision": "94b791b3c353e8cb3e529adca5ca0bf0"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "ccf4673cc4ecdf48a0ac86b17a53ced5"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "567a662a9016558e228acc5ce6289157"
  },
  {
    "url": "it/menu.html",
    "revision": "e1ffef2e62c0aacaf3f810aa25af8334"
  },
  {
    "url": "it/privacy.html",
    "revision": "7b3faf18d087b2d20337edd792cffbb3"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "805a2a9ccc842c8f92aab048812b0d82"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "a853221326b89bc9efae377a7f55d3ce"
  },
  {
    "url": "legal/privacy.html",
    "revision": "eaa17636d6fb3e69a5ecd1daf8f4ba39"
  },
  {
    "url": "legal/terms.html",
    "revision": "e7bf61e7722ad70cd79e361692cba1f1"
  },
  {
    "url": "menu.html",
    "revision": "38139e0b623a93ca5d0af1c8af05cbdb"
  },
  {
    "url": "privacy.html",
    "revision": "561866151a87e38ffda786094620fc9c"
  },
  {
    "url": "restaurant/about.html",
    "revision": "0c9950ce10248aa17fa6e5bfb9efd52a"
  },
  {
    "url": "restaurant/career.html",
    "revision": "5d02750c97802d7d0c7cc0a0ed965fe0"
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
