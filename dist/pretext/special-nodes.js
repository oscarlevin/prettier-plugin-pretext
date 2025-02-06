"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAK_AROUND_ELEMENTS = exports.PAR_ELEMENTS = exports.INDENTABLE_PRE_ELEMENTS = exports.PRE_ELEMENTS = void 0;
/**
 * Elements whose contents must not be formatted whatsoever; E.g., whitespace should not be collapsed.
 */
exports.PRE_ELEMENTS = new Set(["cline", "input", "output", "prompt"]);
/**
 * Like PRE_ELEMENTS except these elements allow a uniform amount of whitespace to be added or removed
 * from the start of each line.
 */
exports.INDENTABLE_PRE_ELEMENTS = new Set([
    "latex-image",
    "latex-image-preamble",
    "macros",
    "asymptote",
]);
/**
 * Elements whose contents are "whitespace sensitive" and which should be wrapped like a paragraph.
 * For example, in a `PAR_ELEMENTS` element, if there is no space between two nodes, none will be inserted.
 * E.g. `<m>foo</m>bar` -> `<m>foo</m>bar`, where as the default behavior would be
 * `<m>foo</m>bar` -> `<m>foo</m>\nbar`
 */
exports.PAR_ELEMENTS = new Set([
    "p",
    "line",
    "biblio",
    "li",
    "idx",
    "h",
    "description",
    "shortdescription",
    "caption",
    "cell",
    "q",
    "title",
    "pubtitle",
    "fn",
    "me",
]);
/**
 * Elements which should be on their own line even in paragraph mode.
 */
exports.BREAK_AROUND_ELEMENTS = new Set([
    "ol",
    "ul",
    "dl",
    "q",
    "title",
    "pubtitle",
]);
//# sourceMappingURL=special-nodes.js.map