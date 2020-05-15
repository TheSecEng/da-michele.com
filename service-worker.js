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
    "revision": "abfa915d5e50e0608a69db1066819b03"
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
    "url": "assets/js/13.a41b8cbb.js",
    "revision": "a71219f8f71b95c47274c905387b4fa1"
  },
  {
    "url": "assets/js/14.e6f62424.js",
    "revision": "38aaa6aecefc8c17f77ce0d9680e1bd7"
  },
  {
    "url": "assets/js/15.56a2ddaf.js",
    "revision": "d4e3912d4af4af3ab573130a4dba7dd6"
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
    "url": "assets/js/24.28ed5afd.js",
    "revision": "b3ffd6d1f062008ff4e34b289eefb73f"
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
    "url": "assets/js/30.e9150195.js",
    "revision": "f8c51bd2978d54484c77376093937136"
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
    "url": "assets/js/app.d5a4f65f.js",
    "revision": "5a19ea5698218bb08feb84bd986d6c44"
  },
  {
    "url": "de/imprint.html",
    "revision": "01b223c75a594aaf5551294b001deff3"
  },
  {
    "url": "de/index.html",
    "revision": "ca51c4c38c21a331bb810a9d841b999f"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "dc7dd224dec95da70595dbd613769165"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "463ff696c4758c4940a5b83843b64318"
  },
  {
    "url": "de/menu.html",
    "revision": "e1587703af19792b59248b215a365419"
  },
  {
    "url": "de/privacy.html",
    "revision": "292346a77cebdf209b43852f954c8d85"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "77c97602edeaa778bd931a7299c70e8a"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "1aa47d11fd5c8758f872ab4e0fa80106"
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
    "revision": "f05b37ae81e5e9b201621c4dc9e8c7b5"
  },
  {
    "url": "index.html",
    "revision": "cd210bfcb7ab8e05b9251dd91fcac86e"
  },
  {
    "url": "it/imprint.html",
    "revision": "65b8cd1aa3cbebbc9d324dd66986ca4d"
  },
  {
    "url": "it/index.html",
    "revision": "c298c477b4ab0375bd00d33c5025fa02"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "5bba7f2d3a7cb9aeb1bf98248652897a"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "44b7fd646f5cefdc015d679f82e7a446"
  },
  {
    "url": "it/menu.html",
    "revision": "da70ceee656137fdc9cb1a9285da666e"
  },
  {
    "url": "it/privacy.html",
    "revision": "168fa6ae3b3dc61a0199ddca33c3a1f3"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "953d285a19945574231d6030635b8755"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "bcfbf764d6a0dbd03e748484decda6f0"
  },
  {
    "url": "legal/privacy.html",
    "revision": "4738f7420feaed9b890535e5c8b5fad1"
  },
  {
    "url": "legal/terms.html",
    "revision": "3c9d76b4079eb46656b5f876c8f9badc"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "5c3afe590cb20d0c485b222679652540"
  },
  {
    "url": "privacy.html",
    "revision": "005268e74685af424ab890c83b93b547"
  },
  {
    "url": "restaurant/about.html",
    "revision": "6c71d57604e15bce235f0bb2ed1dc3c5"
  },
  {
    "url": "restaurant/career.html",
    "revision": "c8cdfdc54da2bb5b40003402e04162e3"
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
