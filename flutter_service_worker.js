'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6643edc2b85020ba022ccec34656eda",
"assets/AssetManifest.json": "be5113d21ae63c2d9dfbd28bda864bb5",
"assets/assets/habilidades/CleanArchitecture.jpg": "07b2e4403c83a8b377ad14ab3589044c",
"assets/assets/habilidades/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/habilidades/firebase_icon.png": "44b31b544b9ca3c736788200b4fd120d",
"assets/assets/habilidades/flutter.png": "85e5af196c6ef4824f5c76e969194a95",
"assets/assets/habilidades/godot.png": "2910c67f86a4e9a68c55b30f92355172",
"assets/assets/habilidades/java.png": "b286363fb2900536f7b7425efb9173fd",
"assets/assets/habilidades/tdd.png": "585f62b6f4ea721b77b8c596f491d793",
"assets/assets/imagens/adnroid_icon.png": "073c9b8ee94428e2761aa90e9ec621ff",
"assets/assets/imagens/capa_phone.png": "84b5528a8f1ee6791745e2ed20803acc",
"assets/assets/imagens/flutter_icon.png": "8612016d236304d5741a27a87011f9ee",
"assets/assets/imagens/fundo_header.png": "ba4c6b74deed4422eac026d310846520",
"assets/assets/imagens/github.png": "37ff29981d40f08a882e94b94d89e874",
"assets/assets/imagens/google_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/imagens/head_home.png": "fa6c25a35bd28b12508425c101f85bfd",
"assets/assets/imagens/Instagram.png": "53acdc05b7e66f521de8301841f1d930",
"assets/assets/imagens/ios_icon.png": "e00afdb9b84aeeeb08ca7638faa96a55",
"assets/assets/imagens/linkedin.png": "a94551a792d6f3fb958b78e299b6e1dd",
"assets/assets/imagens/perfil_1.png": "fccbf8feb297a8300878aa5e63255b9c",
"assets/assets/imagens/perfil_2.png": "11565cf62f08b9240bea6e4f3976ef87",
"assets/assets/imagens/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/outros_projetos/TechSocia.webp": "baf7f47e952ecf6f2ca963b0d8606ce4",
"assets/assets/projetosTI/astronomy_picture/capa.png": "fcc6bcc591d9407339a34d0fca6870a1",
"assets/assets/projetosTI/astronomy_picture/Screenshot_1.png": "0d7aea0337cfb84c447410ae37a3b715",
"assets/assets/projetosTI/astronomy_picture/Screenshot_2.png": "45351dbb671e2e5e5793b6f33c8f82e9",
"assets/assets/projetosTI/astronomy_picture/Screenshot_3.png": "5bb9abc58f2542f51d6bf0ab97070ea4",
"assets/assets/projetosTI/astronomy_picture/Screenshot_4.png": "fcc34334cb6b393fe9acf7991613dda4",
"assets/assets/projetosTI/astronomy_picture/Screenshot_5.png": "37453bd4c39bad5fc8336df139cf8022",
"assets/assets/projetosTI/aVistaOuAPrazo/capa.png": "ee9eb499f1f6c2952fd979a79b52082d",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_1.jpg": "d23eac3fd6a14855eac640610d1e9755",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_2.jpg": "add9a9af4d5572932c70c03dacaf3209",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_3.jpg": "bfc3f58e8a22b6c9a8e683b261393764",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_4.jpg": "edc5a12504c65222265dcf1816f0865b",
"assets/assets/projetosTI/aVistaOuAPrazo/Screenshot_5.jpg": "0005b4d356748b0d5c894de80738d574",
"assets/assets/projetosTI/banco_de_talentos/miniatura.jpg": "00b8d36f305c2313da790d164e798bca",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_1.jpg": "11901648083ccacaaed8fd2e411a0ad9",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_2.jpg": "f8d9be600d7d1a3563969c5a44c752ac",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_3.jpg": "c4093017eded8c1e242b337aff6cee23",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_4.jpg": "89a3ea0de0c86c4a19411f9ff81dc9f1",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_5.jpg": "83340427d31d716cf0a0da64b56cfdfe",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_6.jpg": "1dafe1bcbe8fc698e5c2f0467dd5f7cc",
"assets/assets/projetosTI/banco_de_talentos/Screenshot_7.jpg": "858ba6fef8ea177dc660e86c97cc384c",
"assets/assets/projetosTI/bible_notes/capa.png": "cb505a36d9ca6810e9622bb617e3925b",
"assets/assets/projetosTI/minesweeper/capa.png": "ee9adac4333619ec2eb5c71965765817",
"assets/assets/projetosTI/minesweeper/screenshoot_1.png": "8c41efb95fd7f4b30da0b48d9b2dae1d",
"assets/assets/projetosTI/minesweeper/screenshoot_2.png": "acbd503f838871b778eb8f978debbc40",
"assets/assets/projetosTI/minesweeper/screenshoot_3.png": "845b98c79369b86913efa89a1e32e4f8",
"assets/assets/projetosTI/minesweeper/screenshoot_4.png": "f13e9ba4a4b4f7143a2e0e4034186472",
"assets/assets/projetosTI/minesweeper/screenshoot_5.png": "a2aca9ccee443c410e43474859160291",
"assets/assets/projetosTI/pje2x_mobile/capa.png": "53f136aa03ea8e149eac39f3b281201b",
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
"assets/fonts/MaterialIcons-Regular.otf": "0cc7140befca4818704acad2b44553f0",
"assets/NOTICES": "487edc3cb5249e263fb32d1cb0bcf0e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "306fa4042a0ef848352136b05abf09d6",
"favicon.png": "40b53632a628038697d405a0b48d560a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/android-chrome-192x192.png": "8641d5746349e6bdc92181645d413873",
"icons/android-chrome-512x512.png": "6bf2b9f5dbe3764a009fb69389bb291d",
"icons/apple-touch-icon.png": "7b4766ac98f3b84a44f6851a0610011a",
"icons/favicon-16x16.png": "eda794be2fe7f34f2ffd829ecd4a06c7",
"icons/favicon-32x32.png": "8b5cfa207e66b0a208d6d2fef658c550",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "947d3a47b06b675f6320b08eb8a1f830",
"/": "947d3a47b06b675f6320b08eb8a1f830",
"main.dart.js": "ba6c67720bdff90753be779a1f09be7d",
"manifest.json": "0a0b0aea551233a73b1d3fda5db0ff74",
"version.json": "ef919b19283904105c8871ae946c29a2"};
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
