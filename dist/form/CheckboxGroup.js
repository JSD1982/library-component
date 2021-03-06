"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CheckboxGroup(props) {
  var required = props.required,
      label = props.label,
      name = props.name,
      options = props.options,
      rest = _objectWithoutProperties(props, ["required", "label", "name", "options"]);

  var validateField = function validateField(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", null, label), /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateField
  }, function (_ref) {
    var form = _ref.form,
        field = _ref.field;
    var validareRequired = form.errors[name] && form.touched[name] ? "error-field check-error" : form.submitCount >= 1 ? "success-field check-success" : null;
    return options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: option.key
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: required && validareRequired
      }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], _extends({
        type: "checkbox",
        id: option.value
      }, field, rest, {
        value: option.value
      })), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: option.value
      }, option.key)));
    });
  }), props.errorMessage && /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
    component: _ValidationError["default"],
    name: name
  }));
}

var _default = CheckboxGroup;
exports["default"] = _default;