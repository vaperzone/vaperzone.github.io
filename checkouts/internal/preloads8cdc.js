
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.es.fc65ae2f91aebbecd71b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.baseline.es.97c8e087e77dabf138b7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9080.baseline.es.f8ab0715d06027f1dc36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5816.baseline.es.710b451159d9c7b926ef.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.es.6198d14d054f6cc225e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4100.baseline.es.3fdc34659ba56d12f6ca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6912.baseline.es.0c9514aa1a6b52ab5982.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/794.baseline.es.7e023b47810710eb89ce.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7600.baseline.es.f7c54af76816df3274b2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4127.baseline.es.44069cb8f76bc7cc3ee7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1068.baseline.es.fe11c1fdb080ac7ff21a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/648.baseline.es.3d74313b1a7b4e2acd49.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5455.baseline.es.a9a42ac0bfe40ce89d74.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8024.baseline.es.1d39ec32b65aa8770670.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8217.baseline.es.8de7baaf6606c92a9ef5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.es.becf7aa85ec0e866e45e.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.baseline.es.e1fb046c8f952a6dbbcd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.es.f29a03caa6ec33ffc52a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.es.f2bd16bc5afcfd5ef57f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  