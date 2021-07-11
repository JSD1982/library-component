"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputField = _interopRequireDefault(require("./InputField"));

var _EmailField = _interopRequireDefault(require("./EmailField"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

var _SelectForm = _interopRequireDefault(require("./SelectForm"));

var _InputDate = _interopRequireDefault(require("./InputDate"));

var _SelectCountries = _interopRequireDefault(require("./SelectCountries"));

var _InputSelectPhone = _interopRequireDefault(require("./InputSelectPhone"));

var _InputFile = _interopRequireDefault(require("./InputFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormField(props) {
  var typeControl = props.typeControl,
      rest = _objectWithoutProperties(props, ["typeControl"]);

  switch (typeControl) {
    case 'email':
      return /*#__PURE__*/_react["default"].createElement(_EmailField["default"], rest);

    case 'textarea':
      return /*#__PURE__*/_react["default"].createElement(_InputField["default"], _extends({}, rest, {
        textarea: true
      }));

    case 'checkbox':
      return /*#__PURE__*/_react["default"].createElement(_CheckboxGroup["default"], rest);

    case 'radioGroup':
      return /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], rest);

    case 'select':
      return /*#__PURE__*/_react["default"].createElement(_SelectForm["default"], rest);

    case 'dateField':
      return /*#__PURE__*/_react["default"].createElement(_InputDate["default"], rest);

    case 'selectCountries':
      return /*#__PURE__*/_react["default"].createElement(_SelectCountries["default"], rest);

    case 'selectPhone':
      return /*#__PURE__*/_react["default"].createElement(_InputSelectPhone["default"], rest);

    case 'inputFile':
      return /*#__PURE__*/_react["default"].createElement(_InputFile["default"], rest);

    default:
      return /*#__PURE__*/_react["default"].createElement(_InputField["default"], rest);
  }
}

var _default = FormField;
exports["default"] = _default;