
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
