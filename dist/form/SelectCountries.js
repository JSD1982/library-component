"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _country = require("../mock/country");

var _ValidationError = _interopRequireDefault(require("./ValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var formatOptionLabel = function formatOptionLabel(_ref) {
  var label = _ref.label,
      iso3166_a2 = _ref.iso3166_a2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flag-icon flag-icon-".concat(iso3166_a2)
  }), " ", label)));
};

function SelectCountries(props) {
  var required = props.required,
      label = props.label,
      name = props.name,
      rest = _objectWithoutProperties(props, ["required", "label", "name"]);

  var validateField = function validateField(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-control__country"
  }, /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: required && validateField
  }, function (_ref2) {
    var form = _ref2.form,
        field = _ref2.field;
    var setFieldValue = form.setFieldValue;
    var value = field.value;
    var validareRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({
      formatOptionLabel: props.customOptionRender || formatOptionLabel,
      components: props.components,
      options: _country.phoneItems,
      placeholder: label,
      id: name
    }, field, rest, {
      value: value,
      onChange: function onChange(val) {
        return setFieldValue(name, val);
      },
      className: required && validareRequired
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "select-country-error"
    }, /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
      component: _ValidationError["default"],
      name: name
    })));
  }));
}

var _default = SelectCountries;
exports["default"] = _default;