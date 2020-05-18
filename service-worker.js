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
    "revision": "bde88b86ef42563b7848814d69b4b5e5"
  },
  {
    "url": "assets/css/0.styles.a9a75545.css",
    "revision": "21da6dc2a26515caf6c3be8476e217f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.641e9cc5.js",
    "revision": "991361514f67924ba577bf404e6e60f1"
  },
  {
    "url": "assets/js/11.0bab57c1.js",
    "revision": "a268aa16172f872e0f770fec99c8db2d"
  },
  {
    "url": "assets/js/12.435c5b3b.js",
    "revision": "95e5b734843e7a5381b663bee8d4efd8"
  },
  {
    "url": "assets/js/13.8e18035a.js",
    "revision": "b5be94664c7d82d9b8d649dff180d0d9"
  },
  {
    "url": "assets/js/14.0e5e0089.js",
    "revision": "140efe9b8ed6851243200ad43a133dcf"
  },
  {
    "url": "assets/js/15.c8e1b430.js",
    "revision": "9c431ffc9c7d4e4d986b327722ae5b14"
  },
  {
    "url": "assets/js/16.9649f806.js",
    "revision": "5d5742a523dd96d82c79210f6124e97f"
  },
  {
    "url": "assets/js/17.f1ac7398.js",
    "revision": "edc6a39c9bbecad3bf448dd95f2c1509"
  },
  {
    "url": "assets/js/18.5b393fc0.js",
    "revision": "e8c92c4e81a184a92ac37051690b5e68"
  },
  {
    "url": "assets/js/19.0c55d695.js",
    "revision": "ab2fd17ea0e404a19b01162f8df198f7"
  },
  {
    "url": "assets/js/2.611c53a0.js",
    "revision": "37cc9fbb7cdefdb9b45ce00bf46c3298"
  },
  {
    "url": "assets/js/20.e61130fd.js",
    "revision": "ee6c2f35b3be233a40f76d3fe0017b0d"
  },
  {
    "url": "assets/js/21.7fd48a6d.js",
    "revision": "75c238c8558f5473c999209c76d0461a"
  },
  {
    "url": "assets/js/22.7002e71e.js",
    "revision": "ad4a345f0dd5e8881e272f0698003922"
  },
  {
    "url": "assets/js/23.7bb3baf7.js",
    "revision": "ca9d82f757725823806abaddced8ab60"
  },
  {
    "url": "assets/js/24.4390c563.js",
    "revision": "401ff5c18326972702d43d69250a823d"
  },
  {
    "url": "assets/js/25.418157e7.js",
    "revision": "60746400ba8f5cccd2750e460f3eb85f"
  },
  {
    "url": "assets/js/26.e9f1d33b.js",
    "revision": "babfb5bc663c36b8176323805174fa5c"
  },
  {
    "url": "assets/js/27.aefef05d.js",
    "revision": "8aace54a458c9b17759feaa23172fc29"
  },
  {
    "url": "assets/js/28.218e19cc.js",
    "revision": "85547c02e1e6e39d58430ea9ca8a1c52"
  },
  {
    "url": "assets/js/29.b0bf2313.js",
    "revision": "724d1c9bbe5b90bc3eff5452216761e2"
  },
  {
    "url": "assets/js/3.ea46d58a.js",
    "revision": "c62191fea83b0363c98653f879d1af90"
  },
  {
    "url": "assets/js/30.2252bd44.js",
    "revision": "97810cca030eee862f911f6a1588f96f"
  },
  {
    "url": "assets/js/31.d39fae94.js",
    "revision": "ce3305b46d12c95293728dd178a21078"
  },
  {
    "url": "assets/js/32.0e7c034e.js",
    "revision": "bc842063427d79801d1a79faac74876c"
  },
  {
    "url": "assets/js/33.2da2057a.js",
    "revision": "c022c3f470300a63cfc83dcb6b0c6de4"
  },
  {
    "url": "assets/js/34.2d46d564.js",
    "revision": "f2d806cc35e864b2b21714d8916d97c2"
  },
  {
    "url": "assets/js/35.1226ea7e.js",
    "revision": "aa7fc552466dcd125e4df32d6201af25"
  },
  {
    "url": "assets/js/4.d3ab0d3f.js",
    "revision": "ecc2417dbb262db221bb0ba63cdcd00b"
  },
  {
    "url": "assets/js/5.4a8cfa81.js",
    "revision": "9c3043a8cac5cf926ab5456499f8f39d"
  },
  {
    "url": "assets/js/6.db8208e5.js",
    "revision": "7d1c7cb9eab6dce6cf2c8019fa5c37ea"
  },
  {
    "url": "assets/js/7.7a29f653.js",
    "revision": "a52ca5da7cfb2507027dd4ed150c2882"
  },
  {
    "url": "assets/js/8.6d041c5f.js",
    "revision": "e2691989e6a48aa4b670d20d320978b5"
  },
  {
    "url": "assets/js/9.47e25353.js",
    "revision": "9818aa295bc5cb95fb48215222a40364"
  },
  {
    "url": "assets/js/app.575c57cb.js",
    "revision": "bb31f7b7098d7ae95faacdb97eba1e12"
  },
  {
    "url": "de/imprint.html",
    "revision": "63948be608cedad80ccf44b077185017"
  },
  {
    "url": "de/index.html",
    "revision": "bada5b9f599e58a681f76bcbdff0e597"
  },
  {
    "url": "de/legal/privacy.html",
    "revision": "db13b882fecb62983585e3f19d26db84"
  },
  {
    "url": "de/legal/terms.html",
    "revision": "57d1a410e86d25e94d14edfebf52df0c"
  },
  {
    "url": "de/menu.html",
    "revision": "bba52aa5fb1bffcab491f1fee4590c52"
  },
  {
    "url": "de/privacy.html",
    "revision": "2057cf8017b138d2eaa3d0ffaf592486"
  },
  {
    "url": "de/restaurant/about.html",
    "revision": "e6cbfd9003f926769c6d3f41fd7d2345"
  },
  {
    "url": "de/restaurant/career.html",
    "revision": "e6266389c27e6ebee0bc51a5e2a6d322"
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
    "revision": "1848f3639f121ed2816f31ec0157456b"
  },
  {
    "url": "index.html",
    "revision": "9e8fa1f6a725d24f0e5569e6fe11a482"
  },
  {
    "url": "it/imprint.html",
    "revision": "5abd4c326490ab82935ff3759ef6f022"
  },
  {
    "url": "it/index.html",
    "revision": "69b87f91630a3d5b59c5db5b0b328ae8"
  },
  {
    "url": "it/legal/privacy.html",
    "revision": "0aaa238234e68c01dd097a838d778f79"
  },
  {
    "url": "it/legal/terms.html",
    "revision": "2785389a10ffa6977b9e6e5371450e81"
  },
  {
    "url": "it/menu.html",
    "revision": "db093ef64e84d988c167e14d39f3f441"
  },
  {
    "url": "it/privacy.html",
    "revision": "40f7471fbe77ee93c1daf700ac9dc24e"
  },
  {
    "url": "it/restaurant/about.html",
    "revision": "039b31c75f1e5f58941584dff7b3cb8e"
  },
  {
    "url": "it/restaurant/career.html",
    "revision": "46704419461e4e22c4bfa77ff5d82fa0"
  },
  {
    "url": "legal/privacy.html",
    "revision": "fb6bcca1197c8aa2915fd8daaf59dede"
  },
  {
    "url": "legal/terms.html",
    "revision": "46c94cc947adf6e166de3d579876d43b"
  },
  {
    "url": "logo.png",
    "revision": "1a7cc42e8f0d06c255c7e21e72a80d8f"
  },
  {
    "url": "menu.html",
    "revision": "89c22e26bed01ca3557c586bf121a0bc"
  },
  {
    "url": "privacy.html",
    "revision": "8dae6f8fac6883423df05f6da7961775"
  },
  {
    "url": "restaurant/about.html",
    "revision": "392092c2bfca5eaafb0dee23124b162c"
  },
  {
    "url": "restaurant/career.html",
    "revision": "83108b2e6bdee3a32b797f76c6e31ffc"
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
