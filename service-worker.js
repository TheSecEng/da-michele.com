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
    "revision": "ff6b5507e8daa28212e928131a7827ea"
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
    "url": "assets/js/10.e5224fd6.js",
    "revision": "1c6f713d1f6eefc9ece2e1eecadaaf6c"
  },
  {
    "url": "assets/js/11.a28902a5.js",
    "revision": "20c5ca13a9a200683ccf7f35188ef1a0"
  },
  {
    "url": "assets/js/12.ccc39ddc.js",
    "revision": "6b6d823f7616ab84f01c3ba9ba8e7c0e"
  },
  {
    "url": "assets/js/13.31bd7afb.js",
    "revision": "d3b956b1c7878e1e349ebe5ee5a12a51"
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
    "url": "assets/js/16.991162ee.js",
    "revision": "6936d5357e12646fc98560ced7d15f85"
  },
  {
    "url": "assets/js/17.8642c594.js",
    "revision": "edf8843ae5debf15d70993aaa80a8b6e"
  },
  {
    "url": "assets/js/18.af2df5c4.js",
    "revision": "085ed0ae68dbd9262b1625e139c08731"
  },
  {
    "url": "assets/js/19.dae944b0.js",
    "revision": "8f5d157d666807227c61d525281118bd"
  },
  {
    "url": "assets/js/2.4bd9d188.js",
    "revision": "bc263ca2e277ebf14a31fa14db93e865"
  },
  {
    "url": "assets/js/20.b4c74a84.js",
    "revision": "6e12c80295b8ae909cfa9032606191f6"
  },
  {
    "url": "assets/js/21.e51f3b39.js",
    "revision": "1b22c21118cff7b3a0d9897fab83a156"
  },
  {
    "url": "assets/js/22.4aa0e48b.js",
    "revision": "eb3e2d2f8e5292b38e153fb5892421a8"
  },
  {
    "url": "assets/js/23.0cdbf018.js",
    "revision": "93e5c8d14567ae618339526c49987af2"
  },
  {
    "url": "assets/js/24.ad6c2634.js",
    "revision": "b5fae0303ba8b8e5c8f98019df20783a"
  },
  {
    "url": "assets/js/25.0a337cf8.js",
    "revision": "4072d6dc27496d00ac06874f9bda1f95"
  },
  {
    "url": "assets/js/26.a3d04382.js",
    "revision": "40de4054f1b6ade39a9dbcbf2122e760"
  },
  {
    "url": "assets/js/27.e10b6fba.js",
    "revision": "87339872f63fae94d7006a34d2be7334"
  },
  {
    "url": "assets/js/28.d5444642.js",
    "revision": "9d363d32e9c9cdfd0253da9031fda43b"
  },
  {
    "url": "assets/js/29.b8b7f9dc.js",
    "revision": "02df14d103644eefaca4ffed10411874"
  },
  {
    "url": "assets/js/3.ec263d9f.js",
    "revision": "b52cd869e73d86c51fe65987044de3d5"
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
    "url": "assets/js/32.d756f580.js",
    "revision": "4201441385de48902342f050649716ee"
  },
  {
    "url": "assets/js/4.16b411e8.js",
    "revision": "83c87578709dbbdc4fd7f83cfc3777ca"
  },
  {
    "url": "assets/js/5.ff3c3ef3.js",
    "revision": "a71ceb1ce60394deca5abdf9065a9478"
  },
  {
    "url": "assets/js/6.038243e0.js",
    "revision": "894dba253fee60b15bdda055ea2bc6a2"
  },
  {
    "url": "assets/js/7.2fe5fdb7.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.d12edc9b.js",
    "revision": "9523d94d7dd4754cf54d2df5e646e3d1"
  },
  {
    "url": "assets/js/9.beee6505.js",
    "revision": "4fed6eb018495d14becb3870bcaf8d3f"
  },
  {
    "url": "assets/js/app.6d27068d.js",
    "revision": "e5d40929733aae428cede5840399d7e9"
  },
  {
    "url": "de/imprint.html",
    "revision": "f706f9845e6f5b04aec458313366283d"
  },
  {
    "url": "de/index.html",
    "revision": "7f7c5e80767bafcd9e9bc9ed67be5c9b"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "4c8702f382d3faba40222f64775a174b"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "5b5993fc45f8922286b8004b4109c364"
  },
  {
    "url": "de/menu.html",
    "revision": "b4b77d19fe03e486bdfb57c36cc06ffa"
  },
  {
    "url": "de/privacy.html",
    "revision": "6040af1256a08ac051c127adcecfd646"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "0fabe647951e72973a64313977851107"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "d1ff157efff67b3255911251c537a62e"
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
    "revision": "6da757e23663ca500da8fddeff580bfc"
  },
  {
    "url": "index.html",
    "revision": "81b40062086cbca5ad3da3685d31fc85"
  },
  {
    "url": "it/imprint.html",
    "revision": "24509b65390196713305b3355a2d28be"
  },
  {
    "url": "it/index.html",
    "revision": "01660a12844b37fdfb0e60e039fc3482"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "9b3c297dc923f03a81e8a55c3f1be19d"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "aaf1dbca91cfe31a0fe4122f74c66425"
  },
  {
    "url": "it/menu.html",
    "revision": "bce8d7d6e0478e5af2b1e7290a0fcd13"
  },
  {
    "url": "it/privacy.html",
    "revision": "57cee66c5a5c7723ecced639c85706d2"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "3362c1c9700b0ceacf174fb8085ffa2b"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "4ee841b820688f0c203d087bf50745ec"
  },
  {
    "url": "legal/privacy.html",
    "revision": "f2cc8c556462a0a1d3f8ed6a2d00be00"
  },
  {
    "url": "legal/terms.html",
    "revision": "7e0d8189a1aa8f759500d587ee2df441"
  },
  {
    "url": "menu.html",
    "revision": "6290b8074a9ee50489212ac5a4bde58f"
  },
  {
    "url": "privacy.html",
    "revision": "030f4f2bf41e65ece6deca0ee6cfee85"
  },
  {
    "url": "restaurant/about.html",
    "revision": "bd2234dbe31d7a6e846b3326968b5fc6"
  },
  {
    "url": "restaurant/career.html",
    "revision": "0ea31f801d502eb81a3a96a0ddb52a48"
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
