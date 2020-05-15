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
    "revision": "4ca41fe27da228f4a9e10d247292f254"
  },
  {
    "url": "assets/css/0.styles.d82f4df9.css",
    "revision": "52d756d8e18b29694212219f88aa6a34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6fd2084.js",
    "revision": "76a859d91f265b78917c04765ab63b09"
  },
  {
    "url": "assets/js/11.b89fa7e6.js",
    "revision": "d6cfb0ebbe90bf442e6e32c920b58417"
  },
  {
    "url": "assets/js/12.3392eea6.js",
    "revision": "1b9fe1eb9aa672e3cff0b784bc6a0809"
  },
  {
    "url": "assets/js/13.1da14b5d.js",
    "revision": "9adc90ed5e5fffc6c6f004e4e77d4eb7"
  },
  {
    "url": "assets/js/14.e6f62424.js",
    "revision": "38aaa6aecefc8c17f77ce0d9680e1bd7"
  },
  {
    "url": "assets/js/15.a562b35a.js",
    "revision": "505e6ac50ded3344256eb591f5d1fb44"
  },
  {
    "url": "assets/js/16.0b61c343.js",
    "revision": "ce1ff5a7055e196d8aa06310aefd6f69"
  },
  {
    "url": "assets/js/17.7249ee0c.js",
    "revision": "3eb620c1ae23cd767be0fa23744d3f0f"
  },
  {
    "url": "assets/js/18.f4326511.js",
    "revision": "dcb0e20c63a63d0d4c1b5071636e1225"
  },
  {
    "url": "assets/js/19.e67ee222.js",
    "revision": "6b8c0d9be7598413a110b2f54122d10d"
  },
  {
    "url": "assets/js/2.20c98e0f.js",
    "revision": "16386a7d0a287b7c55764a9e785cd11a"
  },
  {
    "url": "assets/js/20.810f7503.js",
    "revision": "a6eea5b54bdc003650047745f03e4e8d"
  },
  {
    "url": "assets/js/21.9a15411b.js",
    "revision": "2d6617f6da890e39386bc95ecedafcc7"
  },
  {
    "url": "assets/js/22.5606f9f1.js",
    "revision": "11c08eb7741dcb8ca22430ef0835ec10"
  },
  {
    "url": "assets/js/23.13bd163f.js",
    "revision": "39e85221567343bf6c1d0edc0402dca3"
  },
  {
    "url": "assets/js/24.f085c8a0.js",
    "revision": "5009740d55df868a311172c0df7e4b12"
  },
  {
    "url": "assets/js/25.f4a3d7db.js",
    "revision": "b62f6721f3b8735f4d504990c55f2153"
  },
  {
    "url": "assets/js/26.5c57dff2.js",
    "revision": "29b02fe7f8c2454b814f09e60cff7393"
  },
  {
    "url": "assets/js/27.d0980dc9.js",
    "revision": "38db8f582e8984130ed5c1364fcb038b"
  },
  {
    "url": "assets/js/28.aff069af.js",
    "revision": "9ed00185c77c41e0d641b3bf25385cf0"
  },
  {
    "url": "assets/js/29.3b138c1e.js",
    "revision": "8f4a329ef1b1a0c63cce887aaf0baa35"
  },
  {
    "url": "assets/js/3.72afb391.js",
    "revision": "6ea3be6c2befb0ec0cf57f7c5dc8bb82"
  },
  {
    "url": "assets/js/30.70a524d2.js",
    "revision": "2dce49b3c3e673e03a65fc3c5bc347ff"
  },
  {
    "url": "assets/js/31.f810684d.js",
    "revision": "5383bd05b2648305cff63e5d5e325eb5"
  },
  {
    "url": "assets/js/32.94369848.js",
    "revision": "da3dfbdeae46bff0440e681c9c6eec36"
  },
  {
    "url": "assets/js/33.adb9ff65.js",
    "revision": "bf45e1ec86262c0a5d65ad3bd09d5207"
  },
  {
    "url": "assets/js/4.66bee867.js",
    "revision": "342a913573d2a085a8e3522ee24fe2c3"
  },
  {
    "url": "assets/js/5.dec51a4b.js",
    "revision": "b3e350c10adca46b8818f2067f01052c"
  },
  {
    "url": "assets/js/6.ccb6020a.js",
    "revision": "6fc151d3b574900c9cbd8416957ec19e"
  },
  {
    "url": "assets/js/7.f44cd8ef.js",
    "revision": "34c15fdf804b4f8ef1250876ac2e9aac"
  },
  {
    "url": "assets/js/8.f9ea9f40.js",
    "revision": "7ac6c9a546af7a6f5ba0858da6b67643"
  },
  {
    "url": "assets/js/9.57030acd.js",
    "revision": "644036c2bfd35b739d4b4147dabee9ee"
  },
  {
    "url": "assets/js/app.3f45cfa1.js",
    "revision": "b4c01a4c4dce30423603261e719fefe3"
  },
  {
    "url": "de/imprint.html",
    "revision": "4c51c8c68c862beeca549ffbb6899573"
  },
  {
    "url": "de/index.html",
    "revision": "8b4c5c4d0796bdb4edc45d0015252625"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "2ab49ff7a83f810b7e5eff6809ce63a3"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "8adb8c271d94e442541a78e1fd93ed48"
  },
  {
    "url": "de/menu.html",
    "revision": "91fd226068c3527ad2df2fc151dabbc7"
  },
  {
    "url": "de/privacy.html",
    "revision": "2d82fdb858c789f3fd19b6c8c95195e5"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "06669e83de8e24448583faaed6ff4280"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "a9f8dcc9f33d8b65caace4e44ea251cc"
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
    "revision": "f4ede00c9997b8f2c9874a66c674873e"
  },
  {
    "url": "index.html",
    "revision": "0f7e1e082012e6cd51f7687f8b78e84b"
  },
  {
    "url": "it/imprint.html",
    "revision": "643fbab37d94348dd820b829f3aada92"
  },
  {
    "url": "it/index.html",
    "revision": "44f27a7da0d267da12d6de9ffa9d028b"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "62fca02458705fb3ed2ddb9b4ded147e"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "e7a2d79f19a1f4ada68f7d25dd4eeb28"
  },
  {
    "url": "it/menu.html",
    "revision": "bd3c0c82fd0765709b9ed3f1ff707b4a"
  },
  {
    "url": "it/privacy.html",
    "revision": "9277c58f5e0f96a6bd7af19a1418db8c"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "e92476aecef25d4e84e0f519cda3f10e"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "fbf7e66575fc21e4d7abee25106dacff"
  },
  {
    "url": "legal/privacy.html",
    "revision": "ebbf322dbfca7e3c54f9098b56551b88"
  },
  {
    "url": "legal/terms.html",
    "revision": "1c5e35a01946489bda891ec5856ca087"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "e85042e4e36af73aecbbdcb38b4bb4ee"
  },
  {
    "url": "privacy.html",
    "revision": "67c9833054261092052c8b048c198020"
  },
  {
    "url": "restaurant/about.html",
    "revision": "8bb7547b25ef01540085c81e23f614cf"
  },
  {
    "url": "restaurant/career.html",
    "revision": "97530521bc950670ce52a2ea1522adb3"
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
