'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "64210b0c7542001fc00e8947035c1401",
"index.html": "dde7015e3f296137fafa0fe7a1db323b",
"/": "dde7015e3f296137fafa0fe7a1db323b",
"js/test.js": "27150fa7ec13040075a154c98e904667",
"main.dart.js": "3d3ebec30fb5e48b324444b76b1adced",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1ac7d3cfbbf51ca47a961f602aade8c6",
"assets/images/svg/ic_share.svg": "d3d7854a990425b49fc4e236a7c0740e",
"assets/images/svg/ic_language_fanti.svg": "890a52f6c1dd3d97d139f2091a15fcbb",
"assets/images/svg/ic_next_small.svg": "bf87673e4f015f11cac30da4429bc0d7",
"assets/images/svg/ic_choose_2.svg": "deebdd539cd11c4cc50ccf130bfa9294",
"assets/images/svg/ic_plus.svg": "e472067b20f505cc06f5b4fc59677d99",
"assets/images/svg/ic_user.svg": "f4e922517a77ee05c1b9d434b8a8867c",
"assets/images/svg/indicator.svg": "bbd65330167908bf63e00bee3a6930d6",
"assets/images/svg/ic_twt_1.svg": "28df371adc03b9a33b1f8358b78ed073",
"assets/images/svg/ic_language_english.svg": "df87fa7170323d8e152edf494594ec40",
"assets/images/svg/ic_language_jianti.svg": "7418eac9520499929c68c3165f74bdca",
"assets/images/svg/ic_shouyi.svg": "933a5ade16c8d799d0723268985c6dfc",
"assets/images/svg/ic_ketiqu.svg": "dab3be02a342c7629e0ab7c03217db0f",
"assets/images/svg/ic_reduce.svg": "87de4725c7462cd66dd3887e70db979e",
"assets/images/svg/ic_close_1.svg": "d114d8f8dc17232a985772d10e919141",
"assets/images/svg/ic_eth_white.svg": "934708bbbadd59bf5886ad74757c5ab2",
"assets/images/ic_lizhifengbao.png": "832ed46d81d560c7ef30b427512b2a2f",
"assets/images/%25C9%25A8%25D2%25BB%25C9%25A81.png": "5bf48225343c3b8544e55ea38e1adbf4",
"assets/images/ic_language_jianti.png": "9b35003fac24826e702f703989e09367",
"assets/images/line_zs_shang.png": "123be3efcbf2a37f2ac4a7f6ce6d4e06",
"assets/images/ic_share.svg": "d3d7854a990425b49fc4e236a7c0740e",
"assets/images/ic_lizhijiangli.png": "7b1d17c9f6963bd30cca5149f17e39f4",
"assets/images/%25E8%25B4%25AD%25E7%2589%25A9.png": "5c12f7500602aab3e742ac40fce64abd",
"assets/images/ic_tuandui.png": "1a0ade4db76dbddccf19c1d9f78b2bf8",
"assets/images/ic_language_fanti.svg": "890a52f6c1dd3d97d139f2091a15fcbb",
"assets/images/ic_zhituirenshu.png": "f0cd79dc141760c3cfcb3e5120d8d97e",
"assets/images/1449545938810.png": "10f2e77463bdf229a4d4e3c3c435b066",
"assets/images/ic_next_small.svg": "bf87673e4f015f11cac30da4429bc0d7",
"assets/images/bg_tixian.png": "92dd5c530f4d1c38055ffe8c940a9ad5",
"assets/images/%25C9%25A8%25D2%25BB%25C9%25A82.png": "06a10492b071923c94890c343f864d16",
"assets/images/ic_language_english.png": "3091d86b0ad03ed2160ac3c94219adf6",
"assets/images/%25E6%259C%258B%25E5%258F%258B%25E5%259C%2588.png": "2f9f3c005c0b5c12cba7d790c22f2c3e",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E8%25AE%25BE%25E7%25BD%25AE.png": "a6bda68577bc3b62321f00993839a9aa",
"assets/images/icon_right.png": "562e2f717a36cdeb36b707a1d35a72b9",
"assets/images/ic_twt_1.png": "718cd56aa025f5974f7d6a57036ce785",
"assets/images/ic_zhituijiangli.png": "22c9d35da4a5a581b9614605faa8023d",
"assets/images/%25E6%2590%259C%25E4%25B8%2580%25E6%2590%259C2.png": "b57606743693345895cbab9c61b98ec7",
"assets/images/ic_choose_2.svg": "deebdd539cd11c4cc50ccf130bfa9294",
"assets/images/%25E6%2594%25BE%25E5%25A4%25A7%25E9%2595%259Cb.png": "0ebcb4a33f9e17a7b28ea2d42b9bcd7a",
"assets/images/%25E9%2599%2584%25E8%25BF%2591%25E7%259A%2584%25E4%25BA%25BAicon.png": "751cbf3505816f5cbb92cfb925be7e05",
"assets/images/%25D2%25A1%25D2%25BB%25D2%25A1.png": "9da604eb857a70f899654bbd4214cae6",
"assets/images/ic_plus.svg": "e472067b20f505cc06f5b4fc59677d99",
"assets/images/%25E5%259C%2586%25E5%258A%25A0.png": "8bbae0f87ddfa45695eb8f7499a30c8a",
"assets/images/tabbar_mine.png": "c322551791a67da75d965dd87663890f",
"assets/images/ic_fuhuaqi.png": "4234519a7097bb6a174d24eee833adf5",
"assets/images/group.png": "94efbf1035638ef6b8b5f9f8898d685c",
"assets/images/ic_chuju.png": "53130e2b3bee056c8179ddfa6aeb2b9e",
"assets/images/%25E6%2594%25B6%25E4%25BB%2598%25E6%25AC%25BE.png": "7a8d90622c83cad02547529878796f76",
"assets/images/tabbar_friends_hl.png": "77061b3aa650056d6f15c6169c04e214",
"assets/images/ic_cash_2.png": "e0cf94f8578b57201a5185cedfb6c75c",
"assets/images/indicator.png": "74022b4b5394e4077136c07f3cb6227d",
"assets/images/flutter.png": "6ebea1ebd853b9e95b5f35995e82ee28",
"assets/images/ic_wallet_btc.png": "b53bb413030cff6f14df82d8d6b70760",
"assets/images/ic_user.png": "0f1fa56df0b731753c16d624fc4a49e9",
"assets/images/ic_gongyin.png": "abefdd5edd6e396186c7c585b6ff1256",
"assets/images/%25E6%2594%25BE%25E5%25A4%25A7%25E9%2595%259Cw.png": "3669908857461f0849bf51fa0d39b0eb",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%258D%25A1%25E5%258C%2585.png": "d847e796ccfc17c39caa0c5dbe57775e",
"assets/images/banner2.png": "2af947217ddb6997ada7deed57c2e3f8",
"assets/images/ic_user.svg": "f4e922517a77ee05c1b9d434b8a8867c",
"assets/images/indicator.svg": "bbd65330167908bf63e00bee3a6930d6",
"assets/images/line_zs_xia.png": "53dcd9872e02cca075362b3ef0ac4110",
"assets/images/%25E4%25BA%2594%25E8%25A7%2592%25E6%2598%259Fb.png": "e659d3b8ee838f0e4c4e057a8cd67556",
"assets/images/banner3.png": "98b707bb295586cc1be0c0c6ba2e06ce",
"assets/images/%25E6%25B8%25B8%25E6%2588%258F.png": "d06f0ba6b0a8362b4f1759d52544998f",
"assets/images/banner1.png": "e34ce57096b86527f88685d4e1e0857d",
"assets/images/%25E4%25BA%2594%25E8%25A7%2592%25E6%2598%259Fw.png": "2cc106431e5c8a057a316981bc0ceaf0",
"assets/images/ic_plus.png": "3fe64bf8f0d5af21464b25bb84b1e569",
"assets/images/ic_password_2.png": "e349aa84c33a2701c84e8357ad70b122",
"assets/images/ic_choose_2.png": "04bfdd9b62cffd4fe8adaaa7f457357b",
"assets/images/%25E6%25B8%25B8%25E6%2588%258F2.png": "d06f0ba6b0a8362b4f1759d52544998f",
"assets/images/%25E6%2596%25B0%25E7%259A%2584%25E6%259C%258B%25E5%258F%258B.png": "915514fc20475a60f4dc35f5b8e6ddba",
"assets/images/%25E6%25B0%2594%25E6%25B3%25A1.png": "a7b0dc268dac241d7d31e433994a44e8",
"assets/images/IMG_pro1.jpeg": "a38b91a79685655e0b2fa67db155b079",
"assets/images/ic_twt_1.svg": "28df371adc03b9a33b1f8358b78ed073",
"assets/images/banner4.png": "34a38d9f300dda72d04a66b54e380a46",
"assets/images/ic_language_english.svg": "df87fa7170323d8e152edf494594ec40",
"assets/images/ic_next_small.png": "5291ebc9a9658bf85963d9a26e2fcff7",
"assets/images/ic_language_fanti.png": "dc62e68781a27f8a8e013b1408a91979",
"assets/images/btn_bet.png": "eaec770d2ac3c2bd62bc411c6821dd0e",
"assets/images/tabbar_chat_hl.png": "369fc74dc55f281b10fa23d7adbe9192",
"assets/images/ic_share.png": "b772eee7fe31ffa48145ad537c4914ca",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E8%25A1%25A8%25E6%2583%2585.png": "1d4db77471f18b507a1ba6496c7a28c0",
"assets/images/ic_language_jianti.svg": "7418eac9520499929c68c3165f74bdca",
"assets/images/ic_popup_btc.png": "080679c7368654c8f60c85272809c7b9",
"assets/images/ic_psc.png": "11d24d12b0d36dea4404362c52b9bb08",
"assets/images/tabbar_discover_hl.png": "b035796ad7127bb706f1ffdc424a3db7",
"assets/images/ic_lv2.png": "a076fc14d91e51c9c15ab10cad0512c5",
"assets/images/ic_wallet_usd.png": "41353d3cb49a309f006ebdadd414f97c",
"assets/images/ic_eth_white.png": "7bae1d653c276c89f2adf2d7095b1560",
"assets/images/tabbar_chat.png": "09c4e96088f9d75b0769bc3895b57de5",
"assets/images/avatar.jpg": "1b93fea7a648680b3b526d0bc9d82965",
"assets/images/ic_lv3.png": "3c9badd1197f5c54b337254233170213",
"assets/images/avatar.png": "0d4a5912f5005633bc5a37060341a52f",
"assets/images/prompt_box.png": "983793aee15da2a5986ff27ae3ed0329",
"assets/images/fenge.png": "98da76d28cbe936e11b2dd711b051c04",
"assets/images/ic_lv1.png": "0f903806f9240fa71272ec50bad4f216",
"assets/images/ic_wallet_eth.png": "c50fd2e5f93cf063f8b1d601aeb9359c",
"assets/images/%25E6%2590%259C%25E4%25B8%2580%25E6%2590%259C%25202.png": "85c0d3a023ee87ec4ce7c7728827f9ba",
"assets/images/Logo2.jpeg": "98fd0006ba55a944c80a60254445e8ce",
"assets/images/bg_shouyi.png": "ce6ecbb50111fff6cdef1e55df6382ce",
"assets/images/ic_lv0.png": "0f903806f9240fa71272ec50bad4f216",
"assets/images/logo.png": "88db8f0cf047fca8c3f44a3e4e01007c",
"assets/images/logo2.png": "3cfbf3a2b69cf9a5dae42456c258e284",
"assets/images/%25E5%2585%25AC%25E4%25BC%2597%25E5%258F%25B7.png": "0ee03dd5ee679ef9ab22e46ebb60836a",
"assets/images/ic_chenggong.png": "d0d218943b46296b06db1300e01ad6ca",
"assets/images/ic_lv4.png": "aeb92236a7e6cc3a0643c5992449bc6d",
"assets/images/ic_shouyi.svg": "933a5ade16c8d799d0723268985c6dfc",
"assets/images/ic_ketiqu.svg": "dab3be02a342c7629e0ab7c03217db0f",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E7%259B%25B8%25E5%2586%258C.png": "a9593b662da12409291dfe19522e3bc7",
"assets/images/ic_metamask.png": "d5b286597f69c0f207f948bbb8d17b25",
"assets/images/ic_reduce.svg": "87de4725c7462cd66dd3887e70db979e",
"assets/images/ic_copy.png": "c39d761306f28ff9d8d28eb07c9645f9",
"assets/images/ic_choose_h.png": "df0404c10498189697597747cd00ceb9",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E6%2594%25AF%25E4%25BB%2598.png": "7c8639f0fe3993117df492cf93368f88",
"assets/images/bg1.jpg": "9993d8b741cbbfa2aa772fb96e17a1a7",
"assets/images/%25E7%259C%258B%25E4%25B8%2580%25E7%259C%258Bicon.png": "59cda90bdb2be5a13a6a47a9631da14b",
"assets/images/bt_twt.png": "abe0df4b26c89c6fe782464d679e2a4f",
"assets/images/icon_friends_add.png": "f07db608634ff9bc5bf14234e5534c3d",
"assets/images/ic_wallet_eos.png": "2891fba018dff14c891e83706e1817b3",
"assets/images/ic_close_1.png": "dcb6352c866e335ea4b108bd8ad9e546",
"assets/images/%25C9%25A8%25D2%25BB%25C9%25A8.png": "ce3619c084b7367de2ff5f3da3e5480c",
"assets/images/ic_aoqingren.png": "d34a9b38aef5a62c44a02e40312d53b1",
"assets/images/%25E6%25A0%2587%25E7%25AD%25BE.png": "014d15d72c80890721e2b158e9c20723",
"assets/images/ic_android.png": "a568f0538e2f5f5fa3551caa1b8ae131",
"assets/images/ic_scssen_2.png": "b8b5415b8b2aca1d61040b9b3c50ba11",
"assets/images/tabbar_friends.png": "e7488aa169cdcf44ca4c55afde53a445",
"assets/images/ic_nothing.png": "9e6b80e879907aa77718af9d2d6e69b3",
"assets/images/zs_2.png": "589469ffcc2c3b1a576624439883c6fd",
"assets/images/ic_popup_3.png": "8eb0eaff79cdc86294879b2cd2928c29",
"assets/images/ic_close_1.svg": "d114d8f8dc17232a985772d10e919141",
"assets/images/zs_1.png": "d0a0ceeb72b97698d09b59a06e892d9a",
"assets/images/ic_ketiqu.png": "493de518f847782674e8715d1a61fad1",
"assets/images/tabbar_discover.png": "4f0a7336b78ac69cb12a3eeff938b7d8",
"assets/images/ic_reduce.png": "d87a6ba1b1333b650ff85f1bf12b573f",
"assets/images/ic_wanjiashichang.png": "22a644b87a5f623b9f2c79720d3f1721",
"assets/images/ic_shouyi.png": "d64acfd932425db672d92afa4d9fda31",
"assets/images/%25E7%25BE%25A4%25E8%2581%258A.png": "171670282f6b859b0ffaa33fc7b2ed74",
"assets/images/2.PNG": "082fa35ef4b2cd2bb2f1009ac97d9ca0",
"assets/images/%25E5%25BE%25AE%25E4%25BF%25A1%25E6%2594%25B6%25E8%2597%258F.png": "2fee0b5a4529409cebeee07367e43e68",
"assets/images/ic_back_white.png": "a78310e803014a927cc7c44e40be721f",
"assets/images/ic_jiangjinchi.png": "01cb838467ffc0f95cae6059b3019215",
"assets/images/tabbar_mine_hl.png": "5738a959ef97654667ea1f6e84faf470",
"assets/images/ic_sibai_2.png": "9039c1329178ac47fbc8c0d2458db8c1",
"assets/images/3.PNG": "320e728ab29d3c0babf97078532f44c8",
"assets/images/%25E6%25B7%25BB%25E5%258A%25A0%25E6%259C%258B%25E5%258F%258B.png": "34d6961a2ca4ef2528375183bf2b6aa8",
"assets/images/badge.png": "58a3c561eb214c7a830ff1a4d3c75058",
"assets/images/%25E6%25A0%2587%25E6%2598%259F.png": "a2f82ba23258ae19131ff4f18c53fe97",
"assets/images/ic_choose_normal.png": "21af42d5350a34cd5cb6492f3ccd230c",
"assets/images/ic_ios.png": "ed228b610027b7f5f4cc605a7a505896",
"assets/images/1.PNG": "8cd637e168048bcc656a8b5b8b27536d",
"assets/images/%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258F.png": "cde510323ace230be223738a3a73f825",
"assets/images/ic_eth_white.svg": "934708bbbadd59bf5886ad74757c5ab2",
"assets/images/%25E7%259B%25B8%25E6%259C%25BA.png": "5cb3df57aa494d0df5759883f7f95f70",
"assets/images/%25E6%2590%259C%25E4%25B8%2580%25E6%2590%259C.png": "b57606743693345895cbab9c61b98ec7",
"assets/images/avatar1.jpeg": "d3839fc117f5f2a04a3ce0350a94765f",
"assets/images/avatar.jpeg": "e442955d711058e06517e01fe8aa11a9",
"assets/images/bg.png": "76f24fa1d6b2a26ea8cce7938ff9705f",
"assets/images/%25E5%258F%2591%25E8%25B5%25B7%25E7%25BE%25A4%25E8%2581%258A.png": "d85c29fc55d476ccf289044bd1df1080",
"assets/AssetManifest.json": "3d8cc9d65862d07236c740b561b2e24d",
"assets/NOTICES": "870810903fcd3d820bdc15401508871b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/test.json": "d7e76bbabc93cc8cc8bcd85d8f1d9ed9",
"assets/assets/order.json": "ff69e1968696090a9239ab036777b315",
"assets/assets/bouns.json": "c0f9e9a6a63c0ab106fd2180c3ec6d7e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
