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
    "revision": "25a4952f12072fb93014e47eb70a835c"
  },
  {
    "url": "assets/css/0.styles.ba529497.css",
    "revision": "d8cb972f8d76f5e779c7373fff64d457"
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
    "url": "assets/js/12.01d8aada.js",
    "revision": "b7de5b9171dba0fbebf644828c5644db"
  },
  {
    "url": "assets/js/13.e7f467e8.js",
    "revision": "674f4663376ccb679df7e4c4496b9566"
  },
  {
    "url": "assets/js/14.0d9cfc6e.js",
    "revision": "5078e67c0665d497b71f2c925d052491"
  },
  {
    "url": "assets/js/15.0c2f2fb2.js",
    "revision": "93fe745d16d77b18fb45ee7dc61366b1"
  },
  {
    "url": "assets/js/16.a1be47d7.js",
    "revision": "2ff50a90005d8945b548597a2aa344b4"
  },
  {
    "url": "assets/js/17.fb75ddaa.js",
    "revision": "36a84a8c05a8e522cf3496cdb997b08c"
  },
  {
    "url": "assets/js/18.4b7442aa.js",
    "revision": "2e55cb63b32e756d9be8bb60d0917388"
  },
  {
    "url": "assets/js/19.dc16f997.js",
    "revision": "d2300ffa08ccef34204807730a4fc353"
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
    "url": "assets/js/26.ef834e12.js",
    "revision": "21fc8208bae5f778d2566f0b670f7f08"
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
    "url": "assets/js/29.9581102e.js",
    "revision": "a26e94b759522f59041782fcf1820e71"
  },
  {
    "url": "assets/js/3.9eef24b8.js",
    "revision": "bd3054e00cffaede6a447d4fbcd8496a"
  },
  {
    "url": "assets/js/30.179716b1.js",
    "revision": "86916b9549523c37c28c21aa25ab87d5"
  },
  {
    "url": "assets/js/31.86f1488c.js",
    "revision": "38cb518937c7f4af7812b4a03c163c8d"
  },
  {
    "url": "assets/js/32.af421704.js",
    "revision": "76c21975b6f04bc527f1e9baaf0486e0"
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
    "url": "assets/js/4.aff28e7b.js",
    "revision": "dc61d28b339a45fda8d34d458ebe05f0"
  },
  {
    "url": "assets/js/5.1d590556.js",
    "revision": "937024081c618a49c032a2f0683a0a30"
  },
  {
    "url": "assets/js/6.5efc74be.js",
    "revision": "650591c39705b33941e2c6e08abaef25"
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
    "url": "assets/js/app.657e9a37.js",
    "revision": "26899eaaa2d000825a6fa4655869ef6b"
  },
  {
    "url": "de/imprint.html",
    "revision": "ad175343834ebfc87328731db38abf76"
  },
  {
    "url": "de/index.html",
    "revision": "ff61de96cc6503d3b824d97d7f283d3b"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "bba95678ce80a54a4f82906b6af67cb6"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "1118597b2505a9098146a326f4602682"
  },
  {
    "url": "de/menu.html",
    "revision": "2f0235183f9b731fc3885abe956f21de"
  },
  {
    "url": "de/privacy.html",
    "revision": "505d064f6df6da26f8a6f0c6bd1736cd"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "a3962f61ed43a8f6e4ab6d445da58d11"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "c84cd835da635b4aaab170100e94fc60"
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
    "url": "hero.jpg",
    "revision": "da7df5e02b0bcbe63e5b661924470082"
  },
  {
    "url": "imprint.html",
    "revision": "fbfa5bb207453b9deef7d041ef2188fc"
  },
  {
    "url": "index.html",
    "revision": "87da5eac57f6ea2532f542a5db7f53cd"
  },
  {
    "url": "it/imprint.html",
    "revision": "800c0824c9483b3d72f691d93bbaaadd"
  },
  {
    "url": "it/index.html",
    "revision": "5193b8ecc9b635486822a1ff19e75424"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "0a5a18e912226f487be9d65cf3cb7238"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "26e92cbffabc23dd080fb44717e6f952"
  },
  {
    "url": "it/menu.html",
    "revision": "40e1f5e6c21dc9aecc31ed4e02221194"
  },
  {
    "url": "it/privacy.html",
    "revision": "81aae38c7659fdff3c111ac49b58f5f1"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "178330e0c8a94b1aca633606441a9e57"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "0708076e410efbdbd4d4e744d45ddb19"
  },
  {
    "url": "legal/privacy.html",
    "revision": "9385b79d59087407a9e4d0a73a4d2def"
  },
  {
    "url": "legal/terms.html",
    "revision": "fee96a2709eac289fa9bad1e641e6d33"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "95d93cf88a3c693fe90f72288fccba62"
  },
  {
    "url": "privacy.html",
    "revision": "fef723a4e8ade7467240dc77d43532c0"
  },
  {
    "url": "restaurant/about.html",
    "revision": "f8f2d3dd18f73b501d64008de5a78049"
  },
  {
    "url": "restaurant/career.html",
    "revision": "88a3c895939763f37f41c506e456adeb"
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
