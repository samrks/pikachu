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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin * {margin: 0;padding: 0;box-sizing: border-box;}\n.skin *::before, .skin *::after {box-sizing: border-box}\n.skin {\n  background-color: #ffdb00;\n  position: relative;\n}\n.nose {\n  position: absolute;\n  left: 50%;\n  top: 130px;\n  margin-left: -14px;\n  border: 14px solid transparent;\n  border-top-color: #000;\n  border-radius: 14px;;\n}\n.nose:hover {\n  animation: wave 500ms infinite linear;\n}\n.eye {\n  width: 64px;\n  height: 64px;\n  border: 2px solid black;\n  background-color: #2e2e2e;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  border-radius: 50%;\n}\n.eye::before {\n  content: \"\";\n  border: 3px solid black;\n  width: 28px;\n  height: 28px;\n  display: block;\n  background-color: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 10px;\n}\n.eye.left {\n  transform: translateX(-120px);\n}\n.eye.right {\n  transform: translateX(120px);\n}\n.mouth {\n  width: 180px;\n  height: 100px;\n  position: absolute;\n  top: 164px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.mouth .up {\n  position: relative;\n  top: 0;\n  z-index: 1;\n}\n.mouth .up .lip {\n  width: 88px;\n  height: 40px;\n  border: 3px solid black;\n  background-color: #ffdb00;\n  position: absolute;\n  top: -10px;\n  box-shadow: 0 -5px 0 #ffdb00;\n}\n.mouth .up .lip.right {\n  right: 0;\n}\n.mouth .up .lip.left {\n  left: 0;\n  border-bottom-left-radius: 82px 40px;\n  border-top: none;\n  border-right: none;\n  border-bottom: 3px solid black;\n  border-left: 3px solid black;\n  transform: rotate(-35deg);\n}\n.mouth .up .lip.right {\n  border-bottom-right-radius: 82px 40px;\n  border-top: none;\n  border-left: none;\n  border-right: 3px solid black;\n  border-bottom: 3px solid black;\n  transform: rotate(35deg);\n}\n.mouth .up .lip.left::before,\n.mouth .up .lip.right::before {\n  content: \"\";\n  width: 88px;\n  height: 2px;\n  background-color: #ffdb00;\n  position: absolute;\n}\n.mouth .up .lip.left::before {\n  top: -1px;\n  left: 0;\n}\n.mouth .up .lip.right::before {\n  top: -1px;\n  left: -3px;\n}\n.mouth .up .lip.left::after,\n.mouth .up .lip.right::after{\n  content: \"\";\n  width: 2px;\n  height: 40px;\n  background-color: #ffdb00;\n  position: absolute;\n}\n.mouth .up .lip.left::after {\n  top: -3px;\n  right: -1px;\n}\n.mouth .up .lip.right::after {\n  top: -3px;\n  left: -1px;\n}\n.mouth .down {\n  height: 170px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n.mouth .down .outside {\n  border: 3px solid black;\n  width: 100%;\n  height: 800px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 102px / 425px;\n  background-color: #a71008;\n  overflow: hidden;\n}\n.mouth .down .outside .inside {\n  background-color: #ff5b5d;\n  width: 140px;\n  height: 130px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n.face {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 84px;\n  height: 84px;\n  border: 3px solid black;\n  background-color: #fe1800;\n  border-radius: 50%;\n  top: 210px;\n  z-index: 1;\n}\n.face.left {\n  margin-left: -170px;\n}\n.face.right {\n  margin-left: 170px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 模块化（导出、导入）
// 面向对象封装
var player = {
  n: 0,
  time: 1000 / 60,
  id: undefined,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n); // css 文本

    player.ui.demo2.innerHTML = _css.default.substr(0, player.n); // 应用 css 效果

    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow ...

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 1000 / 60;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.76aa9b4d.js.map