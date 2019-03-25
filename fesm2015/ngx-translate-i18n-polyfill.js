import { I18nPluralPipe, I18nSelectPipe, NgLocaleLocalization } from '@angular/common';
import { MissingTranslationStrategy, Inject, Injectable, InjectionToken, LOCALE_ID, Optional, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Text {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
class Expansion {
    /**
     * @param {?} switchValue
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     * @param {?} switchValueSourceSpan
     */
    constructor(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
        this.switchValue = switchValue;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
        this.switchValueSourceSpan = switchValueSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitExpansion(this, context);
    }
}
class ExpansionCase {
    /**
     * @param {?} value
     * @param {?} expression
     * @param {?} sourceSpan
     * @param {?} valueSourceSpan
     * @param {?} expSourceSpan
     */
    constructor(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
        this.value = value;
        this.expression = expression;
        this.sourceSpan = sourceSpan;
        this.valueSourceSpan = valueSourceSpan;
        this.expSourceSpan = expSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitExpansionCase(this, context);
    }
}
class Attribute {
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} sourceSpan
     * @param {?=} valueSpan
     */
    constructor(name, value, sourceSpan, valueSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
        this.valueSpan = valueSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitAttribute(this, context);
    }
}
class Element {
    /**
     * @param {?} name
     * @param {?} attrs
     * @param {?} children
     * @param {?} sourceSpan
     * @param {?=} startSourceSpan
     * @param {?=} endSourceSpan
     */
    constructor(name, attrs, children, sourceSpan, startSourceSpan = null, endSourceSpan = null) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitElement(this, context);
    }
}
class Comment {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitComment(this, context);
    }
}
/**
 * @param {?} visitor
 * @param {?} nodes
 * @param {?=} context
 * @return {?}
 */
function visitAll(visitor, nodes, context = null) {
    const /** @type {?} */ result = [];
    const /** @type {?} */ visit = visitor.visit
        ? (ast) => /** @type {?} */ ((visitor.visit))(ast, context) || ast.visit(visitor, context)
        : (ast) => ast.visit(visitor, context);
    nodes.forEach(ast => {
        const /** @type {?} */ astResult = visit(ast);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Message {
    /**
     * @param {?} nodes
     * @param {?} placeholders maps placeholder names to static content
     * @param {?} placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     */
    constructor(nodes, placeholders, placeholderToMessage, meaning, description, id) {
        this.nodes = nodes;
        this.placeholders = placeholders;
        this.placeholderToMessage = placeholderToMessage;
        this.meaning = meaning;
        this.description = description;
        this.id = id;
        if (nodes.length) {
            this.sources = [
                {
                    filePath: nodes[0].sourceSpan.start.file.url,
                    startLine: nodes[0].sourceSpan.start.line + 1,
                    startCol: nodes[0].sourceSpan.start.col + 1,
                    endLine: nodes[nodes.length - 1].sourceSpan.end.line + 1,
                    endCol: nodes[0].sourceSpan.start.col + 1
                }
            ];
        }
        else {
            this.sources = [];
        }
    }
}
class Text$1 {
    /**
     * @param {?} value
     * @param {?} sourceSpan
     */
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
class Container {
    /**
     * @param {?} children
     * @param {?} sourceSpan
     */
    constructor(children, sourceSpan) {
        this.children = children;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitContainer(this, context);
    }
}
class Icu {
    /**
     * @param {?} expression
     * @param {?} type
     * @param {?} cases
     * @param {?} sourceSpan
     */
    constructor(expression, type, cases, sourceSpan) {
        this.expression = expression;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitIcu(this, context);
    }
}
class TagPlaceholder {
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} startName
     * @param {?} closeName
     * @param {?} children
     * @param {?} isVoid
     * @param {?} sourceSpan
     */
    constructor(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
        this.tag = tag;
        this.attrs = attrs;
        this.startName = startName;
        this.closeName = closeName;
        this.children = children;
        this.isVoid = isVoid;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitTagPlaceholder(this, context);
    }
}
class Placeholder {
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitPlaceholder(this, context);
    }
}
class IcuPlaceholder {
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} sourceSpan
     */
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context) {
        return visitor.visitIcuPlaceholder(this, context);
    }
}
class RecurseVisitor {
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    visitContainer(container, context) {
        container.children.forEach(child => child.visit(this));
    }
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    visitIcu(icu, context) {
        Object.keys(icu.cases).forEach(k => {
            icu.cases[k].visit(this);
        });
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        ph.children.forEach(child => child.visit(this));
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) { }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ParseLocation {
    /**
     * @param {?} file
     * @param {?} offset
     * @param {?} line
     * @param {?} col
     */
    constructor(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.offset != null ? `${this.line}:${this.col}` : "";
    }
    /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    getContext(maxChars, maxLines) {
        const /** @type {?} */ content = this.file.content;
        let /** @type {?} */ startOffset = this.offset;
        if (startOffset != null) {
            if (startOffset > content.length - 1) {
                startOffset = content.length - 1;
            }
            let /** @type {?} */ endOffset = startOffset;
            let /** @type {?} */ ctxChars = 0;
            let /** @type {?} */ ctxLines = 0;
            while (ctxChars < maxChars && startOffset > 0) {
                startOffset--;
                ctxChars++;
                if (content[startOffset] === "\n") {
                    if (++ctxLines === maxLines) {
                        break;
                    }
                }
            }
            ctxChars = 0;
            ctxLines = 0;
            while (ctxChars < maxChars && endOffset < content.length - 1) {
                endOffset++;
                ctxChars++;
                if (content[endOffset] === "\n") {
                    if (++ctxLines === maxLines) {
                        break;
                    }
                }
            }
            return {
                before: content.substring(startOffset, this.offset),
                after: content.substring(this.offset, endOffset + 1)
            };
        }
        return null;
    }
}
class ParseSourceFile {
    /**
     * @param {?} content
     * @param {?=} url
     */
    constructor(content, url = "") {
        this.content = content;
        this.url = url;
    }
}
class ParseSourceSpan {
    /**
     * @param {?} start
     * @param {?} end
     * @param {?=} details
     */
    constructor(start, end, details = null) {
        this.start = start;
        this.end = end;
        this.details = details;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
}
/** @enum {number} */
const ParseErrorLevel = {
    WARNING: 0,
    ERROR: 1,
};
ParseErrorLevel[ParseErrorLevel.WARNING] = "WARNING";
ParseErrorLevel[ParseErrorLevel.ERROR] = "ERROR";
class ParseError {
    /**
     * @param {?} span
     * @param {?} msg
     * @param {?=} level
     */
    constructor(span, msg, level = ParseErrorLevel.ERROR) {
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    /**
     * @return {?}
     */
    contextualMessage() {
        const /** @type {?} */ ctx = this.span.start.getContext(100, 3);
        return ctx ? ` ("${ctx.before}[${ParseErrorLevel[this.level]} ->]${ctx.after}")` : "";
    }
    /**
     * @return {?}
     */
    toString() {
        const /** @type {?} */ details = this.span.details ? `, ${this.span.details}` : "";
        return `${this.msg}${this.contextualMessage()}: ${this.span.start}${details}`;
    }
}
/**
 * An i18n error.
 */
class I18nError extends ParseError {
    /**
     * @param {?} span
     * @param {?} msg
     */
    constructor(span, msg) {
        super(span, msg);
    }
}
/**
 * @param {?} s
 * @return {?}
 */
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class InterpolationConfig {
    /**
     * @param {?} start
     * @param {?} end
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
const /** @type {?} */ DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig("{{", "}}");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const /** @type {?} */ $EOF = 0;
const /** @type {?} */ $TAB = 9;
const /** @type {?} */ $LF = 10;
const /** @type {?} */ $VTAB = 11;
const /** @type {?} */ $FF = 12;
const /** @type {?} */ $CR = 13;
const /** @type {?} */ $SPACE = 32;
const /** @type {?} */ $BANG = 33;
const /** @type {?} */ $DQ = 34;
const /** @type {?} */ $HASH = 35;
const /** @type {?} */ $$ = 36;
const /** @type {?} */ $PERCENT = 37;
const /** @type {?} */ $AMPERSAND = 38;
const /** @type {?} */ $SQ = 39;
const /** @type {?} */ $LPAREN = 40;
const /** @type {?} */ $RPAREN = 41;
const /** @type {?} */ $STAR = 42;
const /** @type {?} */ $PLUS = 43;
const /** @type {?} */ $COMMA = 44;
const /** @type {?} */ $MINUS = 45;
const /** @type {?} */ $PERIOD = 46;
const /** @type {?} */ $SLASH = 47;
const /** @type {?} */ $COLON = 58;
const /** @type {?} */ $SEMICOLON = 59;
const /** @type {?} */ $LT = 60;
const /** @type {?} */ $EQ = 61;
const /** @type {?} */ $GT = 62;
const /** @type {?} */ $QUESTION = 63;
const /** @type {?} */ $0 = 48;
const /** @type {?} */ $9 = 57;
const /** @type {?} */ $A = 65;
const /** @type {?} */ $E = 69;
const /** @type {?} */ $F = 70;
const /** @type {?} */ $X = 88;
const /** @type {?} */ $Z = 90;
const /** @type {?} */ $LBRACKET = 91;
const /** @type {?} */ $BACKSLASH = 92;
const /** @type {?} */ $RBRACKET = 93;
const /** @type {?} */ $CARET = 94;
const /** @type {?} */ $_ = 95;
const /** @type {?} */ $a = 97;
const /** @type {?} */ $e = 101;
const /** @type {?} */ $f = 102;
const /** @type {?} */ $n = 110;
const /** @type {?} */ $r = 114;
const /** @type {?} */ $t = 116;
const /** @type {?} */ $u = 117;
const /** @type {?} */ $v = 118;
const /** @type {?} */ $x = 120;
const /** @type {?} */ $z = 122;
const /** @type {?} */ $LBRACE = 123;
const /** @type {?} */ $BAR = 124;
const /** @type {?} */ $RBRACE = 125;
const /** @type {?} */ $NBSP = 160;
const /** @type {?} */ $BT = 96;
/**
 * @param {?} code
 * @return {?}
 */
function isWhitespace(code) {
    return (code >= $TAB && code <= $SPACE) || code === $NBSP;
}
/**
 * @param {?} code
 * @return {?}
 */
function isDigit(code) {
    return $0 <= code && code <= $9;
}
/**
 * @param {?} code
 * @return {?}
 */
function isAsciiLetter(code) {
    return (code >= $a && code <= $z) || (code >= $A && code <= $Z);
}
/**
 * @param {?} code
 * @return {?}
 */
function isAsciiHexDigit(code) {
    return (code >= $a && code <= $f) || (code >= $A && code <= $F) || isDigit(code);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const TagContentType = {
    RAW_TEXT: 0,
    ESCAPABLE_RAW_TEXT: 1,
    PARSABLE_DATA: 2,
};
TagContentType[TagContentType.RAW_TEXT] = "RAW_TEXT";
TagContentType[TagContentType.ESCAPABLE_RAW_TEXT] = "ESCAPABLE_RAW_TEXT";
TagContentType[TagContentType.PARSABLE_DATA] = "PARSABLE_DATA";
/**
 * @param {?} elementName
 * @return {?}
 */
function splitNsName(elementName) {
    if (elementName[0] !== ":") {
        return [null, elementName];
    }
    const /** @type {?} */ colonIndex = elementName.indexOf(":", 1);
    if (colonIndex === -1) {
        throw new Error(`Unsupported format "${elementName}" expecting ":namespace:name"`);
    }
    return [elementName.slice(1, colonIndex), elementName.slice(colonIndex + 1)];
}
/**
 * @param {?} tagName
 * @return {?}
 */
function isNgContainer(tagName) {
    return splitNsName(tagName)[1] === "ng-container";
}
/**
 * @param {?} fullName
 * @return {?}
 */
function getNsPrefix(fullName) {
    return fullName === null ? null : splitNsName(fullName)[0];
}
/**
 * @param {?} prefix
 * @param {?} localName
 * @return {?}
 */
function mergeNsAndName(prefix, localName) {
    return prefix ? `:${prefix}:${localName}` : localName;
}
// see http://www.w3.org/TR/html51/syntax.html#named-character-references
// see https://html.spec.whatwg.org/multipage/entities.json
// This list is not exhaustive to keep the compiler footprint low.
// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not
// exist.
const /** @type {?} */ NAMED_ENTITIES = {
    Aacute: "\u00C1",
    aacute: "\u00E1",
    Acirc: "\u00C2",
    acirc: "\u00E2",
    acute: "\u00B4",
    AElig: "\u00C6",
    aelig: "\u00E6",
    Agrave: "\u00C0",
    agrave: "\u00E0",
    alefsym: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    amp: "&",
    and: "\u2227",
    ang: "\u2220",
    apos: "\u0027",
    Aring: "\u00C5",
    aring: "\u00E5",
    asymp: "\u2248",
    Atilde: "\u00C3",
    atilde: "\u00E3",
    Auml: "\u00C4",
    auml: "\u00E4",
    bdquo: "\u201E",
    Beta: "\u0392",
    beta: "\u03B2",
    brvbar: "\u00A6",
    bull: "\u2022",
    cap: "\u2229",
    Ccedil: "\u00C7",
    ccedil: "\u00E7",
    cedil: "\u00B8",
    cent: "\u00A2",
    Chi: "\u03A7",
    chi: "\u03C7",
    circ: "\u02C6",
    clubs: "\u2663",
    cong: "\u2245",
    copy: "\u00A9",
    crarr: "\u21B5",
    cup: "\u222A",
    curren: "\u00A4",
    dagger: "\u2020",
    Dagger: "\u2021",
    darr: "\u2193",
    dArr: "\u21D3",
    deg: "\u00B0",
    Delta: "\u0394",
    delta: "\u03B4",
    diams: "\u2666",
    divide: "\u00F7",
    Eacute: "\u00C9",
    eacute: "\u00E9",
    Ecirc: "\u00CA",
    ecirc: "\u00EA",
    Egrave: "\u00C8",
    egrave: "\u00E8",
    empty: "\u2205",
    emsp: "\u2003",
    ensp: "\u2002",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    equiv: "\u2261",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\u00D0",
    eth: "\u00F0",
    Euml: "\u00CB",
    euml: "\u00EB",
    euro: "\u20AC",
    exist: "\u2203",
    fnof: "\u0192",
    forall: "\u2200",
    frac12: "\u00BD",
    frac14: "\u00BC",
    frac34: "\u00BE",
    frasl: "\u2044",
    Gamma: "\u0393",
    gamma: "\u03B3",
    ge: "\u2265",
    gt: ">",
    harr: "\u2194",
    hArr: "\u21D4",
    hearts: "\u2665",
    hellip: "\u2026",
    Iacute: "\u00CD",
    iacute: "\u00ED",
    Icirc: "\u00CE",
    icirc: "\u00EE",
    iexcl: "\u00A1",
    Igrave: "\u00CC",
    igrave: "\u00EC",
    image: "\u2111",
    infin: "\u221E",
    int: "\u222B",
    Iota: "\u0399",
    iota: "\u03B9",
    iquest: "\u00BF",
    isin: "\u2208",
    Iuml: "\u00CF",
    iuml: "\u00EF",
    Kappa: "\u039A",
    kappa: "\u03BA",
    Lambda: "\u039B",
    lambda: "\u03BB",
    lang: "\u27E8",
    laquo: "\u00AB",
    larr: "\u2190",
    lArr: "\u21D0",
    lceil: "\u2308",
    ldquo: "\u201C",
    le: "\u2264",
    lfloor: "\u230A",
    lowast: "\u2217",
    loz: "\u25CA",
    lrm: "\u200E",
    lsaquo: "\u2039",
    lsquo: "\u2018",
    lt: "<",
    macr: "\u00AF",
    mdash: "\u2014",
    micro: "\u00B5",
    middot: "\u00B7",
    minus: "\u2212",
    Mu: "\u039C",
    mu: "\u03BC",
    nabla: "\u2207",
    nbsp: "\u00A0",
    ndash: "\u2013",
    ne: "\u2260",
    ni: "\u220B",
    not: "\u00AC",
    notin: "\u2209",
    nsub: "\u2284",
    Ntilde: "\u00D1",
    ntilde: "\u00F1",
    Nu: "\u039D",
    nu: "\u03BD",
    Oacute: "\u00D3",
    oacute: "\u00F3",
    Ocirc: "\u00D4",
    ocirc: "\u00F4",
    OElig: "\u0152",
    oelig: "\u0153",
    Ograve: "\u00D2",
    ograve: "\u00F2",
    oline: "\u203E",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    oplus: "\u2295",
    or: "\u2228",
    ordf: "\u00AA",
    ordm: "\u00BA",
    Oslash: "\u00D8",
    oslash: "\u00F8",
    Otilde: "\u00D5",
    otilde: "\u00F5",
    otimes: "\u2297",
    Ouml: "\u00D6",
    ouml: "\u00F6",
    para: "\u00B6",
    permil: "\u2030",
    perp: "\u22A5",
    Phi: "\u03A6",
    phi: "\u03C6",
    Pi: "\u03A0",
    pi: "\u03C0",
    piv: "\u03D6",
    plusmn: "\u00B1",
    pound: "\u00A3",
    prime: "\u2032",
    Prime: "\u2033",
    prod: "\u220F",
    prop: "\u221D",
    Psi: "\u03A8",
    psi: "\u03C8",
    quot: "\u0022",
    radic: "\u221A",
    rang: "\u27E9",
    raquo: "\u00BB",
    rarr: "\u2192",
    rArr: "\u21D2",
    rceil: "\u2309",
    rdquo: "\u201D",
    real: "\u211C",
    reg: "\u00AE",
    rfloor: "\u230B",
    Rho: "\u03A1",
    rho: "\u03C1",
    rlm: "\u200F",
    rsaquo: "\u203A",
    rsquo: "\u2019",
    sbquo: "\u201A",
    Scaron: "\u0160",
    scaron: "\u0161",
    sdot: "\u22C5",
    sect: "\u00A7",
    shy: "\u00AD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sim: "\u223C",
    spades: "\u2660",
    sub: "\u2282",
    sube: "\u2286",
    sum: "\u2211",
    sup: "\u2283",
    sup1: "\u00B9",
    sup2: "\u00B2",
    sup3: "\u00B3",
    supe: "\u2287",
    szlig: "\u00DF",
    Tau: "\u03A4",
    tau: "\u03C4",
    there4: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thinsp: "\u2009",
    THORN: "\u00DE",
    thorn: "\u00FE",
    tilde: "\u02DC",
    times: "\u00D7",
    trade: "\u2122",
    Uacute: "\u00DA",
    uacute: "\u00FA",
    uarr: "\u2191",
    uArr: "\u21D1",
    Ucirc: "\u00DB",
    ucirc: "\u00FB",
    Ugrave: "\u00D9",
    ugrave: "\u00F9",
    uml: "\u00A8",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    Uuml: "\u00DC",
    uuml: "\u00FC",
    weierp: "\u2118",
    Xi: "\u039E",
    xi: "\u03BE",
    Yacute: "\u00DD",
    yacute: "\u00FD",
    yen: "\u00A5",
    yuml: "\u00FF",
    Yuml: "\u0178",
    Zeta: "\u0396",
    zeta: "\u03B6",
    zwj: "\u200D",
    zwnj: "\u200C"
};
// The &ngsp; pseudo-entity is denoting a space. see:
// https://github.com/dart-lang/angular/blob/0bb611387d29d65b5af7f9d2515ab571fd3fbee4/_tests/test/compiler/preserve_whitespace_test.dart
const /** @type {?} */ NGSP_UNICODE = "\uE500";
NAMED_ENTITIES["ngsp"] = NGSP_UNICODE;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const TokenType = {
    TAG_OPEN_START: 0,
    TAG_OPEN_END: 1,
    TAG_OPEN_END_VOID: 2,
    TAG_CLOSE: 3,
    TEXT: 4,
    ESCAPABLE_RAW_TEXT: 5,
    RAW_TEXT: 6,
    COMMENT_START: 7,
    COMMENT_END: 8,
    CDATA_START: 9,
    CDATA_END: 10,
    ATTR_NAME: 11,
    ATTR_VALUE: 12,
    DOC_TYPE: 13,
    EXPANSION_FORM_START: 14,
    EXPANSION_CASE_VALUE: 15,
    EXPANSION_CASE_EXP_START: 16,
    EXPANSION_CASE_EXP_END: 17,
    EXPANSION_FORM_END: 18,
    EOF: 19,
};
TokenType[TokenType.TAG_OPEN_START] = "TAG_OPEN_START";
TokenType[TokenType.TAG_OPEN_END] = "TAG_OPEN_END";
TokenType[TokenType.TAG_OPEN_END_VOID] = "TAG_OPEN_END_VOID";
TokenType[TokenType.TAG_CLOSE] = "TAG_CLOSE";
TokenType[TokenType.TEXT] = "TEXT";
TokenType[TokenType.ESCAPABLE_RAW_TEXT] = "ESCAPABLE_RAW_TEXT";
TokenType[TokenType.RAW_TEXT] = "RAW_TEXT";
TokenType[TokenType.COMMENT_START] = "COMMENT_START";
TokenType[TokenType.COMMENT_END] = "COMMENT_END";
TokenType[TokenType.CDATA_START] = "CDATA_START";
TokenType[TokenType.CDATA_END] = "CDATA_END";
TokenType[TokenType.ATTR_NAME] = "ATTR_NAME";
TokenType[TokenType.ATTR_VALUE] = "ATTR_VALUE";
TokenType[TokenType.DOC_TYPE] = "DOC_TYPE";
TokenType[TokenType.EXPANSION_FORM_START] = "EXPANSION_FORM_START";
TokenType[TokenType.EXPANSION_CASE_VALUE] = "EXPANSION_CASE_VALUE";
TokenType[TokenType.EXPANSION_CASE_EXP_START] = "EXPANSION_CASE_EXP_START";
TokenType[TokenType.EXPANSION_CASE_EXP_END] = "EXPANSION_CASE_EXP_END";
TokenType[TokenType.EXPANSION_FORM_END] = "EXPANSION_FORM_END";
TokenType[TokenType.EOF] = "EOF";
class Token {
    /**
     * @param {?} type
     * @param {?} parts
     * @param {?} sourceSpan
     */
    constructor(type, parts, sourceSpan) {
        this.type = type;
        this.parts = parts;
        this.sourceSpan = sourceSpan;
    }
}
class TokenError extends ParseError {
    /**
     * @param {?} errorMsg
     * @param {?} tokenType
     * @param {?} span
     */
    constructor(errorMsg, tokenType, span) {
        super(span, errorMsg);
        this.tokenType = tokenType;
    }
}
class TokenizeResult {
    /**
     * @param {?} tokens
     * @param {?} errors
     */
    constructor(tokens, errors) {
        this.tokens = tokens;
        this.errors = errors;
    }
}
/**
 * @param {?} source
 * @param {?} url
 * @param {?} getTagDefinition
 * @param {?=} tokenizeExpansionForms
 * @param {?=} interpolationConfig
 * @return {?}
 */
function tokenize(source, url, getTagDefinition, tokenizeExpansionForms = false, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
    return new Tokenizer(new ParseSourceFile(source, url), getTagDefinition, tokenizeExpansionForms, interpolationConfig).tokenize();
}
const /** @type {?} */ _CR_OR_CRLF_REGEXP = /\r\n?/g;
/**
 * @param {?} charCode
 * @return {?}
 */
function _unexpectedCharacterErrorMsg(charCode) {
    const /** @type {?} */ char = charCode === $EOF ? "EOF" : String.fromCharCode(charCode);
    return `Unexpected character "${char}"`;
}
/**
 * @param {?} entitySrc
 * @return {?}
 */
function _unknownEntityErrorMsg(entitySrc) {
    return `Unknown entity "${entitySrc}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
class ControlFlowError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
    }
}
class Tokenizer {
    /**
     * @param {?} _file The html source
     * @param {?} _getTagDefinition
     * @param {?} _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
     * @param {?=} _interpolationConfig
     */
    constructor(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        this._file = _file;
        this._getTagDefinition = _getTagDefinition;
        this._tokenizeIcu = _tokenizeIcu;
        this._interpolationConfig = _interpolationConfig;
        this._peek = -1;
        this._nextPeek = -1;
        this._index = -1;
        this._line = 0;
        this._column = -1;
        this._expansionCaseStack = [];
        this._inInterpolation = false;
        this.tokens = [];
        this.errors = [];
        this._input = _file.content;
        this._length = _file.content.length;
        this._advance();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    _processCarriageReturns(content) {
        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
        // In order to keep the original position in the source, we can not
        // pre-process it.
        // Instead CRs are processed right before instantiating the tokens.
        return content.replace(_CR_OR_CRLF_REGEXP, "\n");
    }
    /**
     * @return {?}
     */
    tokenize() {
        while (this._peek !== $EOF) {
            const /** @type {?} */ start = this._getLocation();
            try {
                if (this._attemptCharCode($LT)) {
                    if (this._attemptCharCode($BANG)) {
                        if (this._attemptCharCode($LBRACKET)) {
                            this._consumeCdata(start);
                        }
                        else if (this._attemptCharCode($MINUS)) {
                            this._consumeComment(start);
                        }
                        else {
                            this._consumeDocType(start);
                        }
                    }
                    else if (this._attemptCharCode($SLASH)) {
                        this._consumeTagClose(start);
                    }
                    else {
                        this._consumeTagOpen(start);
                    }
                }
                else if (!(this._tokenizeIcu && this._tokenizeExpansionForm())) {
                    this._consumeText();
                }
            }
            catch (/** @type {?} */ e) {
                if (e instanceof ControlFlowError) {
                    this.errors.push(e.error);
                }
                else {
                    throw e;
                }
            }
        }
        this._beginToken(TokenType.EOF);
        this._endToken([]);
        return new TokenizeResult(mergeTextTokens(this.tokens), this.errors);
    }
    /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    _tokenizeExpansionForm() {
        if (isExpansionFormStart(this._input, this._index, this._interpolationConfig)) {
            this._consumeExpansionFormStart();
            return true;
        }
        if (isExpansionCaseStart(this._peek) && this._isInExpansionForm()) {
            this._consumeExpansionCaseStart();
            return true;
        }
        if (this._peek === $RBRACE) {
            if (this._isInExpansionCase()) {
                this._consumeExpansionCaseEnd();
                return true;
            }
            if (this._isInExpansionForm()) {
                this._consumeExpansionFormEnd();
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    _getLocation() {
        return new ParseLocation(this._file, this._index, this._line, this._column);
    }
    /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    _getSpan(start = this._getLocation(), end = this._getLocation()) {
        return new ParseSourceSpan(start, end);
    }
    /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    _beginToken(type, start = this._getLocation()) {
        this._currentTokenStart = start;
        this._currentTokenType = type;
    }
    /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    _endToken(parts, end = this._getLocation()) {
        const /** @type {?} */ token = new Token(this._currentTokenType, parts, new ParseSourceSpan(this._currentTokenStart, end));
        this.tokens.push(token);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return token;
    }
    /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    _createError(msg, span) {
        if (this._isInExpansionForm()) {
            msg += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`;
        }
        const /** @type {?} */ error = new TokenError(msg, this._currentTokenType, span);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return new ControlFlowError(error);
    }
    /**
     * @return {?}
     */
    _advance() {
        if (this._index >= this._length) {
            throw this._createError(_unexpectedCharacterErrorMsg($EOF), this._getSpan());
        }
        if (this._peek === $LF) {
            this._line++;
            this._column = 0;
        }
        else if (this._peek !== $LF && this._peek !== $CR) {
            this._column++;
        }
        this._index++;
        this._peek = this._index >= this._length ? $EOF : this._input.charCodeAt(this._index);
        this._nextPeek = this._index + 1 >= this._length ? $EOF : this._input.charCodeAt(this._index + 1);
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _attemptCharCode(charCode) {
        if (this._peek === charCode) {
            this._advance();
            return true;
        }
        return false;
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _attemptCharCodeCaseInsensitive(charCode) {
        if (compareCharCodeCaseInsensitive(this._peek, charCode)) {
            this._advance();
            return true;
        }
        return false;
    }
    /**
     * @param {?} charCode
     * @return {?}
     */
    _requireCharCode(charCode) {
        const /** @type {?} */ location = this._getLocation();
        if (!this._attemptCharCode(charCode)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location, location));
        }
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _attemptStr(chars) {
        const /** @type {?} */ len = chars.length;
        if (this._index + len > this._length) {
            return false;
        }
        const /** @type {?} */ initialPosition = this._savePosition();
        for (let /** @type {?} */ i = 0; i < len; i++) {
            if (!this._attemptCharCode(chars.charCodeAt(i))) {
                // If attempting to parse the string fails, we want to reset the parser
                // to where it was before the attempt
                this._restorePosition(initialPosition);
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _attemptStrCaseInsensitive(chars) {
        for (let /** @type {?} */ i = 0; i < chars.length; i++) {
            if (!this._attemptCharCodeCaseInsensitive(chars.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} chars
     * @return {?}
     */
    _requireStr(chars) {
        const /** @type {?} */ location = this._getLocation();
        if (!this._attemptStr(chars)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location));
        }
    }
    /**
     * @param {?} predicate
     * @return {?}
     */
    _attemptCharCodeUntilFn(predicate) {
        while (!predicate(this._peek)) {
            this._advance();
        }
    }
    /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    _requireCharCodeUntilFn(predicate, len) {
        const /** @type {?} */ start = this._getLocation();
        this._attemptCharCodeUntilFn(predicate);
        if (this._index - start.offset < len) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(start, start));
        }
    }
    /**
     * @param {?} char
     * @return {?}
     */
    _attemptUntilChar(char) {
        while (this._peek !== char) {
            this._advance();
        }
    }
    /**
     * @param {?} decodeEntities
     * @return {?}
     */
    _readChar(decodeEntities) {
        if (decodeEntities && this._peek === $AMPERSAND) {
            return this._decodeEntity();
        }
        else {
            const /** @type {?} */ index = this._index;
            this._advance();
            return this._input[index];
        }
    }
    /**
     * @return {?}
     */
    _decodeEntity() {
        const /** @type {?} */ start = this._getLocation();
        this._advance();
        if (this._attemptCharCode($HASH)) {
            const /** @type {?} */ isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
            const /** @type {?} */ numberStart = this._getLocation().offset;
            this._attemptCharCodeUntilFn(isDigitEntityEnd);
            if (this._peek !== $SEMICOLON) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            this._advance();
            const /** @type {?} */ strNum = this._input.substring(numberStart, this._index - 1);
            try {
                const /** @type {?} */ charCode = parseInt(strNum, isHex ? 16 : 10);
                return String.fromCharCode(charCode);
            }
            catch (/** @type {?} */ e) {
                const /** @type {?} */ entity = this._input.substring(start.offset + 1, this._index - 1);
                throw this._createError(_unknownEntityErrorMsg(entity), this._getSpan(start));
            }
        }
        else {
            const /** @type {?} */ startPosition = this._savePosition();
            this._attemptCharCodeUntilFn(isNamedEntityEnd);
            if (this._peek !== $SEMICOLON) {
                this._restorePosition(startPosition);
                return "&";
            }
            this._advance();
            const /** @type {?} */ name = this._input.substring(start.offset + 1, this._index - 1);
            const /** @type {?} */ char = NAMED_ENTITIES[name];
            if (!char) {
                throw this._createError(_unknownEntityErrorMsg(name), this._getSpan(start));
            }
            return char;
        }
    }
    /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    _consumeRawText(decodeEntities, firstCharOfEnd, attemptEndRest) {
        let /** @type {?} */ tagCloseStart;
        const /** @type {?} */ textStart = this._getLocation();
        this._beginToken(decodeEntities ? TokenType.ESCAPABLE_RAW_TEXT : TokenType.RAW_TEXT, textStart);
        const /** @type {?} */ parts = [];
        while (true) {
            tagCloseStart = this._getLocation();
            if (this._attemptCharCode(firstCharOfEnd) && attemptEndRest()) {
                break;
            }
            if (this._index > tagCloseStart.offset) {
                // add the characters consumed by the previous if statement to the output
                parts.push(this._input.substring(tagCloseStart.offset, this._index));
            }
            while (this._peek !== firstCharOfEnd) {
                parts.push(this._readChar(decodeEntities));
            }
        }
        return this._endToken([this._processCarriageReturns(parts.join(""))], tagCloseStart);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeComment(start) {
        this._beginToken(TokenType.COMMENT_START, start);
        this._requireCharCode($MINUS);
        this._endToken([]);
        const /** @type {?} */ textToken = this._consumeRawText(false, $MINUS, () => this._attemptStr("->"));
        this._beginToken(TokenType.COMMENT_END, textToken.sourceSpan.end);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeCdata(start) {
        this._beginToken(TokenType.CDATA_START, start);
        this._requireStr("CDATA[");
        this._endToken([]);
        const /** @type {?} */ textToken = this._consumeRawText(false, $RBRACKET, () => this._attemptStr("]>"));
        this._beginToken(TokenType.CDATA_END, textToken.sourceSpan.end);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeDocType(start) {
        this._beginToken(TokenType.DOC_TYPE, start);
        this._attemptUntilChar($GT);
        this._advance();
        this._endToken([this._input.substring(start.offset + 2, this._index - 1)]);
    }
    /**
     * @return {?}
     */
    _consumePrefixAndName() {
        const /** @type {?} */ nameOrPrefixStart = this._index;
        let /** @type {?} */ prefix = /** @type {?} */ ((null));
        while (this._peek !== $COLON && !isPrefixEnd(this._peek)) {
            this._advance();
        }
        let /** @type {?} */ nameStart;
        if (this._peek === $COLON) {
            this._advance();
            prefix = this._input.substring(nameOrPrefixStart, this._index - 1);
            nameStart = this._index;
        }
        else {
            nameStart = nameOrPrefixStart;
        }
        this._requireCharCodeUntilFn(isNameEnd, this._index === nameStart ? 1 : 0);
        const /** @type {?} */ name = this._input.substring(nameStart, this._index);
        return [prefix, name];
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagOpen(start) {
        const /** @type {?} */ savedPos = this._savePosition();
        let /** @type {?} */ tagName;
        let /** @type {?} */ lowercaseTagName;
        try {
            if (!isAsciiLetter(this._peek)) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            const /** @type {?} */ nameStart = this._index;
            this._consumeTagOpenStart(start);
            tagName = this._input.substring(nameStart, this._index);
            lowercaseTagName = tagName.toLowerCase();
            this._attemptCharCodeUntilFn(isNotWhitespace);
            while (this._peek !== $SLASH && this._peek !== $GT) {
                this._consumeAttributeName();
                this._attemptCharCodeUntilFn(isNotWhitespace);
                if (this._attemptCharCode($EQ)) {
                    this._attemptCharCodeUntilFn(isNotWhitespace);
                    this._consumeAttributeValue();
                }
                this._attemptCharCodeUntilFn(isNotWhitespace);
            }
            this._consumeTagOpenEnd();
        }
        catch (/** @type {?} */ e) {
            if (e instanceof ControlFlowError) {
                // When the start tag is invalid, assume we want a "<"
                this._restorePosition(savedPos);
                // Back to back text tokens are merged at the end
                this._beginToken(TokenType.TEXT, start);
                this._endToken(["<"]);
                return;
            }
            throw e;
        }
        const /** @type {?} */ contentTokenType = this._getTagDefinition(tagName).contentType;
        if (contentTokenType === TagContentType.RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, false);
        }
        else if (contentTokenType === TagContentType.ESCAPABLE_RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, true);
        }
    }
    /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    _consumeRawTextWithTagClose(lowercaseTagName, decodeEntities) {
        const /** @type {?} */ textToken = this._consumeRawText(decodeEntities, $LT, () => {
            if (!this._attemptCharCode($SLASH))
                return false;
            this._attemptCharCodeUntilFn(isNotWhitespace);
            if (!this._attemptStrCaseInsensitive(lowercaseTagName))
                return false;
            this._attemptCharCodeUntilFn(isNotWhitespace);
            return this._attemptCharCode($GT);
        });
        this._beginToken(TokenType.TAG_CLOSE, textToken.sourceSpan.end);
        this._endToken([/** @type {?} */ ((null)), lowercaseTagName]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagOpenStart(start) {
        this._beginToken(TokenType.TAG_OPEN_START, start);
        const /** @type {?} */ parts = this._consumePrefixAndName();
        this._endToken(parts);
    }
    /**
     * @return {?}
     */
    _consumeAttributeName() {
        this._beginToken(TokenType.ATTR_NAME);
        const /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._endToken(prefixAndName);
    }
    /**
     * @return {?}
     */
    _consumeAttributeValue() {
        this._beginToken(TokenType.ATTR_VALUE);
        let /** @type {?} */ value;
        if (this._peek === $SQ || this._peek === $DQ) {
            const /** @type {?} */ quoteChar = this._peek;
            this._advance();
            const /** @type {?} */ parts = [];
            while (this._peek !== quoteChar) {
                parts.push(this._readChar(true));
            }
            value = parts.join("");
            this._advance();
        }
        else {
            const /** @type {?} */ valueStart = this._index;
            this._requireCharCodeUntilFn(isNameEnd, 1);
            value = this._input.substring(valueStart, this._index);
        }
        this._endToken([this._processCarriageReturns(value)]);
    }
    /**
     * @return {?}
     */
    _consumeTagOpenEnd() {
        const /** @type {?} */ tokenType = this._attemptCharCode($SLASH) ? TokenType.TAG_OPEN_END_VOID : TokenType.TAG_OPEN_END;
        this._beginToken(tokenType);
        this._requireCharCode($GT);
        this._endToken([]);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _consumeTagClose(start) {
        this._beginToken(TokenType.TAG_CLOSE, start);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        const /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._requireCharCode($GT);
        this._endToken(prefixAndName);
    }
    /**
     * @return {?}
     */
    _consumeExpansionFormStart() {
        this._beginToken(TokenType.EXPANSION_FORM_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([]);
        this._expansionCaseStack.push(TokenType.EXPANSION_FORM_START);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        const /** @type {?} */ condition = this._readUntil($COMMA);
        this._endToken([condition], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        const /** @type {?} */ type = this._readUntil($COMMA);
        this._endToken([type], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
    }
    /**
     * @return {?}
     */
    _consumeExpansionCaseStart() {
        this._beginToken(TokenType.EXPANSION_CASE_VALUE, this._getLocation());
        const /** @type {?} */ value = this._readUntil($LBRACE).trim();
        this._endToken([value], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.EXPANSION_CASE_EXP_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.push(TokenType.EXPANSION_CASE_EXP_START);
    }
    /**
     * @return {?}
     */
    _consumeExpansionCaseEnd() {
        this._beginToken(TokenType.EXPANSION_CASE_EXP_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.pop();
    }
    /**
     * @return {?}
     */
    _consumeExpansionFormEnd() {
        this._beginToken(TokenType.EXPANSION_FORM_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([]);
        this._expansionCaseStack.pop();
    }
    /**
     * @return {?}
     */
    _consumeText() {
        const /** @type {?} */ start = this._getLocation();
        this._beginToken(TokenType.TEXT, start);
        const /** @type {?} */ parts = [];
        do {
            if (this._interpolationConfig && this._attemptStr(this._interpolationConfig.start)) {
                parts.push(this._interpolationConfig.start);
                this._inInterpolation = true;
            }
            else if (this._interpolationConfig &&
                this._inInterpolation &&
                this._attemptStr(this._interpolationConfig.end)) {
                parts.push(this._interpolationConfig.end);
                this._inInterpolation = false;
            }
            else {
                parts.push(this._readChar(true));
            }
        } while (!this._isTextEnd());
        this._endToken([this._processCarriageReturns(parts.join(""))]);
    }
    /**
     * @return {?}
     */
    _isTextEnd() {
        if (this._peek === $LT || this._peek === $EOF) {
            return true;
        }
        if (this._tokenizeIcu && !this._inInterpolation) {
            if (isExpansionFormStart(this._input, this._index, this._interpolationConfig)) {
                // start of an expansion form
                return true;
            }
            if (this._peek === $RBRACE && this._isInExpansionCase()) {
                // end of and expansion case
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    _savePosition() {
        return [this._peek, this._index, this._column, this._line, this.tokens.length];
    }
    /**
     * @param {?} char
     * @return {?}
     */
    _readUntil(char) {
        const /** @type {?} */ start = this._index;
        this._attemptUntilChar(char);
        return this._input.substring(start, this._index);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _restorePosition(position) {
        this._peek = position[0];
        this._index = position[1];
        this._column = position[2];
        this._line = position[3];
        const /** @type {?} */ nbTokens = position[4];
        if (nbTokens < this.tokens.length) {
            // remove any extra tokens
            this.tokens = this.tokens.slice(0, nbTokens);
        }
    }
    /**
     * @return {?}
     */
    _isInExpansionCase() {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_CASE_EXP_START);
    }
    /**
     * @return {?}
     */
    _isInExpansionForm() {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_FORM_START);
    }
}
/**
 * @param {?} code
 * @return {?}
 */
function isNotWhitespace(code) {
    return !isWhitespace(code) || code === $EOF;
}
/**
 * @param {?} code
 * @return {?}
 */
function isNameEnd(code) {
    return (isWhitespace(code) ||
        code === $GT ||
        code === $SLASH ||
        code === $SQ ||
        code === $DQ ||
        code === $EQ);
}
/**
 * @param {?} code
 * @return {?}
 */
function isPrefixEnd(code) {
    return ((code < $a || $z < code) && (code < $A || $Z < code) && (code < $0 || code > $9));
}
/**
 * @param {?} code
 * @return {?}
 */
function isDigitEntityEnd(code) {
    return code === $SEMICOLON || code === $EOF || !isAsciiHexDigit(code);
}
/**
 * @param {?} code
 * @return {?}
 */
function isNamedEntityEnd(code) {
    return code === $SEMICOLON || code === $EOF || !isAsciiLetter(code);
}
/**
 * @param {?} input
 * @param {?} offset
 * @param {?} interpolationConfig
 * @return {?}
 */
function isExpansionFormStart(input, offset, interpolationConfig) {
    const /** @type {?} */ isInterpolationStart = interpolationConfig
        ? input.indexOf(interpolationConfig.start, offset) === offset
        : false;
    return input.charCodeAt(offset) === $LBRACE && !isInterpolationStart;
}
/**
 * @param {?} peek
 * @return {?}
 */
function isExpansionCaseStart(peek) {
    return peek === $EQ || isAsciiLetter(peek) || isDigit(peek);
}
/**
 * @param {?} code1
 * @param {?} code2
 * @return {?}
 */
function compareCharCodeCaseInsensitive(code1, code2) {
    return toUpperCaseCharCode(code1) === toUpperCaseCharCode(code2);
}
/**
 * @param {?} code
 * @return {?}
 */
function toUpperCaseCharCode(code) {
    return code >= $a && code <= $z ? code - $a + $A : code;
}
/**
 * @param {?} srcTokens
 * @return {?}
 */
function mergeTextTokens(srcTokens) {
    const /** @type {?} */ dstTokens = [];
    let /** @type {?} */ lastDstToken = undefined;
    for (let /** @type {?} */ i = 0; i < srcTokens.length; i++) {
        const /** @type {?} */ token = srcTokens[i];
        if (lastDstToken && lastDstToken.type === TokenType.TEXT && token.type === TokenType.TEXT) {
            lastDstToken.parts[0] += token.parts[0];
            lastDstToken.sourceSpan.end = token.sourceSpan.end;
        }
        else {
            lastDstToken = token;
            dstTokens.push(lastDstToken);
        }
    }
    return dstTokens;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TreeError extends ParseError {
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     */
    constructor(elementName, span, msg) {
        super(span, msg);
        this.elementName = elementName;
    }
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    static create(elementName, span, msg) {
        return new TreeError(elementName, span, msg);
    }
}
class ParseTreeResult {
    /**
     * @param {?} rootNodes
     * @param {?} errors
     */
    constructor(rootNodes, errors) {
        this.rootNodes = rootNodes;
        this.errors = errors;
    }
}
class Parser {
    /**
     * @param {?} getTagDefinition
     */
    constructor(getTagDefinition) {
        this.getTagDefinition = getTagDefinition;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parse(source, url, parseExpansionForms = false, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
        const /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
        return new ParseTreeResult(treeAndErrors.rootNodes, (/** @type {?} */ (tokensAndErrors.errors)).concat(treeAndErrors.errors));
    }
}
class _TreeBuilder {
    /**
     * @param {?} tokens
     * @param {?} getTagDefinition
     */
    constructor(tokens, getTagDefinition) {
        this.tokens = tokens;
        this.getTagDefinition = getTagDefinition;
        this._index = -1;
        this._rootNodes = [];
        this._errors = [];
        this._elementStack = [];
        this._advance();
    }
    /**
     * @return {?}
     */
    build() {
        while (this._peek.type !== TokenType.EOF) {
            if (this._peek.type === TokenType.TAG_OPEN_START) {
                this._consumeStartTag(this._advance());
            }
            else if (this._peek.type === TokenType.TAG_CLOSE) {
                this._consumeEndTag(this._advance());
            }
            else if (this._peek.type === TokenType.CDATA_START) {
                this._closeVoidElement();
                this._consumeCdata(this._advance());
            }
            else if (this._peek.type === TokenType.COMMENT_START) {
                this._closeVoidElement();
                this._consumeComment(this._advance());
            }
            else if (this._peek.type === TokenType.TEXT ||
                this._peek.type === TokenType.RAW_TEXT ||
                this._peek.type === TokenType.ESCAPABLE_RAW_TEXT) {
                this._closeVoidElement();
                this._consumeText(this._advance());
            }
            else if (this._peek.type === TokenType.EXPANSION_FORM_START) {
                this._consumeExpansion(this._advance());
            }
            else {
                // Skip all other tokens...
                this._advance();
            }
        }
        return new ParseTreeResult(this._rootNodes, this._errors);
    }
    /**
     * @return {?}
     */
    _advance() {
        const /** @type {?} */ prev = this._peek;
        if (this._index < this.tokens.length - 1) {
            // Note: there is always an EOF token at the end
            this._index++;
        }
        this._peek = this.tokens[this._index];
        return prev;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    _advanceIf(type) {
        if (this._peek.type === type) {
            return this._advance();
        }
        return null;
    }
    /**
     * @param {?} startToken
     * @return {?}
     */
    _consumeCdata(startToken) {
        this._consumeText(this._advance());
        this._advanceIf(TokenType.CDATA_END);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeComment(token) {
        const /** @type {?} */ text = this._advanceIf(TokenType.RAW_TEXT);
        this._advanceIf(TokenType.COMMENT_END);
        const /** @type {?} */ value = text !== null ? text.parts[0].trim() : null;
        this._addToParent(new Comment(value, token.sourceSpan));
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeExpansion(token) {
        const /** @type {?} */ switchValue = this._advance();
        const /** @type {?} */ type = this._advance();
        const /** @type {?} */ cases = [];
        // read =
        while (this._peek.type === TokenType.EXPANSION_CASE_VALUE) {
            const /** @type {?} */ expCase = this._parseExpansionCase();
            if (!expCase) {
                return;
            } // error
            cases.push(expCase);
        }
        // read the final }
        if (this._peek.type !== TokenType.EXPANSION_FORM_END) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, `Invalid ICU message. Missing '}'.`));
            return;
        }
        const /** @type {?} */ sourceSpan = new ParseSourceSpan(token.sourceSpan.start, this._peek.sourceSpan.end);
        this._addToParent(new Expansion(switchValue.parts[0], type.parts[0], cases, sourceSpan, switchValue.sourceSpan));
        this._advance();
    }
    /**
     * @return {?}
     */
    _parseExpansionCase() {
        const /** @type {?} */ value = this._advance();
        // read {
        if (this._peek.type !== TokenType.EXPANSION_CASE_EXP_START) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, `Invalid ICU message. Missing '{'.`));
            return null;
        }
        // read until }
        const /** @type {?} */ start = this._advance();
        const /** @type {?} */ exp = this._collectExpansionExpTokens(start);
        if (!exp) {
            return null;
        }
        const /** @type {?} */ end = this._advance();
        exp.push(new Token(TokenType.EOF, [], end.sourceSpan));
        // parse everything in between { and }
        const /** @type {?} */ parsedExp = new _TreeBuilder(exp, this.getTagDefinition).build();
        if (parsedExp.errors.length > 0) {
            this._errors = this._errors.concat(/** @type {?} */ (parsedExp.errors));
            return null;
        }
        const /** @type {?} */ sourceSpan = new ParseSourceSpan(value.sourceSpan.start, end.sourceSpan.end);
        const /** @type {?} */ expSourceSpan = new ParseSourceSpan(start.sourceSpan.start, end.sourceSpan.end);
        return new ExpansionCase(value.parts[0], parsedExp.rootNodes, sourceSpan, value.sourceSpan, expSourceSpan);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    _collectExpansionExpTokens(start) {
        const /** @type {?} */ exp = [];
        const /** @type {?} */ expansionFormStack = [TokenType.EXPANSION_CASE_EXP_START];
        while (true) {
            if (this._peek.type === TokenType.EXPANSION_FORM_START ||
                this._peek.type === TokenType.EXPANSION_CASE_EXP_START) {
                expansionFormStack.push(this._peek.type);
            }
            if (this._peek.type === TokenType.EXPANSION_CASE_EXP_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_CASE_EXP_START)) {
                    expansionFormStack.pop();
                    if (expansionFormStack.length === 0) {
                        return exp;
                    }
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EXPANSION_FORM_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_FORM_START)) {
                    expansionFormStack.pop();
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EOF) {
                this._errors.push(TreeError.create(null, start.sourceSpan, `Invalid ICU message. Missing '}'.`));
                return null;
            }
            exp.push(this._advance());
        }
    }
    /**
     * @param {?} token
     * @return {?}
     */
    _consumeText(token) {
        let /** @type {?} */ text = token.parts[0];
        if (text.length > 0 && text[0] === "\n") {
            const /** @type {?} */ parent = this._getParentElement();
            if (parent !== null && parent.children.length === 0 && this.getTagDefinition(parent.name).ignoreFirstLf) {
                text = text.substring(1);
            }
        }
        if (text.length > 0) {
            this._addToParent(new Text(text, token.sourceSpan));
        }
    }
    /**
     * @return {?}
     */
    _closeVoidElement() {
        const /** @type {?} */ el = this._getParentElement();
        if (el && this.getTagDefinition(el.name).isVoid) {
            this._elementStack.pop();
        }
    }
    /**
     * @param {?} startTagToken
     * @return {?}
     */
    _consumeStartTag(startTagToken) {
        const /** @type {?} */ prefix = startTagToken.parts[0];
        const /** @type {?} */ name = startTagToken.parts[1];
        const /** @type {?} */ attrs = [];
        while (this._peek.type === TokenType.ATTR_NAME) {
            attrs.push(this._consumeAttr(this._advance()));
        }
        const /** @type {?} */ fullName = this._getElementFullName(prefix, name, this._getParentElement());
        let /** @type {?} */ selfClosing = false;
        // Note: There could have been a tokenizer error
        // so that we don't get a token for the end tag...
        if (this._peek.type === TokenType.TAG_OPEN_END_VOID) {
            this._advance();
            selfClosing = true;
            const /** @type {?} */ tagDef = this.getTagDefinition(fullName);
            if (!(tagDef.canSelfClose || getNsPrefix(fullName) !== null || tagDef.isVoid)) {
                this._errors.push(TreeError.create(fullName, startTagToken.sourceSpan, `Only void and foreign elements can be self closed "${startTagToken.parts[1]}"`));
            }
        }
        else if (this._peek.type === TokenType.TAG_OPEN_END) {
            this._advance();
            selfClosing = false;
        }
        const /** @type {?} */ end = this._peek.sourceSpan.start;
        const /** @type {?} */ span = new ParseSourceSpan(startTagToken.sourceSpan.start, end);
        const /** @type {?} */ el = new Element(fullName, attrs, [], span, span, undefined);
        this._pushElement(el);
        if (selfClosing) {
            this._popElement(fullName);
            el.endSourceSpan = span;
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    _pushElement(el) {
        const /** @type {?} */ parentEl = this._getParentElement();
        if (parentEl && this.getTagDefinition(parentEl.name).isClosedByChild(el.name)) {
            this._elementStack.pop();
        }
        const /** @type {?} */ tagDef = this.getTagDefinition(el.name);
        const { parent, container } = this._getParentElementSkippingContainers();
        if (parent && tagDef.requireExtraParent(parent.name)) {
            const /** @type {?} */ newParent = new Element(tagDef.parentToAdd, [], [], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
            this._insertBeforeContainer(parent, container, newParent);
        }
        this._addToParent(el);
        this._elementStack.push(el);
    }
    /**
     * @param {?} endTagToken
     * @return {?}
     */
    _consumeEndTag(endTagToken) {
        const /** @type {?} */ fullName = this._getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
        if (this._getParentElement()) {
            /** @type {?} */ ((this._getParentElement())).endSourceSpan = endTagToken.sourceSpan;
        }
        if (this.getTagDefinition(fullName).isVoid) {
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, `Void elements do not have end tags "${endTagToken.parts[1]}"`));
        }
        else if (!this._popElement(fullName)) {
            const /** @type {?} */ errMsg = `Unexpected closing tag "${fullName}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, errMsg));
        }
    }
    /**
     * @param {?} fullName
     * @return {?}
     */
    _popElement(fullName) {
        for (let /** @type {?} */ stackIndex = this._elementStack.length - 1; stackIndex >= 0; stackIndex--) {
            const /** @type {?} */ el = this._elementStack[stackIndex];
            if (el.name === fullName) {
                this._elementStack.splice(stackIndex, this._elementStack.length - stackIndex);
                return true;
            }
            if (!this.getTagDefinition(el.name).closedByParent) {
                return false;
            }
        }
        return false;
    }
    /**
     * @param {?} attrName
     * @return {?}
     */
    _consumeAttr(attrName) {
        const /** @type {?} */ fullName = mergeNsAndName(attrName.parts[0], attrName.parts[1]);
        let /** @type {?} */ end = attrName.sourceSpan.end;
        let /** @type {?} */ value = "";
        let /** @type {?} */ valueSpan = /** @type {?} */ ((undefined));
        if (this._peek.type === TokenType.ATTR_VALUE) {
            const /** @type {?} */ valueToken = this._advance();
            value = valueToken.parts[0];
            end = valueToken.sourceSpan.end;
            valueSpan = valueToken.sourceSpan;
        }
        return new Attribute(fullName, value, new ParseSourceSpan(attrName.sourceSpan.start, end), valueSpan);
    }
    /**
     * @return {?}
     */
    _getParentElement() {
        return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
    }
    /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    _getParentElementSkippingContainers() {
        let /** @type {?} */ container = null;
        for (let /** @type {?} */ i = this._elementStack.length - 1; i >= 0; i--) {
            if (!isNgContainer(this._elementStack[i].name)) {
                return { parent: this._elementStack[i], container };
            }
            container = this._elementStack[i];
        }
        return { parent: null, container };
    }
    /**
     * @param {?} node
     * @return {?}
     */
    _addToParent(node) {
        const /** @type {?} */ parent = this._getParentElement();
        if (parent !== null) {
            parent.children.push(node);
        }
        else {
            this._rootNodes.push(node);
        }
    }
    /**
     * Insert a node between the parent and the container.
     * When no container is given, the node is appended as a child of the parent.
     * Also updates the element stack accordingly.
     *
     * \@internal
     * @param {?} parent
     * @param {?} container
     * @param {?} node
     * @return {?}
     */
    _insertBeforeContainer(parent, container, node) {
        if (!container) {
            this._addToParent(node);
            this._elementStack.push(node);
        }
        else {
            if (parent) {
                // replace the container with the new node in the children
                const /** @type {?} */ index = parent.children.indexOf(container);
                parent.children[index] = node;
            }
            else {
                this._rootNodes.push(node);
            }
            node.children.push(container);
            this._elementStack.splice(this._elementStack.indexOf(container), 0, node);
        }
    }
    /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    _getElementFullName(prefix, localName, parentElement) {
        if (prefix === null) {
            prefix = /** @type {?} */ ((this.getTagDefinition(localName).implicitNamespacePrefix));
            if (prefix === null && parentElement !== null) {
                prefix = getNsPrefix(parentElement.name);
            }
        }
        return mergeNsAndName(prefix, localName);
    }
}
/**
 * @param {?} stack
 * @param {?} element
 * @return {?}
 */
function lastOnStack(stack, element) {
    return stack.length > 0 && stack[stack.length - 1] === element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class XmlTagDefinition {
    constructor() {
        this.closedByParent = false;
        this.contentType = TagContentType.PARSABLE_DATA;
        this.isVoid = false;
        this.ignoreFirstLf = false;
        this.canSelfClose = true;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    requireExtraParent(currentParent) {
        return false;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isClosedByChild(name) {
        return false;
    }
}
const /** @type {?} */ _TAG_DEFINITION = new XmlTagDefinition();
/**
 * @param {?} tagName
 * @return {?}
 */
function getXmlTagDefinition(tagName) {
    return _TAG_DEFINITION;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HtmlTagDefinition {
    /**
     * @param {?=} __0
     */
    constructor({ closedByChildren, requiredParents, implicitNamespacePrefix, contentType = TagContentType.PARSABLE_DATA, closedByParent = false, isVoid = false, ignoreFirstLf = false } = {}) {
        this.closedByChildren = {};
        this.closedByParent = false;
        this.canSelfClose = false;
        if (closedByChildren && closedByChildren.length > 0) {
            closedByChildren.forEach(tagName => this.closedByChildren[tagName] = true);
        }
        this.isVoid = isVoid;
        this.closedByParent = closedByParent || isVoid;
        if (requiredParents && requiredParents.length > 0) {
            this.requiredParents = {};
            // The first parent is the list is automatically when none of the listed parents are present
            this.parentToAdd = requiredParents[0];
            requiredParents.forEach(tagName => this.requiredParents[tagName] = true);
        }
        this.implicitNamespacePrefix = implicitNamespacePrefix || null;
        this.contentType = contentType;
        this.ignoreFirstLf = ignoreFirstLf;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    requireExtraParent(currentParent) {
        if (!this.requiredParents) {
            return false;
        }
        if (!currentParent) {
            return true;
        }
        const /** @type {?} */ lcParent = currentParent.toLowerCase();
        const /** @type {?} */ isParentTemplate = lcParent === 'template' || currentParent === 'ng-template';
        return !isParentTemplate && this.requiredParents[lcParent] !== true;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isClosedByChild(name) {
        return this.isVoid || name.toLowerCase() in this.closedByChildren;
    }
}
// see http://www.w3.org/TR/html51/syntax.html#optional-tags
// This implementation does not fully conform to the HTML5 spec.
const /** @type {?} */ TAG_DEFINITIONS = {
    'base': new HtmlTagDefinition({ isVoid: true }),
    'meta': new HtmlTagDefinition({ isVoid: true }),
    'area': new HtmlTagDefinition({ isVoid: true }),
    'embed': new HtmlTagDefinition({ isVoid: true }),
    'link': new HtmlTagDefinition({ isVoid: true }),
    'img': new HtmlTagDefinition({ isVoid: true }),
    'input': new HtmlTagDefinition({ isVoid: true }),
    'param': new HtmlTagDefinition({ isVoid: true }),
    'hr': new HtmlTagDefinition({ isVoid: true }),
    'br': new HtmlTagDefinition({ isVoid: true }),
    'source': new HtmlTagDefinition({ isVoid: true }),
    'track': new HtmlTagDefinition({ isVoid: true }),
    'wbr': new HtmlTagDefinition({ isVoid: true }),
    'p': new HtmlTagDefinition({
        closedByChildren: [
            'address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset', 'footer', 'form',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr',
            'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'
        ],
        closedByParent: true
    }),
    'thead': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'] }),
    'tbody': new HtmlTagDefinition({ closedByChildren: ['tbody', 'tfoot'], closedByParent: true }),
    'tfoot': new HtmlTagDefinition({ closedByChildren: ['tbody'], closedByParent: true }),
    'tr': new HtmlTagDefinition({
        closedByChildren: ['tr'],
        requiredParents: ['tbody', 'tfoot', 'thead'],
        closedByParent: true
    }),
    'td': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
    'th': new HtmlTagDefinition({ closedByChildren: ['td', 'th'], closedByParent: true }),
    'col': new HtmlTagDefinition({ requiredParents: ['colgroup'], isVoid: true }),
    'svg': new HtmlTagDefinition({ implicitNamespacePrefix: 'svg' }),
    'math': new HtmlTagDefinition({ implicitNamespacePrefix: 'math' }),
    'li': new HtmlTagDefinition({ closedByChildren: ['li'], closedByParent: true }),
    'dt': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'] }),
    'dd': new HtmlTagDefinition({ closedByChildren: ['dt', 'dd'], closedByParent: true }),
    'rb': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'rt': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'rtc': new HtmlTagDefinition({ closedByChildren: ['rb', 'rtc', 'rp'], closedByParent: true }),
    'rp': new HtmlTagDefinition({ closedByChildren: ['rb', 'rt', 'rtc', 'rp'], closedByParent: true }),
    'optgroup': new HtmlTagDefinition({ closedByChildren: ['optgroup'], closedByParent: true }),
    'option': new HtmlTagDefinition({ closedByChildren: ['option', 'optgroup'], closedByParent: true }),
    'pre': new HtmlTagDefinition({ ignoreFirstLf: true }),
    'listing': new HtmlTagDefinition({ ignoreFirstLf: true }),
    'style': new HtmlTagDefinition({ contentType: TagContentType.RAW_TEXT }),
    'script': new HtmlTagDefinition({ contentType: TagContentType.RAW_TEXT }),
    'title': new HtmlTagDefinition({ contentType: TagContentType.ESCAPABLE_RAW_TEXT }),
    'textarea': new HtmlTagDefinition({ contentType: TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }),
};
const /** @type {?} */ _DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
/**
 * @param {?} tagName
 * @return {?}
 */
function getHtmlTagDefinition(tagName) {
    return TAG_DEFINITIONS[tagName.toLowerCase()] || _DEFAULT_TAG_DEFINITION;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A simple mapper that take a function to transform an internal name to a public name
 */
class SimplePlaceholderMapper extends RecurseVisitor {
    /**
     * @param {?} message
     * @param {?} mapName
     */
    constructor(message, mapName) {
        super();
        this.mapName = mapName;
        this.internalToPublic = {};
        this.publicToNextId = {};
        this.publicToInternal = {};
        message.nodes.forEach(node => node.visit(this));
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    toPublicName(internalName) {
        return this.internalToPublic.hasOwnProperty(internalName) ? this.internalToPublic[internalName] : null;
    }
    /**
     * @param {?} publicName
     * @return {?}
     */
    toInternalName(publicName) {
        return this.publicToInternal.hasOwnProperty(publicName) ? this.publicToInternal[publicName] : null;
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) {
        return null;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.startName);
        super.visitTagPlaceholder(ph, context);
        this.visitPlaceholderName(ph.closeName);
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.name);
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        this.visitPlaceholderName(ph.name);
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    visitPlaceholderName(internalName) {
        if (!internalName || this.internalToPublic.hasOwnProperty(internalName)) {
            return;
        }
        let /** @type {?} */ publicName = this.mapName(internalName);
        if (this.publicToInternal.hasOwnProperty(publicName)) {
            // Create a new XMB when it has already been used
            const /** @type {?} */ nextId = this.publicToNextId[publicName];
            this.publicToNextId[publicName] = nextId + 1;
            publicName = `${publicName}_${nextId}`;
        }
        else {
            this.publicToNextId[publicName] = 1;
        }
        this.internalToPublic[internalName] = publicName;
        this.publicToInternal[publicName] = internalName;
    }
}
const /** @type {?} */ i18nSelectPipe = new I18nSelectPipe();
class SerializerVisitor {
    /**
     * @param {?} locale
     * @param {?} params
     */
    constructor(locale, params) {
        this.params = params;
        this.i18nPluralPipe = new I18nPluralPipe(new NgLocaleLocalization(locale));
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        if (getHtmlTagDefinition(element.name).isVoid) {
            return `<${element.name}${this.serializeNodes(element.attrs, " ")}/>`;
        }
        return `<${element.name}${this.serializeNodes(element.attrs, " ")}>${this.serializeNodes(element.children)}</${element.name}>`;
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        return `${attribute.name}="${attribute.value}"`;
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return `<!--${comment.value}-->`;
    }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) {
        const /** @type {?} */ cases = {};
        expansion.cases.forEach(c => (cases[c.value] = this.serializeNodes(c.expression)));
        switch (expansion.type) {
            case "select":
                return i18nSelectPipe.transform(this.params[expansion.switchValue] || "", cases);
            case "plural":
                return this.i18nPluralPipe.transform(this.params[expansion.switchValue], cases);
        }
        throw new Error(`Unknown expansion type "${expansion.type}"`);
    }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) {
        return ` ${expansionCase.value} {${this.serializeNodes(expansionCase.expression)}}`;
    }
    /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    serializeNodes(nodes, join = "") {
        if (nodes.length === 0) {
            return "";
        }
        return join + nodes.map(a => a.visit(this, null)).join(join);
    }
}
/**
 * @param {?} nodes
 * @param {?} locale
 * @param {?} params
 * @return {?}
 */
function serializeNodes(nodes, locale, params) {
    return nodes.map(node => node.visit(new SerializerVisitor(locale, params), null));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} message
 * @return {?}
 */
function digest(message) {
    return message.id || sha1(serializeNodes$1(message.nodes).join("") + `[${message.meaning}]`);
}
/**
 * @param {?} message
 * @return {?}
 */
function decimalDigest(message) {
    if (message.id) {
        return message.id;
    }
    const /** @type {?} */ visitor = new SerializerIgnoreIcuExpVisitor();
    const /** @type {?} */ parts = message.nodes.map(a => a.visit(visitor, null));
    return computeMsgId(parts.join(""), message.meaning);
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
class SerializerVisitor$1 {
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    visitContainer(container, context) {
        return `[${container.children.map(child => child.visit(this)).join(", ")}]`;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ strCases = Object.keys(icu.cases).map((k) => `${k} {${icu.cases[k].visit(this)}}`);
        return `{${icu.expression}, ${icu.type}, ${strCases.join(", ")}}`;
    }
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        return ph.isVoid
            ? `<ph tag name="${ph.startName}"/>`
            : `<ph tag name="${ph.startName}">${ph.children.map(child => child.visit(this)).join(", ")}</ph name="${ph.closeName}">`;
    }
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        return ph.value ? `<ph name="${ph.name}">${ph.value}</ph>` : `<ph name="${ph.name}"/>`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        return `<ph icu name="${ph.name}">${ph.value.visit(this)}</ph>`;
    }
}
const /** @type {?} */ serializerVisitor = new SerializerVisitor$1();
/**
 * @param {?} nodes
 * @return {?}
 */
function serializeNodes$1(nodes) {
    return nodes.map(a => a.visit(serializerVisitor, null));
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
class SerializerIgnoreIcuExpVisitor extends SerializerVisitor$1 {
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ strCases = Object.keys(icu.cases).map((k) => `${k} {${icu.cases[k].visit(this)}}`);
        // Do not take the expression into account
        return `{${icu.type}, ${strCases.join(", ")}}`;
    }
}
/**
 * Compute the SHA1 of the given string
 *
 * see http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 * @param {?} str
 * @return {?}
 */
function sha1(str) {
    const /** @type {?} */ utf8 = utf8Encode(str);
    const /** @type {?} */ words32 = stringToWords32(utf8, Endian.Big);
    const /** @type {?} */ len = utf8.length * 8;
    const /** @type {?} */ w = new Array(80);
    let [a, b, c, d, e] = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    words32[len >> 5] |= 0x80 << (24 - len % 32);
    words32[(((len + 64) >> 9) << 4) + 15] = len;
    for (let /** @type {?} */ i = 0; i < words32.length; i += 16) {
        const [h0, h1, h2, h3, h4] = [a, b, c, d, e];
        for (let /** @type {?} */ j = 0; j < 80; j++) {
            /* tslint:disable-next-line */
            if (j < 16) {
                w[j] = words32[i + j];
            }
            else {
                w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            const [f, k] = fk(j, b, c, d);
            const /** @type {?} */ temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
            [e, d, c, b, a] = [d, c, rol32(b, 30), a, temp];
        }
        [a, b, c, d, e] = [add32(a, h0), add32(b, h1), add32(c, h2), add32(d, h3), add32(e, h4)];
    }
    return byteStringToHexString(words32ToByteString([a, b, c, d, e]));
}
/**
 * @param {?} index
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function fk(index, b, c, d) {
    if (index < 20) {
        return [(b & c) | (~b & d), 0x5a827999];
    }
    if (index < 40) {
        return [b ^ c ^ d, 0x6ed9eba1];
    }
    if (index < 60) {
        return [(b & c) | (b & d) | (c & d), 0x8f1bbcdc];
    }
    return [b ^ c ^ d, 0xca62c1d6];
}
/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 * @param {?} str
 * @return {?}
 */
function fingerprint(str) {
    const /** @type {?} */ utf8 = utf8Encode(str);
    let [hi, lo] = [hash32(utf8, 0), hash32(utf8, 102072)];
    if (hi === 0 && (lo === 0 || lo === 1)) {
        hi = hi ^ 0x130f9bef;
        lo = lo ^ -0x6b5f56d8;
    }
    return [hi, lo];
}
/**
 * @param {?} msg
 * @param {?} meaning
 * @return {?}
 */
function computeMsgId(msg, meaning) {
    let [hi, lo] = fingerprint(msg);
    if (meaning) {
        const [him, lom] = fingerprint(meaning);
        [hi, lo] = add64(rol64([hi, lo], 1), [him, lom]);
    }
    return byteStringToDecString(words32ToByteString([hi & 0x7fffffff, lo]));
}
/**
 * @param {?} str
 * @param {?} c
 * @return {?}
 */
function hash32(str, c) {
    let [a, b] = [0x9e3779b9, 0x9e3779b9];
    let /** @type {?} */ i;
    const /** @type {?} */ len = str.length;
    for (i = 0; i + 12 <= len; i += 12) {
        a = add32(a, wordAt(str, i, Endian.Little));
        b = add32(b, wordAt(str, i + 4, Endian.Little));
        c = add32(c, wordAt(str, i + 8, Endian.Little));
        [a, b, c] = mix([a, b, c]);
    }
    a = add32(a, wordAt(str, i, Endian.Little));
    b = add32(b, wordAt(str, i + 4, Endian.Little));
    // the first byte of c is reserved for the length
    c = add32(c, len);
    c = add32(c, wordAt(str, i + 8, Endian.Little) << 8);
    return mix([a, b, c])[2];
}
/**
 * @param {?} __0
 * @return {?}
 */
function mix([a, b, c]) {
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 13;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 8;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 13;
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 12;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 16;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 5;
    a = sub32(a, b);
    a = sub32(a, c);
    a ^= c >>> 3;
    b = sub32(b, c);
    b = sub32(b, a);
    b ^= a << 10;
    c = sub32(c, a);
    c = sub32(c, b);
    c ^= b >>> 15;
    return [a, b, c];
}
/** @enum {number} */
const Endian = {
    Little: 0,
    Big: 1,
};
Endian[Endian.Little] = "Little";
Endian[Endian.Big] = "Big";
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function add32(a, b) {
    return add32to64(a, b)[1];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function add32to64(a, b) {
    const /** @type {?} */ low = (a & 0xffff) + (b & 0xffff);
    const /** @type {?} */ high = (a >>> 16) + (b >>> 16) + (low >>> 16);
    return [high >>> 16, (high << 16) | (low & 0xffff)];
}
/**
 * @param {?} __0
 * @param {?} __1
 * @return {?}
 */
function add64([ah, al], [bh, bl]) {
    const [carry, l] = add32to64(al, bl);
    const /** @type {?} */ h = add32(add32(ah, bh), carry);
    return [h, l];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sub32(a, b) {
    const /** @type {?} */ low = (a & 0xffff) - (b & 0xffff);
    const /** @type {?} */ high = (a >> 16) - (b >> 16) + (low >> 16);
    return (high << 16) | (low & 0xffff);
}
/**
 * @param {?} a
 * @param {?} count
 * @return {?}
 */
function rol32(a, count) {
    return (a << count) | (a >>> (32 - count));
}
/**
 * @param {?} __0
 * @param {?} count
 * @return {?}
 */
function rol64([hi, lo], count) {
    const /** @type {?} */ h = (hi << count) | (lo >>> (32 - count));
    const /** @type {?} */ l = (lo << count) | (hi >>> (32 - count));
    return [h, l];
}
/**
 * @param {?} str
 * @param {?} endian
 * @return {?}
 */
function stringToWords32(str, endian) {
    const /** @type {?} */ words32 = Array((str.length + 3) >>> 2);
    for (let /** @type {?} */ i = 0; i < words32.length; i++) {
        words32[i] = wordAt(str, i * 4, endian);
    }
    return words32;
}
/**
 * @param {?} str
 * @param {?} index
 * @return {?}
 */
function byteAt(str, index) {
    return index >= str.length ? 0 : str.charCodeAt(index) & 0xff;
}
/**
 * @param {?} str
 * @param {?} index
 * @param {?} endian
 * @return {?}
 */
function wordAt(str, index, endian) {
    let /** @type {?} */ word = 0;
    if (endian === Endian.Big) {
        for (let /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (24 - 8 * i);
        }
    }
    else {
        for (let /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (8 * i);
        }
    }
    return word;
}
/**
 * @param {?} words32
 * @return {?}
 */
function words32ToByteString(words32) {
    return words32.reduce((str, word) => str + word32ToByteString(word), "");
}
/**
 * @param {?} word
 * @return {?}
 */
function word32ToByteString(word) {
    let /** @type {?} */ str = "";
    for (let /** @type {?} */ i = 0; i < 4; i++) {
        str += String.fromCharCode((word >>> (8 * (3 - i))) & 0xff);
    }
    return str;
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToHexString(str) {
    let /** @type {?} */ hex = "";
    for (let /** @type {?} */ i = 0; i < str.length; i++) {
        const /** @type {?} */ b = byteAt(str, i);
        hex += (b >>> 4).toString(16) + (b & 0x0f).toString(16);
    }
    return hex.toLowerCase();
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToDecString(str) {
    let /** @type {?} */ decimal = "";
    let /** @type {?} */ toThePower = "1";
    for (let /** @type {?} */ i = str.length - 1; i >= 0; i--) {
        decimal = addBigInt(decimal, numberTimesBigInt(byteAt(str, i), toThePower));
        toThePower = numberTimesBigInt(256, toThePower);
    }
    return decimal
        .split("")
        .reverse()
        .join("");
}
/**
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function addBigInt(x, y) {
    let /** @type {?} */ sum = "";
    const /** @type {?} */ len = Math.max(x.length, y.length);
    for (let /** @type {?} */ i = 0, /** @type {?} */ carry = 0; i < len || carry; i++) {
        const /** @type {?} */ tmpSum = carry + +(x[i] || 0) + +(y[i] || 0);
        if (tmpSum >= 10) {
            carry = 1;
            sum += tmpSum - 10;
        }
        else {
            carry = 0;
            sum += tmpSum;
        }
    }
    return sum;
}
/**
 * @param {?} num
 * @param {?} b
 * @return {?}
 */
function numberTimesBigInt(num, b) {
    let /** @type {?} */ product = "";
    let /** @type {?} */ bToThePower = b;
    for (; num !== 0; num = num >>> 1) {
        if (num & 1) {
            product = addBigInt(product, bToThePower);
        }
        bToThePower = addBigInt(bToThePower, bToThePower);
    }
    return product;
}
/**
 * @param {?} str
 * @return {?}
 */
function utf8Encode(str) {
    let /** @type {?} */ encoded = "";
    for (let /** @type {?} */ index = 0; index < str.length; index++) {
        let /** @type {?} */ codePoint = str.charCodeAt(index);
        // decode surrogate
        // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > index + 1) {
            const /** @type {?} */ low = str.charCodeAt(index + 1);
            if (low >= 0xdc00 && low <= 0xdfff) {
                index++;
                codePoint = ((codePoint - 0xd800) << 10) + low - 0xdc00 + 0x10000;
            }
        }
        if (codePoint <= 0x7f) {
            encoded += String.fromCharCode(codePoint);
        }
        else if (codePoint <= 0x7ff) {
            encoded += String.fromCharCode(((codePoint >> 6) & 0x1f) | 0xc0, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0xffff) {
            encoded += String.fromCharCode((codePoint >> 12) | 0xe0, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
        else if (codePoint <= 0x1fffff) {
            encoded += String.fromCharCode(((codePoint >> 18) & 0x07) | 0xf0, ((codePoint >> 12) & 0x3f) | 0x80, ((codePoint >> 6) & 0x3f) | 0x80, (codePoint & 0x3f) | 0x80);
        }
    }
    return encoded;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _PLACEHOLDER_TAG = "x";
const /** @type {?} */ _FILE_TAG = "file";
const /** @type {?} */ _SOURCE_TAG = "source";
const /** @type {?} */ _TARGET_TAG = "target";
const /** @type {?} */ _UNIT_TAG = "trans-unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliffLoadToI18n(content) {
    // xliff to xml nodes
    const /** @type {?} */ xliffParser = new XliffParser();
    const { msgIdToHtml, errors } = xliffParser.parse(content);
    // xml nodes to i18n messages
    const /** @type {?} */ i18nMessagesById = {};
    const /** @type {?} */ converter = new XmlToI18n();
    Object.keys(msgIdToHtml).forEach(msgId => {
        const { i18nNodes, errors: e } = converter.convert(msgIdToHtml[msgId]);
        errors.push(...e);
        i18nMessagesById[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error(`xliff parse errors:\n${errors.join("\n")}`);
    }
    return i18nMessagesById;
}
const /** @type {?} */ xliffDigest = digest;
class XliffParser {
    /**
     * @param {?} content
     * @return {?}
     */
    parse(content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        const /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _UNIT_TAG:
                this._unitMlString = /** @type {?} */ ((null));
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_UNIT_TAG}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, `Message ${id} misses a translation`);
                        }
                    }
                }
                break;
            case _SOURCE_TAG:
                // ignore source message
                break;
            case _TARGET_TAG:
                const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                const /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _FILE_TAG:
                visitAll(this, element.children, null);
                break;
            default:
                // TODO(vicb): assert file structure, xliff version
                // For now only recurse on unhandled nodes
                visitAll(this, element.children, null);
        }
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}
class XmlToI18n {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        if (el.name === _PLACEHOLDER_TAG) {
            const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "id");
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, `<${_PLACEHOLDER_TAG}> misses the "id" attribute`);
        }
        else {
            this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach((c) => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _PLACEHOLDER_TAG$1 = "ph";
const /** @type {?} */ _PLACEHOLDER_SPANNING_TAG = "pc";
const /** @type {?} */ _XLIFF_TAG = "xliff";
const /** @type {?} */ _SOURCE_TAG$1 = "source";
const /** @type {?} */ _TARGET_TAG$1 = "target";
const /** @type {?} */ _UNIT_TAG$1 = "unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliff2LoadToI18n(content) {
    // xliff to xml nodes
    const /** @type {?} */ xliff2Parser = new Xliff2Parser();
    const { msgIdToHtml, errors } = xliff2Parser.parse(content);
    // xml nodes to i18n nodes
    const /** @type {?} */ i18nNodesByMsgId = {};
    const /** @type {?} */ converter = new XmlToI18n$1();
    Object.keys(msgIdToHtml).forEach(msgId => {
        const { i18nNodes, errors: e } = converter.convert(msgIdToHtml[msgId]);
        errors.push(...e);
        i18nNodesByMsgId[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error(`xliff2 parse errors:\n${errors.join("\n")}`);
    }
    return i18nNodesByMsgId;
}
const /** @type {?} */ xliff2Digest = decimalDigest;
class Xliff2Parser {
    /**
     * @param {?} content
     * @return {?}
     */
    parse(content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        const /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _UNIT_TAG$1:
                this._unitMlString = null;
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_UNIT_TAG$1}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, `Message ${id} misses a translation`);
                        }
                    }
                }
                break;
            case _SOURCE_TAG$1:
                // ignore source message
                break;
            case _TARGET_TAG$1:
                const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                const /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _XLIFF_TAG:
                const /** @type {?} */ versionAttr = element.attrs.find(attr => attr.name === "version");
                if (versionAttr) {
                    const /** @type {?} */ version = versionAttr.value;
                    if (version !== "2.0") {
                        this._addError(element, `The XLIFF file version ${version} is not compatible with XLIFF 2.0 serializer`);
                    }
                    else {
                        visitAll(this, element.children, null);
                    }
                }
                break;
            default:
                visitAll(this, element.children, null);
        }
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    }
}
class XmlToI18n$1 {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : [].concat(...visitAll(this, xmlIcu.rootNodes));
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, text.sourceSpan);
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        switch (el.name) {
            case _PLACEHOLDER_TAG$1:
                const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "equiv");
                if (nameAttr) {
                    return [new Placeholder("", nameAttr.value, el.sourceSpan)];
                }
                this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equiv" attribute`);
                break;
            case _PLACEHOLDER_SPANNING_TAG:
                const /** @type {?} */ startAttr = el.attrs.find(attr => attr.name === "equivStart");
                const /** @type {?} */ endAttr = el.attrs.find(attr => attr.name === "equivEnd");
                if (!startAttr) {
                    this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equivStart" attribute`);
                }
                else if (!endAttr) {
                    this._addError(el, `<${_PLACEHOLDER_TAG$1}> misses the "equivEnd" attribute`);
                }
                else {
                    const /** @type {?} */ startId = startAttr.value;
                    const /** @type {?} */ endId = endAttr.value;
                    const /** @type {?} */ nodes = [];
                    return nodes.concat(new Placeholder("", startId, el.sourceSpan), ...el.children.map(node => node.visit(this, null)), new Placeholder("", endId, el.sourceSpan));
                }
                break;
            default:
                this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach((c) => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: [].concat(...visitAll(this, icuCase.expression))
        };
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} message
 * @return {?}
 */
function xmbMapper(message) {
    return new SimplePlaceholderMapper(message, toPublicName);
}
/**
 * @param {?} internalName
 * @return {?}
 */
function toPublicName(internalName) {
    return internalName.toUpperCase().replace(/[^A-Z0-9_]/g, "_");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _TRANSLATIONS_TAG = "translationbundle";
const /** @type {?} */ _TRANSLATION_TAG = "translation";
const /** @type {?} */ _PLACEHOLDER_TAG$3 = "ph";
/**
 * @param {?} content
 * @return {?}
 */
function xtbLoadToI18n(content) {
    // xtb to xml nodes
    const /** @type {?} */ xtbParser = new XtbParser();
    const { msgIdToHtml, errors: parseErrors } = xtbParser.parse(content);
    if (parseErrors.length) {
        throw new Error(`xtb parse errors:\n${parseErrors.join("\n")}`);
    }
    // xml nodes to i18n nodes
    const /** @type {?} */ i18nNodesByMsgId = {};
    const /** @type {?} */ converter = new XmlToI18n$2();
    // Because we should be able to load xtb files that rely on features not supported by angular,
    // we need to delay the conversion of html to i18n nodes so that non angular messages are not
    // converted
    Object.keys(msgIdToHtml).forEach(msgId => {
        const /** @type {?} */ valueFn = () => {
            const { i18nNodes, errors } = converter.convert(msgIdToHtml[msgId]);
            if (errors.length) {
                throw new Error(`xtb parse errors:\n${errors.join("\n")}`);
            }
            return i18nNodes;
        };
        createLazyProperty(i18nNodesByMsgId, msgId, valueFn);
    });
    return i18nNodesByMsgId;
}
const /** @type {?} */ xtbDigest = digest;
const /** @type {?} */ xtbMapper = xmbMapper;
/**
 * @param {?} messages
 * @param {?} id
 * @param {?} valueFn
 * @return {?}
 */
function createLazyProperty(messages, id, valueFn) {
    Object.defineProperty(messages, id, {
        configurable: true,
        enumerable: true,
        get: () => {
            const /** @type {?} */ value = valueFn();
            Object.defineProperty(messages, id, { enumerable: true, value });
            return value;
        },
        set: _ => {
            throw new Error("Could not overwrite an XTB translation");
        }
    });
}
class XtbParser {
    /**
     * @param {?} xtb
     * @return {?}
     */
    parse(xtb) {
        this._bundleDepth = 0;
        this._msgIdToHtml = {};
        // We can not parse the ICU messages at this point as some messages might not originate
        // from Angular that could not be lex'd.
        const /** @type {?} */ xml = new Parser(getXmlTagDefinition).parse(xtb, "", false);
        this._errors = xml.errors;
        visitAll(this, xml.rootNodes);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    visitElement(element, context) {
        switch (element.name) {
            case _TRANSLATIONS_TAG:
                this._bundleDepth++;
                if (this._bundleDepth > 1) {
                    this._addError(element, `<${_TRANSLATIONS_TAG}> elements can not be nested`);
                }
                visitAll(this, element.children, null);
                this._bundleDepth--;
                break;
            case _TRANSLATION_TAG:
                const /** @type {?} */ idAttr = element.attrs.find(attr => attr.name === "id");
                if (!idAttr) {
                    this._addError(element, `<${_TRANSLATION_TAG}> misses the "id" attribute`);
                }
                else {
                    const /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, `Duplicated translations for msg ${id}`);
                    }
                    else {
                        const /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                        const /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                        const /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                        const /** @type {?} */ innerText = content.slice(/** @type {?} */ ((innerTextStart)), /** @type {?} */ ((innerTextEnd)));
                        this._msgIdToHtml[id] = innerText;
                    }
                }
                break;
            default:
                this._addError(element, "Unexpected tag");
        }
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) { }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    visitExpansion(expansion, context) { }
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(expansionCase, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}
class XmlToI18n$2 {
    /**
     * @param {?} message
     * @return {?}
     */
    convert(message) {
        const /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        const /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes,
            errors: this._errors
        };
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        const /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(c => {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        if (el.name === _PLACEHOLDER_TAG$3) {
            const /** @type {?} */ nameAttr = el.attrs.find(attr => attr.name === "name");
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, `<${_PLACEHOLDER_TAG$3}> misses the "name" attribute`);
        }
        else {
            this._addError(el, `Unexpected tag`);
        }
        return null;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) { }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) { }
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    _addError(node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ParserError {
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     */
    constructor(message, input, errLocation, ctxLocation) {
        this.input = input;
        this.errLocation = errLocation;
        this.ctxLocation = ctxLocation;
        this.message = `Parser Error: ${message} ${errLocation} [${input}] in ${ctxLocation}`;
    }
}
class ParseSpan {
    /**
     * @param {?} start
     * @param {?} end
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
class AST {
    /**
     * @param {?} span
     */
    constructor(span) {
        this.span = span;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return null;
    }
    /**
     * @return {?}
     */
    toString() {
        return "AST";
    }
}
/**
 * Represents a quoted expression of the form:
 *
 * quote = prefix `:` uninterpretedExpression
 * prefix = identifier
 * uninterpretedExpression = arbitrary string
 *
 * A quoted expression is meant to be pre-processed by an AST transformer that
 * converts it into another AST that no longer contains quoted expressions.
 * It is meant to allow third-party developers to extend Angular template
 * expression language. The `uninterpretedExpression` part of the quote is
 * therefore not interpreted by the Angular's own expression parser.
 */
class Quote extends AST {
    /**
     * @param {?} span
     * @param {?} prefix
     * @param {?} uninterpretedExpression
     * @param {?} location
     */
    constructor(span, prefix, uninterpretedExpression, location) {
        super(span);
        this.prefix = prefix;
        this.uninterpretedExpression = uninterpretedExpression;
        this.location = location;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitQuote(this, context);
    }
    /**
     * @return {?}
     */
    toString() {
        return "Quote";
    }
}
class EmptyExpr extends AST {
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        // do nothing
    }
}
class ImplicitReceiver extends AST {
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitImplicitReceiver(this, context);
    }
}
/**
 * Multiple expressions separated by a semicolon.
 */
class Chain extends AST {
    /**
     * @param {?} span
     * @param {?} expressions
     */
    constructor(span, expressions) {
        super(span);
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitChain(this, context);
    }
}
class Conditional extends AST {
    /**
     * @param {?} span
     * @param {?} condition
     * @param {?} trueExp
     * @param {?} falseExp
     */
    constructor(span, condition, trueExp, falseExp) {
        super(span);
        this.condition = condition;
        this.trueExp = trueExp;
        this.falseExp = falseExp;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitConditional(this, context);
    }
}
class PropertyRead extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */
    constructor(span, receiver, name) {
        super(span);
        this.receiver = receiver;
        this.name = name;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPropertyRead(this, context);
    }
}
class PropertyWrite extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} value
     */
    constructor(span, receiver, name, value) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPropertyWrite(this, context);
    }
}
class SafePropertyRead extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     */
    constructor(span, receiver, name) {
        super(span);
        this.receiver = receiver;
        this.name = name;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitSafePropertyRead(this, context);
    }
}
class KeyedRead extends AST {
    /**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     */
    constructor(span, obj, key) {
        super(span);
        this.obj = obj;
        this.key = key;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitKeyedRead(this, context);
    }
}
class KeyedWrite extends AST {
    /**
     * @param {?} span
     * @param {?} obj
     * @param {?} key
     * @param {?} value
     */
    constructor(span, obj, key, value) {
        super(span);
        this.obj = obj;
        this.key = key;
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitKeyedWrite(this, context);
    }
}
class BindingPipe extends AST {
    /**
     * @param {?} span
     * @param {?} exp
     * @param {?} name
     * @param {?} args
     */
    constructor(span, exp, name, args) {
        super(span);
        this.exp = exp;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPipe(this, context);
    }
}
class LiteralPrimitive extends AST {
    /**
     * @param {?} span
     * @param {?} value
     */
    constructor(span, value) {
        super(span);
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralPrimitive(this, context);
    }
}
class LiteralArray extends AST {
    /**
     * @param {?} span
     * @param {?} expressions
     */
    constructor(span, expressions) {
        super(span);
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralArray(this, context);
    }
}
class LiteralMap extends AST {
    /**
     * @param {?} span
     * @param {?} keys
     * @param {?} values
     */
    constructor(span, keys, values) {
        super(span);
        this.keys = keys;
        this.values = values;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitLiteralMap(this, context);
    }
}
class Interpolation extends AST {
    /**
     * @param {?} span
     * @param {?} strings
     * @param {?} expressions
     */
    constructor(span, strings, expressions) {
        super(span);
        this.strings = strings;
        this.expressions = expressions;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitInterpolation(this, context);
    }
}
class Binary extends AST {
    /**
     * @param {?} span
     * @param {?} operation
     * @param {?} left
     * @param {?} right
     */
    constructor(span, operation, left, right) {
        super(span);
        this.operation = operation;
        this.left = left;
        this.right = right;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitBinary(this, context);
    }
}
class PrefixNot extends AST {
    /**
     * @param {?} span
     * @param {?} expression
     */
    constructor(span, expression) {
        super(span);
        this.expression = expression;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitPrefixNot(this, context);
    }
}
class NonNullAssert extends AST {
    /**
     * @param {?} span
     * @param {?} expression
     */
    constructor(span, expression) {
        super(span);
        this.expression = expression;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitNonNullAssert(this, context);
    }
}
class MethodCall extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */
    constructor(span, receiver, name, args) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitMethodCall(this, context);
    }
}
class SafeMethodCall extends AST {
    /**
     * @param {?} span
     * @param {?} receiver
     * @param {?} name
     * @param {?} args
     */
    constructor(span, receiver, name, args) {
        super(span);
        this.receiver = receiver;
        this.name = name;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitSafeMethodCall(this, context);
    }
}
class FunctionCall extends AST {
    /**
     * @param {?} span
     * @param {?} target
     * @param {?} args
     */
    constructor(span, target, args) {
        super(span);
        this.target = target;
        this.args = args;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return visitor.visitFunctionCall(this, context);
    }
}
class ASTWithSource extends AST {
    /**
     * @param {?} ast
     * @param {?} source
     * @param {?} location
     * @param {?} errors
     */
    constructor(ast, source, location, errors) {
        super(new ParseSpan(0, source == null ? 0 : source.length));
        this.ast = ast;
        this.source = source;
        this.location = location;
        this.errors = errors;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    visit(visitor, context = null) {
        return this.ast.visit(visitor, context);
    }
    /**
     * @return {?}
     */
    toString() {
        return `${this.source} in ${this.location}`;
    }
}
class TemplateBinding {
    /**
     * @param {?} span
     * @param {?} key
     * @param {?} keyIsVar
     * @param {?} name
     * @param {?} expression
     */
    constructor(span, key, keyIsVar, name, expression) {
        this.span = span;
        this.key = key;
        this.keyIsVar = keyIsVar;
        this.name = name;
        this.expression = expression;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const TokenType$1 = {
    Character: 0,
    Identifier: 1,
    Keyword: 2,
    String: 3,
    Operator: 4,
    Number: 5,
    Error: 6,
};
TokenType$1[TokenType$1.Character] = "Character";
TokenType$1[TokenType$1.Identifier] = "Identifier";
TokenType$1[TokenType$1.Keyword] = "Keyword";
TokenType$1[TokenType$1.String] = "String";
TokenType$1[TokenType$1.Operator] = "Operator";
TokenType$1[TokenType$1.Number] = "Number";
TokenType$1[TokenType$1.Error] = "Error";
const /** @type {?} */ KEYWORDS = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this"];
class Lexer {
    /**
     * @param {?} text
     * @return {?}
     */
    tokenize(text) {
        const /** @type {?} */ scanner = new Scanner(text);
        const /** @type {?} */ tokens = [];
        let /** @type {?} */ token = scanner.scanToken();
        while (token != null) {
            tokens.push(token);
            token = scanner.scanToken();
        }
        return tokens;
    }
}
class Token$1 {
    /**
     * @param {?} index
     * @param {?} type
     * @param {?} numValue
     * @param {?} strValue
     */
    constructor(index, type, numValue, strValue) {
        this.index = index;
        this.type = type;
        this.numValue = numValue;
        this.strValue = strValue;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    isCharacter(code) {
        return this.type === TokenType$1.Character && this.numValue === code;
    }
    /**
     * @return {?}
     */
    isNumber() {
        return this.type === TokenType$1.Number;
    }
    /**
     * @return {?}
     */
    isString() {
        return this.type === TokenType$1.String;
    }
    /**
     * @param {?} operater
     * @return {?}
     */
    isOperator(operater) {
        return this.type === TokenType$1.Operator && this.strValue === operater;
    }
    /**
     * @return {?}
     */
    isIdentifier() {
        return this.type === TokenType$1.Identifier;
    }
    /**
     * @return {?}
     */
    isKeyword() {
        return this.type === TokenType$1.Keyword;
    }
    /**
     * @return {?}
     */
    isKeywordLet() {
        return this.type === TokenType$1.Keyword && this.strValue === "let";
    }
    /**
     * @return {?}
     */
    isKeywordAs() {
        return this.type === TokenType$1.Keyword && this.strValue === "as";
    }
    /**
     * @return {?}
     */
    isKeywordNull() {
        return this.type === TokenType$1.Keyword && this.strValue === "null";
    }
    /**
     * @return {?}
     */
    isKeywordUndefined() {
        return this.type === TokenType$1.Keyword && this.strValue === "undefined";
    }
    /**
     * @return {?}
     */
    isKeywordTrue() {
        return this.type === TokenType$1.Keyword && this.strValue === "true";
    }
    /**
     * @return {?}
     */
    isKeywordFalse() {
        return this.type === TokenType$1.Keyword && this.strValue === "false";
    }
    /**
     * @return {?}
     */
    isKeywordThis() {
        return this.type === TokenType$1.Keyword && this.strValue === "this";
    }
    /**
     * @return {?}
     */
    isError() {
        return this.type === TokenType$1.Error;
    }
    /**
     * @return {?}
     */
    toNumber() {
        return this.type === TokenType$1.Number ? this.numValue : -1;
    }
    /**
     * @return {?}
     */
    toString() {
        switch (this.type) {
            case TokenType$1.Character:
            case TokenType$1.Identifier:
            case TokenType$1.Keyword:
            case TokenType$1.Operator:
            case TokenType$1.String:
            case TokenType$1.Error:
                return this.strValue;
            case TokenType$1.Number:
                return this.numValue.toString();
            default:
                return null;
        }
    }
}
/**
 * @param {?} index
 * @param {?} code
 * @return {?}
 */
function newCharacterToken(index, code) {
    return new Token$1(index, TokenType$1.Character, code, String.fromCharCode(code));
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newIdentifierToken(index, text) {
    return new Token$1(index, TokenType$1.Identifier, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newKeywordToken(index, text) {
    return new Token$1(index, TokenType$1.Keyword, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newOperatorToken(index, text) {
    return new Token$1(index, TokenType$1.Operator, 0, text);
}
/**
 * @param {?} index
 * @param {?} text
 * @return {?}
 */
function newStringToken(index, text) {
    return new Token$1(index, TokenType$1.String, 0, text);
}
/**
 * @param {?} index
 * @param {?} n
 * @return {?}
 */
function newNumberToken(index, n) {
    return new Token$1(index, TokenType$1.Number, n, "");
}
/**
 * @param {?} index
 * @param {?} message
 * @return {?}
 */
function newErrorToken(index, message) {
    return new Token$1(index, TokenType$1.Error, 0, message);
}
const /** @type {?} */ EOF = new Token$1(-1, TokenType$1.Character, 0, "");
class Scanner {
    /**
     * @param {?} input
     */
    constructor(input) {
        this.input = input;
        this.peek = 0;
        this.index = -1;
        this.length = input.length;
        this.advance();
    }
    /**
     * @return {?}
     */
    advance() {
        this.peek = ++this.index >= this.length ? $EOF : this.input.charCodeAt(this.index);
    }
    /**
     * @return {?}
     */
    scanToken() {
        const /** @type {?} */ input = this.input;
        const /** @type {?} */ length = this.length;
        let /** @type {?} */ peek = this.peek;
        let /** @type {?} */ index = this.index;
        // Skip whitespace.
        while (peek <= $SPACE) {
            if (++index >= length) {
                peek = $EOF;
                break;
            }
            else {
                peek = input.charCodeAt(index);
            }
        }
        this.peek = peek;
        this.index = index;
        if (index >= length) {
            return null;
        }
        // Handle identifiers and numbers.
        if (isIdentifierStart(peek)) {
            return this.scanIdentifier();
        }
        if (isDigit(peek)) {
            return this.scanNumber(index);
        }
        const /** @type {?} */ start = index;
        switch (peek) {
            case $PERIOD:
                this.advance();
                return isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, $PERIOD);
            case $LPAREN:
            case $RPAREN:
            case $LBRACE:
            case $RBRACE:
            case $LBRACKET:
            case $RBRACKET:
            case $COMMA:
            case $COLON:
            case $SEMICOLON:
                return this.scanCharacter(start, peek);
            case $SQ:
            case $DQ:
                return this.scanString();
            case $HASH:
            case $PLUS:
            case $MINUS:
            case $STAR:
            case $SLASH:
            case $PERCENT:
            case $CARET:
                return this.scanOperator(start, String.fromCharCode(peek));
            case $QUESTION:
                return this.scanComplexOperator(start, "?", $PERIOD, ".");
            case $LT:
            case $GT:
                return this.scanComplexOperator(start, String.fromCharCode(peek), $EQ, "=");
            case $BANG:
            case $EQ:
                return this.scanComplexOperator(start, String.fromCharCode(peek), $EQ, "=", $EQ, "=");
            case $AMPERSAND:
                return this.scanComplexOperator(start, "&", $AMPERSAND, "&");
            case $BAR:
                return this.scanComplexOperator(start, "|", $BAR, "|");
            case $NBSP:
                while (isWhitespace(this.peek)) {
                    this.advance();
                }
                return this.scanToken();
        }
        this.advance();
        return this.error(`Unexpected character [${String.fromCharCode(peek)}]`, 0);
    }
    /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    scanCharacter(start, code) {
        this.advance();
        return newCharacterToken(start, code);
    }
    /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    scanOperator(start, str) {
        this.advance();
        return newOperatorToken(start, str);
    }
    /**
     * Tokenize a 2/3 char long operator
     *
     * @param {?} start start index in the expression
     * @param {?} one first symbol (always part of the operator)
     * @param {?} twoCode code point for the second symbol
     * @param {?} two second symbol (part of the operator when the second code point matches)
     * @param {?=} threeCode code point for the third symbol
     * @param {?=} three third symbol (part of the operator when provided and matches source expression)
     * @return {?}
     */
    scanComplexOperator(start, one, twoCode, two, threeCode, three) {
        this.advance();
        let /** @type {?} */ str = one;
        if (this.peek === twoCode) {
            this.advance();
            str += two;
        }
        if (threeCode != null && this.peek === threeCode) {
            this.advance();
            str += three;
        }
        return newOperatorToken(start, str);
    }
    /**
     * @return {?}
     */
    scanIdentifier() {
        const /** @type {?} */ start = this.index;
        this.advance();
        while (isIdentifierPart(this.peek)) {
            this.advance();
        }
        const /** @type {?} */ str = this.input.substring(start, this.index);
        return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, str) : newIdentifierToken(start, str);
    }
    /**
     * @param {?} start
     * @return {?}
     */
    scanNumber(start) {
        let /** @type {?} */ simple = this.index === start;
        this.advance(); // Skip initial digit.
        while (true) {
            if (isDigit(this.peek)) ;
            else if (this.peek === $PERIOD) {
                simple = false;
            }
            else if (isExponentStart(this.peek)) {
                this.advance();
                if (isExponentSign(this.peek)) {
                    this.advance();
                }
                if (!isDigit(this.peek)) {
                    return this.error("Invalid exponent", -1);
                }
                simple = false;
            }
            else {
                break;
            }
            this.advance();
        }
        const /** @type {?} */ str = this.input.substring(start, this.index);
        const /** @type {?} */ value = simple ? parseIntAutoRadix(str) : parseFloat(str);
        return newNumberToken(start, value);
    }
    /**
     * @return {?}
     */
    scanString() {
        const /** @type {?} */ start = this.index;
        const /** @type {?} */ quote = this.peek;
        this.advance(); // Skip initial quote.
        let /** @type {?} */ buffer = "";
        let /** @type {?} */ marker = this.index;
        const /** @type {?} */ input = this.input;
        while (this.peek !== quote) {
            if (this.peek === $BACKSLASH) {
                buffer += input.substring(marker, this.index);
                this.advance();
                let /** @type {?} */ unescapedCode;
                // Workaround for TS2.1-introduced type strictness
                this.peek = this.peek;
                if (this.peek === $u) {
                    // 4 character hex code for unicode character.
                    const /** @type {?} */ hex = input.substring(this.index + 1, this.index + 5);
                    if (/^[0-9a-f]+$/i.test(hex)) {
                        unescapedCode = parseInt(hex, 16);
                    }
                    else {
                        return this.error(`Invalid unicode escape [\\u${hex}]`, 0);
                    }
                    for (let /** @type {?} */ i = 0; i < 5; i++) {
                        this.advance();
                    }
                }
                else {
                    unescapedCode = unescape(this.peek);
                    this.advance();
                }
                buffer += String.fromCharCode(unescapedCode);
                marker = this.index;
            }
            else if (this.peek === $EOF) {
                return this.error("Unterminated quote", 0);
            }
            else {
                this.advance();
            }
        }
        const /** @type {?} */ last = input.substring(marker, this.index);
        this.advance(); // Skip terminating quote.
        return newStringToken(start, buffer + last);
    }
    /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    error(message, offset) {
        const /** @type {?} */ position = this.index + offset;
        return newErrorToken(position, `Lexer Error: ${message} at column ${position} in expression [${this.input}]`);
    }
}
/**
 * @param {?} code
 * @return {?}
 */
function isIdentifierStart(code) {
    return (($a <= code && code <= $z) ||
        ($A <= code && code <= $Z) ||
        code === $_ ||
        code === $$);
}
/**
 * @param {?} input
 * @return {?}
 */
function isIdentifier(input) {
    if (input.length === 0) {
        return false;
    }
    const /** @type {?} */ scanner = new Scanner(input);
    if (!isIdentifierStart(scanner.peek)) {
        return false;
    }
    scanner.advance();
    while (scanner.peek !== $EOF) {
        if (!isIdentifierPart(scanner.peek)) {
            return false;
        }
        scanner.advance();
    }
    return true;
}
/**
 * @param {?} code
 * @return {?}
 */
function isIdentifierPart(code) {
    return isAsciiLetter(code) || isDigit(code) || code === $_ || code === $$;
}
/**
 * @param {?} code
 * @return {?}
 */
function isExponentStart(code) {
    return code === $e || code === $E;
}
/**
 * @param {?} code
 * @return {?}
 */
function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
}
/**
 * @param {?} code
 * @return {?}
 */
function isQuote(code) {
    return code === $SQ || code === $DQ || code === $BT;
}
/**
 * @param {?} code
 * @return {?}
 */
function unescape(code) {
    switch (code) {
        case $n:
            return $LF;
        case $f:
            return $FF;
        case $r:
            return $CR;
        case $t:
            return $TAB;
        case $v:
            return $VTAB;
        default:
            return code;
    }
}
/**
 * @param {?} text
 * @return {?}
 */
function parseIntAutoRadix(text) {
    const /** @type {?} */ result = parseInt(text, 10);
    if (isNaN(result)) {
        throw new Error("Invalid integer literal when parsing " + text);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SplitInterpolation {
    /**
     * @param {?} strings
     * @param {?} expressions
     * @param {?} offsets
     */
    constructor(strings, expressions, offsets) {
        this.strings = strings;
        this.expressions = expressions;
        this.offsets = offsets;
    }
}
class TemplateBindingParseResult {
    /**
     * @param {?} templateBindings
     * @param {?} warnings
     * @param {?} errors
     */
    constructor(templateBindings, warnings, errors) {
        this.templateBindings = templateBindings;
        this.warnings = warnings;
        this.errors = errors;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
function _createInterpolateRegExp(config) {
    const /** @type {?} */ pattern = escapeRegExp(config.start) + "([\\s\\S]*?)" + escapeRegExp(config.end);
    return new RegExp(pattern, "g");
}
class Parser$1 {
    /**
     * @param {?} _lexer
     */
    constructor(_lexer) {
        this._lexer = _lexer;
        this.errors = [];
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseAction(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        this._checkNoInterpolation(input, location, interpolationConfig);
        const /** @type {?} */ sourceToLex = this._stripComments(input);
        const /** @type {?} */ tokens = this._lexer.tokenize(this._stripComments(input));
        const /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, true, this.errors, input.length - sourceToLex.length).parseChain();
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseBinding(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseSimpleBinding(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        const /** @type {?} */ errors = SimpleExpressionChecker.check(ast);
        if (errors.length > 0) {
            this._reportError(`Host binding expression cannot contain ${errors.join(" ")}`, input, location);
        }
        return new ASTWithSource(ast, input, location, this.errors);
    }
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    _reportError(message, input, errLocation, ctxLocation) {
        this.errors.push(new ParserError(message, input, errLocation, ctxLocation));
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    _parseBindingAst(input, location, interpolationConfig) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        const /** @type {?} */ quote = this._parseQuote(input, location);
        if (quote != null) {
            return quote;
        }
        this._checkNoInterpolation(input, location, interpolationConfig);
        const /** @type {?} */ sourceToLex = this._stripComments(input);
        const /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
        return new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, input.length - sourceToLex.length).parseChain();
    }
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    _parseQuote(input, location) {
        if (input === null) {
            return null;
        }
        const /** @type {?} */ prefixSeparatorIndex = input.indexOf(":");
        if (prefixSeparatorIndex === -1) {
            return null;
        }
        const /** @type {?} */ prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!isIdentifier(prefix)) {
            return null;
        }
        const /** @type {?} */ uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        return new Quote(new ParseSpan(0, input.length), prefix, uninterpretedExpression, location);
    }
    /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    parseTemplateBindings(prefixToken, input, location) {
        const /** @type {?} */ tokens = this._lexer.tokenize(input);
        if (prefixToken) {
            // Prefix the tokens with the tokens from prefixToken but have them take no space (0 index).
            const /** @type {?} */ prefixTokens = this._lexer.tokenize(prefixToken).map(t => {
                t.index = 0;
                return t;
            });
            tokens.unshift(...prefixTokens);
        }
        return new ParseAST(input, location, tokens, input.length, false, this.errors, 0).parseTemplateBindings();
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    parseInterpolation(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ split = this.splitInterpolation(input, location, interpolationConfig);
        if (split === null) {
            return null;
        }
        const /** @type {?} */ expressions = [];
        for (let /** @type {?} */ i = 0; i < split.expressions.length; ++i) {
            const /** @type {?} */ expressionText = split.expressions[i];
            const /** @type {?} */ sourceToLex = this._stripComments(expressionText);
            const /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
            const /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, split.offsets[i] + (expressionText.length - sourceToLex.length)).parseChain();
            expressions.push(ast);
        }
        return new ASTWithSource(new Interpolation(new ParseSpan(0, input === null ? 0 : input.length), split.strings, expressions), input, location, this.errors);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    splitInterpolation(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        const /** @type {?} */ parts = input.split(regexp);
        if (parts.length <= 1) {
            return null;
        }
        const /** @type {?} */ strings = [];
        const /** @type {?} */ expressions = [];
        const /** @type {?} */ offsets = [];
        let /** @type {?} */ offset = 0;
        for (let /** @type {?} */ i = 0; i < parts.length; i++) {
            const /** @type {?} */ part = parts[i];
            if (i % 2 === 0) {
                // fixed string
                strings.push(part);
                offset += part.length;
            }
            else if (part.trim().length > 0) {
                offset += interpolationConfig.start.length;
                expressions.push(part);
                offsets.push(offset);
                offset += part.length + interpolationConfig.end.length;
            }
            else {
                this._reportError("Blank expressions are not allowed in interpolated strings", input, `at column ${this._findInterpolationErrorColumn(parts, i, interpolationConfig)} in`, location);
                expressions.push("$implict");
                offsets.push(offset);
            }
        }
        return new SplitInterpolation(strings, expressions, offsets);
    }
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    wrapLiteralPrimitive(input, location) {
        return new ASTWithSource(new LiteralPrimitive(new ParseSpan(0, input === null ? 0 : input.length), input), input, location, this.errors);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    _stripComments(input) {
        const /** @type {?} */ i = this._commentStart(input);
        return i != null ? input.substring(0, i).trim() : input;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    _commentStart(input) {
        let /** @type {?} */ outerQuote = null;
        for (let /** @type {?} */ i = 0; i < input.length - 1; i++) {
            const /** @type {?} */ char = input.charCodeAt(i);
            const /** @type {?} */ nextChar = input.charCodeAt(i + 1);
            if (char === $SLASH && nextChar === $SLASH && outerQuote === null) {
                return i;
            }
            if (outerQuote === char) {
                outerQuote = null;
            }
            else if (outerQuote === null && isQuote(char)) {
                outerQuote = char;
            }
        }
        return null;
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    _checkNoInterpolation(input, location, interpolationConfig) {
        const /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        const /** @type {?} */ parts = input.split(regexp);
        if (parts.length > 1) {
            this._reportError(`Got interpolation (${interpolationConfig.start}${interpolationConfig.end}) where expression was expected`, input, `at column ${this._findInterpolationErrorColumn(parts, 1, interpolationConfig)} in`, location);
        }
    }
    /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    _findInterpolationErrorColumn(parts, partInErrIdx, interpolationConfig) {
        let /** @type {?} */ errLocation = "";
        for (let /** @type {?} */ j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ? parts[j] : `${interpolationConfig.start}${parts[j]}${interpolationConfig.end}`;
        }
        return errLocation.length;
    }
}
class ParseAST {
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} tokens
     * @param {?} inputLength
     * @param {?} parseAction
     * @param {?} errors
     * @param {?} offset
     */
    constructor(input, location, tokens, inputLength, parseAction, errors, offset) {
        this.input = input;
        this.location = location;
        this.tokens = tokens;
        this.inputLength = inputLength;
        this.parseAction = parseAction;
        this.errors = errors;
        this.offset = offset;
        this.rparensExpected = 0;
        this.rbracketsExpected = 0;
        this.rbracesExpected = 0;
        this.index = 0;
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    peek(offset) {
        const /** @type {?} */ i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : EOF;
    }
    /**
     * @return {?}
     */
    get next() {
        return this.peek(0);
    }
    /**
     * @return {?}
     */
    get inputIndex() {
        return this.index < this.tokens.length ? this.next.index + this.offset : this.inputLength + this.offset;
    }
    /**
     * @param {?} start
     * @return {?}
     */
    span(start) {
        return new ParseSpan(start, this.inputIndex);
    }
    /**
     * @return {?}
     */
    advance() {
        this.index++;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    optionalCharacter(code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    peekKeywordLet() {
        return this.next.isKeywordLet();
    }
    /**
     * @return {?}
     */
    peekKeywordAs() {
        return this.next.isKeywordAs();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    expectCharacter(code) {
        if (this.optionalCharacter(code)) {
            return;
        }
        this.error(`Missing expected ${String.fromCharCode(code)}`);
    }
    /**
     * @param {?} op
     * @return {?}
     */
    optionalOperator(op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} operator
     * @return {?}
     */
    expectOperator(operator) {
        if (this.optionalOperator(operator)) {
            return;
        }
        this.error(`Missing expected operator ${operator}`);
    }
    /**
     * @return {?}
     */
    expectIdentifierOrKeyword() {
        const /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error(`Unexpected token ${n}, expected identifier or keyword`);
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    }
    /**
     * @return {?}
     */
    expectIdentifierOrKeywordOrString() {
        const /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error(`Unexpected token ${n}, expected identifier, keyword, or string`);
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    }
    /**
     * @return {?}
     */
    parseChain() {
        const /** @type {?} */ exprs = [];
        const /** @type {?} */ start = this.inputIndex;
        while (this.index < this.tokens.length) {
            const /** @type {?} */ expr = this.parsePipe();
            exprs.push(expr);
            if (this.optionalCharacter($SEMICOLON)) {
                if (!this.parseAction) {
                    this.error("Binding expression cannot contain chained expression");
                }
                while (this.optionalCharacter($SEMICOLON)) { } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error(`Unexpected token '${this.next}'`);
            }
        }
        if (exprs.length === 0) {
            return new EmptyExpr(this.span(start));
        }
        if (exprs.length === 1) {
            return exprs[0];
        }
        return new Chain(this.span(start), exprs);
    }
    /**
     * @return {?}
     */
    parsePipe() {
        let /** @type {?} */ result = this.parseExpression();
        if (this.optionalOperator("|")) {
            if (this.parseAction) {
                this.error("Cannot have a pipe in an action expression");
            }
            do {
                const /** @type {?} */ name = this.expectIdentifierOrKeyword();
                const /** @type {?} */ args = [];
                while (this.optionalCharacter($COLON)) {
                    args.push(this.parseExpression());
                }
                result = new BindingPipe(this.span(result.span.start), result, name, args);
            } while (this.optionalOperator("|"));
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseExpression() {
        return this.parseConditional();
    }
    /**
     * @return {?}
     */
    parseConditional() {
        const /** @type {?} */ start = this.inputIndex;
        const /** @type {?} */ result = this.parseLogicalOr();
        if (this.optionalOperator("?")) {
            const /** @type {?} */ yes = this.parsePipe();
            let /** @type {?} */ no;
            if (!this.optionalCharacter($COLON)) {
                const /** @type {?} */ end = this.inputIndex;
                const /** @type {?} */ expression = this.input.substring(start, end);
                this.error(`Conditional expression ${expression} requires all 3 expressions`);
                no = new EmptyExpr(this.span(start));
            }
            else {
                no = this.parsePipe();
            }
            return new Conditional(this.span(start), result, yes, no);
        }
        else {
            return result;
        }
    }
    /**
     * @return {?}
     */
    parseLogicalOr() {
        // '||'
        let /** @type {?} */ result = this.parseLogicalAnd();
        while (this.optionalOperator("||")) {
            const /** @type {?} */ right = this.parseLogicalAnd();
            result = new Binary(this.span(result.span.start), "||", result, right);
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseLogicalAnd() {
        // '&&'
        let /** @type {?} */ result = this.parseEquality();
        while (this.optionalOperator("&&")) {
            const /** @type {?} */ right = this.parseEquality();
            result = new Binary(this.span(result.span.start), "&&", result, right);
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseEquality() {
        // '==','!=','===','!=='
        let /** @type {?} */ result = this.parseRelational();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "==":
                case "===":
                case "!=":
                case "!==":
                    this.advance();
                    const /** @type {?} */ right = this.parseRelational();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseRelational() {
        // '<', '>', '<=', '>='
        let /** @type {?} */ result = this.parseAdditive();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "<":
                case ">":
                case "<=":
                case ">=":
                    this.advance();
                    const /** @type {?} */ right = this.parseAdditive();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseAdditive() {
        // '+', '-'
        let /** @type {?} */ result = this.parseMultiplicative();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "+":
                case "-":
                    this.advance();
                    const /** @type {?} */ right = this.parseMultiplicative();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseMultiplicative() {
        // '*', '%', '/'
        let /** @type {?} */ result = this.parsePrefix();
        while (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "*":
                case "%":
                case "/":
                    this.advance();
                    const /** @type {?} */ right = this.parsePrefix();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    /**
     * @return {?}
     */
    parsePrefix() {
        if (this.next.type === TokenType$1.Operator) {
            const /** @type {?} */ start = this.inputIndex;
            const /** @type {?} */ operator = this.next.strValue;
            let /** @type {?} */ result;
            switch (operator) {
                case "+":
                    this.advance();
                    return this.parsePrefix();
                case "-":
                    this.advance();
                    result = this.parsePrefix();
                    return new Binary(this.span(start), operator, new LiteralPrimitive(new ParseSpan(start, start), 0), result);
                case "!":
                    this.advance();
                    result = this.parsePrefix();
                    return new PrefixNot(this.span(start), result);
            }
        }
        return this.parseCallChain();
    }
    /**
     * @return {?}
     */
    parseCallChain() {
        let /** @type {?} */ result = this.parsePrimary();
        while (true) {
            if (this.optionalCharacter($PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.optionalOperator("?.")) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.optionalCharacter($LBRACKET)) {
                this.rbracketsExpected++;
                const /** @type {?} */ key = this.parsePipe();
                this.rbracketsExpected--;
                this.expectCharacter($RBRACKET);
                if (this.optionalOperator("=")) {
                    const /** @type {?} */ value = this.parseConditional();
                    result = new KeyedWrite(this.span(result.span.start), result, key, value);
                }
                else {
                    result = new KeyedRead(this.span(result.span.start), result, key);
                }
            }
            else if (this.optionalCharacter($LPAREN)) {
                this.rparensExpected++;
                const /** @type {?} */ args = this.parseCallArguments();
                this.rparensExpected--;
                this.expectCharacter($RPAREN);
                result = new FunctionCall(this.span(result.span.start), result, args);
            }
            else if (this.optionalOperator("!")) {
                result = new NonNullAssert(this.span(result.span.start), result);
            }
            else {
                return result;
            }
        }
    }
    /**
     * @return {?}
     */
    parsePrimary() {
        const /** @type {?} */ start = this.inputIndex;
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            const /** @type {?} */ result = this.parsePipe();
            this.rparensExpected--;
            this.expectCharacter($RPAREN);
            return result;
        }
        else if (this.next.isKeywordNull()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), null);
        }
        else if (this.next.isKeywordUndefined()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), void 0);
        }
        else if (this.next.isKeywordTrue()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), true);
        }
        else if (this.next.isKeywordFalse()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), false);
        }
        else if (this.next.isKeywordThis()) {
            this.advance();
            return new ImplicitReceiver(this.span(start));
        }
        else if (this.optionalCharacter($LBRACKET)) {
            this.rbracketsExpected++;
            const /** @type {?} */ elements = this.parseExpressionList($RBRACKET);
            this.rbracketsExpected--;
            this.expectCharacter($RBRACKET);
            return new LiteralArray(this.span(start), elements);
        }
        else if (this.next.isCharacter($LBRACE)) {
            return this.parseLiteralMap();
        }
        else if (this.next.isIdentifier()) {
            return this.parseAccessMemberOrMethodCall(new ImplicitReceiver(this.span(start)), false);
        }
        else if (this.next.isNumber()) {
            const /** @type {?} */ value = this.next.toNumber();
            this.advance();
            return new LiteralPrimitive(this.span(start), value);
        }
        else if (this.next.isString()) {
            const /** @type {?} */ literalValue = this.next.toString();
            this.advance();
            return new LiteralPrimitive(this.span(start), literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error(`Unexpected end of expression: ${this.input}`);
            return new EmptyExpr(this.span(start));
        }
        else {
            this.error(`Unexpected token ${this.next}`);
            return new EmptyExpr(this.span(start));
        }
    }
    /**
     * @param {?} terminator
     * @return {?}
     */
    parseExpressionList(terminator) {
        const /** @type {?} */ result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
        }
        return result;
    }
    /**
     * @return {?}
     */
    parseLiteralMap() {
        const /** @type {?} */ keys = [];
        const /** @type {?} */ values = [];
        const /** @type {?} */ start = this.inputIndex;
        this.expectCharacter($LBRACE);
        if (!this.optionalCharacter($RBRACE)) {
            this.rbracesExpected++;
            do {
                const /** @type {?} */ quoted = this.next.isString();
                const /** @type {?} */ key = this.expectIdentifierOrKeywordOrString();
                keys.push({ key, quoted });
                this.expectCharacter($COLON);
                values.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
            this.rbracesExpected--;
            this.expectCharacter($RBRACE);
        }
        return new LiteralMap(this.span(start), keys, values);
    }
    /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    parseAccessMemberOrMethodCall(receiver, isSafe = false) {
        const /** @type {?} */ start = receiver.span.start;
        const /** @type {?} */ id = this.expectIdentifierOrKeyword();
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            const /** @type {?} */ args = this.parseCallArguments();
            this.expectCharacter($RPAREN);
            this.rparensExpected--;
            const /** @type {?} */ span = this.span(start);
            return isSafe ? new SafeMethodCall(span, receiver, id, args) : new MethodCall(span, receiver, id, args);
        }
        else {
            if (isSafe) {
                if (this.optionalOperator("=")) {
                    this.error("The '?.' operator cannot be used in the assignment");
                    return new EmptyExpr(this.span(start));
                }
                else {
                    return new SafePropertyRead(this.span(start), receiver, id);
                }
            }
            else {
                if (this.optionalOperator("=")) {
                    if (!this.parseAction) {
                        this.error("Bindings cannot contain assignments");
                        return new EmptyExpr(this.span(start));
                    }
                    const /** @type {?} */ value = this.parseConditional();
                    return new PropertyWrite(this.span(start), receiver, id, value);
                }
                else {
                    return new PropertyRead(this.span(start), receiver, id);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    parseCallArguments() {
        if (this.next.isCharacter($RPAREN)) {
            return [];
        }
        const /** @type {?} */ positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.optionalCharacter($COMMA));
        return /** @type {?} */ (positionals);
    }
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    expectTemplateBindingKey() {
        let /** @type {?} */ result = "";
        let /** @type {?} */ operatorFound = false;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.optionalOperator("-");
            if (operatorFound) {
                result += "-";
            }
        } while (operatorFound);
        return result.toString();
    }
    /**
     * @return {?}
     */
    parseTemplateBindings() {
        const /** @type {?} */ bindings = [];
        let /** @type {?} */ prefix = /** @type {?} */ ((null));
        const /** @type {?} */ warnings = [];
        while (this.index < this.tokens.length) {
            const /** @type {?} */ start = this.inputIndex;
            let /** @type {?} */ keyIsVar = this.peekKeywordLet();
            if (keyIsVar) {
                this.advance();
            }
            const /** @type {?} */ rawKey = this.expectTemplateBindingKey();
            let /** @type {?} */ key = rawKey;
            if (!keyIsVar) {
                if (prefix === null) {
                    prefix = key;
                }
                else {
                    key = prefix + key[0].toUpperCase() + key.substring(1);
                }
            }
            this.optionalCharacter($COLON);
            let /** @type {?} */ name = /** @type {?} */ ((null));
            let /** @type {?} */ expression = /** @type {?} */ ((null));
            if (keyIsVar) {
                if (this.optionalOperator("=")) {
                    name = this.expectTemplateBindingKey();
                }
                else {
                    name = "$implicit";
                }
            }
            else if (this.peekKeywordAs()) {
                const /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                name = rawKey;
                key = this.expectTemplateBindingKey(); // read local var name
                keyIsVar = true;
            }
            else if (this.next !== EOF && !this.peekKeywordLet()) {
                const /** @type {?} */ st = this.inputIndex;
                const /** @type {?} */ ast = this.parsePipe();
                const /** @type {?} */ source = this.input.substring(st - this.offset, this.inputIndex - this.offset);
                expression = new ASTWithSource(ast, source, this.location, this.errors);
            }
            bindings.push(new TemplateBinding(this.span(start), key, keyIsVar, name, expression));
            if (this.peekKeywordAs() && !keyIsVar) {
                const /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                const /** @type {?} */ letName = this.expectTemplateBindingKey(); // read local var name
                bindings.push(new TemplateBinding(this.span(letStart), letName, true, key, /** @type {?} */ ((null))));
            }
            if (!this.optionalCharacter($SEMICOLON)) {
                this.optionalCharacter($COMMA);
            }
        }
        return new TemplateBindingParseResult(bindings, warnings, this.errors);
    }
    /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    error(message, index = null) {
        this.errors.push(new ParserError(message, this.input, this.locationText(index), this.location));
        this.skip();
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    locationText(index = null) {
        if (index === null) {
            index = this.index;
        }
        return index < this.tokens.length ? `at column ${this.tokens[index].index + 1} in` : `at the end of the expression`;
    }
    /**
     * @return {?}
     */
    skip() {
        let /** @type {?} */ n = this.next;
        while (this.index < this.tokens.length &&
            !n.isCharacter($SEMICOLON) &&
            (this.rparensExpected <= 0 || !n.isCharacter($RPAREN)) &&
            (this.rbracesExpected <= 0 || !n.isCharacter($RBRACE)) &&
            (this.rbracketsExpected <= 0 || !n.isCharacter($RBRACKET))) {
            if (this.next.isError()) {
                this.errors.push(new ParserError(/** @type {?} */ ((this.next.toString())), this.input, this.locationText(), this.location));
            }
            this.advance();
            n = this.next;
        }
    }
}
class SimpleExpressionChecker {
    constructor() {
        this.errors = [];
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    static check(ast) {
        const /** @type {?} */ s = new SimpleExpressionChecker();
        ast.visit(s);
        return s.errors;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitImplicitReceiver(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitInterpolation(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralPrimitive(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPropertyRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPropertyWrite(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSafePropertyRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitMethodCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSafeMethodCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitFunctionCall(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralArray(ast, context) {
        this.visitAll(ast.expressions);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitLiteralMap(ast, context) {
        this.visitAll(ast.values);
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitBinary(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPrefixNot(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitNonNullAssert(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitConditional(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitPipe(ast, context) {
        this.errors.push("pipes");
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyedRead(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyedWrite(ast, context) { }
    /**
     * @param {?} asts
     * @return {?}
     */
    visitAll(asts) {
        return asts.map(node => node.visit(this));
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitChain(ast, context) { }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitQuote(ast, context) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const /** @type {?} */ TAG_TO_PLACEHOLDER_NAMES = {
    'A': 'LINK',
    'B': 'BOLD_TEXT',
    'BR': 'LINE_BREAK',
    'EM': 'EMPHASISED_TEXT',
    'H1': 'HEADING_LEVEL1',
    'H2': 'HEADING_LEVEL2',
    'H3': 'HEADING_LEVEL3',
    'H4': 'HEADING_LEVEL4',
    'H5': 'HEADING_LEVEL5',
    'H6': 'HEADING_LEVEL6',
    'HR': 'HORIZONTAL_RULE',
    'I': 'ITALIC_TEXT',
    'LI': 'LIST_ITEM',
    'LINK': 'MEDIA_LINK',
    'OL': 'ORDERED_LIST',
    'P': 'PARAGRAPH',
    'Q': 'QUOTATION',
    'S': 'STRIKETHROUGH_TEXT',
    'SMALL': 'SMALL_TEXT',
    'SUB': 'SUBSTRIPT',
    'SUP': 'SUPERSCRIPT',
    'TBODY': 'TABLE_BODY',
    'TD': 'TABLE_CELL',
    'TFOOT': 'TABLE_FOOTER',
    'TH': 'TABLE_HEADER_CELL',
    'THEAD': 'TABLE_HEADER',
    'TR': 'TABLE_ROW',
    'TT': 'MONOSPACED_TEXT',
    'U': 'UNDERLINED_TEXT',
    'UL': 'UNORDERED_LIST',
};
/**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 *
 * \@internal
 */
class PlaceholderRegistry {
    constructor() {
        this._placeHolderNameCounts = {};
        this._signatureToName = {};
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    getStartTagPlaceholderName(tag, attrs, isVoid) {
        const /** @type {?} */ signature = this._hashTag(tag, attrs, isVoid);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ upperTag = tag.toUpperCase();
        const /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const /** @type {?} */ name = this._generateUniqueName(isVoid ? baseName : `START_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getCloseTagPlaceholderName(tag) {
        const /** @type {?} */ signature = this._hashClosingTag(tag);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ upperTag = tag.toUpperCase();
        const /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const /** @type {?} */ name = this._generateUniqueName(`CLOSE_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    getPlaceholderName(name, content) {
        const /** @type {?} */ upperName = name.toUpperCase();
        const /** @type {?} */ signature = `PH: ${upperName}=${content}`;
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const /** @type {?} */ uniqueName = this._generateUniqueName(upperName);
        this._signatureToName[signature] = uniqueName;
        return uniqueName;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getUniquePlaceholder(name) {
        return this._generateUniqueName(name.toUpperCase());
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    _hashTag(tag, attrs, isVoid) {
        const /** @type {?} */ start = `<${tag}`;
        const /** @type {?} */ strAttrs = Object.keys(attrs).sort().map((name) => ` ${name}=${attrs[name]}`).join('');
        const /** @type {?} */ end = isVoid ? '/>' : `></${tag}>`;
        return start + strAttrs + end;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    _hashClosingTag(tag) { return this._hashTag(`/${tag}`, {}, false); }
    /**
     * @param {?} base
     * @return {?}
     */
    _generateUniqueName(base) {
        const /** @type {?} */ seen = this._placeHolderNameCounts.hasOwnProperty(base);
        if (!seen) {
            this._placeHolderNameCounts[base] = 1;
            return base;
        }
        const /** @type {?} */ id = this._placeHolderNameCounts[base];
        this._placeHolderNameCounts[base] = id + 1;
        return `${base}_${id}`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _expParser = new Parser$1(new Lexer());
/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 * @param {?} interpolationConfig
 * @return {?}
 */
function createI18nMessageFactory(interpolationConfig) {
    const /** @type {?} */ visitor = new I18nVisitor(_expParser, interpolationConfig);
    return (nodes, meaning, description, id) => visitor.toI18nMessage(nodes, meaning, description, id);
}
class I18nVisitor {
    /**
     * @param {?} _expressionParser
     * @param {?} _interpolationConfig
     */
    constructor(_expressionParser, _interpolationConfig) {
        this._expressionParser = _expressionParser;
        this._interpolationConfig = _interpolationConfig;
    }
    /**
     * @param {?} nodes
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     * @return {?}
     */
    toI18nMessage(nodes, meaning, description, id) {
        this._isIcu = nodes.length === 1 && nodes[0] instanceof Expansion;
        this._icuDepth = 0;
        this._placeholderRegistry = new PlaceholderRegistry();
        this._placeholderToContent = {};
        this._placeholderToMessage = {};
        const /** @type {?} */ i18nodes = visitAll(this, nodes, {});
        return new Message(i18nodes, this._placeholderToContent, this._placeholderToMessage, meaning, description, id);
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        const /** @type {?} */ children = visitAll(this, el.children);
        const /** @type {?} */ attrs = {};
        el.attrs.forEach(attr => {
            // Do not visit the attributes, translatable ones are top-level ASTs
            attrs[attr.name] = attr.value;
        });
        const /** @type {?} */ isVoid = getHtmlTagDefinition(el.name).isVoid;
        const /** @type {?} */ startPhName = this._placeholderRegistry.getStartTagPlaceholderName(el.name, attrs, isVoid);
        this._placeholderToContent[startPhName] = el.sourceSpan ? /** @type {?} */ ((el.sourceSpan)).toString() : "";
        let /** @type {?} */ closePhName = "";
        if (!isVoid) {
            closePhName = this._placeholderRegistry.getCloseTagPlaceholderName(el.name);
            this._placeholderToContent[closePhName] = `</${el.name}>`;
        }
        return new TagPlaceholder(el.name, attrs, startPhName, closePhName, children, isVoid, /** @type {?} */ ((el.sourceSpan)));
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        return this._visitTextWithInterpolation(attribute.value, attribute.sourceSpan);
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        return this._visitTextWithInterpolation(text.value, /** @type {?} */ ((text.sourceSpan)));
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return null;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        this._icuDepth++;
        const /** @type {?} */ i18nIcuCases = {};
        const /** @type {?} */ i18nIcu = new Icu(icu.switchValue, icu.type, i18nIcuCases, icu.sourceSpan);
        icu.cases.forEach((caze) => {
            i18nIcuCases[caze.value] = new Container(caze.expression.map(node => node.visit(this, {})), caze.expSourceSpan);
        });
        this._icuDepth--;
        if (this._isIcu || this._icuDepth > 0) {
            // Returns an ICU node when:
            // - the message (vs a part of the message) is an ICU message, or
            // - the ICU message is nested.
            const /** @type {?} */ expPh = this._placeholderRegistry.getUniquePlaceholder(`VAR_${icu.type}`);
            i18nIcu.expressionPlaceholder = expPh;
            this._placeholderToContent[expPh] = icu.switchValue;
            return i18nIcu;
        }
        // Else returns a placeholder
        // ICU placeholders should not be replaced with their original content but with the their
        // translations. We need to create a new visitor (they are not re-entrant) to compute the
        // message id.
        // TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
        const /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName("ICU", icu.sourceSpan.toString());
        const /** @type {?} */ visitor = new I18nVisitor(this._expressionParser, this._interpolationConfig);
        this._placeholderToMessage[phName] = visitor.toI18nMessage([icu], "", "", "");
        return new IcuPlaceholder(i18nIcu, phName, icu.sourceSpan);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        throw new Error("Unreachable code");
    }
    /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    _visitTextWithInterpolation(text, sourceSpan) {
        const /** @type {?} */ splitInterpolation = this._expressionParser.splitInterpolation(text, sourceSpan.start.toString(), this._interpolationConfig);
        if (!splitInterpolation) {
            // No expression, return a single text
            return new Text$1(text, sourceSpan);
        }
        // Return a group of text + expressions
        const /** @type {?} */ nodes = [];
        const /** @type {?} */ container = new Container(nodes, sourceSpan);
        const { start: sDelimiter, end: eDelimiter } = this._interpolationConfig;
        for (let /** @type {?} */ i = 0; i < splitInterpolation.strings.length - 1; i++) {
            const /** @type {?} */ expression = splitInterpolation.expressions[i];
            const /** @type {?} */ baseName = extractPlaceholderName(expression) || "INTERPOLATION";
            const /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName(baseName, expression);
            if (splitInterpolation.strings[i].length) {
                // No need to add empty strings
                nodes.push(new Text$1(splitInterpolation.strings[i], sourceSpan));
            }
            nodes.push(new Placeholder(expression, phName, sourceSpan));
            this._placeholderToContent[phName] = sDelimiter + expression + eDelimiter;
        }
        // The last index contains no expression
        const /** @type {?} */ lastStringIdx = splitInterpolation.strings.length - 1;
        if (splitInterpolation.strings[lastStringIdx].length) {
            nodes.push(new Text$1(splitInterpolation.strings[lastStringIdx], sourceSpan));
        }
        return container;
    }
}
const /** @type {?} */ _CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
/**
 * @param {?} input
 * @return {?}
 */
function extractPlaceholderName(input) {
    return input.split(_CUSTOM_PH_EXP)[2];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _I18N_ATTR = "i18n";
class HtmlParser extends Parser {
    /**
     * @param {?=} interpolationConfig
     */
    constructor(interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        super(getHtmlTagDefinition);
        this.interpolationConfig = interpolationConfig;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    parse(source, url, parseExpansionForms = false) {
        return super.parse(source, url, parseExpansionForms, this.interpolationConfig);
    }
    /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    extractMessages(nodes) {
        const /** @type {?} */ visitor = new Visitor$4(["wrapper"]);
        // Construct a single fake root element
        const /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.extract(wrapper, this.interpolationConfig);
    }
    /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    mergeTranslations(nodes, translations, params, metadata, implicitTags = []) {
        const /** @type {?} */ visitor = new Visitor$4(implicitTags);
        // Construct a single fake root element
        const /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
    }
}
class ExtractionResult {
    /**
     * @param {?} messages
     * @param {?} errors
     */
    constructor(messages, errors) {
        this.messages = messages;
        this.errors = errors;
    }
}
/**
 * A container for translated messages
 */
class TranslationBundle {
    /**
     * @param {?=} i18nNodesByMsgId
     * @param {?=} digest
     * @param {?=} interpolationConfig
     * @param {?=} missingTranslationStrategy
     * @param {?=} mapperFactory
     * @param {?=} console
     */
    constructor(i18nNodesByMsgId = {}, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
        this.i18nNodesByMsgId = i18nNodesByMsgId;
        this.digest = digest;
        this.mapperFactory = mapperFactory;
        this.i18nToHtml = new I18nToHtmlVisitor(i18nNodesByMsgId, digest, /** @type {?} */ ((mapperFactory)), missingTranslationStrategy, interpolationConfig, console);
    }
    /**
     * @param {?} content
     * @param {?} url
     * @param {?} digest
     * @param {?} createNameMapper
     * @param {?} loadFct
     * @param {?} missingTranslationStrategy
     * @param {?=} interpolationConfig
     * @return {?}
     */
    static load(content, url, digest, createNameMapper, loadFct, missingTranslationStrategy, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const /** @type {?} */ i18nNodesByMsgId = loadFct(content, url);
        const /** @type {?} */ digestFn = (m) => digest(m);
        const /** @type {?} */ mapperFactory = (m) => /** @type {?} */ ((createNameMapper(m)));
        return new TranslationBundle(i18nNodesByMsgId, digestFn, interpolationConfig, missingTranslationStrategy, mapperFactory, console);
    }
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    get(srcMsg, params) {
        const /** @type {?} */ htmlRes = this.i18nToHtml.convert(srcMsg, params);
        if (htmlRes.errors.length) {
            throw new Error(htmlRes.errors.join("\n"));
        }
        return htmlRes.nodes;
    }
    /**
     * @param {?} srcMsg
     * @return {?}
     */
    has(srcMsg) {
        return this.digest(srcMsg) in this.i18nNodesByMsgId;
    }
}
class I18nToHtmlVisitor {
    /**
     * @param {?=} _i18nNodesByMsgId
     * @param {?=} _digest
     * @param {?=} _mapperFactory
     * @param {?=} _missingTranslationStrategy
     * @param {?=} _interpolationConfig
     * @param {?=} _console
     */
    constructor(_i18nNodesByMsgId = {}, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
        this._i18nNodesByMsgId = _i18nNodesByMsgId;
        this._digest = _digest;
        this._mapperFactory = _mapperFactory;
        this._missingTranslationStrategy = _missingTranslationStrategy;
        this._interpolationConfig = _interpolationConfig;
        this._console = _console;
        this._contextStack = [];
        this._errors = [];
    }
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    convert(srcMsg, params) {
        this._contextStack.length = 0;
        this._errors.length = 0;
        this._params = params;
        this._paramKeys = Object.keys(params);
        // i18n to text
        const /** @type {?} */ text = this.convertToText(srcMsg);
        // text to html
        const /** @type {?} */ url = srcMsg.nodes[0].sourceSpan.start.file.url;
        const /** @type {?} */ htmlParser = new HtmlParser().parse(text, url, true);
        return {
            nodes: htmlParser.rootNodes,
            errors: [...this._errors, ...htmlParser.errors]
        };
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    visitText(text, context) {
        return text.value;
    }
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    visitContainer(container, context) {
        return container.children.map(n => n.visit(this)).join("");
    }
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    visitIcu(icu, context) {
        const /** @type {?} */ cases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
        // TODO(vicb): Once all format switch to using expression placeholders
        // we should throw when the placeholder is not in the source message
        const /** @type {?} */ exp = this._srcMsg.placeholders.hasOwnProperty(icu.expression)
            ? this._srcMsg.placeholders[icu.expression]
            : icu.expression;
        return `{${exp}, ${icu.type}, ${cases.join(" ")}}`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitPlaceholder(ph, context) {
        const /** @type {?} */ phName = this._mapper(ph.name);
        if (this._srcMsg.placeholders.hasOwnProperty(phName)) {
            return this.convertToValue(this._srcMsg.placeholders[phName]);
        }
        if (this._srcMsg.placeholderToMessage.hasOwnProperty(phName)) {
            return this.convertToText(this._srcMsg.placeholderToMessage[phName]);
        }
        this._addError(ph, `Unknown placeholder "${ph.name}"`);
        return "";
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitTagPlaceholder(ph, context) {
        const /** @type {?} */ tag = `${ph.tag}`;
        const /** @type {?} */ attrs = Object.keys(ph.attrs)
            .map(name => `${name}="${ph.attrs[name]}"`)
            .join(" ");
        if (ph.isVoid) {
            return `<${tag} ${attrs}/>`;
        }
        const /** @type {?} */ children = ph.children.map((c) => c.visit(this)).join("");
        return `<${tag} ${attrs}>${children}</${tag}>`;
    }
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    visitIcuPlaceholder(ph, context) {
        // An ICU placeholder references the source message to be serialized
        return this.convertToText(this._srcMsg.placeholderToMessage[ph.name]);
    }
    /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    convertToText(srcMsg) {
        const /** @type {?} */ id = this._digest(srcMsg);
        const /** @type {?} */ mapper = this._mapperFactory ? this._mapperFactory(srcMsg) : null;
        let /** @type {?} */ nodes;
        this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper });
        this._srcMsg = srcMsg;
        if (this._i18nNodesByMsgId.hasOwnProperty(id)) {
            // When there is a translation use its nodes as the source
            // And create a mapper to convert serialized placeholder names to internal names
            nodes = this._i18nNodesByMsgId[id];
            this._mapper = (name) => (mapper ? /** @type {?} */ ((mapper.toInternalName(name))) : name);
        }
        else {
            // When no translation has been found
            // - report an error / a warning / nothing,
            // - use the nodes from the original message
            // - placeholders are already internal and need no mapper
            if (this._missingTranslationStrategy === MissingTranslationStrategy.Error) {
                this._addError(srcMsg.nodes[0], `Missing translation for message "${id}"`);
            }
            else if (this._console && this._missingTranslationStrategy === MissingTranslationStrategy.Warning) {
                this._console.warn(`Missing translation for message "${id}"`);
            }
            nodes = srcMsg.nodes;
            this._mapper = (name) => name;
        }
        const /** @type {?} */ text = nodes.map(node => node.visit(this)).join("");
        const /** @type {?} */ context = /** @type {?} */ ((this._contextStack.pop()));
        this._srcMsg = context.msg;
        this._mapper = context.mapper;
        return text;
    }
    /**
     * @param {?} placeholder
     * @return {?}
     */
    convertToValue(placeholder) {
        const /** @type {?} */ param = placeholder.replace(this._interpolationConfig.start, "").replace(this._interpolationConfig.end, "");
        return this._paramKeys.indexOf(param) !== -1 ? this._params[param] : placeholder;
    }
    /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    _addError(el, msg) {
        this._errors.push(new I18nError(el.sourceSpan, msg));
    }
}
/** @enum {number} */
const VisitorMode = {
    Extract: 0,
    Merge: 1,
};
VisitorMode[VisitorMode.Extract] = "Extract";
VisitorMode[VisitorMode.Merge] = "Merge";
/**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * \@internal
 */
class Visitor$4 {
    /**
     * @param {?=} _implicitTags
     */
    constructor(_implicitTags = []) {
        this._implicitTags = _implicitTags;
        this.blockChildren = [];
    }
    /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    extract(node, interpolationConfig) {
        this.init(VisitorMode.Extract, interpolationConfig);
        node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ExtractionResult(this.messages, this.errors);
    }
    /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    merge(node, translations, interpolationConfig, params, metadata = {}) {
        this.init(VisitorMode.Merge, interpolationConfig, params);
        this.translations = translations;
        this.metadata = metadata;
        const /** @type {?} */ translatedNode = node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ParseTreeResult(translatedNode.children, this.errors);
    }
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    visitExpansionCase(icuCase, context) {
        // Parse cases for translatable html attributes
        const /** @type {?} */ expression = visitAll(this, icuCase.expression, context);
        if (this.mode === VisitorMode.Merge) {
            return new ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
        }
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    visitExpansion(icu, context) {
        this.mayBeAddBlockChildren(icu);
        const /** @type {?} */ wasInIcu = this.inIcu;
        if (!this.inIcu) {
            // nested ICU messages should not be extracted but top-level translated as a whole
            if (this.isInTranslatableSection) {
                this.addMessage([icu]);
            }
            this.inIcu = true;
        }
        const /** @type {?} */ cases = visitAll(this, icu.cases, context);
        if (this.mode === VisitorMode.Merge) {
            icu = new Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
        }
        this.inIcu = wasInIcu;
        return icu;
    }
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    visitComment(comment, context) {
        return;
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    visitText(text, context) {
        if (this.isInTranslatableSection) {
            this.mayBeAddBlockChildren(text);
        }
        return text;
    }
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    visitElement(el, context) {
        this.mayBeAddBlockChildren(el);
        this.depth++;
        const /** @type {?} */ wasInI18nNode = this.inI18nNode;
        const /** @type {?} */ wasInImplicitNode = this.inImplicitNode;
        let /** @type {?} */ childNodes = [];
        let /** @type {?} */ translatedChildNodes = /** @type {?} */ ((undefined));
        // Extract:
        // - top level nodes with the (implicit) "i18n" attribute if not already in a section
        // - ICU messages
        const /** @type {?} */ i18nAttr = getI18nAttr(el);
        const /** @type {?} */ isImplicit = this._implicitTags.some(tag => el.name === tag) && !this.inIcu && !this.isInTranslatableSection;
        const /** @type {?} */ isTopLevelImplicit = !wasInImplicitNode && isImplicit;
        this.inImplicitNode = wasInImplicitNode || isImplicit;
        if (!this.isInTranslatableSection && !this.inIcu) {
            if (i18nAttr || isTopLevelImplicit) {
                this.inI18nNode = true;
                const /** @type {?} */ message = /** @type {?} */ ((this.addMessage(el.children, this.metadata)));
                translatedChildNodes = this.translateMessage(el, message);
            }
            if (this.mode === VisitorMode.Extract) {
                const /** @type {?} */ isTranslatable = i18nAttr || isTopLevelImplicit;
                if (isTranslatable) {
                    this.openTranslatableSection(el);
                }
                visitAll(this, el.children);
                if (isTranslatable) {
                    this._closeTranslatableSection(el, el.children);
                }
            }
        }
        else {
            if (i18nAttr || isTopLevelImplicit) {
                this._reportError(el, "Could not mark an element as translatable inside a translatable section");
            }
            if (this.mode === VisitorMode.Extract) {
                // Descend into child nodes for extraction
                visitAll(this, el.children);
            }
        }
        if (this.mode === VisitorMode.Merge) {
            const /** @type {?} */ visitNodes = translatedChildNodes || el.children;
            visitNodes.forEach(child => {
                const /** @type {?} */ visited = child.visit(this, context);
                if (visited && !this.isInTranslatableSection) {
                    // Do not add the children from translatable sections (= i18n blocks here)
                    // They will be added later in this loop when the block closes (i.e. on `<!-- /i18n -->`)
                    childNodes = childNodes.concat(visited);
                }
            });
        }
        this.depth--;
        this.inI18nNode = wasInI18nNode;
        this.inImplicitNode = wasInImplicitNode;
        if (this.mode === VisitorMode.Merge) {
            return new Element(el.name, [], childNodes, el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
        }
        return null;
    }
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    visitAttribute(attribute, context) {
        throw new Error("unreachable code");
    }
    /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    init(mode, interpolationConfig, params = {}) {
        this.mode = mode;
        this.inI18nBlock = false;
        this.inI18nNode = false;
        this.depth = 0;
        this.inIcu = false;
        this.msgCountAtSectionStart = undefined;
        this.errors = [];
        this.messages = [];
        this.inImplicitNode = false;
        this.createI18nMessage = createI18nMessageFactory(interpolationConfig);
        this.params = params;
    }
    /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    addMessage(ast, { meaning = "", description = "", id = "" } = {}) {
        if (ast.length === 0 ||
            (ast.length === 1 && ast[0] instanceof Attribute && !(/** @type {?} */ (ast[0])).value)) {
            // Do not create empty messages
            return null;
        }
        const /** @type {?} */ message = this.createI18nMessage(ast, meaning, description, id);
        this.messages.push(message);
        return message;
    }
    /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    translateMessage(el, message) {
        if (message && this.mode === VisitorMode.Merge) {
            const /** @type {?} */ nodes = this.translations.get(message, this.params);
            if (nodes) {
                return nodes;
            }
            this._reportError(el, `Translation unavailable for message id="${this.translations.digest(message)}"`);
        }
        return [];
    }
    /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    mayBeAddBlockChildren(node) {
        if (this.inI18nBlock && !this.inIcu && this.depth === this.blockStartDepth) {
            this.blockChildren.push(node);
        }
    }
    /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    openTranslatableSection(node) {
        if (this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section start");
        }
        else {
            this.msgCountAtSectionStart = this.messages.length;
        }
    }
    /**
     * A translatable section could be:
     * - the content of translatable element,
     * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
     * @return {?}
     */
    get isInTranslatableSection() {
        return this.msgCountAtSectionStart !== void 0;
    }
    /**
     * Terminates a section.
     *
     * If a section has only one significant children (comments not significant) then we should not
     * keep the message from this children:
     *
     * `<p i18n="meaning|description">{ICU message}</p>` would produce two messages:
     * - one for the <p> content with meaning and description,
     * - another one for the ICU message.
     *
     * In this case the last message is discarded as it contains less information (the AST is
     * otherwise identical).
     *
     * Note that we should still keep messages extracted from attributes inside the section (ie in the
     * ICU message here)
     * @param {?} node
     * @param {?} directChildren
     * @return {?}
     */
    _closeTranslatableSection(node, directChildren) {
        if (!this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section end");
            return;
        }
        const /** @type {?} */ startIndex = this.msgCountAtSectionStart;
        const /** @type {?} */ significantChildren = directChildren.reduce((count, n) => count + (n instanceof Comment ? 0 : 1), 0);
        if (significantChildren === 1) {
            for (let /** @type {?} */ i = this.messages.length - 1; i >= /** @type {?} */ ((startIndex)); i--) {
                const /** @type {?} */ ast = this.messages[i].nodes;
                if (!(ast.length === 1 && ast[0] instanceof Text$1)) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
        this.msgCountAtSectionStart = undefined;
    }
    /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    _reportError(node, msg) {
        this.errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), msg));
    }
}
/**
 * @param {?} p
 * @return {?}
 */
function getI18nAttr(p) {
    return p.attrs.find(attr => attr.name === _I18N_ATTR) || null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new InjectionToken("MissingTranslationStrategy");
/**
 * A speculative polyfill to use i18n code translations
 */
class I18n {
    /**
     * @param {?} format
     * @param {?} translations
     * @param {?} locale
     * @param {?=} missingTranslationStrategy
     */
    constructor(format, translations, locale, missingTranslationStrategy = MissingTranslationStrategy.Warning) {
        let /** @type {?} */ loadFct;
        let /** @type {?} */ digest;
        let /** @type {?} */ createMapper = (message) => null;
        format = (format || "xlf").toLowerCase();
        switch (format) {
            case "xtb":
                loadFct = xtbLoadToI18n;
                digest = xtbDigest;
                createMapper = xtbMapper;
                break;
            case "xliff2":
            case "xlf2":
                loadFct = xliff2LoadToI18n;
                digest = xliff2Digest;
                break;
            case "xliff":
            case "xlf":
                loadFct = xliffLoadToI18n;
                digest = xliffDigest;
                break;
            default:
                throw new Error(`Unknown translations format ${format}`);
        }
        const /** @type {?} */ htmlParser = new HtmlParser();
        const /** @type {?} */ translationsBundle = TranslationBundle.load(translations, "i18n", digest, createMapper, loadFct, missingTranslationStrategy);
        // todo use interpolation config
        return (def, params = {}) => {
            const /** @type {?} */ content = typeof def === "string" ? def : def.value;
            const /** @type {?} */ metadata = {};
            if (typeof def === "object") {
                metadata["id"] = def.id;
                metadata["meaning"] = def.meaning;
                metadata["description"] = def.description;
            }
            const /** @type {?} */ htmlParserResult = htmlParser.parse(content, "", true);
            if (htmlParserResult.errors.length) {
                throw htmlParserResult.errors;
            }
            const /** @type {?} */ mergedNodes = htmlParser.mergeTranslations(htmlParserResult.rootNodes, translationsBundle, params, metadata, ["wrapper"]);
            return serializeNodes(mergedNodes.rootNodes, locale, params).join("");
        };
    }
}
I18n.decorators = [
    { type: Injectable },
];
/** @nocollapse */
I18n.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS_FORMAT,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
    { type: MissingTranslationStrategy, decorators: [{ type: Optional }, { type: Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { I18n, MISSING_TRANSLATION_STRATEGY };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzd2l0Y2hWYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiBFeHBhbnNpb25DYXNlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwYW5zaW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25DYXNlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBOb2RlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgdmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIGV4cFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhblxuICApIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbkNhc2UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3BhblxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyaWJ1dGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgYXR0cnM6IEF0dHJpYnV0ZVtdLFxuICAgIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG4gICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29tbWVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgZnJvbSBgdmlzaXQoKWAgd2lsbCBwcmV2ZW50IGB2aXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvIHRoZSB0eXBlZFxuICAvLyBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHMgcmVzdWx0IGFycmF5LlxuICB2aXNpdD8obm9kZTogTm9kZSwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBFeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEFsbCh2aXNpdG9yOiBWaXNpdG9yLCBub2RlczogTm9kZVtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0XG4gICAgPyAoYXN0OiBOb2RlKSA9PiB2aXNpdG9yLnZpc2l0IShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KVxuICAgIDogKGFzdDogTm9kZSkgPT4gYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICBub2Rlcy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgY29uc3QgYXN0UmVzdWx0ID0gdmlzaXQoYXN0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgc291cmNlczogTWVzc2FnZVNwYW5bXTtcblxuICAvKipcbiAgICogQHBhcmFtIHNvdXJjZSBtZXNzYWdlIEFTVFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJzIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gc3RhdGljIGNvbnRlbnRcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyVG9NZXNzYWdlIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gbWVzc2FnZXMgKHVzZWQgZm9yIG5lc3RlZCBJQ1UgbWVzc2FnZXMpXG4gICAqIEBwYXJhbSBtZWFuaW5nXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBub2RlczogTm9kZVtdLFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IE1lc3NhZ2V9LFxuICAgIHB1YmxpYyBtZWFuaW5nOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGlkOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZVBhdGg6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmwsXG4gICAgICAgICAgc3RhcnRMaW5lOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICAgIHN0YXJ0Q29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDEsXG4gICAgICAgICAgZW5kTGluZTogbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc291cmNlU3Bhbi5lbmQubGluZSArIDEsXG4gICAgICAgICAgZW5kQ29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDFcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW107XG4gICAgfVxuICB9XG59XG5cbi8vIGxpbmUgYW5kIGNvbHVtbnMgaW5kZXhlcyBhcmUgMSBiYXNlZFxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU3BhbiB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIHN0YXJ0TGluZTogbnVtYmVyO1xuICBzdGFydENvbDogbnVtYmVyO1xuICBlbmRMaW5lOiBudW1iZXI7XG4gIGVuZENvbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vLyBUT0RPKHZpY2IpOiBkbyB3ZSByZWFsbHkgbmVlZCB0aGlzIG5vZGUgKHZzIGFuIGFycmF5KSA/XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGFpbmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3UgaW1wbGVtZW50cyBOb2RlIHtcbiAgcHVibGljIGV4cHJlc3Npb25QbGFjZWhvbGRlcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9LFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sXG4gICAgcHVibGljIHN0YXJ0TmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjbG9zZU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgaXNWb2lkOiBib29sZWFuLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnUGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdVBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogSWN1LCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuLy8gQ2xvbmUgdGhlIEFTVFxuZXhwb3J0IGNsYXNzIENsb25lVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IFRleHQge1xuICAgIHJldHVybiBuZXcgVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBDb250YWluZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyKGNoaWxkcmVuLCBjb250YWluZXIuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IEljdSB7XG4gICAgY29uc3QgY2FzZXM6IHtbazogc3RyaW5nXTogTm9kZX0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goa2V5ID0+IChjYXNlc1trZXldID0gaWN1LmNhc2VzW2tleV0udmlzaXQodGhpcywgY29udGV4dCkpKTtcbiAgICBjb25zdCBtc2cgPSBuZXcgSWN1KGljdS5leHByZXNzaW9uLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBtc2cuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gaWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBUYWdQbGFjZWhvbGRlciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IFRhZ1BsYWNlaG9sZGVyKHBoLnRhZywgcGguYXR0cnMsIHBoLnN0YXJ0TmFtZSwgcGguY2xvc2VOYW1lLCBjaGlsZHJlbiwgcGguaXNWb2lkLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgUGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBJY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBJY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgcGgubmFtZSwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cblxuLy8gVmlzaXQgYWxsIHRoZSBub2RlcyByZWN1cnNpdmVseVxuZXhwb3J0IGNsYXNzIFJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goayA9PiB7XG4gICAgICBpY3UuY2FzZXNba10udmlzaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHt9XG59XG4iLCJpbXBvcnQge0kxOG5EZWZ9IGZyb20gXCIuLi9pMThuLXBvbHlmaWxsXCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBwdWJsaWMgb2Zmc2V0OiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsIHB1YmxpYyBjb2w6IG51bWJlcikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCAhPSBudWxsID8gYCR7dGhpcy5saW5lfToke3RoaXMuY29sfWAgOiBcIlwiO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBzb3VyY2UgYXJvdW5kIHRoZSBsb2NhdGlvblxuICAvLyBVcCB0byBgbWF4Q2hhcnNgIG9yIGBtYXhMaW5lc2Agb24gZWFjaCBzaWRlIG9mIHRoZSBsb2NhdGlvblxuICBnZXRDb250ZXh0KG1heENoYXJzOiBudW1iZXIsIG1heExpbmVzOiBudW1iZXIpOiB7YmVmb3JlOiBzdHJpbmc7IGFmdGVyOiBzdHJpbmd9IHwgbnVsbCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZmlsZS5jb250ZW50O1xuICAgIGxldCBzdGFydE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHN0YXJ0T2Zmc2V0ICE9IG51bGwpIHtcbiAgICAgIGlmIChzdGFydE9mZnNldCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGFydE9mZnNldCA9IGNvbnRlbnQubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBlbmRPZmZzZXQgPSBzdGFydE9mZnNldDtcbiAgICAgIGxldCBjdHhDaGFycyA9IDA7XG4gICAgICBsZXQgY3R4TGluZXMgPSAwO1xuXG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBzdGFydE9mZnNldCA+IDApIHtcbiAgICAgICAgc3RhcnRPZmZzZXQtLTtcbiAgICAgICAgY3R4Q2hhcnMrKztcbiAgICAgICAgaWYgKGNvbnRlbnRbc3RhcnRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3R4Q2hhcnMgPSAwO1xuICAgICAgY3R4TGluZXMgPSAwO1xuICAgICAgd2hpbGUgKGN0eENoYXJzIDwgbWF4Q2hhcnMgJiYgZW5kT2Zmc2V0IDwgY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVuZE9mZnNldCsrO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtlbmRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlOiBjb250ZW50LnN1YnN0cmluZyhzdGFydE9mZnNldCwgdGhpcy5vZmZzZXQpLFxuICAgICAgICBhZnRlcjogY29udGVudC5zdWJzdHJpbmcodGhpcy5vZmZzZXQsIGVuZE9mZnNldCArIDEpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNvdXJjZUZpbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGVudDogc3RyaW5nLCBwdWJsaWMgdXJsID0gXCJcIikge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGVuZDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGRldGFpbHM6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBQYXJzZUVycm9yTGV2ZWwge1xuICBXQVJOSU5HLFxuICBFUlJPUlxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIG1zZzogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbDogUGFyc2VFcnJvckxldmVsID0gUGFyc2VFcnJvckxldmVsLkVSUk9SXG4gICkge31cblxuICBjb250ZXh0dWFsTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuc3Bhbi5zdGFydC5nZXRDb250ZXh0KDEwMCwgMyk7XG4gICAgcmV0dXJuIGN0eCA/IGAgKFwiJHtjdHguYmVmb3JlfVske1BhcnNlRXJyb3JMZXZlbFt0aGlzLmxldmVsXX0gLT5dJHtjdHguYWZ0ZXJ9XCIpYCA6IFwiXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLnNwYW4uZGV0YWlscyA/IGAsICR7dGhpcy5zcGFuLmRldGFpbHN9YCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3RoaXMubXNnfSR7dGhpcy5jb250ZXh0dWFsTWVzc2FnZSgpfTogJHt0aGlzLnNwYW4uc3RhcnR9JHtkZXRhaWxzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpMThuIGVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgSTE4bkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuLCBtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBzdHJpbmcsIHB1YmxpYyBlbmQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc6IEludGVycG9sYXRpb25Db25maWcgPSBuZXcgSW50ZXJwb2xhdGlvbkNvbmZpZyhcInt7XCIsIFwifX1cIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCAkRU9GID0gMDtcbmV4cG9ydCBjb25zdCAkVEFCID0gOTtcbmV4cG9ydCBjb25zdCAkTEYgPSAxMDtcbmV4cG9ydCBjb25zdCAkVlRBQiA9IDExO1xuZXhwb3J0IGNvbnN0ICRGRiA9IDEyO1xuZXhwb3J0IGNvbnN0ICRDUiA9IDEzO1xuZXhwb3J0IGNvbnN0ICRTUEFDRSA9IDMyO1xuZXhwb3J0IGNvbnN0ICRCQU5HID0gMzM7XG5leHBvcnQgY29uc3QgJERRID0gMzQ7XG5leHBvcnQgY29uc3QgJEhBU0ggPSAzNTtcbmV4cG9ydCBjb25zdCAkJCA9IDM2O1xuZXhwb3J0IGNvbnN0ICRQRVJDRU5UID0gMzc7XG5leHBvcnQgY29uc3QgJEFNUEVSU0FORCA9IDM4O1xuZXhwb3J0IGNvbnN0ICRTUSA9IDM5O1xuZXhwb3J0IGNvbnN0ICRMUEFSRU4gPSA0MDtcbmV4cG9ydCBjb25zdCAkUlBBUkVOID0gNDE7XG5leHBvcnQgY29uc3QgJFNUQVIgPSA0MjtcbmV4cG9ydCBjb25zdCAkUExVUyA9IDQzO1xuZXhwb3J0IGNvbnN0ICRDT01NQSA9IDQ0O1xuZXhwb3J0IGNvbnN0ICRNSU5VUyA9IDQ1O1xuZXhwb3J0IGNvbnN0ICRQRVJJT0QgPSA0NjtcbmV4cG9ydCBjb25zdCAkU0xBU0ggPSA0NztcbmV4cG9ydCBjb25zdCAkQ09MT04gPSA1ODtcbmV4cG9ydCBjb25zdCAkU0VNSUNPTE9OID0gNTk7XG5leHBvcnQgY29uc3QgJExUID0gNjA7XG5leHBvcnQgY29uc3QgJEVRID0gNjE7XG5leHBvcnQgY29uc3QgJEdUID0gNjI7XG5leHBvcnQgY29uc3QgJFFVRVNUSU9OID0gNjM7XG5cbmV4cG9ydCBjb25zdCAkMCA9IDQ4O1xuZXhwb3J0IGNvbnN0ICQ5ID0gNTc7XG5cbmV4cG9ydCBjb25zdCAkQSA9IDY1O1xuZXhwb3J0IGNvbnN0ICRFID0gNjk7XG5leHBvcnQgY29uc3QgJEYgPSA3MDtcbmV4cG9ydCBjb25zdCAkWCA9IDg4O1xuZXhwb3J0IGNvbnN0ICRaID0gOTA7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNLRVQgPSA5MTtcbmV4cG9ydCBjb25zdCAkQkFDS1NMQVNIID0gOTI7XG5leHBvcnQgY29uc3QgJFJCUkFDS0VUID0gOTM7XG5leHBvcnQgY29uc3QgJENBUkVUID0gOTQ7XG5leHBvcnQgY29uc3QgJF8gPSA5NTtcblxuZXhwb3J0IGNvbnN0ICRhID0gOTc7XG5leHBvcnQgY29uc3QgJGUgPSAxMDE7XG5leHBvcnQgY29uc3QgJGYgPSAxMDI7XG5leHBvcnQgY29uc3QgJG4gPSAxMTA7XG5leHBvcnQgY29uc3QgJHIgPSAxMTQ7XG5leHBvcnQgY29uc3QgJHQgPSAxMTY7XG5leHBvcnQgY29uc3QgJHUgPSAxMTc7XG5leHBvcnQgY29uc3QgJHYgPSAxMTg7XG5leHBvcnQgY29uc3QgJHggPSAxMjA7XG5leHBvcnQgY29uc3QgJHogPSAxMjI7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNFID0gMTIzO1xuZXhwb3J0IGNvbnN0ICRCQVIgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFJCUkFDRSA9IDEyNTtcbmV4cG9ydCBjb25zdCAkTkJTUCA9IDE2MDtcblxuZXhwb3J0IGNvbnN0ICRQSVBFID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRUSUxEQSA9IDEyNjtcbmV4cG9ydCBjb25zdCAkQVQgPSA2NDtcblxuZXhwb3J0IGNvbnN0ICRCVCA9IDk2O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJFRBQiAmJiBjb2RlIDw9ICRTUEFDRSkgfHwgY29kZSA9PT0gJE5CU1A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gJDAgPD0gY29kZSAmJiBjb2RlIDw9ICQ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUxldHRlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRhICYmIGNvZGUgPD0gJHopIHx8IChjb2RlID49ICRBICYmIGNvZGUgPD0gJFopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUhleERpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkZikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkRikgfHwgaXNEaWdpdChjb2RlKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGVudW0gVGFnQ29udGVudFR5cGUge1xuICBSQVdfVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBQQVJTQUJMRV9EQVRBXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50OiBib29sZWFuO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gIGNvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZTtcbiAgaXNWb2lkOiBib29sZWFuO1xuICBpZ25vcmVGaXJzdExmOiBib29sZWFuO1xuICBjYW5TZWxmQ2xvc2U6IGJvb2xlYW47XG5cbiAgcmVxdWlyZUV4dHJhUGFyZW50KGN1cnJlbnRQYXJlbnQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdE5zTmFtZShlbGVtZW50TmFtZTogc3RyaW5nKTogW3N0cmluZyB8IG51bGwsIHN0cmluZ10ge1xuICBpZiAoZWxlbWVudE5hbWVbMF0gIT09IFwiOlwiKSB7XG4gICAgcmV0dXJuIFtudWxsLCBlbGVtZW50TmFtZV07XG4gIH1cblxuICBjb25zdCBjb2xvbkluZGV4ID0gZWxlbWVudE5hbWUuaW5kZXhPZihcIjpcIiwgMSk7XG5cbiAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBmb3JtYXQgXCIke2VsZW1lbnROYW1lfVwiIGV4cGVjdGluZyBcIjpuYW1lc3BhY2U6bmFtZVwiYCk7XG4gIH1cblxuICByZXR1cm4gW2VsZW1lbnROYW1lLnNsaWNlKDEsIGNvbG9uSW5kZXgpLCBlbGVtZW50TmFtZS5zbGljZShjb2xvbkluZGV4ICsgMSldO1xufVxuXG4vLyBgPG5nLWNvbnRhaW5lcj5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGFpbmVyKHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGFpbmVyXCI7XG59XG5cbi8vIGA8bmctY29udGVudD5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGVudCh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLWNvbnRlbnRcIjtcbn1cblxuLy8gYDxuZy10ZW1wbGF0ZT5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nVGVtcGxhdGUodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy10ZW1wbGF0ZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogbnVsbCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIGZ1bGxOYW1lID09PSBudWxsID8gbnVsbCA6IHNwbGl0TnNOYW1lKGZ1bGxOYW1lKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTnNBbmROYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwcmVmaXggPyBgOiR7cHJlZml4fToke2xvY2FsTmFtZX1gIDogbG9jYWxOYW1lO1xufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzXG4vLyBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW50aXRpZXMuanNvblxuLy8gVGhpcyBsaXN0IGlzIG5vdCBleGhhdXN0aXZlIHRvIGtlZXAgdGhlIGNvbXBpbGVyIGZvb3RwcmludCBsb3cuXG4vLyBUaGUgYCYjMTIzO2AgLyBgJiN4MWFiO2Agc3ludGF4IHNob3VsZCBiZSB1c2VkIHdoZW4gdGhlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2UgZG9lcyBub3Rcbi8vIGV4aXN0LlxuXG5leHBvcnQgY29uc3QgTkFNRURfRU5USVRJRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgQWFjdXRlOiBcIlxcdTAwQzFcIixcbiAgYWFjdXRlOiBcIlxcdTAwRTFcIixcbiAgQWNpcmM6IFwiXFx1MDBDMlwiLFxuICBhY2lyYzogXCJcXHUwMEUyXCIsXG4gIGFjdXRlOiBcIlxcdTAwQjRcIixcbiAgQUVsaWc6IFwiXFx1MDBDNlwiLFxuICBhZWxpZzogXCJcXHUwMEU2XCIsXG4gIEFncmF2ZTogXCJcXHUwMEMwXCIsXG4gIGFncmF2ZTogXCJcXHUwMEUwXCIsXG4gIGFsZWZzeW06IFwiXFx1MjEzNVwiLFxuICBBbHBoYTogXCJcXHUwMzkxXCIsXG4gIGFscGhhOiBcIlxcdTAzQjFcIixcbiAgYW1wOiBcIiZcIixcbiAgYW5kOiBcIlxcdTIyMjdcIixcbiAgYW5nOiBcIlxcdTIyMjBcIixcbiAgYXBvczogXCJcXHUwMDI3XCIsXG4gIEFyaW5nOiBcIlxcdTAwQzVcIixcbiAgYXJpbmc6IFwiXFx1MDBFNVwiLFxuICBhc3ltcDogXCJcXHUyMjQ4XCIsXG4gIEF0aWxkZTogXCJcXHUwMEMzXCIsXG4gIGF0aWxkZTogXCJcXHUwMEUzXCIsXG4gIEF1bWw6IFwiXFx1MDBDNFwiLFxuICBhdW1sOiBcIlxcdTAwRTRcIixcbiAgYmRxdW86IFwiXFx1MjAxRVwiLFxuICBCZXRhOiBcIlxcdTAzOTJcIixcbiAgYmV0YTogXCJcXHUwM0IyXCIsXG4gIGJydmJhcjogXCJcXHUwMEE2XCIsXG4gIGJ1bGw6IFwiXFx1MjAyMlwiLFxuICBjYXA6IFwiXFx1MjIyOVwiLFxuICBDY2VkaWw6IFwiXFx1MDBDN1wiLFxuICBjY2VkaWw6IFwiXFx1MDBFN1wiLFxuICBjZWRpbDogXCJcXHUwMEI4XCIsXG4gIGNlbnQ6IFwiXFx1MDBBMlwiLFxuICBDaGk6IFwiXFx1MDNBN1wiLFxuICBjaGk6IFwiXFx1MDNDN1wiLFxuICBjaXJjOiBcIlxcdTAyQzZcIixcbiAgY2x1YnM6IFwiXFx1MjY2M1wiLFxuICBjb25nOiBcIlxcdTIyNDVcIixcbiAgY29weTogXCJcXHUwMEE5XCIsXG4gIGNyYXJyOiBcIlxcdTIxQjVcIixcbiAgY3VwOiBcIlxcdTIyMkFcIixcbiAgY3VycmVuOiBcIlxcdTAwQTRcIixcbiAgZGFnZ2VyOiBcIlxcdTIwMjBcIixcbiAgRGFnZ2VyOiBcIlxcdTIwMjFcIixcbiAgZGFycjogXCJcXHUyMTkzXCIsXG4gIGRBcnI6IFwiXFx1MjFEM1wiLFxuICBkZWc6IFwiXFx1MDBCMFwiLFxuICBEZWx0YTogXCJcXHUwMzk0XCIsXG4gIGRlbHRhOiBcIlxcdTAzQjRcIixcbiAgZGlhbXM6IFwiXFx1MjY2NlwiLFxuICBkaXZpZGU6IFwiXFx1MDBGN1wiLFxuICBFYWN1dGU6IFwiXFx1MDBDOVwiLFxuICBlYWN1dGU6IFwiXFx1MDBFOVwiLFxuICBFY2lyYzogXCJcXHUwMENBXCIsXG4gIGVjaXJjOiBcIlxcdTAwRUFcIixcbiAgRWdyYXZlOiBcIlxcdTAwQzhcIixcbiAgZWdyYXZlOiBcIlxcdTAwRThcIixcbiAgZW1wdHk6IFwiXFx1MjIwNVwiLFxuICBlbXNwOiBcIlxcdTIwMDNcIixcbiAgZW5zcDogXCJcXHUyMDAyXCIsXG4gIEVwc2lsb246IFwiXFx1MDM5NVwiLFxuICBlcHNpbG9uOiBcIlxcdTAzQjVcIixcbiAgZXF1aXY6IFwiXFx1MjI2MVwiLFxuICBFdGE6IFwiXFx1MDM5N1wiLFxuICBldGE6IFwiXFx1MDNCN1wiLFxuICBFVEg6IFwiXFx1MDBEMFwiLFxuICBldGg6IFwiXFx1MDBGMFwiLFxuICBFdW1sOiBcIlxcdTAwQ0JcIixcbiAgZXVtbDogXCJcXHUwMEVCXCIsXG4gIGV1cm86IFwiXFx1MjBBQ1wiLFxuICBleGlzdDogXCJcXHUyMjAzXCIsXG4gIGZub2Y6IFwiXFx1MDE5MlwiLFxuICBmb3JhbGw6IFwiXFx1MjIwMFwiLFxuICBmcmFjMTI6IFwiXFx1MDBCRFwiLFxuICBmcmFjMTQ6IFwiXFx1MDBCQ1wiLFxuICBmcmFjMzQ6IFwiXFx1MDBCRVwiLFxuICBmcmFzbDogXCJcXHUyMDQ0XCIsXG4gIEdhbW1hOiBcIlxcdTAzOTNcIixcbiAgZ2FtbWE6IFwiXFx1MDNCM1wiLFxuICBnZTogXCJcXHUyMjY1XCIsXG4gIGd0OiBcIj5cIixcbiAgaGFycjogXCJcXHUyMTk0XCIsXG4gIGhBcnI6IFwiXFx1MjFENFwiLFxuICBoZWFydHM6IFwiXFx1MjY2NVwiLFxuICBoZWxsaXA6IFwiXFx1MjAyNlwiLFxuICBJYWN1dGU6IFwiXFx1MDBDRFwiLFxuICBpYWN1dGU6IFwiXFx1MDBFRFwiLFxuICBJY2lyYzogXCJcXHUwMENFXCIsXG4gIGljaXJjOiBcIlxcdTAwRUVcIixcbiAgaWV4Y2w6IFwiXFx1MDBBMVwiLFxuICBJZ3JhdmU6IFwiXFx1MDBDQ1wiLFxuICBpZ3JhdmU6IFwiXFx1MDBFQ1wiLFxuICBpbWFnZTogXCJcXHUyMTExXCIsXG4gIGluZmluOiBcIlxcdTIyMUVcIixcbiAgaW50OiBcIlxcdTIyMkJcIixcbiAgSW90YTogXCJcXHUwMzk5XCIsXG4gIGlvdGE6IFwiXFx1MDNCOVwiLFxuICBpcXVlc3Q6IFwiXFx1MDBCRlwiLFxuICBpc2luOiBcIlxcdTIyMDhcIixcbiAgSXVtbDogXCJcXHUwMENGXCIsXG4gIGl1bWw6IFwiXFx1MDBFRlwiLFxuICBLYXBwYTogXCJcXHUwMzlBXCIsXG4gIGthcHBhOiBcIlxcdTAzQkFcIixcbiAgTGFtYmRhOiBcIlxcdTAzOUJcIixcbiAgbGFtYmRhOiBcIlxcdTAzQkJcIixcbiAgbGFuZzogXCJcXHUyN0U4XCIsXG4gIGxhcXVvOiBcIlxcdTAwQUJcIixcbiAgbGFycjogXCJcXHUyMTkwXCIsXG4gIGxBcnI6IFwiXFx1MjFEMFwiLFxuICBsY2VpbDogXCJcXHUyMzA4XCIsXG4gIGxkcXVvOiBcIlxcdTIwMUNcIixcbiAgbGU6IFwiXFx1MjI2NFwiLFxuICBsZmxvb3I6IFwiXFx1MjMwQVwiLFxuICBsb3dhc3Q6IFwiXFx1MjIxN1wiLFxuICBsb3o6IFwiXFx1MjVDQVwiLFxuICBscm06IFwiXFx1MjAwRVwiLFxuICBsc2FxdW86IFwiXFx1MjAzOVwiLFxuICBsc3F1bzogXCJcXHUyMDE4XCIsXG4gIGx0OiBcIjxcIixcbiAgbWFjcjogXCJcXHUwMEFGXCIsXG4gIG1kYXNoOiBcIlxcdTIwMTRcIixcbiAgbWljcm86IFwiXFx1MDBCNVwiLFxuICBtaWRkb3Q6IFwiXFx1MDBCN1wiLFxuICBtaW51czogXCJcXHUyMjEyXCIsXG4gIE11OiBcIlxcdTAzOUNcIixcbiAgbXU6IFwiXFx1MDNCQ1wiLFxuICBuYWJsYTogXCJcXHUyMjA3XCIsXG4gIG5ic3A6IFwiXFx1MDBBMFwiLFxuICBuZGFzaDogXCJcXHUyMDEzXCIsXG4gIG5lOiBcIlxcdTIyNjBcIixcbiAgbmk6IFwiXFx1MjIwQlwiLFxuICBub3Q6IFwiXFx1MDBBQ1wiLFxuICBub3RpbjogXCJcXHUyMjA5XCIsXG4gIG5zdWI6IFwiXFx1MjI4NFwiLFxuICBOdGlsZGU6IFwiXFx1MDBEMVwiLFxuICBudGlsZGU6IFwiXFx1MDBGMVwiLFxuICBOdTogXCJcXHUwMzlEXCIsXG4gIG51OiBcIlxcdTAzQkRcIixcbiAgT2FjdXRlOiBcIlxcdTAwRDNcIixcbiAgb2FjdXRlOiBcIlxcdTAwRjNcIixcbiAgT2NpcmM6IFwiXFx1MDBENFwiLFxuICBvY2lyYzogXCJcXHUwMEY0XCIsXG4gIE9FbGlnOiBcIlxcdTAxNTJcIixcbiAgb2VsaWc6IFwiXFx1MDE1M1wiLFxuICBPZ3JhdmU6IFwiXFx1MDBEMlwiLFxuICBvZ3JhdmU6IFwiXFx1MDBGMlwiLFxuICBvbGluZTogXCJcXHUyMDNFXCIsXG4gIE9tZWdhOiBcIlxcdTAzQTlcIixcbiAgb21lZ2E6IFwiXFx1MDNDOVwiLFxuICBPbWljcm9uOiBcIlxcdTAzOUZcIixcbiAgb21pY3JvbjogXCJcXHUwM0JGXCIsXG4gIG9wbHVzOiBcIlxcdTIyOTVcIixcbiAgb3I6IFwiXFx1MjIyOFwiLFxuICBvcmRmOiBcIlxcdTAwQUFcIixcbiAgb3JkbTogXCJcXHUwMEJBXCIsXG4gIE9zbGFzaDogXCJcXHUwMEQ4XCIsXG4gIG9zbGFzaDogXCJcXHUwMEY4XCIsXG4gIE90aWxkZTogXCJcXHUwMEQ1XCIsXG4gIG90aWxkZTogXCJcXHUwMEY1XCIsXG4gIG90aW1lczogXCJcXHUyMjk3XCIsXG4gIE91bWw6IFwiXFx1MDBENlwiLFxuICBvdW1sOiBcIlxcdTAwRjZcIixcbiAgcGFyYTogXCJcXHUwMEI2XCIsXG4gIHBlcm1pbDogXCJcXHUyMDMwXCIsXG4gIHBlcnA6IFwiXFx1MjJBNVwiLFxuICBQaGk6IFwiXFx1MDNBNlwiLFxuICBwaGk6IFwiXFx1MDNDNlwiLFxuICBQaTogXCJcXHUwM0EwXCIsXG4gIHBpOiBcIlxcdTAzQzBcIixcbiAgcGl2OiBcIlxcdTAzRDZcIixcbiAgcGx1c21uOiBcIlxcdTAwQjFcIixcbiAgcG91bmQ6IFwiXFx1MDBBM1wiLFxuICBwcmltZTogXCJcXHUyMDMyXCIsXG4gIFByaW1lOiBcIlxcdTIwMzNcIixcbiAgcHJvZDogXCJcXHUyMjBGXCIsXG4gIHByb3A6IFwiXFx1MjIxRFwiLFxuICBQc2k6IFwiXFx1MDNBOFwiLFxuICBwc2k6IFwiXFx1MDNDOFwiLFxuICBxdW90OiBcIlxcdTAwMjJcIixcbiAgcmFkaWM6IFwiXFx1MjIxQVwiLFxuICByYW5nOiBcIlxcdTI3RTlcIixcbiAgcmFxdW86IFwiXFx1MDBCQlwiLFxuICByYXJyOiBcIlxcdTIxOTJcIixcbiAgckFycjogXCJcXHUyMUQyXCIsXG4gIHJjZWlsOiBcIlxcdTIzMDlcIixcbiAgcmRxdW86IFwiXFx1MjAxRFwiLFxuICByZWFsOiBcIlxcdTIxMUNcIixcbiAgcmVnOiBcIlxcdTAwQUVcIixcbiAgcmZsb29yOiBcIlxcdTIzMEJcIixcbiAgUmhvOiBcIlxcdTAzQTFcIixcbiAgcmhvOiBcIlxcdTAzQzFcIixcbiAgcmxtOiBcIlxcdTIwMEZcIixcbiAgcnNhcXVvOiBcIlxcdTIwM0FcIixcbiAgcnNxdW86IFwiXFx1MjAxOVwiLFxuICBzYnF1bzogXCJcXHUyMDFBXCIsXG4gIFNjYXJvbjogXCJcXHUwMTYwXCIsXG4gIHNjYXJvbjogXCJcXHUwMTYxXCIsXG4gIHNkb3Q6IFwiXFx1MjJDNVwiLFxuICBzZWN0OiBcIlxcdTAwQTdcIixcbiAgc2h5OiBcIlxcdTAwQURcIixcbiAgU2lnbWE6IFwiXFx1MDNBM1wiLFxuICBzaWdtYTogXCJcXHUwM0MzXCIsXG4gIHNpZ21hZjogXCJcXHUwM0MyXCIsXG4gIHNpbTogXCJcXHUyMjNDXCIsXG4gIHNwYWRlczogXCJcXHUyNjYwXCIsXG4gIHN1YjogXCJcXHUyMjgyXCIsXG4gIHN1YmU6IFwiXFx1MjI4NlwiLFxuICBzdW06IFwiXFx1MjIxMVwiLFxuICBzdXA6IFwiXFx1MjI4M1wiLFxuICBzdXAxOiBcIlxcdTAwQjlcIixcbiAgc3VwMjogXCJcXHUwMEIyXCIsXG4gIHN1cDM6IFwiXFx1MDBCM1wiLFxuICBzdXBlOiBcIlxcdTIyODdcIixcbiAgc3psaWc6IFwiXFx1MDBERlwiLFxuICBUYXU6IFwiXFx1MDNBNFwiLFxuICB0YXU6IFwiXFx1MDNDNFwiLFxuICB0aGVyZTQ6IFwiXFx1MjIzNFwiLFxuICBUaGV0YTogXCJcXHUwMzk4XCIsXG4gIHRoZXRhOiBcIlxcdTAzQjhcIixcbiAgdGhldGFzeW06IFwiXFx1MDNEMVwiLFxuICB0aGluc3A6IFwiXFx1MjAwOVwiLFxuICBUSE9STjogXCJcXHUwMERFXCIsXG4gIHRob3JuOiBcIlxcdTAwRkVcIixcbiAgdGlsZGU6IFwiXFx1MDJEQ1wiLFxuICB0aW1lczogXCJcXHUwMEQ3XCIsXG4gIHRyYWRlOiBcIlxcdTIxMjJcIixcbiAgVWFjdXRlOiBcIlxcdTAwREFcIixcbiAgdWFjdXRlOiBcIlxcdTAwRkFcIixcbiAgdWFycjogXCJcXHUyMTkxXCIsXG4gIHVBcnI6IFwiXFx1MjFEMVwiLFxuICBVY2lyYzogXCJcXHUwMERCXCIsXG4gIHVjaXJjOiBcIlxcdTAwRkJcIixcbiAgVWdyYXZlOiBcIlxcdTAwRDlcIixcbiAgdWdyYXZlOiBcIlxcdTAwRjlcIixcbiAgdW1sOiBcIlxcdTAwQThcIixcbiAgdXBzaWg6IFwiXFx1MDNEMlwiLFxuICBVcHNpbG9uOiBcIlxcdTAzQTVcIixcbiAgdXBzaWxvbjogXCJcXHUwM0M1XCIsXG4gIFV1bWw6IFwiXFx1MDBEQ1wiLFxuICB1dW1sOiBcIlxcdTAwRkNcIixcbiAgd2VpZXJwOiBcIlxcdTIxMThcIixcbiAgWGk6IFwiXFx1MDM5RVwiLFxuICB4aTogXCJcXHUwM0JFXCIsXG4gIFlhY3V0ZTogXCJcXHUwMEREXCIsXG4gIHlhY3V0ZTogXCJcXHUwMEZEXCIsXG4gIHllbjogXCJcXHUwMEE1XCIsXG4gIHl1bWw6IFwiXFx1MDBGRlwiLFxuICBZdW1sOiBcIlxcdTAxNzhcIixcbiAgWmV0YTogXCJcXHUwMzk2XCIsXG4gIHpldGE6IFwiXFx1MDNCNlwiLFxuICB6d2o6IFwiXFx1MjAwRFwiLFxuICB6d25qOiBcIlxcdTIwMENcIlxufTtcblxuLy8gVGhlICZuZ3NwOyBwc2V1ZG8tZW50aXR5IGlzIGRlbm90aW5nIGEgc3BhY2UuIHNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ0LWxhbmcvYW5ndWxhci9ibG9iLzBiYjYxMTM4N2QyOWQ2NWI1YWY3ZjlkMjUxNWFiNTcxZmQzZmJlZTQvX3Rlc3RzL3Rlc3QvY29tcGlsZXIvcHJlc2VydmVfd2hpdGVzcGFjZV90ZXN0LmRhcnRcbmV4cG9ydCBjb25zdCBOR1NQX1VOSUNPREUgPSBcIlxcdUU1MDBcIjtcblxuTkFNRURfRU5USVRJRVNbXCJuZ3NwXCJdID0gTkdTUF9VTklDT0RFO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4vY2hhcnNcIjtcbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VMb2NhdGlvbiwgUGFyc2VTb3VyY2VGaWxlLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtOQU1FRF9FTlRJVElFUywgVGFnQ29udGVudFR5cGUsIFRhZ0RlZmluaXRpb259IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgVEFHX09QRU5fU1RBUlQsXG4gIFRBR19PUEVOX0VORCxcbiAgVEFHX09QRU5fRU5EX1ZPSUQsXG4gIFRBR19DTE9TRSxcbiAgVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBSQVdfVEVYVCxcbiAgQ09NTUVOVF9TVEFSVCxcbiAgQ09NTUVOVF9FTkQsXG4gIENEQVRBX1NUQVJULFxuICBDREFUQV9FTkQsXG4gIEFUVFJfTkFNRSxcbiAgQVRUUl9WQUxVRSxcbiAgRE9DX1RZUEUsXG4gIEVYUEFOU0lPTl9GT1JNX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9WQUxVRSxcbiAgRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfRU5ELFxuICBFWFBBTlNJT05fRk9STV9FTkQsXG4gIEVPRlxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgcGFydHM6IHN0cmluZ1tdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5FcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlcnJvck1zZzogc3RyaW5nLCBwdWJsaWMgdG9rZW5UeXBlOiBUb2tlblR5cGUsIHNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBUb2tlbltdLCBwdWJsaWMgZXJyb3JzOiBUb2tlbkVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShcbiAgc291cmNlOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4pOiBUb2tlbml6ZVJlc3VsdCB7XG4gIHJldHVybiBuZXcgVG9rZW5pemVyKFxuICAgIG5ldyBQYXJzZVNvdXJjZUZpbGUoc291cmNlLCB1cmwpLFxuICAgIGdldFRhZ0RlZmluaXRpb24sXG4gICAgdG9rZW5pemVFeHBhbnNpb25Gb3JtcyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICkudG9rZW5pemUoKTtcbn1cblxuY29uc3QgX0NSX09SX0NSTEZfUkVHRVhQID0gL1xcclxcbj8vZztcblxuZnVuY3Rpb24gX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFyQ29kZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhciA9IGNoYXJDb2RlID09PSBjaGFycy4kRU9GID8gXCJFT0ZcIiA6IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuICByZXR1cm4gYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJHtjaGFyfVwiYDtcbn1cblxuZnVuY3Rpb24gX3Vua25vd25FbnRpdHlFcnJvck1zZyhlbnRpdHlTcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5rbm93biBlbnRpdHkgXCIke2VudGl0eVNyY31cIiAtIHVzZSB0aGUgXCImIzxkZWNpbWFsPjtcIiBvciAgXCImI3g8aGV4PjtcIiBzeW50YXhgO1xufVxuXG5jbGFzcyBDb250cm9sRmxvd0Vycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBUb2tlbkVycm9yKSB7fVxufVxuXG4vLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI3dyaXRpbmdcbmNsYXNzIFRva2VuaXplciB7XG4gIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuICAvLyBOb3RlOiB0aGlzIGlzIGFsd2F5cyBsb3dlcmNhc2UhXG4gIHByaXZhdGUgX3BlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfbmV4dFBlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfaW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfbGluZSA9IDA7XG4gIHByaXZhdGUgX2NvbHVtbiA9IC0xO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5TdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudFRva2VuVHlwZTogVG9rZW5UeXBlO1xuICBwcml2YXRlIF9leHBhbnNpb25DYXNlU3RhY2s6IFRva2VuVHlwZVtdID0gW107XG4gIHByaXZhdGUgX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuXG4gIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICBlcnJvcnM6IFRva2VuRXJyb3JbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gX2ZpbGUgVGhlIGh0bWwgc291cmNlXG4gICAqIEBwYXJhbSBfZ2V0VGFnRGVmaW5pdGlvblxuICAgKiBAcGFyYW0gX3Rva2VuaXplSWN1IFdoZXRoZXIgdG8gdG9rZW5pemUgSUNVIG1lc3NhZ2VzIChjb25zaWRlcmVkIGFzIHRleHQgbm9kZXMgd2hlbiBmYWxzZSlcbiAgICogQHBhcmFtIF9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWxlOiBQYXJzZVNvdXJjZUZpbGUsXG4gICAgcHJpdmF0ZSBfZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbixcbiAgICBwcml2YXRlIF90b2tlbml6ZUljdTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApIHtcbiAgICB0aGlzLl9pbnB1dCA9IF9maWxlLmNvbnRlbnQ7XG4gICAgdGhpcy5fbGVuZ3RoID0gX2ZpbGUuY29udGVudC5sZW5ndGg7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3ByZXByb2Nlc3NpbmctdGhlLWlucHV0LXN0cmVhbVxuICAgIC8vIEluIG9yZGVyIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UsIHdlIGNhbiBub3RcbiAgICAvLyBwcmUtcHJvY2VzcyBpdC5cbiAgICAvLyBJbnN0ZWFkIENScyBhcmUgcHJvY2Vzc2VkIHJpZ2h0IGJlZm9yZSBpbnN0YW50aWF0aW5nIHRoZSB0b2tlbnMuXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShfQ1JfT1JfQ1JMRl9SRUdFWFAsIFwiXFxuXCIpO1xuICB9XG5cbiAgdG9rZW5pemUoKTogVG9rZW5pemVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMVCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRCQU5HKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YShzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTUlOVVMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVEb2NUeXBlKHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnT3BlbihzdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEodGhpcy5fdG9rZW5pemVJY3UgJiYgdGhpcy5fdG9rZW5pemVFeHBhbnNpb25Gb3JtKCkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZVRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRU9GKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZVJlc3VsdChtZXJnZVRleHRUb2tlbnModGhpcy50b2tlbnMpLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgd2hldGhlciBhbiBJQ1UgdG9rZW4gaGFzIGJlZW4gY3JlYXRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX3Rva2VuaXplRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHRoaXMuX3BlZWspICYmIHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlU3RhcnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFKSB7XG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uQ2FzZUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYXRpb24oKTogUGFyc2VMb2NhdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIHRoaXMuX2luZGV4LCB0aGlzLl9saW5lLCB0aGlzLl9jb2x1bW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3BhbihcbiAgICBzdGFydDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCksXG4gICAgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKVxuICApOiBQYXJzZVNvdXJjZVNwYW4ge1xuICAgIHJldHVybiBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmVnaW5Ub2tlbih0eXBlOiBUb2tlblR5cGUsIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSkge1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IHR5cGU7XG4gIH1cblxuICBwcml2YXRlIF9lbmRUb2tlbihwYXJ0czogc3RyaW5nW10sIGVuZDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCkpOiBUb2tlbiB7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW4odGhpcy5fY3VycmVudFRva2VuVHlwZSwgcGFydHMsIG5ldyBQYXJzZVNvdXJjZVNwYW4odGhpcy5fY3VycmVudFRva2VuU3RhcnQsIGVuZCkpO1xuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gbnVsbCE7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IG51bGwhO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVycm9yKG1zZzogc3RyaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBDb250cm9sRmxvd0Vycm9yIHtcbiAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgbXNnICs9IGAgKERvIHlvdSBoYXZlIGFuIHVuZXNjYXBlZCBcIntcIiBpbiB5b3VyIHRlbXBsYXRlPyBVc2UgXCJ7eyAneycgfX1cIikgdG8gZXNjYXBlIGl0LilgO1xuICAgIH1cbiAgICBjb25zdCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKG1zZywgdGhpcy5fY3VycmVudFRva2VuVHlwZSwgc3Bhbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sRmxvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFycy4kRU9GKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMRikge1xuICAgICAgdGhpcy5fbGluZSsrO1xuICAgICAgdGhpcy5fY29sdW1uID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRMRiAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kQ1IpIHtcbiAgICAgIHRoaXMuX2NvbHVtbisrO1xuICAgIH1cbiAgICB0aGlzLl9pbmRleCsrO1xuICAgIHRoaXMuX3BlZWsgPSB0aGlzLl9pbmRleCA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCk7XG4gICAgdGhpcy5fbmV4dFBlZWsgPSB0aGlzLl9pbmRleCArIDEgPj0gdGhpcy5fbGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuX2lucHV0LmNoYXJDb2RlQXQodGhpcy5faW5kZXggKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJDb2RlKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKHRoaXMuX3BlZWssIGNoYXJDb2RlKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVpcmVDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbiwgbG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBsZW4gPSBjaGFycy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2luZGV4ICsgbGVuID4gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIC8vIElmIGF0dGVtcHRpbmcgdG8gcGFyc2UgdGhlIHN0cmluZyBmYWlscywgd2Ugd2FudCB0byByZXNldCB0aGUgcGFyc2VyXG4gICAgICAgIC8vIHRvIHdoZXJlIGl0IHdhcyBiZWZvcmUgdGhlIGF0dGVtcHRcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyQ2FzZUluc2Vuc2l0aXZlKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZUNhc2VJbnNlbnNpdGl2ZShjaGFycy5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZVN0cihjaGFyczogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0cihjaGFycykpIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4obG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICAgIHdoaWxlICghcHJlZGljYXRlKHRoaXMuX3BlZWspKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlVW50aWxGbihwcmVkaWNhdGU6IChjb2RlOiBudW1iZXIpID0+IGJvb2xlYW4sIGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlKTtcbiAgICBpZiAodGhpcy5faW5kZXggLSBzdGFydC5vZmZzZXQgPCBsZW4pIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4oc3RhcnQsIHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdFVudGlsQ2hhcihjaGFyOiBudW1iZXIpIHtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlYWRDaGFyKGRlY29kZUVudGl0aWVzOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoZGVjb2RlRW50aXRpZXMgJiYgdGhpcy5fcGVlayA9PT0gY2hhcnMuJEFNUEVSU0FORCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29kZUVudGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0W2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNvZGVFbnRpdHkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEhBU0gpKSB7XG4gICAgICBjb25zdCBpc0hleCA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4keCkgfHwgdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRYKTtcbiAgICAgIGNvbnN0IG51bWJlclN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKS5vZmZzZXQ7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzRGlnaXRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHN0ck51bSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhudW1iZXJTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gcGFyc2VJbnQoc3RyTnVtLCBpc0hleCA/IDE2IDogMTApO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05hbWVkRW50aXR5RW5kKTtcbiAgICAgIGlmICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0VNSUNPTE9OKSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIFwiJlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgY29uc3QgY2hhciA9IE5BTUVEX0VOVElUSUVTW25hbWVdO1xuICAgICAgaWYgKCFjaGFyKSB7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2cobmFtZSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzOiBib29sZWFuLCBmaXJzdENoYXJPZkVuZDogbnVtYmVyLCBhdHRlbXB0RW5kUmVzdDogKCkgPT4gYm9vbGVhbik6IFRva2VuIHtcbiAgICBsZXQgdGFnQ2xvc2VTdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgICBjb25zdCB0ZXh0U3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oZGVjb2RlRW50aXRpZXMgPyBUb2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUIDogVG9rZW5UeXBlLlJBV19URVhULCB0ZXh0U3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0YWdDbG9zZVN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoZmlyc3RDaGFyT2ZFbmQpICYmIGF0dGVtcHRFbmRSZXN0KCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0YWdDbG9zZVN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAvLyBhZGQgdGhlIGNoYXJhY3RlcnMgY29uc3VtZWQgYnkgdGhlIHByZXZpb3VzIGlmIHN0YXRlbWVudCB0byB0aGUgb3V0cHV0XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5faW5wdXQuc3Vic3RyaW5nKHRhZ0Nsb3NlU3RhcnQub2Zmc2V0LCB0aGlzLl9pbmRleCkpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGZpcnN0Q2hhck9mRW5kKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIoZGVjb2RlRW50aXRpZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSwgdGFnQ2xvc2VTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ29tbWVudChzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfU1RBUlQsIHN0YXJ0KTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJE1JTlVTKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRNSU5VUywgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIi0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DT01NRU5UX0VORCwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVTdHIoXCJDREFUQVtcIik7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGZhbHNlLCBjaGFycy4kUkJSQUNLRVQsICgpID0+IHRoaXMuX2F0dGVtcHRTdHIoXCJdPlwiKSk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ0RBVEFfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVEb2NUeXBlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRE9DX1RZUEUsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQub2Zmc2V0ICsgMiwgdGhpcy5faW5kZXggLSAxKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVByZWZpeEFuZE5hbWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5hbWVPclByZWZpeFN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgbGV0IHByZWZpeDogc3RyaW5nID0gbnVsbCE7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDT0xPTiAmJiAhaXNQcmVmaXhFbmQodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgbGV0IG5hbWVTdGFydDogbnVtYmVyO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kQ09MT04pIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHByZWZpeCA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lT3JQcmVmaXhTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lU3RhcnQgPSBuYW1lT3JQcmVmaXhTdGFydDtcbiAgICB9XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIHRoaXMuX2luZGV4ID09PSBuYW1lU3RhcnQgPyAxIDogMCk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlbihzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIGNvbnN0IHNhdmVkUG9zID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgbGV0IHRhZ05hbWU6IHN0cmluZztcbiAgICBsZXQgbG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXJzLmlzQXNjaWlMZXR0ZXIodGhpcy5fcGVlaykpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5TdGFydChzdGFydCk7XG4gICAgICB0YWdOYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgbG93ZXJjYXNlVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0xBU0ggJiYgdGhpcy5fcGVlayAhPT0gY2hhcnMuJEdUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVOYW1lKCk7XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kRVEpKSB7XG4gICAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuRW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDb250cm9sRmxvd0Vycm9yKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJ0IHRhZyBpcyBpbnZhbGlkLCBhc3N1bWUgd2Ugd2FudCBhIFwiPFwiXG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzYXZlZFBvcyk7XG4gICAgICAgIC8vIEJhY2sgdG8gYmFjayB0ZXh0IHRva2VucyBhcmUgbWVyZ2VkIGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgICAgICB0aGlzLl9lbmRUb2tlbihbXCI8XCJdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRUb2tlblR5cGUgPSB0aGlzLl9nZXRUYWdEZWZpbml0aW9uKHRhZ05hbWUpLmNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUKSB7XG4gICAgICB0aGlzLl9jb25zdW1lUmF3VGV4dFdpdGhUYWdDbG9zZShsb3dlcmNhc2VUYWdOYW1lLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50VG9rZW5UeXBlID09PSBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWU6IHN0cmluZywgZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChkZWNvZGVFbnRpdGllcywgY2hhcnMuJExULCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUobG93ZXJjYXNlVGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB9KTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW251bGwhLCBsb3dlcmNhc2VUYWdOYW1lXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX09QRU5fU1RBUlQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4ocGFydHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQVRUUl9OQU1FKTtcbiAgICBjb25zdCBwcmVmaXhBbmROYW1lID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX1ZBTFVFKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJFNRIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiREUSkge1xuICAgICAgY29uc3QgcXVvdGVDaGFyID0gdGhpcy5fcGVlaztcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IHF1b3RlQ2hhcikge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gcGFydHMuam9pbihcIlwiKTtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIDEpO1xuICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcodmFsdWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9lbmRUb2tlbihbdGhpcy5fcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyh2YWx1ZSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuRW5kKCkge1xuICAgIGNvbnN0IHRva2VuVHlwZSA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpID8gVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEIDogVG9rZW5UeXBlLlRBR19PUEVOX0VORDtcbiAgICB0aGlzLl9iZWdpblRva2VuKHRva2VuVHlwZSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ0Nsb3NlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX0NMT1NFLCBzdGFydCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25Gb3JtU3RhcnQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTEJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuUkFXX1RFWFQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtjb25kaXRpb25dLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0eXBlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9yZWFkVW50aWwoY2hhcnMuJExCUkFDRSkudHJpbSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt2YWx1ZV0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5ELCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJFJCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRFWFQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnICYmIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCkpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiZcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uICYmXG4gICAgICAgIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQpXG4gICAgICApIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCk7XG4gICAgICAgIHRoaXMuX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcih0cnVlKSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoIXRoaXMuX2lzVGV4dEVuZCgpKTtcblxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMVCB8fCB0aGlzLl9wZWVrID09PSBjaGFycy4kRU9GKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9rZW5pemVJY3UgJiYgIXRoaXMuX2luSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKGlzRXhwYW5zaW9uRm9ybVN0YXJ0KHRoaXMuX2lucHV0LCB0aGlzLl9pbmRleCwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZykpIHtcbiAgICAgICAgLy8gc3RhcnQgb2YgYW4gZXhwYW5zaW9uIGZvcm1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFICYmIHRoaXMuX2lzSW5FeHBhbnNpb25DYXNlKCkpIHtcbiAgICAgICAgLy8gZW5kIG9mIGFuZCBleHBhbnNpb24gY2FzZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIFt0aGlzLl9wZWVrLCB0aGlzLl9pbmRleCwgdGhpcy5fY29sdW1uLCB0aGlzLl9saW5lLCB0aGlzLnRva2Vucy5sZW5ndGhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZFVudGlsKGNoYXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXIpO1xuICAgIHJldHVybiB0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3RvcmVQb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIHRoaXMuX3BlZWsgPSBwb3NpdGlvblswXTtcbiAgICB0aGlzLl9pbmRleCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuX2NvbHVtbiA9IHBvc2l0aW9uWzJdO1xuICAgIHRoaXMuX2xpbmUgPSBwb3NpdGlvblszXTtcbiAgICBjb25zdCBuYlRva2VucyA9IHBvc2l0aW9uWzRdO1xuICAgIGlmIChuYlRva2VucyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgLy8gcmVtb3ZlIGFueSBleHRyYSB0b2tlbnNcbiAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2UoMCwgbmJUb2tlbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25DYXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pc0luRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFja1t0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoIC0gMV0gPT09IFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOb3RXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWNoYXJzLmlzV2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kRU9GO1xufVxuXG5mdW5jdGlvbiBpc05hbWVFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEdUIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNMQVNIIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJERRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEVRXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzUHJlZml4RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjb2RlIDwgY2hhcnMuJGEgfHwgY2hhcnMuJHogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiRBIHx8IGNoYXJzLiRaIDwgY29kZSkgJiYgKGNvZGUgPCBjaGFycy4kMCB8fCBjb2RlID4gY2hhcnMuJDkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRGlnaXRFbnRpdHlFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU0VNSUNPTE9OIHx8IGNvZGUgPT09IGNoYXJzLiRFT0YgfHwgIWNoYXJzLmlzQXNjaWlIZXhEaWdpdChjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lZEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUxldHRlcihjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25Gb3JtU3RhcnQoaW5wdXQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBib29sZWFuIHtcbiAgY29uc3QgaXNJbnRlcnBvbGF0aW9uU3RhcnQgPSBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgPyBpbnB1dC5pbmRleE9mKGludGVycG9sYXRpb25Db25maWcuc3RhcnQsIG9mZnNldCkgPT09IG9mZnNldFxuICAgIDogZmFsc2U7XG5cbiAgcmV0dXJuIGlucHV0LmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gY2hhcnMuJExCUkFDRSAmJiAhaXNJbnRlcnBvbGF0aW9uU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHBlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gcGVlayA9PT0gY2hhcnMuJEVRIHx8IGNoYXJzLmlzQXNjaWlMZXR0ZXIocGVlaykgfHwgY2hhcnMuaXNEaWdpdChwZWVrKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNvZGUxOiBudW1iZXIsIGNvZGUyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTEpID09PSB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGUyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gY29kZSA+PSBjaGFycy4kYSAmJiBjb2RlIDw9IGNoYXJzLiR6ID8gY29kZSAtIGNoYXJzLiRhICsgY2hhcnMuJEEgOiBjb2RlO1xufVxuXG5mdW5jdGlvbiBtZXJnZVRleHRUb2tlbnMoc3JjVG9rZW5zOiBUb2tlbltdKTogVG9rZW5bXSB7XG4gIGNvbnN0IGRzdFRva2VuczogVG9rZW5bXSA9IFtdO1xuICBsZXQgbGFzdERzdFRva2VuOiBUb2tlbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHNyY1Rva2Vuc1tpXTtcbiAgICBpZiAobGFzdERzdFRva2VuICYmIGxhc3REc3RUb2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCkge1xuICAgICAgbGFzdERzdFRva2VuLnBhcnRzWzBdICs9IHRva2VuLnBhcnRzWzBdO1xuICAgICAgbGFzdERzdFRva2VuLnNvdXJjZVNwYW4uZW5kID0gdG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3REc3RUb2tlbiA9IHRva2VuO1xuICAgICAgZHN0VG9rZW5zLnB1c2gobGFzdERzdFRva2VuKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0VG9rZW5zO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4vaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCAqIGFzIGxleCBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtUYWdEZWZpbml0aW9uLCBnZXROc1ByZWZpeCwgaXNOZ0NvbnRhaW5lciwgbWVyZ2VOc0FuZE5hbWV9IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWVFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKTogVHJlZUVycm9yIHtcbiAgICByZXR1cm4gbmV3IFRyZWVFcnJvcihlbGVtZW50TmFtZSwgc3BhbiwgbXNnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50TmFtZTogc3RyaW5nIHwgbnVsbCwgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlVHJlZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb290Tm9kZXM6IGh0bWwuTm9kZVtdLCBwdWJsaWMgZXJyb3JzOiBQYXJzZUVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbikge31cblxuICBwYXJzZShcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnNBbmRFcnJvcnMgPSBsZXgudG9rZW5pemUoc291cmNlLCB1cmwsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbiwgcGFyc2VFeHBhbnNpb25Gb3JtcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBjb25zdCB0cmVlQW5kRXJyb3JzID0gbmV3IF9UcmVlQnVpbGRlcih0b2tlbnNBbmRFcnJvcnMudG9rZW5zLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChcbiAgICAgIHRyZWVBbmRFcnJvcnMucm9vdE5vZGVzLFxuICAgICAgKHRva2Vuc0FuZEVycm9ycy5lcnJvcnMgYXMgUGFyc2VFcnJvcltdKS5jb25jYXQodHJlZUFuZEVycm9ycy5lcnJvcnMpXG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBfVHJlZUJ1aWxkZXIge1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9wZWVrOiBsZXguVG9rZW47XG5cbiAgcHJpdmF0ZSBfcm9vdE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IFRyZWVFcnJvcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFN0YWNrOiBodG1sLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5zOiBsZXguVG9rZW5bXSwgcHJpdmF0ZSBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgYnVpbGQoKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVPRikge1xuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jb25zdW1lU3RhcnRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19DTE9TRSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRW5kVGFnKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DREFUQV9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YSh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQ09NTUVOVF9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuUkFXX1RFWFQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb24odGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIHRva2Vucy4uLlxuICAgICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRoaXMuX3Jvb3ROb2RlcywgdGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKTogbGV4LlRva2VuIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5fcGVlaztcbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBOb3RlOiB0aGVyZSBpcyBhbHdheXMgYW4gRU9GIHRva2VuIGF0IHRoZSBlbmRcbiAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuX3BlZWsgPSB0aGlzLnRva2Vuc1t0aGlzLl9pbmRleF07XG4gICAgcmV0dXJuIHByZXY7XG4gIH1cblxuICBwcml2YXRlIF9hZHZhbmNlSWYodHlwZTogbGV4LlRva2VuVHlwZSk6IGxleC5Ub2tlbiB8IG51bGwge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNkYXRhKHN0YXJ0VG9rZW46IGxleC5Ub2tlbikge1xuICAgIHRoaXMuX2NvbnN1bWVUZXh0KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ0RBVEFfRU5EKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuUkFXX1RFWFQpO1xuICAgIHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLkNPTU1FTlRfRU5EKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRleHQgIT09IG51bGwgPyB0ZXh0LnBhcnRzWzBdLnRyaW0oKSA6IG51bGw7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuQ29tbWVudCh2YWx1ZSwgdG9rZW4uc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbih0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGNvbnN0IGNhc2VzOiBodG1sLkV4cGFuc2lvbkNhc2VbXSA9IFtdO1xuXG4gICAgLy8gcmVhZCA9XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSkge1xuICAgICAgY29uc3QgZXhwQ2FzZSA9IHRoaXMuX3BhcnNlRXhwYW5zaW9uQ2FzZSgpO1xuICAgICAgaWYgKCFleHBDYXNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZXJyb3JcbiAgICAgIGNhc2VzLnB1c2goZXhwQ2FzZSk7XG4gICAgfVxuXG4gICAgLy8gcmVhZCB0aGUgZmluYWwgfVxuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5EKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odG9rZW4uc291cmNlU3Bhbi5zdGFydCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQoXG4gICAgICBuZXcgaHRtbC5FeHBhbnNpb24oc3dpdGNoVmFsdWUucGFydHNbMF0sIHR5cGUucGFydHNbMF0sIGNhc2VzLCBzb3VyY2VTcGFuLCBzd2l0Y2hWYWx1ZS5zb3VyY2VTcGFuKVxuICAgICk7XG5cbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUV4cGFuc2lvbkNhc2UoKTogaHRtbC5FeHBhbnNpb25DYXNlIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICAvLyByZWFkIHtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd7Jy5gKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZWFkIHVudGlsIH1cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQpO1xuICAgIGlmICghZXhwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgZXhwLnB1c2gobmV3IGxleC5Ub2tlbihsZXguVG9rZW5UeXBlLkVPRiwgW10sIGVuZC5zb3VyY2VTcGFuKSk7XG5cbiAgICAvLyBwYXJzZSBldmVyeXRoaW5nIGluIGJldHdlZW4geyBhbmQgfVxuICAgIGNvbnN0IHBhcnNlZEV4cCA9IG5ldyBfVHJlZUJ1aWxkZXIoZXhwLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG4gICAgaWYgKHBhcnNlZEV4cC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fZXJyb3JzLmNvbmNhdChwYXJzZWRFeHAuZXJyb3JzIGFzIFRyZWVFcnJvcltdKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHZhbHVlLnNvdXJjZVNwYW4uc3RhcnQsIGVuZC5zb3VyY2VTcGFuLmVuZCk7XG4gICAgY29uc3QgZXhwU291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZSh2YWx1ZS5wYXJ0c1swXSwgcGFyc2VkRXhwLnJvb3ROb2Rlcywgc291cmNlU3BhbiwgdmFsdWUuc291cmNlU3BhbiwgZXhwU291cmNlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9jb2xsZWN0RXhwYW5zaW9uRXhwVG9rZW5zKHN0YXJ0OiBsZXguVG9rZW4pOiBsZXguVG9rZW5bXSB8IG51bGwge1xuICAgIGNvbnN0IGV4cDogbGV4LlRva2VuW10gPSBbXTtcbiAgICBjb25zdCBleHBhbnNpb25Gb3JtU3RhY2sgPSBbbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRdO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRcbiAgICAgICkge1xuICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucHVzaCh0aGlzLl9wZWVrLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChleHBhbnNpb25Gb3JtU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV4cC5wdXNoKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGxldCB0ZXh0ID0gdG9rZW4ucGFydHNbMF07XG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCAmJiB0ZXh0WzBdID09PSBcIlxcblwiKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudC5uYW1lKS5pZ25vcmVGaXJzdExmKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5UZXh0KHRleHQsIHRva2VuLnNvdXJjZVNwYW4pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZVZvaWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChlbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVN0YXJ0VGFnKHN0YXJ0VGFnVG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMF07XG4gICAgY29uc3QgbmFtZSA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMV07XG4gICAgY29uc3QgYXR0cnM6IGh0bWwuQXR0cmlidXRlW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfTkFNRSkge1xuICAgICAgYXR0cnMucHVzaCh0aGlzLl9jb25zdW1lQXR0cih0aGlzLl9hZHZhbmNlKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4LCBuYW1lLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuICAgIGxldCBzZWxmQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8vIE5vdGU6IFRoZXJlIGNvdWxkIGhhdmUgYmVlbiBhIHRva2VuaXplciBlcnJvclxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZ2V0IGEgdG9rZW4gZm9yIHRoZSBlbmQgdGFnLi4uXG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkRfVk9JRCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKTtcbiAgICAgIGlmICghKHRhZ0RlZi5jYW5TZWxmQ2xvc2UgfHwgZ2V0TnNQcmVmaXgoZnVsbE5hbWUpICE9PSBudWxsIHx8IHRhZ0RlZi5pc1ZvaWQpKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICAgIHN0YXJ0VGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICAgIGBPbmx5IHZvaWQgYW5kIGZvcmVpZ24gZWxlbWVudHMgY2FuIGJlIHNlbGYgY2xvc2VkIFwiJHtzdGFydFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkQpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX3BlZWsuc291cmNlU3Bhbi5zdGFydDtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydFRhZ1Rva2VuLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCk7XG4gICAgY29uc3QgZWwgPSBuZXcgaHRtbC5FbGVtZW50KGZ1bGxOYW1lLCBhdHRycywgW10sIHNwYW4sIHNwYW4sIHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcHVzaEVsZW1lbnQoZWwpO1xuICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSk7XG4gICAgICBlbC5lbmRTb3VyY2VTcGFuID0gc3BhbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdXNoRWxlbWVudChlbDogaHRtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG5cbiAgICBpZiAocGFyZW50RWwgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudEVsLm5hbWUpLmlzQ2xvc2VkQnlDaGlsZChlbC5uYW1lKSkge1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnBvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ0RlZiA9IHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKTtcbiAgICBjb25zdCB7cGFyZW50LCBjb250YWluZXJ9ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudFNraXBwaW5nQ29udGFpbmVycygpO1xuXG4gICAgaWYgKHBhcmVudCAmJiB0YWdEZWYucmVxdWlyZUV4dHJhUGFyZW50KHBhcmVudC5uYW1lKSkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgdGFnRGVmLnBhcmVudFRvQWRkLFxuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIGVsLnNvdXJjZVNwYW4sXG4gICAgICAgIGVsLnN0YXJ0U291cmNlU3BhbixcbiAgICAgICAgZWwuZW5kU291cmNlU3BhblxuICAgICAgKTtcbiAgICAgIHRoaXMuX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQsIGNvbnRhaW5lciwgbmV3UGFyZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRUb1BhcmVudChlbCk7XG4gICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2goZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUVuZFRhZyhlbmRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUoZW5kVGFnVG9rZW4ucGFydHNbMF0sIGVuZFRhZ1Rva2VuLnBhcnRzWzFdLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuXG4gICAgaWYgKHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpIS5lbmRTb3VyY2VTcGFuID0gZW5kVGFnVG9rZW4uc291cmNlU3BhbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKFxuICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sXG4gICAgICAgICAgYFZvaWQgZWxlbWVudHMgZG8gbm90IGhhdmUgZW5kIHRhZ3MgXCIke2VuZFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvcEVsZW1lbnQoZnVsbE5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBgVW5leHBlY3RlZCBjbG9zaW5nIHRhZyBcIiR7XG4gICAgICAgIGZ1bGxOYW1lXG4gICAgICB9XCIuIEl0IG1heSBoYXBwZW4gd2hlbiB0aGUgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ5IGFub3RoZXIgdGFnLiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjY2xvc2luZy1lbGVtZW50cy10aGF0LWhhdmUtaW1wbGllZC1lbmQtdGFnc2A7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKGZ1bGxOYW1lLCBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuLCBlcnJNc2cpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wb3BFbGVtZW50KGZ1bGxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBzdGFja0luZGV4ID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IHN0YWNrSW5kZXggPj0gMDsgc3RhY2tJbmRleC0tKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIGlmIChlbC5uYW1lID09PSBmdWxsTmFtZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50U3RhY2suc3BsaWNlKHN0YWNrSW5kZXgsIHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSBzdGFja0luZGV4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmNsb3NlZEJ5UGFyZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHIoYXR0ck5hbWU6IGxleC5Ub2tlbik6IGh0bWwuQXR0cmlidXRlIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IG1lcmdlTnNBbmROYW1lKGF0dHJOYW1lLnBhcnRzWzBdLCBhdHRyTmFtZS5wYXJ0c1sxXSk7XG4gICAgbGV0IGVuZCA9IGF0dHJOYW1lLnNvdXJjZVNwYW4uZW5kO1xuICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgbGV0IHZhbHVlU3BhbjogUGFyc2VTb3VyY2VTcGFuID0gdW5kZWZpbmVkITtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfVkFMVUUpIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlVG9rZW4ucGFydHNbMF07XG4gICAgICBlbmQgPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgdmFsdWVTcGFuID0gdmFsdWVUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGh0bWwuQXR0cmlidXRlKGZ1bGxOYW1lLCB2YWx1ZSwgbmV3IFBhcnNlU291cmNlU3BhbihhdHRyTmFtZS5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQpLCB2YWx1ZVNwYW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50RWxlbWVudCgpOiBodG1sLkVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCA+IDAgPyB0aGlzLl9lbGVtZW50U3RhY2tbdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgaW4gdGhlIERPTSBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogYDxuZy1jb250YWluZXI+YCBlbGVtZW50cyBhcmUgc2tpcHBlZCBhcyB0aGV5IGFyZSBub3QgcmVuZGVyZWQgYXMgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk6IHtwYXJlbnQ6IGh0bWwuRWxlbWVudCB8IG51bGw7IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbH0ge1xuICAgIGxldCBjb250YWluZXI6IGh0bWwuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpc05nQ29udGFpbmVyKHRoaXMuX2VsZW1lbnRTdGFja1tpXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge3BhcmVudDogdGhpcy5fZWxlbWVudFN0YWNrW2ldLCBjb250YWluZXJ9O1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFN0YWNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7cGFyZW50OiBudWxsLCBjb250YWluZXJ9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9QYXJlbnQobm9kZTogaHRtbC5Ob2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbm9kZSBiZXR3ZWVuIHRoZSBwYXJlbnQgYW5kIHRoZSBjb250YWluZXIuXG4gICAqIFdoZW4gbm8gY29udGFpbmVyIGlzIGdpdmVuLCB0aGUgbm9kZSBpcyBhcHBlbmRlZCBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQuXG4gICAqIEFsc28gdXBkYXRlcyB0aGUgZWxlbWVudCBzdGFjayBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRCZWZvcmVDb250YWluZXIocGFyZW50OiBodG1sLkVsZW1lbnQsIGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCwgbm9kZTogaHRtbC5FbGVtZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5vZGUpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgY29udGFpbmVyIHdpdGggdGhlIG5ldyBub2RlIGluIHRoZSBjaGlsZHJlblxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNvbnRhaW5lcik7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm9vdE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2UodGhpcy5fZWxlbWVudFN0YWNrLmluZGV4T2YoY29udGFpbmVyKSwgMCwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RWxlbWVudEZ1bGxOYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZywgcGFyZW50RWxlbWVudDogaHRtbC5FbGVtZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgcHJlZml4ID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGxvY2FsTmFtZSkuaW1wbGljaXROYW1lc3BhY2VQcmVmaXghO1xuICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCAmJiBwYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGdldE5zUHJlZml4KHBhcmVudEVsZW1lbnQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlTnNBbmROYW1lKHByZWZpeCwgbG9jYWxOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXN0T25TdGFjayhzdGFjazogYW55W10sIGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gZWxlbWVudDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgWG1sVGFnRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFRhZ0RlZmluaXRpb24ge1xuICBjbG9zZWRCeVBhcmVudCA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZztcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlID0gVGFnQ29udGVudFR5cGUuUEFSU0FCTEVfREFUQTtcbiAgaXNWb2lkID0gZmFsc2U7XG4gIGlnbm9yZUZpcnN0TGYgPSBmYWxzZTtcbiAgY2FuU2VsZkNsb3NlID0gdHJ1ZTtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBfVEFHX0RFRklOSVRJT04gPSBuZXcgWG1sVGFnRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBYbWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIHByaXZhdGUgY2xvc2VkQnlDaGlsZHJlbjoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVxdWlyZWRQYXJlbnRzOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn07XG4gIHBhcmVudFRvQWRkOiBzdHJpbmc7XG4gIGltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiBzdHJpbmd8bnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAge2Nsb3NlZEJ5Q2hpbGRyZW4sIHJlcXVpcmVkUGFyZW50cywgaW1wbGljaXROYW1lc3BhY2VQcmVmaXgsXG4gICAgICAgY29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBLCBjbG9zZWRCeVBhcmVudCA9IGZhbHNlLCBpc1ZvaWQgPSBmYWxzZSxcbiAgICAgICBpZ25vcmVGaXJzdExmID0gZmFsc2V9OiB7XG4gICAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4/OiBzdHJpbmdbXSxcbiAgICAgICAgY2xvc2VkQnlQYXJlbnQ/OiBib29sZWFuLFxuICAgICAgICByZXF1aXJlZFBhcmVudHM/OiBzdHJpbmdbXSxcbiAgICAgICAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg/OiBzdHJpbmcsXG4gICAgICAgIGNvbnRlbnRUeXBlPzogVGFnQ29udGVudFR5cGUsXG4gICAgICAgIGlzVm9pZD86IGJvb2xlYW4sXG4gICAgICAgIGlnbm9yZUZpcnN0TGY/OiBib29sZWFuXG4gICAgICB9ID0ge30pIHtcbiAgICBpZiAoY2xvc2VkQnlDaGlsZHJlbiAmJiBjbG9zZWRCeUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4uZm9yRWFjaCh0YWdOYW1lID0+IHRoaXMuY2xvc2VkQnlDaGlsZHJlblt0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmlzVm9pZCA9IGlzVm9pZDtcbiAgICB0aGlzLmNsb3NlZEJ5UGFyZW50ID0gY2xvc2VkQnlQYXJlbnQgfHwgaXNWb2lkO1xuICAgIGlmIChyZXF1aXJlZFBhcmVudHMgJiYgcmVxdWlyZWRQYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVxdWlyZWRQYXJlbnRzID0ge307XG4gICAgICAvLyBUaGUgZmlyc3QgcGFyZW50IGlzIHRoZSBsaXN0IGlzIGF1dG9tYXRpY2FsbHkgd2hlbiBub25lIG9mIHRoZSBsaXN0ZWQgcGFyZW50cyBhcmUgcHJlc2VudFxuICAgICAgdGhpcy5wYXJlbnRUb0FkZCA9IHJlcXVpcmVkUGFyZW50c1swXTtcbiAgICAgIHJlcXVpcmVkUGFyZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5yZXF1aXJlZFBhcmVudHNbdGFnTmFtZV0gPSB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCA9IGltcGxpY2l0TmFtZXNwYWNlUHJlZml4IHx8IG51bGw7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgIHRoaXMuaWdub3JlRmlyc3RMZiA9IGlnbm9yZUZpcnN0TGY7XG4gIH1cblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlcXVpcmVkUGFyZW50cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbGNQYXJlbnQgPSBjdXJyZW50UGFyZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNQYXJlbnRUZW1wbGF0ZSA9IGxjUGFyZW50ID09PSAndGVtcGxhdGUnIHx8IGN1cnJlbnRQYXJlbnQgPT09ICduZy10ZW1wbGF0ZSc7XG4gICAgcmV0dXJuICFpc1BhcmVudFRlbXBsYXRlICYmIHRoaXMucmVxdWlyZWRQYXJlbnRzW2xjUGFyZW50XSAhPT0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZvaWQgfHwgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHRoaXMuY2xvc2VkQnlDaGlsZHJlbjtcbiAgfVxufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI29wdGlvbmFsLXRhZ3Ncbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgZnVsbHkgY29uZm9ybSB0byB0aGUgSFRNTDUgc3BlYy5cbmNvbnN0IFRBR19ERUZJTklUSU9OUzoge1trZXk6IHN0cmluZ106IEh0bWxUYWdEZWZpbml0aW9ufSA9IHtcbiAgJ2Jhc2UnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbWV0YSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdhcmVhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2VtYmVkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2xpbmsnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW1nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2lucHV0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3BhcmFtJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2hyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2JyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3NvdXJjZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd0cmFjayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd3YnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7XG4gICAgY2xvc2VkQnlDaGlsZHJlbjogW1xuICAgICAgJ2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2RpdicsICdkbCcsICAgICAgJ2ZpZWxkc2V0JywgJ2Zvb3RlcicsICdmb3JtJyxcbiAgICAgICdoMScsICAgICAgJ2gyJywgICAgICAnaDMnLCAgICAnaDQnLCAgICAgICAgICdoNScsICAnaDYnLCAgICAgICdoZWFkZXInLCAgICdoZ3JvdXAnLCAnaHInLFxuICAgICAgJ21haW4nLCAgICAnbmF2JywgICAgICdvbCcsICAgICdwJywgICAgICAgICAgJ3ByZScsICdzZWN0aW9uJywgJ3RhYmxlJywgICAgJ3VsJ1xuICAgIF0sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0aGVhZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddfSksXG4gICd0Ym9keSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGZvb3QnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGJvZHknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3RyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbJ3RyJ10sXG4gICAgcmVxdWlyZWRQYXJlbnRzOiBbJ3Rib2R5JywgJ3Rmb290JywgJ3RoZWFkJ10sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0ZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGQnLCAndGgnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2NvbCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7cmVxdWlyZWRQYXJlbnRzOiBbJ2NvbGdyb3VwJ10sIGlzVm9pZDogdHJ1ZX0pLFxuICAnc3ZnJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogJ3N2Zyd9KSxcbiAgJ21hdGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnbWF0aCd9KSxcbiAgJ2xpJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2xpJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdkdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddfSksXG4gICdkZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncmInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdydCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0Yyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3JwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0Z3JvdXAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ29wdGlvbic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRpb24nLCAnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3ByZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnbGlzdGluZyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnc3R5bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAnc2NyaXB0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuUkFXX1RFWFR9KSxcbiAgJ3RpdGxlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuRVNDQVBBQkxFX1JBV19URVhUfSksXG4gICd0ZXh0YXJlYSc6XG4gICAgICBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQsIGlnbm9yZUZpcnN0TGY6IHRydWV9KSxcbn07XG5cbmNvbnN0IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OID0gbmV3IEh0bWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBIdG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBUQUdfREVGSU5JVElPTlNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBfREVGQVVMVF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIE5nTG9jYWxlTG9jYWxpemF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTWVzc2FnZXNCeUlkIHtcbiAgW21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYbWxNZXNzYWdlc0J5SWQge1xuICBbaWQ6IHN0cmluZ106IHhtbC5Ob2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnQge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogaHRtbC5Ob2RlW119O1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJY3VDb250ZW50U3RyIHtcbiAgY2FzZXM6IHtbdmFsdWU6IHN0cmluZ106IHN0cmluZ307XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgYFBsYWNlaG9sZGVyTWFwcGVyYCBjb252ZXJ0cyBwbGFjZWhvbGRlciBuYW1lcyBmcm9tIGludGVybmFsIHRvIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gYW5kXG4gKiBiYWNrLlxuICpcbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBzZXJpYWxpemF0aW9uIGZvcm1hdCB0aGF0IHB1dCBjb25zdHJhaW50cyBvbiB0aGUgcGxhY2Vob2xkZXIgbmFtZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJNYXBwZXIge1xuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIHRvSW50ZXJuYWxOYW1lKHB1YmxpY05hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgbWFwcGVyIHRoYXQgdGFrZSBhIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBhbiBpbnRlcm5hbCBuYW1lIHRvIGEgcHVibGljIG5hbWVcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyIGV4dGVuZHMgaTE4bi5SZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcHJpdmF0ZSBpbnRlcm5hbFRvUHVibGljOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb05leHRJZDoge1trOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gIHByaXZhdGUgcHVibGljVG9JbnRlcm5hbDoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgLy8gY3JlYXRlIGEgbWFwcGluZyBmcm9tIHRoZSBtZXNzYWdlXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSwgcHJpdmF0ZSBtYXBOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIG1lc3NhZ2Uubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxUb1B1YmxpYy5oYXNPd25Qcm9wZXJ0eShpbnRlcm5hbE5hbWUpID8gdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gOiBudWxsO1xuICB9XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSA/IHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguc3RhcnROYW1lKTtcbiAgICBzdXBlci52aXNpdFRhZ1BsYWNlaG9sZGVyKHBoLCBjb250ZXh0KTtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLmNsb3NlTmFtZSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5uYW1lKTtcbiAgfVxuXG4gIC8vIFhNQiBwbGFjZWhvbGRlcnMgY291bGQgb25seSBjb250YWlucyBBLVosIDAtOSBhbmQgX1xuICBwcml2YXRlIHZpc2l0UGxhY2Vob2xkZXJOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpbnRlcm5hbE5hbWUgfHwgdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHVibGljTmFtZSA9IHRoaXMubWFwTmFtZShpbnRlcm5hbE5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IFhNQiB3aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXTtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSBuZXh0SWQgKyAxO1xuICAgICAgcHVibGljTmFtZSA9IGAke3B1YmxpY05hbWV9XyR7bmV4dElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSAxO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxUb1B1YmxpY1tpbnRlcm5hbE5hbWVdID0gcHVibGljTmFtZTtcbiAgICB0aGlzLnB1YmxpY1RvSW50ZXJuYWxbcHVibGljTmFtZV0gPSBpbnRlcm5hbE5hbWU7XG4gIH1cbn1cblxuY29uc3QgaTE4blNlbGVjdFBpcGUgPSBuZXcgSTE4blNlbGVjdFBpcGUoKTtcbmNsYXNzIFNlcmlhbGl6ZXJWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBpMThuUGx1cmFsUGlwZTogSTE4blBsdXJhbFBpcGU7XG4gIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nLCBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmkxOG5QbHVyYWxQaXBlID0gbmV3IEkxOG5QbHVyYWxQaXBlKG5ldyBOZ0xvY2FsZUxvY2FsaXphdGlvbihsb2NhbGUpKTtcbiAgfVxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmIChnZXRIdG1sVGFnRGVmaW5pdGlvbihlbGVtZW50Lm5hbWUpLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0vPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0+JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuY2hpbGRyZW4pfTwvJHtcbiAgICAgIGVsZW1lbnQubmFtZVxuICAgIH0+YDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAke2F0dHJpYnV0ZS5uYW1lfT1cIiR7YXR0cmlidXRlLnZhbHVlfVwiYDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPCEtLSR7Y29tbWVudC52YWx1ZX0tLT5gO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IHt9O1xuICAgIGV4cGFuc2lvbi5jYXNlcy5mb3JFYWNoKGMgPT4gKGNhc2VzW2MudmFsdWVdID0gdGhpcy5zZXJpYWxpemVOb2RlcyhjLmV4cHJlc3Npb24pKSk7XG5cbiAgICBzd2l0Y2ggKGV4cGFuc2lvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIHJldHVybiBpMThuU2VsZWN0UGlwZS50cmFuc2Zvcm0odGhpcy5wYXJhbXNbZXhwYW5zaW9uLnN3aXRjaFZhbHVlXSB8fCBcIlwiLCBjYXNlcyk7XG4gICAgICBjYXNlIFwicGx1cmFsXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5QbHVyYWxQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdLCBjYXNlcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBleHBhbnNpb24gdHlwZSBcIiR7ZXhwYW5zaW9uLnR5cGV9XCJgKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAgJHtleHBhbnNpb25DYXNlLnZhbHVlfSB7JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGV4cGFuc2lvbkNhc2UuZXhwcmVzc2lvbil9fWA7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgam9pbiA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gam9pbiArIG5vZGVzLm1hcChhID0+IGEudmlzaXQodGhpcywgbnVsbCkpLmpvaW4oam9pbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgbG9jYWxlOiBzdHJpbmcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KG5ldyBTZXJpYWxpemVyVmlzaXRvcihsb2NhbGUsIHBhcmFtcyksIG51bGwpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUb1htbFBhcnNlciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSB4bWxNZXNzYWdlc0J5SWQ6IHtbaWQ6IHN0cmluZ106IHhtbC5Ob2RlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE1FU1NBR0VfVEFHOiBzdHJpbmcpIHt9XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy54bWxNZXNzYWdlc0J5SWQgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBwYXJzZXIuZXJyb3JzO1xuICAgIGh0bWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeG1sTWVzc2FnZXNCeUlkOiB0aGlzLnhtbE1lc3NhZ2VzQnlJZCxcbiAgICAgIGVycm9yczogdGhpcy5lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSB0aGlzLk1FU1NBR0VfVEFHOlxuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdGhpcy54bWxNZXNzYWdlc0J5SWRbaWQudmFsdWVdID0gKGVsZW1lbnQgYXMgYW55KSBhcyB4bWwuTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLmlkIHx8IHNoYTEoc2VyaWFsaXplTm9kZXMobWVzc2FnZS5ub2Rlcykuam9pbihcIlwiKSArIGBbJHttZXNzYWdlLm1lYW5pbmd9XWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbERpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICBpZiAobWVzc2FnZS5pZCkge1xuICAgIHJldHVybiBtZXNzYWdlLmlkO1xuICB9XG5cbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvcigpO1xuICBjb25zdCBwYXJ0cyA9IG1lc3NhZ2Uubm9kZXMubWFwKGEgPT4gYS52aXNpdCh2aXNpdG9yLCBudWxsKSk7XG4gIHJldHVybiBjb21wdXRlTXNnSWQocGFydHMuam9pbihcIlwiKSwgbWVzc2FnZS5tZWFuaW5nKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGkxOG4gaHRtbCB0byBzb21ldGhpbmcgeG1sLWxpa2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYW4gVUlELlxuICpcbiAqIFRoZSB2aXNpdG9yIGlzIGFsc28gdXNlZCBpbiB0aGUgaTE4biBwYXJzZXIgdGVzdHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYFske2NvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oXCIsIFwiKX1dYDtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgc3RyQ2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcCgoazogc3RyaW5nKSA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuICAgIHJldHVybiBgeyR7aWN1LmV4cHJlc3Npb259LCAke2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC5pc1ZvaWRcbiAgICAgID8gYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiLz5gXG4gICAgICA6IGA8cGggdGFnIG5hbWU9XCIke3BoLnN0YXJ0TmFtZX1cIj4ke3BoLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfTwvcGggbmFtZT1cIiR7XG4gICAgICAgICAgcGguY2xvc2VOYW1lXG4gICAgICAgIH1cIj5gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gcGgudmFsdWUgPyBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCI+JHtwaC52YWx1ZX08L3BoPmAgOiBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCIvPmA7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gYDxwaCBpY3UgbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlLnZpc2l0KHRoaXMpfTwvcGg+YDtcbiAgfVxufVxuXG5jb25zdCBzZXJpYWxpemVyVmlzaXRvciA9IG5ldyBTZXJpYWxpemVyVmlzaXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGkxOG4uTm9kZVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gbm9kZXMubWFwKGEgPT4gYS52aXNpdChzZXJpYWxpemVyVmlzaXRvciwgbnVsbCkpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogSWdub3JlIHRoZSBJQ1UgZXhwcmVzc2lvbnMgc28gdGhhdCBtZXNzYWdlIElEcyBzdGF5cyBpZGVudGljYWwgaWYgb25seSB0aGUgZXhwcmVzc2lvbiBjaGFuZ2VzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvciBleHRlbmRzIFNlcmlhbGl6ZXJWaXNpdG9yIHtcbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgLy8gRG8gbm90IHRha2UgdGhlIGV4cHJlc3Npb24gaW50byBhY2NvdW50XG4gICAgcmV0dXJuIGB7JHtpY3UudHlwZX0sICR7c3RyQ2FzZXMuam9pbihcIiwgXCIpfX1gO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgU0hBMSBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gKlxuICogc2VlIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtNC9maXBzLTE4MC00LnBkZlxuICpcbiAqIFdBUk5JTkc6IHRoaXMgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGRlc2lnbmVkIG5vdCB0ZXN0ZWQgd2l0aCBzZWN1cml0eSBpbiBtaW5kLlxuICogICAgICAgICAgRE8gTk9UIFVTRSBJVCBJTiBBIFNFQ1VSSVRZIFNFTlNJVElWRSBDT05URVhULlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhMShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHV0ZjggPSB1dGY4RW5jb2RlKHN0cik7XG4gIGNvbnN0IHdvcmRzMzIgPSBzdHJpbmdUb1dvcmRzMzIodXRmOCwgRW5kaWFuLkJpZyk7XG4gIGNvbnN0IGxlbiA9IHV0ZjgubGVuZ3RoICogODtcblxuICBjb25zdCB3ID0gbmV3IEFycmF5KDgwKTtcbiAgbGV0IFthLCBiLCBjLCBkLCBlXTogbnVtYmVyW10gPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgd29yZHMzMltsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XG4gIHdvcmRzMzJbKCgobGVuICsgNjQpID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBbaDAsIGgxLCBoMiwgaDMsIGg0XTogbnVtYmVyW10gPSBbYSwgYiwgYywgZCwgZV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKGogPCAxNikge1xuICAgICAgICB3W2pdID0gd29yZHMzMltpICsgal07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3W2pdID0gcm9sMzIod1tqIC0gM10gXiB3W2ogLSA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmLCBrXSA9IGZrKGosIGIsIGMsIGQpO1xuICAgICAgY29uc3QgdGVtcCA9IFtyb2wzMihhLCA1KSwgZiwgZSwgaywgd1tqXV0ucmVkdWNlKGFkZDMyKTtcbiAgICAgIFtlLCBkLCBjLCBiLCBhXSA9IFtkLCBjLCByb2wzMihiLCAzMCksIGEsIHRlbXBdO1xuICAgIH1cblxuICAgIFthLCBiLCBjLCBkLCBlXSA9IFthZGQzMihhLCBoMCksIGFkZDMyKGIsIGgxKSwgYWRkMzIoYywgaDIpLCBhZGQzMihkLCBoMyksIGFkZDMyKGUsIGg0KV07XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2EsIGIsIGMsIGQsIGVdKSk7XG59XG5cbmZ1bmN0aW9uIGZrKGluZGV4OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgaWYgKGluZGV4IDwgMjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAofmIgJiBkKSwgMHg1YTgyNzk5OV07XG4gIH1cblxuICBpZiAoaW5kZXggPCA0MCkge1xuICAgIHJldHVybiBbYiBeIGMgXiBkLCAweDZlZDllYmExXTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDYwKSB7XG4gICAgcmV0dXJuIFsoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCksIDB4OGYxYmJjZGNdO1xuICB9XG5cbiAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4Y2E2MmMxZDZdO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGZpbmdlcnByaW50IG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIDY0IGJpdCBudW1iZXIgZW5jb2RlZCBhcyBhIGRlY2ltYWwgc3RyaW5nXG4gKlxuICogYmFzZWQgb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvYmxvYi9tYXN0ZXIvc3JjL2NvbS9nb29nbGUvamF2YXNjcmlwdC9qc2NvbXAvR29vZ2xlSnNNZXNzYWdlSWRHZW5lcmF0b3IuamF2YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZ2VycHJpbnQoc3RyOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcblxuICBsZXQgW2hpLCBsb10gPSBbaGFzaDMyKHV0ZjgsIDApLCBoYXNoMzIodXRmOCwgMTAyMDcyKV07XG5cbiAgaWYgKGhpID09PSAwICYmIChsbyA9PT0gMCB8fCBsbyA9PT0gMSkpIHtcbiAgICBoaSA9IGhpIF4gMHgxMzBmOWJlZjtcbiAgICBsbyA9IGxvIF4gLTB4NmI1ZjU2ZDg7XG4gIH1cblxuICByZXR1cm4gW2hpLCBsb107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTXNnSWQobXNnOiBzdHJpbmcsIG1lYW5pbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBbaGksIGxvXSA9IGZpbmdlcnByaW50KG1zZyk7XG5cbiAgaWYgKG1lYW5pbmcpIHtcbiAgICBjb25zdCBbaGltLCBsb21dID0gZmluZ2VycHJpbnQobWVhbmluZyk7XG4gICAgW2hpLCBsb10gPSBhZGQ2NChyb2w2NChbaGksIGxvXSwgMSksIFtoaW0sIGxvbV0pO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVTdHJpbmdUb0RlY1N0cmluZyh3b3JkczMyVG9CeXRlU3RyaW5nKFtoaSAmIDB4N2ZmZmZmZmYsIGxvXSkpO1xufVxuXG5mdW5jdGlvbiBoYXNoMzIoc3RyOiBzdHJpbmcsIGM6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBbYSwgYl0gPSBbMHg5ZTM3NzliOSwgMHg5ZTM3NzliOV07XG4gIGxldCBpOiBudW1iZXI7XG5cbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpICsgMTIgPD0gbGVuOyBpICs9IDEyKSB7XG4gICAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBiID0gYWRkMzIoYiwgd29yZEF0KHN0ciwgaSArIDQsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBbYSwgYiwgY10gPSBtaXgoW2EsIGIsIGNdKTtcbiAgfVxuXG4gIGEgPSBhZGQzMihhLCB3b3JkQXQoc3RyLCBpLCBFbmRpYW4uTGl0dGxlKSk7XG4gIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAvLyB0aGUgZmlyc3QgYnl0ZSBvZiBjIGlzIHJlc2VydmVkIGZvciB0aGUgbGVuZ3RoXG4gIGMgPSBhZGQzMihjLCBsZW4pO1xuICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpIDw8IDgpO1xuXG4gIHJldHVybiBtaXgoW2EsIGIsIGNdKVsyXTtcbn1cblxuLy8gY2xhbmctZm9ybWF0IG9mZlxuZnVuY3Rpb24gbWl4KFthLCBiLCBjXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgODtcbiAgYyA9IHN1YjMyKGMsIGEpO1xuICBjID0gc3ViMzIoYywgYik7XG4gIGMgXj0gYiA+Pj4gMTM7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDEyO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDE2O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiA1O1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAzO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDEwO1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxNTtcbiAgcmV0dXJuIFthLCBiLCBjXTtcbn1cbi8vIGNsYW5nLWZvcm1hdCBvblxuXG4vLyBVdGlsc1xuXG5lbnVtIEVuZGlhbiB7XG4gIExpdHRsZSxcbiAgQmlnXG59XG5cbmZ1bmN0aW9uIGFkZDMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGFkZDMydG82NChhLCBiKVsxXTtcbn1cblxuZnVuY3Rpb24gYWRkMzJ0bzY0KGE6IG51bWJlciwgYjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGxvdyA9IChhICYgMHhmZmZmKSArIChiICYgMHhmZmZmKTtcbiAgY29uc3QgaGlnaCA9IChhID4+PiAxNikgKyAoYiA+Pj4gMTYpICsgKGxvdyA+Pj4gMTYpO1xuICByZXR1cm4gW2hpZ2ggPj4+IDE2LCAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKV07XG59XG5cbmZ1bmN0aW9uIGFkZDY0KFthaCwgYWxdOiBbbnVtYmVyLCBudW1iZXJdLCBbYmgsIGJsXTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBbY2FycnksIGxdID0gYWRkMzJ0bzY0KGFsLCBibCk7XG4gIGNvbnN0IGggPSBhZGQzMihhZGQzMihhaCwgYmgpLCBjYXJyeSk7XG4gIHJldHVybiBbaCwgbF07XG59XG5cbmZ1bmN0aW9uIHN1YjMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpIC0gKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4gMTYpIC0gKGIgPj4gMTYpICsgKGxvdyA+PiAxNik7XG4gIHJldHVybiAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKTtcbn1cblxuLy8gUm90YXRlIGEgMzJiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDMyKGE6IG51bWJlciwgY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYSA8PCBjb3VudCkgfCAoYSA+Pj4gKDMyIC0gY291bnQpKTtcbn1cblxuLy8gUm90YXRlIGEgNjRiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDY0KFtoaSwgbG9dOiBbbnVtYmVyLCBudW1iZXJdLCBjb3VudDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGggPSAoaGkgPDwgY291bnQpIHwgKGxvID4+PiAoMzIgLSBjb3VudCkpO1xuICBjb25zdCBsID0gKGxvIDw8IGNvdW50KSB8IChoaSA+Pj4gKDMyIC0gY291bnQpKTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9Xb3JkczMyKHN0cjogc3RyaW5nLCBlbmRpYW46IEVuZGlhbik6IG51bWJlcltdIHtcbiAgY29uc3Qgd29yZHMzMiA9IEFycmF5KChzdHIubGVuZ3RoICsgMykgPj4+IDIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkrKykge1xuICAgIHdvcmRzMzJbaV0gPSB3b3JkQXQoc3RyLCBpICogNCwgZW5kaWFuKTtcbiAgfVxuXG4gIHJldHVybiB3b3JkczMyO1xufVxuXG5mdW5jdGlvbiBieXRlQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaW5kZXggPj0gc3RyLmxlbmd0aCA/IDAgOiBzdHIuY2hhckNvZGVBdChpbmRleCkgJiAweGZmO1xufVxuXG5mdW5jdGlvbiB3b3JkQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyIHtcbiAgbGV0IHdvcmQgPSAwO1xuICBpZiAoZW5kaWFuID09PSBFbmRpYW4uQmlnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoMjQgLSA4ICogaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgKDggKiBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdvcmQ7XG59XG5cbmZ1bmN0aW9uIHdvcmRzMzJUb0J5dGVTdHJpbmcod29yZHMzMjogbnVtYmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gd29yZHMzMi5yZWR1Y2UoKHN0ciwgd29yZCkgPT4gc3RyICsgd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQpLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQ6IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3b3JkID4+PiAoOCAqICgzIC0gaSkpKSAmIDB4ZmYpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVTdHJpbmdUb0hleFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBoZXggPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGIgPSBieXRlQXQoc3RyLCBpKTtcbiAgICBoZXggKz0gKGIgPj4+IDQpLnRvU3RyaW5nKDE2KSArIChiICYgMHgwZikudG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gYmFzZWQgb24gaHR0cDovL3d3dy5kYW52ay5vcmcvaGV4MmRlYy5odG1sIChKUyBjYW4gbm90IGhhbmRsZSBtb3JlIHRoYW4gNTZiKVxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRlY2ltYWwgPSBcIlwiO1xuICBsZXQgdG9UaGVQb3dlciA9IFwiMVwiO1xuXG4gIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkZWNpbWFsID0gYWRkQmlnSW50KGRlY2ltYWwsIG51bWJlclRpbWVzQmlnSW50KGJ5dGVBdChzdHIsIGkpLCB0b1RoZVBvd2VyKSk7XG4gICAgdG9UaGVQb3dlciA9IG51bWJlclRpbWVzQmlnSW50KDI1NiwgdG9UaGVQb3dlcik7XG4gIH1cblxuICByZXR1cm4gZGVjaW1hbFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbihcIlwiKTtcbn1cblxuLy8geCBhbmQgeSBkZWNpbWFsLCBsb3dlc3Qgc2lnbmlmaWNhbnQgZGlnaXQgZmlyc3RcbmZ1bmN0aW9uIGFkZEJpZ0ludCh4OiBzdHJpbmcsIHk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzdW0gPSBcIlwiO1xuICBjb25zdCBsZW4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMCwgY2FycnkgPSAwOyBpIDwgbGVuIHx8IGNhcnJ5OyBpKyspIHtcbiAgICBjb25zdCB0bXBTdW0gPSBjYXJyeSArICsoeFtpXSB8fCAwKSArICsoeVtpXSB8fCAwKTtcbiAgICBpZiAodG1wU3VtID49IDEwKSB7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgICBzdW0gKz0gdG1wU3VtIC0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIHN1bSArPSB0bXBTdW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyVGltZXNCaWdJbnQobnVtOiBudW1iZXIsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBwcm9kdWN0ID0gXCJcIjtcbiAgbGV0IGJUb1RoZVBvd2VyID0gYjtcbiAgZm9yICg7IG51bSAhPT0gMDsgbnVtID0gbnVtID4+PiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHByb2R1Y3QgPSBhZGRCaWdJbnQocHJvZHVjdCwgYlRvVGhlUG93ZXIpO1xuICAgIH1cbiAgICBiVG9UaGVQb3dlciA9IGFkZEJpZ0ludChiVG9UaGVQb3dlciwgYlRvVGhlUG93ZXIpO1xuICB9XG4gIHJldHVybiBwcm9kdWN0O1xufVxuXG5mdW5jdGlvbiB1dGY4RW5jb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBjb2RlUG9pbnQgPSBzdHIuY2hhckNvZGVBdChpbmRleCk7XG5cbiAgICAvLyBkZWNvZGUgc3Vycm9nYXRlXG4gICAgLy8gc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIGlmIChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRiZmYgJiYgc3RyLmxlbmd0aCA+IGluZGV4ICsgMSkge1xuICAgICAgY29uc3QgbG93ID0gc3RyLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgIGlmIChsb3cgPj0gMHhkYzAwICYmIGxvdyA8PSAweGRmZmYpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29kZVBvaW50ID0gKChjb2RlUG9pbnQgLSAweGQ4MDApIDw8IDEwKSArIGxvdyAtIDB4ZGMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA8PSAweDdmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDdmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxZikgfCAweGMwLCAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKGNvZGVQb2ludCA+PiAxMikgfCAweGUwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDFmZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4ZjAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDEyKSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIEkxOG5NZXNzYWdlc0J5SWQsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMS4yXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoxLjJcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInhcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ0cmFucy11bml0XCI7XG5jb25zdCBfQ09OVEVYVF9HUk9VUF9UQUcgPSBcImNvbnRleHQtZ3JvdXBcIjtcbmNvbnN0IF9DT05URVhUX1RBRyA9IFwiY29udGV4dFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4bGlmZkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZlBhcnNlciA9IG5ldyBYbGlmZlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBtZXNzYWdlc1xuICBjb25zdCBpMThuTWVzc2FnZXNCeUlkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTWVzc2FnZXNCeUlkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIGkxOG5NZXNzYWdlc0J5SWQ7XG59XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL29zL3hsaWZmLWNvcmUuaHRtbFxuLy8gaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi94bGlmZi1wcm9maWxlLWh0bWwveGxpZmYtcHJvZmlsZS1odG1sLTEuMi5odG1sXG5leHBvcnQgZnVuY3Rpb24geGxpZmZXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2Rlcz86IHhtbC5Ob2RlW10pOiBzdHJpbmcge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFdyaXRlVmlzaXRvcigpO1xuICBjb25zdCB0cmFuc1VuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDYpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgY29udGV4dFRhZ3M6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0R3JvdXBUYWcgPSBuZXcgeG1sLlRhZyhfQ09OVEVYVF9HUk9VUF9UQUcsIHtwdXJwb3NlOiBcImxvY2F0aW9uXCJ9KTtcbiAgICAgIGNvbnRleHRHcm91cFRhZy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJzb3VyY2VmaWxlXCJ9LCBbbmV3IHhtbC5UZXh0KHNvdXJjZS5maWxlUGF0aCldKSxcbiAgICAgICAgbmV3IHhtbC5DUigxMCksXG4gICAgICAgIG5ldyB4bWwuVGFnKF9DT05URVhUX1RBRywge1wiY29udGV4dC10eXBlXCI6IFwibGluZW51bWJlclwifSwgW25ldyB4bWwuVGV4dChgJHtzb3VyY2Uuc3RhcnRMaW5lfWApXSksXG4gICAgICAgIG5ldyB4bWwuQ1IoOClcbiAgICAgICk7XG4gICAgICBjb250ZXh0VGFncy5wdXNoKG5ldyB4bWwuQ1IoOCksIGNvbnRleHRHcm91cFRhZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc1VuaXQgPSBuZXcgeG1sLlRhZyhfVU5JVF9UQUcsIHtpZDogbWVzc2FnZS5pZCwgZGF0YXR5cGU6IFwiaHRtbFwifSk7XG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksXG4gICAgICAuLi5jb250ZXh0VGFnc1xuICAgICk7XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyYW5zVW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgdHJhbnNVbml0cy5wdXNoKG5ldyB4bWwuQ1IoNiksIHRyYW5zVW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgeG1sLlRhZyhcImJvZHlcIiwge30sIFsuLi50cmFuc1VuaXRzLCBuZXcgeG1sLkNSKDQpXSk7XG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhcbiAgICBcImZpbGVcIixcbiAgICB7XG4gICAgICBcInNvdXJjZS1sYW5ndWFnZVwiOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkcsXG4gICAgICBkYXRhdHlwZTogXCJwbGFpbnRleHRcIixcbiAgICAgIG9yaWdpbmFsOiBcIm5nMi50ZW1wbGF0ZVwiXG4gICAgfSxcbiAgICBbbmV3IHhtbC5DUig0KSwgYm9keSwgbmV3IHhtbC5DUigyKV1cbiAgKTtcbiAgY29uc3QgeGxpZmYgPSBuZXcgeG1sLlRhZyhcInhsaWZmXCIsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOU30sIFtuZXcgeG1sLkNSKDIpLCBmaWxlLCBuZXcgeG1sLkNSKCldKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmRGlnZXN0ID0gZGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsITtcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVU5JVF9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5pdE1sU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IHRoaXMuX3VuaXRNbFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBNZXNzYWdlICR7aWR9IG1pc3NlcyBhIHRyYW5zbGF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgICAvLyBpZ25vcmUgc291cmNlIG1lc3NhZ2VcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfRklMRV9UQUc6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETyh2aWNiKTogYXNzZXJ0IGZpbGUgc3RydWN0dXJlLCB4bGlmZiB2ZXJzaW9uXG4gICAgICAgIC8vIEZvciBub3cgb25seSByZWN1cnNlIG9uIHVuaGFuZGxlZCBub2Rlc1xuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5QbGFjZWhvbGRlciB8IG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGN0eXBlID0gZ2V0Q3R5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30vPmB9KV07XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGguc3RhcnROYW1lLCBjdHlwZSwgXCJlcXVpdi10ZXh0XCI6IGA8JHtwaC50YWd9PmB9KTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5jbG9zZU5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwvJHtwaC50YWd9PmB9KTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGB7eyR7cGgudmFsdWV9fX1gfSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGVxdWl2VGV4dCA9IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKX19YDtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGVxdWl2VGV4dH0pXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICAgIHJldHVybiBcImxiXCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGB4LSR7dGFnfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMi4wXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoyLjBcIjtcbmNvbnN0IF9ERUZBVUxUX1NPVVJDRV9MQU5HID0gXCJlblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcgPSBcInBjXCI7XG5jb25zdCBfWExJRkZfVEFHID0gXCJ4bGlmZlwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ1bml0XCI7XG5jb25zdCBfTk9URVNfVEFHID0gXCJub3Rlc1wiO1xuY29uc3QgX05PVEVfVEFHID0gXCJub3RlXCI7XG5jb25zdCBfU0VHTUVOVF9UQUcgPSBcInNlZ21lbnRcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi94bGlmZi1jb3JlL3YyLjAvb3MveGxpZmYtY29yZS12Mi4wLW9zLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9JMThuKGNvbnRlbnQ6IHN0cmluZyk6IEkxOG5NZXNzYWdlc0J5SWQge1xuICAvLyB4bGlmZiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeGxpZmYyUGFyc2VyID0gbmV3IFhsaWZmMlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZjJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzOiBlfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSk7XG4gICAgZXJyb3JzLnB1c2goLi4uZSk7XG4gICAgaTE4bk5vZGVzQnlNc2dJZFttc2dJZF0gPSBpMThuTm9kZXM7XG4gIH0pO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk5vZGVzQnlNc2dJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYyIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHVuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDQpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkfSk7XG4gICAgY29uc3Qgbm90ZXMgPSBuZXcgeG1sLlRhZyhfTk9URVNfVEFHKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uIHx8IG1lc3NhZ2UubWVhbmluZyB8fCBtZXNzYWdlLnNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgbmV3IHhtbC5UYWcoX05PVEVfVEFHLCB7Y2F0ZWdvcnk6IFwiZGVzY3JpcHRpb25cIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5kZXNjcmlwdGlvbildKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJtZWFuaW5nXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UubWVhbmluZyldKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJsb2NhdGlvblwifSwgW1xuICAgICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gXCIsXCIgKyBzb3VyY2UuZW5kTGluZSA6IFwiXCJ9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpKTtcbiAgICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBub3Rlcyk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzZWdtZW50ID0gbmV3IHhtbC5UYWcoX1NFR01FTlRfVEFHKTtcblxuICAgIHNlZ21lbnQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDgpLCBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIHZpc2l0b3Iuc2VyaWFsaXplKG1lc3NhZ2Uubm9kZXMpKSwgbmV3IHhtbC5DUig2KSk7XG5cbiAgICB1bml0LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSwgc2VnbWVudCwgbmV3IHhtbC5DUig0KSk7XG5cbiAgICB1bml0cy5wdXNoKG5ldyB4bWwuQ1IoNCksIHVuaXQpO1xuICB9KTtcblxuICBjb25zdCBmaWxlID0gbmV3IHhtbC5UYWcoX0ZJTEVfVEFHLCB7b3JpZ2luYWw6IFwibmcudGVtcGxhdGVcIiwgaWQ6IFwibmdpMThuXCJ9LCBbLi4udW5pdHMsIG5ldyB4bWwuQ1IoMildKTtcblxuICBjb25zdCB4bGlmZiA9IG5ldyB4bWwuVGFnKF9YTElGRl9UQUcsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOUywgc3JjTGFuZzogbG9jYWxlIHx8IF9ERUZBVUxUX1NPVVJDRV9MQU5HfSwgW1xuICAgIG5ldyB4bWwuQ1IoMiksXG4gICAgZmlsZSxcbiAgICBuZXcgeG1sLkNSKClcbiAgXSk7XG5cbiAgcmV0dXJuIHhtbC5zZXJpYWxpemUoW25ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246IFwiMS4wXCIsIGVuY29kaW5nOiBcIlVURi04XCJ9KSwgbmV3IHhtbC5DUigpLCB4bGlmZiwgbmV3IHhtbC5DUigpXSk7XG59XG5cbmV4cG9ydCBjb25zdCB4bGlmZjJEaWdlc3QgPSBkZWNpbWFsRGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZjJQYXJzZXIgaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfdW5pdE1sU3RyaW5nOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIF9tc2dJZFRvSHRtbDoge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcblxuICBwYXJzZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKGNvbnRlbnQsIFwiXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsO1xuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19VTklUX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl91bml0TWxTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gdGhpcy5fdW5pdE1sU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYE1lc3NhZ2UgJHtpZH0gbWlzc2VzIGEgdHJhbnNsYXRpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1NPVVJDRV9UQUc6XG4gICAgICAgIC8vIGlnbm9yZSBzb3VyY2UgbWVzc2FnZVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVEFSR0VUX1RBRzpcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0LCBpbm5lclRleHRFbmQpO1xuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBpbm5lclRleHQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9YTElGRl9UQUc6XG4gICAgICAgIGNvbnN0IHZlcnNpb25BdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcInZlcnNpb25cIik7XG4gICAgICAgIGlmICh2ZXJzaW9uQXR0cikge1xuICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodmVyc2lvbiAhPT0gXCIyLjBcIikge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYFRoZSBYTElGRiBmaWxlIHZlcnNpb24gJHt2ZXJzaW9ufSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFhMSUZGIDIuMCBzZXJpYWxpemVyYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4sIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4bGlmZiBzeW50YXgpIHRvIGkxOG4gbm9kZXNcbmNsYXNzIFhtbFRvSTE4biBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuXG4gIGNvbnZlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeG1sSWN1ID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShtZXNzYWdlLCBcIlwiLCB0cnVlKTtcbiAgICB0aGlzLl9lcnJvcnMgPSB4bWxJY3UuZXJyb3JzO1xuXG4gICAgY29uc3QgaTE4bk5vZGVzID1cbiAgICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwIHx8IHhtbEljdS5yb290Tm9kZXMubGVuZ3RoID09PSAwID8gW10gOiBbXS5jb25jYXQoLi4ubWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2RlcykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGVbXSB8IG51bGwge1xuICAgIHN3aXRjaCAoZWwubmFtZSkge1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfVEFHOlxuICAgICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiZXF1aXZcIik7XG4gICAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICAgIHJldHVybiBbbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4pXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdlwiIGF0dHJpYnV0ZWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRzpcbiAgICAgICAgY29uc3Qgc3RhcnRBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBlbmRBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdkVuZFwiKTtcblxuICAgICAgICBpZiAoIXN0YXJ0QXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdlN0YXJ0XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWVuZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwiZXF1aXZFbmRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydElkID0gc3RhcnRBdHRyLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGVuZElkID0gZW5kQXR0ci52YWx1ZTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVzOiBpMThuLk5vZGVbXSA9IFtdO1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGVzLmNvbmNhdChcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIHN0YXJ0SWQsIGVsLnNvdXJjZVNwYW4pLFxuICAgICAgICAgICAgLi4uZWwuY2hpbGRyZW4ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCBudWxsKSksXG4gICAgICAgICAgICBuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBlbmRJZCwgZWwuc291cmNlU3BhbilcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGBVbmV4cGVjdGVkIHRhZ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24pKVxuICAgIH07XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4sIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5jbGFzcyBXcml0ZVZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICBwcml2YXRlIF9uZXh0UGxhY2Vob2xkZXJJZDogbnVtYmVyO1xuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlRm9yVGFnKHBoLnRhZyk7XG5cbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICBjb25zdCB0YWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtcbiAgICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgICBlcXVpdjogcGguc3RhcnROYW1lLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkaXNwOiBgPCR7cGgudGFnfS8+YFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3RhZ1BoXTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdQYyA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcsIHtcbiAgICAgIGlkOiAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKSxcbiAgICAgIGVxdWl2U3RhcnQ6IHBoLnN0YXJ0TmFtZSxcbiAgICAgIGVxdWl2RW5kOiBwaC5jbG9zZU5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgZGlzcFN0YXJ0OiBgPCR7cGgudGFnfT5gLFxuICAgICAgZGlzcEVuZDogYDwvJHtwaC50YWd9PmBcbiAgICB9KTtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdLmNvbmNhdCguLi5waC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZTogeG1sLk5vZGUpID0+IHRhZ1BjLmNoaWxkcmVuLnB1c2gobm9kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWdQYy5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuVGV4dChcIlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YWdQY107XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaWRTdHIgPSAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogaWRTdHIsXG4gICAgICAgIGVxdWl2OiBwaC5uYW1lLFxuICAgICAgICBkaXNwOiBge3ske3BoLnZhbHVlfX19YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpXG4gICAgICAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZSArIFwiIHsuLi59XCIpXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgY29uc3QgaWRTdHIgPSAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogaWRTdHIsXG4gICAgICAgIGVxdWl2OiBwaC5uYW1lLFxuICAgICAgICBkaXNwOiBgeyR7cGgudmFsdWUuZXhwcmVzc2lvbn0sICR7cGgudmFsdWUudHlwZX0sICR7Y2FzZXN9fWBcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICB0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCA9IDA7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICBjYXNlIFwiYlwiOlxuICAgIGNhc2UgXCJpXCI6XG4gICAgY2FzZSBcInVcIjpcbiAgICAgIHJldHVybiBcImZtdFwiO1xuICAgIGNhc2UgXCJpbWdcIjpcbiAgICAgIHJldHVybiBcImltYWdlXCI7XG4gICAgY2FzZSBcImFcIjpcbiAgICAgIHJldHVybiBcImxpbmtcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwib3RoZXJcIjtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuaW1wb3J0IHtkZWNpbWFsRGlnZXN0fSBmcm9tIFwiLi9kaWdlc3RcIjtcbmltcG9ydCB7SHRtbFRvWG1sUGFyc2VyLCBQbGFjZWhvbGRlck1hcHBlciwgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXIsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuXG5jb25zdCBfTUVTU0FHRVNfVEFHID0gXCJtZXNzYWdlYnVuZGxlXCI7XG5jb25zdCBfTUVTU0FHRV9UQUcgPSBcIm1zZ1wiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9FWEVNUExFX1RBRyA9IFwiZXhcIjtcbmNvbnN0IF9TT1VSQ0VfVEFHID0gXCJzb3VyY2VcIjtcblxuY29uc3QgX0RPQ1RZUEUgPSBgPCFFTEVNRU5UIG1lc3NhZ2VidW5kbGUgKG1zZykqPlxuPCFBVFRMSVNUIG1lc3NhZ2VidW5kbGUgY2xhc3MgQ0RBVEEgI0lNUExJRUQ+XG5cbjwhRUxFTUVOVCBtc2cgKCNQQ0RBVEF8cGh8c291cmNlKSo+XG48IUFUVExJU1QgbXNnIGlkIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBzZXEgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG5hbWUgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIGRlc2MgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG1lYW5pbmcgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG9ic29sZXRlIChvYnNvbGV0ZSkgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHhtbDpzcGFjZSAoZGVmYXVsdHxwcmVzZXJ2ZSkgXCJkZWZhdWx0XCI+XG48IUFUVExJU1QgbXNnIGlzX2hpZGRlbiBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIHNvdXJjZSAoI1BDREFUQSk+XG5cbjwhRUxFTUVOVCBwaCAoI1BDREFUQXxleCkqPlxuPCFBVFRMSVNUIHBoIG5hbWUgQ0RBVEEgI1JFUVVJUkVEPlxuXG48IUVMRU1FTlQgZXggKCNQQ0RBVEEpPmA7XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhtYkxvYWRUb1htbChjb250ZW50OiBzdHJpbmcpOiBYbWxNZXNzYWdlc0J5SWQge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgSHRtbFRvWG1sUGFyc2VyKF9NRVNTQUdFX1RBRyk7XG4gIGNvbnN0IHt4bWxNZXNzYWdlc0J5SWQsIGVycm9yc30gPSBwYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhtYiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiB4bWxNZXNzYWdlc0J5SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2RlczogeG1sLk5vZGVbXSA9IFtdKTogc3RyaW5nIHtcbiAgY29uc3QgZXhhbXBsZVZpc2l0b3IgPSBuZXcgRXhhbXBsZVZpc2l0b3IoKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKCk7XG4gIGNvbnN0IHJvb3ROb2RlID0gbmV3IHhtbC5UYWcoX01FU1NBR0VTX1RBRyk7XG5cbiAgZXhpc3RpbmdOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigyKSwgbm9kZSk7XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGV4aXN0aW5nTm9kZXMpO1xuICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7aWQ6IG1lc3NhZ2UuaWR9O1xuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIGF0dHJzW1wiZGVzY1wiXSA9IG1lc3NhZ2UuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgYXR0cnNbXCJtZWFuaW5nXCJdID0gbWVzc2FnZS5tZWFuaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVRhZ3M6IHhtbC5UYWdbXSA9IFtdO1xuICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgIHNvdXJjZVRhZ3MucHVzaChcbiAgICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCBbXG4gICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgYCR7c291cmNlLmZpbGVQYXRofToke3NvdXJjZS5zdGFydExpbmV9JHtzb3VyY2UuZW5kTGluZSAhPT0gc291cmNlLnN0YXJ0TGluZSA/IFwiLFwiICsgc291cmNlLmVuZExpbmUgOiBcIlwifWBcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChcbiAgICAgIG5ldyB4bWwuQ1IoMiksXG4gICAgICBuZXcgeG1sLlRhZyhfTUVTU0FHRV9UQUcsIGF0dHJzLCBbLi4uc291cmNlVGFncywgLi4udmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcyldKVxuICAgICk7XG4gIH0pO1xuXG4gIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigpKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbXG4gICAgbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLFxuICAgIG5ldyB4bWwuQ1IoKSxcbiAgICBuZXcgeG1sLkRvY3R5cGUoX01FU1NBR0VTX1RBRywgX0RPQ1RZUEUpLFxuICAgIG5ldyB4bWwuQ1IoKSxcbiAgICBleGFtcGxlVmlzaXRvci5hZGREZWZhdWx0RXhhbXBsZXMocm9vdE5vZGUpLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYkRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGlnZXN0KG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iTWFwcGVyKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcmV0dXJuIG5ldyBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcihtZXNzYWdlLCB0b1B1YmxpY05hbWUpO1xufVxuXG5jbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ6IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW107XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IGkxOG4uTm9kZSkgPT4gbm9kZXMucHVzaCguLi5ub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzID0gW25ldyB4bWwuVGV4dChgeyR7aWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcn0sICR7aWN1LnR5cGV9LCBgKV07XG5cbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goKGM6IHN0cmluZykgPT4ge1xuICAgICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYCR7Y30ge2ApLCAuLi5pY3UuY2FzZXNbY10udmlzaXQodGhpcyksIG5ldyB4bWwuVGV4dChgfSBgKSk7XG4gICAgfSk7XG5cbiAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgfWApKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBzdGFydEV4ID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChgPCR7cGgudGFnfT5gKV0pO1xuICAgIGNvbnN0IHN0YXJ0VGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguc3RhcnROYW1lfSwgW3N0YXJ0RXhdKTtcbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICAvLyB2b2lkIHRhZ3MgaGF2ZSBubyBjaGlsZHJlbiBub3IgY2xvc2luZyB0YWdzXG4gICAgICByZXR1cm4gW3N0YXJ0VGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRXggPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGA8LyR7cGgudGFnfT5gKV0pO1xuICAgIGNvbnN0IGNsb3NlVGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguY2xvc2VOYW1lfSwgW2Nsb3NlRXhdKTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBleFRhZyA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYHt7JHtwaC52YWx1ZX19fWApXSk7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGgubmFtZX0sIFtleFRhZ10pXTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBleFRhZyA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtcbiAgICAgIG5ldyB4bWwuVGV4dChcbiAgICAgICAgYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke09iamVjdC5rZXlzKHBoLnZhbHVlLmNhc2VzKVxuICAgICAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgICAgICAuam9pbihcIiBcIil9fWBcbiAgICAgIClcbiAgICBdKTtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnXSldO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRlY2ltYWxEaWdlc3QobWVzc2FnZSk7XG59XG5cbi8vIFRDIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBub24tZW1wdHkgZXhhbXBsZSBvbiBwbGFjZWhvbGRlcnNcbmNsYXNzIEV4YW1wbGVWaXNpdG9yIGltcGxlbWVudHMgeG1sLklWaXNpdG9yIHtcbiAgYWRkRGVmYXVsdEV4YW1wbGVzKG5vZGU6IHhtbC5Ob2RlKTogeG1sLk5vZGUge1xuICAgIG5vZGUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRhZyh0YWc6IHhtbC5UYWcpOiB2b2lkIHtcbiAgICBpZiAodGFnLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGlmICghdGFnLmNoaWxkcmVuIHx8IHRhZy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhUZXh0ID0gbmV3IHhtbC5UZXh0KHRhZy5hdHRyc1tcIm5hbWVcIl0gfHwgXCIuLi5cIik7XG4gICAgICAgIHRhZy5jaGlsZHJlbiA9IFtuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbZXhUZXh0XSldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFnLmNoaWxkcmVuKSB7XG4gICAgICB0YWcuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KTogYW55IHtcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGVsZW1lbnQuYXR0cnMuZm9yRWFjaCgoYXR0cjogbWwuQXR0cmlidXRlKSA9PiB7XG4gICAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCB0YWcgPSBuZXcgeG1sLlRhZyhlbGVtZW50Lm5hbWUsIGF0dHJzLCBlbGVtZW50LmNoaWxkcmVuIGFzIGFueSk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRUYWcodGFnKTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiB4bWwuVGV4dCk6IHZvaWQge31cblxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IHhtbC5EZWNsYXJhdGlvbik6IHZvaWQge31cblxuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogeG1sLkRvY3R5cGUpOiB2b2lkIHt9XG59XG5cbi8vIFhNQi9YVEIgcGxhY2Vob2xkZXJzIGNhbiBvbmx5IGNvbnRhaW4gQS1aLCAwLTkgYW5kIF9cbmV4cG9ydCBmdW5jdGlvbiB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW50ZXJuYWxOYW1lLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTlfXS9nLCBcIl9cIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7ZGlnZXN0fSBmcm9tIFwiLi9kaWdlc3RcIjtcbmltcG9ydCB7eG1iTWFwcGVyfSBmcm9tIFwiLi94bWJcIjtcblxuY29uc3QgX1RSQU5TTEFUSU9OU19UQUcgPSBcInRyYW5zbGF0aW9uYnVuZGxlXCI7XG5jb25zdCBfVFJBTlNMQVRJT05fVEFHID0gXCJ0cmFuc2xhdGlvblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0YkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHh0YiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeHRiUGFyc2VyID0gbmV3IFh0YlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yczogcGFyc2VFcnJvcnN9ID0geHRiUGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChwYXJzZUVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHh0YiBwYXJzZSBlcnJvcnM6XFxuJHtwYXJzZUVycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICAvLyBCZWNhdXNlIHdlIHNob3VsZCBiZSBhYmxlIHRvIGxvYWQgeHRiIGZpbGVzIHRoYXQgcmVseSBvbiBmZWF0dXJlcyBub3Qgc3VwcG9ydGVkIGJ5IGFuZ3VsYXIsXG4gIC8vIHdlIG5lZWQgdG8gZGVsYXkgdGhlIGNvbnZlcnNpb24gb2YgaHRtbCB0byBpMThuIG5vZGVzIHNvIHRoYXQgbm9uIGFuZ3VsYXIgbWVzc2FnZXMgYXJlIG5vdFxuICAvLyBjb252ZXJ0ZWRcbiAgT2JqZWN0LmtleXMobXNnSWRUb0h0bWwpLmZvckVhY2gobXNnSWQgPT4ge1xuICAgIGNvbnN0IHZhbHVlRm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnN9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGkxOG5Ob2RlcztcbiAgICB9O1xuICAgIGNyZWF0ZUxhenlQcm9wZXJ0eShpMThuTm9kZXNCeU1zZ0lkLCBtc2dJZCwgdmFsdWVGbik7XG4gIH0pO1xuXG4gIHJldHVybiBpMThuTm9kZXNCeU1zZ0lkO1xufVxuXG5leHBvcnQgY29uc3QgeHRiRGlnZXN0ID0gZGlnZXN0O1xuXG5leHBvcnQgY29uc3QgeHRiTWFwcGVyID0geG1iTWFwcGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXp5UHJvcGVydHkobWVzc2FnZXM6IGFueSwgaWQ6IHN0cmluZywgdmFsdWVGbjogKCkgPT4gYW55KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXNzYWdlcywgaWQsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGbigpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge2VudW1lcmFibGU6IHRydWUsIHZhbHVlfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IF8gPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IG92ZXJ3cml0ZSBhbiBYVEIgdHJhbnNsYXRpb25cIik7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRXh0cmFjdCBtZXNzYWdlcyBhcyB4bWwgbm9kZXMgZnJvbSB0aGUgeHRiIGZpbGVcbmNsYXNzIFh0YlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9idW5kbGVEZXB0aDogbnVtYmVyO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIF9tc2dJZFRvSHRtbDoge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcblxuICBwYXJzZSh4dGI6IHN0cmluZykge1xuICAgIHRoaXMuX2J1bmRsZURlcHRoID0gMDtcbiAgICB0aGlzLl9tc2dJZFRvSHRtbCA9IHt9O1xuXG4gICAgLy8gV2UgY2FuIG5vdCBwYXJzZSB0aGUgSUNVIG1lc3NhZ2VzIGF0IHRoaXMgcG9pbnQgYXMgc29tZSBtZXNzYWdlcyBtaWdodCBub3Qgb3JpZ2luYXRlXG4gICAgLy8gZnJvbSBBbmd1bGFyIHRoYXQgY291bGQgbm90IGJlIGxleCdkLlxuICAgIGNvbnN0IHhtbCA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoeHRiLCBcIlwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9lcnJvcnMgPSB4bWwuZXJyb3JzO1xuICAgIG1sLnZpc2l0QWxsKHRoaXMsIHhtbC5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZ0lkVG9IdG1sOiB0aGlzLl9tc2dJZFRvSHRtbCxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIF9UUkFOU0xBVElPTlNfVEFHOlxuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aCsrO1xuICAgICAgICBpZiAodGhpcy5fYnVuZGxlRGVwdGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTlNfVEFHfT4gZWxlbWVudHMgY2FuIG5vdCBiZSBuZXN0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgdGhpcy5fYnVuZGxlRGVwdGgtLTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OX1RBRzpcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVFJBTlNMQVRJT05fVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0ISwgaW5uZXJUZXh0RW5kISk7XG4gICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSBpbm5lclRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBcIlVuZXhwZWN0ZWQgdGFnXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeHRiIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBjYXNlTWFwOiB7W3ZhbHVlOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG5cbiAgICBtbC52aXNpdEFsbCh0aGlzLCBpY3UuY2FzZXMpLmZvckVhY2goYyA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyIHwgbnVsbCB7XG4gICAgaWYgKGVsLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJuYW1lXCIpO1xuICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbiEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwibmFtZVwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXJFcnJvciB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgcHVibGljIGlucHV0OiBzdHJpbmcsIHB1YmxpYyBlcnJMb2NhdGlvbjogc3RyaW5nLCBwdWJsaWMgY3R4TG9jYXRpb24/OiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgUGFyc2VyIEVycm9yOiAke21lc3NhZ2V9ICR7ZXJyTG9jYXRpb259IFske2lucHV0fV0gaW4gJHtjdHhMb2NhdGlvbn1gO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNwYW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhcnQ6IG51bWJlciwgcHVibGljIGVuZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUIHtcbiAgY29uc3RydWN0b3IocHVibGljIHNwYW46IFBhcnNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJBU1RcIjtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBxdW90ZWQgZXhwcmVzc2lvbiBvZiB0aGUgZm9ybTpcbiAqXG4gKiBxdW90ZSA9IHByZWZpeCBgOmAgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25cbiAqIHByZWZpeCA9IGlkZW50aWZpZXJcbiAqIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uID0gYXJiaXRyYXJ5IHN0cmluZ1xuICpcbiAqIEEgcXVvdGVkIGV4cHJlc3Npb24gaXMgbWVhbnQgdG8gYmUgcHJlLXByb2Nlc3NlZCBieSBhbiBBU1QgdHJhbnNmb3JtZXIgdGhhdFxuICogY29udmVydHMgaXQgaW50byBhbm90aGVyIEFTVCB0aGF0IG5vIGxvbmdlciBjb250YWlucyBxdW90ZWQgZXhwcmVzc2lvbnMuXG4gKiBJdCBpcyBtZWFudCB0byBhbGxvdyB0aGlyZC1wYXJ0eSBkZXZlbG9wZXJzIHRvIGV4dGVuZCBBbmd1bGFyIHRlbXBsYXRlXG4gKiBleHByZXNzaW9uIGxhbmd1YWdlLiBUaGUgYHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uYCBwYXJ0IG9mIHRoZSBxdW90ZSBpc1xuICogdGhlcmVmb3JlIG5vdCBpbnRlcnByZXRlZCBieSB0aGUgQW5ndWxhcidzIG93biBleHByZXNzaW9uIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFF1b3RlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcHJlZml4OiBzdHJpbmcsIHB1YmxpYyB1bmludGVycHJldGVkRXhwcmVzc2lvbjogc3RyaW5nLCBwdWJsaWMgbG9jYXRpb246IGFueSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UXVvdGUodGhpcywgY29udGV4dCk7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJRdW90ZVwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eUV4cHIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBsaWNpdFJlY2VpdmVyIGV4dGVuZHMgQVNUIHtcbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbXBsaWNpdFJlY2VpdmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogTXVsdGlwbGUgZXhwcmVzc2lvbnMgc2VwYXJhdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2hhaW4gZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENoYWluKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGNvbmRpdGlvbjogQVNULCBwdWJsaWMgdHJ1ZUV4cDogQVNULCBwdWJsaWMgZmFsc2VFeHA6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29uZGl0aW9uYWwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UmVhZCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5UmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlXcml0ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVdyaXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlUHJvcGVydHlSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2FmZVByb3BlcnR5UmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5ZWRSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgb2JqOiBBU1QsIHB1YmxpYyBrZXk6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZWRSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXllZFdyaXRlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgb2JqOiBBU1QsIHB1YmxpYyBrZXk6IEFTVCwgcHVibGljIHZhbHVlOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEtleWVkV3JpdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQaXBlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGlwZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFByaW1pdGl2ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxQcmltaXRpdmUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxBcnJheSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEFycmF5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl0ZXJhbE1hcEtleSB7XG4gIGtleTogc3RyaW5nO1xuICBxdW90ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTWFwIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMga2V5czogTGl0ZXJhbE1hcEtleVtdLCBwdWJsaWMgdmFsdWVzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbE1hcCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHN0cmluZ3M6IGFueVtdLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbnRlcnBvbGF0aW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvcGVyYXRpb246IHN0cmluZywgcHVibGljIGxlZnQ6IEFTVCwgcHVibGljIHJpZ2h0OiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlZml4Tm90IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbjogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmVmaXhOb3QodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vbk51bGxBc3NlcnQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE5vbk51bGxBc3NlcnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZENhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE1ldGhvZENhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVNZXRob2RDYWxsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTYWZlTWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25DYWxsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgdGFyZ2V0OiBBU1QgfCBudWxsLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmN0aW9uQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQVNUV2l0aFNvdXJjZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhc3Q6IEFTVCwgcHVibGljIHNvdXJjZTogc3RyaW5nIHwgbnVsbCwgcHVibGljIGxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBlcnJvcnM6IFBhcnNlckVycm9yW10pIHtcbiAgICBzdXBlcihuZXcgUGFyc2VTcGFuKDAsIHNvdXJjZSA9PSBudWxsID8gMCA6IHNvdXJjZS5sZW5ndGgpKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5hc3QudmlzaXQodmlzaXRvciwgY29udGV4dCk7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5zb3VyY2V9IGluICR7dGhpcy5sb2NhdGlvbn1gO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUJpbmRpbmcge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3BhbjogUGFyc2VTcGFuLFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZyxcbiAgICBwdWJsaWMga2V5SXNWYXI6IGJvb2xlYW4sXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogQVNUV2l0aFNvdXJjZVxuICApIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXN0VmlzaXRvciB7XG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdD8oYXN0OiBBU1QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN1cnNpdmVBc3RWaXNpdG9yIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5sZWZ0LnZpc2l0KHRoaXMpO1xuICAgIGFzdC5yaWdodC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmNvbmRpdGlvbi52aXNpdCh0aGlzKTtcbiAgICBhc3QudHJ1ZUV4cC52aXNpdCh0aGlzKTtcbiAgICBhc3QuZmFsc2VFeHAudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cC52aXNpdCh0aGlzKTtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QudGFyZ2V0IS52aXNpdCh0aGlzKTtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgYXN0LnZhbHVlLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QudmFsdWVzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRBbGwoYXN0czogQVNUW10sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0cy5mb3JFYWNoKGFzdCA9PiBhc3QudmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXN0VHJhbnNmb3JtZXIgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEludGVycG9sYXRpb24oYXN0LnNwYW4sIGFzdC5zdHJpbmdzLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUoYXN0LnNwYW4sIGFzdC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UmVhZChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlXcml0ZShhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgYXN0LnZhbHVlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBTYWZlUHJvcGVydHlSZWFkKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBTYWZlTWV0aG9kQ2FsbChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbkNhbGwoYXN0LnNwYW4sIGFzdC50YXJnZXQhLnZpc2l0KHRoaXMpLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxBcnJheShhc3Quc3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTWFwKGFzdC5zcGFuLCBhc3Qua2V5cywgdGhpcy52aXNpdEFsbChhc3QudmFsdWVzKSk7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEJpbmFyeShhc3Quc3BhbiwgYXN0Lm9wZXJhdGlvbiwgYXN0LmxlZnQudmlzaXQodGhpcyksIGFzdC5yaWdodC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByZWZpeE5vdChhc3Quc3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IE5vbk51bGxBc3NlcnQoYXN0LnNwYW4sIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKGFzdC5zcGFuLCBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpLCBhc3QudHJ1ZUV4cC52aXNpdCh0aGlzKSwgYXN0LmZhbHNlRXhwLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQmluZGluZ1BpcGUoYXN0LnNwYW4sIGFzdC5leHAudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEtleWVkUmVhZChhc3Quc3BhbiwgYXN0Lm9iai52aXNpdCh0aGlzKSwgYXN0LmtleS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRXcml0ZShhc3Quc3BhbiwgYXN0Lm9iai52aXNpdCh0aGlzKSwgYXN0LmtleS52aXNpdCh0aGlzKSwgYXN0LnZhbHVlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0QWxsKGFzdHM6IGFueVtdKTogYW55W10ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBBcnJheShhc3RzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICByZXNbaV0gPSBhc3RzW2ldLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ2hhaW4oYXN0LnNwYW4sIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBRdW90ZShhc3Quc3BhbiwgYXN0LnByZWZpeCwgYXN0LnVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uLCBhc3QubG9jYXRpb24pO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gXCIuLi9hc3QvY2hhcnNcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgQ2hhcmFjdGVyLFxuICBJZGVudGlmaWVyLFxuICBLZXl3b3JkLFxuICBTdHJpbmcsXG4gIE9wZXJhdG9yLFxuICBOdW1iZXIsXG4gIEVycm9yXG59XG5cbmNvbnN0IEtFWVdPUkRTID0gW1widmFyXCIsIFwibGV0XCIsIFwiYXNcIiwgXCJudWxsXCIsIFwidW5kZWZpbmVkXCIsIFwidHJ1ZVwiLCBcImZhbHNlXCIsIFwiaWZcIiwgXCJlbHNlXCIsIFwidGhpc1wiXTtcblxuZXhwb3J0IGNsYXNzIExleGVyIHtcbiAgdG9rZW5pemUodGV4dDogc3RyaW5nKTogVG9rZW5bXSB7XG4gICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKHRleHQpO1xuICAgIGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuICAgIGxldCB0b2tlbiA9IHNjYW5uZXIuc2NhblRva2VuKCk7XG4gICAgd2hpbGUgKHRva2VuICE9IG51bGwpIHtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIHR5cGU6IFRva2VuVHlwZSwgcHVibGljIG51bVZhbHVlOiBudW1iZXIsIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nKSB7fVxuXG4gIGlzQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5DaGFyYWN0ZXIgJiYgdGhpcy5udW1WYWx1ZSA9PT0gY29kZTtcbiAgfVxuXG4gIGlzTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXI7XG4gIH1cblxuICBpc1N0cmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuU3RyaW5nO1xuICB9XG5cbiAgaXNPcGVyYXRvcihvcGVyYXRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yICYmIHRoaXMuc3RyVmFsdWUgPT09IG9wZXJhdGVyO1xuICB9XG5cbiAgaXNJZGVudGlmaWVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5JZGVudGlmaWVyO1xuICB9XG5cbiAgaXNLZXl3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkO1xuICB9XG5cbiAgaXNLZXl3b3JkTGV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwibGV0XCI7XG4gIH1cblxuICBpc0tleXdvcmRBcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImFzXCI7XG4gIH1cblxuICBpc0tleXdvcmROdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwibnVsbFwiO1xuICB9XG5cbiAgaXNLZXl3b3JkVW5kZWZpbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICBpc0tleXdvcmRUcnVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9XG5cbiAgaXNLZXl3b3JkRmFsc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJmYWxzZVwiO1xuICB9XG5cbiAgaXNLZXl3b3JkVGhpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcInRoaXNcIjtcbiAgfVxuXG4gIGlzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLkVycm9yO1xuICB9XG5cbiAgdG9OdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuTnVtYmVyID8gdGhpcy5udW1WYWx1ZSA6IC0xO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkNoYXJhY3RlcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLklkZW50aWZpZXI6XG4gICAgICBjYXNlIFRva2VuVHlwZS5LZXl3b3JkOlxuICAgICAgY2FzZSBUb2tlblR5cGUuT3BlcmF0b3I6XG4gICAgICBjYXNlIFRva2VuVHlwZS5TdHJpbmc6XG4gICAgICBjYXNlIFRva2VuVHlwZS5FcnJvcjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyVmFsdWU7XG4gICAgICBjYXNlIFRva2VuVHlwZS5OdW1iZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm51bVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3Q2hhcmFjdGVyVG9rZW4oaW5kZXg6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuQ2hhcmFjdGVyLCBjb2RlLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKTtcbn1cblxuZnVuY3Rpb24gbmV3SWRlbnRpZmllclRva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLklkZW50aWZpZXIsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdLZXl3b3JkVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuS2V5d29yZCwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld09wZXJhdG9yVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuT3BlcmF0b3IsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdTdHJpbmdUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5TdHJpbmcsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXJUb2tlbihpbmRleDogbnVtYmVyLCBuOiBudW1iZXIpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5OdW1iZXIsIG4sIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBuZXdFcnJvclRva2VuKGluZGV4OiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLkVycm9yLCAwLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVPRjogVG9rZW4gPSBuZXcgVG9rZW4oLTEsIFRva2VuVHlwZS5DaGFyYWN0ZXIsIDAsIFwiXCIpO1xuXG5jbGFzcyBTY2FubmVyIHtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHBlZWsgPSAwO1xuICBpbmRleCA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIHRoaXMucGVlayA9ICsrdGhpcy5pbmRleCA+PSB0aGlzLmxlbmd0aCA/IGNoYXJzLiRFT0YgOiB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5pbmRleCk7XG4gIH1cblxuICBzY2FuVG9rZW4oKTogVG9rZW4gfCBudWxsIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQ7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgbGV0IHBlZWsgPSB0aGlzLnBlZWs7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleDtcblxuICAgIC8vIFNraXAgd2hpdGVzcGFjZS5cbiAgICB3aGlsZSAocGVlayA8PSBjaGFycy4kU1BBQ0UpIHtcbiAgICAgIGlmICgrK2luZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBwZWVrID0gY2hhcnMuJEVPRjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWVrID0gaW5wdXQuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wZWVrID0gcGVlaztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgaWRlbnRpZmllcnMgYW5kIG51bWJlcnMuXG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KHBlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuSWRlbnRpZmllcigpO1xuICAgIH1cbiAgICBpZiAoY2hhcnMuaXNEaWdpdChwZWVrKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nhbk51bWJlcihpbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IGluZGV4O1xuICAgIHN3aXRjaCAocGVlaykge1xuICAgICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSA/IHRoaXMuc2Nhbk51bWJlcihzdGFydCkgOiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgY2hhcnMuJFBFUklPRCk7XG4gICAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRSQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0tFVDpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kQ09NTUE6XG4gICAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICAgIGNhc2UgY2hhcnMuJFNFTUlDT0xPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNoYXJhY3RlcihzdGFydCwgcGVlayk7XG4gICAgICBjYXNlIGNoYXJzLiRTUTpcbiAgICAgIGNhc2UgY2hhcnMuJERROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuU3RyaW5nKCk7XG4gICAgICBjYXNlIGNoYXJzLiRIQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICAgIGNhc2UgY2hhcnMuJE1JTlVTOlxuICAgICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICAgIGNhc2UgY2hhcnMuJFNMQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUEVSQ0VOVDpcbiAgICAgIGNhc2UgY2hhcnMuJENBUkVUOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuT3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlaykpO1xuICAgICAgY2FzZSBjaGFycy4kUVVFU1RJT046XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwiP1wiLCBjaGFycy4kUEVSSU9ELCBcIi5cIik7XG4gICAgICBjYXNlIGNoYXJzLiRMVDpcbiAgICAgIGNhc2UgY2hhcnMuJEdUOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsIFwiPVwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBTkc6XG4gICAgICBjYXNlIGNoYXJzLiRFUTpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSwgY2hhcnMuJEVRLCBcIj1cIiwgY2hhcnMuJEVRLCBcIj1cIik7XG4gICAgICBjYXNlIGNoYXJzLiRBTVBFUlNBTkQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwiJlwiLCBjaGFycy4kQU1QRVJTQU5ELCBcIiZcIik7XG4gICAgICBjYXNlIGNoYXJzLiRCQVI6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwifFwiLCBjaGFycy4kQkFSLCBcInxcIik7XG4gICAgICBjYXNlIGNoYXJzLiROQlNQOlxuICAgICAgICB3aGlsZSAoY2hhcnMuaXNXaGl0ZXNwYWNlKHRoaXMucGVlaykpIHtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuVG9rZW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gdGhpcy5lcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgWyR7U3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKX1dYCwgMCk7XG4gIH1cblxuICBzY2FuQ2hhcmFjdGVyKHN0YXJ0OiBudW1iZXIsIGNvZGU6IG51bWJlcik6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbmV3Q2hhcmFjdGVyVG9rZW4oc3RhcnQsIGNvZGUpO1xuICB9XG5cbiAgc2Nhbk9wZXJhdG9yKHN0YXJ0OiBudW1iZXIsIHN0cjogc3RyaW5nKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdPcGVyYXRvclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRva2VuaXplIGEgMi8zIGNoYXIgbG9uZyBvcGVyYXRvclxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnQgc3RhcnQgaW5kZXggaW4gdGhlIGV4cHJlc3Npb25cbiAgICogQHBhcmFtIG9uZSBmaXJzdCBzeW1ib2wgKGFsd2F5cyBwYXJ0IG9mIHRoZSBvcGVyYXRvcilcbiAgICogQHBhcmFtIHR3b0NvZGUgY29kZSBwb2ludCBmb3IgdGhlIHNlY29uZCBzeW1ib2xcbiAgICogQHBhcmFtIHR3byBzZWNvbmQgc3ltYm9sIChwYXJ0IG9mIHRoZSBvcGVyYXRvciB3aGVuIHRoZSBzZWNvbmQgY29kZSBwb2ludCBtYXRjaGVzKVxuICAgKiBAcGFyYW0gdGhyZWVDb2RlIGNvZGUgcG9pbnQgZm9yIHRoZSB0aGlyZCBzeW1ib2xcbiAgICogQHBhcmFtIHRocmVlIHRoaXJkIHN5bWJvbCAocGFydCBvZiB0aGUgb3BlcmF0b3Igd2hlbiBwcm92aWRlZCBhbmQgbWF0Y2hlcyBzb3VyY2UgZXhwcmVzc2lvbilcbiAgICovXG4gIHNjYW5Db21wbGV4T3BlcmF0b3IoXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBvbmU6IHN0cmluZyxcbiAgICB0d29Db2RlOiBudW1iZXIsXG4gICAgdHdvOiBzdHJpbmcsXG4gICAgdGhyZWVDb2RlPzogbnVtYmVyLFxuICAgIHRocmVlPzogc3RyaW5nXG4gICk6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICBsZXQgc3RyOiBzdHJpbmcgPSBvbmU7XG4gICAgaWYgKHRoaXMucGVlayA9PT0gdHdvQ29kZSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBzdHIgKz0gdHdvO1xuICAgIH1cbiAgICBpZiAodGhyZWVDb2RlICE9IG51bGwgJiYgdGhpcy5wZWVrID09PSB0aHJlZUNvZGUpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgc3RyICs9IHRocmVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T3BlcmF0b3JUb2tlbihzdGFydCwgc3RyKTtcbiAgfVxuXG4gIHNjYW5JZGVudGlmaWVyKCk6IFRva2VuIHtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB3aGlsZSAoaXNJZGVudGlmaWVyUGFydCh0aGlzLnBlZWspKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyOiBzdHJpbmcgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIEtFWVdPUkRTLmluZGV4T2Yoc3RyKSA+IC0xID8gbmV3S2V5d29yZFRva2VuKHN0YXJ0LCBzdHIpIDogbmV3SWRlbnRpZmllclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgc2Nhbk51bWJlcihzdGFydDogbnVtYmVyKTogVG9rZW4ge1xuICAgIGxldCBzaW1wbGU6IGJvb2xlYW4gPSB0aGlzLmluZGV4ID09PSBzdGFydDtcbiAgICB0aGlzLmFkdmFuY2UoKTsgLy8gU2tpcCBpbml0aWFsIGRpZ2l0LlxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspKSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJFBFUklPRCkge1xuICAgICAgICBzaW1wbGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFeHBvbmVudFN0YXJ0KHRoaXMucGVlaykpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIGlmIChpc0V4cG9uZW50U2lnbih0aGlzLnBlZWspKSB7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcIkludmFsaWQgZXhwb25lbnRcIiwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHNpbXBsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyOiBzdHJpbmcgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHNpbXBsZSA/IHBhcnNlSW50QXV0b1JhZGl4KHN0cikgOiBwYXJzZUZsb2F0KHN0cik7XG4gICAgcmV0dXJuIG5ld051bWJlclRva2VuKHN0YXJ0LCB2YWx1ZSk7XG4gIH1cblxuICBzY2FuU3RyaW5nKCk6IFRva2VuIHtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBxdW90ZTogbnVtYmVyID0gdGhpcy5wZWVrO1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIGluaXRpYWwgcXVvdGUuXG5cbiAgICBsZXQgYnVmZmVyID0gXCJcIjtcbiAgICBsZXQgbWFya2VyOiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IGlucHV0OiBzdHJpbmcgPSB0aGlzLmlucHV0O1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayAhPT0gcXVvdGUpIHtcbiAgICAgIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiRCQUNLU0xBU0gpIHtcbiAgICAgICAgYnVmZmVyICs9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgbGV0IHVuZXNjYXBlZENvZGU6IG51bWJlcjtcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgVFMyLjEtaW50cm9kdWNlZCB0eXBlIHN0cmljdG5lc3NcbiAgICAgICAgdGhpcy5wZWVrID0gdGhpcy5wZWVrO1xuICAgICAgICBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kdSkge1xuICAgICAgICAgIC8vIDQgY2hhcmFjdGVyIGhleCBjb2RlIGZvciB1bmljb2RlIGNoYXJhY3Rlci5cbiAgICAgICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGlucHV0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgIGlmICgvXlswLTlhLWZdKyQvaS50ZXN0KGhleCkpIHtcbiAgICAgICAgICAgIHVuZXNjYXBlZENvZGUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoYEludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JHtoZXh9XWAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuZXNjYXBlZENvZGUgPSB1bmVzY2FwZSh0aGlzLnBlZWspO1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVuZXNjYXBlZENvZGUpO1xuICAgICAgICBtYXJrZXIgPSB0aGlzLmluZGV4O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiRFT0YpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoXCJVbnRlcm1pbmF0ZWQgcXVvdGVcIiwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0OiBzdHJpbmcgPSBpbnB1dC5zdWJzdHJpbmcobWFya2VyLCB0aGlzLmluZGV4KTtcbiAgICB0aGlzLmFkdmFuY2UoKTsgLy8gU2tpcCB0ZXJtaW5hdGluZyBxdW90ZS5cblxuICAgIHJldHVybiBuZXdTdHJpbmdUb2tlbihzdGFydCwgYnVmZmVyICsgbGFzdCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogVG9rZW4ge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmluZGV4ICsgb2Zmc2V0O1xuICAgIHJldHVybiBuZXdFcnJvclRva2VuKHBvc2l0aW9uLCBgTGV4ZXIgRXJyb3I6ICR7bWVzc2FnZX0gYXQgY29sdW1uICR7cG9zaXRpb259IGluIGV4cHJlc3Npb24gWyR7dGhpcy5pbnB1dH1dYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKGNoYXJzLiRhIDw9IGNvZGUgJiYgY29kZSA8PSBjaGFycy4keikgfHxcbiAgICAoY2hhcnMuJEEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiRaKSB8fFxuICAgIGNvZGUgPT09IGNoYXJzLiRfIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJCRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllcihpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKGlucHV0KTtcbiAgaWYgKCFpc0lkZW50aWZpZXJTdGFydChzY2FubmVyLnBlZWspKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNjYW5uZXIuYWR2YW5jZSgpO1xuICB3aGlsZSAoc2Nhbm5lci5wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgaWYgKCFpc0lkZW50aWZpZXJQYXJ0KHNjYW5uZXIucGVlaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2Nhbm5lci5hZHZhbmNlKCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzSWRlbnRpZmllclBhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjaGFycy5pc0FzY2lpTGV0dGVyKGNvZGUpIHx8IGNoYXJzLmlzRGlnaXQoY29kZSkgfHwgY29kZSA9PT0gY2hhcnMuJF8gfHwgY29kZSA9PT0gY2hhcnMuJCQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRTdGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRlIHx8IGNvZGUgPT09IGNoYXJzLiRFO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9uZW50U2lnbihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRNSU5VUyB8fCBjb2RlID09PSBjaGFycy4kUExVUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUXVvdGUoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU1EgfHwgY29kZSA9PT0gY2hhcnMuJERRIHx8IGNvZGUgPT09IGNoYXJzLiRCVDtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGUoY29kZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kbjpcbiAgICAgIHJldHVybiBjaGFycy4kTEY7XG4gICAgY2FzZSBjaGFycy4kZjpcbiAgICAgIHJldHVybiBjaGFycy4kRkY7XG4gICAgY2FzZSBjaGFycy4kcjpcbiAgICAgIHJldHVybiBjaGFycy4kQ1I7XG4gICAgY2FzZSBjaGFycy4kdDpcbiAgICAgIHJldHVybiBjaGFycy4kVEFCO1xuICAgIGNhc2UgY2hhcnMuJHY6XG4gICAgICByZXR1cm4gY2hhcnMuJFZUQUI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50QXV0b1JhZGl4KHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gcGFyc2VJbnQodGV4dCwgMTApO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyBcIiArIHRleHQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gXCIuLi9hc3QvY2hhcnNcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4uL2FzdC9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtlc2NhcGVSZWdFeHB9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQge1xuICBBU1QsXG4gIEFTVFdpdGhTb3VyY2UsXG4gIEFzdFZpc2l0b3IsXG4gIEJpbmFyeSxcbiAgQmluZGluZ1BpcGUsXG4gIENoYWluLFxuICBDb25kaXRpb25hbCxcbiAgRW1wdHlFeHByLFxuICBGdW5jdGlvbkNhbGwsXG4gIEltcGxpY2l0UmVjZWl2ZXIsXG4gIEludGVycG9sYXRpb24sXG4gIEtleWVkUmVhZCxcbiAgS2V5ZWRXcml0ZSxcbiAgTGl0ZXJhbEFycmF5LFxuICBMaXRlcmFsTWFwLFxuICBMaXRlcmFsTWFwS2V5LFxuICBMaXRlcmFsUHJpbWl0aXZlLFxuICBNZXRob2RDYWxsLFxuICBOb25OdWxsQXNzZXJ0LFxuICBQYXJzZVNwYW4sXG4gIFBhcnNlckVycm9yLFxuICBQcmVmaXhOb3QsXG4gIFByb3BlcnR5UmVhZCxcbiAgUHJvcGVydHlXcml0ZSxcbiAgUXVvdGUsXG4gIFNhZmVNZXRob2RDYWxsLFxuICBTYWZlUHJvcGVydHlSZWFkLFxuICBUZW1wbGF0ZUJpbmRpbmdcbn0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge0VPRiwgTGV4ZXIsIFRva2VuLCBUb2tlblR5cGUsIGlzSWRlbnRpZmllciwgaXNRdW90ZX0gZnJvbSBcIi4vbGV4ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNwbGl0SW50ZXJwb2xhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdHJpbmdzOiBzdHJpbmdbXSwgcHVibGljIGV4cHJlc3Npb25zOiBzdHJpbmdbXSwgcHVibGljIG9mZnNldHM6IG51bWJlcltdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVCaW5kaW5nczogVGVtcGxhdGVCaW5kaW5nW10sIHB1YmxpYyB3YXJuaW5nczogc3RyaW5nW10sIHB1YmxpYyBlcnJvcnM6IFBhcnNlckVycm9yW10pIHt9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChjb25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBSZWdFeHAge1xuICBjb25zdCBwYXR0ZXJuID0gZXNjYXBlUmVnRXhwKGNvbmZpZy5zdGFydCkgKyBcIihbXFxcXHNcXFxcU10qPylcIiArIGVzY2FwZVJlZ0V4cChjb25maWcuZW5kKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgXCJnXCIpO1xufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcbiAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sZXhlcjogTGV4ZXIpIHt9XG5cbiAgcGFyc2VBY3Rpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZSh0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KSk7XG4gICAgY29uc3QgYXN0ID0gbmV3IFBhcnNlQVNUKFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRva2VucyxcbiAgICAgIHNvdXJjZVRvTGV4Lmxlbmd0aCxcbiAgICAgIHRydWUsXG4gICAgICB0aGlzLmVycm9ycyxcbiAgICAgIGlucHV0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aFxuICAgICkucGFyc2VDaGFpbigpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcGFyc2VCaW5kaW5nKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IGFueSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHBhcnNlU2ltcGxlQmluZGluZyhcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgY29uc3QgYXN0ID0gdGhpcy5fcGFyc2VCaW5kaW5nQXN0KGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgZXJyb3JzID0gU2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIuY2hlY2soYXN0KTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBIb3N0IGJpbmRpbmcgZXhwcmVzc2lvbiBjYW5ub3QgY29udGFpbiAke2Vycm9ycy5qb2luKFwiIFwiKX1gLCBpbnB1dCwgbG9jYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKG1lc3NhZ2U6IHN0cmluZywgaW5wdXQ6IHN0cmluZywgZXJyTG9jYXRpb246IHN0cmluZywgY3R4TG9jYXRpb24/OiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcihtZXNzYWdlLCBpbnB1dCwgZXJyTG9jYXRpb24sIGN0eExvY2F0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUJpbmRpbmdBc3QoaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IHN0cmluZywgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IEFTVCB7XG4gICAgLy8gUXVvdGVzIGV4cHJlc3Npb25zIHVzZSAzcmQtcGFydHkgZXhwcmVzc2lvbiBsYW5ndWFnZS4gV2UgZG9uJ3Qgd2FudCB0byB1c2VcbiAgICAvLyBvdXIgbGV4ZXIgb3IgcGFyc2VyIGZvciB0aGF0LCBzbyB3ZSBjaGVjayBmb3IgdGhhdCBhaGVhZCBvZiB0aW1lLlxuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5fcGFyc2VRdW90ZShpbnB1dCwgbG9jYXRpb24pO1xuXG4gICAgaWYgKHF1b3RlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBxdW90ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja05vSW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHNvdXJjZVRvTGV4ID0gdGhpcy5fc3RyaXBDb21tZW50cyhpbnB1dCk7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoc291cmNlVG9MZXgpO1xuICAgIHJldHVybiBuZXcgUGFyc2VBU1QoXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdG9rZW5zLFxuICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgZmFsc2UsXG4gICAgICB0aGlzLmVycm9ycyxcbiAgICAgIGlucHV0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aFxuICAgICkucGFyc2VDaGFpbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VRdW90ZShpbnB1dDogc3RyaW5nIHwgbnVsbCwgbG9jYXRpb246IGFueSk6IEFTVCB8IG51bGwge1xuICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeFNlcGFyYXRvckluZGV4ID0gaW5wdXQuaW5kZXhPZihcIjpcIik7XG4gICAgaWYgKHByZWZpeFNlcGFyYXRvckluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeCA9IGlucHV0LnN1YnN0cmluZygwLCBwcmVmaXhTZXBhcmF0b3JJbmRleCkudHJpbSgpO1xuICAgIGlmICghaXNJZGVudGlmaWVyKHByZWZpeCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1bmludGVycHJldGVkRXhwcmVzc2lvbiA9IGlucHV0LnN1YnN0cmluZyhwcmVmaXhTZXBhcmF0b3JJbmRleCArIDEpO1xuICAgIHJldHVybiBuZXcgUXVvdGUobmV3IFBhcnNlU3BhbigwLCBpbnB1dC5sZW5ndGgpLCBwcmVmaXgsIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uLCBsb2NhdGlvbik7XG4gIH1cblxuICBwYXJzZVRlbXBsYXRlQmluZGluZ3MocHJlZml4VG9rZW46IHN0cmluZyB8IG51bGwsIGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpOiBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoaW5wdXQpO1xuICAgIGlmIChwcmVmaXhUb2tlbikge1xuICAgICAgLy8gUHJlZml4IHRoZSB0b2tlbnMgd2l0aCB0aGUgdG9rZW5zIGZyb20gcHJlZml4VG9rZW4gYnV0IGhhdmUgdGhlbSB0YWtlIG5vIHNwYWNlICgwIGluZGV4KS5cbiAgICAgIGNvbnN0IHByZWZpeFRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHByZWZpeFRva2VuKS5tYXAodCA9PiB7XG4gICAgICAgIHQuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zLnVuc2hpZnQoLi4ucHJlZml4VG9rZW5zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQYXJzZUFTVChpbnB1dCwgbG9jYXRpb24sIHRva2VucywgaW5wdXQubGVuZ3RoLCBmYWxzZSwgdGhpcy5lcnJvcnMsIDApLnBhcnNlVGVtcGxhdGVCaW5kaW5ncygpO1xuICB9XG5cbiAgcGFyc2VJbnRlcnBvbGF0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IGFueSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHwgbnVsbCB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNwbGl0SW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGlmIChzcGxpdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IEFTVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0LmV4cHJlc3Npb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uVGV4dCA9IHNwbGl0LmV4cHJlc3Npb25zW2ldO1xuICAgICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGV4cHJlc3Npb25UZXh0KTtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHNvdXJjZVRvTGV4KTtcbiAgICAgIGNvbnN0IGFzdCA9IG5ldyBQYXJzZUFTVChcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIHNvdXJjZVRvTGV4Lmxlbmd0aCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgICBzcGxpdC5vZmZzZXRzW2ldICsgKGV4cHJlc3Npb25UZXh0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aClcbiAgICAgICkucGFyc2VDaGFpbigpO1xuICAgICAgZXhwcmVzc2lvbnMucHVzaChhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgIG5ldyBJbnRlcnBvbGF0aW9uKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT09IG51bGwgPyAwIDogaW5wdXQubGVuZ3RoKSwgc3BsaXQuc3RyaW5ncywgZXhwcmVzc2lvbnMpLFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuZXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHNwbGl0SW50ZXJwb2xhdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogU3BsaXRJbnRlcnBvbGF0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgcmVnZXhwID0gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQocmVnZXhwKTtcbiAgICBpZiAocGFydHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGV4cHJlc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG9mZnNldHM6IG51bWJlcltdID0gW107XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFydDogc3RyaW5nID0gcGFydHNbaV07XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgLy8gZml4ZWQgc3RyaW5nXG4gICAgICAgIHN0cmluZ3MucHVzaChwYXJ0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9mZnNldCArPSBpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0Lmxlbmd0aDtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChwYXJ0KTtcbiAgICAgICAgb2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBwYXJ0Lmxlbmd0aCArIGludGVycG9sYXRpb25Db25maWcuZW5kLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIFwiQmxhbmsgZXhwcmVzc2lvbnMgYXJlIG5vdCBhbGxvd2VkIGluIGludGVycG9sYXRlZCBzdHJpbmdzXCIsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgYGF0IGNvbHVtbiAke3RoaXMuX2ZpbmRJbnRlcnBvbGF0aW9uRXJyb3JDb2x1bW4ocGFydHMsIGksIGludGVycG9sYXRpb25Db25maWcpfSBpbmAsXG4gICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChcIiRpbXBsaWN0XCIpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTcGxpdEludGVycG9sYXRpb24oc3RyaW5ncywgZXhwcmVzc2lvbnMsIG9mZnNldHMpO1xuICB9XG5cbiAgd3JhcExpdGVyYWxQcmltaXRpdmUoaW5wdXQ6IHN0cmluZyB8IG51bGwsIGxvY2F0aW9uOiBhbnkpOiBBU1RXaXRoU291cmNlIHtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoXG4gICAgICBuZXcgTGl0ZXJhbFByaW1pdGl2ZShuZXcgUGFyc2VTcGFuKDAsIGlucHV0ID09PSBudWxsID8gMCA6IGlucHV0Lmxlbmd0aCksIGlucHV0KSxcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aGlzLmVycm9yc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9zdHJpcENvbW1lbnRzKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGkgPSB0aGlzLl9jb21tZW50U3RhcnQoaW5wdXQpO1xuICAgIHJldHVybiBpICE9IG51bGwgPyBpbnB1dC5zdWJzdHJpbmcoMCwgaSkudHJpbSgpIDogaW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21tZW50U3RhcnQoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICAgIGxldCBvdXRlclF1b3RlOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgICBjb25zdCBuZXh0Q2hhciA9IGlucHV0LmNoYXJDb2RlQXQoaSArIDEpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gY2hhcnMuJFNMQVNIICYmIG5leHRDaGFyID09PSBjaGFycy4kU0xBU0ggJiYgb3V0ZXJRdW90ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKG91dGVyUXVvdGUgPT09IGNoYXIpIHtcbiAgICAgICAgb3V0ZXJRdW90ZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKG91dGVyUXVvdGUgPT09IG51bGwgJiYgaXNRdW90ZShjaGFyKSkge1xuICAgICAgICBvdXRlclF1b3RlID0gY2hhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja05vSW50ZXJwb2xhdGlvbihpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogYW55LCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgcmVnZXhwID0gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQocmVnZXhwKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgIGBHb3QgaW50ZXJwb2xhdGlvbiAoJHtpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0fSR7aW50ZXJwb2xhdGlvbkNvbmZpZy5lbmR9KSB3aGVyZSBleHByZXNzaW9uIHdhcyBleHBlY3RlZGAsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgMSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgbG9jYXRpb25cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihcbiAgICBwYXJ0czogc3RyaW5nW10sXG4gICAgcGFydEluRXJySWR4OiBudW1iZXIsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZ1xuICApOiBudW1iZXIge1xuICAgIGxldCBlcnJMb2NhdGlvbiA9IFwiXCI7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXJ0SW5FcnJJZHg7IGorKykge1xuICAgICAgZXJyTG9jYXRpb24gKz0gaiAlIDIgPT09IDAgPyBwYXJ0c1tqXSA6IGAke2ludGVycG9sYXRpb25Db25maWcuc3RhcnR9JHtwYXJ0c1tqXX0ke2ludGVycG9sYXRpb25Db25maWcuZW5kfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyckxvY2F0aW9uLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VBU1Qge1xuICBwcml2YXRlIHJwYXJlbnNFeHBlY3RlZCA9IDA7XG4gIHByaXZhdGUgcmJyYWNrZXRzRXhwZWN0ZWQgPSAwO1xuICBwcml2YXRlIHJicmFjZXNFeHBlY3RlZCA9IDA7XG5cbiAgaW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnB1dDogc3RyaW5nLFxuICAgIHB1YmxpYyBsb2NhdGlvbjogYW55LFxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10sXG4gICAgcHVibGljIGlucHV0TGVuZ3RoOiBudW1iZXIsXG4gICAgcHVibGljIHBhcnNlQWN0aW9uOiBib29sZWFuLFxuICAgIHByaXZhdGUgZXJyb3JzOiBQYXJzZXJFcnJvcltdLFxuICAgIHByaXZhdGUgb2Zmc2V0OiBudW1iZXJcbiAgKSB7fVxuXG4gIHBlZWsob2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIGkgPCB0aGlzLnRva2Vucy5sZW5ndGggPyB0aGlzLnRva2Vuc1tpXSA6IEVPRjtcbiAgfVxuXG4gIGdldCBuZXh0KCk6IFRva2VuIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKDApO1xuICB9XG5cbiAgZ2V0IGlucHV0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMubmV4dC5pbmRleCArIHRoaXMub2Zmc2V0IDogdGhpcy5pbnB1dExlbmd0aCArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgc3BhbihzdGFydDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZVNwYW4oc3RhcnQsIHRoaXMuaW5wdXRJbmRleCk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgfVxuXG4gIG9wdGlvbmFsQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwZWVrS2V5d29yZExldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0LmlzS2V5d29yZExldCgpO1xuICB9XG4gIHBlZWtLZXl3b3JkQXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRBcygpO1xuICB9XG5cbiAgZXhwZWN0Q2hhcmFjdGVyKGNvZGU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpfWApO1xuICB9XG5cbiAgb3B0aW9uYWxPcGVyYXRvcihvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV4dC5pc09wZXJhdG9yKG9wKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGV4cGVjdE9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVycm9yKGBNaXNzaW5nIGV4cGVjdGVkIG9wZXJhdG9yICR7b3BlcmF0b3J9YCk7XG4gIH1cblxuICBleHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbiA9IHRoaXMubmV4dDtcbiAgICBpZiAoIW4uaXNJZGVudGlmaWVyKCkgJiYgIW4uaXNLZXl3b3JkKCkpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHtufSwgZXhwZWN0ZWQgaWRlbnRpZmllciBvciBrZXl3b3JkYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBleHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSAmJiAhbi5pc1N0cmluZygpKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7bn0sIGV4cGVjdGVkIGlkZW50aWZpZXIsIGtleXdvcmQsIG9yIHN0cmluZ2ApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuLnRvU3RyaW5nKCkgYXMgc3RyaW5nO1xuICB9XG5cbiAgcGFyc2VDaGFpbigpOiBBU1Qge1xuICAgIGNvbnN0IGV4cHJzOiBBU1RbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIGV4cHJzLnB1c2goZXhwcik7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJzZUFjdGlvbikge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXCJCaW5kaW5nIGV4cHJlc3Npb24gY2Fubm90IGNvbnRhaW4gY2hhaW5lZCBleHByZXNzaW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pKSB7fSAvLyByZWFkIGFsbCBzZW1pY29sb25zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAnJHt0aGlzLm5leHR9J2ApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9XG4gICAgaWYgKGV4cHJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGV4cHJzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENoYWluKHRoaXMuc3BhbihzdGFydCksIGV4cHJzKTtcbiAgfVxuXG4gIHBhcnNlUGlwZSgpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCJ8XCIpKSB7XG4gICAgICBpZiAodGhpcy5wYXJzZUFjdGlvbikge1xuICAgICAgICB0aGlzLmVycm9yKFwiQ2Fubm90IGhhdmUgYSBwaXBlIGluIGFuIGFjdGlvbiBleHByZXNzaW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTtcbiAgICAgICAgY29uc3QgYXJnczogQVNUW10gPSBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKSkge1xuICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLnBhcnNlRXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBuZXcgQmluZGluZ1BpcGUodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBuYW1lLCBhcmdzKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInxcIikpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUV4cHJlc3Npb24oKTogQVNUIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gIH1cblxuICBwYXJzZUNvbmRpdGlvbmFsKCk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZUxvZ2ljYWxPcigpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj9cIikpIHtcbiAgICAgIGNvbnN0IHllcyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICBsZXQgbm86IEFTVDtcbiAgICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgICB0aGlzLmVycm9yKGBDb25kaXRpb25hbCBleHByZXNzaW9uICR7ZXhwcmVzc2lvbn0gcmVxdWlyZXMgYWxsIDMgZXhwcmVzc2lvbnNgKTtcbiAgICAgICAgbm8gPSBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm8gPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbCh0aGlzLnNwYW4oc3RhcnQpLCByZXN1bHQsIHllcywgbm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlTG9naWNhbE9yKCk6IEFTVCB7XG4gICAgLy8gJ3x8J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbEFuZCgpO1xuICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCJ8fFwiKSkge1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlTG9naWNhbEFuZCgpO1xuICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBcInx8XCIsIHJlc3VsdCwgcmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VMb2dpY2FsQW5kKCk6IEFTVCB7XG4gICAgLy8gJyYmJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlRXF1YWxpdHkoKTtcbiAgICB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiJiZcIikpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZUVxdWFsaXR5KCk7XG4gICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIFwiJiZcIiwgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUVxdWFsaXR5KCk6IEFTVCB7XG4gICAgLy8gJz09JywnIT0nLCc9PT0nLCchPT0nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VSZWxhdGlvbmFsKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiPT1cIjpcbiAgICAgICAgY2FzZSBcIj09PVwiOlxuICAgICAgICBjYXNlIFwiIT1cIjpcbiAgICAgICAgY2FzZSBcIiE9PVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VSZWxhdGlvbmFsKCk6IEFTVCB7XG4gICAgLy8gJzwnLCAnPicsICc8PScsICc+PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUFkZGl0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiPFwiOlxuICAgICAgICBjYXNlIFwiPlwiOlxuICAgICAgICBjYXNlIFwiPD1cIjpcbiAgICAgICAgY2FzZSBcIj49XCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VBZGRpdGl2ZSgpOiBBU1Qge1xuICAgIC8vICcrJywgJy0nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VNdWx0aXBsaWNhdGl2ZSgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VNdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZU11bHRpcGxpY2F0aXZlKCk6IEFTVCB7XG4gICAgLy8gJyonLCAnJScsICcvJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICBjYXNlIFwiJVwiOlxuICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZVByZWZpeCgpOiBBU1Qge1xuICAgIGlmICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgbGV0IHJlc3VsdDogQVNUO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5KHRoaXMuc3BhbihzdGFydCksIG9wZXJhdG9yLCBuZXcgTGl0ZXJhbFByaW1pdGl2ZShuZXcgUGFyc2VTcGFuKHN0YXJ0LCBzdGFydCksIDApLCByZXN1bHQpO1xuICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByZWZpeE5vdCh0aGlzLnNwYW4oc3RhcnQpLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZUNhbGxDaGFpbigpO1xuICB9XG5cbiAgcGFyc2VDYWxsQ2hhaW4oKTogQVNUIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVByaW1hcnkoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFBFUklPRCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZXN1bHQsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPy5cIikpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZXN1bHQsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgS2V5ZWRXcml0ZSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFJlYWQodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VDYWxsQXJndW1lbnRzKCk7XG4gICAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgICByZXN1bHQgPSBuZXcgRnVuY3Rpb25DYWxsKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIiFcIikpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IE5vbk51bGxBc3NlcnQodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyc2VQcmltYXJ5KCk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmROdWxsKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIG51bGwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFVuZGVmaW5lZCgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB2b2lkIDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFRydWUoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkRmFsc2UoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFRoaXMoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IEltcGxpY2l0UmVjZWl2ZXIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5wYXJzZUV4cHJlc3Npb25MaXN0KGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsQXJyYXkodGhpcy5zcGFuKHN0YXJ0KSwgZWxlbWVudHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUxpdGVyYWxNYXAoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0lkZW50aWZpZXIoKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwobmV3IEltcGxpY2l0UmVjZWl2ZXIodGhpcy5zcGFuKHN0YXJ0KSksIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc051bWJlcigpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmV4dC50b051bWJlcigpO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzU3RyaW5nKCkpIHtcbiAgICAgIGNvbnN0IGxpdGVyYWxWYWx1ZSA9IHRoaXMubmV4dC50b1N0cmluZygpO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgbGl0ZXJhbFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAke3RoaXMuaW5wdXR9YCk7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke3RoaXMubmV4dH1gKTtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbkxpc3QodGVybWluYXRvcjogbnVtYmVyKTogQVNUW10ge1xuICAgIGNvbnN0IHJlc3VsdDogQVNUW10gPSBbXTtcbiAgICBpZiAoIXRoaXMubmV4dC5pc0NoYXJhY3Rlcih0ZXJtaW5hdG9yKSkge1xuICAgICAgZG8ge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxpdGVyYWxNYXAoKTogTGl0ZXJhbE1hcCB7XG4gICAgY29uc3Qga2V5czogTGl0ZXJhbE1hcEtleVtdID0gW107XG4gICAgY29uc3QgdmFsdWVzOiBBU1RbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0UpO1xuICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkge1xuICAgICAgdGhpcy5yYnJhY2VzRXhwZWN0ZWQrKztcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgcXVvdGVkID0gdGhpcy5uZXh0LmlzU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk7XG4gICAgICAgIGtleXMucHVzaCh7a2V5LCBxdW90ZWR9KTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTtcbiAgICAgICAgdmFsdWVzLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSkpO1xuICAgICAgdGhpcy5yYnJhY2VzRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExpdGVyYWxNYXAodGhpcy5zcGFuKHN0YXJ0KSwga2V5cywgdmFsdWVzKTtcbiAgfVxuXG4gIHBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlY2VpdmVyOiBBU1QsIGlzU2FmZSA9IGZhbHNlKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHJlY2VpdmVyLnNwYW4uc3RhcnQ7XG4gICAgY29uc3QgaWQgPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMUEFSRU4pKSB7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VDYWxsQXJndW1lbnRzKCk7XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUlBBUkVOKTtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICBjb25zdCBzcGFuID0gdGhpcy5zcGFuKHN0YXJ0KTtcbiAgICAgIHJldHVybiBpc1NhZmUgPyBuZXcgU2FmZU1ldGhvZENhbGwoc3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKSA6IG5ldyBNZXRob2RDYWxsKHNwYW4sIHJlY2VpdmVyLCBpZCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1NhZmUpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFwiVGhlICc/Licgb3BlcmF0b3IgY2Fubm90IGJlIHVzZWQgaW4gdGhlIGFzc2lnbm1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTYWZlUHJvcGVydHlSZWFkKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmluZGluZ3MgY2Fubm90IGNvbnRhaW4gYXNzaWdubWVudHNcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlXcml0ZSh0aGlzLnNwYW4oc3RhcnQpLCByZWNlaXZlciwgaWQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UmVhZCh0aGlzLnNwYW4oc3RhcnQpLCByZWNlaXZlciwgaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyc2VDYWxsQXJndW1lbnRzKCk6IEJpbmRpbmdQaXBlW10ge1xuICAgIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTikpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb25hbHM6IEFTVFtdID0gW107XG4gICAgZG8ge1xuICAgICAgcG9zaXRpb25hbHMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSkpO1xuICAgIHJldHVybiBwb3NpdGlvbmFscyBhcyBCaW5kaW5nUGlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGlkZW50aWZpZXIsIGEga2V5d29yZCwgYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBgLWAgaW5iZXR3ZWVuLlxuICAgKi9cbiAgZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IG9wZXJhdG9yRm91bmQgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTtcbiAgICAgIG9wZXJhdG9yRm91bmQgPSB0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCItXCIpO1xuICAgICAgaWYgKG9wZXJhdG9yRm91bmQpIHtcbiAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKG9wZXJhdG9yRm91bmQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xuICB9XG5cbiAgcGFyc2VUZW1wbGF0ZUJpbmRpbmdzKCk6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCBiaW5kaW5nczogVGVtcGxhdGVCaW5kaW5nW10gPSBbXTtcbiAgICBsZXQgcHJlZml4OiBzdHJpbmcgPSBudWxsITtcbiAgICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICBsZXQga2V5SXNWYXI6IGJvb2xlYW4gPSB0aGlzLnBlZWtLZXl3b3JkTGV0KCk7XG4gICAgICBpZiAoa2V5SXNWYXIpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCByYXdLZXkgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpO1xuICAgICAgbGV0IGtleSA9IHJhd0tleTtcbiAgICAgIGlmICgha2V5SXNWYXIpIHtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgICAgIHByZWZpeCA9IGtleTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXkgPSBwcmVmaXggKyBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTtcbiAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBudWxsITtcbiAgICAgIGxldCBleHByZXNzaW9uOiBBU1RXaXRoU291cmNlID0gbnVsbCE7XG4gICAgICBpZiAoa2V5SXNWYXIpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBuYW1lID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gXCIkaW1wbGljaXRcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWtLZXl3b3JkQXMoKSkge1xuICAgICAgICBjb25zdCBsZXRTdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7IC8vIGNvbnN1bWUgYGFzYFxuICAgICAgICBuYW1lID0gcmF3S2V5O1xuICAgICAgICBrZXkgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpOyAvLyByZWFkIGxvY2FsIHZhciBuYW1lXG4gICAgICAgIGtleUlzVmFyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0ICE9PSBFT0YgJiYgIXRoaXMucGVla0tleXdvcmRMZXQoKSkge1xuICAgICAgICBjb25zdCBzdCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgY29uc3QgYXN0ID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3QgLSB0aGlzLm9mZnNldCwgdGhpcy5pbnB1dEluZGV4IC0gdGhpcy5vZmZzZXQpO1xuICAgICAgICBleHByZXNzaW9uID0gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBzb3VyY2UsIHRoaXMubG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgICAgIH1cbiAgICAgIGJpbmRpbmdzLnB1c2gobmV3IFRlbXBsYXRlQmluZGluZyh0aGlzLnNwYW4oc3RhcnQpLCBrZXksIGtleUlzVmFyLCBuYW1lLCBleHByZXNzaW9uKSk7XG4gICAgICBpZiAodGhpcy5wZWVrS2V5d29yZEFzKCkgJiYgIWtleUlzVmFyKSB7XG4gICAgICAgIGNvbnN0IGxldFN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBgYXNgXG4gICAgICAgIGNvbnN0IGxldE5hbWUgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpOyAvLyByZWFkIGxvY2FsIHZhciBuYW1lXG4gICAgICAgIGJpbmRpbmdzLnB1c2gobmV3IFRlbXBsYXRlQmluZGluZyh0aGlzLnNwYW4obGV0U3RhcnQpLCBsZXROYW1lLCB0cnVlLCBrZXksIG51bGwhKSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0KGJpbmRpbmdzLCB3YXJuaW5ncywgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcihtZXNzYWdlLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dChpbmRleCksIHRoaXMubG9jYXRpb24pKTtcbiAgICB0aGlzLnNraXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9jYXRpb25UZXh0KGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggPyBgYXQgY29sdW1uICR7dGhpcy50b2tlbnNbaW5kZXhdLmluZGV4ICsgMX0gaW5gIDogYGF0IHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb25gO1xuICB9XG5cbiAgLy8gRXJyb3IgcmVjb3Zlcnkgc2hvdWxkIHNraXAgdG9rZW5zIHVudGlsIGl0IGVuY291bnRlcnMgYSByZWNvdmVyeSBwb2ludC4gc2tpcCgpIHRyZWF0c1xuICAvLyB0aGUgZW5kIG9mIGlucHV0IGFuZCBhICc7JyBhcyB1bmNvbmRpdGlvbmFsbHkgYSByZWNvdmVyeSBwb2ludC4gSXQgYWxzbyB0cmVhdHMgJyknLFxuICAvLyAnfScgYW5kICddJyBhcyBjb25kaXRpb25hbCByZWNvdmVyeSBwb2ludHMgaWYgb25lIG9mIGNhbGxpbmcgcHJvZHVjdGlvbnMgaXMgZXhwZWN0aW5nXG4gIC8vIG9uZSBvZiB0aGVzZSBzeW1ib2xzLiBUaGlzIGFsbG93cyBza2lwKCkgdG8gcmVjb3ZlciBmcm9tIGVycm9ycyBzdWNoIGFzICcoYS4pICsgMScgYWxsb3dpbmdcbiAgLy8gbW9yZSBvZiB0aGUgQVNUIHRvIGJlIHJldGFpbmVkIChpdCBkb2Vzbid0IHNraXAgYW55IHRva2VucyBhcyB0aGUgJyknIGlzIHJldGFpbmVkIGJlY2F1c2VcbiAgLy8gb2YgdGhlICcoJyBiZWdpbnMgYW4gJygnIDxleHByPiAnKScgcHJvZHVjdGlvbikuIFRoZSByZWNvdmVyeSBwb2ludHMgb2YgZ3JvdXBpbmcgc3ltYm9sc1xuICAvLyBtdXN0IGJlIGNvbmRpdGlvbmFsIGFzIHRoZXkgbXVzdCBiZSBza2lwcGVkIGlmIG5vbmUgb2YgdGhlIGNhbGxpbmcgcHJvZHVjdGlvbnMgYXJlIG5vdFxuICAvLyBleHBlY3RpbmcgdGhlIGNsb3NpbmcgdG9rZW4gZWxzZSB3ZSB3aWxsIG5ldmVyIG1ha2UgcHJvZ3Jlc3MgaW4gdGhlIGNhc2Ugb2YgYW5cbiAgLy8gZXh0cmFuZW91cyBncm91cCBjbG9zaW5nIHN5bWJvbCAoc3VjaCBhcyBhIHN0cmF5ICcpJykuIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciAnOycgYmVjYXVzZVxuICAvLyBwYXJzZUNoYWluKCkgaXMgYWx3YXlzIHRoZSByb290IHByb2R1Y3Rpb24gYW5kIGl0IGV4cGVjdHMgYSAnOycuXG5cbiAgLy8gSWYgYSBwcm9kdWN0aW9uIGV4cGVjdHMgb25lIG9mIHRoZXNlIHRva2VuIGl0IGluY3JlbWVudHMgdGhlIGNvcnJlc3BvbmRpbmcgbmVzdGluZyBjb3VudCxcbiAgLy8gYW5kIHRoZW4gZGVjcmVtZW50cyBpdCBqdXN0IHByaW9yIHRvIGNoZWNraW5nIGlmIHRoZSB0b2tlbiBpcyBpbiB0aGUgaW5wdXQuXG4gIHByaXZhdGUgc2tpcCgpIHtcbiAgICBsZXQgbiA9IHRoaXMubmV4dDtcbiAgICB3aGlsZSAoXG4gICAgICB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoICYmXG4gICAgICAhbi5pc0NoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSAmJlxuICAgICAgKHRoaXMucnBhcmVuc0V4cGVjdGVkIDw9IDAgfHwgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTikpICYmXG4gICAgICAodGhpcy5yYnJhY2VzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkgJiZcbiAgICAgICh0aGlzLnJicmFja2V0c0V4cGVjdGVkIDw9IDAgfHwgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLm5leHQuaXNFcnJvcigpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKHRoaXMubmV4dC50b1N0cmluZygpISwgdGhpcy5pbnB1dCwgdGhpcy5sb2NhdGlvblRleHQoKSwgdGhpcy5sb2NhdGlvbikpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBuID0gdGhpcy5uZXh0O1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICBzdGF0aWMgY2hlY2soYXN0OiBBU1QpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcyA9IG5ldyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlcigpO1xuICAgIGFzdC52aXNpdChzKTtcbiAgICByZXR1cm4gcy5lcnJvcnM7XG4gIH1cblxuICBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucyk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpO1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChcInBpcGVzXCIpO1xuICB9XG5cbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGFzdHMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSkge31cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY29uc3QgVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICdBJzogJ0xJTksnLFxuICAnQic6ICdCT0xEX1RFWFQnLFxuICAnQlInOiAnTElORV9CUkVBSycsXG4gICdFTSc6ICdFTVBIQVNJU0VEX1RFWFQnLFxuICAnSDEnOiAnSEVBRElOR19MRVZFTDEnLFxuICAnSDInOiAnSEVBRElOR19MRVZFTDInLFxuICAnSDMnOiAnSEVBRElOR19MRVZFTDMnLFxuICAnSDQnOiAnSEVBRElOR19MRVZFTDQnLFxuICAnSDUnOiAnSEVBRElOR19MRVZFTDUnLFxuICAnSDYnOiAnSEVBRElOR19MRVZFTDYnLFxuICAnSFInOiAnSE9SSVpPTlRBTF9SVUxFJyxcbiAgJ0knOiAnSVRBTElDX1RFWFQnLFxuICAnTEknOiAnTElTVF9JVEVNJyxcbiAgJ0xJTksnOiAnTUVESUFfTElOSycsXG4gICdPTCc6ICdPUkRFUkVEX0xJU1QnLFxuICAnUCc6ICdQQVJBR1JBUEgnLFxuICAnUSc6ICdRVU9UQVRJT04nLFxuICAnUyc6ICdTVFJJS0VUSFJPVUdIX1RFWFQnLFxuICAnU01BTEwnOiAnU01BTExfVEVYVCcsXG4gICdTVUInOiAnU1VCU1RSSVBUJyxcbiAgJ1NVUCc6ICdTVVBFUlNDUklQVCcsXG4gICdUQk9EWSc6ICdUQUJMRV9CT0RZJyxcbiAgJ1REJzogJ1RBQkxFX0NFTEwnLFxuICAnVEZPT1QnOiAnVEFCTEVfRk9PVEVSJyxcbiAgJ1RIJzogJ1RBQkxFX0hFQURFUl9DRUxMJyxcbiAgJ1RIRUFEJzogJ1RBQkxFX0hFQURFUicsXG4gICdUUic6ICdUQUJMRV9ST1cnLFxuICAnVFQnOiAnTU9OT1NQQUNFRF9URVhUJyxcbiAgJ1UnOiAnVU5ERVJMSU5FRF9URVhUJyxcbiAgJ1VMJzogJ1VOT1JERVJFRF9MSVNUJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIHBsYWNlaG9sZGVyIHdpdGggZGlmZmVyZW50IGNvbnRlbnQuXG4gKlxuICogUmV0dXJucyB0aGUgc2FtZSBwbGFjZWhvbGRlciBuYW1lIHdoZW4gdGhlIGNvbnRlbnQgaXMgaWRlbnRpY2FsLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJSZWdpc3RyeSB7XG4gIC8vIENvdW50IHRoZSBvY2N1cnJlbmNlIG9mIHRoZSBiYXNlIG5hbWUgdG9wIGdlbmVyYXRlIGEgdW5pcXVlIG5hbWVcbiAgcHJpdmF0ZSBfcGxhY2VIb2xkZXJOYW1lQ291bnRzOiB7W2s6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgLy8gTWFwcyBzaWduYXR1cmUgdG8gcGxhY2Vob2xkZXIgbmFtZXNcbiAgcHJpdmF0ZSBfc2lnbmF0dXJlVG9OYW1lOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICBnZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZywgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgaXNWb2lkOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoVGFnKHRhZywgYXR0cnMsIGlzVm9pZCk7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJUYWcgPSB0YWcudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBiYXNlTmFtZSA9IFRBR19UT19QTEFDRUhPTERFUl9OQU1FU1t1cHBlclRhZ10gfHwgYFRBR18ke3VwcGVyVGFnfWA7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShpc1ZvaWQgPyBiYXNlTmFtZSA6IGBTVEFSVF8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5faGFzaENsb3NpbmdUYWcodGFnKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGBDTE9TRV8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlck5hbWUobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVwcGVyTmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBgUEg6ICR7dXBwZXJOYW1lfT0ke2NvbnRlbnR9YDtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlxdWVOYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKHVwcGVyTmFtZSk7XG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSB1bmlxdWVOYW1lO1xuXG4gICAgcmV0dXJuIHVuaXF1ZU5hbWU7XG4gIH1cblxuICBnZXRVbmlxdWVQbGFjZWhvbGRlcihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUobmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGEgaGFzaCBmb3IgYSB0YWcgLSBkb2VzIG5vdCB0YWtlIGF0dHJpYnV0ZSBvcmRlciBpbnRvIGFjY291bnRcbiAgcHJpdmF0ZSBfaGFzaFRhZyh0YWc6IHN0cmluZywgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgaXNWb2lkOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IGA8JHt0YWd9YDtcbiAgICBjb25zdCBzdHJBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKS5zb3J0KCkubWFwKChuYW1lKSA9PiBgICR7bmFtZX09JHthdHRyc1tuYW1lXX1gKS5qb2luKCcnKTtcbiAgICBjb25zdCBlbmQgPSBpc1ZvaWQgPyAnLz4nIDogYD48LyR7dGFnfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0ICsgc3RyQXR0cnMgKyBlbmQ7XG4gIH1cblxuICBwcml2YXRlIF9oYXNoQ2xvc2luZ1RhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9oYXNoVGFnKGAvJHt0YWd9YCwge30sIGZhbHNlKTsgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlVW5pcXVlTmFtZShiYXNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlZW4gPSB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHMuaGFzT3duUHJvcGVydHkoYmFzZSk7XG4gICAgaWYgKCFzZWVuKSB7XG4gICAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSAxO1xuICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV07XG4gICAgdGhpcy5fcGxhY2VIb2xkZXJOYW1lQ291bnRzW2Jhc2VdID0gaWQgKyAxO1xuICAgIHJldHVybiBgJHtiYXNlfV8ke2lkfWA7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0xleGVyfSBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtQbGFjZWhvbGRlclJlZ2lzdHJ5fSBmcm9tIFwiLi4vc2VyaWFsaXplcnMvcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5cbmNvbnN0IF9leHBQYXJzZXIgPSBuZXcgUGFyc2VyKG5ldyBMZXhlcigpKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gY29udmVydGluZyBodG1sIG5vZGVzIHRvIGFuIGkxOG4gTWVzc2FnZSBnaXZlbiBhbiBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkoXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWdcbik6IChub2RlczogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT4gaTE4bi5NZXNzYWdlIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBJMThuVmlzaXRvcihfZXhwUGFyc2VyLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICByZXR1cm4gKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PlxuICAgIHZpc2l0b3IudG9JMThuTWVzc2FnZShub2RlcywgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbn1cblxuY2xhc3MgSTE4blZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9pc0ljdTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWN1RGVwdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJSZWdpc3RyeTogUGxhY2Vob2xkZXJSZWdpc3RyeTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJUb0NvbnRlbnQ6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IGkxOG4uTWVzc2FnZX07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwcmVzc2lvblBhcnNlcjogUGFyc2VyLCBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKSB7fVxuXG4gIHB1YmxpYyB0b0kxOG5NZXNzYWdlKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKTogaTE4bi5NZXNzYWdlIHtcbiAgICB0aGlzLl9pc0ljdSA9IG5vZGVzLmxlbmd0aCA9PT0gMSAmJiBub2Rlc1swXSBpbnN0YW5jZW9mIGh0bWwuRXhwYW5zaW9uO1xuICAgIHRoaXMuX2ljdURlcHRoID0gMDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5ID0gbmV3IFBsYWNlaG9sZGVyUmVnaXN0cnkoKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudCA9IHt9O1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlID0ge307XG5cbiAgICBjb25zdCBpMThub2RlczogaTE4bi5Ob2RlW10gPSBodG1sLnZpc2l0QWxsKHRoaXMsIG5vZGVzLCB7fSk7XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uTWVzc2FnZShpMThub2RlcywgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnQsIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICBjb25zdCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZWwuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIC8vIERvIG5vdCB2aXNpdCB0aGUgYXR0cmlidXRlcywgdHJhbnNsYXRhYmxlIG9uZXMgYXJlIHRvcC1sZXZlbCBBU1RzXG4gICAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGlzVm9pZDogYm9vbGVhbiA9IGdldEh0bWxUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmlzVm9pZDtcbiAgICBjb25zdCBzdGFydFBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0U3RhcnRUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSwgYXR0cnMsIGlzVm9pZCk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbc3RhcnRQaE5hbWVdID0gZWwuc291cmNlU3BhbiA/IGVsLnNvdXJjZVNwYW4hLnRvU3RyaW5nKCkgOiBcIlwiO1xuXG4gICAgbGV0IGNsb3NlUGhOYW1lID0gXCJcIjtcblxuICAgIGlmICghaXNWb2lkKSB7XG4gICAgICBjbG9zZVBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0Q2xvc2VUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtjbG9zZVBoTmFtZV0gPSBgPC8ke2VsLm5hbWV9PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBpMThuLlRhZ1BsYWNlaG9sZGVyKGVsLm5hbWUsIGF0dHJzLCBzdGFydFBoTmFtZSwgY2xvc2VQaE5hbWUsIGNoaWxkcmVuLCBpc1ZvaWQsIGVsLnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2l0VGV4dFdpdGhJbnRlcnBvbGF0aW9uKGF0dHJpYnV0ZS52YWx1ZSwgYXR0cmlidXRlLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24odGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgdGhpcy5faWN1RGVwdGgrKztcbiAgICBjb25zdCBpMThuSWN1Q2FzZXM6IHtbazogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuICAgIGNvbnN0IGkxOG5JY3UgPSBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgaTE4bkljdUNhc2VzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgaWN1LmNhc2VzLmZvckVhY2goKGNhemUpOiB2b2lkID0+IHtcbiAgICAgIGkxOG5JY3VDYXNlc1tjYXplLnZhbHVlXSA9IG5ldyBpMThuLkNvbnRhaW5lcihcbiAgICAgICAgY2F6ZS5leHByZXNzaW9uLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcywge30pKSxcbiAgICAgICAgY2F6ZS5leHBTb3VyY2VTcGFuXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2ljdURlcHRoLS07XG5cbiAgICBpZiAodGhpcy5faXNJY3UgfHwgdGhpcy5faWN1RGVwdGggPiAwKSB7XG4gICAgICAvLyBSZXR1cm5zIGFuIElDVSBub2RlIHdoZW46XG4gICAgICAvLyAtIHRoZSBtZXNzYWdlICh2cyBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UpIGlzIGFuIElDVSBtZXNzYWdlLCBvclxuICAgICAgLy8gLSB0aGUgSUNVIG1lc3NhZ2UgaXMgbmVzdGVkLlxuICAgICAgY29uc3QgZXhwUGggPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFVuaXF1ZVBsYWNlaG9sZGVyKGBWQVJfJHtpY3UudHlwZX1gKTtcbiAgICAgIGkxOG5JY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gZXhwUGg7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtleHBQaF0gPSBpY3Uuc3dpdGNoVmFsdWU7XG5cbiAgICAgIHJldHVybiBpMThuSWN1O1xuICAgIH1cblxuICAgIC8vIEVsc2UgcmV0dXJucyBhIHBsYWNlaG9sZGVyXG4gICAgLy8gSUNVIHBsYWNlaG9sZGVycyBzaG91bGQgbm90IGJlIHJlcGxhY2VkIHdpdGggdGhlaXIgb3JpZ2luYWwgY29udGVudCBidXQgd2l0aCB0aGUgdGhlaXJcbiAgICAvLyB0cmFuc2xhdGlvbnMuIFdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IHZpc2l0b3IgKHRoZXkgYXJlIG5vdCByZS1lbnRyYW50KSB0byBjb21wdXRlIHRoZVxuICAgIC8vIG1lc3NhZ2UgaWQuXG4gICAgLy8gVE9ETyh2aWNiKTogYWRkIGEgaHRtbC5Ob2RlIC0+IGkxOG4uTWVzc2FnZSBjYWNoZSB0byBhdm9pZCBoYXZpbmcgdG8gcmUtY3JlYXRlIHRoZSBtc2dcbiAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFBsYWNlaG9sZGVyTmFtZShcIklDVVwiLCBpY3Uuc291cmNlU3Bhbi50b1N0cmluZygpKTtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IEkxOG5WaXNpdG9yKHRoaXMuX2V4cHJlc3Npb25QYXJzZXIsIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlW3BoTmFtZV0gPSB2aXNpdG9yLnRvSTE4bk1lc3NhZ2UoW2ljdV0sIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIHJldHVybiBuZXcgaTE4bi5JY3VQbGFjZWhvbGRlcihpMThuSWN1LCBwaE5hbWUsIGljdS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWFjaGFibGUgY29kZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0VGV4dFdpdGhJbnRlcnBvbGF0aW9uKHRleHQ6IHN0cmluZywgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBzcGxpdEludGVycG9sYXRpb24gPSB0aGlzLl9leHByZXNzaW9uUGFyc2VyLnNwbGl0SW50ZXJwb2xhdGlvbihcbiAgICAgIHRleHQsXG4gICAgICBzb3VyY2VTcGFuLnN0YXJ0LnRvU3RyaW5nKCksXG4gICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgKTtcblxuICAgIGlmICghc3BsaXRJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAvLyBObyBleHByZXNzaW9uLCByZXR1cm4gYSBzaW5nbGUgdGV4dFxuICAgICAgcmV0dXJuIG5ldyBpMThuLlRleHQodGV4dCwgc291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgZ3JvdXAgb2YgdGV4dCArIGV4cHJlc3Npb25zXG4gICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IGkxOG4uQ29udGFpbmVyKG5vZGVzLCBzb3VyY2VTcGFuKTtcbiAgICBjb25zdCB7c3RhcnQ6IHNEZWxpbWl0ZXIsIGVuZDogZURlbGltaXRlcn0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdEludGVycG9sYXRpb24uc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzcGxpdEludGVycG9sYXRpb24uZXhwcmVzc2lvbnNbaV07XG4gICAgICBjb25zdCBiYXNlTmFtZSA9IGV4dHJhY3RQbGFjZWhvbGRlck5hbWUoZXhwcmVzc2lvbikgfHwgXCJJTlRFUlBPTEFUSU9OXCI7XG4gICAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFBsYWNlaG9sZGVyTmFtZShiYXNlTmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXS5sZW5ndGgpIHtcbiAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgZW1wdHkgc3RyaW5nc1xuICAgICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlRleHQoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbaV0sIHNvdXJjZVNwYW4pKTtcbiAgICAgIH1cblxuICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5QbGFjZWhvbGRlcihleHByZXNzaW9uLCBwaE5hbWUsIHNvdXJjZVNwYW4pKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W3BoTmFtZV0gPSBzRGVsaW1pdGVyICsgZXhwcmVzc2lvbiArIGVEZWxpbWl0ZXI7XG4gICAgfVxuXG4gICAgLy8gVGhlIGxhc3QgaW5kZXggY29udGFpbnMgbm8gZXhwcmVzc2lvblxuICAgIGNvbnN0IGxhc3RTdHJpbmdJZHggPSBzcGxpdEludGVycG9sYXRpb24uc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGlmIChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tsYXN0U3RyaW5nSWR4XS5sZW5ndGgpIHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tsYXN0U3RyaW5nSWR4XSwgc291cmNlU3BhbikpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG5cbmNvbnN0IF9DVVNUT01fUEhfRVhQID0gL1xcL1xcL1tcXHNcXFNdKmkxOG5bXFxzXFxTXSpcXChbXFxzXFxTXSpwaFtcXHNcXFNdKj1bXFxzXFxTXSooXCJ8JykoW1xcc1xcU10qPylcXDFbXFxzXFxTXSpcXCkvZztcblxuZnVuY3Rpb24gZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlucHV0LnNwbGl0KF9DVVNUT01fUEhfRVhQKVsyXTtcbn1cbiIsImltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge2NyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeX0gZnJvbSBcIi4vaTE4blwiO1xuaW1wb3J0IHtQYXJzZXIsIFBhcnNlVHJlZVJlc3VsdH0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWQsIFBsYWNlaG9sZGVyTWFwcGVyfSBmcm9tIFwiLi4vc2VyaWFsaXplcnMvc2VyaWFsaXplclwiO1xuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuY29uc3QgX0kxOE5fQVRUUiA9IFwiaTE4blwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VNZXRhZGF0YSB7XG4gIG1lYW5pbmc/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHKSB7XG4gICAgc3VwZXIoZ2V0SHRtbFRhZ0RlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHJldHVybiBzdXBlci5wYXJzZShzb3VyY2UsIHVybCwgcGFyc2VFeHBhbnNpb25Gb3JtcywgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHRyYW5zbGF0YWJsZSBtZXNzYWdlcyBmcm9tIGFuIGh0bWwgQVNUXG4gICAqL1xuICBleHRyYWN0TWVzc2FnZXMobm9kZXM6IGh0bWwuTm9kZVtdKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKFtcIndyYXBwZXJcIl0pO1xuICAgIC8vIENvbnN0cnVjdCBhIHNpbmdsZSBmYWtlIHJvb3QgZWxlbWVudFxuICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgaHRtbC5FbGVtZW50KFwid3JhcHBlclwiLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdmlzaXRvci5leHRyYWN0KHdyYXBwZXIsIHRoaXMuaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cblxuICBtZXJnZVRyYW5zbGF0aW9ucyhcbiAgICBub2RlczogaHRtbC5Ob2RlW10sXG4gICAgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZSxcbiAgICBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgIG1ldGFkYXRhPzogTWVzc2FnZU1ldGFkYXRhLFxuICAgIGltcGxpY2l0VGFnczogc3RyaW5nW10gPSBbXVxuICApOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgVmlzaXRvcihpbXBsaWNpdFRhZ3MpO1xuICAgIC8vIENvbnN0cnVjdCBhIHNpbmdsZSBmYWtlIHJvb3QgZWxlbWVudFxuICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgaHRtbC5FbGVtZW50KFwid3JhcHBlclwiLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdmlzaXRvci5tZXJnZSh3cmFwcGVyLCB0cmFuc2xhdGlvbnMsIHRoaXMuaW50ZXJwb2xhdGlvbkNvbmZpZywgcGFyYW1zLCBtZXRhZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dHJhY3Rpb25SZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBwdWJsaWMgZXJyb3JzOiBJMThuRXJyb3JbXSkge31cbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgdHJhbnNsYXRlZCBtZXNzYWdlc1xuICovXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25CdW5kbGUge1xuICBwcml2YXRlIGkxOG5Ub0h0bWw6IEkxOG5Ub0h0bWxWaXNpdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sXG4gICAgcHVibGljIGRpZ2VzdDogKG06IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIHB1YmxpYyBtYXBwZXJGYWN0b3J5PzogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgY29uc29sZT86IENvbnNvbGVcbiAgKSB7XG4gICAgdGhpcy5pMThuVG9IdG1sID0gbmV3IEkxOG5Ub0h0bWxWaXNpdG9yKFxuICAgICAgaTE4bk5vZGVzQnlNc2dJZCxcbiAgICAgIGRpZ2VzdCxcbiAgICAgIG1hcHBlckZhY3RvcnkhLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgICAgY29uc29sZVxuICAgICk7XG4gIH1cblxuICAvLyBDcmVhdGVzIGEgYFRyYW5zbGF0aW9uQnVuZGxlYCBieSBwYXJzaW5nIHRoZSBnaXZlbiBgY29udGVudGAgd2l0aCB0aGUgYHNlcmlhbGl6ZXJgLlxuICBzdGF0aWMgbG9hZChcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGlnZXN0OiAobWVzc2FnZTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgY3JlYXRlTmFtZU1hcHBlcjogKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIgfCBudWxsLFxuICAgIGxvYWRGY3Q6IChjb250ZW50OiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiBJMThuTWVzc2FnZXNCeUlkLFxuICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gICAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZCA9IGxvYWRGY3QoY29udGVudCwgdXJsKTtcbiAgICBjb25zdCBkaWdlc3RGbiA9IChtOiBpMThuLk1lc3NhZ2UpID0+IGRpZ2VzdChtKTtcbiAgICBjb25zdCBtYXBwZXJGYWN0b3J5ID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gY3JlYXRlTmFtZU1hcHBlcihtKSE7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbkJ1bmRsZShcbiAgICAgIGkxOG5Ob2Rlc0J5TXNnSWQsXG4gICAgICBkaWdlc3RGbixcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICAgIG1hcHBlckZhY3RvcnksXG4gICAgICBjb25zb2xlXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGFzIEhUTUwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gc291cmNlIG1lc3NhZ2UuXG4gIGdldChzcmNNc2c6IGkxOG4uTWVzc2FnZSwgcGFyYW1zKTogaHRtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGh0bWxSZXMgPSB0aGlzLmkxOG5Ub0h0bWwuY29udmVydChzcmNNc2csIHBhcmFtcyk7XG4gICAgaWYgKGh0bWxSZXMuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGh0bWxSZXMuZXJyb3JzLmpvaW4oXCJcXG5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sUmVzLm5vZGVzO1xuICB9XG5cbiAgaGFzKHNyY01zZzogaTE4bi5NZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlnZXN0KHNyY01zZykgaW4gdGhpcy5pMThuTm9kZXNCeU1zZ0lkO1xuICB9XG59XG5cbmNsYXNzIEkxOG5Ub0h0bWxWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfc3JjTXNnOiBpMThuLk1lc3NhZ2U7XG4gIHByaXZhdGUgX2NvbnRleHRTdGFjazoge21zZzogaTE4bi5NZXNzYWdlOyBtYXBwZXI6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZ31bXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdID0gW107XG4gIHByaXZhdGUgX21hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBwcml2YXRlIF9wYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICBwcml2YXRlIF9wYXJhbUtleXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2kxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9LFxuICAgIHByaXZhdGUgX2RpZ2VzdDogKG06IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgIHByaXZhdGUgX21hcHBlckZhY3Rvcnk6IChtOiBpMThuLk1lc3NhZ2UpID0+IFBsYWNlaG9sZGVyTWFwcGVyLFxuICAgIHByaXZhdGUgX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnPzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIF9jb25zb2xlPzogQ29uc29sZVxuICApIHt9XG5cbiAgY29udmVydChzcmNNc2c6IGkxOG4uTWVzc2FnZSwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHtub2RlczogaHRtbC5Ob2RlW107IGVycm9yczogSTE4bkVycm9yW119IHtcbiAgICB0aGlzLl9jb250ZXh0U3RhY2subGVuZ3RoID0gMDtcbiAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcblxuICAgIC8vIGkxOG4gdG8gdGV4dFxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmNvbnZlcnRUb1RleHQoc3JjTXNnKTtcblxuICAgIC8vIHRleHQgdG8gaHRtbFxuICAgIGNvbnN0IHVybCA9IHNyY01zZy5ub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsO1xuICAgIGNvbnN0IGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpLnBhcnNlKHRleHQsIHVybCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZXM6IGh0bWxQYXJzZXIucm9vdE5vZGVzLFxuICAgICAgZXJyb3JzOiBbLi4udGhpcy5fZXJyb3JzLCAuLi5odG1sUGFyc2VyLmVycm9yc11cbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcykpLmpvaW4oXCJcIik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKGsgPT4gYCR7a30geyR7aWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpfX1gKTtcblxuICAgIC8vIFRPRE8odmljYik6IE9uY2UgYWxsIGZvcm1hdCBzd2l0Y2ggdG8gdXNpbmcgZXhwcmVzc2lvbiBwbGFjZWhvbGRlcnNcbiAgICAvLyB3ZSBzaG91bGQgdGhyb3cgd2hlbiB0aGUgcGxhY2Vob2xkZXIgaXMgbm90IGluIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnMuaGFzT3duUHJvcGVydHkoaWN1LmV4cHJlc3Npb24pXG4gICAgICA/IHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbaWN1LmV4cHJlc3Npb25dXG4gICAgICA6IGljdS5leHByZXNzaW9uO1xuXG4gICAgcmV0dXJuIGB7JHtleHB9LCAke2ljdS50eXBlfSwgJHtjYXNlcy5qb2luKFwiIFwiKX19YDtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX21hcHBlcihwaC5uYW1lKTtcbiAgICBpZiAodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9WYWx1ZSh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzW3BoTmFtZV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2UuaGFzT3duUHJvcGVydHkocGhOYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvVGV4dCh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2VbcGhOYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkRXJyb3IocGgsIGBVbmtub3duIHBsYWNlaG9sZGVyIFwiJHtwaC5uYW1lfVwiYCk7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFnID0gYCR7cGgudGFnfWA7XG4gICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhwaC5hdHRycylcbiAgICAgIC5tYXAobmFtZSA9PiBgJHtuYW1lfT1cIiR7cGguYXR0cnNbbmFtZV19XCJgKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfS8+YDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAoKGM6IGkxOG4uTm9kZSkgPT4gYy52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgICByZXR1cm4gYDwke3RhZ30gJHthdHRyc30+JHtjaGlsZHJlbn08LyR7dGFnfT5gO1xuICB9XG5cbiAgLy8gTG9hZGVkIG1lc3NhZ2UgY29udGFpbnMgb25seSBwbGFjZWhvbGRlcnMgKHZzIHRhZyBhbmQgaWN1IHBsYWNlaG9sZGVycykuXG4gIC8vIEhvd2V2ZXIgd2hlbiBhIHRyYW5zbGF0aW9uIGNhbiBub3QgYmUgZm91bmQsIHdlIG5lZWQgdG8gc2VyaWFsaXplIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAvLyB3aGljaCBjYW4gY29udGFpbiB0YWcgcGxhY2Vob2xkZXJzXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIEFuIElDVSBwbGFjZWhvbGRlciByZWZlcmVuY2VzIHRoZSBzb3VyY2UgbWVzc2FnZSB0byBiZSBzZXJpYWxpemVkXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvVGV4dCh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2VbcGgubmFtZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYSBzb3VyY2UgbWVzc2FnZSB0byBhIHRyYW5zbGF0ZWQgdGV4dCBzdHJpbmc6XG4gICAqIC0gdGV4dCBub2RlcyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciB0cmFuc2xhdGlvbixcbiAgICogLSBwbGFjZWhvbGRlcnMgYXJlIHJlcGxhY2VkIHdpdGggdGhlaXIgY29udGVudCxcbiAgICogLSBJQ1Ugbm9kZXMgYXJlIGNvbnZlcnRlZCB0byBJQ1UgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRUb1RleHQoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fZGlnZXN0KHNyY01zZyk7XG5cbiAgICBjb25zdCBtYXBwZXIgPSB0aGlzLl9tYXBwZXJGYWN0b3J5ID8gdGhpcy5fbWFwcGVyRmFjdG9yeShzcmNNc2cpIDogbnVsbDtcbiAgICBsZXQgbm9kZXM6IGkxOG4uTm9kZVtdO1xuXG4gICAgdGhpcy5fY29udGV4dFN0YWNrLnB1c2goe21zZzogdGhpcy5fc3JjTXNnLCBtYXBwZXI6IHRoaXMuX21hcHBlcn0pO1xuICAgIHRoaXMuX3NyY01zZyA9IHNyY01zZztcblxuICAgIGlmICh0aGlzLl9pMThuTm9kZXNCeU1zZ0lkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gV2hlbiB0aGVyZSBpcyBhIHRyYW5zbGF0aW9uIHVzZSBpdHMgbm9kZXMgYXMgdGhlIHNvdXJjZVxuICAgICAgLy8gQW5kIGNyZWF0ZSBhIG1hcHBlciB0byBjb252ZXJ0IHNlcmlhbGl6ZWQgcGxhY2Vob2xkZXIgbmFtZXMgdG8gaW50ZXJuYWwgbmFtZXNcbiAgICAgIG5vZGVzID0gdGhpcy5faTE4bk5vZGVzQnlNc2dJZFtpZF07XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiAobWFwcGVyID8gbWFwcGVyLnRvSW50ZXJuYWxOYW1lKG5hbWUpISA6IG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXaGVuIG5vIHRyYW5zbGF0aW9uIGhhcyBiZWVuIGZvdW5kXG4gICAgICAvLyAtIHJlcG9ydCBhbiBlcnJvciAvIGEgd2FybmluZyAvIG5vdGhpbmcsXG4gICAgICAvLyAtIHVzZSB0aGUgbm9kZXMgZnJvbSB0aGUgb3JpZ2luYWwgbWVzc2FnZVxuICAgICAgLy8gLSBwbGFjZWhvbGRlcnMgYXJlIGFscmVhZHkgaW50ZXJuYWwgYW5kIG5lZWQgbm8gbWFwcGVyXG4gICAgICBpZiAodGhpcy5fbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPT09IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LkVycm9yKSB7XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKHNyY01zZy5ub2Rlc1swXSwgYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiYCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbnNvbGUgJiYgdGhpcy5fbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPT09IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmcpIHtcbiAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBtZXNzYWdlIFwiJHtpZH1cImApO1xuICAgICAgfVxuICAgICAgbm9kZXMgPSBzcmNNc2cubm9kZXM7XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiBuYW1lO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gbm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dFN0YWNrLnBvcCgpITtcbiAgICB0aGlzLl9zcmNNc2cgPSBjb250ZXh0Lm1zZztcbiAgICB0aGlzLl9tYXBwZXIgPSBjb250ZXh0Lm1hcHBlcjtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvVmFsdWUocGxhY2Vob2xkZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW0gPSBwbGFjZWhvbGRlci5yZXBsYWNlKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuc3RhcnQsIFwiXCIpLnJlcGxhY2UodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQsIFwiXCIpO1xuICAgIHJldHVybiB0aGlzLl9wYXJhbUtleXMuaW5kZXhPZihwYXJhbSkgIT09IC0xID8gdGhpcy5fcGFyYW1zW3BhcmFtXSA6IHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3IoZWw6IGkxOG4uTm9kZSwgbXNnOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKGVsLnNvdXJjZVNwYW4sIG1zZykpO1xuICB9XG59XG5cbmVudW0gVmlzaXRvck1vZGUge1xuICBFeHRyYWN0LFxuICBNZXJnZVxufVxuXG4vKipcbiAqIFRoaXMgVmlzaXRvciBpcyB1c2VkOlxuICogMS4gdG8gZXh0cmFjdCBhbGwgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIGZyb20gYW4gaHRtbCBBU1QgKHNlZSBgZXh0cmFjdCgpYCksXG4gKiAyLiB0byByZXBsYWNlIHRoZSB0cmFuc2xhdGFibGUgc3RyaW5ncyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNsYXRpb25zIChzZWUgYG1lcmdlKClgKVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBkZXB0aDogbnVtYmVyO1xuXG4gIC8vIDxlbCBpMThuPi4uLjwvZWw+XG4gIHByaXZhdGUgaW5JMThuTm9kZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbkltcGxpY2l0Tm9kZTogYm9vbGVhbjtcblxuICAvLyA8IS0taTE4bi0tPi4uLjwhLS0vaTE4bi0tPlxuICBwcml2YXRlIGluSTE4bkJsb2NrOiBib29sZWFuO1xuICBwcml2YXRlIGJsb2NrQ2hpbGRyZW46IGh0bWwuTm9kZVtdID0gW107XG4gIHByaXZhdGUgYmxvY2tTdGFydERlcHRoOiBudW1iZXI7XG5cbiAgLy8gezxpY3UgbWVzc2FnZT59XG4gIHByaXZhdGUgaW5JY3U6IGJvb2xlYW47XG5cbiAgLy8gc2V0IHRvIHZvaWQgMCB3aGVuIG5vdCBpbiBhIHNlY3Rpb25cbiAgcHJpdmF0ZSBtc2dDb3VudEF0U2VjdGlvblN0YXJ0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBtb2RlOiBWaXNpdG9yTW9kZTtcblxuICAvLyBWaXNpdG9yTW9kZS5FeHRyYWN0IG9ubHlcbiAgcHJpdmF0ZSBtZXNzYWdlczogaTE4bi5NZXNzYWdlW107XG5cbiAgLy8gVmlzaXRvck1vZGUuTWVyZ2Ugb25seVxuICBwcml2YXRlIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGU7XG4gIHByaXZhdGUgY3JlYXRlSTE4bk1lc3NhZ2U6IChtc2c6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBtZXRhZGF0YTogTWVzc2FnZU1ldGFkYXRhO1xuICBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW1wbGljaXRUYWdzOiBzdHJpbmdbXSA9IFtdKSB7fVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgdHJlZVxuICAgKi9cbiAgZXh0cmFjdChub2RlOiBodG1sLk5vZGUsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICB0aGlzLmluaXQoVmlzaXRvck1vZGUuRXh0cmFjdCwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBub2RlLnZpc2l0KHRoaXMsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5jbG9zZWQgYmxvY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFeHRyYWN0aW9uUmVzdWx0KHRoaXMubWVzc2FnZXMsIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdHJlZSB3aGVyZSBhbGwgdHJhbnNsYXRhYmxlIG5vZGVzIGFyZSB0cmFuc2xhdGVkXG4gICAqL1xuICBtZXJnZShcbiAgICBub2RlOiBodG1sLk5vZGUsXG4gICAgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgbWV0YWRhdGE6IE1lc3NhZ2VNZXRhZGF0YSA9IHt9XG4gICk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgdGhpcy5pbml0KFZpc2l0b3JNb2RlLk1lcmdlLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXMpO1xuICAgIHRoaXMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWROb2RlID0gbm9kZS52aXNpdCh0aGlzLCBudWxsKTtcblxuICAgIGlmICh0aGlzLmluSTE4bkJsb2NrKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuY2xvc2VkIGJsb2NrXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRyYW5zbGF0ZWROb2RlLmNoaWxkcmVuLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogaHRtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIC8vIFBhcnNlIGNhc2VzIGZvciB0cmFuc2xhdGFibGUgaHRtbCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZShcbiAgICAgICAgaWN1Q2FzZS52YWx1ZSxcbiAgICAgICAgZXhwcmVzc2lvbixcbiAgICAgICAgaWN1Q2FzZS5zb3VyY2VTcGFuLFxuICAgICAgICBpY3VDYXNlLnZhbHVlU291cmNlU3BhbixcbiAgICAgICAgaWN1Q2FzZS5leHBTb3VyY2VTcGFuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGh0bWwuRXhwYW5zaW9uIHtcbiAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbihpY3UpO1xuXG4gICAgY29uc3Qgd2FzSW5JY3UgPSB0aGlzLmluSWN1O1xuXG4gICAgaWYgKCF0aGlzLmluSWN1KSB7XG4gICAgICAvLyBuZXN0ZWQgSUNVIG1lc3NhZ2VzIHNob3VsZCBub3QgYmUgZXh0cmFjdGVkIGJ1dCB0b3AtbGV2ZWwgdHJhbnNsYXRlZCBhcyBhIHdob2xlXG4gICAgICBpZiAodGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoW2ljdV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5pbkljdSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FzZXMgPSBodG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgaWN1ID0gbmV3IGh0bWwuRXhwYW5zaW9uKGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGNhc2VzLCBpY3Uuc291cmNlU3BhbiwgaWN1LnN3aXRjaFZhbHVlU291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgdGhpcy5pbkljdSA9IHdhc0luSWN1O1xuXG4gICAgcmV0dXJuIGljdTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaHRtbC5UZXh0IHtcbiAgICBpZiAodGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4odGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGh0bWwuRWxlbWVudCB8IG51bGwge1xuICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKGVsKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgY29uc3Qgd2FzSW5JMThuTm9kZSA9IHRoaXMuaW5JMThuTm9kZTtcbiAgICBjb25zdCB3YXNJbkltcGxpY2l0Tm9kZSA9IHRoaXMuaW5JbXBsaWNpdE5vZGU7XG4gICAgbGV0IGNoaWxkTm9kZXM6IGh0bWwuTm9kZVtdID0gW107XG4gICAgbGV0IHRyYW5zbGF0ZWRDaGlsZE5vZGVzOiBodG1sLk5vZGVbXSA9IHVuZGVmaW5lZCE7XG5cbiAgICAvLyBFeHRyYWN0OlxuICAgIC8vIC0gdG9wIGxldmVsIG5vZGVzIHdpdGggdGhlIChpbXBsaWNpdCkgXCJpMThuXCIgYXR0cmlidXRlIGlmIG5vdCBhbHJlYWR5IGluIGEgc2VjdGlvblxuICAgIC8vIC0gSUNVIG1lc3NhZ2VzXG4gICAgY29uc3QgaTE4bkF0dHIgPSBnZXRJMThuQXR0cihlbCk7XG4gICAgY29uc3QgaXNJbXBsaWNpdCA9IHRoaXMuX2ltcGxpY2l0VGFncy5zb21lKHRhZyA9PiBlbC5uYW1lID09PSB0YWcpICYmICF0aGlzLmluSWN1ICYmICF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uO1xuICAgIGNvbnN0IGlzVG9wTGV2ZWxJbXBsaWNpdCA9ICF3YXNJbkltcGxpY2l0Tm9kZSAmJiBpc0ltcGxpY2l0O1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSB3YXNJbkltcGxpY2l0Tm9kZSB8fCBpc0ltcGxpY2l0O1xuICAgIGlmICghdGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbiAmJiAhdGhpcy5pbkljdSkge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLmluSTE4bk5vZGUgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5hZGRNZXNzYWdlKGVsLmNoaWxkcmVuLCB0aGlzLm1ldGFkYXRhKSE7XG4gICAgICAgIHRyYW5zbGF0ZWRDaGlsZE5vZGVzID0gdGhpcy50cmFuc2xhdGVNZXNzYWdlKGVsLCBtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuRXh0cmFjdCkge1xuICAgICAgICBjb25zdCBpc1RyYW5zbGF0YWJsZSA9IGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdDtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5vcGVuVHJhbnNsYXRhYmxlU2VjdGlvbihlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbihlbCwgZWwuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoZWwsIFwiQ291bGQgbm90IG1hcmsgYW4gZWxlbWVudCBhcyB0cmFuc2xhdGFibGUgaW5zaWRlIGEgdHJhbnNsYXRhYmxlIHNlY3Rpb25cIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLkV4dHJhY3QpIHtcbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIGNoaWxkIG5vZGVzIGZvciBleHRyYWN0aW9uXG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCB2aXNpdE5vZGVzID0gdHJhbnNsYXRlZENoaWxkTm9kZXMgfHwgZWwuY2hpbGRyZW47XG4gICAgICB2aXNpdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCk7XG4gICAgICAgIGlmICh2aXNpdGVkICYmICF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICAgICAgLy8gRG8gbm90IGFkZCB0aGUgY2hpbGRyZW4gZnJvbSB0cmFuc2xhdGFibGUgc2VjdGlvbnMgKD0gaTE4biBibG9ja3MgaGVyZSlcbiAgICAgICAgICAvLyBUaGV5IHdpbGwgYmUgYWRkZWQgbGF0ZXIgaW4gdGhpcyBsb29wIHdoZW4gdGhlIGJsb2NrIGNsb3NlcyAoaS5lLiBvbiBgPCEtLSAvaTE4biAtLT5gKVxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmNvbmNhdCh2aXNpdGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHRoaXMuaW5JMThuTm9kZSA9IHdhc0luSTE4bk5vZGU7XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FbGVtZW50KGVsLm5hbWUsIFtdLCBjaGlsZE5vZGVzLCBlbC5zb3VyY2VTcGFuLCBlbC5zdGFydFNvdXJjZVNwYW4sIGVsLmVuZFNvdXJjZVNwYW4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY29kZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdChtb2RlOiBWaXNpdG9yTW9kZSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZywgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmluSTE4bkJsb2NrID0gZmFsc2U7XG4gICAgdGhpcy5pbkkxOG5Ob2RlID0gZmFsc2U7XG4gICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgdGhpcy5pbkljdSA9IGZhbHNlO1xuICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVJMThuTWVzc2FnZSA9IGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8vIGFkZCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlXG4gIHByaXZhdGUgYWRkTWVzc2FnZShhc3Q6IGh0bWwuTm9kZVtdLCB7bWVhbmluZyA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiwgaWQgPSBcIlwifSA9IHt9KTogaTE4bi5NZXNzYWdlIHwgbnVsbCB7XG4gICAgaWYgKFxuICAgICAgYXN0Lmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKGFzdC5sZW5ndGggPT09IDEgJiYgYXN0WzBdIGluc3RhbmNlb2YgaHRtbC5BdHRyaWJ1dGUgJiYgIShhc3RbMF0gYXMgaHRtbC5BdHRyaWJ1dGUpLnZhbHVlKVxuICAgICkge1xuICAgICAgLy8gRG8gbm90IGNyZWF0ZSBlbXB0eSBtZXNzYWdlc1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlSTE4bk1lc3NhZ2UoYXN0LCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIC8vIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgZ2l2ZW4gdGhlIGBUcmFuc2xhdGlvbkJ1bmRsZWBcbiAgLy8gVGhpcyBpcyB1c2VkIGZvciB0cmFuc2xhdGluZyBlbGVtZW50cyAvIGJsb2NrcyAtIHNlZSBgX3RyYW5zbGF0ZUF0dHJpYnV0ZXNgIGZvciBhdHRyaWJ1dGVzXG4gIC8vIG5vLW9wIHdoZW4gY2FsbGVkIGluIGV4dHJhY3Rpb24gbW9kZSAocmV0dXJucyBbXSlcbiAgcHJpdmF0ZSB0cmFuc2xhdGVNZXNzYWdlKGVsOiBodG1sLk5vZGUsIG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IGh0bWwuTm9kZVtdIHtcbiAgICBpZiAobWVzc2FnZSAmJiB0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMudHJhbnNsYXRpb25zLmdldChtZXNzYWdlLCB0aGlzLnBhcmFtcyk7XG4gICAgICBpZiAobm9kZXMpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihlbCwgYFRyYW5zbGF0aW9uIHVuYXZhaWxhYmxlIGZvciBtZXNzYWdlIGlkPVwiJHt0aGlzLnRyYW5zbGF0aW9ucy5kaWdlc3QobWVzc2FnZSl9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBub2RlIGFzIGEgY2hpbGQgb2YgdGhlIGJsb2NrIHdoZW46XG4gICAqIC0gd2UgYXJlIGluIGEgYmxvY2ssXG4gICAqIC0gd2UgYXJlIG5vdCBpbnNpZGUgYSBJQ1UgbWVzc2FnZSAodGhvc2UgYXJlIGhhbmRsZWQgc2VwYXJhdGVseSksXG4gICAqIC0gdGhlIG5vZGUgaXMgYSBcImRpcmVjdCBjaGlsZFwiIG9mIHRoZSBibG9ja1xuICAgKi9cbiAgcHJpdmF0ZSBtYXlCZUFkZEJsb2NrQ2hpbGRyZW4obm9kZTogaHRtbC5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2sgJiYgIXRoaXMuaW5JY3UgJiYgdGhpcy5kZXB0aCA9PT0gdGhpcy5ibG9ja1N0YXJ0RGVwdGgpIHtcbiAgICAgIHRoaXMuYmxvY2tDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgc3RhcnQgb2YgYSBzZWN0aW9uLCBzZWUgYF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb25gXG4gICAqL1xuICBwcml2YXRlIG9wZW5UcmFuc2xhdGFibGVTZWN0aW9uKG5vZGU6IGh0bWwuTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuZXhwZWN0ZWQgc2VjdGlvbiBzdGFydFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdGhpcy5tZXNzYWdlcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgdHJhbnNsYXRhYmxlIHNlY3Rpb24gY291bGQgYmU6XG4gICAqIC0gdGhlIGNvbnRlbnQgb2YgdHJhbnNsYXRhYmxlIGVsZW1lbnQsXG4gICAqIC0gbm9kZXMgYmV0d2VlbiBgPCEtLSBpMThuIC0tPmAgYW5kIGA8IS0tIC9pMThuIC0tPmAgY29tbWVudHNcbiAgICovXG4gIHByaXZhdGUgZ2V0IGlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgIT09IHZvaWQgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXJtaW5hdGVzIGEgc2VjdGlvbi5cbiAgICpcbiAgICogSWYgYSBzZWN0aW9uIGhhcyBvbmx5IG9uZSBzaWduaWZpY2FudCBjaGlsZHJlbiAoY29tbWVudHMgbm90IHNpZ25pZmljYW50KSB0aGVuIHdlIHNob3VsZCBub3RcbiAgICoga2VlcCB0aGUgbWVzc2FnZSBmcm9tIHRoaXMgY2hpbGRyZW46XG4gICAqXG4gICAqIGA8cCBpMThuPVwibWVhbmluZ3xkZXNjcmlwdGlvblwiPntJQ1UgbWVzc2FnZX08L3A+YCB3b3VsZCBwcm9kdWNlIHR3byBtZXNzYWdlczpcbiAgICogLSBvbmUgZm9yIHRoZSA8cD4gY29udGVudCB3aXRoIG1lYW5pbmcgYW5kIGRlc2NyaXB0aW9uLFxuICAgKiAtIGFub3RoZXIgb25lIGZvciB0aGUgSUNVIG1lc3NhZ2UuXG4gICAqXG4gICAqIEluIHRoaXMgY2FzZSB0aGUgbGFzdCBtZXNzYWdlIGlzIGRpc2NhcmRlZCBhcyBpdCBjb250YWlucyBsZXNzIGluZm9ybWF0aW9uICh0aGUgQVNUIGlzXG4gICAqIG90aGVyd2lzZSBpZGVudGljYWwpLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgd2Ugc2hvdWxkIHN0aWxsIGtlZXAgbWVzc2FnZXMgZXh0cmFjdGVkIGZyb20gYXR0cmlidXRlcyBpbnNpZGUgdGhlIHNlY3Rpb24gKGllIGluIHRoZVxuICAgKiBJQ1UgbWVzc2FnZSBoZXJlKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKG5vZGU6IGh0bWwuTm9kZSwgZGlyZWN0Q2hpbGRyZW46IGh0bWwuTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuZXhwZWN0ZWQgc2VjdGlvbiBlbmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydDtcbiAgICBjb25zdCBzaWduaWZpY2FudENoaWxkcmVuOiBudW1iZXIgPSBkaXJlY3RDaGlsZHJlbi5yZWR1Y2UoXG4gICAgICAoY291bnQ6IG51bWJlciwgbjogaHRtbC5Ob2RlKTogbnVtYmVyID0+IGNvdW50ICsgKG4gaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgPyAwIDogMSksXG4gICAgICAwXG4gICAgKTtcblxuICAgIGlmIChzaWduaWZpY2FudENoaWxkcmVuID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxOyBpID49IHN0YXJ0SW5kZXghOyBpLS0pIHtcbiAgICAgICAgY29uc3QgYXN0ID0gdGhpcy5tZXNzYWdlc1tpXS5ub2RlcztcbiAgICAgICAgaWYgKCEoYXN0Lmxlbmd0aCA9PT0gMSAmJiBhc3RbMF0gaW5zdGFuY2VvZiBpMThuLlRleHQpKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihub2RlOiBodG1sLk5vZGUsIG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1zZykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEkxOG5BdHRyKHA6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlIHwgbnVsbCB7XG4gIHJldHVybiBwLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IF9JMThOX0FUVFIpIHx8IG51bGw7XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBMT0NBTEVfSUQsXG4gIE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICBPcHRpb25hbCxcbiAgVFJBTlNMQVRJT05TLFxuICBUUkFOU0xBVElPTlNfRk9STUFUXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3hsaWZmRGlnZXN0LCB4bGlmZkxvYWRUb0kxOG59IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3hsaWZmXCI7XG5pbXBvcnQge3hsaWZmMkRpZ2VzdCwgeGxpZmYyTG9hZFRvSTE4bn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveGxpZmYyXCI7XG5pbXBvcnQge3h0YkRpZ2VzdCwgeHRiTG9hZFRvSTE4biwgeHRiTWFwcGVyfSBmcm9tIFwiLi9zZXJpYWxpemVycy94dGJcIjtcbmltcG9ydCB7SHRtbFBhcnNlciwgVHJhbnNsYXRpb25CdW5kbGV9IGZyb20gXCIuL3BhcnNlci9odG1sXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWQsIHNlcmlhbGl6ZU5vZGVzfSBmcm9tIFwiLi9zZXJpYWxpemVycy9zZXJpYWxpemVyXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSTE4biB7XG4gIChkZWY6IHN0cmluZyB8IEkxOG5EZWYsIHBhcmFtcz86IHtba2V5OiBzdHJpbmddOiBhbnl9KTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5EZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbWVhbmluZz86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNSVNTSU5HX1RSQU5TTEFUSU9OX1NUUkFURUdZID0gbmV3IEluamVjdGlvblRva2VuPE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5PihcbiAgXCJNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVwiXG4pO1xuXG4vKipcbiAqIEEgc3BlY3VsYXRpdmUgcG9seWZpbGwgdG8gdXNlIGkxOG4gY29kZSB0cmFuc2xhdGlvbnNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OU19GT1JNQVQpIGZvcm1hdDogc3RyaW5nLFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TKSB0cmFuc2xhdGlvbnM6IHN0cmluZyxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KE1JU1NJTkdfVFJBTlNMQVRJT05fU1RSQVRFR1kpXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZ1xuICApIHtcbiAgICBsZXQgbG9hZEZjdDogKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IEkxOG5NZXNzYWdlc0J5SWQ7XG4gICAgbGV0IGRpZ2VzdDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHN0cmluZztcbiAgICBsZXQgY3JlYXRlTWFwcGVyID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IG51bGw7XG4gICAgZm9ybWF0ID0gKGZvcm1hdCB8fCBcInhsZlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlIFwieHRiXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4dGJMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4dGJEaWdlc3Q7XG4gICAgICAgIGNyZWF0ZU1hcHBlciA9IHh0Yk1hcHBlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwieGxpZmYyXCI6XG4gICAgICBjYXNlIFwieGxmMlwiOlxuICAgICAgICBsb2FkRmN0ID0geGxpZmYyTG9hZFRvSTE4bjtcbiAgICAgICAgZGlnZXN0ID0geGxpZmYyRGlnZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ4bGlmZlwiOlxuICAgICAgY2FzZSBcInhsZlwiOlxuICAgICAgICBsb2FkRmN0ID0geGxpZmZMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4bGlmZkRpZ2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHJhbnNsYXRpb25zIGZvcm1hdCAke2Zvcm1hdH1gKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbnNCdW5kbGUgPSBUcmFuc2xhdGlvbkJ1bmRsZS5sb2FkKFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgXCJpMThuXCIsXG4gICAgICBkaWdlc3QsXG4gICAgICBjcmVhdGVNYXBwZXIsXG4gICAgICBsb2FkRmN0LFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3lcbiAgICApO1xuXG4gICAgLy8gdG9kbyB1c2UgaW50ZXJwb2xhdGlvbiBjb25maWdcbiAgICByZXR1cm4gKGRlZjogc3RyaW5nIHwgSTE4bkRlZiwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdHlwZW9mIGRlZiA9PT0gXCJzdHJpbmdcIiA/IGRlZiA6IGRlZi52YWx1ZTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0ge307XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtZXRhZGF0YVtcImlkXCJdID0gZGVmLmlkO1xuICAgICAgICBtZXRhZGF0YVtcIm1lYW5pbmdcIl0gPSBkZWYubWVhbmluZztcbiAgICAgICAgbWV0YWRhdGFbXCJkZXNjcmlwdGlvblwiXSA9IGRlZi5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGh0bWxQYXJzZXJSZXN1bHQgPSBodG1sUGFyc2VyLnBhcnNlKGNvbnRlbnQsIFwiXCIsIHRydWUpO1xuXG4gICAgICBpZiAoaHRtbFBhcnNlclJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWROb2RlcyA9IGh0bWxQYXJzZXIubWVyZ2VUcmFuc2xhdGlvbnMoXG4gICAgICAgIGh0bWxQYXJzZXJSZXN1bHQucm9vdE5vZGVzLFxuICAgICAgICB0cmFuc2xhdGlvbnNCdW5kbGUsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIFtcIndyYXBwZXJcIl1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzZXJpYWxpemVOb2RlcyhtZXJnZWROb2Rlcy5yb290Tm9kZXMsIGxvY2FsZSwgcGFyYW1zKS5qb2luKFwiXCIpO1xuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGFycy4kRU9GIiwiY2hhcnMuJExUIiwiY2hhcnMuJEJBTkciLCJjaGFycy4kTEJSQUNLRVQiLCJjaGFycy4kTUlOVVMiLCJjaGFycy4kU0xBU0giLCJjaGFycy4kUkJSQUNFIiwiY2hhcnMuJExGIiwiY2hhcnMuJENSIiwiY2hhcnMuJEFNUEVSU0FORCIsImNoYXJzLiRIQVNIIiwiY2hhcnMuJHgiLCJjaGFycy4kWCIsImNoYXJzLiRTRU1JQ09MT04iLCJjaGFycy4kUkJSQUNLRVQiLCJjaGFycy4kR1QiLCJjaGFycy4kQ09MT04iLCJjaGFycy5pc0FzY2lpTGV0dGVyIiwiY2hhcnMuJEVRIiwiY2hhcnMuJFNRIiwiY2hhcnMuJERRIiwiY2hhcnMuJExCUkFDRSIsImNoYXJzLiRDT01NQSIsImNoYXJzLmlzV2hpdGVzcGFjZSIsImNoYXJzLiRhIiwiY2hhcnMuJHoiLCJjaGFycy4kQSIsImNoYXJzLiRaIiwiY2hhcnMuJDAiLCJjaGFycy4kOSIsImNoYXJzLmlzQXNjaWlIZXhEaWdpdCIsImNoYXJzLmlzRGlnaXQiLCJsZXgudG9rZW5pemUiLCJsZXguVG9rZW5UeXBlIiwiaHRtbC5Db21tZW50IiwiaHRtbC5FeHBhbnNpb24iLCJsZXguVG9rZW4iLCJodG1sLkV4cGFuc2lvbkNhc2UiLCJodG1sLlRleHQiLCJodG1sLkVsZW1lbnQiLCJodG1sLkF0dHJpYnV0ZSIsImkxOG4uUmVjdXJzZVZpc2l0b3IiLCJzZXJpYWxpemVOb2RlcyIsIlNlcmlhbGl6ZXJWaXNpdG9yIiwibWwudmlzaXRBbGwiLCJpMThuLlRleHQiLCJpMThuLlBsYWNlaG9sZGVyIiwiaTE4bi5Db250YWluZXIiLCJpMThuLkljdSIsIl9QTEFDRUhPTERFUl9UQUciLCJfU09VUkNFX1RBRyIsIl9UQVJHRVRfVEFHIiwiX1VOSVRfVEFHIiwiWG1sVG9JMThuIiwiVG9rZW5UeXBlIiwiVG9rZW4iLCJjaGFycy4kU1BBQ0UiLCJjaGFycy4kUEVSSU9EIiwiY2hhcnMuJExQQVJFTiIsImNoYXJzLiRSUEFSRU4iLCJjaGFycy4kUExVUyIsImNoYXJzLiRTVEFSIiwiY2hhcnMuJFBFUkNFTlQiLCJjaGFycy4kQ0FSRVQiLCJjaGFycy4kUVVFU1RJT04iLCJjaGFycy4kQkFSIiwiY2hhcnMuJE5CU1AiLCJjaGFycy4kQkFDS1NMQVNIIiwiY2hhcnMuJHUiLCJjaGFycy4kXyIsImNoYXJzLiQkIiwiY2hhcnMuJGUiLCJjaGFycy4kRSIsImNoYXJzLiRCVCIsImNoYXJzLiRuIiwiY2hhcnMuJGYiLCJjaGFycy4kRkYiLCJjaGFycy4kciIsImNoYXJzLiR0IiwiY2hhcnMuJFRBQiIsImNoYXJzLiR2IiwiY2hhcnMuJFZUQUIiLCJQYXJzZXIiLCJodG1sLnZpc2l0QWxsIiwiaTE4bi5NZXNzYWdlIiwiaTE4bi5UYWdQ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QUFBTyx1QkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEFBQU8sdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHVCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQUFBTyx1QkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8sdUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHVCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBRTVCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHVCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFckIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHVCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixBQUFPLHVCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsQUFBTyx1QkFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLEFBQU8sdUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixBQUFPLHVCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHVCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8sdUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHVCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyx1QkFBTSxF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LFFBQVE7SUFDZixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLFFBQVE7SUFDakIsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxHQUFHO0lBQ1AsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsR0FBRztJQUNQLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUs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LENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5RDtZQUVELE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLHVCQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUVELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUY7SUFFRCxPQUFPLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNwRTs7Ozs7Ozs7QUFFRCxZQUFZLEtBQWEsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDeEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUNkLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNoQztJQUVELElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNsRDtJQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUNoQzs7Ozs7Ozs7Ozs7QUFVRCxxQkFBNEIsR0FBVztJQUNyQyx1QkFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV2RCxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDdEMsRUFBRSxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDckIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQztLQUN2QjtJQUVELE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDakI7Ozs7OztBQUVELHNCQUE2QixHQUFXLEVBQUUsT0FBZTtJQUN2RCxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVoQyxJQUFJLE9BQU8sRUFBRTtRQUNYLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNsRDtJQUVELE9BQU8scUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLEdBQUcsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxRTs7Ozs7O0FBRUQsZ0JBQWdCLEdBQVcsRUFBRSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMscUJBQUksQ0FBUyxDQUFDO0lBRWQsdUJBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztJQUVoRCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXJELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzFCOzs7OztBQUdELGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBMkI7SUFDOUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDYixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hC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