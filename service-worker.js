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
    "revision": "0e9f1260bcfe3663a7da5567627f1c0f"
  },
  {
    "url": "assets/css/0.styles.5dbfc973.css",
    "revision": "021757729ceed1428261bcbd61ce5c39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bb9d92be.js",
    "revision": "e32c792a9a00026178962463350119c2"
  },
  {
    "url": "assets/js/11.c1564716.js",
    "revision": "9a7d1328921ae60828a778edda3d2b85"
  },
  {
    "url": "assets/js/12.61a278a9.js",
    "revision": "70eb75469b0e1ba85f82fabbd51c706b"
  },
  {
    "url": "assets/js/13.9e6d7a34.js",
    "revision": "e92b11e3838164937afc7c9e7354cea1"
  },
  {
    "url": "assets/js/14.64fd2264.js",
    "revision": "92580a7b60a85247367bdabddc89ef30"
  },
  {
    "url": "assets/js/15.dd53c9b9.js",
    "revision": "878dd269f38441616ad337a4f62eefb0"
  },
  {
    "url": "assets/js/16.bc624950.js",
    "revision": "9efd97b40d5ab19957d3a2121df360fe"
  },
  {
    "url": "assets/js/17.985c4fee.js",
    "revision": "450ad22157e84181da7e62d4bc94360b"
  },
  {
    "url": "assets/js/18.24b1b7bc.js",
    "revision": "159c487fa6e289fe6be8a80ea961fb9b"
  },
  {
    "url": "assets/js/19.fde20615.js",
    "revision": "2e2fe7d766c90264f2e907455a876697"
  },
  {
    "url": "assets/js/2.aa8159e5.js",
    "revision": "84c3fd9c9341a2d683ac6a5125557cb7"
  },
  {
    "url": "assets/js/20.65c68f7a.js",
    "revision": "81a1994be3cb8fc77fe889366b49067b"
  },
  {
    "url": "assets/js/21.3b30baa6.js",
    "revision": "0fafa136ea0192aa4e3596bc7d38c251"
  },
  {
    "url": "assets/js/22.d92ba175.js",
    "revision": "5b37485bd4f5027ea7d7c96c310b3a88"
  },
  {
    "url": "assets/js/23.354e6092.js",
    "revision": "3e6fd53b8e520ae3cb8f3f3439be2306"
  },
  {
    "url": "assets/js/24.e0d374a3.js",
    "revision": "f5fd7acb6fa6e784f09e36544b83b7fa"
  },
  {
    "url": "assets/js/25.19d69b2b.js",
    "revision": "7540f2def3cf845839e2f179d93feec0"
  },
  {
    "url": "assets/js/26.382d0a77.js",
    "revision": "02640825d1aa1f2338f10f98b1ead587"
  },
  {
    "url": "assets/js/27.ce95af56.js",
    "revision": "776dc70f4887fcd270b9d946045e1722"
  },
  {
    "url": "assets/js/28.87a33a8e.js",
    "revision": "b93d386c8b81e91d7a400a9ab2efa212"
  },
  {
    "url": "assets/js/29.fdfc5530.js",
    "revision": "b6506ea5b22a1d44bac142856880887b"
  },
  {
    "url": "assets/js/3.9e22677f.js",
    "revision": "8a6806ca55242aba3b9377019614c2fe"
  },
  {
    "url": "assets/js/30.0c3e009d.js",
    "revision": "f94b45fe94b38a5fb18ffebf8fda6ecc"
  },
  {
    "url": "assets/js/31.ace66cdd.js",
    "revision": "3abadfd11ce0e5c7634f6efb90cbb143"
  },
  {
    "url": "assets/js/32.eaccd27a.js",
    "revision": "7768a64bdbf71ce01c50288fc0815a4c"
  },
  {
    "url": "assets/js/33.abbde164.js",
    "revision": "b71e93783775964ec0d6d95eb6ccca9b"
  },
  {
    "url": "assets/js/34.4e2bfd60.js",
    "revision": "83f553267b94bcd28046b2e0d341cc40"
  },
  {
    "url": "assets/js/4.0b2852a7.js",
    "revision": "358d3c1882d603d2bfd1ab6078bc1367"
  },
  {
    "url": "assets/js/5.b3df3bb5.js",
    "revision": "30f3fe03834ed7a1d1bd04249688675b"
  },
  {
    "url": "assets/js/6.83e06a55.js",
    "revision": "d715af4d874585e5b69f31eb7ddf011f"
  },
  {
    "url": "assets/js/7.7aa44162.js",
    "revision": "0f7b17d29cacd16984f1dae345bc9955"
  },
  {
    "url": "assets/js/8.0e3659e0.js",
    "revision": "b168490ef0293b47f0577df2da295214"
  },
  {
    "url": "assets/js/9.712ac042.js",
    "revision": "5f139e25889a37106dd2cb537739698f"
  },
  {
    "url": "assets/js/app.87126acb.js",
    "revision": "5578543215a5ed6dc0dd92595b34597d"
  },
  {
    "url": "de/imprint.html",
    "revision": "1205d969b24ac1e0a2db6ba3ea0ad522"
  },
  {
    "url": "de/index.html",
    "revision": "7cdc00d117fb49759c2aaae561b3399f"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "d38ff174b341c81d92859277d4686bf3"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "cd213bfc2ad2be4d7e124ae3d059be23"
  },
  {
    "url": "de/menu.html",
    "revision": "0b8a2ec11e7d01fb433e6f398e3552b1"
  },
  {
    "url": "de/privacy.html",
    "revision": "cfde56af663ccf11b6052dcbb663f880"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "ec5be73788e98e8e62a307bd69355a91"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "a997616aada300cf3ead2733756ba44e"
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
    "revision": "4a1b61274074fdd7a323c136730722dc"
  },
  {
    "url": "index.html",
    "revision": "e18076f16f223aa646e3bcab1278898f"
  },
  {
    "url": "it/imprint.html",
    "revision": "92600f6ac51ea8ce0d520daf01517974"
  },
  {
    "url": "it/index.html",
    "revision": "192ddec7bbdbdc3b09a52069997d80d2"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "15d644024ad47f45da67ae960714da1c"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "b78b6466b566a32e6beac38b7d7615f6"
  },
  {
    "url": "it/menu.html",
    "revision": "5a301f2b26fd33284659b2cf7b556624"
  },
  {
    "url": "it/privacy.html",
    "revision": "41477766a1ca5aaf123a233f443dfca1"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "cf54c5f42ff030199ce33371de536844"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "5497cdefff4a265264e5162bd054b1e2"
  },
  {
    "url": "legal/privacy.html",
    "revision": "928cb8de4f2fd11482e622af229c5061"
  },
  {
    "url": "legal/terms.html",
    "revision": "1b5873b2c93cd50d8877261cd5faeda6"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "449843a6bcf5c656c32f3bb807473f40"
  },
  {
    "url": "privacy.html",
    "revision": "6177f366063d946c2902664811c59f20"
  },
  {
    "url": "restaurant/about.html",
    "revision": "5db1620502250940982d44775dc7cca5"
  },
  {
    "url": "restaurant/career.html",
    "revision": "91adbc41b4999bcfe282853b1663d71b"
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
