/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/bootstrap-5.3.2-dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./assets/bootstrap-5.3.2-dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/image/icon.svg":
/*!*******************************!*\
  !*** ./assets/image/icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fcab817090e78435061.svg";

/***/ }),

/***/ "./assets/js/handelerror.js":
/*!**********************************!*\
  !*** ./assets/js/handelerror.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleerror: () => (/* binding */ handleerror)
/* harmony export */ });


let errorvalue=false;
function handleerror(error,msg){
   let err=document.getElementById("error")
   if(error || errorvalue){
     if(error){
        err.innerText+=msg
     }
      err.style.display="block"
     }
  else{
        err.innerText=""
        err.style.display="none"
  }
errorvalue=error;
}

/***/ }),

/***/ "./assets/js/operation.js":
/*!********************************!*\
  !*** ./assets/js/operation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deoperation: () => (/* binding */ deoperation)
/* harmony export */ });


// 3- do op
 function deoperation(num1,num2,op){
switch(op){
 case "add":
    return num1+num2;
 case "min":
    return num1-num2;
 case "multiply":
    return num1*num2;
 case "division" :
    return num1/num2;
  default:
    return 0;
}
}

/***/ }),

/***/ "./assets/js/userInput.js":
/*!********************************!*\
  !*** ./assets/js/userInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserInput: () => (/* binding */ getUserInput)
/* harmony export */ });

function getUserInput(){
    // will take user input for numbers and ops
    let Nums =document.getElementsByClassName("Num"); 
    let op=document.getElementById("op");
   return [parseInt(Nums[0].value),parseInt(Nums[1].value),op.value]
}

/***/ }),

/***/ "./assets/js/validationinput.js":
/*!**************************************!*\
  !*** ./assets/js/validationinput.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validInput: () => (/* binding */ validInput)
/* harmony export */ });


 // 2- validation 
function validInput(num){
 return !isNaN(num)
}


/***/ })

/******/ 	});
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./assets/css/style.css");
/* harmony import */ var _bootstrap_5_3_2_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bootstrap-5.3.2-dist/css/bootstrap.css */ "./assets/bootstrap-5.3.2-dist/css/bootstrap.css");
/* harmony import */ var _image_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/icon.svg */ "./assets/image/icon.svg");
/* harmony import */ var _operation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation.js */ "./assets/js/operation.js");
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userInput.js */ "./assets/js/userInput.js");
/* harmony import */ var _handelerror_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handelerror.js */ "./assets/js/handelerror.js");
/* harmony import */ var _validationinput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validationinput.js */ "./assets/js/validationinput.js");




document.getElementById("myImage").src = _image_icon_svg__WEBPACK_IMPORTED_MODULE_2__;







// 5- get result
function setuserOutput(res){
    let result=document.getElementById("result")
        result.innerText="Result: "+res
}
//6- done calaculation
 document.getElementById("cal").addEventListener('click',calculate)
 function calculate(){
   ;(0,_handelerror_js__WEBPACK_IMPORTED_MODULE_5__.handleerror)(false,"")
  let inputs= (0,_userInput_js__WEBPACK_IMPORTED_MODULE_4__.getUserInput)();
  console.log((0,_validationinput_js__WEBPACK_IMPORTED_MODULE_6__.validInput)(inputs[0])&&(0,_validationinput_js__WEBPACK_IMPORTED_MODULE_6__.validInput)(inputs[1]));
  if((0,_validationinput_js__WEBPACK_IMPORTED_MODULE_6__.validInput)(inputs[0])&&(0,_validationinput_js__WEBPACK_IMPORTED_MODULE_6__.validInput)(inputs[1])){
    let res=(0,_operation_js__WEBPACK_IMPORTED_MODULE_3__.deoperation)(inputs[0],inputs[1],inputs[2])
   // console.log(res);
    setuserOutput(res)
  } else{
    for(let i=0 ; i<(inputs.length-1);i++){
      let error= !(0,_validationinput_js__WEBPACK_IMPORTED_MODULE_6__.validInput)(inputs[i])
      ;(0,_handelerror_js__WEBPACK_IMPORTED_MODULE_5__.handleerror)(error,"Invalid Num :"+(i+1)+"")
    }
  }
 }

})();

/******/ })()
;