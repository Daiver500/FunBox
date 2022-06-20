/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": function() { return /* binding */ modal; }
/* harmony export */ });
'"use strict';

var modal = function modal() {
  var openModalButton = document.querySelector('.intro__button');
  var headerButtonMobile = document.querySelector('.header__button-mobile');
  var closeModalButton = document.querySelector('.modal__close');
  var modalWindow = document.querySelector('.modal');
  var modalWindowSuccess = document.querySelector('.modal-success');
  var closeModalSuccessButton = document.querySelector('.modal-success__close');
  var body = document.getElementsByTagName('body');
  var submitButton = document.querySelector('.modal__button');
  var modalPhone = document.querySelector('.modal__phone');
  var breakpoint = window.matchMedia('(min-width:1024px)');
  var MAX_CHARS = 16;

  var escPressHandler = function escPressHandler(evt) {
    if (evt.code === 'Escape' && modalWindow) {
      closeModal();
    }

    if (evt.code === 'Escape' && modalWindowSuccess) {
      closeModalSuccess();
    }
  };

  var windowClickHandler = function windowClickHandler(evt) {
    var target = evt.target;

    if (target === modalWindow) {
      closeModal();
    }

    if (target === modalWindowSuccess) {
      closeModalSuccess();
    }
  };

  var openModal = function openModal() {
    modalWindow.classList.add('is-active');
    document.addEventListener('submit', modalSubmit);
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
    modalPhone.addEventListener('keyup', validateCardNumber);
    modalPhone.addEventListener('keydown', validateCardNumber);
    body[0].classList.add('no-scroll');

    if (breakpoint.matches) {
      body[0].style.paddingRight = '17px';
    }
  };

  var closeModal = function closeModal() {
    modalWindow.classList.remove('is-active');
    document.removeEventListener('submit', modalSubmit);
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
    modalPhone.addEventListener('keyup', validateCardNumber);
    modalPhone.addEventListener('keydown', validateCardNumber);
    body[0].classList.remove('no-scroll');
    body[0].style.paddingRight = '0';
  };

  var closeModalSuccess = function closeModalSuccess() {
    modalWindowSuccess.classList.remove('is-active');
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
  };

  var validateCardNumber = function validateCardNumber() {
    if (modalPhone.value.length === MAX_CHARS) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };

  var modalSubmit = function modalSubmit(evt) {
    evt.preventDefault();
    closeModal();
    modalWindowSuccess.classList.add('is-active');
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
  };

  if (openModalButton) {
    openModalButton.addEventListener('click', openModal);
  }

  if (headerButtonMobile) {
    headerButtonMobile.addEventListener('click', openModal);
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  if (closeModalSuccessButton) {
    closeModalSuccessButton.addEventListener('click', closeModalSuccess);
  }
};



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFunction": function() { return /* binding */ initFunction; }
/* harmony export */ });
var initFunction = function initFunction() {
  var catalogCards = document.querySelectorAll('.catalog-card');
  var cardsLinks = document.querySelectorAll('.catalog-card-wrapper__bottom-link');

  var activateCard = function activateCard(evt) {
    var target = evt.target.closest('.catalog-card-wrapper');
    target.classList.toggle('is-active');
  };

  var hoverActiveCard = function hoverActiveCard(evt) {
    var target = evt.target.closest('.catalog-card-wrapper');

    if (target.classList.contains('is-active')) {
      target.classList.add('catalog-card--hover');
    }
  };

  var hoverDisActiveCard = function hoverDisActiveCard(evt) {
    var target = evt.target.closest('.catalog-card-wrapper');
    target.classList.remove('catalog-card--hover');
  };

  catalogCards.forEach(function (card) {
    card.addEventListener('click', activateCard);
    card.addEventListener('click', hoverDisActiveCard);
  });
  catalogCards.forEach(function (card) {
    card.addEventListener('mouseover', hoverDisActiveCard);
  });
  catalogCards.forEach(function (card) {
    card.addEventListener('mouseout', hoverActiveCard);
  });
  cardsLinks.forEach(function (link) {
    link.addEventListener('click', activateCard);
  });
};



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



window.addEventListener('DOMContentLoaded', function () {
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();
  (0,_script__WEBPACK_IMPORTED_MODULE_2__.initFunction)();
});
}();
/******/ })()
;