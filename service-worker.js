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
    "revision": "4765d8c60f4846d0c92e0f1737da03b3"
  },
  {
    "url": "assets/css/0.styles.c320f11f.css",
    "revision": "fc648f36dc61ed44940ca1a1c46e561d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73148eaa.js",
    "revision": "3eb5627b856e1568ea1f14c4082cee90"
  },
  {
    "url": "assets/js/11.317f4606.js",
    "revision": "73ac909fd3ae9560b7ab7221540d4fe5"
  },
  {
    "url": "assets/js/12.6b507545.js",
    "revision": "cd5431f860e59429d459273dccddb9bd"
  },
  {
    "url": "assets/js/13.56939952.js",
    "revision": "bac139ba064557fa2f316809a6af5215"
  },
  {
    "url": "assets/js/14.aea80663.js",
    "revision": "d9093a8a1a39f4726908bc9236a05f98"
  },
  {
    "url": "assets/js/15.6c18d271.js",
    "revision": "adff0e6ad1f07afd12b10a31531ea524"
  },
  {
    "url": "assets/js/16.8b3be241.js",
    "revision": "ec4ef315f801df23c708f94e1560d7a9"
  },
  {
    "url": "assets/js/17.d09fc0f2.js",
    "revision": "a9dc7bf1025d672277bcb2d757d470e9"
  },
  {
    "url": "assets/js/18.06d37938.js",
    "revision": "311519d24919328ffba525ec58a1fe2b"
  },
  {
    "url": "assets/js/19.37e6d686.js",
    "revision": "a19aa9d3962a9000806ffefae6b5c86d"
  },
  {
    "url": "assets/js/2.aa8159e5.js",
    "revision": "84c3fd9c9341a2d683ac6a5125557cb7"
  },
  {
    "url": "assets/js/20.1e3a8a14.js",
    "revision": "27548786b8b6120695c7b1e39bcd6fd4"
  },
  {
    "url": "assets/js/21.aa34db42.js",
    "revision": "e83fd76685090fdd23ef63e8f0e6af52"
  },
  {
    "url": "assets/js/22.8efaf720.js",
    "revision": "897abcc119a02e7399266a595c5235e1"
  },
  {
    "url": "assets/js/23.9d56e3fe.js",
    "revision": "3f3162d881d3d0ce11d22dbc4f636636"
  },
  {
    "url": "assets/js/24.9000983d.js",
    "revision": "491d17b6c4eb136cf77028e12b4fd681"
  },
  {
    "url": "assets/js/25.a75a038f.js",
    "revision": "3e6bc1b510f9e8d2bbad61ba4898ba1e"
  },
  {
    "url": "assets/js/26.a48f108c.js",
    "revision": "72a6ea68113dd04df20a815b9952a533"
  },
  {
    "url": "assets/js/27.37da4e62.js",
    "revision": "fc771923e0157ff7957b3a2817834c4e"
  },
  {
    "url": "assets/js/28.6b9e5e94.js",
    "revision": "281495008b9e6d44b4e56f534071d12c"
  },
  {
    "url": "assets/js/29.b8b7f9dc.js",
    "revision": "02df14d103644eefaca4ffed10411874"
  },
  {
    "url": "assets/js/3.9f538409.js",
    "revision": "d5c12147fbb0f633e4ba95821ad02aae"
  },
  {
    "url": "assets/js/30.d586899c.js",
    "revision": "37fc4afa895846cb85d0e36a12b14edf"
  },
  {
    "url": "assets/js/31.61f3554b.js",
    "revision": "2dac9cc22d8915ef842bcf95ff661412"
  },
  {
    "url": "assets/js/32.cfd96b6a.js",
    "revision": "a4a827f757edb86edcf26437d4ba1fdb"
  },
  {
    "url": "assets/js/4.9e0afe7b.js",
    "revision": "cd2610f2aa81c50d95ac477b83496f9b"
  },
  {
    "url": "assets/js/5.b3df3bb5.js",
    "revision": "30f3fe03834ed7a1d1bd04249688675b"
  },
  {
    "url": "assets/js/6.ebb5b33e.js",
    "revision": "8c4e571e73ba764886c11611c61c373a"
  },
  {
    "url": "assets/js/7.8e7ef716.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/8.6cf5ce36.js",
    "revision": "dfc235ccbb752e9e0bb75908e03d1d7b"
  },
  {
    "url": "assets/js/9.a118b277.js",
    "revision": "1db6ae5e7eaf7f55ce0b463bdce932e2"
  },
  {
    "url": "assets/js/app.b5c28403.js",
    "revision": "1db6e5a24030b9a046d85bcd1ce52607"
  },
  {
    "url": "de/imprint.html",
    "revision": "ec183dcc09b6b0e8559644b5c2a91f52"
  },
  {
    "url": "de/index.html",
    "revision": "612cb3ae208f7c1308190e1a38166e26"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "f173bcbd6a4b07b6d870fbdecb2d31a5"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "0553f44132d3dc5ccebc6035e7d4084f"
  },
  {
    "url": "de/menu.html",
    "revision": "69ab1e0ae8cede91af0c4a021e3f3214"
  },
  {
    "url": "de/privacy.html",
    "revision": "01eb227b49243971a7481dff4c20610a"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "e87c4d591439760db838d40a22a1f962"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "444f0f9bbb0046397f6a5c70b4462f71"
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
    "revision": "12ee6b425507e82431f0b4f02ddbca43"
  },
  {
    "url": "index.html",
    "revision": "384969e29169eec48c55d53d782f1f8d"
  },
  {
    "url": "it/imprint.html",
    "revision": "0581432fd4f531a965e71f41581fe84f"
  },
  {
    "url": "it/index.html",
    "revision": "99e0b88493b2fe414cd27fe643dfd794"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "16444b37fd83fa2f5e8100cf14d784c8"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "cc738ac1a02056ea036b9264004a7965"
  },
  {
    "url": "it/menu.html",
    "revision": "b8d50d88f4c4354936203367bb504836"
  },
  {
    "url": "it/privacy.html",
    "revision": "03bd56276af41f866ed28fc3c74465f5"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "24a57c5d5b1f0cee1d1ee83d92b71435"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "15d3c03f9c1bf621fa5c1ec78a70611a"
  },
  {
    "url": "legal/privacy.html",
    "revision": "c4a8e07b0e65736a7fa07beed82aedd1"
  },
  {
    "url": "legal/terms.html",
    "revision": "3f4247ccf95a1da8ecc33a159118496c"
  },
  {
    "url": "logo.png",
    "revision": "d85b34cde8a38d6a0161192a72e05640"
  },
  {
    "url": "menu.html",
    "revision": "b0581a2674ef2eec77604e18b91a47aa"
  },
  {
    "url": "privacy.html",
    "revision": "0cb3377a89220575d36d10bff6b088cd"
  },
  {
    "url": "restaurant/about.html",
    "revision": "5c7533e1bd5065c12781d333a3b046a4"
  },
  {
    "url": "restaurant/career.html",
    "revision": "13aaac5a79ce55d366338d61afcb0a66"
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
