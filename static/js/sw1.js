
var CACHE_NAME = "my_cache121";
var urlsToCache = [
    '/index.html',
    // './a.js'
];
//这里的self代表ServiceWorkerGlobalScope
self.addEventListener('install', function (event) {
    //这里的waitUtil会在安装成功之前执行一些预装的操作，但是只建议做一些轻量级和非常重要资源的缓存，减少安装失败的概率。安装成功
    //后ServiceWorker状态会从installing变为installed 
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Opendhe : ', cache);
            return cache.addAll(urlsToCache);
        })
    );
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    function (response) {
                        if (!response || response.status !== 200 || !response.headers.get('Content-type').match(/image/)) {
                            return response;
                        }
                        var responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            }).catch(function (a){console.log(a)});

                        return response;
                    }
                ).catch(function(a){
                    console.log(a)
                });
            }).catch(function(a){
                console.log(a)
            })
    );
})