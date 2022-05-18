"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


const home = (() => {
  const _home = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'home');
  const _homeContent = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'home-content');
  const _wrapper = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'wrapper');

  _home.appendChild(_homeContent);
  _homeContent.appendChild(_wrapper);

  const _textLarge = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'home-text-large');
  _textLarge.textContent = "Welcome to Restaurant. We serve only the finest of pizzas.";
  const _textSmall = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'home-text-small');
  _textSmall.textContent = "We have pizzas for everyone. Come take a look.";
  const _menuButtonDiv = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('div', 'menu-button-container');
  const _menuButton = _utility__WEBPACK_IMPORTED_MODULE_0__.DomManipulation.createElementWithClass('button', 'menu-button');
  _menuButtonDiv.appendChild(_menuButton);
  _menuButton.textContent = "Browse menu";

  _wrapper.appendChild(_textLarge);
  _wrapper.appendChild(_textSmall);
  _wrapper.appendChild(_menuButtonDiv);

  const getHome = () => {
    return _home;
  }

  return {
    getHome,
  }
})();



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomManipulation": () => (/* binding */ DomManipulation)
/* harmony export */ });
class DomManipulation {
  static createElementWithClass(elementName, className) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    return element;
  }

  static wrapElement(element) {
    const wrapper = DomManipulation.createElementWithClass('div', 'wrapper');
    wrapper.appendChild(element);
    return wrapper;
  }

  static createListElement(listItems, listItemClassName, activeIndex) {
    const list = document.createElement('ul');
    listItems.forEach((item, index) => {
      const element = DomManipulation.createElementWithClass('li', listItemClassName);
      element.textContent = item;
      if (activeIndex === index) {
        element.classList.add('active');
      }
      list.appendChild(element);
    });
    return list;
  }

  static removeClassFromElementsArray(elements, className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
  }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDNUM7QUFDQTtBQUNBLGdCQUFnQiw0RUFBc0M7QUFDdEQsdUJBQXVCLDRFQUFzQztBQUM3RCxtQkFBbUIsNEVBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRFQUFzQztBQUMzRDtBQUNBLHFCQUFxQiw0RUFBc0M7QUFDM0Q7QUFDQSx5QkFBeUIsNEVBQXNDO0FBQy9ELHNCQUFzQiw0RUFBc0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbU1hbmlwdWxhdGlvbiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbmNvbnN0IGhvbWUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IF9ob21lID0gRG9tTWFuaXB1bGF0aW9uLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdob21lJyk7XHJcbiAgY29uc3QgX2hvbWVDb250ZW50ID0gRG9tTWFuaXB1bGF0aW9uLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdob21lLWNvbnRlbnQnKTtcclxuICBjb25zdCBfd3JhcHBlciA9IERvbU1hbmlwdWxhdGlvbi5jcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd3JhcHBlcicpO1xyXG5cclxuICBfaG9tZS5hcHBlbmRDaGlsZChfaG9tZUNvbnRlbnQpO1xyXG4gIF9ob21lQ29udGVudC5hcHBlbmRDaGlsZChfd3JhcHBlcik7XHJcblxyXG4gIGNvbnN0IF90ZXh0TGFyZ2UgPSBEb21NYW5pcHVsYXRpb24uY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2hvbWUtdGV4dC1sYXJnZScpO1xyXG4gIF90ZXh0TGFyZ2UudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gUmVzdGF1cmFudC4gV2Ugc2VydmUgb25seSB0aGUgZmluZXN0IG9mIHBpenphcy5cIjtcclxuICBjb25zdCBfdGV4dFNtYWxsID0gRG9tTWFuaXB1bGF0aW9uLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdob21lLXRleHQtc21hbGwnKTtcclxuICBfdGV4dFNtYWxsLnRleHRDb250ZW50ID0gXCJXZSBoYXZlIHBpenphcyBmb3IgZXZlcnlvbmUuIENvbWUgdGFrZSBhIGxvb2suXCI7XHJcbiAgY29uc3QgX21lbnVCdXR0b25EaXYgPSBEb21NYW5pcHVsYXRpb24uY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21lbnUtYnV0dG9uLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IF9tZW51QnV0dG9uID0gRG9tTWFuaXB1bGF0aW9uLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2J1dHRvbicsICdtZW51LWJ1dHRvbicpO1xyXG4gIF9tZW51QnV0dG9uRGl2LmFwcGVuZENoaWxkKF9tZW51QnV0dG9uKTtcclxuICBfbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQnJvd3NlIG1lbnVcIjtcclxuXHJcbiAgX3dyYXBwZXIuYXBwZW5kQ2hpbGQoX3RleHRMYXJnZSk7XHJcbiAgX3dyYXBwZXIuYXBwZW5kQ2hpbGQoX3RleHRTbWFsbCk7XHJcbiAgX3dyYXBwZXIuYXBwZW5kQ2hpbGQoX21lbnVCdXR0b25EaXYpO1xyXG5cclxuICBjb25zdCBnZXRIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIF9ob21lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEhvbWUsXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgaG9tZSB9IiwiY2xhc3MgRG9tTWFuaXB1bGF0aW9uIHtcclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyhlbGVtZW50TmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdyYXBFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBEb21NYW5pcHVsYXRpb24uY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dyYXBwZXInKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVMaXN0RWxlbWVudChsaXN0SXRlbXMsIGxpc3RJdGVtQ2xhc3NOYW1lLCBhY3RpdmVJbmRleCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IERvbU1hbmlwdWxhdGlvbi5jcmVhdGVFbGVtZW50V2l0aENsYXNzKCdsaScsIGxpc3RJdGVtQ2xhc3NOYW1lKTtcclxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRzQXJyYXkoZWxlbWVudHMsIGNsYXNzTmFtZSkge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERvbU1hbmlwdWxhdGlvbiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9