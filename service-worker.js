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
    "revision": "a179f7ad55d5131f638b2a907c3e1865"
  },
  {
    "url": "assets/css/0.styles.259bb392.css",
    "revision": "e003456097299637e3eef933abd29ac4"
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
    "url": "assets/js/17.73e15e7f.js",
    "revision": "7d91cff1d0a9ba3c5739c5dd15908312"
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
    "url": "assets/js/4.d021003c.js",
    "revision": "5ee7cd1b9866ef71933473ef22a49af6"
  },
  {
    "url": "assets/js/5.bdbf8cdd.js",
    "revision": "24be4a1c18266e255529488e8d7a78ab"
  },
  {
    "url": "assets/js/6.43fdb0ae.js",
    "revision": "d4c50c49ac4a11eba46e40ac9d7d60d9"
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
    "url": "assets/js/app.1b5bdcc1.js",
    "revision": "a3fc72ef4cd2ac90121a8d5345b6f963"
  },
  {
    "url": "de/imprint.html",
    "revision": "3cda4cfb40d06b2ffdf9b2df89a9e52b"
  },
  {
    "url": "de/index.html",
    "revision": "5e25d0aa2a01927517f7edbb6072d7b9"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "cc0c3074191c7f7893e0864f69a83f87"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "8530911757e4426ced815b4af5113f38"
  },
  {
    "url": "de/menu.html",
    "revision": "096f706bfdbbb6b995d537cab7e3ea47"
  },
  {
    "url": "de/privacy.html",
    "revision": "97959c2b146246051487ba176a05e739"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "d70dda8e26c062f8333ccf50c852c711"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "08e422a8dd478da1804a09a99fb623c4"
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
    "revision": "c3c950363af0cf6e268653c96c5ec1fc"
  },
  {
    "url": "index.html",
    "revision": "7b41abbc3ed08c5aad06c74655d69442"
  },
  {
    "url": "it/imprint.html",
    "revision": "2e46fc446e820ea4a499a6f61d88a890"
  },
  {
    "url": "it/index.html",
    "revision": "26af0ac79d76eeacc89d4f37a5db52c8"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "f8066a340b219e2740fdd9074c98b4d5"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "e513559e9561147cefb3172ef246b42a"
  },
  {
    "url": "it/menu.html",
    "revision": "bd7c4fd2974d01a5c8df229d25f4d654"
  },
  {
    "url": "it/privacy.html",
    "revision": "59675a512b56c2c7a5670d7bd095a5a3"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "caa22fe6d483d1ad8627850d9a4e4f76"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "add9752b8a2d5c16c77f59b3704a834a"
  },
  {
    "url": "legal/privacy.html",
    "revision": "917f072a63898a6528a0f2ba724ffca6"
  },
  {
    "url": "legal/terms.html",
    "revision": "d733821dfde098a6c1e61ccb4cd2fb01"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "91e863345a346eb8efcf6b3ef63105df"
  },
  {
    "url": "privacy.html",
    "revision": "64d92a50124e032e70d26ed396b38698"
  },
  {
    "url": "restaurant/about.html",
    "revision": "e8b0c724cd11d6ad40159ce3f66b197c"
  },
  {
    "url": "restaurant/career.html",
    "revision": "2658999b929b9199c7b9133978830d8c"
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
