"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const layouts_1 = __importDefault(require("./layouts"));
function HelloMessage(props) {
    return (react_1.default.createElement(layouts_1.default, { title: props.title },
        react_1.default.createElement("div", null,
            "Hello ",
            props.name)));
}
exports.default = HelloMessage;
//
