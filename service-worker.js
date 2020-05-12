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
    "revision": "8329e5e6ef4900493f116c3b6ec31273"
  },
  {
    "url": "assets/css/0.styles.c320f11f.css",
    "revision": "fc648f36dc61ed44940ca1a1c46e561d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73148eaa.js",
    "revision": "3eb5627b856e1568ea1f14c4082cee90"
  },
  {
    "url": "assets/js/11.317f4606.js",
    "revision": "73ac909fd3ae9560b7ab7221540d4fe5"
  },
  {
    "url": "assets/js/12.eaecb025.js",
    "revision": "2523329e42f6ef5653b7d112bff27f6a"
  },
  {
    "url": "assets/js/13.441d8d30.js",
    "revision": "09ef465793cbb7f392abd6d2a6c50840"
  },
  {
    "url": "assets/js/14.5f8bee04.js",
    "revision": "ac8ca657ef3a186635ad3a8c58381405"
  },
  {
    "url": "assets/js/15.b6998f2e.js",
    "revision": "5d6c2788a6c8df4681df38f77dc0bd61"
  },
  {
    "url": "assets/js/16.4fdc52ea.js",
    "revision": "c765c1baad5d17015857ce71bd83598f"
  },
  {
    "url": "assets/js/17.d09fc0f2.js",
    "revision": "a9dc7bf1025d672277bcb2d757d470e9"
  },
  {
    "url": "assets/js/18.06d37938.js",
    "revision": "311519d24919328ffba525ec58a1fe2b"
  },
  {
    "url": "assets/js/19.37e6d686.js",
    "revision": "a19aa9d3962a9000806ffefae6b5c86d"
  },
  {
    "url": "assets/js/2.aa8159e5.js",
    "revision": "84c3fd9c9341a2d683ac6a5125557cb7"
  },
  {
    "url": "assets/js/20.1e3a8a14.js",
    "revision": "27548786b8b6120695c7b1e39bcd6fd4"
  },
  {
    "url": "assets/js/21.aa34db42.js",
    "revision": "e83fd76685090fdd23ef63e8f0e6af52"
  },
  {
    "url": "assets/js/22.8efaf720.js",
    "revision": "897abcc119a02e7399266a595c5235e1"
  },
  {
    "url": "assets/js/23.9d56e3fe.js",
    "revision": "3f3162d881d3d0ce11d22dbc4f636636"
  },
  {
    "url": "assets/js/24.9000983d.js",
    "revision": "491d17b6c4eb136cf77028e12b4fd681"
  },
  {
    "url": "assets/js/25.8e8caa98.js",
    "revision": "2346b6f85768602e0fb79e313aa08574"
  },
  {
    "url": "assets/js/26.4d1362bf.js",
    "revision": "2ce6edac86badafd71977216eba39163"
  },
  {
    "url": "assets/js/27.c02656b5.js",
    "revision": "5ce78780627bc30cbbd48431fcad803f"
  },
  {
    "url": "assets/js/28.0ee67bcd.js",
    "revision": "3731d4eed22be2b72b9f3d8a090c1f67"
  },
  {
    "url": "assets/js/29.d9b66a91.js",
    "revision": "d6b6484127abd294191c35293eb1c25c"
  },
  {
    "url": "assets/js/3.9f538409.js",
    "revision": "d5c12147fbb0f633e4ba95821ad02aae"
  },
  {
    "url": "assets/js/30.f7bf766d.js",
    "revision": "046709d62ec56d994fbe87fd66091bb9"
  },
  {
    "url": "assets/js/31.db1c5009.js",
    "revision": "33f6dfbd48e32b3d905d3f1950a0b8ac"
  },
  {
    "url": "assets/js/32.cfd96b6a.js",
    "revision": "a4a827f757edb86edcf26437d4ba1fdb"
  },
  {
    "url": "assets/js/4.1050bd8b.js",
    "revision": "f944d0d80c1569b11f0cbfbcaee6e691"
  },
  {
    "url": "assets/js/5.b3df3bb5.js",
    "revision": "30f3fe03834ed7a1d1bd04249688675b"
  },
  {
    "url": "assets/js/6.ebb5b33e.js",
    "revision": "8c4e571e73ba764886c11611c61c373a"
  },
  {
    "url": "assets/js/7.8e7ef716.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/8.6cf5ce36.js",
    "revision": "dfc235ccbb752e9e0bb75908e03d1d7b"
  },
  {
    "url": "assets/js/9.a118b277.js",
    "revision": "1db6ae5e7eaf7f55ce0b463bdce932e2"
  },
  {
    "url": "assets/js/app.a24b30a3.js",
    "revision": "f3a7fd0b6a2b789da7e9f57ca8ee81e6"
  },
  {
    "url": "de/imprint.html",
    "revision": "d361c7aab423c54370a003c02e22e80d"
  },
  {
    "url": "de/index.html",
    "revision": "99e5c0b9daf1a79d848953fb0ae84389"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "ff2fc730f51dcb04991ef39226ccde65"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "925c42e2325bc3344622ca28662c3803"
  },
  {
    "url": "de/menu.html",
    "revision": "fdc6f9950152366960a6ccee3c7891a8"
  },
  {
    "url": "de/privacy.html",
    "revision": "2878b9f2386c47312effe88188067683"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "03ac327ad96b3dc53ec9f9f65ad2a76f"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "2766b10275ec1af34f3a053447241d8c"
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
    "revision": "b3e5cc5e9f30b4b6d2790c0ba199c346"
  },
  {
    "url": "index.html",
    "revision": "5add7f687c652cfae0d5243fb6b36073"
  },
  {
    "url": "it/imprint.html",
    "revision": "92807d69592db0b2f83ede2af480596f"
  },
  {
    "url": "it/index.html",
    "revision": "4646d08163b8541fc4c3bfc543492e66"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "3a58853672db1db7f6284068d199f3c9"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "05a135866c7b23646e717c799aeae78e"
  },
  {
    "url": "it/menu.html",
    "revision": "f5b7f32fdf2399d9b7609e92631b1b7a"
  },
  {
    "url": "it/privacy.html",
    "revision": "58c5fb42ff8b3f39ce9fb80f47edd3ee"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "357bb44822f691ede98880d580a7d68f"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "7d468e56e79a17280da36c00fedae578"
  },
  {
    "url": "legal/privacy.html",
    "revision": "ebe1c74baef0de92fa14e6b68f66483d"
  },
  {
    "url": "legal/terms.html",
    "revision": "025ddabee66fbcb83081886611bc16cf"
  },
  {
    "url": "menu.html",
    "revision": "5428672d1ee755f2b14c1512466adb77"
  },
  {
    "url": "privacy.html",
    "revision": "c7f6b339e1a76ddeec74e270eab55f73"
  },
  {
    "url": "restaurant/about.html",
    "revision": "c2aa3dfe07794eb6dcdea94357a6162c"
  },
  {
    "url": "restaurant/career.html",
    "revision": "4997393f75f3aa09680e7c07b63487a6"
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
