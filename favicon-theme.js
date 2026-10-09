/* Mintlify links the light and dark favicons by OS theme (prefers-color-scheme).
   Follow the site's theme (html.dark) instead. */
(function () {
  function sync() {
    var dark = document.documentElement.classList.contains('dark');
    var links = document.querySelectorAll('link[rel~="icon"]');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var scheme = link.getAttribute('data-ib-scheme');
      if (!scheme) {
        var media = link.getAttribute('media') || '';
        scheme = media.indexOf('dark') !== -1 ? 'dark' : media.indexOf('light') !== -1 ? 'light' : 'any';
        link.setAttribute('data-ib-scheme', scheme);
      }
      if (scheme === 'any') continue;
      var want = (scheme === 'dark') === dark ? 'all' : 'not all';
      if (link.getAttribute('media') !== want) link.setAttribute('media', want);
    }
  }

  sync();
  var observer = new MutationObserver(sync);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  observer.observe(document.head, { childList: true });
})();
