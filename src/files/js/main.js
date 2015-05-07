(function(win, doc) {
    'use strict';

    var menuLink = doc.querySelector('#menuLink'),
        menu     = doc.querySelector('#menu'),
        main     = doc.querySelector('#main');

    menuLink.addEventListener('click', function(e) {
        e.preventDefault();

        menu.style.marginLeft = 0;
    }, false);

    main.addEventListener('click', function(e) {
        menu.style.marginLeft = '-185px';
    }, false);
})(window, document);