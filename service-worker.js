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
    "revision": "f7253cdc168abeda44710b8226d2df50"
  },
  {
    "url": "assets/css/0.styles.271f9eed.css",
    "revision": "21da6dc2a26515caf6c3be8476e217f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.19bc3ce2.js",
    "revision": "fdd75f22342903153965c2314fc348b5"
  },
  {
    "url": "assets/js/11.da53262a.js",
    "revision": "fa016c16086c7826bdefc023410e236c"
  },
  {
    "url": "assets/js/12.4fcd9f43.js",
    "revision": "b01a03abb9dd7e27afe76285c2d46c96"
  },
  {
    "url": "assets/js/13.9b8f05f3.js",
    "revision": "e3a348bc5163039b41817acee54d616a"
  },
  {
    "url": "assets/js/14.6c2bd4fe.js",
    "revision": "400abd9929ac12e2f1d74c2dd62a2657"
  },
  {
    "url": "assets/js/15.f38c0743.js",
    "revision": "fc4eaac9f1228b530b23786cb1a02c53"
  },
  {
    "url": "assets/js/16.5c28f8db.js",
    "revision": "bb1eb00d39d2c07a234cd0fb865b511e"
  },
  {
    "url": "assets/js/17.e893ffc8.js",
    "revision": "f7e4ccb47ab365941ce448af0e58d43f"
  },
  {
    "url": "assets/js/18.8b2b0afe.js",
    "revision": "c84125b411707e9efe7aeaa4750291c1"
  },
  {
    "url": "assets/js/19.6146c963.js",
    "revision": "60890036cd7dd9cdbd5d1e86e903ccb3"
  },
  {
    "url": "assets/js/2.b7576c0b.js",
    "revision": "f4987cca6e84bf3dce47967a9b8e9b39"
  },
  {
    "url": "assets/js/20.7d97aef0.js",
    "revision": "e8a487058d25d4dc24e826a26a5d0483"
  },
  {
    "url": "assets/js/21.256b01e1.js",
    "revision": "cba67a32c06b905e2d478adea795fb7e"
  },
  {
    "url": "assets/js/22.3fa38c8a.js",
    "revision": "01d2f27965ce2713eb9ac1cb2493c651"
  },
  {
    "url": "assets/js/23.60399905.js",
    "revision": "ff4e8942bb0a026df3588ac4586ffb8c"
  },
  {
    "url": "assets/js/24.1d9cbe80.js",
    "revision": "cc49b136739ea9bd6ec84afac4734463"
  },
  {
    "url": "assets/js/25.7a342731.js",
    "revision": "f6b527d7f156e633a226be8cd192fb83"
  },
  {
    "url": "assets/js/26.eaa48fbe.js",
    "revision": "335d72c64f617433fba7216f54054ab1"
  },
  {
    "url": "assets/js/27.4661d19f.js",
    "revision": "0e7443feb00799b5ff65091fc0792667"
  },
  {
    "url": "assets/js/28.8660137f.js",
    "revision": "00a9d224a11035d7b880e2fd4ce66e6b"
  },
  {
    "url": "assets/js/29.df68354e.js",
    "revision": "d5aa71173f93cb5e43321fee1a2e26ff"
  },
  {
    "url": "assets/js/3.973594f1.js",
    "revision": "d63b709448060298ce55dcadd48172fc"
  },
  {
    "url": "assets/js/30.24bf7920.js",
    "revision": "17595fdadc7f722c480fe75a4a7d2a4d"
  },
  {
    "url": "assets/js/31.ea3dc957.js",
    "revision": "01e3dbf01bebdae1f1b6a9b85491f12f"
  },
  {
    "url": "assets/js/32.c23fa43d.js",
    "revision": "be8d4025549332b28f2562486d0a32ce"
  },
  {
    "url": "assets/js/33.13361a49.js",
    "revision": "43ce739d48d5558a572309a04b6c2b39"
  },
  {
    "url": "assets/js/34.5c8e7f92.js",
    "revision": "f26d15e8b8b21c48ee37aff2f4242f97"
  },
  {
    "url": "assets/js/35.2ee959bd.js",
    "revision": "b4190a3f6d32b103482c7ce47945bd40"
  },
  {
    "url": "assets/js/4.9baac475.js",
    "revision": "6651172585398bfae8f54cb48af736f6"
  },
  {
    "url": "assets/js/5.46510cb8.js",
    "revision": "ddf75f8d2cb103f1c8370df762b7a56c"
  },
  {
    "url": "assets/js/6.0f3bba79.js",
    "revision": "c0076747f60b77eec37302334d132516"
  },
  {
    "url": "assets/js/7.88548d00.js",
    "revision": "8f5e99d8abc160afdfc22648321c4087"
  },
  {
    "url": "assets/js/8.e5c7053f.js",
    "revision": "e2691989e6a48aa4b670d20d320978b5"
  },
  {
    "url": "assets/js/9.9a71820f.js",
    "revision": "443ebe66e14d79c704eb2bb56099a52e"
  },
  {
    "url": "assets/js/app.2b3a8dda.js",
    "revision": "50535ca2b14e94577116af8806e5012f"
  },
  {
    "url": "de/imprint.html",
    "revision": "f25c9dd88b3ea5a7cf89e1ce61f1ce21"
  },
  {
    "url": "de/index.html",
    "revision": "f9762ad163b1e581bf13fcd59bcf00aa"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "aef4f085c02eb858c7e4e130e2217c8c"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "9bef1f5980a340ecc3a3c6da64672e7b"
  },
  {
    "url": "de/menu.html",
    "revision": "e3b5f966d93a5a83b90f1b01a5418c10"
  },
  {
    "url": "de/privacy.html",
    "revision": "f21fa06a1f7b28b24241797df516313d"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "8e1a544bb0f55863a3cf3993b9a701b2"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "b7a90bd2ff07d9d2a8560c278075719a"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "8cabe66f6c004bfe792b83e0cc8797be"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "f8b76898955bc024291dfae5216b9db4"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "79bce1f9cff125e432ead2f39c310691"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "278bfa93fb49d3e9c79b9e1f0da79f87"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "4d0b6809899b8f63210d8fe8c955972e"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "c408e3c9dc88fadf170607f89b15ddc3"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "491f8cee7d391c83cfae68ee433437be"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "4d0b6809899b8f63210d8fe8c955972e"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "2da72a53f01c4b5b370e846df3039b72"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "a075685cedee205196f4be34940de310"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "40494998a34d33f37558089faf08fa62"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "79111c34c40c5a3fa7e20ce34aabf778"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "e73e46c8348e3f1b662620eac4ad31b8"
  },
  {
    "url": "food/burrata_zucchini_asparagi.jpg",
    "revision": "0303044ad115ebe623fd0d2781878a16"
  },
  {
    "url": "food/polpo_riso_asparagi.jpg",
    "revision": "5ccc279b74bb39f9e992734a6554188e"
  },
  {
    "url": "food/tagliata.jpg",
    "revision": "1db56d88b42063545028cad95c32cbba"
  },
  {
    "url": "food/tartara_di_tonno.jpg",
    "revision": "8d3d91ba909934cc38150de0b5a61f2b"
  },
  {
    "url": "hero.jpg",
    "revision": "da7df5e02b0bcbe63e5b661924470082"
  },
  {
    "url": "imprint.html",
    "revision": "99cb7b43c1608a7dd45d09dd05d7ef7b"
  },
  {
    "url": "index.html",
    "revision": "65f7a690e414ac1a2f8098dd0a971569"
  },
  {
    "url": "it/imprint.html",
    "revision": "2aaf4266aaef2b51622ea8c5c7eb11d0"
  },
  {
    "url": "it/index.html",
    "revision": "c8f77da28954fb5bdd8f2ecaa3077df6"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "ae5f2954a8a617b7f6f63490e4cd034f"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "c06aac3b72b53e6b249ca77e172288f3"
  },
  {
    "url": "it/menu.html",
    "revision": "2e0ecbc9e184f0ea1337e1ede7ddd933"
  },
  {
    "url": "it/privacy.html",
    "revision": "a9cd7f73c43eb06288175edbf51749ee"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "44a1fe20c19a43a5503bf93847cbce6a"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "7c03c02f16a570c4b5843a7d675f8193"
  },
  {
    "url": "legal/privacy.html",
    "revision": "2a35ab391508f5c294fb62f5abf3e2ef"
  },
  {
    "url": "legal/terms.html",
    "revision": "739de16a4347785575501c83319e2a53"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "395ceef37ca92769ea28b05bde4c71b9"
  },
  {
    "url": "privacy.html",
    "revision": "b3ae23eb5c01d7a7e822206a5bed9a6b"
  },
  {
    "url": "restaurant/about.html",
    "revision": "018ac94f2daa9adf9e58a669ac9de034"
  },
  {
    "url": "restaurant/career.html",
    "revision": "4aa2365efbebc05014f95db697f13feb"
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
