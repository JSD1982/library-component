"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TextError(props) {
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: "MuiFormHelperText-root MuiFormHelperText-contained Mui-error"
  }, props.children);
}

var _default = TextError;
exports["default"] = _default;