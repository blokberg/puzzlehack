'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "923068e08c56c1c9f4de6d19e515f7fb",
"index.html": "6472ec32b1ce387c9934288df94580b1",
"/": "6472ec32b1ce387c9934288df94580b1",
"main.dart.js": "d8ef06ffb84f5d44a14f22dd33006f55",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "62ff33596ceb83a7e19037689095e4eb",
".git/config": "f11a8c9a37fa4ad46a79bf0b3c18ef4a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/609c221f8ad6ba988c37d7f43344c1dd6dfe23": "63d8bc86969e1f3f9e0de7dc32623e15",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/7d418b89555330870c43608ec2a85a0ee3945b": "0da7ea57eb6f3c580982444d2049861a",
".git/objects/58/a096c7532a7861fd4dd3e1d406eb2968a79af0": "8ce42cb363cfe8cdea7af0b2bdc8c7fa",
".git/objects/60/697ace5740cbcf6f27960cb14e480aadbd07fb": "503cd15fe020e46295a8aef6160f5c59",
".git/objects/5a/953aaae467d66eee40e3ad74dae405d17d1dd4": "c9db8102701c92ded5af8a9253d12cce",
".git/objects/da/4fd77b4a42751b3a00fa5355cdf38464f826a0": "d4a3d05819a68d355ac13a79b6c1e31e",
".git/objects/bd/c627ce889cc188daf977fe2b04d9027d300f37": "4cb92175ea65e7562674e3781ebd2d3c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9251fe33addd6efaca609a248929d672333e37": "9978061a54712db213d8dfda67cd25ba",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/acb6647dd555aaa67395a217dc44c1614acabd": "b8afeab0bf30368ab9ed9e2419974512",
".git/objects/f4/a2ec57230332c181aa79061b93553a944bff3b": "9484bc977a4cc1b12a6eb514c7462444",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/5477219d2722ed041dc1881ac184901c39b0fe": "f3083d974f9b459c0cb28a8947f0ccf6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/279c3d1c296d4b79df242792aa456730c0ddec": "7b2ef3a52cc5bbfaeb65cca1b5f6a43f",
".git/objects/1a/163b96f5321b80481f2674b030edf9bd90377d": "e69a8c1dd9abec20511f20f48da2c742",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6efa5f6542fc44a8d3c80ccffb04f771376a2d": "161163c4d575ea66030c2bfdb8ac59aa",
".git/objects/81/75343ec17fa534e3ae2931e9d99fe8a897ca94": "42dfe70f28cfb6cb2f75158b7278ccec",
".git/objects/86/8be864c8f4fbc3122d17f2f9b0e044a2745a00": "0c276344e0f99bd401689202647124a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8178fe85f766dc5be737b2d81bdbec5f1e3010": "388b4ececdda9c69aa05fef6ad05f30a",
".git/objects/5c/fa96bc22e3ceefc3ee656353755ab07305febc": "debd8f522ed7ed8bd99e4ad68a2db37c",
".git/objects/09/411b4cebb6d271df3b13bed6edb8d29bf0a9af": "d5f086dbcc38423795d6c2025c07c143",
".git/objects/5d/68e940007b4d4e3d1a7065d1b8050f5d6f8f00": "14c4cd45aa81fb6a5bcb975f88c4d1c0",
".git/objects/5e/77b8f354bbbb3153a756bc538643241f786f9e": "033d67b9d3cd665f475bcae3cd33c30e",
".git/objects/63/d37d71637b3fbdb76780c0d169d0521a1121c2": "d7a4f9ac38893a692b911b3db80494db",
".git/objects/64/a09ecff1b4f3c8b1531996054b94dd40575a8a": "30384e2c81f12007fe132670a622e9cc",
".git/objects/aa/12605d26c0c307ac1323d72ef2d5dc488078b8": "f1f84f300a4d48087d81593a87a594a4",
".git/objects/af/270582c8c1c745eba97d545c160a05c571662e": "c9a326cb88aa79e9449823bad63adf67",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/2b4ecac8a5a4a1bca1e248e4b261f7e9d75936": "a85e21eed6abb747bc44c038e8f67b57",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/4e7c7706fa3ec707f9640efe812e9c0c2f2cfc": "0981b9c3c935220fed775f4dc96ab8bd",
".git/objects/f7/966680a21278c7044199e6fefb8f25efc23ced": "4030434bb43292249bb52ece7106ecec",
".git/objects/fa/a1c0bfd15f175416357b4dcde21d6eeba66c64": "dc06f05a6f34fda6492f1bac6629692a",
".git/objects/c5/038c1ca16d56c5b0ebe3cca574b562c21eb02e": "ad0683b120e0bd87b09bd2d7d90de3b6",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/33a13d4a96bcaa1db792bbab83ffc78ca0ead4": "e401ac68588bb3d05753b32905d16d90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/b810f6b004dc5ceeb654b8228772b8301c55f4": "a1621b82f9a20b3ea2fed8d7470db56a",
".git/objects/1b/d9e379632a39601cf52726a4c96dc9008f89e5": "53841a1dea8cf9a1e6715e2bea246959",
".git/objects/24/078602708beda5b828d93ca1367d84bb4efaf4": "f7a3eaaca085ba869a168bbc632d0bbd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/6b089a19a256e9c096bda5fcfbfa2777330053": "7726666601ca8a79ac13cac9c3ea6739",
".git/objects/7a/1bb9f2f138f5c438c10a7815b1979c190d0f47": "269c3de3584c81564a8eec4b6baf9676",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83495824aa1cdf615a8672bb3fe64ac9",
".git/logs/refs/heads/main": "d24ac462e967a426bf66f35b3633875f",
".git/logs/refs/remotes/origin/main": "b6ae71893c04340cefa558d11b63ac85",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "c53992069b8a72be3aaa632eecf56ed0",
".git/refs/remotes/origin/main": "c53992069b8a72be3aaa632eecf56ed0",
".git/index": "2d5a519a1ecf93d898bd21b4cedbc123",
".git/COMMIT_EDITMSG": "14477e45709d34b51f856d59ea524350",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "7a045b543f3c4f8d36de54c4184798e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
