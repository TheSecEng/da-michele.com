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
    "revision": "57c2f243268bb2520bf618616ddfaabc"
  },
  {
    "url": "assets/css/0.styles.2a44af4b.css",
    "revision": "55b0e81336a2d069b5a64ab151414a8b"
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
    "url": "assets/js/11.149f0387.js",
    "revision": "ed8fd5dba1b83735887f794d2ecfedad"
  },
  {
    "url": "assets/js/12.41e4b45f.js",
    "revision": "c380663c1ba6f9653a6a33bfebc570c4"
  },
  {
    "url": "assets/js/13.25f124d2.js",
    "revision": "ad7bed6439519b06be0597f4e3592254"
  },
  {
    "url": "assets/js/14.512deb7a.js",
    "revision": "79ff2edf96a8eb202c306deea627b4cb"
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
    "url": "assets/js/4.df703185.js",
    "revision": "b5d288825c7bb1ded9526b09dfcca679"
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
    "url": "assets/js/app.67637e34.js",
    "revision": "d79f454be0c0b9d48ccb1e54f1bad974"
  },
  {
    "url": "de/imprint.html",
    "revision": "331c6a23820bed8cd862ce18a3abad1d"
  },
  {
    "url": "de/index.html",
    "revision": "69cf7b2ab284f34d11e2592838cfd6aa"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "da89c8dae419d6c496035982b2233183"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "9bb545d4f3f7117e66662a219bc67dfa"
  },
  {
    "url": "de/menu.html",
    "revision": "432e3d9ad00e8bc017a7a7d7d615bd26"
  },
  {
    "url": "de/privacy.html",
    "revision": "ec01576dfffa92f623910bc48bb857ae"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "a922e34e0f3748332c15233dbaff36af"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "fedb01cac5184ccaeadea007b78f29d4"
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
    "revision": "62709778530edde1c9c67d3bae2cbe00"
  },
  {
    "url": "index.html",
    "revision": "22dac5bf291f60c7485503fd17f42977"
  },
  {
    "url": "it/imprint.html",
    "revision": "9bdfcad8fc0ca7106e007bc9cb04e6b8"
  },
  {
    "url": "it/index.html",
    "revision": "11632aeab35f496507173a5bf9dd8137"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "c0307639bf80a9af44634364cb619b67"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "e9eb7ed7b9a43aaac15720c81b8b4c00"
  },
  {
    "url": "it/menu.html",
    "revision": "0b93a41959f0795dafc13722233b7501"
  },
  {
    "url": "it/privacy.html",
    "revision": "2f55c6836202327373802f85ff94c382"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "3147f2cb1f12f70d815a65f0f81a0af0"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "2fb4c2896dfd872ed9eceb511eecdf18"
  },
  {
    "url": "legal/privacy.html",
    "revision": "f197e90ee80f5a45f0543ef46b34878a"
  },
  {
    "url": "legal/terms.html",
    "revision": "d82cffc4547bfe1103fe54282b9e032c"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "014d679f38085be79c2c010439d28da4"
  },
  {
    "url": "privacy.html",
    "revision": "71e29688a46b7a0d251d3d2e063c4d1d"
  },
  {
    "url": "restaurant/about.html",
    "revision": "343c33e1d42894263b2110e407f727b2"
  },
  {
    "url": "restaurant/career.html",
    "revision": "20ab9f3e34a95f5ce093876e577303b6"
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
