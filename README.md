Webapp-Boilerplate
==================

Simple boilerplate for small webapps.

This includes responsive design via [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/). For extending the CSS in this project you will need to download both of them.
It also uses [Google Webfonts](http://www.google.com/fonts/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/), but you can safely remove these libraries.

There is an [Apple Touch Icon](https://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

To build your app, this boilerplate is configured to use [jQuery 2.0.0](http://jquery.com/), but you may replace it with any other Javascript library (e.g. [Zepto](http://zeptojs.com/)).

For deployment as an offline app a [cache manifest](https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache) and a [Mozilla App Manifest](https://developer.mozilla.org/en-US/docs/Web/Apps/Manifest) has been added.

And there is also some basic support for [The Open Graph Protocol](http://ogp.me/).

So all the cool stuff is here. :)

Setup
-----

1. Replace "`Lander Configurator`" in all files with the name of your app
2. Replace "`Configure your lunar lander`" in all files with the description of your app
3. Replace "`Frank Boës`" with your name
4. Replace "`http://3960.org/lander/`" with your URL
5. Replace `favicon.ico` (48×48px),  `favicon.png` (128×128px) and `apple-touch-icon.png` (144×144px) with your icon
6. Optional: Replace "`en`" with your desired locale
7. Start coding!
8 Activate caching in index.html by commenting line 2 & uncommenting line 3.

Things you may want to do
-------------------------

* Understand [HTTP compression for your webserver](http://en.wikipedia.org/wiki/HTTP_compression)
* Download [Font Awesome](http://fontawesome.io/) locally to `/css/vendor`, replacing it in `index.html` and `manifest.appcache`
* Download [jQuery 2.0.0](http://jquery.com/) locally to `/js/vendor`, replacing it in `index.html` and `manifest.appcache`
* Add some touch gesture support (e.g. via [jQuery.event.swipe](http://stephband.info/jquery.event.swipe/))
* You may also want to take a look at all the new [Javascript APIs](http://alistapart.com/article/environmental-design-with-the-device-api)
* …and [HTML5 local storage](http://diveintohtml5.info/storage.html)
* …and [Websockets](http://www.html5rocks.com/en/tutorials/websockets/basics/)

Webbapp-Boilerplate legal stuff
-------------------------------

Author: [Frank Boës](http://3960.org)

Copyright & license: See LICENSE.txt