"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/team/page",{

/***/ "(app-pages-browser)/./src/app/(main)/team/page.tsx":
/*!**************************************!*\
  !*** ./src/app/(main)/team/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/dist/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Teams = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsers = async ()=>{\n            try {\n                const response = await fetch(\"https://randomuser.me/api/?results=5\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setUsers(data.results);\n            } catch (error) {\n                setError(\"Failed to fetch team members\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchUsers();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-gray-500\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-red-500\",\n        children: error\n    }, void 0, false, {\n        fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center p-8 min-h-screen bg-[#FFF455]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl mb-8 text-center\",\n                children: \"Our Team\"\n            }, void 0, false, {\n                fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-2/3 lg:w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                    children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center text-center p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: user.picture.large,\n                                    alt: \"\".concat(user.name.first, \" \").concat(user.name.last),\n                                    className: \"rounded-full mb-4 w-32 h-32 md:w-48 md:h-48\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl md:text-2xl font-bold\",\n                                    children: [\n                                        user.name.first,\n                                        \" \",\n                                        user.name.last\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-500\",\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-500\",\n                                    children: user.phone\n                                }, void 0, false, {\n                                    fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Kuliah/Purwadhika/github/company/src/app/(main)/team/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Teams, \"vvG5G9m+JVa2SSWAm277lQVAKio=\");\n_c = Teams;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Teams);\nvar _c;\n$RefreshReg$(_c, \"Teams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKG1haW4pL3RlYW0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNtRDtBQUNUO0FBYzFDLE1BQU1JLFFBQWtCOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUVsREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDWCxTQUFTVSxLQUFLRSxPQUFPO1lBQ3ZCLEVBQUUsT0FBT1QsT0FBTztnQkFDZEMsU0FBUztZQUNYLFNBQVU7Z0JBQ1JGLFdBQVc7WUFDYjtRQUNGO1FBRUFHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUosU0FBUyxxQkFBTyw4REFBQ1k7UUFBSUMsV0FBVTtrQkFBZ0I7Ozs7OztJQUNuRCxJQUFJWCxPQUFPLHFCQUFPLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUFnQlg7Ozs7OztJQUVqRCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0Qjs7Ozs7OzBCQUMxQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQixvREFBUUE7OEJBQ05FLE1BQU1pQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDTDs0QkFFQ0MsV0FBVTs7OENBRVYsOERBQUNLO29DQUNDQyxLQUFLSCxLQUFLSSxPQUFPLENBQUNDLEtBQUs7b0NBQ3ZCQyxLQUFLLEdBQXNCTixPQUFuQkEsS0FBS08sSUFBSSxDQUFDQyxLQUFLLEVBQUMsS0FBa0IsT0FBZlIsS0FBS08sSUFBSSxDQUFDRSxJQUFJO29DQUN6Q1osV0FBVTs7Ozs7OzhDQUVaLDhEQUFDYTtvQ0FBR2IsV0FBVTs7d0NBQ1hHLEtBQUtPLElBQUksQ0FBQ0MsS0FBSzt3Q0FBQzt3Q0FBRVIsS0FBS08sSUFBSSxDQUFDRSxJQUFJOzs7Ozs7OzhDQUVuQyw4REFBQ0U7b0NBQUVkLFdBQVU7OENBQWlCRyxLQUFLWSxLQUFLOzs7Ozs7OENBQ3hDLDhEQUFDRDtvQ0FBRWQsV0FBVTs4Q0FBaUJHLEtBQUthLEtBQUs7Ozs7Ozs7MkJBWm5DWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJuQjtHQXJETXBCO0tBQUFBO0FBdUROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKG1haW4pL3RlYW0vcGFnZS50c3g/Njk1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdFwiO1xuXG50eXBlIFVzZXIgPSB7XG4gIG5hbWU6IHtcbiAgICBmaXJzdDogc3RyaW5nO1xuICAgIGxhc3Q6IHN0cmluZztcbiAgfTtcbiAgcGljdHVyZToge1xuICAgIGxhcmdlOiBzdHJpbmc7XG4gIH07XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG59O1xuXG5jb25zdCBUZWFtczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLz9yZXN1bHRzPTVcIik7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0VXNlcnMoZGF0YS5yZXN1bHRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHRlYW0gbWVtYmVyc1wiKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IG1pbi1oLXNjcmVlbiBiZy1bI0ZGRjQ1NV1cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi04IHRleHQtY2VudGVyXCI+T3VyIFRlYW08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgbGc6dy0xLzJcIj5cbiAgICAgICAgPENhcm91c2VsPlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHAtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIucGljdHVyZS5sYXJnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake3VzZXIubmFtZS5maXJzdH0gJHt1c2VyLm5hbWUubGFzdH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBtYi00IHctMzIgaC0zMiBtZDp3LTQ4IG1kOmgtNDhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7dXNlci5uYW1lLmZpcnN0fSB7dXNlci5uYW1lLmxhc3R9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57dXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57dXNlci5waG9uZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwiVGVhbXMiLCJ1c2VycyIsInNldFVzZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hVc2VycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJyZXN1bHRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJwaWN0dXJlIiwibGFyZ2UiLCJhbHQiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwiaDIiLCJwIiwiZW1haWwiLCJwaG9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(main)/team/page.tsx\n"));

/***/ })

});