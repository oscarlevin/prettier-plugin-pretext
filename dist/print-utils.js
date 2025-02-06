"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFragment = exports.printIToken = void 0;
function printIToken(path) {
    const node = path.getValue();
    return {
        offset: node.startOffset,
        startLine: node.startLine,
        endLine: node.endLine,
        printed: node.image,
        endOffset: node.endOffset,
    };
}
exports.printIToken = printIToken;
function isFragment(item) {
    if (typeof item === "object" && item.offset != null) {
        return true;
    }
    return false;
}
exports.isFragment = isFragment;
//# sourceMappingURL=print-utils.js.map