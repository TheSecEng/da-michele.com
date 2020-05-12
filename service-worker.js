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
    "revision": "ef601439e8e60c3e5b4e473bf3aee3b8"
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
    "url": "assets/js/app.161ddee8.js",
    "revision": "4180d9fd2d91863934e222edd1e04e8a"
  },
  {
    "url": "de/imprint.html",
    "revision": "2e674b0058b0b8aab5b2d49c4cb078ae"
  },
  {
    "url": "de/index.html",
    "revision": "d004505c8824e7c0a0cfdfce9d48cc86"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "de6706ab1a4fdc3d761d3c7c7bf710bc"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "8759069f84513de99e9910bca575b750"
  },
  {
    "url": "de/menu.html",
    "revision": "147d678032ec83153772f52f1af32642"
  },
  {
    "url": "de/privacy.html",
    "revision": "23c69856239949c69f459f1be7d542b1"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "528728cdd9f4915dbfd09bd32455236c"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "3216ddb0dab80364fc71864f4cc48c45"
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
    "revision": "0aeaf620ae7bbb92e7be4472a8eabada"
  },
  {
    "url": "index.html",
    "revision": "7e8f335fca2d5201500845d6bc28bd7c"
  },
  {
    "url": "it/imprint.html",
    "revision": "ad41f7d564fa14be679248781ddb3a9e"
  },
  {
    "url": "it/index.html",
    "revision": "5736e346744a6b0e8c69553ec14fb745"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "c14bb76abe38c5eb75d7058e1595b7ec"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "298ec7ca4924a78337ab44f810b9bc06"
  },
  {
    "url": "it/menu.html",
    "revision": "e5643637ddd2aa95fcb5b4e920d0692e"
  },
  {
    "url": "it/privacy.html",
    "revision": "356bd57b660b431cc878955321e48986"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "72227c3464af5d4238a438663b20d92e"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "e5f6c2a9fc4486f706078db9cfcdee46"
  },
  {
    "url": "legal/privacy.html",
    "revision": "e88d9a907ba075625a02f3422b8d7a0b"
  },
  {
    "url": "legal/terms.html",
    "revision": "99a16046369f184f0b90201cac68d0ee"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "c17a9c3b1d970868353175a1997a6f5f"
  },
  {
    "url": "privacy.html",
    "revision": "1a25d8f77c24c03d0ea77bca4b3dbde2"
  },
  {
    "url": "restaurant/about.html",
    "revision": "dda8ea82de890cbdb4b3c6cd2cd0311a"
  },
  {
    "url": "restaurant/career.html",
    "revision": "9fd6a8ff5111c1d93e140bcfc74df11b"
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
