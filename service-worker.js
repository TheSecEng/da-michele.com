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
    "revision": "378e6541129623589ce160dbaaf702ca"
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
    "url": "assets/js/11.7bbd6d10.js",
    "revision": "177e9619221115bc0e8d4c9e7ff4f56d"
  },
  {
    "url": "assets/js/12.693aebd1.js",
    "revision": "88f24da11d2961a52c2b23a42f86111b"
  },
  {
    "url": "assets/js/13.c1400f81.js",
    "revision": "fca0c90c3bc73d637de237589a735959"
  },
  {
    "url": "assets/js/14.04d8226b.js",
    "revision": "b59e2f3e431bf38f3e740dafb40c1d56"
  },
  {
    "url": "assets/js/15.5594c409.js",
    "revision": "d991dcb521d3949d08baa8fa26b7b7d3"
  },
  {
    "url": "assets/js/16.19730a79.js",
    "revision": "d37bfa1cb58e9a94323ab7dfdcfa7f8c"
  },
  {
    "url": "assets/js/17.af1bf05d.js",
    "revision": "1732a9955c0fee04d7745fd09f565a04"
  },
  {
    "url": "assets/js/18.24b1b7bc.js",
    "revision": "159c487fa6e289fe6be8a80ea961fb9b"
  },
  {
    "url": "assets/js/19.db713225.js",
    "revision": "a077b96bf0605d147f2980794333b618"
  },
  {
    "url": "assets/js/2.6670b8d7.js",
    "revision": "5353b2f516f67cb654982c52e4e03c0e"
  },
  {
    "url": "assets/js/20.e35958a5.js",
    "revision": "0140ebfe2e05c3ecf74d27ae07ae7de7"
  },
  {
    "url": "assets/js/21.cf222cd1.js",
    "revision": "c68c7339b1cb613ba63e72628d01a27c"
  },
  {
    "url": "assets/js/22.f48fe8f1.js",
    "revision": "51d593e02baa93440ce55207b5cf17c8"
  },
  {
    "url": "assets/js/23.b3741868.js",
    "revision": "6b6b63942714499842f05ab9c6d563c6"
  },
  {
    "url": "assets/js/24.c88f2d3e.js",
    "revision": "d4d996de8620397e9e3125cf66ba44df"
  },
  {
    "url": "assets/js/25.e34e1348.js",
    "revision": "8f9c290040ff48ed80008bea9c7ccc7e"
  },
  {
    "url": "assets/js/26.55e231cb.js",
    "revision": "077324d7b2fa88888487e4deac5e910f"
  },
  {
    "url": "assets/js/27.583b12ae.js",
    "revision": "0deb25177ec14839f9ceedca9ce378e5"
  },
  {
    "url": "assets/js/28.202c3619.js",
    "revision": "c73381cbba9c10bdc28cdd525a4e83d5"
  },
  {
    "url": "assets/js/29.4ad620bf.js",
    "revision": "3f13fd5be6ce972b37bc19b7fc99952a"
  },
  {
    "url": "assets/js/3.e1e71c1b.js",
    "revision": "745079bb75f193d7c3823dcf3358e05e"
  },
  {
    "url": "assets/js/30.b9286f57.js",
    "revision": "f81ac1a372267367fcb6a70232ad96e1"
  },
  {
    "url": "assets/js/31.71a906c5.js",
    "revision": "b27fdb336a8751d0be545439082d1968"
  },
  {
    "url": "assets/js/32.b6d24a71.js",
    "revision": "e0281531d6542e37a6ec8d8d03da0a48"
  },
  {
    "url": "assets/js/33.78dadd90.js",
    "revision": "9f588d13b54555e239ec826d7eb2cc2f"
  },
  {
    "url": "assets/js/34.53ff7f0f.js",
    "revision": "82091174b4c74cba058200655d613628"
  },
  {
    "url": "assets/js/35.909ccbe3.js",
    "revision": "f244de4abe2981d4e6be6c09901d43d9"
  },
  {
    "url": "assets/js/36.53189581.js",
    "revision": "0d8127dd9f85c06439b66c6f1f9a50bd"
  },
  {
    "url": "assets/js/4.2a745adc.js",
    "revision": "1cddd6a7b947351bfb94062a23b0aa47"
  },
  {
    "url": "assets/js/5.fb7e5b0a.js",
    "revision": "83a68cec09a5c17964249851a8025f3a"
  },
  {
    "url": "assets/js/6.502ea2a9.js",
    "revision": "d8702d0f2d6c1778e724d2e21d8fcfc3"
  },
  {
    "url": "assets/js/7.49a48856.js",
    "revision": "a22fcfb3e5f2daa58c7c186643ae8f9e"
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
    "url": "assets/js/app.61af12e0.js",
    "revision": "6760a7aa277585aea9f15c5252ddd7fe"
  },
  {
    "url": "de/help/sales_refunds.html",
    "revision": "1b2e6df5aa84edd37166ade01a6e3aab"
  },
  {
    "url": "de/imprint.html",
    "revision": "c2c35ac17388e6790fa67ba68a11acf4"
  },
  {
    "url": "de/index.html",
    "revision": "fb652a1c6c8dd9be588c1dc4bcc1d2a1"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "4af049fd258396565b44e0f15a4e17ef"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "d175d461c068701efde896be642a9afd"
  },
  {
    "url": "de/menu.html",
    "revision": "24ed2bdb29a020ef3be070eaa5aa3084"
  },
  {
    "url": "de/privacy.html",
    "revision": "9af71fa63bba1483a0537982db53ed1e"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "5d88d593b5ba7767bcd9a299b2f542b4"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "4c9641f044325880334c3b191306644e"
  },
  {
    "url": "help/sales_refunds.html",
    "revision": "b1886f512a60bdd9593d5645e0f20f0f"
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
    "revision": "bbf70cb399b598755a80b47b37f13e59"
  },
  {
    "url": "index.html",
    "revision": "b2801c66ad6c7addd0ea1aec421041fe"
  },
  {
    "url": "it/help/sales_refunds.html",
    "revision": "d53329f35526bb03f6f213f3d46084e9"
  },
  {
    "url": "it/imprint.html",
    "revision": "4d0f70d7f19645ab6e37d7997c2988f6"
  },
  {
    "url": "it/index.html",
    "revision": "7b73ee3ec77758931893a9134a8d4567"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "a7b655f7474c9e91de3611a3cbb798ca"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "edf346e88804459ce553eab1b96b88dd"
  },
  {
    "url": "it/menu.html",
    "revision": "26cb5e82f73ab3a02f49a4b4302dbc47"
  },
  {
    "url": "it/privacy.html",
    "revision": "47193eba38564ffe3f949eecac5fbf10"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "840431ebd8c4179c80be0d1e33920eba"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "c6de0aff9c97dbe14ef01938c35ec6e4"
  },
  {
    "url": "legal/privacy.html",
    "revision": "a573e2cd5e3d0be9fe4aa319939a9983"
  },
  {
    "url": "legal/terms.html",
    "revision": "94c7de1afe42f3e70a807154ad9488e4"
  },
  {
    "url": "menu.html",
    "revision": "b8b6eeb24efdbcec8e89cbf16804d9cd"
  },
  {
    "url": "privacy.html",
    "revision": "a679661ba703b7bee06826cceebf8983"
  },
  {
    "url": "restaurant/about.html",
    "revision": "27d578058d583145fba6c2b11cc0ce47"
  },
  {
    "url": "restaurant/career.html",
    "revision": "32809d3f1638507c67150ff5cff2d458"
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
