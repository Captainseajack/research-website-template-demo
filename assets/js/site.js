/* Lightweight search/filter. Works entirely in the visitor's browser. */
(function () {
  'use strict';
  document.querySelectorAll('[data-filter-scope]').forEach(function (scope) {
    var input = scope.querySelector('[data-search-input]');
    var cards = scope.querySelectorAll('[data-item]');
    var filters = scope.querySelectorAll('[data-filter]');
    var count = scope.querySelector('[data-count]');
    var empty = scope.querySelector('[data-empty]');
    var activeType = 'all';

    // Library cards live next to the filter bar, while journal cards live inside it.
    var adjacentList = scope.nextElementSibling;
    if (!cards.length && adjacentList && adjacentList.hasAttribute('data-items')) {
      cards = adjacentList.querySelectorAll('[data-item]');
    }
    if (!empty && adjacentList && adjacentList.nextElementSibling && adjacentList.nextElementSibling.hasAttribute('data-empty')) {
      empty = adjacentList.nextElementSibling;
    }

    function refresh() {
      var term = (input ? input.value : '').trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var matchesText = !term || (card.getAttribute('data-search') || '').indexOf(term) !== -1;
        var matchesType = activeType === 'all' || card.getAttribute('data-category') === activeType;
        var show = matchesText && matchesType;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = String(visible);
      if (empty) empty.hidden = visible !== 0;
    }

    if (input) input.addEventListener('input', refresh);
    filters.forEach(function (button) {
      button.addEventListener('click', function () {
        activeType = button.getAttribute('data-filter') || 'all';
        filters.forEach(function (other) {
          var selected = other === button;
          other.classList.toggle('is-active', selected);
          other.setAttribute('aria-pressed', String(selected));
        });
        refresh();
      });
    });
    refresh();
  });
})();
