(function() {
    var _paq = window._paq = window._paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u = "https://mvplab2.matomo.cloud/";
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', '17']);
        var d = document,
            g = d.createElement('script'),
            s = d.getElementsByTagName('script')[0];
        g.async = true;
        g.src = 'https://cdn.matomo.cloud/mvplab2.matomo.cloud/matomo.js';
        s.parentNode.insertBefore(g, s);
    })();
})();