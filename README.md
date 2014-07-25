Webapp-Boilerplate
==================

Simple boilerplate for small webapps.

This includes responsive design via [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/). For extending the CSS in this project you will need to download both of them.
It also uses [Google Webfonts](http://www.google.com/fonts/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/), but you can safely remove these libraries.

There is an [Apple Touch Icon](https://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) & a [special icon for Firefox OS](https://www.mozilla.org/en-US/styleguide/products/firefox-os/icons/).

To build your app, this boilerplate is configured to use [jQuery 2.1.0](http://jquery.com/), but you may replace it with any other Javascript library (e.g. [Zepto](http://zeptojs.com/)).

For deployment as an offline app a [cache manifest](https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache) and a [Mozilla App Manifest](https://developer.mozilla.org/en-US/docs/Web/Apps/Manifest) has been added.

And there is also some basic support for [The Open Graph Protocol](http://ogp.me/).

So all the cool stuff is here. :)

Setup
-----

0. Use `git submodule update --init` for fetching required submodules
1. Replace "`Flashy application name`" in all files with the name of your app.
2. Replace "`Flashy description`" in all files with the description of your app.
3. Replace "`Flashy company`" with your name.
4. Replace "`http://flashy-domain`" with the domain-part your URL.
5. Replace "`/flashy-path/`" with the path-part your URL.
6. Replace `favicon.ico` (32×32px), `firefox-os-icon.png`(60×60px), `apple-touch-icon.png` (152×152px), `favicon.png` (196×196px) and `tile.png` (310×310px) with your icon. You may want to use [IconSpring](https://github.com/fboes/iconspring) for generating all your icons.
7. Optional: Replace `"en"` with your desired locale.
8. Start coding!
9. Activate caching in index.html by commenting line 2 & uncommenting line 3.

Remember: Firefox OS allows only one app per domain.

Extended setup
--------------

If you want to hack a small application with this template:

1. Move `index.html` to `views` folder, copy `.htaccess` from `app` folder to `views` folder.
2. Create logic in `app` folder.
2. Place controller in base directory, e.g. `index.php`. Let it require the logic from `app` folder and HTML template from `views` folder.

If you want to use this template with any kind of MVC framework:

1. Move the whole project to your `public` folder.
2. Move the index.html to your `views` folder.

Updating
--------

Because your app will be cached locally on the device or browser, you will have to at least update the version string in `manifests/manifest.appcache` and `manifests/manifest.webapp`. Just replace `"version": "1.0"` in both files by incrementing this version number in some meaningful way.

You may also want to check the JS stub in `js/main.js` for updating the local cache via Javascript.

Things you may want to do
-------------------------

* Understand [HTTP compression for your webserver](http://en.wikipedia.org/wiki/HTTP_compression).
* Download [Font Awesome](http://fontawesome.io/) locally to `/css/vendor`, replacing it in `index.html` and `manifest.appcache`.
* Download [jQuery 2.1.0](http://jquery.com/) locally to `/js/vendor`, replacing it in `index.html` and `manifest.appcache`.
* Add some touch gesture support (e.g. via [jQuery.event.swipe](http://stephband.info/jquery.event.swipe/)).
* You may also want to take a look at all the new [Javascript APIs](http://alistapart.com/article/environmental-design-with-the-device-api)
* …and [HTML5 local storage](http://diveintohtml5.info/storage.html)
* …and [Websockets](http://www.html5rocks.com/en/tutorials/websockets/basics/).
* Build a [web tile for Windows 8](http://www.buildmypinnedsite.com/).
* Understand the [more complex features of offline-first web apps](http://alistapart.com/article/offline-first).

Version
-------

Version: 1.0 (2014-07-25)

Webbapp-Boilerplate legal stuff
-------------------------------

Author: [Frank Boës](http://3960.org)

Copyright & license: See LICENSE.txt