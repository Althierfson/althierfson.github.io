'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"assets/assets/imagens/fundo_header.png": "ba4c6b74deed4422eac026d310846520",
"assets/assets/imagens/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/imagens/perfil_2.png": "11565cf62f08b9240bea6e4f3976ef87",
"assets/assets/imagens/Instagram.png": "53acdc05b7e66f521de8301841f1d930",
"assets/assets/imagens/github.png": "37ff29981d40f08a882e94b94d89e874",
"assets/assets/imagens/google_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/imagens/linkedin.png": "a94551a792d6f3fb958b78e299b6e1dd",
"assets/assets/imagens/capa_phone.png": "138d91ba234899f50c99fec5f5c69289",
"assets/assets/imagens/perfil_1.png": "fccbf8feb297a8300878aa5e63255b9c",
"assets/assets/outros_projetos/TechSocia.webp": "baf7f47e952ecf6f2ca963b0d8606ce4",
"assets/assets/projetosTI/astronomy_picture/Screenshot_2.png": "45351dbb671e2e5e5793b6f33c8f82e9",
"assets/assets/projetosTI/astronomy_picture/Screenshot_3.png": "5bb9abc58f2542f51d6bf0ab97070ea4",
"assets/assets/projetosTI/astronomy_picture/Screenshot_4.png": "fcc34334cb6b393fe9acf7991613dda4",
"assets/assets/projetosTI/astronomy_picture/Screenshot_5.png": "37453bd4c39bad5fc8336df139cf8022",
"assets/assets/projetosTI/astronomy_picture/Screenshot_1.png": "0d7aea0337cfb84c447410ae37a3b715",
"assets/assets/projetosTI/astronomy_picture/capa.png": "68d28a0823ed278472e4f4442e4c9007",
"assets/assets/projetosTI/pje2x_mobile/pje_6.jpg": "36832fa01fcfb5f65d62eb424ef8e8d3",
"assets/assets/projetosTI/pje2x_mobile/pje_3.jpg": "238fcd4ceadd26c9496648e8a7cd80ad",
"assets/assets/projetosTI/pje2x_mobile/pje_1.jpg": "a37a527c71213bc395fc61c2d1198110",
"assets/assets/projetosTI/pje2x_mobile/pje_4.jpg": "5e4d06dc7cd03478ee6d179829239f10",
"assets/assets/projetosTI/pje2x_mobile/pje_2.jpg": "b8b3d667a07a38ea48580fc23b878017",
"assets/assets/projetosTI/pje2x_mobile/pje_7.jpg": "441a21a8d383b22d1b9f7bf6d2190dde",
"assets/assets/projetosTI/pje2x_mobile/miniatura.png": "23822f6971d74d8276e7a012b6d42fb1",
"assets/assets/projetosTI/pje2x_mobile/pje_5.jpg": "63ff68d56a70365578ba6f0de8d6a9f1",
"assets/assets/projetosTI/minesweeper/screenshoot_2.png": "acbd503f838871b778eb8f978debbc40",
"assets/assets/projetosTI/minesweeper/screenshoot_4.png": "f13e9ba4a4b4f7143a2e0e4034186472",
"assets/assets/projetosTI/minesweeper/screenshoot_1.png": "8c41efb95fd7f4b30da0b48d9b2dae1d",
"assets/assets/projetosTI/minesweeper/screenshoot_3.png": "845b98c79369b86913efa89a1e32e4f8",
"assets/assets/projetosTI/minesweeper/screenshoot_5.png": "a2aca9ccee443c410e43474859160291",
"assets/assets/projetosTI/minesweeper/capa.png": "33383ea3b8f53abd3ef9eacd7b29dd07",
"assets/assets/projetosTI/space_virus/space_3.webp": "6fd25284514f920a41ece9c6f6378385",
"assets/assets/projetosTI/space_virus/space_2.webp": "88a4be265954cb960d1c7693fe14581c",
"assets/assets/projetosTI/space_virus/minuatura.png": "98ff585e409f4723f171f70b3f0fc764",
"assets/assets/projetosTI/space_virus/space_1.webp": "d8e63f6da40cd80f79a570768ed25349",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_2.jpg": "add9a9af4d5572932c70c03dacaf3209",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_4.jpg": "edc5a12504c65222265dcf1816f0865b",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_5.jpg": "0005b4d356748b0d5c894de80738d574",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_1.jpg": "d23eac3fd6a14855eac640610d1e9755",
"assets/assets/projetosTI/aVistaOuAPrazo/capa.png": "3ee63cad785b50d790c1348f6a977cba",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_3.jpg": "bfc3f58e8a22b6c9a8e683b261393764",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_2.jpg": "f8d9be600d7d1a3563969c5a44c752ac",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_7.jpg": "858ba6fef8ea177dc660e86c97cc384c",
"assets/assets/projetosTI/banco_de_talentos/miniatura.jpg": "00b8d36f305c2313da790d164e798bca",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_6.jpg": "1dafe1bcbe8fc698e5c2f0467dd5f7cc",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_4.jpg": "89a3ea0de0c86c4a19411f9ff81dc9f1",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_5.jpg": "83340427d31d716cf0a0da64b56cfdfe",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_1.jpg": "11901648083ccacaaed8fd2e411a0ad9",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_3.jpg": "c4093017eded8c1e242b337aff6cee23",
"assets/assets/habilidades/tdd.png": "585f62b6f4ea721b77b8c596f491d793",
"assets/assets/habilidades/CleanArchitecture.jpg": "07b2e4403c83a8b377ad14ab3589044c",
"assets/assets/habilidades/java.png": "b286363fb2900536f7b7425efb9173fd",
"assets/assets/habilidades/flutter.png": "85e5af196c6ef4824f5c76e969194a95",
"assets/assets/habilidades/godot.png": "2910c67f86a4e9a68c55b30f92355172",
"assets/assets/habilidades/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "7a6d152fed610705cea547d5e9e6284b",
"assets/NOTICES": "dbd053f92f2b270252c32d899772fcb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "1eb469cb9d34fefba7391d117c2a0685",
"assets/AssetManifest.json": "f31cdd9cfd535e0b2bf3376f2d5baa9d",
"index.html": "3c8d4e5c605811c1776074e1a3835fc6",
"/": "3c8d4e5c605811c1776074e1a3835fc6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "ef919b19283904105c8871ae946c29a2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "ea18dd7fe230f48e8e5c25d334f68f08",
"manifest.json": "7090bb9a382a3f7b50bbf0fff9eba248"};
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
