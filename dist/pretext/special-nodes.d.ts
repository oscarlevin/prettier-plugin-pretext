/**
 * Elements whose contents must not be formatted whatsoever; E.g., whitespace should not be collapsed.
 */
export declare const PRE_ELEMENTS: Set<string>;
/**
 * Like PRE_ELEMENTS except these elements allow a uniform amount of whitespace to be added or removed
 * from the start of each line.
 */
export declare const INDENTABLE_PRE_ELEMENTS: Set<string>;
/**
 * Elements whose contents are "whitespace sensitive" and which should be wrapped like a paragraph.
 * For example, in a `PAR_ELEMENTS` element, if there is no space between two nodes, none will be inserted.
 * E.g. `<m>foo</m>bar` -> `<m>foo</m>bar`, where as the default behavior would be
 * `<m>foo</m>bar` -> `<m>foo</m>\nbar`
 */
export declare const PAR_ELEMENTS: Set<string>;
/**
 * Elements which should be on their own line even in paragraph mode.
 */
export declare const BREAK_AROUND_ELEMENTS: Set<string>;
