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
    "revision": "d1fee67ed9cc7a3304b616ea83a89a8b"
  },
  {
    "url": "api/index.html",
    "revision": "0894c13e3f3b99454f51d599789be521"
  },
  {
    "url": "assets/css/0.styles.449063e0.css",
    "revision": "f8c87f950ab16efe6ee6b5a552dea90b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3bd5aa6.js",
    "revision": "286d26322906ca9d059e513b37548215"
  },
  {
    "url": "assets/js/11.1796f2f7.js",
    "revision": "ae2a65f792e60ef16fec7930e1581a3b"
  },
  {
    "url": "assets/js/12.ad3a057a.js",
    "revision": "e1af57269285ec646f660357be4ff0c0"
  },
  {
    "url": "assets/js/13.305cd15f.js",
    "revision": "42bc07642dea41349dd24ac51b17e06b"
  },
  {
    "url": "assets/js/14.5f2aac3a.js",
    "revision": "aab9432c223dda8c4bf57b62792acc84"
  },
  {
    "url": "assets/js/15.fe4f32da.js",
    "revision": "7e55e555ee48859a9f91ccd2cff3c391"
  },
  {
    "url": "assets/js/16.22f6a7dd.js",
    "revision": "cee81575da7379d21c17ceaf0885f3a4"
  },
  {
    "url": "assets/js/17.6022ccc9.js",
    "revision": "cf9a329c8284e92c8527f778dd0a7203"
  },
  {
    "url": "assets/js/18.0eb70972.js",
    "revision": "243aec28ed91b1da7442f04dea55aa5c"
  },
  {
    "url": "assets/js/19.3f9851af.js",
    "revision": "6f0022c01c1eddcd35abdc68aad7a075"
  },
  {
    "url": "assets/js/20.607d6d00.js",
    "revision": "beb6ea990401711f1cae40c335f0716b"
  },
  {
    "url": "assets/js/21.0082c642.js",
    "revision": "512c6bf2f4dd9c4b1a135bf6ecac0301"
  },
  {
    "url": "assets/js/22.86f82e3a.js",
    "revision": "205191d9daa7baa7bd5881afcd21a8d7"
  },
  {
    "url": "assets/js/23.75b5403a.js",
    "revision": "2db84ed0f74b14150600c32c7ffd9931"
  },
  {
    "url": "assets/js/24.1b0198e0.js",
    "revision": "9f7421d01f86cc8dbe5e01e05d9c2bfd"
  },
  {
    "url": "assets/js/25.dfa953ea.js",
    "revision": "93dd4970cf76ca2ee193262208a7d8fd"
  },
  {
    "url": "assets/js/26.ba3b9f29.js",
    "revision": "86bcf0ae0b33384357ea62a4e5bd653a"
  },
  {
    "url": "assets/js/27.aebf8bf2.js",
    "revision": "e6709c6950cb416c1938fadd83d2c7e8"
  },
  {
    "url": "assets/js/28.910fff54.js",
    "revision": "5c9b6a65403738f4c80e634d2f2ad583"
  },
  {
    "url": "assets/js/29.4f75bea4.js",
    "revision": "e27841b8f5e00cb86a8b1e15f9897c0c"
  },
  {
    "url": "assets/js/3.6b1ad65e.js",
    "revision": "5991638fbaf55cbda409789b134dedd1"
  },
  {
    "url": "assets/js/30.d518022b.js",
    "revision": "80bde308205511f0726fb50e78f61691"
  },
  {
    "url": "assets/js/31.2b30009c.js",
    "revision": "9b55cae2a700697a10b196f60e4bfe50"
  },
  {
    "url": "assets/js/32.5917c428.js",
    "revision": "6b3a8acc16201c742c94c3df0e01093b"
  },
  {
    "url": "assets/js/33.d86154fa.js",
    "revision": "a8f5ab52ba4a243634bf07ab997b09d4"
  },
  {
    "url": "assets/js/34.9b7a2495.js",
    "revision": "46a7d4ac2460842455f575a9a59cb99d"
  },
  {
    "url": "assets/js/35.bb0f2846.js",
    "revision": "44de32f36634180f4092e8da7a44558d"
  },
  {
    "url": "assets/js/36.cd276512.js",
    "revision": "2e4fb892d06d8e7c39e5f71a29cdded8"
  },
  {
    "url": "assets/js/37.6322c478.js",
    "revision": "2a59ed92c8a318bbf64ec46cc295daa3"
  },
  {
    "url": "assets/js/38.abe2a2ca.js",
    "revision": "c6502b0f97abd482309d9bbb8f3660eb"
  },
  {
    "url": "assets/js/39.cc60b756.js",
    "revision": "640f23ef9fca57c5a7eb7ff481725ae3"
  },
  {
    "url": "assets/js/4.be7d0f5c.js",
    "revision": "acf403303460cf7317d1f057cd42d2c4"
  },
  {
    "url": "assets/js/40.9004874f.js",
    "revision": "4c0aaf2f9fc15f70e1ef920d19f010e0"
  },
  {
    "url": "assets/js/41.4c4f580a.js",
    "revision": "307179228f3e9062ecf1505071d36615"
  },
  {
    "url": "assets/js/42.4c99faa4.js",
    "revision": "5be951b9f29371eacbf3c8b45224f68e"
  },
  {
    "url": "assets/js/43.85ab972c.js",
    "revision": "b0330f90a0e51860f7d0c5bc30da91bf"
  },
  {
    "url": "assets/js/44.e8672390.js",
    "revision": "00da0def9fcee347fe07593dda3c2edd"
  },
  {
    "url": "assets/js/45.5d04b68b.js",
    "revision": "00281aadf315af3cc6097ecccb56f30c"
  },
  {
    "url": "assets/js/46.0c211f4c.js",
    "revision": "e39703886537c6dff9e891b84cdb7ece"
  },
  {
    "url": "assets/js/47.13230d95.js",
    "revision": "59095710406e04a219736e927e8af104"
  },
  {
    "url": "assets/js/48.45327d4b.js",
    "revision": "ab2f7baca3b34a032756e143930049ef"
  },
  {
    "url": "assets/js/49.7c514b13.js",
    "revision": "ac0392434505a489c2be7184f3a0e116"
  },
  {
    "url": "assets/js/5.bdff17c0.js",
    "revision": "089a94a29bc86723370d4b2995ccadeb"
  },
  {
    "url": "assets/js/50.793e1bc3.js",
    "revision": "a611882c661c2b51d87873bed6a66f40"
  },
  {
    "url": "assets/js/51.5081c6cf.js",
    "revision": "fb235b9bfcde49686626f1f1d9fe0189"
  },
  {
    "url": "assets/js/52.a674b010.js",
    "revision": "6317baaad903c925d931738b098d15dd"
  },
  {
    "url": "assets/js/53.1ed823e7.js",
    "revision": "f7ac7e51b0d0f8f6a08e9b33b33c7a1a"
  },
  {
    "url": "assets/js/6.4a07d590.js",
    "revision": "9300acd23f53466659af62743e0ca29d"
  },
  {
    "url": "assets/js/7.de9db245.js",
    "revision": "e11cbf1dfeed1b343290e14d67d42006"
  },
  {
    "url": "assets/js/8.b8d06e04.js",
    "revision": "fc16c23dbcc79a370b43c0ee5946ac1f"
  },
  {
    "url": "assets/js/9.08a3561c.js",
    "revision": "4f7f3b3e9af95760038258d7552bc594"
  },
  {
    "url": "assets/js/app.329c586b.js",
    "revision": "e176d0d02a4f2a8e15d0b9fba289f3fd"
  },
  {
    "url": "assets/js/vendors~docsearch.1a2f082c.js",
    "revision": "ac59f3ca006aa2b4f041702b130daf48"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "a1afd72ee2df95983c9e22b7bcf344f5"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "9babb9b18fd3687fd55e677a8c622d1c"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "ddfda1d53e9f2cd935dfa3ceb3352557"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "854977b61af204852b226dd8e0b1d787"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "ad2f0c7b394fd56564ea85451f2a8f88"
  },
  {
    "url": "guide/changelog.html",
    "revision": "0aa153a7bacecf309cacc380a907e24f"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "d4a850f09ef741c03d19e383fd32cd37"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "e1ab3f727431009f8b681db209732916"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "c05484c743d46957ecce1f4814415ae6"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "06c2d90702b2c6c97c63da8e1a397c6f"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "37b20a44383cce305a5ac23e0d3b7982"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "d7ad81716f3a2e640aa00176378e0f31"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "d20e3d22a596c0f47adf10f3b9443ae0"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "6d60c9d0fde93d1d013839c77da73f08"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "03970fe06b5b832eea8a427b99207240"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "fef809a629a067820a8e2f153aa17924"
  },
  {
    "url": "guide/index.html",
    "revision": "1be9abfcc91f5a121f048e5d8bb1c373"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "c47bf46cf2dcea3c1e422c00b5ab5598"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "1885e6193fefb51fca92db5ea504e7b9"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "dae56653adbfde34de3e783ae9a5a871"
  },
  {
    "url": "index.html",
    "revision": "d2fa9b838972e5e70fb1572ed3becd03"
  },
  {
    "url": "zh/api/index.html",
    "revision": "d79af24ede142f6c269a98c761179dcc"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "d19bab547d1e58c6bad8e921d9d77ba9"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "0dc6282f0068227853ca0f5d534d562e"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "26d743dba3d003dbb9a97eea685ecdca"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "a6795a60fd3a9bfe08f1397385427a65"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "2e251a5edd11889dc15834bc5ec40e9e"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "1cc1e636c837fb9cb8a387ea3089d0b0"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "17bc22c5b50f137854c39a017618edf3"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "bf5cdc646aa708e10c4ca30b7964a133"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "b0c017971881a3f8c796a61e706de9d2"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "a897c3a9b346126eae7fee1509799424"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "1bc8adbe851ffd440d5818bdebeb33bb"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "973aa316b2b4bd5e2ab74663a9c29a90"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "3eb1d8c2bad630b573b0da7ede8edadf"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "de1582c18982ab1106791716776df914"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "754a9350976899c5d084d181c518e6d0"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "2808b3c58197e149a95285f4c309df08"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "971262a25598878b9a0fc87e1943878d"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "c3667c04d2bcf563a20b6653b1875a13"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "cc83fdb96bd57932044130b71384e1ee"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "a56f7ab3b5d9fd7fb7aa0e5f49211b9f"
  },
  {
    "url": "zh/index.html",
    "revision": "48a1fd007168076d635023bd992d68f5"
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
