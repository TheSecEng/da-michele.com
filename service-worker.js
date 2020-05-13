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
    "revision": "9e65592ea78684406f03c39b770b040a"
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
    "url": "assets/js/4.055c6655.js",
    "revision": "dc62483625a02110f5e81461733d3bfb"
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
    "url": "assets/js/app.410d4a33.js",
    "revision": "2ebc82da444b926294e7cd6167b3e14a"
  },
  {
    "url": "de/imprint.html",
    "revision": "ec08139906f04fd335fab3f383763370"
  },
  {
    "url": "de/index.html",
    "revision": "e4ffbcc50d44f80c37f7fccdfb2529c3"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "955738bb6ad7f17929e2ead90426656f"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "869607a64d21bb63c5b0878a73289e0c"
  },
  {
    "url": "de/menu.html",
    "revision": "9a92d57bf05ae4f1dafcef21973f85fd"
  },
  {
    "url": "de/privacy.html",
    "revision": "22f028a525cc98e61758338606523c92"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "f8f70dc938e3087611189800fc1769ab"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "28b4f09574eab49bfd8c43e9c1d0944c"
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
    "revision": "ab2233f720d8d9944f6fed42e0ace250"
  },
  {
    "url": "index.html",
    "revision": "fb7855ea77009d458b897e2e4c951c62"
  },
  {
    "url": "it/imprint.html",
    "revision": "f0a8022a355e4e7203bced8779cffc83"
  },
  {
    "url": "it/index.html",
    "revision": "59e1fa4153cb5f81d7139b9697b2c0bf"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "0a5b870159388959a4163bb89233ba38"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "48557b11f6c194264ff91c7ff12726f6"
  },
  {
    "url": "it/menu.html",
    "revision": "82a619410611dde5e64f16e069e56038"
  },
  {
    "url": "it/privacy.html",
    "revision": "aa04ac57b8d5722eeff25b25714c9ac6"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "863af2d697d0b1794fac3b358085bfa9"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "9baa1087a46daa5a19e74d6fa7682edf"
  },
  {
    "url": "legal/privacy.html",
    "revision": "93798bbad53a457814579f7355876b2a"
  },
  {
    "url": "legal/terms.html",
    "revision": "4f3e92d5c18546288483b1101acf271d"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "16f4ed1f18ec888c50af8535985dad91"
  },
  {
    "url": "privacy.html",
    "revision": "2df1aecfce0be6fa6ff336c1e1e8a563"
  },
  {
    "url": "restaurant/about.html",
    "revision": "e0ae109e5134b74d53d77b03afc0f8ec"
  },
  {
    "url": "restaurant/career.html",
    "revision": "0f693624d977a8290d4475c3f06b9e19"
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
