'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "64210b0c7542001fc00e8947035c1401",
"index.html": "c0664af8c861130a1b7e47ce1470c9ff",
"/": "c0664af8c861130a1b7e47ce1470c9ff",
"js/test.js": "27150fa7ec13040075a154c98e904667",
"main.dart.js": "866b62fb4c016facfd7ce568e4e2c92f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c69369a6e24f725961df25d547ff809c",
"assets/AssetManifest.json": "67ded7fd8b80f9bc1ecff7632c074421",
"assets/NOTICES": "0191aae5257e880bf4b94241cc0a0d0e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a31d6bbe7226cebbe63104134562aab1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/ic_lizhifengbao.png": "832ed46d81d560c7ef30b427512b2a2f",
"assets/assets/images/ic_language_jianti.png": "9b35003fac24826e702f703989e09367",
"assets/assets/images/line_zs_shang.png": "123be3efcbf2a37f2ac4a7f6ce6d4e06",
"assets/assets/images/ic_lizhijiangli.png": "7b1d17c9f6963bd30cca5149f17e39f4",
"assets/assets/images/ic_tuandui.png": "1a0ade4db76dbddccf19c1d9f78b2bf8",
"assets/assets/images/ic_zhituirenshu.png": "f0cd79dc141760c3cfcb3e5120d8d97e",
"assets/assets/images/bg_tixian.png": "92dd5c530f4d1c38055ffe8c940a9ad5",
"assets/assets/images/ic_language_english.png": "3091d86b0ad03ed2160ac3c94219adf6",
"assets/assets/images/icon_right.png": "562e2f717a36cdeb36b707a1d35a72b9",
"assets/assets/images/ic_twt_1.png": "718cd56aa025f5974f7d6a57036ce785",
"assets/assets/images/ic_zhituijiangli.png": "22c9d35da4a5a581b9614605faa8023d",
"assets/assets/images/ic_fuhuaqi.png": "4234519a7097bb6a174d24eee833adf5",
"assets/assets/images/group.png": "94efbf1035638ef6b8b5f9f8898d685c",
"assets/assets/images/ic_chuju.png": "53130e2b3bee056c8179ddfa6aeb2b9e",
"assets/assets/images/ic_cash_2.png": "e0cf94f8578b57201a5185cedfb6c75c",
"assets/assets/images/indicator.png": "74022b4b5394e4077136c07f3cb6227d",
"assets/assets/images/ic_wallet_btc.png": "b53bb413030cff6f14df82d8d6b70760",
"assets/assets/images/ic_user.png": "0f1fa56df0b731753c16d624fc4a49e9",
"assets/assets/images/ic_gongyin.png": "abefdd5edd6e396186c7c585b6ff1256",
"assets/assets/images/banner2.png": "2af947217ddb6997ada7deed57c2e3f8",
"assets/assets/images/line_zs_xia.png": "53dcd9872e02cca075362b3ef0ac4110",
"assets/assets/images/banner3.png": "98b707bb295586cc1be0c0c6ba2e06ce",
"assets/assets/images/banner1.png": "e34ce57096b86527f88685d4e1e0857d",
"assets/assets/images/ic_plus.png": "3fe64bf8f0d5af21464b25bb84b1e569",
"assets/assets/images/ic_password_2.png": "e349aa84c33a2701c84e8357ad70b122",
"assets/assets/images/ic_choose_2.png": "04bfdd9b62cffd4fe8adaaa7f457357b",
"assets/assets/images/IMG_pro1.jpeg": "f0cd79dc141760c3cfcb3e5120d8d97e",
"assets/assets/images/banner4.png": "34a38d9f300dda72d04a66b54e380a46",
"assets/assets/images/banner5.png": "e288dd8ae5571c5d3a2da5b1b9bab9d0",
"assets/assets/images/ic_next_small.png": "5291ebc9a9658bf85963d9a26e2fcff7",
"assets/assets/images/ic_language_fanti.png": "dc62e68781a27f8a8e013b1408a91979",
"assets/assets/images/btn_bet.png": "eaec770d2ac3c2bd62bc411c6821dd0e",
"assets/assets/images/ic_share.png": "b772eee7fe31ffa48145ad537c4914ca",
"assets/assets/images/ic_popup_btc.png": "080679c7368654c8f60c85272809c7b9",
"assets/assets/images/banner6.png": "5b4aaf5a68b8430925a8ae05b9d9fe78",
"assets/assets/images/ic_psc.png": "11d24d12b0d36dea4404362c52b9bb08",
"assets/assets/images/ic_lv2.png": "a076fc14d91e51c9c15ab10cad0512c5",
"assets/assets/images/ic_wallet_usd.png": "41353d3cb49a309f006ebdadd414f97c",
"assets/assets/images/ic_eth_white.png": "7bae1d653c276c89f2adf2d7095b1560",
"assets/assets/images/avatar.jpg": "1b93fea7a648680b3b526d0bc9d82965",
"assets/assets/images/ic_lv3.png": "3c9badd1197f5c54b337254233170213",
"assets/assets/images/avatar.png": "0d4a5912f5005633bc5a37060341a52f",
"assets/assets/images/prompt_box.png": "983793aee15da2a5986ff27ae3ed0329",
"assets/assets/images/fenge.png": "98da76d28cbe936e11b2dd711b051c04",
"assets/assets/images/ic_lv1.png": "0f903806f9240fa71272ec50bad4f216",
"assets/assets/images/ic_wallet_eth.png": "c50fd2e5f93cf063f8b1d601aeb9359c",
"assets/assets/images/bg_shouyi.png": "ce6ecbb50111fff6cdef1e55df6382ce",
"assets/assets/images/ic_lv0.png": "0f903806f9240fa71272ec50bad4f216",
"assets/assets/images/logo.png": "13e3b7fd3297531966d2f682146eb5b3",
"assets/assets/images/ic_chenggong.png": "d0d218943b46296b06db1300e01ad6ca",
"assets/assets/images/ic_lv4.png": "aeb92236a7e6cc3a0643c5992449bc6d",
"assets/assets/images/ic_metamask.png": "d5b286597f69c0f207f948bbb8d17b25",
"assets/assets/images/ic_copy.png": "c39d761306f28ff9d8d28eb07c9645f9",
"assets/assets/images/ic_choose_h.png": "df0404c10498189697597747cd00ceb9",
"assets/assets/images/bt_twt.png": "abe0df4b26c89c6fe782464d679e2a4f",
"assets/assets/images/ic_wallet_eos.png": "2891fba018dff14c891e83706e1817b3",
"assets/assets/images/ic_close_1.png": "dcb6352c866e335ea4b108bd8ad9e546",
"assets/assets/images/ic_aoqingren.png": "d34a9b38aef5a62c44a02e40312d53b1",
"assets/assets/images/ic_android.png": "a568f0538e2f5f5fa3551caa1b8ae131",
"assets/assets/images/ic_scssen_2.png": "b8b5415b8b2aca1d61040b9b3c50ba11",
"assets/assets/images/ic_nothing.png": "9e6b80e879907aa77718af9d2d6e69b3",
"assets/assets/images/zs_2.png": "589469ffcc2c3b1a576624439883c6fd",
"assets/assets/images/ic_popup_3.png": "8eb0eaff79cdc86294879b2cd2928c29",
"assets/assets/images/zs_1.png": "d0a0ceeb72b97698d09b59a06e892d9a",
"assets/assets/images/ic_ketiqu.png": "493de518f847782674e8715d1a61fad1",
"assets/assets/images/ic_reduce.png": "d87a6ba1b1333b650ff85f1bf12b573f",
"assets/assets/images/ic_wanjiashichang.png": "22a644b87a5f623b9f2c79720d3f1721",
"assets/assets/images/ic_shouyi.png": "d64acfd932425db672d92afa4d9fda31",
"assets/assets/images/ic_back_white.png": "a78310e803014a927cc7c44e40be721f",
"assets/assets/images/ic_jiangjinchi.png": "01cb838467ffc0f95cae6059b3019215",
"assets/assets/images/ic_sibai_2.png": "9039c1329178ac47fbc8c0d2458db8c1",
"assets/assets/images/ic_choose_normal.png": "21af42d5350a34cd5cb6492f3ccd230c",
"assets/assets/images/ic_ios.png": "ed228b610027b7f5f4cc605a7a505896",
"assets/assets/images/bg.png": "76f24fa1d6b2a26ea8cce7938ff9705f",
"assets/assets/test.json": "d7e76bbabc93cc8cc8bcd85d8f1d9ed9",
"assets/assets/order.json": "ff69e1968696090a9239ab036777b315",
"assets/assets/bouns.json": "c0f9e9a6a63c0ab106fd2180c3ec6d7e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
