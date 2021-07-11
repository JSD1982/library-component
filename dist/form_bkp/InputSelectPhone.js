"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _core = require("@material-ui/core");

var _SelectCountries = _interopRequireDefault(require("./SelectCountries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputSelectPhone = function InputSelectPhone(_ref) {
  var countryValue = _ref.countryValue,
      countryPhone = _ref.countryPhone,
      name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      required = _ref.required,
      rest = _objectWithoutProperties(_ref, ["countryValue", "countryPhone", "name", "value", "label", "required"]);

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeSelect = _React$useState2[0],
      setactiveSelect = _React$useState2[1];

  var validateField = function validateField(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  var SingleValue = function SingleValue(_ref2) {
    var cx = _ref2.cx,
        getStyles = _ref2.getStyles,
        selectProps = _ref2.selectProps,
        data = _ref2.data,
        isDisabled = _ref2.isDisabled,
        className = _ref2.className,
        props = _objectWithoutProperties(_ref2, ["cx", "getStyles", "selectProps", "data", "isDisabled", "className"]);

    console.log(props);
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      style: {
        display: "flex"
      }
    }, props), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
      className: "flag-icon flag-icon-".concat(data.iso3166_a2)
    }), " +"), /*#__PURE__*/_react["default"].createElement("div", null, parseInt(data.value)));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content-form-box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(!activeSelect ? 'value-country-number' : 'value-country-number-open')
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body1",
    component: "p"
  }, /*#__PURE__*/_react["default"].createElement(_SelectCountries["default"], {
    onMenuOpen: function onMenuOpen() {
      setactiveSelect(true);
    },
    onMenuClose: function onMenuClose() {
      setactiveSelect(false);
    },
    label: "Select a country",
    name: "countryPhone" //defaultValue={"SingleValue"}
    ,
    components: {
      SingleValue: SingleValue
    },
    customOptionRender: function customOptionRender(_ref3) {
      var label = _ref3.label,
          iso3166_a2 = _ref3.iso3166_a2;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: "flex"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "flag-icon flag-icon-".concat(iso3166_a2)
      }), " ", label)));
    }
  }))), !activeSelect && /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateField
  }, function (_ref4) {
    var field = _ref4.field,
        form = _ref4.form;
    var validateRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, console.log("form field", form), /*#__PURE__*/_react["default"].createElement("div", {
      className: required && validateRequired
    }, /*#__PURE__*/_react["default"].createElement(_core.TextField, _extends({
      variant: "outlined",
      htmlFor: name,
      id: name,
      label: label,
      error: form.submitCount >= 1 && form.errors[name] ? form.touched[name] : null,
      helperText: form.errors[name] && form.touched[name] && form.submitCount >= 1 ? form.errors[name] : null
    }, rest, field))));
  }))));
};

var _default = InputSelectPhone;
exports["default"] = _default;