
/* cached asset-dump98e6a8b281a9cba7430393cd9c2d0c670ee2c0fd: */
var forge = forge || {};
forge.blockCallback = function(block, action, callbackFunc) {
    var obj = {
        id: block.id,
        action: action,
        uri: block.callbackUri + "/" + action,
        requestPath:  window.location.pathname
    };
    return callbackFunc.apply(obj);
};
forge.requestData = function(data) {
    data = data || {};
    data.userId      = forge.user ? forge.user.id : null;
    data.pageId      = forge.page ? forge.page.id : null;
    data.requestPath = window.location.pathname;
    return data;
};
/* cached asset-dump1d25725b92599108d089613a654f17ca9279da4b: */
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var __data_block_id = 3612818;
  var __block_id = "cy7YN";
  if (document.getElementsByClassName("f_" + __block_id).length > 0) {
    var ready = function ready(counter) {
      if (!('__forgePageBlockData' in window) || !(__data_block_id in __forgePageBlockData)) {
        if (counter == 10) {
          throw Error("Giving up waiting for block data");
          return;
        }
        return setTimeout(function () {
          ready(counter + 1);
        }, 250);
      }
      if (typeof __forgePageBlockData[__data_block_id] == 'number') {
        __forgePageBlockData[__data_block_id] = __forgePageBlockData[__forgePageBlockData[__data_block_id]] || {};
      }
      var useCaptcha = __forgePageBlockData[__data_block_id].useCaptcha;
      var objectModelMap = __forgePageBlockData[__data_block_id].objectModelMap;
      var form = __forgePageBlockData[__data_block_id].form;
      var form_id = __forgePageBlockData[__data_block_id].form_id;
      var form_settings = __forgePageBlockData[__data_block_id].form_settings;
      var form_fields = __forgePageBlockData[__data_block_id].form_fields;
      var conversion_meta = __forgePageBlockData[__data_block_id].conversion_meta;
      var button = __forgePageBlockData[__data_block_id].button;
      var centerButtons = __forgePageBlockData[__data_block_id].centerButtons;
      var buttonColumnSpan = __forgePageBlockData[__data_block_id].buttonColumnSpan;
      var prevPageButton = __forgePageBlockData[__data_block_id].prevPageButton;
      var nextPageButton = __forgePageBlockData[__data_block_id].nextPageButton;
      var showLabels = __forgePageBlockData[__data_block_id].showLabels;
      var showPlaceholders = __forgePageBlockData[__data_block_id].showPlaceholders;
      var showPageNumbers = __forgePageBlockData[__data_block_id].showPageNumbers;
      var _block = __forgePageBlockData[__data_block_id]._block;
      var _page = __forgePageBlockData[__data_block_id]._page;
      var _ts = __forgePageBlockData[__data_block_id]._ts;
      var _elements = __forgePageBlockData[__data_block_id]._elements;
      var block = {
        id: "3612818",
        callbackUri: "/_/b/3612818"
      };
      var call = function call(action, callbackFunc) {
        return forge.blockCallback(block, action, callbackFunc);
      };
      var callback = function callback(action, data) {
        return call(action, function () {
          data = withData(data || {});

          // check if any of the formData is a File or Blob
          var isFile = false;
          for (var key in data) {
            if (!isFile && data[key]) {
              var arr = Array.isArray(data[key]) ? data[key] : [data[key]];
              for (var i = 0; i < arr.length; i++) {
                if (arr[i] === Object(arr[i]) && (arr[i].constructor == File || arr[i].constructor === Blob)) {
                  isFile = true;
                  break;
                }
              }
            }
          }
          if (isFile) {
            var formData = new FormData();
            for (var key in data) {
              if (data[key] && (Array.isArray(data[key]) || data[key] === Object(data[key])) && data[key].constructor !== File && data[key].constructor !== Blob) {
                for (var idx in data[key]) {
                  formData.append(key + '[' + idx + ']', data[key][idx]);
                }
              } else {
                formData.append(key, data[key]);
              }
            }
            return axios.post(this.uri, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Lazy-Load': 'off'
              }
            });
          } else {
            return axios.post(this.uri, data, {
              headers: {
                'X-Lazy-Load': 'off'
              }
            });
          }
        });
      };
      var withData = function withData(data) {
        return forge.requestData(data);
      };

      /**
       * This script relies on the BladeScript functionality which is scoped automatically (providing form_id, form_fields and optionally conversion_meta)
       */

      //window.forgeForms = window.forgeForms || {}
      document.addEventListener("alpine:initializing", function () {
        var form = function form() {
          return {
            formInitilized: new Date().getTime(),
            timeoutCounter: 0,
            autocompleteTimeoutCounter: 0,
            input: form_fields,
            successMessage: "",
            successRedirect: "",
            errorMessage: "",
            sending: false,
            recaptchaWidgetId: null,
            currentPage: 1,
            numberOfPages: _typeof(form_settings) === 'object' && form_settings && 'pages' in form_settings ? form_settings.pages : 1,
            init: function init() {
              var _this = this;
              this.$nextTick(function () {
                setTimeout(function () {
                  if (_this.$refs.captchaButton) {
                    if (!_this.recaptchaScriptExists()) {
                      _this.loadRecaptcha();
                    }
                    _this.initRecaptcha();
                  }
                }, 3000);
              });
            },
            prevPage: function prevPage() {
              this.currentPage--;
              if (typeof gtag !== "undefined") {
                gtag("event", "form_prev_page", {
                  'page': this.currentPage,
                  'form': form_id
                });
              }
            },
            nextPage: function nextPage() {
              this.currentPage++;
              if (typeof gtag !== "undefined") {
                gtag("event", "form_next_page", {
                  'page': this.currentPage,
                  'form': form_id
                });
              }
            },
            recaptchaScriptExists: function recaptchaScriptExists() {
              var url = "https://www.google.com/recaptcha/api.js?render=explicit";
              var scripts = document.getElementsByTagName("script");
              for (var i = scripts.length; i--;) {
                if (scripts[i].src == url) {
                  return true;
                }
              }
              return false;
            },
            getNextSibling: function getNextSibling(elem, selector) {
              // Get the next sibling element
              try {
                var sibling = elem.nextElementSibling;
                if (!sibling) return;
                // If there's no selector, return the first sibling
                if (!selector) return sibling;
                // If the sibling matches our selector, use it
                // If not, jump to the next sibling and continue the loop
                while (sibling) {
                  if (sibling.matches(selector)) return sibling;
                  sibling = sibling.nextElementSibling;
                }
                return sibling;
              } catch (error) {}
            },
            loadRecaptcha: function loadRecaptcha() {
              // Only init recaptcha if we have a recaptcha button ref
              if (!this.$refs.captchaButton) {
                return;
              }
              var recaptchaScript = document.createElement("script");
              recaptchaScript.async = true;
              recaptchaScript.type = "text/javascript";
              recaptchaScript.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=explicit");
              document.head.appendChild(recaptchaScript);
            },
            initRecaptcha: function initRecaptcha() {
              var _this2 = this;
              // Only init recaptcha if we have a recaptcha button ref
              if (!this.$refs.captchaButton) {
                return;
              }
              this.timeoutCounter++;
              if (this.timeoutCounter === 120) {
                console.log("Giving up on recaptcha");
                return;
              }
              var submitBtn = this.$refs.captchaButton;
              try {
                setTimeout(function () {
                  if (typeof grecaptcha === "undefined" || typeof grecaptcha.render === "undefined") {
                    _this2.initRecaptcha();
                  } else {
                    var _this2$$refs$captchaB;
                    _this2.recaptchaWidgetId = grecaptcha.render(submitBtn.getAttribute("id"), {
                      sitekey: (_this2$$refs$captchaB = _this2.$refs.captchaButton.dataset.sitekey) !== null && _this2$$refs$captchaB !== void 0 ? _this2$$refs$captchaB : "",
                      badge: "bottomleft",
                      size: "invisible",
                      callback: _this2.recaptchaPassed.bind(_this2)
                    });
                  }
                }, 500);
                var checkForBadge = setInterval(function () {
                  var badge = document.querySelector(".grecaptcha-badge");
                  if (badge) {
                    document.body.append(badge);
                    clearInterval(checkForBadge);
                  }
                }, 50);
              } catch (error) {}
            },
            usingRecaptcha: function usingRecaptcha() {
              return this.$refs.captchaButton || typeof this.input["g-recaptcha-response"] !== "undefined";
            },
            recaptchaPassed: function recaptchaPassed(code) {
              this.input["g-recaptcha-response"] = code;
              grecaptcha.reset(this.recaptchaWidgetId);
              this.submit();
            },
            submit: function submit(cb, skip) {
              var _this3 = this;
              // Manually update the inputs from the form itself in case the user used auto-fill and
              // the browser didn't behave correctly or something.
              if (!skip) {
                var inputs = document.querySelectorAll("[x-data='".concat(form_id, "'] [x-model]"));
                var foundAutofill = false;
                for (var i = 0; i < inputs.length; i++) {
                  // Wrap this in a try/catch because non webkit browsers will log errors on this pseudo element
                  try {
                    if (inputs[i].matches(':-webkit-autofill')) {
                      inputs[i].dispatchEvent(new Event("input"));
                      foundAutofill = true;
                    }
                  } catch (error) {}
                }
                if (foundAutofill) {
                  // Wait a beat to let alpine catch the change events
                  setTimeout(function () {
                    _this3.submit(cb, true);
                  }, 100);
                  return false;
                }
              }

              // If captcha is required (ref exists) and didn't pass
              if (this.usingRecaptcha() && !this.input["g-recaptcha-response"]) {
                // get outta here
                console.log('Recaptcha required. Double check you have both a x-ref="captchaButton" and a field named "g-recaptcha-response" in your PHP.');
                alert("Oops, it looks like the form isn't quite ready yet. Please wait a few seconds and try again.");
                cb && typeof cb === "function" && cb(false);
                return false;
              }

              // Update form state
              this.sending = true;
              this.input.form_submitted_in = new Date().getTime() - this.formInitilized;
              // Submit the submit callback
              callback("submit", this.input).then(function (res) {
                try {
                  var node = document.getElementById(form_id);
                  if (node && 'scrollIntoView' in node) {
                    node.scrollIntoView({
                      block: "center",
                      behavior: "smooth"
                    });
                  }

                  // If we don't get a success message back, something went from (even if it's a 200 code)
                  if (!res.data || !res.data.message && !res.data.redirect) {
                    // Show error and reset form
                    _this3.successMessage = null;
                    _this3.errorMessage = "An unknown error occurred. Please use another method to get in touch and report this issue.";
                    _this3.sending = false;
                    cb && typeof cb === "function" && cb(false);
                    return; // get out of here
                  }

                  // SUCCESS
                  _this3.recordConversion();
                  if (res.data.redirect) {
                    // wait a second to let the conversion fire
                    setTimeout(function () {
                      window.location.href = res.data.redirect;
                    }, 1000);
                  } else {
                    _this3.successMessage = res.data.message;
                  }

                  // Reset form state
                  _this3.errorMessage = null;
                  _this3.sending = false;
                  cb && typeof cb === "function" && cb(true);
                } catch (e) {
                  console.log(e);
                }
              })["catch"](function (_ref) {
                var response = _ref.response;
                var node = document.getElementById(form_id);
                if (node && 'scrollIntoView' in node) {
                  node.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                  });
                }

                // Reset form fields and error message
                var message = "";
                var invalids = _this3.$el.getElementsByClassName("is-invalid");
                var _iterator = _createForOfIteratorHelper(invalids),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var element = _step.value;
                    element.classList.remove("is-invalid");
                  }

                  // If errors weren't sent, something else went wrong but we want to give some feedback
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (!response.data || !response.data.errors) {
                  message = "An unknown error occurred. Please use another method to get in touch and report this issue.";
                  // We have errors
                } else {
                  // If a string
                  if (typeof response.data.errors === "string") {
                    // Single error (likely not field related) set message to error
                    message = response.data.errors;
                    // If it's an array
                  } else {
                    // Append each to the message
                    for (var _i = 0, _Object$entries = Object.entries(response.data.errors); _i < _Object$entries.length; _i++) {
                      var _this3$getNextSibling;
                      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                        field = _Object$entries$_i[0],
                        msg = _Object$entries$_i[1];
                      var input = _this3.$el.querySelector(".input\\:" + field);
                      var feedback = (_this3$getNextSibling = _this3.getNextSibling(input, ".invalid-feedback")) !== null && _this3$getNextSibling !== void 0 ? _this3$getNextSibling : null;

                      // If we have a feedback div specifically for this input
                      if (input && feedback) {
                        // Send message there
                        feedback.innerHTML = msg;
                      } else {
                        var m = Array.isArray(msg) ? msg.join("<br>") : msg;
                        //  Otherwise send to the primary error message area
                        message += message !== "" ? "<br>" + m : m;
                      }
                      if (input) {
                        // Also mark field invalid
                        input.classList.add("is-invalid");
                      }
                    }
                  }
                }
                // Reset form state
                _this3.successMessage = null;
                _this3.currentPage = 1;
                _this3.errorMessage = message;
                _this3.sending = false;
                cb && typeof cb === "function" && cb(false);
              });
            },
            recordConversion: function recordConversion() {
              if ('disableConversions' in window) {
                return;
              }
              var cm = typeof conversion_meta !== "undefined" ? conversion_meta : false;
              var eventAction = cm && cm.action ? cm.action : "submit";
              var eventCategory = cm && cm.category ? cm.category : "form";
              var eventLabel = cm && cm.label ? cm.label : location.pathname;

              // Analytics is configured
              if (typeof gtag !== "undefined") {
                var eventDetails = {
                  event_category: eventCategory,
                  event_label: eventLabel
                };
                // Send event
                gtag("event", eventAction, eventDetails);
                console.log("Conversion event sent to Google Tag Manager", {
                  eventAction: eventAction,
                  eventDetails: eventDetails
                });
              }
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'event': 'generate_lead',
                'form_submission': eventLabel
              });
            }
          };
        };
        Alpine.data(form_id, form);
        // this is for backwards compatibility
        // and doesn't work with multiple forms
        // per page.
        Alpine.data("mosaicForm", form);
      });
    };
    ready(0);
  }
})();

/* cached asset-dump1d95126557b83cecb07d9add4f988f736f0c7387: */
window.stopVideosOnClose = function(id) {
    var el = document.querySelector("[data-modal-id='" + id + "']");
    var iframes = el.querySelectorAll("iframe")
    for(var idx = 0; idx < iframes.length; idx++) {
        // youtube
        iframes[idx].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        // vimeo
        iframes[idx].contentWindow.postMessage('{"method":"pause"}', '*');
    }
};

/* Because iframes will not autoplay videos anymore by default,
we need to replace the iframe with a new one with the autoplay parameter. Since
this is only happening within a trusted event (ie, the user clicked something),
it will actually autoplay. */
window.startVideosOnOpen = function(id) {
    var el = document.querySelector("[data-modal-id='" + id + "']");
    var iframes = el.querySelectorAll("iframe")
    for(var idx = 0; idx < iframes.length; idx++) {
        const iframe = iframes[idx]
        if (!iframe.src && iframe.dataset.src) {
            iframe.src = iframe.dataset.src
        }
        // make sure the frame source is https
        iframe.src = iframe.src.replace("http:", "https:")
        // add a timestamp to the end of the src to have it refresh
        iframe.src = iframe.src + (iframe.src.indexOf("?") > -1 ? "&" : "?") + "t=" + new Date().getTime()
    }
};
/* cached asset-dump338d8109f685b5cec8db5cf62fbe794955ee4fe4: */
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var __data_block_id = 3602251;
  var __block_id = "cy4K1";
  if (document.getElementsByClassName("f_" + __block_id).length > 0) {
    var ready = function ready(counter) {
      if (!('__forgePageBlockData' in window) || !(__data_block_id in __forgePageBlockData)) {
        if (counter == 10) {
          throw Error("Giving up waiting for block data");
          return;
        }
        return setTimeout(function () {
          ready(counter + 1);
        }, 250);
      }
      if (typeof __forgePageBlockData[__data_block_id] == 'number') {
        __forgePageBlockData[__data_block_id] = __forgePageBlockData[__forgePageBlockData[__data_block_id]] || {};
      }
      var useCaptcha = __forgePageBlockData[__data_block_id].useCaptcha;
      var objectModelMap = __forgePageBlockData[__data_block_id].objectModelMap;
      var form = __forgePageBlockData[__data_block_id].form;
      var form_id = __forgePageBlockData[__data_block_id].form_id;
      var form_settings = __forgePageBlockData[__data_block_id].form_settings;
      var form_fields = __forgePageBlockData[__data_block_id].form_fields;
      var conversion_meta = __forgePageBlockData[__data_block_id].conversion_meta;
      var button = __forgePageBlockData[__data_block_id].button;
      var centerButtons = __forgePageBlockData[__data_block_id].centerButtons;
      var buttonColumnSpan = __forgePageBlockData[__data_block_id].buttonColumnSpan;
      var prevPageButton = __forgePageBlockData[__data_block_id].prevPageButton;
      var nextPageButton = __forgePageBlockData[__data_block_id].nextPageButton;
      var showLabels = __forgePageBlockData[__data_block_id].showLabels;
      var showPlaceholders = __forgePageBlockData[__data_block_id].showPlaceholders;
      var showPageNumbers = __forgePageBlockData[__data_block_id].showPageNumbers;
      var _block = __forgePageBlockData[__data_block_id]._block;
      var _page = __forgePageBlockData[__data_block_id]._page;
      var _ts = __forgePageBlockData[__data_block_id]._ts;
      var _elements = __forgePageBlockData[__data_block_id]._elements;
      var block = {
        id: "3602251",
        callbackUri: "/_/b/3602251"
      };
      var call = function call(action, callbackFunc) {
        return forge.blockCallback(block, action, callbackFunc);
      };
      var callback = function callback(action, data) {
        return call(action, function () {
          data = withData(data || {});

          // check if any of the formData is a File or Blob
          var isFile = false;
          for (var key in data) {
            if (!isFile && data[key]) {
              var arr = Array.isArray(data[key]) ? data[key] : [data[key]];
              for (var i = 0; i < arr.length; i++) {
                if (arr[i] === Object(arr[i]) && (arr[i].constructor == File || arr[i].constructor === Blob)) {
                  isFile = true;
                  break;
                }
              }
            }
          }
          if (isFile) {
            var formData = new FormData();
            for (var key in data) {
              if (data[key] && (Array.isArray(data[key]) || data[key] === Object(data[key])) && data[key].constructor !== File && data[key].constructor !== Blob) {
                for (var idx in data[key]) {
                  formData.append(key + '[' + idx + ']', data[key][idx]);
                }
              } else {
                formData.append(key, data[key]);
              }
            }
            return axios.post(this.uri, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Lazy-Load': 'off'
              }
            });
          } else {
            return axios.post(this.uri, data, {
              headers: {
                'X-Lazy-Load': 'off'
              }
            });
          }
        });
      };
      var withData = function withData(data) {
        return forge.requestData(data);
      };

      /**
       * This script relies on the BladeScript functionality which is scoped automatically (providing form_id, form_fields and optionally conversion_meta)
       */

      //window.forgeForms = window.forgeForms || {}
      document.addEventListener("alpine:initializing", function () {
        var form = function form() {
          return {
            formInitilized: new Date().getTime(),
            timeoutCounter: 0,
            autocompleteTimeoutCounter: 0,
            input: form_fields,
            successMessage: "",
            successRedirect: "",
            errorMessage: "",
            sending: false,
            recaptchaWidgetId: null,
            currentPage: 1,
            numberOfPages: _typeof(form_settings) === 'object' && form_settings && 'pages' in form_settings ? form_settings.pages : 1,
            init: function init() {
              var _this = this;
              this.$nextTick(function () {
                setTimeout(function () {
                  if (_this.$refs.captchaButton) {
                    if (!_this.recaptchaScriptExists()) {
                      _this.loadRecaptcha();
                    }
                    _this.initRecaptcha();
                  }
                }, 3000);
              });
            },
            prevPage: function prevPage() {
              this.currentPage--;
              if (typeof gtag !== "undefined") {
                gtag("event", "form_prev_page", {
                  'page': this.currentPage,
                  'form': form_id
                });
              }
            },
            nextPage: function nextPage() {
              this.currentPage++;
              if (typeof gtag !== "undefined") {
                gtag("event", "form_next_page", {
                  'page': this.currentPage,
                  'form': form_id
                });
              }
            },
            recaptchaScriptExists: function recaptchaScriptExists() {
              var url = "https://www.google.com/recaptcha/api.js?render=explicit";
              var scripts = document.getElementsByTagName("script");
              for (var i = scripts.length; i--;) {
                if (scripts[i].src == url) {
                  return true;
                }
              }
              return false;
            },
            getNextSibling: function getNextSibling(elem, selector) {
              // Get the next sibling element
              try {
                var sibling = elem.nextElementSibling;
                if (!sibling) return;
                // If there's no selector, return the first sibling
                if (!selector) return sibling;
                // If the sibling matches our selector, use it
                // If not, jump to the next sibling and continue the loop
                while (sibling) {
                  if (sibling.matches(selector)) return sibling;
                  sibling = sibling.nextElementSibling;
                }
                return sibling;
              } catch (error) {}
            },
            loadRecaptcha: function loadRecaptcha() {
              // Only init recaptcha if we have a recaptcha button ref
              if (!this.$refs.captchaButton) {
                return;
              }
              var recaptchaScript = document.createElement("script");
              recaptchaScript.async = true;
              recaptchaScript.type = "text/javascript";
              recaptchaScript.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=explicit");
              document.head.appendChild(recaptchaScript);
            },
            initRecaptcha: function initRecaptcha() {
              var _this2 = this;
              // Only init recaptcha if we have a recaptcha button ref
              if (!this.$refs.captchaButton) {
                return;
              }
              this.timeoutCounter++;
              if (this.timeoutCounter === 120) {
                console.log("Giving up on recaptcha");
                return;
              }
              var submitBtn = this.$refs.captchaButton;
              try {
                setTimeout(function () {
                  if (typeof grecaptcha === "undefined" || typeof grecaptcha.render === "undefined") {
                    _this2.initRecaptcha();
                  } else {
                    var _this2$$refs$captchaB;
                    _this2.recaptchaWidgetId = grecaptcha.render(submitBtn.getAttribute("id"), {
                      sitekey: (_this2$$refs$captchaB = _this2.$refs.captchaButton.dataset.sitekey) !== null && _this2$$refs$captchaB !== void 0 ? _this2$$refs$captchaB : "",
                      badge: "bottomleft",
                      size: "invisible",
                      callback: _this2.recaptchaPassed.bind(_this2)
                    });
                  }
                }, 500);
                var checkForBadge = setInterval(function () {
                  var badge = document.querySelector(".grecaptcha-badge");
                  if (badge) {
                    document.body.append(badge);
                    clearInterval(checkForBadge);
                  }
                }, 50);
              } catch (error) {}
            },
            usingRecaptcha: function usingRecaptcha() {
              return this.$refs.captchaButton || typeof this.input["g-recaptcha-response"] !== "undefined";
            },
            recaptchaPassed: function recaptchaPassed(code) {
              this.input["g-recaptcha-response"] = code;
              grecaptcha.reset(this.recaptchaWidgetId);
              this.submit();
            },
            submit: function submit(cb, skip) {
              var _this3 = this;
              // Manually update the inputs from the form itself in case the user used auto-fill and
              // the browser didn't behave correctly or something.
              if (!skip) {
                var inputs = document.querySelectorAll("[x-data='".concat(form_id, "'] [x-model]"));
                var foundAutofill = false;
                for (var i = 0; i < inputs.length; i++) {
                  // Wrap this in a try/catch because non webkit browsers will log errors on this pseudo element
                  try {
                    if (inputs[i].matches(':-webkit-autofill')) {
                      inputs[i].dispatchEvent(new Event("input"));
                      foundAutofill = true;
                    }
                  } catch (error) {}
                }
                if (foundAutofill) {
                  // Wait a beat to let alpine catch the change events
                  setTimeout(function () {
                    _this3.submit(cb, true);
                  }, 100);
                  return false;
                }
              }

              // If captcha is required (ref exists) and didn't pass
              if (this.usingRecaptcha() && !this.input["g-recaptcha-response"]) {
                // get outta here
                console.log('Recaptcha required. Double check you have both a x-ref="captchaButton" and a field named "g-recaptcha-response" in your PHP.');
                alert("Oops, it looks like the form isn't quite ready yet. Please wait a few seconds and try again.");
                cb && typeof cb === "function" && cb(false);
                return false;
              }

              // Update form state
              this.sending = true;
              this.input.form_submitted_in = new Date().getTime() - this.formInitilized;
              // Submit the submit callback
              callback("submit", this.input).then(function (res) {
                try {
                  var node = document.getElementById(form_id);
                  if (node && 'scrollIntoView' in node) {
                    node.scrollIntoView({
                      block: "center",
                      behavior: "smooth"
                    });
                  }

                  // If we don't get a success message back, something went from (even if it's a 200 code)
                  if (!res.data || !res.data.message && !res.data.redirect) {
                    // Show error and reset form
                    _this3.successMessage = null;
                    _this3.errorMessage = "An unknown error occurred. Please use another method to get in touch and report this issue.";
                    _this3.sending = false;
                    cb && typeof cb === "function" && cb(false);
                    return; // get out of here
                  }

                  // SUCCESS
                  _this3.recordConversion();
                  if (res.data.redirect) {
                    // wait a second to let the conversion fire
                    setTimeout(function () {
                      window.location.href = res.data.redirect;
                    }, 1000);
                  } else {
                    _this3.successMessage = res.data.message;
                  }

                  // Reset form state
                  _this3.errorMessage = null;
                  _this3.sending = false;
                  cb && typeof cb === "function" && cb(true);
                } catch (e) {
                  console.log(e);
                }
              })["catch"](function (_ref) {
                var response = _ref.response;
                var node = document.getElementById(form_id);
                if (node && 'scrollIntoView' in node) {
                  node.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                  });
                }

                // Reset form fields and error message
                var message = "";
                var invalids = _this3.$el.getElementsByClassName("is-invalid");
                var _iterator = _createForOfIteratorHelper(invalids),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var element = _step.value;
                    element.classList.remove("is-invalid");
                  }

                  // If errors weren't sent, something else went wrong but we want to give some feedback
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (!response.data || !response.data.errors) {
                  message = "An unknown error occurred. Please use another method to get in touch and report this issue.";
                  // We have errors
                } else {
                  // If a string
                  if (typeof response.data.errors === "string") {
                    // Single error (likely not field related) set message to error
                    message = response.data.errors;
                    // If it's an array
                  } else {
                    // Append each to the message
                    for (var _i = 0, _Object$entries = Object.entries(response.data.errors); _i < _Object$entries.length; _i++) {
                      var _this3$getNextSibling;
                      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                        field = _Object$entries$_i[0],
                        msg = _Object$entries$_i[1];
                      var input = _this3.$el.querySelector(".input\\:" + field);
                      var feedback = (_this3$getNextSibling = _this3.getNextSibling(input, ".invalid-feedback")) !== null && _this3$getNextSibling !== void 0 ? _this3$getNextSibling : null;

                      // If we have a feedback div specifically for this input
                      if (input && feedback) {
                        // Send message there
                        feedback.innerHTML = msg;
                      } else {
                        var m = Array.isArray(msg) ? msg.join("<br>") : msg;
                        //  Otherwise send to the primary error message area
                        message += message !== "" ? "<br>" + m : m;
                      }
                      if (input) {
                        // Also mark field invalid
                        input.classList.add("is-invalid");
                      }
                    }
                  }
                }
                // Reset form state
                _this3.successMessage = null;
                _this3.currentPage = 1;
                _this3.errorMessage = message;
                _this3.sending = false;
                cb && typeof cb === "function" && cb(false);
              });
            },
            recordConversion: function recordConversion() {
              if ('disableConversions' in window) {
                return;
              }
              var cm = typeof conversion_meta !== "undefined" ? conversion_meta : false;
              var eventAction = cm && cm.action ? cm.action : "submit";
              var eventCategory = cm && cm.category ? cm.category : "form";
              var eventLabel = cm && cm.label ? cm.label : location.pathname;

              // Analytics is configured
              if (typeof gtag !== "undefined") {
                var eventDetails = {
                  event_category: eventCategory,
                  event_label: eventLabel
                };
                // Send event
                gtag("event", eventAction, eventDetails);
                console.log("Conversion event sent to Google Tag Manager", {
                  eventAction: eventAction,
                  eventDetails: eventDetails
                });
              }
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'event': 'generate_lead',
                'form_submission': eventLabel
              });
            }
          };
        };
        Alpine.data(form_id, form);
        // this is for backwards compatibility
        // and doesn't work with multiple forms
        // per page.
        Alpine.data("mosaicForm", form);
      });
    };
    ready(0);
  }
})();

/* cached asset-dumpf7f20bd84d8f379aa667143753a4ed17d1a9c1ab: */
"use strict";

(function () {
  var __data_block_id = 2752202;
  var __block_id = "csShs";
  if (document.getElementsByClassName("f_" + __block_id).length > 0) {
    var ready = function ready(counter) {
      if (!('__forgePageBlockData' in window) || !(__data_block_id in __forgePageBlockData)) {
        if (counter == 10) {
          throw Error("Giving up waiting for block data");
          return;
        }
        return setTimeout(function () {
          ready(counter + 1);
        }, 250);
      }
      if (typeof __forgePageBlockData[__data_block_id] == 'number') {
        __forgePageBlockData[__data_block_id] = __forgePageBlockData[__forgePageBlockData[__data_block_id]] || {};
      }
      var id = __forgePageBlockData[__data_block_id].id;
      var config = __forgePageBlockData[__data_block_id].config;
      var showLabels = __forgePageBlockData[__data_block_id].showLabels;
      var labels = __forgePageBlockData[__data_block_id].labels;
      var labelPosition = __forgePageBlockData[__data_block_id].labelPosition;
      var arrowsColor = __forgePageBlockData[__data_block_id].arrowsColor;
      var arrowsSize = __forgePageBlockData[__data_block_id].arrowsSize;
      var dotsColor = __forgePageBlockData[__data_block_id].dotsColor;
      var arrowsPosition = __forgePageBlockData[__data_block_id].arrowsPosition;
      var dotsPosition = __forgePageBlockData[__data_block_id].dotsPosition;
      var wrapTilesInSliderMarkup = __forgePageBlockData[__data_block_id].wrapTilesInSliderMarkup;
      var _block = __forgePageBlockData[__data_block_id]._block;
      var _page = __forgePageBlockData[__data_block_id]._page;
      var _ts = __forgePageBlockData[__data_block_id]._ts;
      var _elements = __forgePageBlockData[__data_block_id]._elements;
      var block = {
        id: "2752202",
        callbackUri: "/_/b/2752202"
      };
      var call = function call(action, callbackFunc) {
        return forge.blockCallback(block, action, callbackFunc);
      };
      var callback = function callback(action, data) {
        return call(action, function () {
          data = withData(data || {});

          // check if any of the formData is a File or Blob
          var isFile = false;
          for (var key in data) {
            if (!isFile && data[key]) {
              var arr = Array.isArray(data[key]) ? data[key] : [data[key]];
              for (var i = 0; i < arr.length; i++) {
                if (arr[i] === Object(arr[i]) && (arr[i].constructor == File || arr[i].constructor === Blob)) {
                  isFile = true;
                  break;
                }
              }
            }
          }
          if (isFile) {
            var formData = new FormData();
            for (var key in data) {
              if (data[key] && (Array.isArray(data[key]) || data[key] === Object(data[key])) && data[key].constructor !== File && data[key].constructor !== Blob) {
                for (var idx in data[key]) {
                  formData.append(key + '[' + idx + ']', data[key][idx]);
                }
              } else {
                formData.append(key, data[key]);
              }
            }
            return axios.post(this.uri, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Lazy-Load': 'off'
              }
            });
          } else {
            return axios.post(this.uri, data, {
              headers: {
                'X-Lazy-Load': 'off'
              }
            });
          }
        });
      };
      var withData = function withData(data) {
        return forge.requestData(data);
      };
      if (config.pagination === true) {
        config.pagination = {
          el: ".swiper-".concat(id, ".swiper-pagination"),
          clickable: true,
          clickableClass: 'cursor-pointer'
        };
      }
      if (config.navigation === true) {
        config.navigation = {
          nextEl: ".swiper-".concat(id, ".swiper-button-next"),
          prevEl: ".swiper-".concat(id, ".swiper-button-prev")
        };
      }
      var swiper = new Swiper("#swiper-".concat(id), config);
      window["go".concat(id)] = function (index) {
        swiper.slideTo(index);
      };
      window["updateHeight".concat(id)] = function (duration) {
        swiper.updateAutoHeight(duration);
      };
      var labelClasses = document.querySelector("[data-slider-id=\"".concat(id, "\"][data-label]"));
      labelClasses = labelClasses ? labelClasses.classList : null;
      var activeLabelClasses = document.querySelector("[data-slider-id=\"".concat(id, "\"][data-active-label]"));
      activeLabelClasses = activeLabelClasses ? activeLabelClasses.classList : null;
      swiper.on('activeIndexChange', function () {
        var _this = this;
        var labels = document.querySelectorAll("[data-slider-id=\"".concat(id, "\"][data-slide-index]"));
        labels.forEach(function (label) {
          label.classList = label.dataset.slideIndex.split(",").includes(String(_this.activeIndex)) ? activeLabelClasses : labelClasses;
        });
      });
    };
    ready(0);
  }
})();
