"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SelectForm(props) {
  var required = props.required,
      label = props.label,
      name = props.name,
      options = props.options,
      rest = _objectWithoutProperties(props, ["required", "label", "name", "options"]);

  var validateSelect = function validateSelect(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateSelect
  }, function (_ref) {
    var field = _ref.field,
        form = _ref.form;
    return /*#__PURE__*/_react["default"].createElement(_core.Select, _extends({
      id: name,
      error: form.errors[name] && form.touched[name]
    }, rest, field, {
      "native": true
    }), options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: option.value,
        value: option.value
      }, option.key);
    }));
  }), /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
    component: _ValidationError["default"],
    name: name
  })));
}

var _default = SelectForm;
exports["default"] = _default;