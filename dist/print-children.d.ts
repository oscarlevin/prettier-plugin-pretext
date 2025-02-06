import type { AnyNode, Fragment, Path, Print } from "./types";
/**
 * Prints the children of `path` but trims whitespace from the start/end and collapses
 * contiguous whitespace into a single char.  Inserts `line` between words, and `hardline`
 * after sentence-ending punctuation (.!?).
 */
export declare function printChildrenWhenWhitespaceDoesNotMatter(path: Path<AnyNode>, print: Print): Fragment[];
