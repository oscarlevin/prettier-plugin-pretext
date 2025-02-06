import type { IToken } from "chevrotain";
import type * as Prettier from "prettier";
import type { AttributeCstNode, ChardataCstNode, ContentCstNode, DocTypeDeclNode, DocumentCstNode, ElementCstNode, ExternalIDNode, PrologCstNode } from "@xml-tools/parser";
export declare type Fragment = {
    offset: number;
    printed: Doc;
    startLine?: number;
    endLine?: number;
    endOffset?: number;
    nodeType?: "element" | "text";
    tagName?: string | null;
};
interface ContentCstNodeExt extends Omit<ContentCstNode, "children"> {
    children: ContentCstNode["children"] & {
        PROCESSING_INSTRUCTION: IToken[];
    };
}
interface DocTypeDeclNodeExt extends Omit<DocTypeDeclNode, "children"> {
    children: DocTypeDeclNode["children"] & {
        CLOSE: IToken[];
    };
}
interface ElementCstNodeExt extends Omit<ElementCstNode, "children"> {
    children: Omit<ElementCstNode["children"], "content"> & {
        content: ContentCstNodeExt[];
    };
}
interface ExternalIDNodeExt extends Omit<ExternalIDNode, "name"> {
    name: "externalID";
}
declare type ArrayElement<T> = T extends (infer E)[] ? E : never;
declare type ArrayProperties<T> = {
    [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];
declare type IndexProperties<T extends {
    length: number;
}> = IsTuple<T> extends true ? Exclude<Partial<T>["length"], T["length"]> : number;
declare type IndexValue<T, P> = T extends any[] ? P extends number ? T[P] : never : P extends keyof T ? T[P] : never;
declare type IsTuple<T> = T extends [] ? true : T extends [infer First, ...infer Remain] ? IsTuple<Remain> : false;
declare type CallProperties<T> = T extends any[] ? IndexProperties<T> : keyof T;
declare type IterProperties<T> = T extends any[] ? IndexProperties<T> : ArrayProperties<T>;
declare type CallCallback<T, U> = (path: Path<T>, index: number, value: any) => U;
declare type EachCallback<T> = (path: Path<ArrayElement<T>>, index: number, value: any) => void;
declare type MapCallback<T, U> = (path: Path<ArrayElement<T>>, index: number, value: any) => U;
interface StrictPath<T> {
    call<U>(callback: CallCallback<T, U>): U;
    call<U, P1 extends CallProperties<T>>(callback: CallCallback<IndexValue<T, P1>, U>, prop1: P1): U;
    call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>>(callback: CallCallback<IndexValue<IndexValue<T, P1>, P2>, U>, prop1: P1, prop2: P2): U;
    call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>, P3 extends CallProperties<IndexValue<T[P1], P2>>>(callback: CallCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, U>, prop1: P1, prop2: P2, prop3: P3): U;
    call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>, P3 extends CallProperties<IndexValue<T[P1], P2>>, P4 extends CallProperties<IndexValue<IndexValue<T[P1], P2>, P3>>>(callback: CallCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>, U>, prop1: P1, prop2: P2, prop3: P3, prop4: P4): U;
    call<U, P extends PropertyKey>(callback: CallCallback<any, U>, prop1: P, prop2: P, prop3: P, prop4: P, ...props: P[]): U;
    each(callback: EachCallback<T>): void;
    each<P1 extends IterProperties<T>>(callback: EachCallback<IndexValue<T, P1>>, prop1: P1): void;
    each<P1 extends keyof T, P2 extends IterProperties<T[P1]>>(callback: EachCallback<IndexValue<IndexValue<T, P1>, P2>>, prop1: P1, prop2: P2): void;
    each<P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>>(callback: EachCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>>, prop1: P1, prop2: P2, prop3: P3): void;
    each<P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>, P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>>(callback: EachCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>>, prop1: P1, prop2: P2, prop3: P3, prop4: P4): void;
    each<P extends PropertyKey>(callback: EachCallback<any>, prop1: P, prop2: P, prop3: P, prop4: P, ...props: P[]): void;
    getParentNode: (count?: number | undefined) => any | null;
    map<U>(callback: MapCallback<T, U>): U[];
    map<U, P1 extends IterProperties<T>>(callback: MapCallback<IndexValue<T, P1>, U>, prop1: P1): U[];
    map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>>(callback: MapCallback<IndexValue<IndexValue<T, P1>, P2>, U>, prop1: P1, prop2: P2): U[];
    map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>>(callback: MapCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, U>, prop1: P1, prop2: P2, prop3: P3): U[];
    map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>, P3 extends IterProperties<IndexValue<T[P1], P2>>, P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>>(callback: MapCallback<IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>, U>, prop1: P1, prop2: P2, prop3: P3, prop4: P4): U[];
    map<U, P extends PropertyKey>(callback: MapCallback<any, U>, prop1: P, prop2: P, prop3: P, prop4: P, ...props: P[]): U[];
}
export declare type AnyNode = AttributeCstNode | ChardataCstNode | ContentCstNodeExt | DocTypeDeclNodeExt | DocumentCstNode | ElementCstNodeExt | ExternalIDNodeExt | PrologCstNode;
export * from "@xml-tools/parser";
export type { IToken } from "chevrotain";
export declare type Doc = Prettier.doc.builders.Doc;
export declare type Embed = (path: Path<AnyNode>, print: (path: Path<any>) => Doc, textToDoc: (text: string, options: Options) => Doc, options: Options) => Doc | null;
export declare type Options = Prettier.ParserOptions<any> & {
    bracketSameLine: boolean;
    xmlSelfClosingSpace: boolean;
    xmlWhitespaceSensitivity: "ignore" | "strict";
};
export declare type Parser = Omit<Prettier.Parser<AnyNode>, "parse"> & {
    parse: (text: string, parsers: {
        [name: string]: Prettier.Parser<any>;
    }, options: Options) => any;
};
export declare type Path<T> = Omit<Prettier.AstPath<T>, keyof StrictPath<T>> & StrictPath<T>;
export declare type Plugin = Omit<Prettier.Plugin<AnyNode>, "parsers" | "printers"> & {
    parsers: {
        [name: string]: Parser;
    };
    printers: {
        [name: string]: Printer;
    };
};
export declare type Printer = Omit<Prettier.Printer<AnyNode>, "embed" | "print"> & {
    embed: Embed;
    print: (path: Path<AnyNode>, options: Options, print: Print) => Doc;
};
export declare type Print = (path: Path<any>) => Doc;
