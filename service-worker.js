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
    "revision": "9d894bf57b07902eb503ed683b9abbb2"
  },
  {
    "url": "assets/css/0.styles.79c4159c.css",
    "revision": "6ef2e132738dfdfce3a63417eefcc2a2"
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
    "url": "assets/js/21.6c517299.js",
    "revision": "a3679d29a8b343d20f6f0091bcf64cce"
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
    "url": "assets/js/27.02078dde.js",
    "revision": "0bbd1629c16451195bca474bffb13952"
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
    "url": "assets/js/4.09cf6e4e.js",
    "revision": "3bfbf2311bfc69a4c74ea3b60c84a0ef"
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
    "url": "assets/js/app.81bd6110.js",
    "revision": "1d17a57ed5abc7482ca2933326b17204"
  },
  {
    "url": "de/imprint.html",
    "revision": "a4e2bf22e58c4f32cf160058ffb4a8ec"
  },
  {
    "url": "de/index.html",
    "revision": "c7b65621e8aa00ace54423ff36c5f43a"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "4e61c49fe9d4ac7c7876508adb5f70e1"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "9acd13b7d9260a04c2c42a6444eec742"
  },
  {
    "url": "de/menu.html",
    "revision": "1c69a1d1c044cc0db22eb4c37fb8d152"
  },
  {
    "url": "de/privacy.html",
    "revision": "4dda1008187fa72cf091f5c904cdff53"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "3b680bfea92063d2abe1e92fb90adebe"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "899b302045d12605d0fff1da4ae3e200"
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
    "revision": "f79061d63033c5b2bb89d3246ba98287"
  },
  {
    "url": "index.html",
    "revision": "489d820b1a27a5128f1138a2f813efb2"
  },
  {
    "url": "it/imprint.html",
    "revision": "8782b9131fbd1064d97ad4102d7c6f2f"
  },
  {
    "url": "it/index.html",
    "revision": "50da5726c83392ee0b2fa79f2ed84efc"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "bbe0d9f0034b03b991653633870c08dd"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "9e1556265af410fb00ace390d96e7e65"
  },
  {
    "url": "it/menu.html",
    "revision": "9f097a7195367ce0879eb81d23bbd6db"
  },
  {
    "url": "it/privacy.html",
    "revision": "e09c3a993c6828f4a2b383eccfa23a2d"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "e484ba90450b6699e3d0dbc6609d4946"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "22aa8af1ccd5226a859cd40d5fbd014b"
  },
  {
    "url": "legal/privacy.html",
    "revision": "6631b2793dc04b7a08de18a5ce8bd745"
  },
  {
    "url": "legal/terms.html",
    "revision": "392906a7f6218505add702a6607b1e77"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "3e865b2914b1b98921bfe6849074d5b3"
  },
  {
    "url": "privacy.html",
    "revision": "a0946bb8f8782718efe3235a561ea9f5"
  },
  {
    "url": "restaurant/about.html",
    "revision": "d9923be2da283c70ce3664e035ad8457"
  },
  {
    "url": "restaurant/career.html",
    "revision": "d98791b7fafb5f7da3eb772dd9287646"
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
