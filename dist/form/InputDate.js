"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _formik = require("formik");

var _es = _interopRequireDefault(require("date-fns/locale/es"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputDate = function InputDate(props) {
  var label = props.label,
      name = props.name,
      required = props.required,
      rest = _objectWithoutProperties(props, ["label", "name", "required"]);

  var validateFieldDate = function validateFieldDate(value) {
    var errors;

    if (!value) {
      errors = "El campo ".concat(name, " es obligatorio");
    }

    return errors;
  };

  return /*#__PURE__*/_react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns["default"],
    locale: _es["default"]
  }, /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    validate: validateFieldDate
  }, function (_ref) {
    var form = _ref.form,
        field = _ref.field;
    var validareRequired = form.errors[name] && form.touched[name] ? "error-field" : form.submitCount >= 1 ? "success-field" : null;
    var setFieldValue = form.setFieldValue;
    var value = field.value;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: required && validareRequired
    }, /*#__PURE__*/_react["default"].createElement(_pickers.DatePicker, _extends({
      htmlFor: name,
      inputVariant: "outlined",
      label: label,
      openTo: "year",
      format: "dd/MM/yyyy",
      views: ["year", "month", "date"],
      id: name,
      disableFuture: true
    }, field, rest, {
      value: value,
      onChange: function onChange(val) {
        return setFieldValue(name, val);
      },
      error: form.submitCount >= 1 && form.errors[name] ? form.touched[name] : null,
      helperText: form.errors[name] && form.touched[name] && form.submitCount >= 1 ? form.errors[name] : null
    })));
  }));
};

var _default = InputDate;
exports["default"] = _default;