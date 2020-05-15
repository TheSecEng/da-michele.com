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
    "revision": "ca91b569d0d00bc3fd931f956dce1dbd"
  },
  {
    "url": "assets/css/0.styles.670d18b5.css",
    "revision": "8105c39ed71e74a7ef3669c14543deef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.687e2b80.js",
    "revision": "29702e39d3efb68052c28cd1e31429d3"
  },
  {
    "url": "assets/js/11.a8d60ba7.js",
    "revision": "7277ebac76a89d848e116ba4f6ea7bac"
  },
  {
    "url": "assets/js/12.805262f7.js",
    "revision": "345241bee81b4c7e11e30bb9314d8606"
  },
  {
    "url": "assets/js/13.e7f467e8.js",
    "revision": "674f4663376ccb679df7e4c4496b9566"
  },
  {
    "url": "assets/js/14.1c2a8f9c.js",
    "revision": "ffe55bdee7d78205108164052489b26a"
  },
  {
    "url": "assets/js/15.b8a155b9.js",
    "revision": "adc744a773fe1450324157d05a0fc2dd"
  },
  {
    "url": "assets/js/16.d4c321d6.js",
    "revision": "f155728bb20b24fd6c1dc83c1e0e297e"
  },
  {
    "url": "assets/js/17.a3bb1624.js",
    "revision": "da7e7e2cb5421ab37c9743bd45c785f2"
  },
  {
    "url": "assets/js/18.eea2b159.js",
    "revision": "8d55480786fdec48c6a76034d269f3d5"
  },
  {
    "url": "assets/js/19.26436560.js",
    "revision": "286de6ca1a1789554ccdd22f265a8d42"
  },
  {
    "url": "assets/js/2.dfa53e52.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.ff3dd791.js",
    "revision": "b3a59634afe9d438358a5a5ad61edbaf"
  },
  {
    "url": "assets/js/21.000451ab.js",
    "revision": "4e32cb520181074c5144e9d17cda0c3e"
  },
  {
    "url": "assets/js/22.0c9d4fd8.js",
    "revision": "2baaf1bb581900f5e9e689338e456c13"
  },
  {
    "url": "assets/js/23.c0ab616a.js",
    "revision": "dd23546952531eb2fb4d8e3abab6f873"
  },
  {
    "url": "assets/js/24.29cc692b.js",
    "revision": "7dd6208a6ebe44a825cac1b76ce24fdf"
  },
  {
    "url": "assets/js/25.58c0d0d6.js",
    "revision": "62b5c941cf38ce8b25ce0185ea306f6b"
  },
  {
    "url": "assets/js/26.821d34e4.js",
    "revision": "5a8869da1cc5b737c13056bfa781a85a"
  },
  {
    "url": "assets/js/27.ee2872a9.js",
    "revision": "23a12e24b3979a2c3890ceb83321f07d"
  },
  {
    "url": "assets/js/28.8e876cd3.js",
    "revision": "b198da0f6ee6f0b0157668fd9381c62b"
  },
  {
    "url": "assets/js/29.b1b2e33d.js",
    "revision": "761fe124e680287eed3388a0f2b37baf"
  },
  {
    "url": "assets/js/3.79f0f77b.js",
    "revision": "f0474a35df8e6159386e191cc460d8c3"
  },
  {
    "url": "assets/js/30.58520af2.js",
    "revision": "d6f0bb7c82f680895b4368092d27ba95"
  },
  {
    "url": "assets/js/31.86f1488c.js",
    "revision": "38cb518937c7f4af7812b4a03c163c8d"
  },
  {
    "url": "assets/js/32.55d2dffa.js",
    "revision": "211fbbe9465f41ca2f6f961103193acc"
  },
  {
    "url": "assets/js/33.c50f0dfb.js",
    "revision": "e64a28fe4b823352738b2c8b3040e795"
  },
  {
    "url": "assets/js/34.77d97aa6.js",
    "revision": "eb9a59dce3342f0801079e8ad00869db"
  },
  {
    "url": "assets/js/4.ca90e8b3.js",
    "revision": "4de18ee602eb5683117038fd209a3035"
  },
  {
    "url": "assets/js/5.69930902.js",
    "revision": "70b5c2c91cd747d1c217df1ff546560e"
  },
  {
    "url": "assets/js/6.9e8eb5f8.js",
    "revision": "dfc3ac362689f46d591f004bdff017cf"
  },
  {
    "url": "assets/js/7.7859312b.js",
    "revision": "a52ca5da7cfb2507027dd4ed150c2882"
  },
  {
    "url": "assets/js/8.3061a0d4.js",
    "revision": "4418dd3550493587fe0a08337f81c016"
  },
  {
    "url": "assets/js/9.493ed192.js",
    "revision": "8b634e585ddec52ca948232fa0778c56"
  },
  {
    "url": "assets/js/app.9815579f.js",
    "revision": "4e6b7801a73ccdf3184059b1500c028b"
  },
  {
    "url": "de/imprint.html",
    "revision": "0c5d8f0c8c0c5b4d27369eb8f88e632a"
  },
  {
    "url": "de/index.html",
    "revision": "331be60db47294b387ccca9dd73ae5d4"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "817afe7aad613d3c3e42e96ebc3dcf0a"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "94ab5c74acd3ddb2b4ac273aaa76c4a9"
  },
  {
    "url": "de/menu.html",
    "revision": "31ecee97f2b716be912262abfcaa6c76"
  },
  {
    "url": "de/privacy.html",
    "revision": "2314d49de4c68695910cea4b3b7270c5"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "b3d4ed257400c9f32e8b3c3576758b90"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "243c8fda08ef10d5002d4f938d964010"
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
    "revision": "5e0dcb467039435cd936798a61035031"
  },
  {
    "url": "index.html",
    "revision": "4f15cccebad6f84043f41cef24c1438e"
  },
  {
    "url": "it/imprint.html",
    "revision": "21a74647d9c3fa4819e2fc550551ded5"
  },
  {
    "url": "it/index.html",
    "revision": "bd814041242159d7cd3c10c489336d3b"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "78578787a3ed40798f1d97420dc8349b"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "1a0d40e457dc702f97df41fc6db3cb90"
  },
  {
    "url": "it/menu.html",
    "revision": "7eb011da0beed07f023406dda5b4d379"
  },
  {
    "url": "it/privacy.html",
    "revision": "b7789af591e8c9ddbdb07a8836cd8b71"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "b810969076fcfd39b66bb356b2726462"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "013191f606a1119a8d5cbe2a3e0d6b84"
  },
  {
    "url": "legal/privacy.html",
    "revision": "db30b4ed1e20dc12e60c5b56ab152278"
  },
  {
    "url": "legal/terms.html",
    "revision": "89146962fc9269e5d29f801d81d4ef8e"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "f86daa6cfcfe778a41be50aff7be18a9"
  },
  {
    "url": "privacy.html",
    "revision": "f465f25f618afb439287c5a7615adad2"
  },
  {
    "url": "restaurant/about.html",
    "revision": "ae7f14282090fde0ff8229d5adafe6d3"
  },
  {
    "url": "restaurant/career.html",
    "revision": "35f95621fc972aa0be20a81bcfba291f"
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
