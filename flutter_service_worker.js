'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f15077fadeb738e0cfe206375add7ef9",
"assets/assets/habilidades/CleanArchitecture.jpg": "07b2e4403c83a8b377ad14ab3589044c",
"assets/assets/habilidades/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/habilidades/flutter.png": "85e5af196c6ef4824f5c76e969194a95",
"assets/assets/habilidades/godot.png": "2910c67f86a4e9a68c55b30f92355172",
"assets/assets/habilidades/java.png": "b286363fb2900536f7b7425efb9173fd",
"assets/assets/habilidades/tdd.png": "585f62b6f4ea721b77b8c596f491d793",
"assets/assets/imagens/capa_phone.png": "138d91ba234899f50c99fec5f5c69289",
"assets/assets/imagens/fundo_header.png": "ba4c6b74deed4422eac026d310846520",
"assets/assets/imagens/github.png": "37ff29981d40f08a882e94b94d89e874",
"assets/assets/imagens/Instagram.png": "53acdc05b7e66f521de8301841f1d930",
"assets/assets/imagens/linkedin.png": "a94551a792d6f3fb958b78e299b6e1dd",
"assets/assets/imagens/perfil_1.png": "fccbf8feb297a8300878aa5e63255b9c",
"assets/assets/imagens/perfil_2.png": "11565cf62f08b9240bea6e4f3976ef87",
"assets/assets/outros_projetos/TechSocia.webp": "baf7f47e952ecf6f2ca963b0d8606ce4",
"assets/assets/projetosTI/banco_de_talentos/miniatura.jpg": "00b8d36f305c2313da790d164e798bca",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_1.jpg": "11901648083ccacaaed8fd2e411a0ad9",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_2.jpg": "f8d9be600d7d1a3563969c5a44c752ac",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_3.jpg": "c4093017eded8c1e242b337aff6cee23",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_4.jpg": "89a3ea0de0c86c4a19411f9ff81dc9f1",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_5.jpg": "83340427d31d716cf0a0da64b56cfdfe",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_6.jpg": "1dafe1bcbe8fc698e5c2f0467dd5f7cc",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_7.jpg": "858ba6fef8ea177dc660e86c97cc384c",
"assets/assets/projetosTI/pje2x_mobile/miniatura.png": "23822f6971d74d8276e7a012b6d42fb1",
"assets/assets/projetosTI/pje2x_mobile/pje_1.jpg": "a37a527c71213bc395fc61c2d1198110",
"assets/assets/projetosTI/pje2x_mobile/pje_2.jpg": "b8b3d667a07a38ea48580fc23b878017",
"assets/assets/projetosTI/pje2x_mobile/pje_3.jpg": "238fcd4ceadd26c9496648e8a7cd80ad",
"assets/assets/projetosTI/pje2x_mobile/pje_4.jpg": "5e4d06dc7cd03478ee6d179829239f10",
"assets/assets/projetosTI/pje2x_mobile/pje_5.jpg": "63ff68d56a70365578ba6f0de8d6a9f1",
"assets/assets/projetosTI/pje2x_mobile/pje_6.jpg": "36832fa01fcfb5f65d62eb424ef8e8d3",
"assets/assets/projetosTI/pje2x_mobile/pje_7.jpg": "441a21a8d383b22d1b9f7bf6d2190dde",
"assets/assets/projetosTI/space_virus/minuatura.png": "98ff585e409f4723f171f70b3f0fc764",
"assets/assets/projetosTI/space_virus/space_1.webp": "d8e63f6da40cd80f79a570768ed25349",
"assets/assets/projetosTI/space_virus/space_2.webp": "88a4be265954cb960d1c7693fe14581c",
"assets/assets/projetosTI/space_virus/space_3.webp": "6fd25284514f920a41ece9c6f6378385",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f35aa683a6c7839ab6f81c452e132e1",
"/": "2f35aa683a6c7839ab6f81c452e132e1",
"main.dart.js": "fa91ba9ba0fdea80e6ea4676dca3a381",
"manifest.json": "7090bb9a382a3f7b50bbf0fff9eba248",
"version.json": "ef919b19283904105c8871ae946c29a2"
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
