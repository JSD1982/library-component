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

function InputField(props) {
  var _props$label = props.label,
      label = _props$label === void 0 ? "inputLabel" : _props$label,
      _props$name = props.name,
      name = _props$name === void 0 ? "inputName" : _props$name,
      required = props.required,
      rest = _objectWithoutProperties(props, ["label", "name", "required"]);

  var validateField = function validateField(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateField
  }, function (_ref) {
    var field = _ref.field,
        form = _ref.form;
    var validareRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, console.log("form field", form), /*#__PURE__*/_react["default"].createElement("div", {
      className: required && validareRequired
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
      multiline: props.textarea ? true : false,
      rows: props.textarea ? 4 : null,
      variant: "outlined",
      htmlFor: name,
      id: name,
      label: label,
      error: form.errors[name] && form.touched[name],
      helperText: form.errors[name] && form.touched[name] ? form.errors[name] : null
    }, rest, field))));
  });
}

var _default = InputField;
exports["default"] = _default;