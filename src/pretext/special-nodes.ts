/**
 * Elements whose contents must not be formatted whatsoever; E.g., whitespace should not be collapsed.
 */
export const PRE_ELEMENTS = new Set(["cline", "input", "output", "prompt", "latex-image"]);
/**
 * Elements whose contents are "whitespace sensitive" and which should be wrapped like a paragraph.
 * For example, in a `PAR_ELEMENTS` element, if there is no space between two nodes, none will be inserted.
 * E.g. `<m>foo</m>bar` -> `<m>foo</m>bar`, where as the default behavior would be
 * `<m>foo</m>bar` -> `<m>foo</m>\nbar`
 */
export const PAR_ELEMENTS = new Set(["p", "line", "biblio", "li"]);
/**
 * Elements which should be on their own line even in paragraph mode.
 */
export const BREAK_AROUND_ELEMENTS = new Set(["ol", "ul", "dl"]);
