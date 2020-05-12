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
    "revision": "005eee84b980239868f85aad567c185e"
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
    "url": "assets/js/12.12a487f4.js",
    "revision": "706b767de72e02435278e4c8e117eb32"
  },
  {
    "url": "assets/js/13.15d59b26.js",
    "revision": "28bae51a4bf5fffacbce8e6f2800dbf8"
  },
  {
    "url": "assets/js/14.d2b35a7a.js",
    "revision": "3310f5ecafbba5f5a29c1fef7f923f43"
  },
  {
    "url": "assets/js/15.df3e6a62.js",
    "revision": "4f69ec5e2d75a856ef5047cc4e745920"
  },
  {
    "url": "assets/js/16.a76ee580.js",
    "revision": "e61da077fb9f729524248e2890d5338d"
  },
  {
    "url": "assets/js/17.9e330647.js",
    "revision": "aa61486f8169b992d70a00484ad9db5b"
  },
  {
    "url": "assets/js/18.110333be.js",
    "revision": "aba246ce4ada5fd5e51e2d1e3b3d0c4b"
  },
  {
    "url": "assets/js/19.f4f25ce8.js",
    "revision": "719c772937d9cd867a79d69796712003"
  },
  {
    "url": "assets/js/2.6670b8d7.js",
    "revision": "5353b2f516f67cb654982c52e4e03c0e"
  },
  {
    "url": "assets/js/20.dfc91e5d.js",
    "revision": "5db023ffaa8c28094bdeb0605f0bd972"
  },
  {
    "url": "assets/js/21.7e7834d6.js",
    "revision": "07c8db9f1d9bba171b50183e42c2460c"
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
    "url": "assets/js/4.3a026111.js",
    "revision": "c5108fe1b423f54d745744e7b23f7635"
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
    "url": "assets/js/app.60c39c11.js",
    "revision": "745958453edb9821916b2295038b2c23"
  },
  {
    "url": "de/imprint.html",
    "revision": "b7c76f65e0d0a9a3ac9899dd14ef2211"
  },
  {
    "url": "de/index.html",
    "revision": "f3d653028a8620680df90788cc1a84bc"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "09cf661fceecff3a0b294f850a5e7c82"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "4c3ec351ce31a4e185b6a41516fac050"
  },
  {
    "url": "de/menu.html",
    "revision": "3ef4730e457f7e8b6fc5c244bbb9d53f"
  },
  {
    "url": "de/privacy.html",
    "revision": "6532adc86bb77aecd810dec7ad250db9"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "7efb07e2c0e86b0e5de5a30fb13e971d"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "97eca9e1bd83ab72e00e017eebb5f317"
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
    "revision": "ecb63d2f87c27b9da52888ee997c7191"
  },
  {
    "url": "index.html",
    "revision": "1b1c5f46c2553f4936d9faf9f61dd164"
  },
  {
    "url": "it/imprint.html",
    "revision": "02923778edd9b2923ee467065afda2f4"
  },
  {
    "url": "it/index.html",
    "revision": "485d37469244fedfeb7a098c193ee8cc"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "ad0a6edd05c77de6d8b5f7f39d2d81b3"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "3ad8495ac9aae2aa5e32efea021483ae"
  },
  {
    "url": "it/menu.html",
    "revision": "9fcd326392fc721491e6f1011e131b07"
  },
  {
    "url": "it/privacy.html",
    "revision": "cf188e34c7275d4cb478515c56ff9e49"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "8000642ac4d732474438aec0aed246c1"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "e46a232ba60d63b39a26def31ed85e7b"
  },
  {
    "url": "legal/privacy.html",
    "revision": "33ccfed0b2f87652ffbd839e3bb20f9a"
  },
  {
    "url": "legal/terms.html",
    "revision": "d8356c7899cda06b32a9e8c1345a9d33"
  },
  {
    "url": "menu.html",
    "revision": "0c7f06185290962068bfb5a90c9c506b"
  },
  {
    "url": "privacy.html",
    "revision": "a543683ebf1ddc2a658aba15045555b1"
  },
  {
    "url": "restaurant/about.html",
    "revision": "4e3bf36dc6a6d10bc5f3fdb4b976f466"
  },
  {
    "url": "restaurant/career.html",
    "revision": "c55a94a653453a1a7af6fef22f5be244"
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
