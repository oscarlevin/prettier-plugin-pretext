"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const parser_1 = __importDefault(require("./parser"));
const printer_1 = __importDefault(require("./printer"));
const plugin = {
    languages: [
        {
            name: "PTX",
            parsers: ["ptx"],
            extensions: [".xml", ".ptx"],
            vscodeLanguageIds: ["xml", "ptx"],
            linguistLanguageId: 399,
        },
    ],
    parsers: {
        ptx: parser_1.default,
    },
    printers: {
        ptx: printer_1.default,
    },
    options: {},
    defaultOptions: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleAttributePerLine: false,
    },
};
module.exports = plugin;
//# sourceMappingURL=plugin.js.map