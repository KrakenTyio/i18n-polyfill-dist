/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare class ParseLocation {
    file: ParseSourceFile;
    offset: number;
    line: number;
    col: number;
    constructor(file: ParseSourceFile, offset: number, line: number, col: number);
    toString(): string;
    getContext(maxChars: number, maxLines: number): {
        before: string;
        after: string;
    } | null;
}
export declare class ParseSourceFile {
    content: string;
    url: string;
    constructor(content: string, url?: string);
}
export declare class ParseSourceSpan {
    start: ParseLocation;
    end: ParseLocation;
    details: string | null;
    constructor(start: ParseLocation, end: ParseLocation, details?: string | null);
    toString(): string;
}
export declare enum ParseErrorLevel {
    WARNING = 0,
    ERROR = 1,
}
export declare class ParseError {
    span: ParseSourceSpan;
    msg: string;
    level: ParseErrorLevel;
    constructor(span: ParseSourceSpan, msg: string, level?: ParseErrorLevel);
    contextualMessage(): string;
    toString(): string;
}
/**
 * An i18n error.
 */
export declare class I18nError extends ParseError {
    constructor(span: ParseSourceSpan, msg: string);
}
export declare function escapeRegExp(s: string): string;
