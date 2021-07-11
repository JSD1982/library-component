"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EmailField(_ref) {
  var required = _ref.required,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ["required", "label"]);

  var validateEmail = function validateEmail(value) {
    var errors;

    if (!value) {
      errors = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors = 'Invalid email format';
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: "email",
    validate: required && validateEmail
  }, function (_ref2) {
    var field = _ref2.field,
        form = _ref2.form;
    var valueRequired = form.errors.email && form.touched.email ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: required && valueRequired
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
      variant: "outlined",
      htmlFor: "email",
      id: "email",
      label: label ? label : "email",
      error: form.errors.email && form.touched.email,
      helperText: form.errors.email && form.touched.email && form.submitCount >= 1 ? form.errors.email : null
    }, rest, field)));
  });
}

var _default = EmailField;
exports["default"] = _default;