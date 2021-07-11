"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      light: "#4b096b",
      main: "#4b096b",
      dark: "#4b096b",
      contrastText: "#ffffff"
    },
    secondary: {
      light: _grey["default"][200],
      main: _grey["default"][500],
      dark: _grey["default"][700],
      contrastText: "#ffffff"
    },
    background: {
      paper: "#ffffff",
      "default": "#ffffff",
      appBar: "#ffffff",
      contentFrame: "#ffffff",
      chip: "#ffffff",
      avatar: "#ffffff"
    }
  },
  status: {
    danger: "red"
  },
  typography: {
    button: {
      fontWeight: 400,
      color: "#fff",
      textAlign: "capitalize"
    }
  }
});
exports.theme = theme;