'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4f71bdfd8257f5fa04b120b43b81f13d",
"/": "4f71bdfd8257f5fa04b120b43b81f13d",
"main.dart.js": "1ff01c190dba04736e87257ca055c51c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "3a756813e0a232ff6506757cfc1c6cc0",
"icons/Icon-192.png": "fb36e40a364740e0e659dea96c60fcce",
"icons/Icon-maskable-192.png": "fb36e40a364740e0e659dea96c60fcce",
"icons/Icon-maskable-512.png": "8376da6dc4cb81a8802467fa7729513a",
"icons/Icon-512.png": "8376da6dc4cb81a8802467fa7729513a",
"manifest.json": "6de30c92a9325cf82a46daa15f4d5d04",
"tushan_logo.png": "c89b5a425ddfc151ac5a77c5f20e6b44",
".git/config": "45b9afd04db6e3b85cdb9cd5a1a3dde2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/9355972689f8c928be722f1089623481eb96c1": "f7e57eef571c32bb53124156f1838f3c",
".git/objects/3e/4978d34c21c97db1077c5712708dbf0cda88ab": "4178e0bc23836f72e433a044d6e80d57",
".git/objects/50/3b100699f46eb89d9469f22fc408b9db074107": "f63f7e168672c4b25625aad923b61cf1",
".git/objects/3b/fb538e7cbe9689000bc5cb08ddd47b9690500a": "cf0e953f080aeca932f8d03b0184f053",
".git/objects/9e/aab91e4add28bf25a0dd6c1a88bb68d747b4ef": "f2ce3fdd28de7c66399307780b70c736",
".git/objects/35/0b7e93a1f55405db253df1ded3bde6d11d3494": "aef74d3189b4921e5d47711218026d5b",
".git/objects/3c/50730aeb7ab00ca12039a0f58dbc781afd4cc8": "62e7a68e45fb229c32c06b6d5c581bf0",
".git/objects/58/f12c7270e5363f65f95678f7d3e03558d59cae": "2f21f4beab12c9baa8f2e3389714607b",
".git/objects/60/556f7e25220f2cfb443f1e82f489b411bfe153": "3ad301a1cce978297bb87ebe4e1f2daa",
".git/objects/34/0946e08e02e5b6165cf9256333dca52f75261e": "49c26fdbf740041933fc9e55a3a0ed90",
".git/objects/5a/54d447117274e1cc81fc52a3def283903f24ba": "f5a5be2e211ec0b157741b7327fbcd9e",
".git/objects/9d/476a2af206f32faa49489073c46b3329a92da3": "5f3a9796ec227eab2636d540099e643c",
".git/objects/d9/82087b90c0637fac41f12695e429d8df4123f5": "3a70400259a33e6d573e39d20cd421f5",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/d0/a42bc35d2b9f7de50501670a2d00036d58b9d2": "9493e7d4d5f3af8c7f9a9fdc8127efa5",
".git/objects/b3/ed26d83a4c5593e3c4dbc52f44d483d28f3197": "62e0b81754a8d896ba1fdcc4848a8e94",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/d1/5271af7fc994af9a07884f1b659d5bfc53d72c": "ee0f78aacea37ad508a37cd899df05fd",
".git/objects/bc/400c3ae130ff5ffb396bfb98625368ddb10c74": "062e08167bf9432393f51171fe0ca434",
".git/objects/ab/fc0d7265b0bfa839dc0b03c61397bf1a6a5c7f": "9d28fc674cfa9d0c7c6516873e6f195f",
".git/objects/e5/435fd03ec895b728e1855b7a904fe75790ee13": "380d0213d64ef0086dd42e8fc6a57344",
".git/objects/f4/39e9e4491de17b2d1a1eb2726b72680a6e8956": "bdd18f2bd3b3d85741195d981ccc0a15",
".git/objects/c7/da0b5b4015a9d25c76144c0ca35670ce85007c": "285bb0967fd421db4ef7b44cd57e9e39",
".git/objects/fc/baac1a631051e7b02d4688e7d45e18e5c6dd28": "883174f4efebc59b19f5b9f376009474",
".git/objects/fc/227a2b2f247088f55f76177fc8fad3fd01839e": "4105f5fb35a5c87abf4d92bf54f7ac9e",
".git/objects/e3/f32fceaa75d61dde7f6fd68bc79a46f9eb65e3": "61c8085ebb397cf5f84ac22bef6cbf6b",
".git/objects/ca/4a56e603c72848c6ce01ffc9ae413b78e407cf": "d86416bf3c6fd5d1639a3bbd3be0da7d",
".git/objects/e4/506c84f8a054b69eb0672978285414e81546c9": "38495d61a9d4404ddeb90c0ea1546fa0",
".git/objects/ec/cadb3e0f3a78632f77affffcd3f7af29c9c4bf": "d8406b4827244589be07d90761ef453c",
".git/objects/27/fd495debd13a0660bf13ed240b2daad13ace2b": "08f743dde61622ce65a40eecfeeeefe7",
".git/objects/27/aacdc55fdac5c6c0a4e457badc14d88cd75138": "9cf46f4ab738277d59d7162a42fd4797",
".git/objects/4b/a47326ecbf29f0387f12e1f60009a435fdb21d": "e48d47e8d3f8fcc56cd77e44a8101deb",
".git/objects/45/76afbf411b27a1b59c9e603c521ef419bd951d": "06d1dbfe5523aa4f122203f618293e8f",
".git/objects/80/12c9df0b99852fe27d235ceba97f4d4d50f043": "22b413273c504875e4671d840926151c",
".git/objects/17/2d5c3c2bf1f4a8ddb540ab8dc5beba19272098": "2a0cd14fc5d4ea3bd8a9d4b1b8833798",
".git/objects/8a/cb7a1b7bb283d766eafaa93d0fe488e0f4a802": "d809b4d670dc9dbd12490e2d27880483",
".git/objects/00/4926dbae5c64d5eda2571f6de08a9da5c41646": "d9db4068068cd42558314189902e7afd",
".git/objects/9a/dd78998c8c25e6229d825f22caac3f21e46a23": "d853e3ed02ebb0c18fcac4c50bb10bf8",
".git/objects/54/599270fcb9d8e785a138dd5c76a245dec3e8b2": "c4fd63da3642b84a2f009e7dd9a56204",
".git/objects/6c/ab943b87de21882a5d2b37c72136e24170ed82": "12ba7a97b5d124ad5555b3def19adc7e",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/64/7c040bab10cc5dacda7365166429a0bf878482": "0f3eeb9fb3c1f32e8ec9015f0b1f25a4",
".git/objects/d3/f1b8640c37d42e093f06d2cdf7712fb27f9d87": "f42d19a639628b2d7cc7ef0947ab2f87",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/af/ae69e9fa78307d09f632fb2a4fdfabfa125274": "f97b98a5488c743ba21bc22ef7e314f8",
".git/objects/b0/706b004ee3d200082d4daa019365f7e161e8c6": "f3eac534afbf9caf35106d9a4b958001",
".git/objects/e6/b90c865db4e71086e9df233fd3dcabca0804ad": "9ef70b4f1d3374e4df338d00f251579d",
".git/objects/f0/439e75df83c5919489ac6fc5d960fbda07b8fa": "b754e021cfe8754d45ceb5591e878c25",
".git/objects/f7/de9781894148bf66d94dc156f2d8e9b88f16ee": "48ce70a36fbf72714cf4c6d484e93a1e",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/23/2c5cbdcfd8f465f72f760836c7b7432db080c9": "1d9fa20cf3c8127e0337941e02bb4ca7",
".git/objects/85/8a290dbaac9ed8f1feb58f4cafdeabb993e98d": "e2b974b4d185c7d361df6c33a1e0c636",
".git/objects/40/0108b2a960df2e39c16d3b3dd1898dedf3f6ee": "2cf58e1a04b6bc292168a99469edbb3b",
".git/objects/47/5a461e620bb8a126d5180d2873f9ee062a09bf": "219d63e32216b10ecbbbfc01c55e6538",
".git/objects/13/01f6660a463851b803f90c558ac869e408db26": "0a0478678dad30109855194f36cf4404",
".git/objects/7f/88beef1d9ae1242932667bd06f30bd0d599636": "e6662a39a16ecd8a1e63ea8a3506f55e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2c35ca3abc8cbddb826a37920700a27",
".git/logs/refs/heads/main": "3c1bed8bc30b27c7fc3de97c4bdd6f4e",
".git/logs/refs/remotes/origin/main": "073d76645c74871b8f7754d2bd406e65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ff8815174409b1ff08313216e75afeb3",
".git/refs/remotes/origin/main": "ff8815174409b1ff08313216e75afeb3",
".git/index": "57b6928ae5ba97c5211dc2a364d79acd",
".git/COMMIT_EDITMSG": "3f2f674dc68d79a13f0d6cd2d88208f8",
"assets/AssetManifest.json": "2138dd1212d1fc7a7f4a09b5438d7697",
"assets/NOTICES": "ddc38d7edaf7d0ec6db4d93516b22fdd",
"assets/FontManifest.json": "6584fca634474583762e1734de806329",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a3af480050321e2c7cd5ef72d9f7beae",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.bin": "a0c78f67d4a414c1f1ad1215af998c50",
"assets/fonts/MaterialIcons-Regular.otf": "fef8c9c777faa728e979a252fc327fec",
"assets/assets/images/tushan_logo_c.png": "a32303273ddd3f5efa23c71d8c8d855c",
"assets/assets/images/my_image.png": "489abe4860394975c49b734e8e60335a",
"assets/assets/images/instagram.png": "c8fa0c5c0e79b5eb46686db1cc4ecc6d",
"assets/assets/images/resume.jpeg": "b9cc7d8626277986c7b10f4bcc0b873a",
"assets/assets/images/linkedin.png": "11f9322046aaedd05c92013f9d84a95d",
"assets/assets/images/tushan_logo.jpeg": "a1a1bc7fcd2b70ff371f3d2e88634565",
"assets/assets/images/whatsapp.png": "b6e6f51838e2dcf89012d05d175575aa",
"assets/assets/images/cv.png": "9bdb5b98a28d46c5e65509aad6609dfb",
"assets/assets/fonts/TiltNeon-Regular.ttf": "890850386549134dc1d31e0d1c0aa6f5",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/skwasm.wasm": "c0e1e265faeb6428fdeb9bc37be480f9",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.wasm": "7e8555fa0fbf19a88ba6ea83d02eda6d",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "35222aaf0d06f6dfba5b13782f7ff32e",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
