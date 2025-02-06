"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printChildrenWhenWhitespaceDoesNotMatter = void 0;
const doc_1 = require("prettier/doc");
const print_utils_1 = require("./print-utils");
const { fill, group, hardline, indent, join, line, literalline, softline } = doc_1.builders;
/**
 * Prints the children of `path` but trims whitespace from the start/end and collapses
 * contiguous whitespace into a single char.  Inserts `line` between words, and `hardline`
 * after sentence-ending punctuation (.!?).
 */
function printChildrenWhenWhitespaceDoesNotMatter(path, print) {
    const node = path.getNode();
    if (node == null || node.name !== "element") {
        throw new Error("Expected node with name `element`");
    }
    const nodePath = path;
    const fragments = nodePath.call((childrenPath) => {
        const children = childrenPath.getValue();
        const response = [];
        if (children.Comment) {
            response.push(...childrenPath.map(print_utils_1.printIToken, "Comment"));
        }
        if (children.chardata) {
            childrenPath.each((charDataPath) => {
                const chardata = charDataPath.getValue();
                if (!chardata.children.TEXT) {
                    return;
                }
                const rawText = chardata.children.TEXT[0].image;
                const leadingWhitespace = rawText.match(/^\s*/)[0].length;
                const trailingWhitespace = rawText.match(/\s*$/)[0].length;
                const content = rawText.trim();
                const printed = fill(content.split(/(\s+|[.!?]\s+)/g).map((value) => {
                    if (value.match(/[.!?]\s+/)) {
                        // This will put a linebreak after any sentence-ending punctuation in chardata.
                        return [value.trim(), hardline];
                    }
                    else if (value.match(/\s+/)) {
                        return line;
                    }
                    return value;
                }));
                const location = chardata.location;
                response.push({
                    offset: location.startOffset + leadingWhitespace,
                    startLine: location.startLine,
                    endLine: location.endLine,
                    endOffset: location.endOffset - trailingWhitespace,
                    nodeType: "text",
                    printed,
                });
            }, "chardata");
        }
        if (children.element) {
            response.push(...childrenPath.map((elementPath) => {
                var _a, _b;
                const node = elementPath.getValue();
                const location = node.location;
                const tagName = (_b = (_a = node.children.Name[0]) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.trim();
                return {
                    offset: location.startOffset,
                    startLine: location.startLine,
                    endLine: location.endLine,
                    endOffset: location.endOffset,
                    nodeType: "element",
                    tagName,
                    printed: print(elementPath),
                };
            }, "element"));
        }
        if (children.PROCESSING_INSTRUCTION) {
            response.push(...childrenPath.map(print_utils_1.printIToken, "PROCESSING_INSTRUCTION"));
        }
        return response;
    }, "children", "content", 0, "children");
    fragments.sort((left, right) => left.offset - right.offset);
    return fragments;
}
exports.printChildrenWhenWhitespaceDoesNotMatter = printChildrenWhenWhitespaceDoesNotMatter;
//# sourceMappingURL=print-children.js.map