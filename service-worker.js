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
    "revision": "b46990e00f0391afe5e5681d3724e431"
  },
  {
    "url": "assets/css/0.styles.965d69ff.css",
    "revision": "a2d491e257dce845906861362a105455"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.292cdaca.js",
    "revision": "cae7e052b7cef5e92050cffcd57a45d7"
  },
  {
    "url": "assets/js/11.32582447.js",
    "revision": "53fef912b44acea0c5eb93227bc2ae92"
  },
  {
    "url": "assets/js/12.29c30bff.js",
    "revision": "35a2240bd30bf8f37893ffd1f92e242a"
  },
  {
    "url": "assets/js/13.43f106e9.js",
    "revision": "fc1be07440fcb9b630ea48a8ccf0cd46"
  },
  {
    "url": "assets/js/14.47c310ee.js",
    "revision": "d726a1262a615f2d53779faf806eb2c1"
  },
  {
    "url": "assets/js/15.56a2ddaf.js",
    "revision": "d4e3912d4af4af3ab573130a4dba7dd6"
  },
  {
    "url": "assets/js/16.17042762.js",
    "revision": "285bacf380cd7544296e251f3b8df8dd"
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
    "url": "assets/js/19.9eb86b37.js",
    "revision": "a71c64e41ea85d080e0d95b6b9b96a9d"
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
    "url": "assets/js/22.dcfcb569.js",
    "revision": "b735d798beb81d2fe870b4bd6f685eb2"
  },
  {
    "url": "assets/js/23.28f8bcec.js",
    "revision": "c0720268fff45468ada66e489907869d"
  },
  {
    "url": "assets/js/24.28ed5afd.js",
    "revision": "b3ffd6d1f062008ff4e34b289eefb73f"
  },
  {
    "url": "assets/js/25.c8d32b69.js",
    "revision": "43ef558aa4d9f13b08962972ed03c9e4"
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
    "url": "assets/js/28.cbe6399c.js",
    "revision": "0d3376360159b473244bb66a8c01cd7d"
  },
  {
    "url": "assets/js/29.2bb59026.js",
    "revision": "c6a2e5b6a47d99278b27274058d10706"
  },
  {
    "url": "assets/js/3.72afb391.js",
    "revision": "6ea3be6c2befb0ec0cf57f7c5dc8bb82"
  },
  {
    "url": "assets/js/30.e9150195.js",
    "revision": "f8c51bd2978d54484c77376093937136"
  },
  {
    "url": "assets/js/31.a7056f04.js",
    "revision": "6da3ed1fafd7e2c334caca7d34add08c"
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
    "url": "assets/js/4.ea3fa28c.js",
    "revision": "f71f5d48e99b6395cdf4ed17d4232262"
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
    "url": "assets/js/app.06f14c58.js",
    "revision": "dc67f3f3a94fcc541d8d728712710960"
  },
  {
    "url": "de/imprint.html",
    "revision": "74df5aa8467b42a849fcc59095365bbc"
  },
  {
    "url": "de/index.html",
    "revision": "73c72512da9840909829a3aed6339a0c"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "589938c46d806972de401407f40db77a"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "b558e4bd1529601cb268b86a465e71fa"
  },
  {
    "url": "de/menu.html",
    "revision": "4003b1d9d48e424957750efc3f859405"
  },
  {
    "url": "de/privacy.html",
    "revision": "8287e55be7952b829ad9f7ece68c8c79"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "1b4070be2f3c5729209662a593dc6100"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "1298a4747be2d77bdd39ae54cb2af85e"
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
    "revision": "99eee8b377920946df8ed1f4349546c3"
  },
  {
    "url": "index.html",
    "revision": "928ee28268cc8b5ac172e61a2063968b"
  },
  {
    "url": "it/imprint.html",
    "revision": "01c8573b5f2ca1167ada64f1d10accc4"
  },
  {
    "url": "it/index.html",
    "revision": "c55a116e08104be0ac1374814feb29f8"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "b06cb30a89cb21328f57c1081f70c5df"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "2eaabbd78f3eb1e1b177f8e49c90152a"
  },
  {
    "url": "it/menu.html",
    "revision": "7ac381fa6c40d2916572de17dc8502ee"
  },
  {
    "url": "it/privacy.html",
    "revision": "d1f3e1fcf368576a86289365062d19e1"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "fcdc19b8551bb6dbcce3f8ff21a9d9c5"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "35fe92c751cac7b23c0d895f8eae1f6c"
  },
  {
    "url": "legal/privacy.html",
    "revision": "e0e1a4493176e227daa9db7407d47b1e"
  },
  {
    "url": "legal/terms.html",
    "revision": "133bb8375dd2cea41ef623b3b75635a0"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "66eb2ee6d6124795d5c63340c303969d"
  },
  {
    "url": "privacy.html",
    "revision": "c6ea101f995d3bbea9b0a6ee3e95f545"
  },
  {
    "url": "restaurant/about.html",
    "revision": "13d6216606bd649aaeb32d97781a30f9"
  },
  {
    "url": "restaurant/career.html",
    "revision": "76c3c57a660143584d8b0c271c17f01f"
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
