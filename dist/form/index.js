"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _libraryStoryIebs = require("library-story-iebs");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialValues = {
  email: "",
  dni: "",
  checkboxOption: "",
  radioOption: '',
  selectOption: '',
  country: '',
  birthDate: new Date(),
  phone: '',
  countryPhone: {
    value: "0034",
    iso3166_a2: "es"
  },
  fileImage: null
};

var onSubmit = function onSubmit(values) {
  console.log('Form data', values.countryPhone.value);
};

var dropdownOptions = [{
  key: 'Select an option',
  value: ''
}, {
  key: 'Option 1',
  value: 'option1'
}, {
  key: 'Option 2',
  value: 'option2'
}, {
  key: 'Option 3',
  value: 'option3'
}];
var checkboxOptions = [{
  key: 'Option 1',
  value: 'cOption1'
}, {
  key: 'Option 2',
  value: 'cOption2'
}, {
  key: 'Option 3',
  value: 'cOption3'
}];
var radioOptions = [{
  key: 'Option 1',
  value: 'rOption1'
}, {
  key: 'Option 2',
  value: 'rOption2'
}, {
  key: 'Option 3',
  value: 'rOption3'
}];

function ExampleForm(props) {
  return /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "email"
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    name: "dni",
    label: "dni",
    type: "number"
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "checkbox",
    label: "Checkbox topics",
    name: "checkboxOption",
    options: checkboxOptions
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "radioGroup",
    label: "Radio topic",
    name: "radioOption",
    options: radioOptions
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "select",
    label: "Select a topic",
    name: "selectOption",
    options: dropdownOptions
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "dateField",
    label: "Fecha de nacimiento",
    name: "birthDate"
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "selectCountries",
    label: "Select a country",
    name: "country"
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "selectPhone",
    label: "Select a phone",
    name: "phone",
    countryPhone: "countryPhone"
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_libraryStoryIebs.FormField, {
    typeControl: "inputFile",
    label: "Select a file",
    name: "fileImage"
  })), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    style: {
      marginTop: 25
    }
  }, "Submit")));
}

var _default = ExampleForm;
exports["default"] = _default;