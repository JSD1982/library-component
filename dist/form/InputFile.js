"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function InputFile(props) {
  var required = props.required,
      label = props.label,
      name = props.name,
      rest = _objectWithoutProperties(props, ["required", "label", "name"]);

  var fileRef = _react["default"].useRef(null);

  var validateField = function validateField() {
    var errors;

    if (fileRef.current.files.length === 0) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateField
  }, function (_ref) {
    var form = _ref.form,
        field = _ref.field;
    var setFieldValue = form.setFieldValue;
    var value = field.value;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
      "for": "file"
    }, label), /*#__PURE__*/_react["default"].createElement("input", _extends({
      ref: fileRef,
      id: name,
      type: "file"
    }, field, rest, {
      value: value,
      onChange: function onChange(event) {
        setFieldValue('file', event.currentTarget.files);
      }
    })), form.submitCount >= 1 && form.errors[name] && /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
      component: _ValidationError["default"],
      name: name
    }));
  }));
}

var _default = InputFile;
exports["default"] = _default;