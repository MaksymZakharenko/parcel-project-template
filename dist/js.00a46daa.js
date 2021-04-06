// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\tablet\\tablet-hero-milk.png":[["tablet-hero-milk.330482b7.png","images/tablet/tablet-hero-milk.png"],"images/tablet/tablet-hero-milk.png"],"./..\\images\\desktop\\desk-hero-milk.png":[["desk-hero-milk.f03e3a95.png","images/desktop/desk-hero-milk.png"],"images/desktop/desk-hero-milk.png"],"./..\\images\\tablet\\t-hero-ellipse.png":[["t-hero-ellipse.e2cb59c8.png","images/tablet/t-hero-ellipse.png"],"images/tablet/t-hero-ellipse.png"],"./..\\images\\desktop\\d-hero-ellipse.png":[["d-hero-ellipse.3ad383e2.png","images/desktop/d-hero-ellipse.png"],"images/desktop/d-hero-ellipse.png"],"./..\\images\\mobile\\m-hero-icecream.png":[["m-hero-icecream.b14f74b8.png","images/mobile/m-hero-icecream.png"],"images/mobile/m-hero-icecream.png"],"./..\\images\\mobile\\m-hero-icecream@2x.png":[["m-hero-icecream@2x.08bfb82a.png","images/mobile/m-hero-icecream@2x.png"],"images/mobile/m-hero-icecream@2x.png"],"./..\\images\\tablet\\tablet-hero-girl.png":[["tablet-hero-girl.212cccf4.png","images/tablet/tablet-hero-girl.png"],"images/tablet/tablet-hero-girl.png"],"./..\\images\\tablet\\t-hero-icecream.png":[["t-hero-icecream.52b0dd08.png","images/tablet/t-hero-icecream.png"],"images/tablet/t-hero-icecream.png"],"./..\\images\\tablet\\tablet-hero-girl@2x.png":[["tablet-hero-girl@2x.d7ff44e5.png","images/tablet/tablet-hero-girl@2x.png"],"images/tablet/tablet-hero-girl@2x.png"],"./..\\images\\tablet\\t-hero-icecream@2x.png":[["t-hero-icecream@2x.c72d6ca4.png","images/tablet/t-hero-icecream@2x.png"],"images/tablet/t-hero-icecream@2x.png"],"./..\\images\\desktop\\desk-hero-girl.png":[["desk-hero-girl.3a111bb9.png","images/desktop/desk-hero-girl.png"],"images/desktop/desk-hero-girl.png"],"./..\\images\\desktop\\d-hero-icecream.png":[["d-hero-icecream.fd07a36e.png","images/desktop/d-hero-icecream.png"],"images/desktop/d-hero-icecream.png"],"./..\\images\\desktop\\desk-hero-girl@2x.png":[["desk-hero-girl@2x.bd55b3f6.png","images/desktop/desk-hero-girl@2x.png"],"images/desktop/desk-hero-girl@2x.png"],"./..\\images\\desktop\\d-hero-icecream@2x.png":[["d-hero-icecream@2x.90f90aa7.png","images/desktop/d-hero-icecream@2x.png"],"images/desktop/d-hero-icecream@2x.png"],"./..\\images\\mobile\\m-prod-icecream.png":[["m-prod-icecream.95df1808.png","images/mobile/m-prod-icecream.png"],"images/mobile/m-prod-icecream.png"],"./..\\images\\mobile\\m-prod-icecream@2x.png":[["m-prod-icecream@2x.975b737f.png","images/mobile/m-prod-icecream@2x.png"],"images/mobile/m-prod-icecream@2x.png"],"./..\\images\\mobile\\m-prod-coffee.png":[["m-prod-coffee.936ec156.png","images/mobile/m-prod-coffee.png"],"images/mobile/m-prod-coffee.png"],"./..\\images\\mobile\\m-prod-coffee@2x.png":[["m-prod-coffee@2x.d3e4c576.png","images/mobile/m-prod-coffee@2x.png"],"images/mobile/m-prod-coffee@2x.png"],"./..\\images\\mobile\\m-prod-shake.png":[["m-prod-shake.455af5b9.png","images/mobile/m-prod-shake.png"],"images/mobile/m-prod-shake.png"],"./..\\images\\mobile\\m-prod-shake@2x.png":[["m-prod-shake@2x.72c59662.png","images/mobile/m-prod-shake@2x.png"],"images/mobile/m-prod-shake@2x.png"],"./..\\images\\mobile\\three-dots.png":[["three-dots.638301ed.png","images/mobile/three-dots.png"],"images/mobile/three-dots.png"],"./..\\images\\tablet\\tablet-prod-icecream.png":[["tablet-prod-icecream.051c71cc.png","images/tablet/tablet-prod-icecream.png"],"images/tablet/tablet-prod-icecream.png"],"./..\\images\\tablet\\tablet-prod-icecram@2x.png":[["tablet-prod-icecram@2x.23e27697.png","images/tablet/tablet-prod-icecram@2x.png"],"images/tablet/tablet-prod-icecram@2x.png"],"./..\\images\\tablet\\tablet-prod-coffee.png":[["tablet-prod-coffee.b3f3dcba.png","images/tablet/tablet-prod-coffee.png"],"images/tablet/tablet-prod-coffee.png"],"./..\\images\\tablet\\tablet-prod-coffe@2x.png":[["tablet-prod-coffe@2x.d637ab5c.png","images/tablet/tablet-prod-coffe@2x.png"],"images/tablet/tablet-prod-coffe@2x.png"],"./..\\images\\tablet\\tablet-prod-shake.png":[["tablet-prod-shake.02d27459.png","images/tablet/tablet-prod-shake.png"],"images/tablet/tablet-prod-shake.png"],"./..\\images\\tablet\\tablet-prod-shake@2x.png":[["tablet-prod-shake@2x.067c1e02.png","images/tablet/tablet-prod-shake@2x.png"],"images/tablet/tablet-prod-shake@2x.png"],"./..\\images\\desktop\\desk-prod-icecream.png":[["desk-prod-icecream.caa3abae.png","images/desktop/desk-prod-icecream.png"],"images/desktop/desk-prod-icecream.png"],"./..\\images\\desktop\\desk-prod-icecream@2x.png":[["desk-prod-icecream@2x.f968f1c6.png","images/desktop/desk-prod-icecream@2x.png"],"images/desktop/desk-prod-icecream@2x.png"],"./..\\images\\desktop\\desk-prod-coffee.png":[["desk-prod-coffee.5f21abb3.png","images/desktop/desk-prod-coffee.png"],"images/desktop/desk-prod-coffee.png"],"./..\\images\\desktop\\desk-prod-shake@2x.png":[["desk-prod-shake@2x.15f8e898.png","images/desktop/desk-prod-shake@2x.png"],"images/desktop/desk-prod-shake@2x.png"],"./..\\images\\desktop\\desk-prod-shake.png":[["desk-prod-shake.d78f39e5.png","images/desktop/desk-prod-shake.png"],"images/desktop/desk-prod-shake.png"],"./..\\images\\desktop\\desk-prod-coffee@2x.png":[["desk-prod-coffee@2x.c9130e86.png","images/desktop/desk-prod-coffee@2x.png"],"images/desktop/desk-prod-coffee@2x.png"],"./..\\images\\mobile\\m-about-bg.png":[["m-about-bg.2cba73dc.png","images/mobile/m-about-bg.png"],"images/mobile/m-about-bg.png"],"./..\\images\\mobile\\m-about-bg@2x.png":[["m-about-bg@2x.2acdb2a4.png","images/mobile/m-about-bg@2x.png"],"images/mobile/m-about-bg@2x.png"],"./..\\images\\desktop\\desk-about-bg.png":[["desk-about-bg.a5edf79b.png","images/desktop/desk-about-bg.png"],"images/desktop/desk-about-bg.png"],"./..\\images\\desktop\\desk-about-bg@2x.png":[["desk-about-bg@2x.f05e686d.png","images/desktop/desk-about-bg@2x.png"],"images/desktop/desk-about-bg@2x.png"],"./..\\images\\tablet\\tablet-about-milk.png":[["tablet-about-milk.3a7ed139.png","images/tablet/tablet-about-milk.png"],"images/tablet/tablet-about-milk.png"],"./..\\images\\tablet\\tablet-about-apple.png":[["tablet-about-apple.2a9811e6.png","images/tablet/tablet-about-apple.png"],"images/tablet/tablet-about-apple.png"],"./..\\images\\tablet\\tablet-about-heart.png":[["tablet-about-heart.d467b596.png","images/tablet/tablet-about-heart.png"],"images/tablet/tablet-about-heart.png"],"./..\\images\\brackets.svg":[["brackets.396d9aac.svg","images/brackets.svg"],"images/brackets.svg"],"./..\\images\\mobile\\three-red-dots.png":[["three-red-dots.be0283e0.png","images/mobile/three-red-dots.png"],"images/mobile/three-red-dots.png"],"./..\\images\\house.svg":[["house.721c8f2b.svg","images/house.svg"],"images/house.svg"],"./..\\images\\desktop\\desk_address_bg.png":[["desk_address_bg.02c74bba.png","images/desktop/desk_address_bg.png"],"images/desktop/desk_address_bg.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../../src/sass/main.scss");
},{"../../src/sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54039" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map