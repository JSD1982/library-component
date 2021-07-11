"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FormControl(props) {
  return /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
    initialValues: props.initialValues,
    onSubmit: props.onSubmit
  }, function (formik) {
    //console.log('formik props', formik)
    return /*#__PURE__*/_react["default"].createElement(_formik.Form, null, props.children);
  });
}

var _default = FormControl;
exports["default"] = _default;