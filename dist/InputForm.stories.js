"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputRadioButton = exports.inputCheckBox = exports.inputFile = exports.inputSelectCountry = exports.inputSelectPhone = exports.inputSelect = exports.inputDate = exports.inputEmail = exports.inputTextarea = exports.inputDefault = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

var _addonKnobs = require("@storybook/addon-knobs");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components|Form',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var initialValues = {
  email: "",
  FormField: "",
  checkboxOption: "",
  radioOption: '',
  areaText: '',
  selectOptions: '',
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
  console.log('Form data', values);
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

var inputDefault = function inputDefault() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    name: (0, _addonKnobs.text)("Text", "FormField"),
    label: (0, _addonKnobs.text)("Text", "FormField"),
    required: true,
    type: "text"
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputDefault = inputDefault;

var inputTextarea = function inputTextarea() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "textarea",
    name: "areaText",
    required: true
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputTextarea = inputTextarea;

var inputEmail = function inputEmail() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "email",
    name: "email",
    label: "email",
    required: true,
    type: "text"
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputEmail = inputEmail;

var inputDate = function inputDate() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "dateField",
    name: "birthDate",
    required: true
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputDate = inputDate;

var inputSelect = function inputSelect() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "select",
    name: "selectOptions",
    required: true,
    label: "Seleccione un campo",
    options: dropdownOptions
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputSelect = inputSelect;

var inputSelectPhone = function inputSelectPhone() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "selectPhone",
    name: "phone",
    required: true,
    label: "Tel\xE8fono",
    type: "number"
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputSelectPhone = inputSelectPhone;

var inputSelectCountry = function inputSelectCountry() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "selectCountries",
    name: "country",
    required: true,
    label: "Nacionalidad"
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputSelectCountry = inputSelectCountry;

var inputFile = function inputFile() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "inputFile",
    name: "fileImage",
    required: true,
    label: "Selecciona tu imagen",
    type: "file"
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputFile = inputFile;

var inputCheckBox = function inputCheckBox() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "checkbox",
    name: "checkboxOption",
    required: true,
    label: "Seleccione un item",
    type: "checkbox",
    options: checkboxOptions
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputCheckBox = inputCheckBox;

var inputRadioButton = function inputRadioButton() {
  return /*#__PURE__*/_react["default"].createElement(_components.FormControl, {
    initialValues: initialValues,
    onSubmit: onSubmit
  }, /*#__PURE__*/_react["default"].createElement(_components.FormField, {
    typeControl: "radioGroup",
    name: "radioOption",
    label: "Seleccione un item",
    type: "radio",
    options: radioOptions
  }), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    style: {
      marginTop: 30
    }
  }, "Active"));
};

exports.inputRadioButton = inputRadioButton;