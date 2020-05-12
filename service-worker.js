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
    "revision": "bb6a44b83c425d8190ddbeeee92dcc4a"
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
    "url": "assets/js/14.df478e7b.js",
    "revision": "51782bfc94eea3438d415a31287f8915"
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
    "url": "assets/js/23.ac8cef6b.js",
    "revision": "d4925080d57bb1e8ceff3a7270e7e085"
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
    "url": "assets/js/29.f0a6ac9c.js",
    "revision": "affc8eea7b8854a01e311988c3a98d2c"
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
    "url": "assets/js/4.5b0b5b56.js",
    "revision": "a2a2fe3ca06df502c14430423b609ed0"
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
    "url": "assets/js/app.3a5b2fa0.js",
    "revision": "9bf7cf14b515267c25b859a13ea53ea2"
  },
  {
    "url": "de/imprint.html",
    "revision": "f9be315c0e73ab022f6156301b1e6159"
  },
  {
    "url": "de/index.html",
    "revision": "101557c4986660454c3210b609e5fc1b"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "b77e98854620a90f4b771acbd9903c3b"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "be1769c140bab152ff85e6e6974cb8cc"
  },
  {
    "url": "de/menu.html",
    "revision": "eee04a99240188059470baaf2eb69af6"
  },
  {
    "url": "de/privacy.html",
    "revision": "74f57c4de3437de3e207e1280b6ea699"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "5ded5e461fbc6fe1b695ca9ad698a118"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "108f417f05c15799d0289524a161a3bf"
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
    "revision": "e298fb492e6baf6b6aa2d774c72da85f"
  },
  {
    "url": "index.html",
    "revision": "ffcebe996d9ba3dc8665096707053b4a"
  },
  {
    "url": "it/imprint.html",
    "revision": "3985b17ab1abe9d143fb11d8f7756085"
  },
  {
    "url": "it/index.html",
    "revision": "ba17f423138e492f4da8e5e532602eeb"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "57d0c0cbc4b3d86b2799d2fc894d2992"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "1c8482ec7093ee27af5a7d3637816352"
  },
  {
    "url": "it/menu.html",
    "revision": "6e1ed13bbb24bc85ad802178e2ccdec6"
  },
  {
    "url": "it/privacy.html",
    "revision": "977eb5f8a7a4897169100cbf749c1d02"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "25ea71f8020085743287dc28d1ff924b"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "e3b733da6a9dd95e6634e6bf260f6eb4"
  },
  {
    "url": "legal/privacy.html",
    "revision": "16c0c794247b794d2478d807cfda99dc"
  },
  {
    "url": "legal/terms.html",
    "revision": "7a50b31944a34029740c538c6fb7e455"
  },
  {
    "url": "menu.html",
    "revision": "8add65f12835e5d8b2dcecfecc8c6068"
  },
  {
    "url": "privacy.html",
    "revision": "f71471f2772f3492c6de63c6794ddaf0"
  },
  {
    "url": "restaurant/about.html",
    "revision": "d9348980ca3d565b5b816beb9d6a5927"
  },
  {
    "url": "restaurant/career.html",
    "revision": "5d3d132a7243ecc2b3c88209dda16741"
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
