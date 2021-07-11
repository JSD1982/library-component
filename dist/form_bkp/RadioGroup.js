"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

var _core = require("@material-ui/core");

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RadioGroup(props) {
  var label = props.label,
      name = props.name,
      options = props.options,
      rest = _objectWithoutProperties(props, ["label", "name", "options"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", null, label), /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name
  }, function (_ref) {
    var field = _ref.field;
    return /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
      row: true
    }, options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: option.key
      }, /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, _extends({
        type: "Radio",
        control: /*#__PURE__*/_react["default"].createElement(_core.Radio, {
          color: "primary"
        }),
        id: option.value
      }, field, rest, {
        value: option.value,
        checked: field.value === option.value,
        label: option.key
      })));
    }));
  }), /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
    component: _ValidationError["default"],
    name: name
  }));
}

var _default = RadioGroup;
exports["default"] = _default;