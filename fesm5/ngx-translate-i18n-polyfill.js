import { __extends, __spread, __read } from 'tslib';
import { I18nPluralPipe, I18nSelectPipe, NgLocaleLocalization } from '@angular/common';
import { MissingTranslationStrategy, Inject, Injectable, InjectionToken, LOCALE_ID, Optional, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Text = /** @class */ (function () {
    function Text(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return Text;
}());
var Expansion = /** @class */ (function () {
    function Expansion(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
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
    Expansion.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitExpansion(this, context);
    };
    return Expansion;
}());
var ExpansionCase = /** @class */ (function () {
    function ExpansionCase(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
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
    ExpansionCase.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitExpansionCase(this, context);
    };
    return ExpansionCase;
}());
var Attribute = /** @class */ (function () {
    function Attribute(name, value, sourceSpan, valueSpan) {
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
    Attribute.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitAttribute(this, context);
    };
    return Attribute;
}());
var Element = /** @class */ (function () {
    function Element(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
        if (startSourceSpan === void 0) { startSourceSpan = null; }
        if (endSourceSpan === void 0) { endSourceSpan = null; }
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
    Element.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitElement(this, context);
    };
    return Element;
}());
var Comment = /** @class */ (function () {
    function Comment(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    Comment.prototype.visit = /**
     * @param {?} visitor
     * @param {?} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitComment(this, context);
    };
    return Comment;
}());
/**
 * @param {?} visitor
 * @param {?} nodes
 * @param {?=} context
 * @return {?}
 */
function visitAll(visitor, nodes, context) {
    if (context === void 0) { context = null; }
    var /** @type {?} */ result = [];
    var /** @type {?} */ visit = visitor.visit
        ? function (ast) { return ((visitor.visit))(ast, context) || ast.visit(visitor, context); }
        : function (ast) { return ast.visit(visitor, context); };
    nodes.forEach(function (ast) {
        var /** @type {?} */ astResult = visit(ast);
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
var Message = /** @class */ (function () {
    /**
     * @param source message AST
     * @param placeholders maps placeholder names to static content
     * @param placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param meaning
     * @param description
     * @param id
     */
    function Message(nodes, placeholders, placeholderToMessage, meaning, description, id) {
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
    return Message;
}());
var Text$1 = /** @class */ (function () {
    function Text(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return Text;
}());
var Container = /** @class */ (function () {
    function Container(children, sourceSpan) {
        this.children = children;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Container.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitContainer(this, context);
    };
    return Container;
}());
var Icu = /** @class */ (function () {
    function Icu(expression, type, cases, sourceSpan) {
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
    Icu.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitIcu(this, context);
    };
    return Icu;
}());
var TagPlaceholder = /** @class */ (function () {
    function TagPlaceholder(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
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
    TagPlaceholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitTagPlaceholder(this, context);
    };
    return TagPlaceholder;
}());
var Placeholder = /** @class */ (function () {
    function Placeholder(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Placeholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitPlaceholder(this, context);
    };
    return Placeholder;
}());
var IcuPlaceholder = /** @class */ (function () {
    function IcuPlaceholder(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    IcuPlaceholder.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        return visitor.visitIcuPlaceholder(this, context);
    };
    return IcuPlaceholder;
}());
var RecurseVisitor = /** @class */ (function () {
    function RecurseVisitor() {
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        container.children.forEach(function (child) { return child.visit(_this); });
    };
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        Object.keys(icu.cases).forEach(function (k) {
            icu.cases[k].visit(_this);
        });
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        ph.children.forEach(function (child) { return child.visit(_this); });
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) { };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    RecurseVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) { };
    return RecurseVisitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Text$2 = /** @class */ (function () {
    function Text(value) {
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    Text.prototype.visit = /**
     * @param {?} visitor
     * @return {?}
     */
    function (visitor) {
        return visitor.visitText(this);
    };
    return Text;
}());
var CR = /** @class */ (function (_super) {
    __extends(CR, _super);
    function CR(ws) {
        if (ws === void 0) { ws = 0; }
        return _super.call(this, "\n" + new Array(ws + 1).join(" ")) || this;
    }
    return CR;
}(Text$2));

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
var /**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
ParseLocation = /** @class */ (function () {
    function ParseLocation(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    /**
     * @return {?}
     */
    ParseLocation.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.offset != null ? this.line + ":" + this.col : "";
    };
    // Return the source around the location
    // Up to `maxChars` or `maxLines` on each side of the location
    /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    ParseLocation.prototype.getContext = /**
     * @param {?} maxChars
     * @param {?} maxLines
     * @return {?}
     */
    function (maxChars, maxLines) {
        var /** @type {?} */ content = this.file.content;
        var /** @type {?} */ startOffset = this.offset;
        if (startOffset != null) {
            if (startOffset > content.length - 1) {
                startOffset = content.length - 1;
            }
            var /** @type {?} */ endOffset = startOffset;
            var /** @type {?} */ ctxChars = 0;
            var /** @type {?} */ ctxLines = 0;
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
    };
    return ParseLocation;
}());
var ParseSourceFile = /** @class */ (function () {
    function ParseSourceFile(content, url) {
        if (url === void 0) { url = ""; }
        this.content = content;
        this.url = url;
    }
    return ParseSourceFile;
}());
var ParseSourceSpan = /** @class */ (function () {
    function ParseSourceSpan(start, end, details) {
        if (details === void 0) { details = null; }
        this.start = start;
        this.end = end;
        this.details = details;
    }
    /**
     * @return {?}
     */
    ParseSourceSpan.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    return ParseSourceSpan;
}());
/** @enum {number} */
var ParseErrorLevel = {
    WARNING: 0,
    ERROR: 1,
};
ParseErrorLevel[ParseErrorLevel.WARNING] = "WARNING";
ParseErrorLevel[ParseErrorLevel.ERROR] = "ERROR";
var ParseError = /** @class */ (function () {
    function ParseError(span, msg, level) {
        if (level === void 0) { level = ParseErrorLevel.ERROR; }
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    /**
     * @return {?}
     */
    ParseError.prototype.contextualMessage = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ ctx = this.span.start.getContext(100, 3);
        return ctx ? " (\"" + ctx.before + "[" + ParseErrorLevel[this.level] + " ->]" + ctx.after + "\")" : "";
    };
    /**
     * @return {?}
     */
    ParseError.prototype.toString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ details = this.span.details ? ", " + this.span.details : "";
        return "" + this.msg + this.contextualMessage() + ": " + this.span.start + details;
    };
    return ParseError;
}());
/**
 * An i18n error.
 */
var /**
 * An i18n error.
 */
I18nError = /** @class */ (function (_super) {
    __extends(I18nError, _super);
    function I18nError(span, msg) {
        return _super.call(this, span, msg) || this;
    }
    return I18nError;
}(ParseError));
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
var InterpolationConfig = /** @class */ (function () {
    function InterpolationConfig(start, end) {
        this.start = start;
        this.end = end;
    }
    return InterpolationConfig;
}());
var /** @type {?} */ DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig("{{", "}}");

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
var /** @type {?} */ $EOF = 0;
var /** @type {?} */ $TAB = 9;
var /** @type {?} */ $LF = 10;
var /** @type {?} */ $VTAB = 11;
var /** @type {?} */ $FF = 12;
var /** @type {?} */ $CR = 13;
var /** @type {?} */ $SPACE = 32;
var /** @type {?} */ $BANG = 33;
var /** @type {?} */ $DQ = 34;
var /** @type {?} */ $HASH = 35;
var /** @type {?} */ $$ = 36;
var /** @type {?} */ $PERCENT = 37;
var /** @type {?} */ $AMPERSAND = 38;
var /** @type {?} */ $SQ = 39;
var /** @type {?} */ $LPAREN = 40;
var /** @type {?} */ $RPAREN = 41;
var /** @type {?} */ $STAR = 42;
var /** @type {?} */ $PLUS = 43;
var /** @type {?} */ $COMMA = 44;
var /** @type {?} */ $MINUS = 45;
var /** @type {?} */ $PERIOD = 46;
var /** @type {?} */ $SLASH = 47;
var /** @type {?} */ $COLON = 58;
var /** @type {?} */ $SEMICOLON = 59;
var /** @type {?} */ $LT = 60;
var /** @type {?} */ $EQ = 61;
var /** @type {?} */ $GT = 62;
var /** @type {?} */ $QUESTION = 63;
var /** @type {?} */ $0 = 48;
var /** @type {?} */ $9 = 57;
var /** @type {?} */ $A = 65;
var /** @type {?} */ $E = 69;
var /** @type {?} */ $F = 70;
var /** @type {?} */ $X = 88;
var /** @type {?} */ $Z = 90;
var /** @type {?} */ $LBRACKET = 91;
var /** @type {?} */ $BACKSLASH = 92;
var /** @type {?} */ $RBRACKET = 93;
var /** @type {?} */ $CARET = 94;
var /** @type {?} */ $_ = 95;
var /** @type {?} */ $a = 97;
var /** @type {?} */ $e = 101;
var /** @type {?} */ $f = 102;
var /** @type {?} */ $n = 110;
var /** @type {?} */ $r = 114;
var /** @type {?} */ $t = 116;
var /** @type {?} */ $u = 117;
var /** @type {?} */ $v = 118;
var /** @type {?} */ $x = 120;
var /** @type {?} */ $z = 122;
var /** @type {?} */ $LBRACE = 123;
var /** @type {?} */ $BAR = 124;
var /** @type {?} */ $RBRACE = 125;
var /** @type {?} */ $NBSP = 160;
var /** @type {?} */ $BT = 96;
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
var TagContentType = {
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
    var /** @type {?} */ colonIndex = elementName.indexOf(":", 1);
    if (colonIndex === -1) {
        throw new Error("Unsupported format \"" + elementName + "\" expecting \":namespace:name\"");
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
    return prefix ? ":" + prefix + ":" + localName : localName;
}
// see http://www.w3.org/TR/html51/syntax.html#named-character-references
// see https://html.spec.whatwg.org/multipage/entities.json
// This list is not exhaustive to keep the compiler footprint low.
// The `&#123;` / `&#x1ab;` syntax should be used when the named character reference does not
// exist.
var /** @type {?} */ NAMED_ENTITIES = {
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
var /** @type {?} */ NGSP_UNICODE = "\uE500";
NAMED_ENTITIES["ngsp"] = NGSP_UNICODE;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TokenType = {
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
var Token = /** @class */ (function () {
    function Token(type, parts, sourceSpan) {
        this.type = type;
        this.parts = parts;
        this.sourceSpan = sourceSpan;
    }
    return Token;
}());
var TokenError = /** @class */ (function (_super) {
    __extends(TokenError, _super);
    function TokenError(errorMsg, tokenType, span) {
        var _this = _super.call(this, span, errorMsg) || this;
        _this.tokenType = tokenType;
        return _this;
    }
    return TokenError;
}(ParseError));
var TokenizeResult = /** @class */ (function () {
    function TokenizeResult(tokens, errors) {
        this.tokens = tokens;
        this.errors = errors;
    }
    return TokenizeResult;
}());
/**
 * @param {?} source
 * @param {?} url
 * @param {?} getTagDefinition
 * @param {?=} tokenizeExpansionForms
 * @param {?=} interpolationConfig
 * @return {?}
 */
function tokenize(source, url, getTagDefinition, tokenizeExpansionForms, interpolationConfig) {
    if (tokenizeExpansionForms === void 0) { tokenizeExpansionForms = false; }
    if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
    return new Tokenizer(new ParseSourceFile(source, url), getTagDefinition, tokenizeExpansionForms, interpolationConfig).tokenize();
}
var /** @type {?} */ _CR_OR_CRLF_REGEXP = /\r\n?/g;
/**
 * @param {?} charCode
 * @return {?}
 */
function _unexpectedCharacterErrorMsg(charCode) {
    var /** @type {?} */ char = charCode === $EOF ? "EOF" : String.fromCharCode(charCode);
    return "Unexpected character \"" + char + "\"";
}
/**
 * @param {?} entitySrc
 * @return {?}
 */
function _unknownEntityErrorMsg(entitySrc) {
    return "Unknown entity \"" + entitySrc + "\" - use the \"&#<decimal>;\" or  \"&#x<hex>;\" syntax";
}
var ControlFlowError = /** @class */ (function () {
    function ControlFlowError(error) {
        this.error = error;
    }
    return ControlFlowError;
}());
var Tokenizer = /** @class */ (function () {
    /**
     * @param _file The html source
     * @param _getTagDefinition
     * @param _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
     * @param _interpolationConfig
     */
    function Tokenizer(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig) {
        if (_interpolationConfig === void 0) { _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
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
    Tokenizer.prototype._processCarriageReturns = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        // http://www.w3.org/TR/html5/syntax.html#preprocessing-the-input-stream
        // In order to keep the original position in the source, we can not
        // pre-process it.
        // Instead CRs are processed right before instantiating the tokens.
        return content.replace(_CR_OR_CRLF_REGEXP, "\n");
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype.tokenize = /**
     * @return {?}
     */
    function () {
        while (this._peek !== $EOF) {
            var /** @type {?} */ start = this._getLocation();
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
    };
    /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    Tokenizer.prototype._tokenizeExpansionForm = /**
     * \@internal
     * @return {?} whether an ICU token has been created
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._getLocation = /**
     * @return {?}
     */
    function () {
        return new ParseLocation(this._file, this._index, this._line, this._column);
    };
    /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    Tokenizer.prototype._getSpan = /**
     * @param {?=} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        if (start === void 0) { start = this._getLocation(); }
        if (end === void 0) { end = this._getLocation(); }
        return new ParseSourceSpan(start, end);
    };
    /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    Tokenizer.prototype._beginToken = /**
     * @param {?} type
     * @param {?=} start
     * @return {?}
     */
    function (type, start) {
        if (start === void 0) { start = this._getLocation(); }
        this._currentTokenStart = start;
        this._currentTokenType = type;
    };
    /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    Tokenizer.prototype._endToken = /**
     * @param {?} parts
     * @param {?=} end
     * @return {?}
     */
    function (parts, end) {
        if (end === void 0) { end = this._getLocation(); }
        var /** @type {?} */ token = new Token(this._currentTokenType, parts, new ParseSourceSpan(this._currentTokenStart, end));
        this.tokens.push(token);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return token;
    };
    /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    Tokenizer.prototype._createError = /**
     * @param {?} msg
     * @param {?} span
     * @return {?}
     */
    function (msg, span) {
        if (this._isInExpansionForm()) {
            msg += " (Do you have an unescaped \"{\" in your template? Use \"{{ '{' }}\") to escape it.)";
        }
        var /** @type {?} */ error = new TokenError(msg, this._currentTokenType, span);
        this._currentTokenStart = /** @type {?} */ ((null));
        this._currentTokenType = /** @type {?} */ ((null));
        return new ControlFlowError(error);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._advance = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCode = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        if (this._peek === charCode) {
            this._advance();
            return true;
        }
        return false;
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCodeCaseInsensitive = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        if (compareCharCodeCaseInsensitive(this._peek, charCode)) {
            this._advance();
            return true;
        }
        return false;
    };
    /**
     * @param {?} charCode
     * @return {?}
     */
    Tokenizer.prototype._requireCharCode = /**
     * @param {?} charCode
     * @return {?}
     */
    function (charCode) {
        var /** @type {?} */ location = this._getLocation();
        if (!this._attemptCharCode(charCode)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location, location));
        }
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._attemptStr = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        var /** @type {?} */ len = chars.length;
        if (this._index + len > this._length) {
            return false;
        }
        var /** @type {?} */ initialPosition = this._savePosition();
        for (var /** @type {?} */ i = 0; i < len; i++) {
            if (!this._attemptCharCode(chars.charCodeAt(i))) {
                // If attempting to parse the string fails, we want to reset the parser
                // to where it was before the attempt
                this._restorePosition(initialPosition);
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._attemptStrCaseInsensitive = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        for (var /** @type {?} */ i = 0; i < chars.length; i++) {
            if (!this._attemptCharCodeCaseInsensitive(chars.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} chars
     * @return {?}
     */
    Tokenizer.prototype._requireStr = /**
     * @param {?} chars
     * @return {?}
     */
    function (chars) {
        var /** @type {?} */ location = this._getLocation();
        if (!this._attemptStr(chars)) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(location));
        }
    };
    /**
     * @param {?} predicate
     * @return {?}
     */
    Tokenizer.prototype._attemptCharCodeUntilFn = /**
     * @param {?} predicate
     * @return {?}
     */
    function (predicate) {
        while (!predicate(this._peek)) {
            this._advance();
        }
    };
    /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    Tokenizer.prototype._requireCharCodeUntilFn = /**
     * @param {?} predicate
     * @param {?} len
     * @return {?}
     */
    function (predicate, len) {
        var /** @type {?} */ start = this._getLocation();
        this._attemptCharCodeUntilFn(predicate);
        if (this._index - start.offset < len) {
            throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan(start, start));
        }
    };
    /**
     * @param {?} char
     * @return {?}
     */
    Tokenizer.prototype._attemptUntilChar = /**
     * @param {?} char
     * @return {?}
     */
    function (char) {
        while (this._peek !== char) {
            this._advance();
        }
    };
    /**
     * @param {?} decodeEntities
     * @return {?}
     */
    Tokenizer.prototype._readChar = /**
     * @param {?} decodeEntities
     * @return {?}
     */
    function (decodeEntities) {
        if (decodeEntities && this._peek === $AMPERSAND) {
            return this._decodeEntity();
        }
        else {
            var /** @type {?} */ index = this._index;
            this._advance();
            return this._input[index];
        }
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._decodeEntity = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this._getLocation();
        this._advance();
        if (this._attemptCharCode($HASH)) {
            var /** @type {?} */ isHex = this._attemptCharCode($x) || this._attemptCharCode($X);
            var /** @type {?} */ numberStart = this._getLocation().offset;
            this._attemptCharCodeUntilFn(isDigitEntityEnd);
            if (this._peek !== $SEMICOLON) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            this._advance();
            var /** @type {?} */ strNum = this._input.substring(numberStart, this._index - 1);
            try {
                var /** @type {?} */ charCode = parseInt(strNum, isHex ? 16 : 10);
                return String.fromCharCode(charCode);
            }
            catch (/** @type {?} */ e) {
                var /** @type {?} */ entity = this._input.substring(start.offset + 1, this._index - 1);
                throw this._createError(_unknownEntityErrorMsg(entity), this._getSpan(start));
            }
        }
        else {
            var /** @type {?} */ startPosition = this._savePosition();
            this._attemptCharCodeUntilFn(isNamedEntityEnd);
            if (this._peek !== $SEMICOLON) {
                this._restorePosition(startPosition);
                return "&";
            }
            this._advance();
            var /** @type {?} */ name_1 = this._input.substring(start.offset + 1, this._index - 1);
            var /** @type {?} */ char = NAMED_ENTITIES[name_1];
            if (!char) {
                throw this._createError(_unknownEntityErrorMsg(name_1), this._getSpan(start));
            }
            return char;
        }
    };
    /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    Tokenizer.prototype._consumeRawText = /**
     * @param {?} decodeEntities
     * @param {?} firstCharOfEnd
     * @param {?} attemptEndRest
     * @return {?}
     */
    function (decodeEntities, firstCharOfEnd, attemptEndRest) {
        var /** @type {?} */ tagCloseStart;
        var /** @type {?} */ textStart = this._getLocation();
        this._beginToken(decodeEntities ? TokenType.ESCAPABLE_RAW_TEXT : TokenType.RAW_TEXT, textStart);
        var /** @type {?} */ parts = [];
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
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeComment = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        this._beginToken(TokenType.COMMENT_START, start);
        this._requireCharCode($MINUS);
        this._endToken([]);
        var /** @type {?} */ textToken = this._consumeRawText(false, $MINUS, function () { return _this._attemptStr("->"); });
        this._beginToken(TokenType.COMMENT_END, textToken.sourceSpan.end);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeCdata = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var _this = this;
        this._beginToken(TokenType.CDATA_START, start);
        this._requireStr("CDATA[");
        this._endToken([]);
        var /** @type {?} */ textToken = this._consumeRawText(false, $RBRACKET, function () { return _this._attemptStr("]>"); });
        this._beginToken(TokenType.CDATA_END, textToken.sourceSpan.end);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeDocType = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.DOC_TYPE, start);
        this._attemptUntilChar($GT);
        this._advance();
        this._endToken([this._input.substring(start.offset + 2, this._index - 1)]);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumePrefixAndName = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ nameOrPrefixStart = this._index;
        var /** @type {?} */ prefix = /** @type {?} */ ((null));
        while (this._peek !== $COLON && !isPrefixEnd(this._peek)) {
            this._advance();
        }
        var /** @type {?} */ nameStart;
        if (this._peek === $COLON) {
            this._advance();
            prefix = this._input.substring(nameOrPrefixStart, this._index - 1);
            nameStart = this._index;
        }
        else {
            nameStart = nameOrPrefixStart;
        }
        this._requireCharCodeUntilFn(isNameEnd, this._index === nameStart ? 1 : 0);
        var /** @type {?} */ name = this._input.substring(nameStart, this._index);
        return [prefix, name];
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpen = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ savedPos = this._savePosition();
        var /** @type {?} */ tagName;
        var /** @type {?} */ lowercaseTagName;
        try {
            if (!isAsciiLetter(this._peek)) {
                throw this._createError(_unexpectedCharacterErrorMsg(this._peek), this._getSpan());
            }
            var /** @type {?} */ nameStart = this._index;
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
        var /** @type {?} */ contentTokenType = this._getTagDefinition(tagName).contentType;
        if (contentTokenType === TagContentType.RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, false);
        }
        else if (contentTokenType === TagContentType.ESCAPABLE_RAW_TEXT) {
            this._consumeRawTextWithTagClose(lowercaseTagName, true);
        }
    };
    /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    Tokenizer.prototype._consumeRawTextWithTagClose = /**
     * @param {?} lowercaseTagName
     * @param {?} decodeEntities
     * @return {?}
     */
    function (lowercaseTagName, decodeEntities) {
        var _this = this;
        var /** @type {?} */ textToken = this._consumeRawText(decodeEntities, $LT, function () {
            if (!_this._attemptCharCode($SLASH))
                return false;
            _this._attemptCharCodeUntilFn(isNotWhitespace);
            if (!_this._attemptStrCaseInsensitive(lowercaseTagName))
                return false;
            _this._attemptCharCodeUntilFn(isNotWhitespace);
            return _this._attemptCharCode($GT);
        });
        this._beginToken(TokenType.TAG_CLOSE, textToken.sourceSpan.end);
        this._endToken([/** @type {?} */ ((null)), lowercaseTagName]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpenStart = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.TAG_OPEN_START, start);
        var /** @type {?} */ parts = this._consumePrefixAndName();
        this._endToken(parts);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeAttributeName = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.ATTR_NAME);
        var /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._endToken(prefixAndName);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeAttributeValue = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.ATTR_VALUE);
        var /** @type {?} */ value;
        if (this._peek === $SQ || this._peek === $DQ) {
            var /** @type {?} */ quoteChar = this._peek;
            this._advance();
            var /** @type {?} */ parts = [];
            while (this._peek !== quoteChar) {
                parts.push(this._readChar(true));
            }
            value = parts.join("");
            this._advance();
        }
        else {
            var /** @type {?} */ valueStart = this._index;
            this._requireCharCodeUntilFn(isNameEnd, 1);
            value = this._input.substring(valueStart, this._index);
        }
        this._endToken([this._processCarriageReturns(value)]);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeTagOpenEnd = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ tokenType = this._attemptCharCode($SLASH) ? TokenType.TAG_OPEN_END_VOID : TokenType.TAG_OPEN_END;
        this._beginToken(tokenType);
        this._requireCharCode($GT);
        this._endToken([]);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Tokenizer.prototype._consumeTagClose = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this._beginToken(TokenType.TAG_CLOSE, start);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        var /** @type {?} */ prefixAndName = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._requireCharCode($GT);
        this._endToken(prefixAndName);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionFormStart = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_FORM_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([]);
        this._expansionCaseStack.push(TokenType.EXPANSION_FORM_START);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        var /** @type {?} */ condition = this._readUntil($COMMA);
        this._endToken([condition], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.RAW_TEXT, this._getLocation());
        var /** @type {?} */ type = this._readUntil($COMMA);
        this._endToken([type], this._getLocation());
        this._requireCharCode($COMMA);
        this._attemptCharCodeUntilFn(isNotWhitespace);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionCaseStart = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_CASE_VALUE, this._getLocation());
        var /** @type {?} */ value = this._readUntil($LBRACE).trim();
        this._endToken([value], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._beginToken(TokenType.EXPANSION_CASE_EXP_START, this._getLocation());
        this._requireCharCode($LBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.push(TokenType.EXPANSION_CASE_EXP_START);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionCaseEnd = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_CASE_EXP_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([], this._getLocation());
        this._attemptCharCodeUntilFn(isNotWhitespace);
        this._expansionCaseStack.pop();
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeExpansionFormEnd = /**
     * @return {?}
     */
    function () {
        this._beginToken(TokenType.EXPANSION_FORM_END, this._getLocation());
        this._requireCharCode($RBRACE);
        this._endToken([]);
        this._expansionCaseStack.pop();
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._consumeText = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this._getLocation();
        this._beginToken(TokenType.TEXT, start);
        var /** @type {?} */ parts = [];
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
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isTextEnd = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._savePosition = /**
     * @return {?}
     */
    function () {
        return [this._peek, this._index, this._column, this._line, this.tokens.length];
    };
    /**
     * @param {?} char
     * @return {?}
     */
    Tokenizer.prototype._readUntil = /**
     * @param {?} char
     * @return {?}
     */
    function (char) {
        var /** @type {?} */ start = this._index;
        this._attemptUntilChar(char);
        return this._input.substring(start, this._index);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    Tokenizer.prototype._restorePosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this._peek = position[0];
        this._index = position[1];
        this._column = position[2];
        this._line = position[3];
        var /** @type {?} */ nbTokens = position[4];
        if (nbTokens < this.tokens.length) {
            // remove any extra tokens
            this.tokens = this.tokens.slice(0, nbTokens);
        }
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isInExpansionCase = /**
     * @return {?}
     */
    function () {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_CASE_EXP_START);
    };
    /**
     * @return {?}
     */
    Tokenizer.prototype._isInExpansionForm = /**
     * @return {?}
     */
    function () {
        return (this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] === TokenType.EXPANSION_FORM_START);
    };
    return Tokenizer;
}());
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
    var /** @type {?} */ isInterpolationStart = interpolationConfig
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
    var /** @type {?} */ dstTokens = [];
    var /** @type {?} */ lastDstToken = undefined;
    for (var /** @type {?} */ i = 0; i < srcTokens.length; i++) {
        var /** @type {?} */ token = srcTokens[i];
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
var TreeError = /** @class */ (function (_super) {
    __extends(TreeError, _super);
    function TreeError(elementName, span, msg) {
        var _this = _super.call(this, span, msg) || this;
        _this.elementName = elementName;
        return _this;
    }
    /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    TreeError.create = /**
     * @param {?} elementName
     * @param {?} span
     * @param {?} msg
     * @return {?}
     */
    function (elementName, span, msg) {
        return new TreeError(elementName, span, msg);
    };
    return TreeError;
}(ParseError));
var ParseTreeResult = /** @class */ (function () {
    function ParseTreeResult(rootNodes, errors) {
        this.rootNodes = rootNodes;
        this.errors = errors;
    }
    return ParseTreeResult;
}());
var Parser = /** @class */ (function () {
    function Parser(getTagDefinition) {
        this.getTagDefinition = getTagDefinition;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parse = /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (source, url, parseExpansionForms, interpolationConfig) {
        if (parseExpansionForms === void 0) { parseExpansionForms = false; }
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
        var /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
        return new ParseTreeResult(treeAndErrors.rootNodes, (/** @type {?} */ (tokensAndErrors.errors)).concat(treeAndErrors.errors));
    };
    return Parser;
}());
var _TreeBuilder = /** @class */ (function () {
    function _TreeBuilder(tokens, getTagDefinition) {
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
    _TreeBuilder.prototype.build = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._advance = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ prev = this._peek;
        if (this._index < this.tokens.length - 1) {
            // Note: there is always an EOF token at the end
            this._index++;
        }
        this._peek = this.tokens[this._index];
        return prev;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    _TreeBuilder.prototype._advanceIf = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this._peek.type === type) {
            return this._advance();
        }
        return null;
    };
    /**
     * @param {?} startToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeCdata = /**
     * @param {?} startToken
     * @return {?}
     */
    function (startToken) {
        this._consumeText(this._advance());
        this._advanceIf(TokenType.CDATA_END);
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeComment = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ text = this._advanceIf(TokenType.RAW_TEXT);
        this._advanceIf(TokenType.COMMENT_END);
        var /** @type {?} */ value = text !== null ? text.parts[0].trim() : null;
        this._addToParent(new Comment(value, token.sourceSpan));
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeExpansion = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ switchValue = this._advance();
        var /** @type {?} */ type = this._advance();
        var /** @type {?} */ cases = [];
        // read =
        while (this._peek.type === TokenType.EXPANSION_CASE_VALUE) {
            var /** @type {?} */ expCase = this._parseExpansionCase();
            if (!expCase) {
                return;
            } // error
            cases.push(expCase);
        }
        // read the final }
        if (this._peek.type !== TokenType.EXPANSION_FORM_END) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
            return;
        }
        var /** @type {?} */ sourceSpan = new ParseSourceSpan(token.sourceSpan.start, this._peek.sourceSpan.end);
        this._addToParent(new Expansion(switchValue.parts[0], type.parts[0], cases, sourceSpan, switchValue.sourceSpan));
        this._advance();
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._parseExpansionCase = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ value = this._advance();
        // read {
        if (this._peek.type !== TokenType.EXPANSION_CASE_EXP_START) {
            this._errors.push(TreeError.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'."));
            return null;
        }
        // read until }
        var /** @type {?} */ start = this._advance();
        var /** @type {?} */ exp = this._collectExpansionExpTokens(start);
        if (!exp) {
            return null;
        }
        var /** @type {?} */ end = this._advance();
        exp.push(new Token(TokenType.EOF, [], end.sourceSpan));
        // parse everything in between { and }
        var /** @type {?} */ parsedExp = new _TreeBuilder(exp, this.getTagDefinition).build();
        if (parsedExp.errors.length > 0) {
            this._errors = this._errors.concat(/** @type {?} */ (parsedExp.errors));
            return null;
        }
        var /** @type {?} */ sourceSpan = new ParseSourceSpan(value.sourceSpan.start, end.sourceSpan.end);
        var /** @type {?} */ expSourceSpan = new ParseSourceSpan(start.sourceSpan.start, end.sourceSpan.end);
        return new ExpansionCase(value.parts[0], parsedExp.rootNodes, sourceSpan, value.sourceSpan, expSourceSpan);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    _TreeBuilder.prototype._collectExpansionExpTokens = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ exp = [];
        var /** @type {?} */ expansionFormStack = [TokenType.EXPANSION_CASE_EXP_START];
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
                    this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EXPANSION_FORM_END) {
                if (lastOnStack(expansionFormStack, TokenType.EXPANSION_FORM_START)) {
                    expansionFormStack.pop();
                }
                else {
                    this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                    return null;
                }
            }
            if (this._peek.type === TokenType.EOF) {
                this._errors.push(TreeError.create(null, start.sourceSpan, "Invalid ICU message. Missing '}'."));
                return null;
            }
            exp.push(this._advance());
        }
    };
    /**
     * @param {?} token
     * @return {?}
     */
    _TreeBuilder.prototype._consumeText = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        var /** @type {?} */ text = token.parts[0];
        if (text.length > 0 && text[0] === "\n") {
            var /** @type {?} */ parent_1 = this._getParentElement();
            if (parent_1 !== null && parent_1.children.length === 0 && this.getTagDefinition(parent_1.name).ignoreFirstLf) {
                text = text.substring(1);
            }
        }
        if (text.length > 0) {
            this._addToParent(new Text(text, token.sourceSpan));
        }
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._closeVoidElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ el = this._getParentElement();
        if (el && this.getTagDefinition(el.name).isVoid) {
            this._elementStack.pop();
        }
    };
    /**
     * @param {?} startTagToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeStartTag = /**
     * @param {?} startTagToken
     * @return {?}
     */
    function (startTagToken) {
        var /** @type {?} */ prefix = startTagToken.parts[0];
        var /** @type {?} */ name = startTagToken.parts[1];
        var /** @type {?} */ attrs = [];
        while (this._peek.type === TokenType.ATTR_NAME) {
            attrs.push(this._consumeAttr(this._advance()));
        }
        var /** @type {?} */ fullName = this._getElementFullName(prefix, name, this._getParentElement());
        var /** @type {?} */ selfClosing = false;
        // Note: There could have been a tokenizer error
        // so that we don't get a token for the end tag...
        if (this._peek.type === TokenType.TAG_OPEN_END_VOID) {
            this._advance();
            selfClosing = true;
            var /** @type {?} */ tagDef = this.getTagDefinition(fullName);
            if (!(tagDef.canSelfClose || getNsPrefix(fullName) !== null || tagDef.isVoid)) {
                this._errors.push(TreeError.create(fullName, startTagToken.sourceSpan, "Only void and foreign elements can be self closed \"" + startTagToken.parts[1] + "\""));
            }
        }
        else if (this._peek.type === TokenType.TAG_OPEN_END) {
            this._advance();
            selfClosing = false;
        }
        var /** @type {?} */ end = this._peek.sourceSpan.start;
        var /** @type {?} */ span = new ParseSourceSpan(startTagToken.sourceSpan.start, end);
        var /** @type {?} */ el = new Element(fullName, attrs, [], span, span, undefined);
        this._pushElement(el);
        if (selfClosing) {
            this._popElement(fullName);
            el.endSourceSpan = span;
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    _TreeBuilder.prototype._pushElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ parentEl = this._getParentElement();
        if (parentEl && this.getTagDefinition(parentEl.name).isClosedByChild(el.name)) {
            this._elementStack.pop();
        }
        var /** @type {?} */ tagDef = this.getTagDefinition(el.name);
        var _a = this._getParentElementSkippingContainers(), parent = _a.parent, container = _a.container;
        if (parent && tagDef.requireExtraParent(parent.name)) {
            var /** @type {?} */ newParent = new Element(tagDef.parentToAdd, [], [], el.sourceSpan, el.startSourceSpan, el.endSourceSpan);
            this._insertBeforeContainer(parent, container, newParent);
        }
        this._addToParent(el);
        this._elementStack.push(el);
    };
    /**
     * @param {?} endTagToken
     * @return {?}
     */
    _TreeBuilder.prototype._consumeEndTag = /**
     * @param {?} endTagToken
     * @return {?}
     */
    function (endTagToken) {
        var /** @type {?} */ fullName = this._getElementFullName(endTagToken.parts[0], endTagToken.parts[1], this._getParentElement());
        if (this._getParentElement()) {
            /** @type {?} */ ((this._getParentElement())).endSourceSpan = endTagToken.sourceSpan;
        }
        if (this.getTagDefinition(fullName).isVoid) {
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, "Void elements do not have end tags \"" + endTagToken.parts[1] + "\""));
        }
        else if (!this._popElement(fullName)) {
            var /** @type {?} */ errMsg = "Unexpected closing tag \"" + fullName + "\". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags";
            this._errors.push(TreeError.create(fullName, endTagToken.sourceSpan, errMsg));
        }
    };
    /**
     * @param {?} fullName
     * @return {?}
     */
    _TreeBuilder.prototype._popElement = /**
     * @param {?} fullName
     * @return {?}
     */
    function (fullName) {
        for (var /** @type {?} */ stackIndex = this._elementStack.length - 1; stackIndex >= 0; stackIndex--) {
            var /** @type {?} */ el = this._elementStack[stackIndex];
            if (el.name === fullName) {
                this._elementStack.splice(stackIndex, this._elementStack.length - stackIndex);
                return true;
            }
            if (!this.getTagDefinition(el.name).closedByParent) {
                return false;
            }
        }
        return false;
    };
    /**
     * @param {?} attrName
     * @return {?}
     */
    _TreeBuilder.prototype._consumeAttr = /**
     * @param {?} attrName
     * @return {?}
     */
    function (attrName) {
        var /** @type {?} */ fullName = mergeNsAndName(attrName.parts[0], attrName.parts[1]);
        var /** @type {?} */ end = attrName.sourceSpan.end;
        var /** @type {?} */ value = "";
        var /** @type {?} */ valueSpan = /** @type {?} */ ((undefined));
        if (this._peek.type === TokenType.ATTR_VALUE) {
            var /** @type {?} */ valueToken = this._advance();
            value = valueToken.parts[0];
            end = valueToken.sourceSpan.end;
            valueSpan = valueToken.sourceSpan;
        }
        return new Attribute(fullName, value, new ParseSourceSpan(attrName.sourceSpan.start, end), valueSpan);
    };
    /**
     * @return {?}
     */
    _TreeBuilder.prototype._getParentElement = /**
     * @return {?}
     */
    function () {
        return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
    };
    /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    _TreeBuilder.prototype._getParentElementSkippingContainers = /**
     * Returns the parent in the DOM and the container.
     *
     * `<ng-container>` elements are skipped as they are not rendered as DOM element.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = null;
        for (var /** @type {?} */ i = this._elementStack.length - 1; i >= 0; i--) {
            if (!isNgContainer(this._elementStack[i].name)) {
                return { parent: this._elementStack[i], container: container };
            }
            container = this._elementStack[i];
        }
        return { parent: null, container: container };
    };
    /**
     * @param {?} node
     * @return {?}
     */
    _TreeBuilder.prototype._addToParent = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var /** @type {?} */ parent = this._getParentElement();
        if (parent !== null) {
            parent.children.push(node);
        }
        else {
            this._rootNodes.push(node);
        }
    };
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
    _TreeBuilder.prototype._insertBeforeContainer = /**
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
    function (parent, container, node) {
        if (!container) {
            this._addToParent(node);
            this._elementStack.push(node);
        }
        else {
            if (parent) {
                // replace the container with the new node in the children
                var /** @type {?} */ index = parent.children.indexOf(container);
                parent.children[index] = node;
            }
            else {
                this._rootNodes.push(node);
            }
            node.children.push(container);
            this._elementStack.splice(this._elementStack.indexOf(container), 0, node);
        }
    };
    /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    _TreeBuilder.prototype._getElementFullName = /**
     * @param {?} prefix
     * @param {?} localName
     * @param {?} parentElement
     * @return {?}
     */
    function (prefix, localName, parentElement) {
        if (prefix === null) {
            prefix = /** @type {?} */ ((this.getTagDefinition(localName).implicitNamespacePrefix));
            if (prefix === null && parentElement !== null) {
                prefix = getNsPrefix(parentElement.name);
            }
        }
        return mergeNsAndName(prefix, localName);
    };
    return _TreeBuilder;
}());
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
var XmlTagDefinition = /** @class */ (function () {
    function XmlTagDefinition() {
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
    XmlTagDefinition.prototype.requireExtraParent = /**
     * @param {?} currentParent
     * @return {?}
     */
    function (currentParent) {
        return false;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    XmlTagDefinition.prototype.isClosedByChild = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return false;
    };
    return XmlTagDefinition;
}());
var /** @type {?} */ _TAG_DEFINITION = new XmlTagDefinition();
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
var HtmlTagDefinition = /** @class */ (function () {
    function HtmlTagDefinition(_a) {
        var _b = _a === void 0 ? {} : _a, closedByChildren = _b.closedByChildren, requiredParents = _b.requiredParents, implicitNamespacePrefix = _b.implicitNamespacePrefix, _c = _b.contentType, contentType = _c === void 0 ? TagContentType.PARSABLE_DATA : _c, _d = _b.closedByParent, closedByParent = _d === void 0 ? false : _d, _e = _b.isVoid, isVoid = _e === void 0 ? false : _e, _f = _b.ignoreFirstLf, ignoreFirstLf = _f === void 0 ? false : _f;
        var _this = this;
        this.closedByChildren = {};
        this.closedByParent = false;
        this.canSelfClose = false;
        if (closedByChildren && closedByChildren.length > 0) {
            closedByChildren.forEach(function (tagName) { return _this.closedByChildren[tagName] = true; });
        }
        this.isVoid = isVoid;
        this.closedByParent = closedByParent || isVoid;
        if (requiredParents && requiredParents.length > 0) {
            this.requiredParents = {};
            // The first parent is the list is automatically when none of the listed parents are present
            this.parentToAdd = requiredParents[0];
            requiredParents.forEach(function (tagName) { return _this.requiredParents[tagName] = true; });
        }
        this.implicitNamespacePrefix = implicitNamespacePrefix || null;
        this.contentType = contentType;
        this.ignoreFirstLf = ignoreFirstLf;
    }
    /**
     * @param {?} currentParent
     * @return {?}
     */
    HtmlTagDefinition.prototype.requireExtraParent = /**
     * @param {?} currentParent
     * @return {?}
     */
    function (currentParent) {
        if (!this.requiredParents) {
            return false;
        }
        if (!currentParent) {
            return true;
        }
        var /** @type {?} */ lcParent = currentParent.toLowerCase();
        var /** @type {?} */ isParentTemplate = lcParent === 'template' || currentParent === 'ng-template';
        return !isParentTemplate && this.requiredParents[lcParent] !== true;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    HtmlTagDefinition.prototype.isClosedByChild = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.isVoid || name.toLowerCase() in this.closedByChildren;
    };
    return HtmlTagDefinition;
}());
// see http://www.w3.org/TR/html51/syntax.html#optional-tags
// This implementation does not fully conform to the HTML5 spec.
var /** @type {?} */ TAG_DEFINITIONS = {
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
var /** @type {?} */ _DEFAULT_TAG_DEFINITION = new HtmlTagDefinition();
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
var /**
 * A simple mapper that take a function to transform an internal name to a public name
 */
SimplePlaceholderMapper = /** @class */ (function (_super) {
    __extends(SimplePlaceholderMapper, _super);
    // create a mapping from the message
    function SimplePlaceholderMapper(message, mapName) {
        var _this = _super.call(this) || this;
        _this.mapName = mapName;
        _this.internalToPublic = {};
        _this.publicToNextId = {};
        _this.publicToInternal = {};
        message.nodes.forEach(function (node) { return node.visit(_this); });
        return _this;
    }
    /**
     * @param {?} internalName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.toPublicName = /**
     * @param {?} internalName
     * @return {?}
     */
    function (internalName) {
        return this.internalToPublic.hasOwnProperty(internalName) ? this.internalToPublic[internalName] : null;
    };
    /**
     * @param {?} publicName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.toInternalName = /**
     * @param {?} publicName
     * @return {?}
     */
    function (publicName) {
        return this.publicToInternal.hasOwnProperty(publicName) ? this.publicToInternal[publicName] : null;
    };
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) {
        return null;
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.startName);
        _super.prototype.visitTagPlaceholder.call(this, ph, context);
        this.visitPlaceholderName(ph.closeName);
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.name);
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        this.visitPlaceholderName(ph.name);
    };
    /**
     * @param {?} internalName
     * @return {?}
     */
    SimplePlaceholderMapper.prototype.visitPlaceholderName = /**
     * @param {?} internalName
     * @return {?}
     */
    function (internalName) {
        if (!internalName || this.internalToPublic.hasOwnProperty(internalName)) {
            return;
        }
        var /** @type {?} */ publicName = this.mapName(internalName);
        if (this.publicToInternal.hasOwnProperty(publicName)) {
            // Create a new XMB when it has already been used
            var /** @type {?} */ nextId = this.publicToNextId[publicName];
            this.publicToNextId[publicName] = nextId + 1;
            publicName = publicName + "_" + nextId;
        }
        else {
            this.publicToNextId[publicName] = 1;
        }
        this.internalToPublic[internalName] = publicName;
        this.publicToInternal[publicName] = internalName;
    };
    return SimplePlaceholderMapper;
}(RecurseVisitor));
var /** @type {?} */ i18nSelectPipe = new I18nSelectPipe();
var SerializerVisitor = /** @class */ (function () {
    function SerializerVisitor(locale, params) {
        this.params = params;
        this.i18nPluralPipe = new I18nPluralPipe(new NgLocaleLocalization(locale));
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        if (getHtmlTagDefinition(element.name).isVoid) {
            return "<" + element.name + this.serializeNodes(element.attrs, " ") + "/>";
        }
        return "<" + element.name + this.serializeNodes(element.attrs, " ") + ">" + this.serializeNodes(element.children) + "</" + element.name + ">";
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        return attribute.name + "=\"" + attribute.value + "\"";
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return "<!--" + comment.value + "-->";
    };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) {
        var _this = this;
        var /** @type {?} */ cases = {};
        expansion.cases.forEach(function (c) { return (cases[c.value] = _this.serializeNodes(c.expression)); });
        switch (expansion.type) {
            case "select":
                return i18nSelectPipe.transform(this.params[expansion.switchValue] || "", cases);
            case "plural":
                return this.i18nPluralPipe.transform(this.params[expansion.switchValue], cases);
        }
        throw new Error("Unknown expansion type \"" + expansion.type + "\"");
    };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) {
        return " " + expansionCase.value + " {" + this.serializeNodes(expansionCase.expression) + "}";
    };
    /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    SerializerVisitor.prototype.serializeNodes = /**
     * @param {?} nodes
     * @param {?=} join
     * @return {?}
     */
    function (nodes, join) {
        var _this = this;
        if (join === void 0) { join = ""; }
        if (nodes.length === 0) {
            return "";
        }
        return join + nodes.map(function (a) { return a.visit(_this, null); }).join(join);
    };
    return SerializerVisitor;
}());
/**
 * @param {?} nodes
 * @param {?} locale
 * @param {?} params
 * @return {?}
 */
function serializeNodes(nodes, locale, params) {
    return nodes.map(function (node) { return node.visit(new SerializerVisitor(locale, params), null); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} message
 * @return {?}
 */
function digest(message) {
    return message.id || sha1(serializeNodes$1(message.nodes).join("") + ("[" + message.meaning + "]"));
}
/**
 * @param {?} message
 * @return {?}
 */
function decimalDigest(message) {
    if (message.id) {
        return message.id;
    }
    var /** @type {?} */ visitor = new SerializerIgnoreIcuExpVisitor();
    var /** @type {?} */ parts = message.nodes.map(function (a) { return a.visit(visitor, null); });
    return computeMsgId(parts.join(""), message.meaning);
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
var /**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * \@internal
 */
SerializerVisitor$1 = /** @class */ (function () {
    function SerializerVisitor() {
    }
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        return "[" + container.children.map(function (child) { return child.visit(_this); }).join(", ") + "]";
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ strCases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        return "{" + icu.expression + ", " + icu.type + ", " + strCases.join(", ") + "}";
    };
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        return ph.isVoid
            ? "<ph tag name=\"" + ph.startName + "\"/>"
            : "<ph tag name=\"" + ph.startName + "\">" + ph.children.map(function (child) { return child.visit(_this); }).join(", ") + "</ph name=\"" + ph.closeName + "\">";
    };
    /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?} context
     * @return {?}
     */
    function (ph, context) {
        return ph.value ? "<ph name=\"" + ph.name + "\">" + ph.value + "</ph>" : "<ph name=\"" + ph.name + "\"/>";
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    SerializerVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        return "<ph icu name=\"" + ph.name + "\">" + ph.value.visit(this) + "</ph>";
    };
    return SerializerVisitor;
}());
var /** @type {?} */ serializerVisitor = new SerializerVisitor$1();
/**
 * @param {?} nodes
 * @return {?}
 */
function serializeNodes$1(nodes) {
    return nodes.map(function (a) { return a.visit(serializerVisitor, null); });
}
/**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
var /**
 * Serialize the i18n html to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * \@internal
 */
SerializerIgnoreIcuExpVisitor = /** @class */ (function (_super) {
    __extends(SerializerIgnoreIcuExpVisitor, _super);
    function SerializerIgnoreIcuExpVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    SerializerIgnoreIcuExpVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ strCases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        // Do not take the expression into account
        return "{" + icu.type + ", " + strCases.join(", ") + "}";
    };
    return SerializerIgnoreIcuExpVisitor;
}(SerializerVisitor$1));
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
    var /** @type {?} */ utf8 = utf8Encode(str);
    var /** @type {?} */ words32 = stringToWords32(utf8, Endian.Big);
    var /** @type {?} */ len = utf8.length * 8;
    var /** @type {?} */ w = new Array(80);
    var _a = __read([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], 5), a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4];
    words32[len >> 5] |= 0x80 << (24 - len % 32);
    words32[(((len + 64) >> 9) << 4) + 15] = len;
    for (var /** @type {?} */ i = 0; i < words32.length; i += 16) {
        var _b = __read([a, b, c, d, e], 5), h0 = _b[0], h1 = _b[1], h2 = _b[2], h3 = _b[3], h4 = _b[4];
        for (var /** @type {?} */ j = 0; j < 80; j++) {
            /* tslint:disable-next-line */
            if (j < 16) {
                w[j] = words32[i + j];
            }
            else {
                w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            var _c = __read(fk(j, b, c, d), 2), f = _c[0], k = _c[1];
            var /** @type {?} */ temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
            _d = __read([d, c, rol32(b, 30), a, temp], 5), e = _d[0], d = _d[1], c = _d[2], b = _d[3], a = _d[4];
        }
        _e = __read([add32(a, h0), add32(b, h1), add32(c, h2), add32(d, h3), add32(e, h4)], 5), a = _e[0], b = _e[1], c = _e[2], d = _e[3], e = _e[4];
    }
    return byteStringToHexString(words32ToByteString([a, b, c, d, e]));
    var _d, _e;
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
    var /** @type {?} */ utf8 = utf8Encode(str);
    var _a = __read([hash32(utf8, 0), hash32(utf8, 102072)], 2), hi = _a[0], lo = _a[1];
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
    var _a = __read(fingerprint(msg), 2), hi = _a[0], lo = _a[1];
    if (meaning) {
        var _b = __read(fingerprint(meaning), 2), him = _b[0], lom = _b[1];
        _c = __read(add64(rol64([hi, lo], 1), [him, lom]), 2), hi = _c[0], lo = _c[1];
    }
    return byteStringToDecString(words32ToByteString([hi & 0x7fffffff, lo]));
    var _c;
}
/**
 * @param {?} str
 * @param {?} c
 * @return {?}
 */
function hash32(str, c) {
    var _a = __read([0x9e3779b9, 0x9e3779b9], 2), a = _a[0], b = _a[1];
    var /** @type {?} */ i;
    var /** @type {?} */ len = str.length;
    for (i = 0; i + 12 <= len; i += 12) {
        a = add32(a, wordAt(str, i, Endian.Little));
        b = add32(b, wordAt(str, i + 4, Endian.Little));
        c = add32(c, wordAt(str, i + 8, Endian.Little));
        _b = __read(mix([a, b, c]), 3), a = _b[0], b = _b[1], c = _b[2];
    }
    a = add32(a, wordAt(str, i, Endian.Little));
    b = add32(b, wordAt(str, i + 4, Endian.Little));
    // the first byte of c is reserved for the length
    c = add32(c, len);
    c = add32(c, wordAt(str, i + 8, Endian.Little) << 8);
    return mix([a, b, c])[2];
    var _b;
}
/**
 * @param {?} __0
 * @return {?}
 */
function mix(_a) {
    var _b = __read(_a, 3), a = _b[0], b = _b[1], c = _b[2];
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
var Endian = {
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
    var /** @type {?} */ low = (a & 0xffff) + (b & 0xffff);
    var /** @type {?} */ high = (a >>> 16) + (b >>> 16) + (low >>> 16);
    return [high >>> 16, (high << 16) | (low & 0xffff)];
}
/**
 * @param {?} __0
 * @param {?} __1
 * @return {?}
 */
function add64(_a, _b) {
    var _c = __read(_a, 2), ah = _c[0], al = _c[1];
    var _d = __read(_b, 2), bh = _d[0], bl = _d[1];
    var _e = __read(add32to64(al, bl), 2), carry = _e[0], l = _e[1];
    var /** @type {?} */ h = add32(add32(ah, bh), carry);
    return [h, l];
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sub32(a, b) {
    var /** @type {?} */ low = (a & 0xffff) - (b & 0xffff);
    var /** @type {?} */ high = (a >> 16) - (b >> 16) + (low >> 16);
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
function rol64(_a, count) {
    var _b = __read(_a, 2), hi = _b[0], lo = _b[1];
    var /** @type {?} */ h = (hi << count) | (lo >>> (32 - count));
    var /** @type {?} */ l = (lo << count) | (hi >>> (32 - count));
    return [h, l];
}
/**
 * @param {?} str
 * @param {?} endian
 * @return {?}
 */
function stringToWords32(str, endian) {
    var /** @type {?} */ words32 = Array((str.length + 3) >>> 2);
    for (var /** @type {?} */ i = 0; i < words32.length; i++) {
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
    var /** @type {?} */ word = 0;
    if (endian === Endian.Big) {
        for (var /** @type {?} */ i = 0; i < 4; i++) {
            word += byteAt(str, index + i) << (24 - 8 * i);
        }
    }
    else {
        for (var /** @type {?} */ i = 0; i < 4; i++) {
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
    return words32.reduce(function (str, word) { return str + word32ToByteString(word); }, "");
}
/**
 * @param {?} word
 * @return {?}
 */
function word32ToByteString(word) {
    var /** @type {?} */ str = "";
    for (var /** @type {?} */ i = 0; i < 4; i++) {
        str += String.fromCharCode((word >>> (8 * (3 - i))) & 0xff);
    }
    return str;
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToHexString(str) {
    var /** @type {?} */ hex = "";
    for (var /** @type {?} */ i = 0; i < str.length; i++) {
        var /** @type {?} */ b = byteAt(str, i);
        hex += (b >>> 4).toString(16) + (b & 0x0f).toString(16);
    }
    return hex.toLowerCase();
}
/**
 * @param {?} str
 * @return {?}
 */
function byteStringToDecString(str) {
    var /** @type {?} */ decimal = "";
    var /** @type {?} */ toThePower = "1";
    for (var /** @type {?} */ i = str.length - 1; i >= 0; i--) {
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
    var /** @type {?} */ sum = "";
    var /** @type {?} */ len = Math.max(x.length, y.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ carry = 0; i < len || carry; i++) {
        var /** @type {?} */ tmpSum = carry + +(x[i] || 0) + +(y[i] || 0);
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
    var /** @type {?} */ product = "";
    var /** @type {?} */ bToThePower = b;
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
    var /** @type {?} */ encoded = "";
    for (var /** @type {?} */ index = 0; index < str.length; index++) {
        var /** @type {?} */ codePoint = str.charCodeAt(index);
        // decode surrogate
        // see https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        if (codePoint >= 0xd800 && codePoint <= 0xdbff && str.length > index + 1) {
            var /** @type {?} */ low = str.charCodeAt(index + 1);
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
var /** @type {?} */ _PLACEHOLDER_TAG = "x";
var /** @type {?} */ _FILE_TAG = "file";
var /** @type {?} */ _SOURCE_TAG = "source";
var /** @type {?} */ _TARGET_TAG = "target";
var /** @type {?} */ _UNIT_TAG = "trans-unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliffLoadToI18n(content) {
    // xliff to xml nodes
    var /** @type {?} */ xliffParser = new XliffParser();
    var _a = xliffParser.parse(content), msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
    // xml nodes to i18n messages
    var /** @type {?} */ i18nMessagesById = {};
    var /** @type {?} */ converter = new XmlToI18n();
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, e = _a.errors;
        errors.push.apply(errors, __spread(e));
        i18nMessagesById[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error("xliff parse errors:\n" + errors.join("\n"));
    }
    return i18nMessagesById;
}
var /** @type {?} */ xliffDigest = digest;
var XliffParser = /** @class */ (function () {
    function XliffParser() {
    }
    /**
     * @param {?} content
     * @return {?}
     */
    XliffParser.prototype.parse = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        var /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _UNIT_TAG:
                this._unitMlString = /** @type {?} */ ((null));
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _UNIT_TAG + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, "Message " + id + " misses a translation");
                        }
                    }
                }
                break;
            case _SOURCE_TAG:
                // ignore source message
                break;
            case _TARGET_TAG:
                var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                var /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
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
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    XliffParser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XliffParser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XliffParser;
}());
var XmlToI18n = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        if (el.name === _PLACEHOLDER_TAG) {
            var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "id"; });
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"id\" attribute");
        }
        else {
            this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XmlToI18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _PLACEHOLDER_TAG$1 = "ph";
var /** @type {?} */ _PLACEHOLDER_SPANNING_TAG = "pc";
var /** @type {?} */ _XLIFF_TAG = "xliff";
var /** @type {?} */ _SOURCE_TAG$1 = "source";
var /** @type {?} */ _TARGET_TAG$1 = "target";
var /** @type {?} */ _UNIT_TAG$1 = "unit";
/**
 * @param {?} content
 * @return {?}
 */
function xliff2LoadToI18n(content) {
    // xliff to xml nodes
    var /** @type {?} */ xliff2Parser = new Xliff2Parser();
    var _a = xliff2Parser.parse(content), msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
    // xml nodes to i18n nodes
    var /** @type {?} */ i18nNodesByMsgId = {};
    var /** @type {?} */ converter = new XmlToI18n$1();
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, e = _a.errors;
        errors.push.apply(errors, __spread(e));
        i18nNodesByMsgId[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error("xliff2 parse errors:\n" + errors.join("\n"));
    }
    return i18nNodesByMsgId;
}
var /** @type {?} */ xliff2Digest = decimalDigest;
var Xliff2Parser = /** @class */ (function () {
    function Xliff2Parser() {
    }
    /**
     * @param {?} content
     * @return {?}
     */
    Xliff2Parser.prototype.parse = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this._unitMlString = null;
        this._msgIdToHtml = {};
        var /** @type {?} */ parser = new Parser(getXmlTagDefinition).parse(content, "", false);
        this._errors = parser.errors;
        visitAll(this, parser.rootNodes, null);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _UNIT_TAG$1:
                this._unitMlString = null;
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _UNIT_TAG$1 + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        visitAll(this, element.children, null);
                        if (typeof this._unitMlString === "string") {
                            this._msgIdToHtml[id] = this._unitMlString;
                        }
                        else {
                            this._addError(element, "Message " + id + " misses a translation");
                        }
                    }
                }
                break;
            case _SOURCE_TAG$1:
                // ignore source message
                break;
            case _TARGET_TAG$1:
                var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                var /** @type {?} */ innerText = content.slice(innerTextStart, innerTextEnd);
                this._unitMlString = innerText;
                break;
            case _XLIFF_TAG:
                var /** @type {?} */ versionAttr = element.attrs.find(function (attr) { return attr.name === "version"; });
                if (versionAttr) {
                    var /** @type {?} */ version = versionAttr.value;
                    if (version !== "2.0") {
                        this._addError(element, "The XLIFF file version " + version + " is not compatible with XLIFF 2.0 serializer");
                    }
                    else {
                        visitAll(this, element.children, null);
                    }
                }
                break;
            default:
                visitAll(this, element.children, null);
        }
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    Xliff2Parser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    Xliff2Parser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return Xliff2Parser;
}());
var XmlToI18n$1 = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : [].concat.apply([], __spread(visitAll(this, xmlIcu.rootNodes)));
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, text.sourceSpan);
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var _this = this;
        switch (el.name) {
            case _PLACEHOLDER_TAG$1:
                var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "equiv"; });
                if (nameAttr) {
                    return [new Placeholder("", nameAttr.value, el.sourceSpan)];
                }
                this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equiv\" attribute");
                break;
            case _PLACEHOLDER_SPANNING_TAG:
                var /** @type {?} */ startAttr = el.attrs.find(function (attr) { return attr.name === "equivStart"; });
                var /** @type {?} */ endAttr = el.attrs.find(function (attr) { return attr.name === "equivEnd"; });
                if (!startAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equivStart\" attribute");
                }
                else if (!endAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG$1 + "> misses the \"equivEnd\" attribute");
                }
                else {
                    var /** @type {?} */ startId = startAttr.value;
                    var /** @type {?} */ endId = endAttr.value;
                    var /** @type {?} */ nodes = [];
                    return nodes.concat.apply(nodes, __spread([new Placeholder("", startId, el.sourceSpan)], el.children.map(function (node) { return node.visit(_this, null); }), [new Placeholder("", endId, el.sourceSpan)]));
                }
                break;
            default:
                this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: [].concat.apply([], __spread(visitAll(this, icuCase.expression)))
        };
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(node.sourceSpan, message));
    };
    return XmlToI18n;
}());

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
var /** @type {?} */ _TRANSLATIONS_TAG = "translationbundle";
var /** @type {?} */ _TRANSLATION_TAG = "translation";
var /** @type {?} */ _PLACEHOLDER_TAG$3 = "ph";
/**
 * @param {?} content
 * @return {?}
 */
function xtbLoadToI18n(content) {
    // xtb to xml nodes
    var /** @type {?} */ xtbParser = new XtbParser();
    var _a = xtbParser.parse(content), msgIdToHtml = _a.msgIdToHtml, parseErrors = _a.errors;
    if (parseErrors.length) {
        throw new Error("xtb parse errors:\n" + parseErrors.join("\n"));
    }
    // xml nodes to i18n nodes
    var /** @type {?} */ i18nNodesByMsgId = {};
    var /** @type {?} */ converter = new XmlToI18n$2();
    // Because we should be able to load xtb files that rely on features not supported by angular,
    // we need to delay the conversion of html to i18n nodes so that non angular messages are not
    // converted
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var /** @type {?} */ valueFn = function () {
            var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, errors = _a.errors;
            if (errors.length) {
                throw new Error("xtb parse errors:\n" + errors.join("\n"));
            }
            return i18nNodes;
        };
        createLazyProperty(i18nNodesByMsgId, msgId, valueFn);
    });
    return i18nNodesByMsgId;
}
var /** @type {?} */ xtbDigest = digest;
var /** @type {?} */ xtbMapper = xmbMapper;
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
        get: function () {
            var /** @type {?} */ value = valueFn();
            Object.defineProperty(messages, id, { enumerable: true, value: value });
            return value;
        },
        set: function (_) {
            throw new Error("Could not overwrite an XTB translation");
        }
    });
}
var XtbParser = /** @class */ (function () {
    function XtbParser() {
    }
    /**
     * @param {?} xtb
     * @return {?}
     */
    XtbParser.prototype.parse = /**
     * @param {?} xtb
     * @return {?}
     */
    function (xtb) {
        this._bundleDepth = 0;
        this._msgIdToHtml = {};
        // We can not parse the ICU messages at this point as some messages might not originate
        // from Angular that could not be lex'd.
        var /** @type {?} */ xml = new Parser(getXmlTagDefinition).parse(xtb, "", false);
        this._errors = xml.errors;
        visitAll(this, xml.rootNodes);
        return {
            msgIdToHtml: this._msgIdToHtml,
            errors: this._errors
        };
    };
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitElement = /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    function (element, context) {
        switch (element.name) {
            case _TRANSLATIONS_TAG:
                this._bundleDepth++;
                if (this._bundleDepth > 1) {
                    this._addError(element, "<" + _TRANSLATIONS_TAG + "> elements can not be nested");
                }
                visitAll(this, element.children, null);
                this._bundleDepth--;
                break;
            case _TRANSLATION_TAG:
                var /** @type {?} */ idAttr = element.attrs.find(function (attr) { return attr.name === "id"; });
                if (!idAttr) {
                    this._addError(element, "<" + _TRANSLATION_TAG + "> misses the \"id\" attribute");
                }
                else {
                    var /** @type {?} */ id = idAttr.value;
                    if (this._msgIdToHtml.hasOwnProperty(id)) {
                        this._addError(element, "Duplicated translations for msg " + id);
                    }
                    else {
                        var /** @type {?} */ innerTextStart = /** @type {?} */ ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = /** @type {?} */ ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = /** @type {?} */ ((element.startSourceSpan)).start.file.content;
                        var /** @type {?} */ innerText = content.slice(/** @type {?} */ ((innerTextStart)), /** @type {?} */ ((innerTextEnd)));
                        this._msgIdToHtml[id] = innerText;
                    }
                }
                break;
            default:
                this._addError(element, "Unexpected tag");
        }
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) { };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitExpansion = /**
     * @param {?} expansion
     * @param {?} context
     * @return {?}
     */
    function (expansion, context) { };
    /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    XtbParser.prototype.visitExpansionCase = /**
     * @param {?} expansionCase
     * @param {?} context
     * @return {?}
     */
    function (expansionCase, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XtbParser.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XtbParser;
}());
var XmlToI18n$2 = /** @class */ (function () {
    function XmlToI18n() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype.convert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ xmlIcu = new Parser(getXmlTagDefinition).parse(message, "", true);
        this._errors = xmlIcu.errors;
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : visitAll(this, xmlIcu.rootNodes);
        return {
            i18nNodes: i18nNodes,
            errors: this._errors
        };
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return new Text$1(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var /** @type {?} */ caseMap = {};
        visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new Container(c.nodes, icu.sourceSpan);
        });
        return new Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        return {
            value: icuCase.value,
            nodes: visitAll(this, icuCase.expression)
        };
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        if (el.name === _PLACEHOLDER_TAG$3) {
            var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "name"; });
            if (nameAttr) {
                return new Placeholder("", nameAttr.value, /** @type {?} */ ((el.sourceSpan)));
            }
            this._addError(el, "<" + _PLACEHOLDER_TAG$3 + "> misses the \"name\" attribute");
        }
        else {
            this._addError(el, "Unexpected tag");
        }
        return null;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) { };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    XmlToI18n.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) { };
    /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    XmlToI18n.prototype._addError = /**
     * @param {?} node
     * @param {?} message
     * @return {?}
     */
    function (node, message) {
        this._errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), message));
    };
    return XmlToI18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ParserError = /** @class */ (function () {
    function ParserError(message, input, errLocation, ctxLocation) {
        this.input = input;
        this.errLocation = errLocation;
        this.ctxLocation = ctxLocation;
        this.message = "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation;
    }
    return ParserError;
}());
var ParseSpan = /** @class */ (function () {
    function ParseSpan(start, end) {
        this.start = start;
        this.end = end;
    }
    return ParseSpan;
}());
var AST = /** @class */ (function () {
    function AST(span) {
        this.span = span;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    AST.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return null;
    };
    /**
     * @return {?}
     */
    AST.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "AST";
    };
    return AST;
}());
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
var /**
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
Quote = /** @class */ (function (_super) {
    __extends(Quote, _super);
    function Quote(span, prefix, uninterpretedExpression, location) {
        var _this = _super.call(this, span) || this;
        _this.prefix = prefix;
        _this.uninterpretedExpression = uninterpretedExpression;
        _this.location = location;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Quote.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitQuote(this, context);
    };
    /**
     * @return {?}
     */
    Quote.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Quote";
    };
    return Quote;
}(AST));
var EmptyExpr = /** @class */ (function (_super) {
    __extends(EmptyExpr, _super);
    function EmptyExpr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    EmptyExpr.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        // do nothing
    };
    return EmptyExpr;
}(AST));
var ImplicitReceiver = /** @class */ (function (_super) {
    __extends(ImplicitReceiver, _super);
    function ImplicitReceiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    ImplicitReceiver.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitImplicitReceiver(this, context);
    };
    return ImplicitReceiver;
}(AST));
/**
 * Multiple expressions separated by a semicolon.
 */
var /**
 * Multiple expressions separated by a semicolon.
 */
Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain(span, expressions) {
        var _this = _super.call(this, span) || this;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Chain.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitChain(this, context);
    };
    return Chain;
}(AST));
var Conditional = /** @class */ (function (_super) {
    __extends(Conditional, _super);
    function Conditional(span, condition, trueExp, falseExp) {
        var _this = _super.call(this, span) || this;
        _this.condition = condition;
        _this.trueExp = trueExp;
        _this.falseExp = falseExp;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Conditional.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitConditional(this, context);
    };
    return Conditional;
}(AST));
var PropertyRead = /** @class */ (function (_super) {
    __extends(PropertyRead, _super);
    function PropertyRead(span, receiver, name) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PropertyRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPropertyRead(this, context);
    };
    return PropertyRead;
}(AST));
var PropertyWrite = /** @class */ (function (_super) {
    __extends(PropertyWrite, _super);
    function PropertyWrite(span, receiver, name, value) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PropertyWrite.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPropertyWrite(this, context);
    };
    return PropertyWrite;
}(AST));
var SafePropertyRead = /** @class */ (function (_super) {
    __extends(SafePropertyRead, _super);
    function SafePropertyRead(span, receiver, name) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    SafePropertyRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitSafePropertyRead(this, context);
    };
    return SafePropertyRead;
}(AST));
var KeyedRead = /** @class */ (function (_super) {
    __extends(KeyedRead, _super);
    function KeyedRead(span, obj, key) {
        var _this = _super.call(this, span) || this;
        _this.obj = obj;
        _this.key = key;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    KeyedRead.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitKeyedRead(this, context);
    };
    return KeyedRead;
}(AST));
var KeyedWrite = /** @class */ (function (_super) {
    __extends(KeyedWrite, _super);
    function KeyedWrite(span, obj, key, value) {
        var _this = _super.call(this, span) || this;
        _this.obj = obj;
        _this.key = key;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    KeyedWrite.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitKeyedWrite(this, context);
    };
    return KeyedWrite;
}(AST));
var BindingPipe = /** @class */ (function (_super) {
    __extends(BindingPipe, _super);
    function BindingPipe(span, exp, name, args) {
        var _this = _super.call(this, span) || this;
        _this.exp = exp;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    BindingPipe.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPipe(this, context);
    };
    return BindingPipe;
}(AST));
var LiteralPrimitive = /** @class */ (function (_super) {
    __extends(LiteralPrimitive, _super);
    function LiteralPrimitive(span, value) {
        var _this = _super.call(this, span) || this;
        _this.value = value;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralPrimitive.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralPrimitive(this, context);
    };
    return LiteralPrimitive;
}(AST));
var LiteralArray = /** @class */ (function (_super) {
    __extends(LiteralArray, _super);
    function LiteralArray(span, expressions) {
        var _this = _super.call(this, span) || this;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralArray.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralArray(this, context);
    };
    return LiteralArray;
}(AST));
var LiteralMap = /** @class */ (function (_super) {
    __extends(LiteralMap, _super);
    function LiteralMap(span, keys, values) {
        var _this = _super.call(this, span) || this;
        _this.keys = keys;
        _this.values = values;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    LiteralMap.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitLiteralMap(this, context);
    };
    return LiteralMap;
}(AST));
var Interpolation = /** @class */ (function (_super) {
    __extends(Interpolation, _super);
    function Interpolation(span, strings, expressions) {
        var _this = _super.call(this, span) || this;
        _this.strings = strings;
        _this.expressions = expressions;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Interpolation.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitInterpolation(this, context);
    };
    return Interpolation;
}(AST));
var Binary = /** @class */ (function (_super) {
    __extends(Binary, _super);
    function Binary(span, operation, left, right) {
        var _this = _super.call(this, span) || this;
        _this.operation = operation;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    Binary.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitBinary(this, context);
    };
    return Binary;
}(AST));
var PrefixNot = /** @class */ (function (_super) {
    __extends(PrefixNot, _super);
    function PrefixNot(span, expression) {
        var _this = _super.call(this, span) || this;
        _this.expression = expression;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    PrefixNot.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitPrefixNot(this, context);
    };
    return PrefixNot;
}(AST));
var NonNullAssert = /** @class */ (function (_super) {
    __extends(NonNullAssert, _super);
    function NonNullAssert(span, expression) {
        var _this = _super.call(this, span) || this;
        _this.expression = expression;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    NonNullAssert.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitNonNullAssert(this, context);
    };
    return NonNullAssert;
}(AST));
var MethodCall = /** @class */ (function (_super) {
    __extends(MethodCall, _super);
    function MethodCall(span, receiver, name, args) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    MethodCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitMethodCall(this, context);
    };
    return MethodCall;
}(AST));
var SafeMethodCall = /** @class */ (function (_super) {
    __extends(SafeMethodCall, _super);
    function SafeMethodCall(span, receiver, name, args) {
        var _this = _super.call(this, span) || this;
        _this.receiver = receiver;
        _this.name = name;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    SafeMethodCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitSafeMethodCall(this, context);
    };
    return SafeMethodCall;
}(AST));
var FunctionCall = /** @class */ (function (_super) {
    __extends(FunctionCall, _super);
    function FunctionCall(span, target, args) {
        var _this = _super.call(this, span) || this;
        _this.target = target;
        _this.args = args;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    FunctionCall.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return visitor.visitFunctionCall(this, context);
    };
    return FunctionCall;
}(AST));
var ASTWithSource = /** @class */ (function (_super) {
    __extends(ASTWithSource, _super);
    function ASTWithSource(ast, source, location, errors) {
        var _this = _super.call(this, new ParseSpan(0, source == null ? 0 : source.length)) || this;
        _this.ast = ast;
        _this.source = source;
        _this.location = location;
        _this.errors = errors;
        return _this;
    }
    /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    ASTWithSource.prototype.visit = /**
     * @param {?} visitor
     * @param {?=} context
     * @return {?}
     */
    function (visitor, context) {
        if (context === void 0) { context = null; }
        return this.ast.visit(visitor, context);
    };
    /**
     * @return {?}
     */
    ASTWithSource.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.source + " in " + this.location;
    };
    return ASTWithSource;
}(AST));
var TemplateBinding = /** @class */ (function () {
    function TemplateBinding(span, key, keyIsVar, name, expression) {
        this.span = span;
        this.key = key;
        this.keyIsVar = keyIsVar;
        this.name = name;
        this.expression = expression;
    }
    return TemplateBinding;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TokenType$1 = {
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
var /** @type {?} */ KEYWORDS = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this"];
var Lexer = /** @class */ (function () {
    function Lexer() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Lexer.prototype.tokenize = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var /** @type {?} */ scanner = new Scanner(text);
        var /** @type {?} */ tokens = [];
        var /** @type {?} */ token = scanner.scanToken();
        while (token != null) {
            tokens.push(token);
            token = scanner.scanToken();
        }
        return tokens;
    };
    return Lexer;
}());
var Token$1 = /** @class */ (function () {
    function Token(index, type, numValue, strValue) {
        this.index = index;
        this.type = type;
        this.numValue = numValue;
        this.strValue = strValue;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    Token.prototype.isCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.type === TokenType$1.Character && this.numValue === code;
    };
    /**
     * @return {?}
     */
    Token.prototype.isNumber = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Number;
    };
    /**
     * @return {?}
     */
    Token.prototype.isString = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.String;
    };
    /**
     * @param {?} operater
     * @return {?}
     */
    Token.prototype.isOperator = /**
     * @param {?} operater
     * @return {?}
     */
    function (operater) {
        return this.type === TokenType$1.Operator && this.strValue === operater;
    };
    /**
     * @return {?}
     */
    Token.prototype.isIdentifier = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Identifier;
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeyword = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword;
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordLet = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "let";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordAs = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "as";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordNull = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "null";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordUndefined = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "undefined";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordTrue = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "true";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordFalse = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "false";
    };
    /**
     * @return {?}
     */
    Token.prototype.isKeywordThis = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Keyword && this.strValue === "this";
    };
    /**
     * @return {?}
     */
    Token.prototype.isError = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Error;
    };
    /**
     * @return {?}
     */
    Token.prototype.toNumber = /**
     * @return {?}
     */
    function () {
        return this.type === TokenType$1.Number ? this.numValue : -1;
    };
    /**
     * @return {?}
     */
    Token.prototype.toString = /**
     * @return {?}
     */
    function () {
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
    };
    return Token;
}());
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
var /** @type {?} */ EOF = new Token$1(-1, TokenType$1.Character, 0, "");
var Scanner = /** @class */ (function () {
    function Scanner(input) {
        this.input = input;
        this.peek = 0;
        this.index = -1;
        this.length = input.length;
        this.advance();
    }
    /**
     * @return {?}
     */
    Scanner.prototype.advance = /**
     * @return {?}
     */
    function () {
        this.peek = ++this.index >= this.length ? $EOF : this.input.charCodeAt(this.index);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanToken = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ input = this.input;
        var /** @type {?} */ length = this.length;
        var /** @type {?} */ peek = this.peek;
        var /** @type {?} */ index = this.index;
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
        var /** @type {?} */ start = index;
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
        return this.error("Unexpected character [" + String.fromCharCode(peek) + "]", 0);
    };
    /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    Scanner.prototype.scanCharacter = /**
     * @param {?} start
     * @param {?} code
     * @return {?}
     */
    function (start, code) {
        this.advance();
        return newCharacterToken(start, code);
    };
    /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    Scanner.prototype.scanOperator = /**
     * @param {?} start
     * @param {?} str
     * @return {?}
     */
    function (start, str) {
        this.advance();
        return newOperatorToken(start, str);
    };
    /**
     * Tokenize a 2/3 char long operator
     *
     * @param start start index in the expression
     * @param one first symbol (always part of the operator)
     * @param twoCode code point for the second symbol
     * @param two second symbol (part of the operator when the second code point matches)
     * @param threeCode code point for the third symbol
     * @param three third symbol (part of the operator when provided and matches source expression)
     */
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
    Scanner.prototype.scanComplexOperator = /**
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
    function (start, one, twoCode, two, threeCode, three) {
        this.advance();
        var /** @type {?} */ str = one;
        if (this.peek === twoCode) {
            this.advance();
            str += two;
        }
        if (threeCode != null && this.peek === threeCode) {
            this.advance();
            str += three;
        }
        return newOperatorToken(start, str);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanIdentifier = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.index;
        this.advance();
        while (isIdentifierPart(this.peek)) {
            this.advance();
        }
        var /** @type {?} */ str = this.input.substring(start, this.index);
        return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, str) : newIdentifierToken(start, str);
    };
    /**
     * @param {?} start
     * @return {?}
     */
    Scanner.prototype.scanNumber = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        var /** @type {?} */ simple = this.index === start;
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
        var /** @type {?} */ str = this.input.substring(start, this.index);
        var /** @type {?} */ value = simple ? parseIntAutoRadix(str) : parseFloat(str);
        return newNumberToken(start, value);
    };
    /**
     * @return {?}
     */
    Scanner.prototype.scanString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.index;
        var /** @type {?} */ quote = this.peek;
        this.advance(); // Skip initial quote.
        var /** @type {?} */ buffer = "";
        var /** @type {?} */ marker = this.index;
        var /** @type {?} */ input = this.input;
        while (this.peek !== quote) {
            if (this.peek === $BACKSLASH) {
                buffer += input.substring(marker, this.index);
                this.advance();
                var /** @type {?} */ unescapedCode = void 0;
                // Workaround for TS2.1-introduced type strictness
                this.peek = this.peek;
                if (this.peek === $u) {
                    // 4 character hex code for unicode character.
                    var /** @type {?} */ hex = input.substring(this.index + 1, this.index + 5);
                    if (/^[0-9a-f]+$/i.test(hex)) {
                        unescapedCode = parseInt(hex, 16);
                    }
                    else {
                        return this.error("Invalid unicode escape [\\u" + hex + "]", 0);
                    }
                    for (var /** @type {?} */ i = 0; i < 5; i++) {
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
        var /** @type {?} */ last = input.substring(marker, this.index);
        this.advance(); // Skip terminating quote.
        return newStringToken(start, buffer + last);
    };
    /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    Scanner.prototype.error = /**
     * @param {?} message
     * @param {?} offset
     * @return {?}
     */
    function (message, offset) {
        var /** @type {?} */ position = this.index + offset;
        return newErrorToken(position, "Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
    };
    return Scanner;
}());
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
    var /** @type {?} */ scanner = new Scanner(input);
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
    var /** @type {?} */ result = parseInt(text, 10);
    if (isNaN(result)) {
        throw new Error("Invalid integer literal when parsing " + text);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SplitInterpolation = /** @class */ (function () {
    function SplitInterpolation(strings, expressions, offsets) {
        this.strings = strings;
        this.expressions = expressions;
        this.offsets = offsets;
    }
    return SplitInterpolation;
}());
var TemplateBindingParseResult = /** @class */ (function () {
    function TemplateBindingParseResult(templateBindings, warnings, errors) {
        this.templateBindings = templateBindings;
        this.warnings = warnings;
        this.errors = errors;
    }
    return TemplateBindingParseResult;
}());
/**
 * @param {?} config
 * @return {?}
 */
function _createInterpolateRegExp(config) {
    var /** @type {?} */ pattern = escapeRegExp(config.start) + "([\\s\\S]*?)" + escapeRegExp(config.end);
    return new RegExp(pattern, "g");
}
var Parser$1 = /** @class */ (function () {
    function Parser(_lexer) {
        this._lexer = _lexer;
        this.errors = [];
    }
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseAction = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        this._checkNoInterpolation(input, location, interpolationConfig);
        var /** @type {?} */ sourceToLex = this._stripComments(input);
        var /** @type {?} */ tokens = this._lexer.tokenize(this._stripComments(input));
        var /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, true, this.errors, input.length - sourceToLex.length).parseChain();
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseBinding = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseSimpleBinding = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ ast = this._parseBindingAst(input, location, interpolationConfig);
        var /** @type {?} */ errors = SimpleExpressionChecker.check(ast);
        if (errors.length > 0) {
            this._reportError("Host binding expression cannot contain " + errors.join(" "), input, location);
        }
        return new ASTWithSource(ast, input, location, this.errors);
    };
    /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    Parser.prototype._reportError = /**
     * @param {?} message
     * @param {?} input
     * @param {?} errLocation
     * @param {?=} ctxLocation
     * @return {?}
     */
    function (message, input, errLocation, ctxLocation) {
        this.errors.push(new ParserError(message, input, errLocation, ctxLocation));
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._parseBindingAst = /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        var /** @type {?} */ quote = this._parseQuote(input, location);
        if (quote != null) {
            return quote;
        }
        this._checkNoInterpolation(input, location, interpolationConfig);
        var /** @type {?} */ sourceToLex = this._stripComments(input);
        var /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
        return new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, input.length - sourceToLex.length).parseChain();
    };
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype._parseQuote = /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (input, location) {
        if (input === null) {
            return null;
        }
        var /** @type {?} */ prefixSeparatorIndex = input.indexOf(":");
        if (prefixSeparatorIndex === -1) {
            return null;
        }
        var /** @type {?} */ prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!isIdentifier(prefix)) {
            return null;
        }
        var /** @type {?} */ uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        return new Quote(new ParseSpan(0, input.length), prefix, uninterpretedExpression, location);
    };
    /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype.parseTemplateBindings = /**
     * @param {?} prefixToken
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (prefixToken, input, location) {
        var /** @type {?} */ tokens = this._lexer.tokenize(input);
        if (prefixToken) {
            // Prefix the tokens with the tokens from prefixToken but have them take no space (0 index).
            var /** @type {?} */ prefixTokens = this._lexer.tokenize(prefixToken).map(function (t) {
                t.index = 0;
                return t;
            });
            tokens.unshift.apply(tokens, __spread(prefixTokens));
        }
        return new ParseAST(input, location, tokens, input.length, false, this.errors, 0).parseTemplateBindings();
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.parseInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ split = this.splitInterpolation(input, location, interpolationConfig);
        if (split === null) {
            return null;
        }
        var /** @type {?} */ expressions = [];
        for (var /** @type {?} */ i = 0; i < split.expressions.length; ++i) {
            var /** @type {?} */ expressionText = split.expressions[i];
            var /** @type {?} */ sourceToLex = this._stripComments(expressionText);
            var /** @type {?} */ tokens = this._lexer.tokenize(sourceToLex);
            var /** @type {?} */ ast = new ParseAST(input, location, tokens, sourceToLex.length, false, this.errors, split.offsets[i] + (expressionText.length - sourceToLex.length)).parseChain();
            expressions.push(ast);
        }
        return new ASTWithSource(new Interpolation(new ParseSpan(0, input === null ? 0 : input.length), split.strings, expressions), input, location, this.errors);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    Parser.prototype.splitInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        var /** @type {?} */ parts = input.split(regexp);
        if (parts.length <= 1) {
            return null;
        }
        var /** @type {?} */ strings = [];
        var /** @type {?} */ expressions = [];
        var /** @type {?} */ offsets = [];
        var /** @type {?} */ offset = 0;
        for (var /** @type {?} */ i = 0; i < parts.length; i++) {
            var /** @type {?} */ part = parts[i];
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
                this._reportError("Blank expressions are not allowed in interpolated strings", input, "at column " + this._findInterpolationErrorColumn(parts, i, interpolationConfig) + " in", location);
                expressions.push("$implict");
                offsets.push(offset);
            }
        }
        return new SplitInterpolation(strings, expressions, offsets);
    };
    /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    Parser.prototype.wrapLiteralPrimitive = /**
     * @param {?} input
     * @param {?} location
     * @return {?}
     */
    function (input, location) {
        return new ASTWithSource(new LiteralPrimitive(new ParseSpan(0, input === null ? 0 : input.length), input), input, location, this.errors);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Parser.prototype._stripComments = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ i = this._commentStart(input);
        return i != null ? input.substring(0, i).trim() : input;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Parser.prototype._commentStart = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ outerQuote = null;
        for (var /** @type {?} */ i = 0; i < input.length - 1; i++) {
            var /** @type {?} */ char = input.charCodeAt(i);
            var /** @type {?} */ nextChar = input.charCodeAt(i + 1);
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
    };
    /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._checkNoInterpolation = /**
     * @param {?} input
     * @param {?} location
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (input, location, interpolationConfig) {
        var /** @type {?} */ regexp = _createInterpolateRegExp(interpolationConfig);
        var /** @type {?} */ parts = input.split(regexp);
        if (parts.length > 1) {
            this._reportError("Got interpolation (" + interpolationConfig.start + interpolationConfig.end + ") where expression was expected", input, "at column " + this._findInterpolationErrorColumn(parts, 1, interpolationConfig) + " in", location);
        }
    };
    /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    Parser.prototype._findInterpolationErrorColumn = /**
     * @param {?} parts
     * @param {?} partInErrIdx
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (parts, partInErrIdx, interpolationConfig) {
        var /** @type {?} */ errLocation = "";
        for (var /** @type {?} */ j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ? parts[j] : "" + interpolationConfig.start + parts[j] + interpolationConfig.end;
        }
        return errLocation.length;
    };
    return Parser;
}());
var ParseAST = /** @class */ (function () {
    function ParseAST(input, location, tokens, inputLength, parseAction, errors, offset) {
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
    ParseAST.prototype.peek = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var /** @type {?} */ i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : EOF;
    };
    Object.defineProperty(ParseAST.prototype, "next", {
        get: /**
         * @return {?}
         */
        function () {
            return this.peek(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseAST.prototype, "inputIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index < this.tokens.length ? this.next.index + this.offset : this.inputLength + this.offset;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} start
     * @return {?}
     */
    ParseAST.prototype.span = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        return new ParseSpan(start, this.inputIndex);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.advance = /**
     * @return {?}
     */
    function () {
        this.index++;
    };
    /**
     * @param {?} code
     * @return {?}
     */
    ParseAST.prototype.optionalCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.peekKeywordLet = /**
     * @return {?}
     */
    function () {
        return this.next.isKeywordLet();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.peekKeywordAs = /**
     * @return {?}
     */
    function () {
        return this.next.isKeywordAs();
    };
    /**
     * @param {?} code
     * @return {?}
     */
    ParseAST.prototype.expectCharacter = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (this.optionalCharacter(code)) {
            return;
        }
        this.error("Missing expected " + String.fromCharCode(code));
    };
    /**
     * @param {?} op
     * @return {?}
     */
    ParseAST.prototype.optionalOperator = /**
     * @param {?} op
     * @return {?}
     */
    function (op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} operator
     * @return {?}
     */
    ParseAST.prototype.expectOperator = /**
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        if (this.optionalOperator(operator)) {
            return;
        }
        this.error("Missing expected operator " + operator);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.expectIdentifierOrKeyword = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error("Unexpected token " + n + ", expected identifier or keyword");
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.expectIdentifierOrKeywordOrString = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error("Unexpected token " + n + ", expected identifier, keyword, or string");
            return "";
        }
        this.advance();
        return /** @type {?} */ (n.toString());
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseChain = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ exprs = [];
        var /** @type {?} */ start = this.inputIndex;
        while (this.index < this.tokens.length) {
            var /** @type {?} */ expr = this.parsePipe();
            exprs.push(expr);
            if (this.optionalCharacter($SEMICOLON)) {
                if (!this.parseAction) {
                    this.error("Binding expression cannot contain chained expression");
                }
                while (this.optionalCharacter($SEMICOLON)) { } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error("Unexpected token '" + this.next + "'");
            }
        }
        if (exprs.length === 0) {
            return new EmptyExpr(this.span(start));
        }
        if (exprs.length === 1) {
            return exprs[0];
        }
        return new Chain(this.span(start), exprs);
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePipe = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = this.parseExpression();
        if (this.optionalOperator("|")) {
            if (this.parseAction) {
                this.error("Cannot have a pipe in an action expression");
            }
            do {
                var /** @type {?} */ name_1 = this.expectIdentifierOrKeyword();
                var /** @type {?} */ args = [];
                while (this.optionalCharacter($COLON)) {
                    args.push(this.parseExpression());
                }
                result = new BindingPipe(this.span(result.span.start), result, name_1, args);
            } while (this.optionalOperator("|"));
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseExpression = /**
     * @return {?}
     */
    function () {
        return this.parseConditional();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseConditional = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.inputIndex;
        var /** @type {?} */ result = this.parseLogicalOr();
        if (this.optionalOperator("?")) {
            var /** @type {?} */ yes = this.parsePipe();
            var /** @type {?} */ no = void 0;
            if (!this.optionalCharacter($COLON)) {
                var /** @type {?} */ end = this.inputIndex;
                var /** @type {?} */ expression = this.input.substring(start, end);
                this.error("Conditional expression " + expression + " requires all 3 expressions");
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
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLogicalOr = /**
     * @return {?}
     */
    function () {
        // '||'
        var /** @type {?} */ result = this.parseLogicalAnd();
        while (this.optionalOperator("||")) {
            var /** @type {?} */ right = this.parseLogicalAnd();
            result = new Binary(this.span(result.span.start), "||", result, right);
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLogicalAnd = /**
     * @return {?}
     */
    function () {
        // '&&'
        var /** @type {?} */ result = this.parseEquality();
        while (this.optionalOperator("&&")) {
            var /** @type {?} */ right = this.parseEquality();
            result = new Binary(this.span(result.span.start), "&&", result, right);
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseEquality = /**
     * @return {?}
     */
    function () {
        // '==','!=','===','!=='
        var /** @type {?} */ result = this.parseRelational();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "==":
                case "===":
                case "!=":
                case "!==":
                    this.advance();
                    var /** @type {?} */ right = this.parseRelational();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseRelational = /**
     * @return {?}
     */
    function () {
        // '<', '>', '<=', '>='
        var /** @type {?} */ result = this.parseAdditive();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "<":
                case ">":
                case "<=":
                case ">=":
                    this.advance();
                    var /** @type {?} */ right = this.parseAdditive();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseAdditive = /**
     * @return {?}
     */
    function () {
        // '+', '-'
        var /** @type {?} */ result = this.parseMultiplicative();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "+":
                case "-":
                    this.advance();
                    var /** @type {?} */ right = this.parseMultiplicative();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseMultiplicative = /**
     * @return {?}
     */
    function () {
        // '*', '%', '/'
        var /** @type {?} */ result = this.parsePrefix();
        while (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ operator = this.next.strValue;
            switch (operator) {
                case "*":
                case "%":
                case "/":
                    this.advance();
                    var /** @type {?} */ right = this.parsePrefix();
                    result = new Binary(this.span(result.span.start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePrefix = /**
     * @return {?}
     */
    function () {
        if (this.next.type === TokenType$1.Operator) {
            var /** @type {?} */ start = this.inputIndex;
            var /** @type {?} */ operator = this.next.strValue;
            var /** @type {?} */ result = void 0;
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
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseCallChain = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = this.parsePrimary();
        while (true) {
            if (this.optionalCharacter($PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.optionalOperator("?.")) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.optionalCharacter($LBRACKET)) {
                this.rbracketsExpected++;
                var /** @type {?} */ key = this.parsePipe();
                this.rbracketsExpected--;
                this.expectCharacter($RBRACKET);
                if (this.optionalOperator("=")) {
                    var /** @type {?} */ value = this.parseConditional();
                    result = new KeyedWrite(this.span(result.span.start), result, key, value);
                }
                else {
                    result = new KeyedRead(this.span(result.span.start), result, key);
                }
            }
            else if (this.optionalCharacter($LPAREN)) {
                this.rparensExpected++;
                var /** @type {?} */ args = this.parseCallArguments();
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
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parsePrimary = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ start = this.inputIndex;
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            var /** @type {?} */ result = this.parsePipe();
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
            var /** @type {?} */ elements = this.parseExpressionList($RBRACKET);
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
            var /** @type {?} */ value = this.next.toNumber();
            this.advance();
            return new LiteralPrimitive(this.span(start), value);
        }
        else if (this.next.isString()) {
            var /** @type {?} */ literalValue = this.next.toString();
            this.advance();
            return new LiteralPrimitive(this.span(start), literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error("Unexpected end of expression: " + this.input);
            return new EmptyExpr(this.span(start));
        }
        else {
            this.error("Unexpected token " + this.next);
            return new EmptyExpr(this.span(start));
        }
    };
    /**
     * @param {?} terminator
     * @return {?}
     */
    ParseAST.prototype.parseExpressionList = /**
     * @param {?} terminator
     * @return {?}
     */
    function (terminator) {
        var /** @type {?} */ result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
        }
        return result;
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseLiteralMap = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ keys = [];
        var /** @type {?} */ values = [];
        var /** @type {?} */ start = this.inputIndex;
        this.expectCharacter($LBRACE);
        if (!this.optionalCharacter($RBRACE)) {
            this.rbracesExpected++;
            do {
                var /** @type {?} */ quoted = this.next.isString();
                var /** @type {?} */ key = this.expectIdentifierOrKeywordOrString();
                keys.push({ key: key, quoted: quoted });
                this.expectCharacter($COLON);
                values.push(this.parsePipe());
            } while (this.optionalCharacter($COMMA));
            this.rbracesExpected--;
            this.expectCharacter($RBRACE);
        }
        return new LiteralMap(this.span(start), keys, values);
    };
    /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    ParseAST.prototype.parseAccessMemberOrMethodCall = /**
     * @param {?} receiver
     * @param {?=} isSafe
     * @return {?}
     */
    function (receiver, isSafe) {
        if (isSafe === void 0) { isSafe = false; }
        var /** @type {?} */ start = receiver.span.start;
        var /** @type {?} */ id = this.expectIdentifierOrKeyword();
        if (this.optionalCharacter($LPAREN)) {
            this.rparensExpected++;
            var /** @type {?} */ args = this.parseCallArguments();
            this.expectCharacter($RPAREN);
            this.rparensExpected--;
            var /** @type {?} */ span = this.span(start);
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
                    var /** @type {?} */ value = this.parseConditional();
                    return new PropertyWrite(this.span(start), receiver, id, value);
                }
                else {
                    return new PropertyRead(this.span(start), receiver, id);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseCallArguments = /**
     * @return {?}
     */
    function () {
        if (this.next.isCharacter($RPAREN)) {
            return [];
        }
        var /** @type {?} */ positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.optionalCharacter($COMMA));
        return /** @type {?} */ (positionals);
    };
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     */
    /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    ParseAST.prototype.expectTemplateBindingKey = /**
     * An identifier, a keyword, a string with an optional `-` inbetween.
     * @return {?}
     */
    function () {
        var /** @type {?} */ result = "";
        var /** @type {?} */ operatorFound = false;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.optionalOperator("-");
            if (operatorFound) {
                result += "-";
            }
        } while (operatorFound);
        return result.toString();
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.parseTemplateBindings = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ bindings = [];
        var /** @type {?} */ prefix = /** @type {?} */ ((null));
        var /** @type {?} */ warnings = [];
        while (this.index < this.tokens.length) {
            var /** @type {?} */ start = this.inputIndex;
            var /** @type {?} */ keyIsVar = this.peekKeywordLet();
            if (keyIsVar) {
                this.advance();
            }
            var /** @type {?} */ rawKey = this.expectTemplateBindingKey();
            var /** @type {?} */ key = rawKey;
            if (!keyIsVar) {
                if (prefix === null) {
                    prefix = key;
                }
                else {
                    key = prefix + key[0].toUpperCase() + key.substring(1);
                }
            }
            this.optionalCharacter($COLON);
            var /** @type {?} */ name_2 = /** @type {?} */ ((null));
            var /** @type {?} */ expression = /** @type {?} */ ((null));
            if (keyIsVar) {
                if (this.optionalOperator("=")) {
                    name_2 = this.expectTemplateBindingKey();
                }
                else {
                    name_2 = "$implicit";
                }
            }
            else if (this.peekKeywordAs()) {
                var /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                name_2 = rawKey;
                key = this.expectTemplateBindingKey(); // read local var name
                keyIsVar = true;
            }
            else if (this.next !== EOF && !this.peekKeywordLet()) {
                var /** @type {?} */ st = this.inputIndex;
                var /** @type {?} */ ast = this.parsePipe();
                var /** @type {?} */ source = this.input.substring(st - this.offset, this.inputIndex - this.offset);
                expression = new ASTWithSource(ast, source, this.location, this.errors);
            }
            bindings.push(new TemplateBinding(this.span(start), key, keyIsVar, name_2, expression));
            if (this.peekKeywordAs() && !keyIsVar) {
                var /** @type {?} */ letStart = this.inputIndex;
                this.advance(); // consume `as`
                var /** @type {?} */ letName = this.expectTemplateBindingKey(); // read local var name
                bindings.push(new TemplateBinding(this.span(letStart), letName, true, key, /** @type {?} */ ((null))));
            }
            if (!this.optionalCharacter($SEMICOLON)) {
                this.optionalCharacter($COMMA);
            }
        }
        return new TemplateBindingParseResult(bindings, warnings, this.errors);
    };
    /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    ParseAST.prototype.error = /**
     * @param {?} message
     * @param {?=} index
     * @return {?}
     */
    function (message, index) {
        if (index === void 0) { index = null; }
        this.errors.push(new ParserError(message, this.input, this.locationText(index), this.location));
        this.skip();
    };
    /**
     * @param {?=} index
     * @return {?}
     */
    ParseAST.prototype.locationText = /**
     * @param {?=} index
     * @return {?}
     */
    function (index) {
        if (index === void 0) { index = null; }
        if (index === null) {
            index = this.index;
        }
        return index < this.tokens.length ? "at column " + (this.tokens[index].index + 1) + " in" : "at the end of the expression";
    };
    /**
     * @return {?}
     */
    ParseAST.prototype.skip = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ n = this.next;
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
    };
    return ParseAST;
}());
var SimpleExpressionChecker = /** @class */ (function () {
    function SimpleExpressionChecker() {
        this.errors = [];
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    SimpleExpressionChecker.check = /**
     * @param {?} ast
     * @return {?}
     */
    function (ast) {
        var /** @type {?} */ s = new SimpleExpressionChecker();
        ast.visit(s);
        return s.errors;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitImplicitReceiver = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitInterpolation = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralPrimitive = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPropertyRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPropertyWrite = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitSafePropertyRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitMethodCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitSafeMethodCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitFunctionCall = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralArray = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.visitAll(ast.expressions);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitLiteralMap = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.visitAll(ast.values);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitBinary = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPrefixNot = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitNonNullAssert = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitConditional = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitPipe = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) {
        this.errors.push("pipes");
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitKeyedRead = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitKeyedWrite = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} asts
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitAll = /**
     * @param {?} asts
     * @return {?}
     */
    function (asts) {
        var _this = this;
        return asts.map(function (node) { return node.visit(_this); });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitChain = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    SimpleExpressionChecker.prototype.visitQuote = /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    function (ast, context) { };
    return SimpleExpressionChecker;
}());

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
var /** @type {?} */ TAG_TO_PLACEHOLDER_NAMES = {
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
var /**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 *
 * \@internal
 */
PlaceholderRegistry = /** @class */ (function () {
    function PlaceholderRegistry() {
        this._placeHolderNameCounts = {};
        this._signatureToName = {};
    }
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    PlaceholderRegistry.prototype.getStartTagPlaceholderName = /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    function (tag, attrs, isVoid) {
        var /** @type {?} */ signature = this._hashTag(tag, attrs, isVoid);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ upperTag = tag.toUpperCase();
        var /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || "TAG_" + upperTag;
        var /** @type {?} */ name = this._generateUniqueName(isVoid ? baseName : "START_" + baseName);
        this._signatureToName[signature] = name;
        return name;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    PlaceholderRegistry.prototype.getCloseTagPlaceholderName = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        var /** @type {?} */ signature = this._hashClosingTag(tag);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ upperTag = tag.toUpperCase();
        var /** @type {?} */ baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || "TAG_" + upperTag;
        var /** @type {?} */ name = this._generateUniqueName("CLOSE_" + baseName);
        this._signatureToName[signature] = name;
        return name;
    };
    /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    PlaceholderRegistry.prototype.getPlaceholderName = /**
     * @param {?} name
     * @param {?} content
     * @return {?}
     */
    function (name, content) {
        var /** @type {?} */ upperName = name.toUpperCase();
        var /** @type {?} */ signature = "PH: " + upperName + "=" + content;
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        var /** @type {?} */ uniqueName = this._generateUniqueName(upperName);
        this._signatureToName[signature] = uniqueName;
        return uniqueName;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    PlaceholderRegistry.prototype.getUniquePlaceholder = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._generateUniqueName(name.toUpperCase());
    };
    /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    PlaceholderRegistry.prototype._hashTag = /**
     * @param {?} tag
     * @param {?} attrs
     * @param {?} isVoid
     * @return {?}
     */
    function (tag, attrs, isVoid) {
        var /** @type {?} */ start = "<" + tag;
        var /** @type {?} */ strAttrs = Object.keys(attrs).sort().map(function (name) { return " " + name + "=" + attrs[name]; }).join('');
        var /** @type {?} */ end = isVoid ? '/>' : "></" + tag + ">";
        return start + strAttrs + end;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    PlaceholderRegistry.prototype._hashClosingTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) { return this._hashTag("/" + tag, {}, false); };
    /**
     * @param {?} base
     * @return {?}
     */
    PlaceholderRegistry.prototype._generateUniqueName = /**
     * @param {?} base
     * @return {?}
     */
    function (base) {
        var /** @type {?} */ seen = this._placeHolderNameCounts.hasOwnProperty(base);
        if (!seen) {
            this._placeHolderNameCounts[base] = 1;
            return base;
        }
        var /** @type {?} */ id = this._placeHolderNameCounts[base];
        this._placeHolderNameCounts[base] = id + 1;
        return base + "_" + id;
    };
    return PlaceholderRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _expParser = new Parser$1(new Lexer());
/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 * @param {?} interpolationConfig
 * @return {?}
 */
function createI18nMessageFactory(interpolationConfig) {
    var /** @type {?} */ visitor = new I18nVisitor(_expParser, interpolationConfig);
    return function (nodes, meaning, description, id) {
        return visitor.toI18nMessage(nodes, meaning, description, id);
    };
}
var I18nVisitor = /** @class */ (function () {
    function I18nVisitor(_expressionParser, _interpolationConfig) {
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
    I18nVisitor.prototype.toI18nMessage = /**
     * @param {?} nodes
     * @param {?} meaning
     * @param {?} description
     * @param {?} id
     * @return {?}
     */
    function (nodes, meaning, description, id) {
        this._isIcu = nodes.length === 1 && nodes[0] instanceof Expansion;
        this._icuDepth = 0;
        this._placeholderRegistry = new PlaceholderRegistry();
        this._placeholderToContent = {};
        this._placeholderToMessage = {};
        var /** @type {?} */ i18nodes = visitAll(this, nodes, {});
        return new Message(i18nodes, this._placeholderToContent, this._placeholderToMessage, meaning, description, id);
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var /** @type {?} */ children = visitAll(this, el.children);
        var /** @type {?} */ attrs = {};
        el.attrs.forEach(function (attr) {
            // Do not visit the attributes, translatable ones are top-level ASTs
            attrs[attr.name] = attr.value;
        });
        var /** @type {?} */ isVoid = getHtmlTagDefinition(el.name).isVoid;
        var /** @type {?} */ startPhName = this._placeholderRegistry.getStartTagPlaceholderName(el.name, attrs, isVoid);
        this._placeholderToContent[startPhName] = el.sourceSpan ? /** @type {?} */ ((el.sourceSpan)).toString() : "";
        var /** @type {?} */ closePhName = "";
        if (!isVoid) {
            closePhName = this._placeholderRegistry.getCloseTagPlaceholderName(el.name);
            this._placeholderToContent[closePhName] = "</" + el.name + ">";
        }
        return new TagPlaceholder(el.name, attrs, startPhName, closePhName, children, isVoid, /** @type {?} */ ((el.sourceSpan)));
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        return this._visitTextWithInterpolation(attribute.value, attribute.sourceSpan);
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        return this._visitTextWithInterpolation(text.value, /** @type {?} */ ((text.sourceSpan)));
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return null;
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        this._icuDepth++;
        var /** @type {?} */ i18nIcuCases = {};
        var /** @type {?} */ i18nIcu = new Icu(icu.switchValue, icu.type, i18nIcuCases, icu.sourceSpan);
        icu.cases.forEach(function (caze) {
            i18nIcuCases[caze.value] = new Container(caze.expression.map(function (node) { return node.visit(_this, {}); }), caze.expSourceSpan);
        });
        this._icuDepth--;
        if (this._isIcu || this._icuDepth > 0) {
            // Returns an ICU node when:
            // - the message (vs a part of the message) is an ICU message, or
            // - the ICU message is nested.
            var /** @type {?} */ expPh = this._placeholderRegistry.getUniquePlaceholder("VAR_" + icu.type);
            i18nIcu.expressionPlaceholder = expPh;
            this._placeholderToContent[expPh] = icu.switchValue;
            return i18nIcu;
        }
        // Else returns a placeholder
        // ICU placeholders should not be replaced with their original content but with the their
        // translations. We need to create a new visitor (they are not re-entrant) to compute the
        // message id.
        // TODO(vicb): add a html.Node -> i18n.Message cache to avoid having to re-create the msg
        var /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName("ICU", icu.sourceSpan.toString());
        var /** @type {?} */ visitor = new I18nVisitor(this._expressionParser, this._interpolationConfig);
        this._placeholderToMessage[phName] = visitor.toI18nMessage([icu], "", "", "");
        return new IcuPlaceholder(i18nIcu, phName, icu.sourceSpan);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    I18nVisitor.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        throw new Error("Unreachable code");
    };
    /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    I18nVisitor.prototype._visitTextWithInterpolation = /**
     * @param {?} text
     * @param {?} sourceSpan
     * @return {?}
     */
    function (text, sourceSpan) {
        var /** @type {?} */ splitInterpolation = this._expressionParser.splitInterpolation(text, sourceSpan.start.toString(), this._interpolationConfig);
        if (!splitInterpolation) {
            // No expression, return a single text
            return new Text$1(text, sourceSpan);
        }
        // Return a group of text + expressions
        var /** @type {?} */ nodes = [];
        var /** @type {?} */ container = new Container(nodes, sourceSpan);
        var _a = this._interpolationConfig, sDelimiter = _a.start, eDelimiter = _a.end;
        for (var /** @type {?} */ i = 0; i < splitInterpolation.strings.length - 1; i++) {
            var /** @type {?} */ expression = splitInterpolation.expressions[i];
            var /** @type {?} */ baseName = extractPlaceholderName(expression) || "INTERPOLATION";
            var /** @type {?} */ phName = this._placeholderRegistry.getPlaceholderName(baseName, expression);
            if (splitInterpolation.strings[i].length) {
                // No need to add empty strings
                nodes.push(new Text$1(splitInterpolation.strings[i], sourceSpan));
            }
            nodes.push(new Placeholder(expression, phName, sourceSpan));
            this._placeholderToContent[phName] = sDelimiter + expression + eDelimiter;
        }
        // The last index contains no expression
        var /** @type {?} */ lastStringIdx = splitInterpolation.strings.length - 1;
        if (splitInterpolation.strings[lastStringIdx].length) {
            nodes.push(new Text$1(splitInterpolation.strings[lastStringIdx], sourceSpan));
        }
        return container;
    };
    return I18nVisitor;
}());
var /** @type {?} */ _CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
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
var /** @type {?} */ _I18N_ATTR = "i18n";
var HtmlParser = /** @class */ (function (_super) {
    __extends(HtmlParser, _super);
    function HtmlParser(interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var _this = _super.call(this, getHtmlTagDefinition) || this;
        _this.interpolationConfig = interpolationConfig;
        return _this;
    }
    /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    HtmlParser.prototype.parse = /**
     * @param {?} source
     * @param {?} url
     * @param {?=} parseExpansionForms
     * @return {?}
     */
    function (source, url, parseExpansionForms) {
        if (parseExpansionForms === void 0) { parseExpansionForms = false; }
        return _super.prototype.parse.call(this, source, url, parseExpansionForms, this.interpolationConfig);
    };
    /**
     * Extract translatable messages from an html AST
     */
    /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    HtmlParser.prototype.extractMessages = /**
     * Extract translatable messages from an html AST
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var /** @type {?} */ visitor = new Visitor$4(["wrapper"]);
        // Construct a single fake root element
        var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.extract(wrapper, this.interpolationConfig);
    };
    /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    HtmlParser.prototype.mergeTranslations = /**
     * @param {?} nodes
     * @param {?} translations
     * @param {?} params
     * @param {?=} metadata
     * @param {?=} implicitTags
     * @return {?}
     */
    function (nodes, translations, params, metadata, implicitTags) {
        if (implicitTags === void 0) { implicitTags = []; }
        var /** @type {?} */ visitor = new Visitor$4(implicitTags);
        // Construct a single fake root element
        var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
        return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
    };
    return HtmlParser;
}(Parser));
var ExtractionResult = /** @class */ (function () {
    function ExtractionResult(messages, errors) {
        this.messages = messages;
        this.errors = errors;
    }
    return ExtractionResult;
}());
/**
 * A container for translated messages
 */
var /**
 * A container for translated messages
 */
TranslationBundle = /** @class */ (function () {
    function TranslationBundle(i18nNodesByMsgId, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
        if (i18nNodesByMsgId === void 0) { i18nNodesByMsgId = {}; }
        this.i18nNodesByMsgId = i18nNodesByMsgId;
        this.digest = digest;
        this.mapperFactory = mapperFactory;
        this.i18nToHtml = new I18nToHtmlVisitor(i18nNodesByMsgId, digest, /** @type {?} */ ((mapperFactory)), missingTranslationStrategy, interpolationConfig, console);
    }
    // Creates a `TranslationBundle` by parsing the given `content` with the `serializer`.
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
    TranslationBundle.load = /**
     * @param {?} content
     * @param {?} url
     * @param {?} digest
     * @param {?} createNameMapper
     * @param {?} loadFct
     * @param {?} missingTranslationStrategy
     * @param {?=} interpolationConfig
     * @return {?}
     */
    function (content, url, digest, createNameMapper, loadFct, missingTranslationStrategy, interpolationConfig) {
        if (interpolationConfig === void 0) { interpolationConfig = DEFAULT_INTERPOLATION_CONFIG; }
        var /** @type {?} */ i18nNodesByMsgId = loadFct(content, url);
        var /** @type {?} */ digestFn = function (m) { return digest(m); };
        var /** @type {?} */ mapperFactory = function (m) { return ((createNameMapper(m))); };
        return new TranslationBundle(i18nNodesByMsgId, digestFn, interpolationConfig, missingTranslationStrategy, mapperFactory, console);
    };
    // Returns the translation as HTML nodes from the given source message.
    /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    TranslationBundle.prototype.get = /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    function (srcMsg, params) {
        var /** @type {?} */ htmlRes = this.i18nToHtml.convert(srcMsg, params);
        if (htmlRes.errors.length) {
            throw new Error(htmlRes.errors.join("\n"));
        }
        return htmlRes.nodes;
    };
    /**
     * @param {?} srcMsg
     * @return {?}
     */
    TranslationBundle.prototype.has = /**
     * @param {?} srcMsg
     * @return {?}
     */
    function (srcMsg) {
        return this.digest(srcMsg) in this.i18nNodesByMsgId;
    };
    return TranslationBundle;
}());
var I18nToHtmlVisitor = /** @class */ (function () {
    function I18nToHtmlVisitor(_i18nNodesByMsgId, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
        if (_i18nNodesByMsgId === void 0) { _i18nNodesByMsgId = {}; }
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
    I18nToHtmlVisitor.prototype.convert = /**
     * @param {?} srcMsg
     * @param {?} params
     * @return {?}
     */
    function (srcMsg, params) {
        this._contextStack.length = 0;
        this._errors.length = 0;
        this._params = params;
        this._paramKeys = Object.keys(params);
        // i18n to text
        var /** @type {?} */ text = this.convertToText(srcMsg);
        // text to html
        var /** @type {?} */ url = srcMsg.nodes[0].sourceSpan.start.file.url;
        var /** @type {?} */ htmlParser = new HtmlParser().parse(text, url, true);
        return {
            nodes: htmlParser.rootNodes,
            errors: __spread(this._errors, htmlParser.errors)
        };
    };
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) {
        return text.value;
    };
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        return container.children.map(function (n) { return n.visit(_this); }).join("");
    };
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ cases = Object.keys(icu.cases).map(function (k) { return k + " {" + icu.cases[k].visit(_this) + "}"; });
        // TODO(vicb): Once all format switch to using expression placeholders
        // we should throw when the placeholder is not in the source message
        var /** @type {?} */ exp = this._srcMsg.placeholders.hasOwnProperty(icu.expression)
            ? this._srcMsg.placeholders[icu.expression]
            : icu.expression;
        return "{" + exp + ", " + icu.type + ", " + cases.join(" ") + "}";
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var /** @type {?} */ phName = this._mapper(ph.name);
        if (this._srcMsg.placeholders.hasOwnProperty(phName)) {
            return this.convertToValue(this._srcMsg.placeholders[phName]);
        }
        if (this._srcMsg.placeholderToMessage.hasOwnProperty(phName)) {
            return this.convertToText(this._srcMsg.placeholderToMessage[phName]);
        }
        this._addError(ph, "Unknown placeholder \"" + ph.name + "\"");
        return "";
    };
    // Loaded message contains only placeholders (vs tag and icu placeholders).
    // However when a translation can not be found, we need to serialize the source message
    // which can contain tag placeholders
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        var /** @type {?} */ tag = "" + ph.tag;
        var /** @type {?} */ attrs = Object.keys(ph.attrs)
            .map(function (name) { return name + "=\"" + ph.attrs[name] + "\""; })
            .join(" ");
        if (ph.isVoid) {
            return "<" + tag + " " + attrs + "/>";
        }
        var /** @type {?} */ children = ph.children.map(function (c) { return c.visit(_this); }).join("");
        return "<" + tag + " " + attrs + ">" + children + "</" + tag + ">";
    };
    // Loaded message contains only placeholders (vs tag and icu placeholders).
    // However when a translation can not be found, we need to serialize the source message
    // which can contain tag placeholders
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        // An ICU placeholder references the source message to be serialized
        return this.convertToText(this._srcMsg.placeholderToMessage[ph.name]);
    };
    /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.convertToText = /**
     * Convert a source message to a translated text string:
     * - text nodes are replaced with their translation,
     * - placeholders are replaced with their content,
     * - ICU nodes are converted to ICU expressions.
     * @param {?} srcMsg
     * @return {?}
     */
    function (srcMsg) {
        var _this = this;
        var /** @type {?} */ id = this._digest(srcMsg);
        var /** @type {?} */ mapper = this._mapperFactory ? this._mapperFactory(srcMsg) : null;
        var /** @type {?} */ nodes;
        this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper });
        this._srcMsg = srcMsg;
        if (this._i18nNodesByMsgId.hasOwnProperty(id)) {
            // When there is a translation use its nodes as the source
            // And create a mapper to convert serialized placeholder names to internal names
            nodes = this._i18nNodesByMsgId[id];
            this._mapper = function (name) { return (mapper ? /** @type {?} */ ((mapper.toInternalName(name))) : name); };
        }
        else {
            // When no translation has been found
            // - report an error / a warning / nothing,
            // - use the nodes from the original message
            // - placeholders are already internal and need no mapper
            if (this._missingTranslationStrategy === MissingTranslationStrategy.Error) {
                this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"");
            }
            else if (this._console && this._missingTranslationStrategy === MissingTranslationStrategy.Warning) {
                this._console.warn("Missing translation for message \"" + id + "\"");
            }
            nodes = srcMsg.nodes;
            this._mapper = function (name) { return name; };
        }
        var /** @type {?} */ text = nodes.map(function (node) { return node.visit(_this); }).join("");
        var /** @type {?} */ context = /** @type {?} */ ((this._contextStack.pop()));
        this._srcMsg = context.msg;
        this._mapper = context.mapper;
        return text;
    };
    /**
     * @param {?} placeholder
     * @return {?}
     */
    I18nToHtmlVisitor.prototype.convertToValue = /**
     * @param {?} placeholder
     * @return {?}
     */
    function (placeholder) {
        var /** @type {?} */ param = placeholder.replace(this._interpolationConfig.start, "").replace(this._interpolationConfig.end, "");
        return this._paramKeys.indexOf(param) !== -1 ? this._params[param] : placeholder;
    };
    /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    I18nToHtmlVisitor.prototype._addError = /**
     * @param {?} el
     * @param {?} msg
     * @return {?}
     */
    function (el, msg) {
        this._errors.push(new I18nError(el.sourceSpan, msg));
    };
    return I18nToHtmlVisitor;
}());
/** @enum {number} */
var VisitorMode = {
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
var /**
 * This Visitor is used:
 * 1. to extract all the translatable strings from an html AST (see `extract()`),
 * 2. to replace the translatable strings with the actual translations (see `merge()`)
 *
 * \@internal
 */
Visitor$4 = /** @class */ (function () {
    function Visitor$$1(_implicitTags) {
        if (_implicitTags === void 0) { _implicitTags = []; }
        this._implicitTags = _implicitTags;
        this.blockChildren = [];
    }
    /**
     * Extracts the messages from the tree
     */
    /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    Visitor$$1.prototype.extract = /**
     * Extracts the messages from the tree
     * @param {?} node
     * @param {?} interpolationConfig
     * @return {?}
     */
    function (node, interpolationConfig) {
        this.init(VisitorMode.Extract, interpolationConfig);
        node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ExtractionResult(this.messages, this.errors);
    };
    /**
     * Returns a tree where all translatable nodes are translated
     */
    /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    Visitor$$1.prototype.merge = /**
     * Returns a tree where all translatable nodes are translated
     * @param {?} node
     * @param {?} translations
     * @param {?} interpolationConfig
     * @param {?} params
     * @param {?=} metadata
     * @return {?}
     */
    function (node, translations, interpolationConfig, params, metadata) {
        if (metadata === void 0) { metadata = {}; }
        this.init(VisitorMode.Merge, interpolationConfig, params);
        this.translations = translations;
        this.metadata = metadata;
        var /** @type {?} */ translatedNode = node.visit(this, null);
        if (this.inI18nBlock) {
            this._reportError(node, "Unclosed block");
        }
        return new ParseTreeResult(translatedNode.children, this.errors);
    };
    /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitExpansionCase = /**
     * @param {?} icuCase
     * @param {?} context
     * @return {?}
     */
    function (icuCase, context) {
        // Parse cases for translatable html attributes
        var /** @type {?} */ expression = visitAll(this, icuCase.expression, context);
        if (this.mode === VisitorMode.Merge) {
            return new ExpansionCase(icuCase.value, expression, icuCase.sourceSpan, icuCase.valueSourceSpan, icuCase.expSourceSpan);
        }
    };
    /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitExpansion = /**
     * @param {?} icu
     * @param {?} context
     * @return {?}
     */
    function (icu, context) {
        this.mayBeAddBlockChildren(icu);
        var /** @type {?} */ wasInIcu = this.inIcu;
        if (!this.inIcu) {
            // nested ICU messages should not be extracted but top-level translated as a whole
            if (this.isInTranslatableSection) {
                this.addMessage([icu]);
            }
            this.inIcu = true;
        }
        var /** @type {?} */ cases = visitAll(this, icu.cases, context);
        if (this.mode === VisitorMode.Merge) {
            icu = new Expansion(icu.switchValue, icu.type, cases, icu.sourceSpan, icu.switchValueSourceSpan);
        }
        this.inIcu = wasInIcu;
        return icu;
    };
    /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitComment = /**
     * @param {?} comment
     * @param {?} context
     * @return {?}
     */
    function (comment, context) {
        return;
    };
    /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitText = /**
     * @param {?} text
     * @param {?} context
     * @return {?}
     */
    function (text, context) {
        if (this.isInTranslatableSection) {
            this.mayBeAddBlockChildren(text);
        }
        return text;
    };
    /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitElement = /**
     * @param {?} el
     * @param {?} context
     * @return {?}
     */
    function (el, context) {
        var _this = this;
        this.mayBeAddBlockChildren(el);
        this.depth++;
        var /** @type {?} */ wasInI18nNode = this.inI18nNode;
        var /** @type {?} */ wasInImplicitNode = this.inImplicitNode;
        var /** @type {?} */ childNodes = [];
        var /** @type {?} */ translatedChildNodes = /** @type {?} */ ((undefined));
        // Extract:
        // - top level nodes with the (implicit) "i18n" attribute if not already in a section
        // - ICU messages
        var /** @type {?} */ i18nAttr = getI18nAttr(el);
        var /** @type {?} */ isImplicit = this._implicitTags.some(function (tag) { return el.name === tag; }) && !this.inIcu && !this.isInTranslatableSection;
        var /** @type {?} */ isTopLevelImplicit = !wasInImplicitNode && isImplicit;
        this.inImplicitNode = wasInImplicitNode || isImplicit;
        if (!this.isInTranslatableSection && !this.inIcu) {
            if (i18nAttr || isTopLevelImplicit) {
                this.inI18nNode = true;
                var /** @type {?} */ message = /** @type {?} */ ((this.addMessage(el.children, this.metadata)));
                translatedChildNodes = this.translateMessage(el, message);
            }
            if (this.mode === VisitorMode.Extract) {
                var /** @type {?} */ isTranslatable = i18nAttr || isTopLevelImplicit;
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
            var /** @type {?} */ visitNodes = translatedChildNodes || el.children;
            visitNodes.forEach(function (child) {
                var /** @type {?} */ visited = child.visit(_this, context);
                if (visited && !_this.isInTranslatableSection) {
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
    };
    /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    Visitor$$1.prototype.visitAttribute = /**
     * @param {?} attribute
     * @param {?} context
     * @return {?}
     */
    function (attribute, context) {
        throw new Error("unreachable code");
    };
    /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    Visitor$$1.prototype.init = /**
     * @param {?} mode
     * @param {?} interpolationConfig
     * @param {?=} params
     * @return {?}
     */
    function (mode, interpolationConfig, params) {
        if (params === void 0) { params = {}; }
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
    };
    /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    Visitor$$1.prototype.addMessage = /**
     * @param {?} ast
     * @param {?=} __1
     * @return {?}
     */
    function (ast, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.meaning, meaning = _c === void 0 ? "" : _c, _d = _b.description, description = _d === void 0 ? "" : _d, _e = _b.id, id = _e === void 0 ? "" : _e;
        if (ast.length === 0 ||
            (ast.length === 1 && ast[0] instanceof Attribute && !(/** @type {?} */ (ast[0])).value)) {
            // Do not create empty messages
            return null;
        }
        var /** @type {?} */ message = this.createI18nMessage(ast, meaning, description, id);
        this.messages.push(message);
        return message;
    };
    /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    Visitor$$1.prototype.translateMessage = /**
     * @param {?} el
     * @param {?} message
     * @return {?}
     */
    function (el, message) {
        if (message && this.mode === VisitorMode.Merge) {
            var /** @type {?} */ nodes = this.translations.get(message, this.params);
            if (nodes) {
                return nodes;
            }
            this._reportError(el, "Translation unavailable for message id=\"" + this.translations.digest(message) + "\"");
        }
        return [];
    };
    /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    Visitor$$1.prototype.mayBeAddBlockChildren = /**
     * Add the node as a child of the block when:
     * - we are in a block,
     * - we are not inside a ICU message (those are handled separately),
     * - the node is a "direct child" of the block
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.inI18nBlock && !this.inIcu && this.depth === this.blockStartDepth) {
            this.blockChildren.push(node);
        }
    };
    /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    Visitor$$1.prototype.openTranslatableSection = /**
     * Marks the start of a section, see `_closeTranslatableSection`
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section start");
        }
        else {
            this.msgCountAtSectionStart = this.messages.length;
        }
    };
    Object.defineProperty(Visitor$$1.prototype, "isInTranslatableSection", {
        get: /**
         * A translatable section could be:
         * - the content of translatable element,
         * - nodes between `<!-- i18n -->` and `<!-- /i18n -->` comments
         * @return {?}
         */
        function () {
            return this.msgCountAtSectionStart !== void 0;
        },
        enumerable: true,
        configurable: true
    });
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
    Visitor$$1.prototype._closeTranslatableSection = /**
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
    function (node, directChildren) {
        if (!this.isInTranslatableSection) {
            this._reportError(node, "Unexpected section end");
            return;
        }
        var /** @type {?} */ startIndex = this.msgCountAtSectionStart;
        var /** @type {?} */ significantChildren = directChildren.reduce(function (count, n) { return count + (n instanceof Comment ? 0 : 1); }, 0);
        if (significantChildren === 1) {
            for (var /** @type {?} */ i = this.messages.length - 1; i >= /** @type {?} */ ((startIndex)); i--) {
                var /** @type {?} */ ast = this.messages[i].nodes;
                if (!(ast.length === 1 && ast[0] instanceof Text$1)) {
                    this.messages.splice(i, 1);
                    break;
                }
            }
        }
        this.msgCountAtSectionStart = undefined;
    };
    /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    Visitor$$1.prototype._reportError = /**
     * @param {?} node
     * @param {?} msg
     * @return {?}
     */
    function (node, msg) {
        this.errors.push(new I18nError(/** @type {?} */ ((node.sourceSpan)), msg));
    };
    return Visitor$$1;
}());
/**
 * @param {?} p
 * @return {?}
 */
function getI18nAttr(p) {
    return p.attrs.find(function (attr) { return attr.name === _I18N_ATTR; }) || null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new InjectionToken("MissingTranslationStrategy");
/**
 * A speculative polyfill to use i18n code translations
 */
var I18n = /** @class */ (function () {
    function I18n(format, translations, locale, missingTranslationStrategy) {
        if (missingTranslationStrategy === void 0) { missingTranslationStrategy = MissingTranslationStrategy.Warning; }
        var /** @type {?} */ loadFct;
        var /** @type {?} */ digest;
        var /** @type {?} */ createMapper = function (message) { return null; };
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
                throw new Error("Unknown translations format " + format);
        }
        var /** @type {?} */ htmlParser = new HtmlParser();
        var /** @type {?} */ translationsBundle = TranslationBundle.load(translations, "i18n", digest, createMapper, loadFct, missingTranslationStrategy);
        // todo use interpolation config
        return function (def, params) {
            if (params === void 0) { params = {}; }
            var /** @type {?} */ content = typeof def === "string" ? def : def.value;
            var /** @type {?} */ metadata = {};
            if (typeof def === "object") {
                metadata["id"] = def.id;
                metadata["meaning"] = def.meaning;
                metadata["description"] = def.description;
            }
            var /** @type {?} */ htmlParserResult = htmlParser.parse(content, "", true);
            if (htmlParserResult.errors.length) {
                throw htmlParserResult.errors;
            }
            var /** @type {?} */ mergedNodes = htmlParser.mergeTranslations(htmlParserResult.rootNodes, translationsBundle, params, metadata, ["wrapper"]);
            return serializeNodes(mergedNodes.rootNodes, locale, params).join("");
        };
    }
    I18n.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    I18n.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS_FORMAT,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
        { type: MissingTranslationStrategy, decorators: [{ type: Optional }, { type: Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
    ]; };
    return I18n;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { I18n, MISSING_TRANSLATION_STRATEGY };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzd2l0Y2hWYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiBFeHBhbnNpb25DYXNlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RXhwYW5zaW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25DYXNlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBOb2RlW10sXG4gICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgdmFsdWVTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIGV4cFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhblxuICApIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbkNhc2UodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU3Bhbj86IFBhcnNlU291cmNlU3BhblxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyaWJ1dGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgYXR0cnM6IEF0dHJpYnV0ZVtdLFxuICAgIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuIHwgbnVsbCA9IG51bGwsXG4gICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbW1lbnQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29tbWVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgZnJvbSBgdmlzaXQoKWAgd2lsbCBwcmV2ZW50IGB2aXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvIHRoZSB0eXBlZFxuICAvLyBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHMgcmVzdWx0IGFycmF5LlxuICB2aXNpdD8obm9kZTogTm9kZSwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBFeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEFsbCh2aXNpdG9yOiBWaXNpdG9yLCBub2RlczogTm9kZVtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0XG4gICAgPyAoYXN0OiBOb2RlKSA9PiB2aXNpdG9yLnZpc2l0IShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KVxuICAgIDogKGFzdDogTm9kZSkgPT4gYXN0LnZpc2l0KHZpc2l0b3IsIGNvbnRleHQpO1xuICBub2Rlcy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgY29uc3QgYXN0UmVzdWx0ID0gdmlzaXQoYXN0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgc291cmNlczogTWVzc2FnZVNwYW5bXTtcblxuICAvKipcbiAgICogQHBhcmFtIHNvdXJjZSBtZXNzYWdlIEFTVFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXJzIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gc3RhdGljIGNvbnRlbnRcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyVG9NZXNzYWdlIG1hcHMgcGxhY2Vob2xkZXIgbmFtZXMgdG8gbWVzc2FnZXMgKHVzZWQgZm9yIG5lc3RlZCBJQ1UgbWVzc2FnZXMpXG4gICAqIEBwYXJhbSBtZWFuaW5nXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBub2RlczogTm9kZVtdLFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlcnM6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBwbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IE1lc3NhZ2V9LFxuICAgIHB1YmxpYyBtZWFuaW5nOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGlkOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZVBhdGg6IG5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmwsXG4gICAgICAgICAgc3RhcnRMaW5lOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICAgIHN0YXJ0Q29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDEsXG4gICAgICAgICAgZW5kTGluZTogbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0uc291cmNlU3Bhbi5lbmQubGluZSArIDEsXG4gICAgICAgICAgZW5kQ29sOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmNvbCArIDFcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VyY2VzID0gW107XG4gICAgfVxuICB9XG59XG5cbi8vIGxpbmUgYW5kIGNvbHVtbnMgaW5kZXhlcyBhcmUgMSBiYXNlZFxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlU3BhbiB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIHN0YXJ0TGluZTogbnVtYmVyO1xuICBzdGFydENvbDogbnVtYmVyO1xuICBlbmRMaW5lOiBudW1iZXI7XG4gIGVuZENvbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG4vLyBUT0RPKHZpY2IpOiBkbyB3ZSByZWFsbHkgbmVlZCB0aGlzIG5vZGUgKHZzIGFuIGFycmF5KSA/XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29udGFpbmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3UgaW1wbGVtZW50cyBOb2RlIHtcbiAgcHVibGljIGV4cHJlc3Npb25QbGFjZWhvbGRlcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmcsXG4gICAgcHVibGljIGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9LFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWdQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sXG4gICAgcHVibGljIHN0YXJ0TmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjbG9zZU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgaXNWb2lkOiBib29sZWFuLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnUGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEljdVBsYWNlaG9sZGVyIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogSWN1LCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0SWN1UGxhY2Vob2xkZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuLy8gQ2xvbmUgdGhlIEFTVFxuZXhwb3J0IGNsYXNzIENsb25lVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IFRleHQge1xuICAgIHJldHVybiBuZXcgVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBDb250YWluZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBuZXcgQ29udGFpbmVyKGNoaWxkcmVuLCBjb250YWluZXIuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IEljdSB7XG4gICAgY29uc3QgY2FzZXM6IHtbazogc3RyaW5nXTogTm9kZX0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goa2V5ID0+IChjYXNlc1trZXldID0gaWN1LmNhc2VzW2tleV0udmlzaXQodGhpcywgY29udGV4dCkpKTtcbiAgICBjb25zdCBtc2cgPSBuZXcgSWN1KGljdS5leHByZXNzaW9uLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBtc2cuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gaWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBUYWdQbGFjZWhvbGRlciB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IFRhZ1BsYWNlaG9sZGVyKHBoLnRhZywgcGguYXR0cnMsIHBoLnN0YXJ0TmFtZSwgcGguY2xvc2VOYW1lLCBjaGlsZHJlbiwgcGguaXNWb2lkLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IFBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogUGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgUGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBJY3VQbGFjZWhvbGRlciB7XG4gICAgcmV0dXJuIG5ldyBJY3VQbGFjZWhvbGRlcihwaC52YWx1ZSwgcGgubmFtZSwgcGguc291cmNlU3Bhbik7XG4gIH1cbn1cblxuLy8gVmlzaXQgYWxsIHRoZSBub2RlcyByZWN1cnNpdmVseVxuZXhwb3J0IGNsYXNzIFJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBDb250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goayA9PiB7XG4gICAgICBpY3UuY2FzZXNba10udmlzaXQodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBUYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpc2l0b3Ige1xuICB2aXNpdFRhZyh0YWc6IFRhZyk6IGFueTtcbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogYW55O1xuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogYW55O1xuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogRG9jdHlwZSk6IGFueTtcbn1cblxuY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIElWaXNpdG9yIHtcbiAgdmlzaXRUYWcodGFnOiBUYWcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gdGhpcy5fc2VyaWFsaXplQXR0cmlidXRlcyh0YWcuYXR0cnMpO1xuICAgIGlmICh0YWcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9Lz5gO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ckNoaWxkcmVuID0gdGFnLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIHJldHVybiBgPCR7dGFnLm5hbWV9JHtzdHJBdHRyc30+JHtzdHJDaGlsZHJlbi5qb2luKFwiXCIpfTwvJHt0YWcubmFtZX0+YDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gX2VzY2FwZVhtbCh0ZXh0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBlbGVtZW50LmF0dHJzLmZvckVhY2goKGF0dHI6IG1sLkF0dHJpYnV0ZSkgPT4ge1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgdGFnID0gbmV3IFRhZyhlbGVtZW50Lm5hbWUsIGF0dHJzLCBlbGVtZW50LmNoaWxkcmVuIGFzIGFueSk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRUYWcodGFnKTtcbiAgfVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogRGVjbGFyYXRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBgPD94bWwke3RoaXMuX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoZGVjbC5hdHRycyl9ID8+YDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAubWFwKChuYW1lOiBzdHJpbmcpID0+IGAke25hbWV9PVwiJHtfZXNjYXBlWG1sKGF0dHJzW25hbWVdKX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgcmV0dXJuIHN0ckF0dHJzLmxlbmd0aCA+IDAgPyBcIiBcIiArIHN0ckF0dHJzIDogXCJcIjtcbiAgfVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiBEb2N0eXBlKTogYW55IHtcbiAgICByZXR1cm4gYDwhRE9DVFlQRSAke2RvY3R5cGUucm9vdFRhZ30gW1xcbiR7ZG9jdHlwZS5kdGR9XFxuXT5gO1xuICB9XG59XG5cbmNvbnN0IF92aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShub2RlczogTm9kZVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5vZGVzLm1hcCgobm9kZTogTm9kZSk6IHN0cmluZyA9PiBub2RlLnZpc2l0KF92aXNpdG9yKSkuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWNsYXJhdGlvbiBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREZWNsYXJhdGlvbih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdHlwZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vdFRhZzogc3RyaW5nLCBwdWJsaWMgZHRkOiBzdHJpbmcpIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9jdHlwZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge30sIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdID0gW10pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENSIGV4dGVuZHMgVGV4dCB7XG4gIGNvbnN0cnVjdG9yKHdzID0gMCkge1xuICAgIHN1cGVyKGBcXG4ke25ldyBBcnJheSh3cyArIDEpLmpvaW4oXCIgXCIpfWApO1xuICB9XG59XG5cbmNvbnN0IF9FU0NBUEVEX0NIQVJTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvJi9nLCBcIiZhbXA7XCJdLFxuICBbL1wiL2csIFwiJnF1b3Q7XCJdLFxuICBbLycvZywgXCImYXBvcztcIl0sXG4gIFsvPC9nLCBcIiZsdDtcIl0sXG4gIFsvPi9nLCBcIiZndDtcIl1cbl07XG5cbmZ1bmN0aW9uIF9lc2NhcGVYbWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIF9FU0NBUEVEX0NIQVJTLnJlZHVjZSgoc3RyOiBzdHJpbmcsIGVudHJ5OiBbUmVnRXhwLCBzdHJpbmddKSA9PiBzdHIucmVwbGFjZShlbnRyeVswXSwgZW50cnlbMV0pLCB0ZXh0KTtcbn1cbiIsImltcG9ydCB7STE4bkRlZn0gZnJvbSBcIi4uL2kxOG4tcG9seWZpbGxcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY2xhc3MgUGFyc2VMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlOiBQYXJzZVNvdXJjZUZpbGUsIHB1YmxpYyBvZmZzZXQ6IG51bWJlciwgcHVibGljIGxpbmU6IG51bWJlciwgcHVibGljIGNvbDogbnVtYmVyKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0ICE9IG51bGwgPyBgJHt0aGlzLmxpbmV9OiR7dGhpcy5jb2x9YCA6IFwiXCI7XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHNvdXJjZSBhcm91bmQgdGhlIGxvY2F0aW9uXG4gIC8vIFVwIHRvIGBtYXhDaGFyc2Agb3IgYG1heExpbmVzYCBvbiBlYWNoIHNpZGUgb2YgdGhlIGxvY2F0aW9uXG4gIGdldENvbnRleHQobWF4Q2hhcnM6IG51bWJlciwgbWF4TGluZXM6IG51bWJlcik6IHtiZWZvcmU6IHN0cmluZzsgYWZ0ZXI6IHN0cmluZ30gfCBudWxsIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5maWxlLmNvbnRlbnQ7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoc3RhcnRPZmZzZXQgIT0gbnVsbCkge1xuICAgICAgaWYgKHN0YXJ0T2Zmc2V0ID4gY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXJ0T2Zmc2V0ID0gY29udGVudC5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgbGV0IGVuZE9mZnNldCA9IHN0YXJ0T2Zmc2V0O1xuICAgICAgbGV0IGN0eENoYXJzID0gMDtcbiAgICAgIGxldCBjdHhMaW5lcyA9IDA7XG5cbiAgICAgIHdoaWxlIChjdHhDaGFycyA8IG1heENoYXJzICYmIHN0YXJ0T2Zmc2V0ID4gMCkge1xuICAgICAgICBzdGFydE9mZnNldC0tO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtzdGFydE9mZnNldF0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBpZiAoKytjdHhMaW5lcyA9PT0gbWF4TGluZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdHhDaGFycyA9IDA7XG4gICAgICBjdHhMaW5lcyA9IDA7XG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBlbmRPZmZzZXQgPCBjb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZW5kT2Zmc2V0Kys7XG4gICAgICAgIGN0eENoYXJzKys7XG4gICAgICAgIGlmIChjb250ZW50W2VuZE9mZnNldF0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBpZiAoKytjdHhMaW5lcyA9PT0gbWF4TGluZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmU6IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0LCB0aGlzLm9mZnNldCksXG4gICAgICAgIGFmdGVyOiBjb250ZW50LnN1YnN0cmluZyh0aGlzLm9mZnNldCwgZW5kT2Zmc2V0ICsgMSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlRmlsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB1cmwgPSBcIlwiKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VTcGFuIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZW5kOiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZGV0YWlsczogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydC5maWxlLmNvbnRlbnQuc3Vic3RyaW5nKHRoaXMuc3RhcnQub2Zmc2V0LCB0aGlzLmVuZC5vZmZzZXQpO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFBhcnNlRXJyb3JMZXZlbCB7XG4gIFdBUk5JTkcsXG4gIEVSUk9SXG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUVycm9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNwYW46IFBhcnNlU291cmNlU3BhbixcbiAgICBwdWJsaWMgbXNnOiBzdHJpbmcsXG4gICAgcHVibGljIGxldmVsOiBQYXJzZUVycm9yTGV2ZWwgPSBQYXJzZUVycm9yTGV2ZWwuRVJST1JcbiAgKSB7fVxuXG4gIGNvbnRleHR1YWxNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5zcGFuLnN0YXJ0LmdldENvbnRleHQoMTAwLCAzKTtcbiAgICByZXR1cm4gY3R4ID8gYCAoXCIke2N0eC5iZWZvcmV9WyR7UGFyc2VFcnJvckxldmVsW3RoaXMubGV2ZWxdfSAtPl0ke2N0eC5hZnRlcn1cIilgIDogXCJcIjtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuc3Bhbi5kZXRhaWxzID8gYCwgJHt0aGlzLnNwYW4uZGV0YWlsc31gIDogXCJcIjtcbiAgICByZXR1cm4gYCR7dGhpcy5tc2d9JHt0aGlzLmNvbnRleHR1YWxNZXNzYWdlKCl9OiAke3RoaXMuc3Bhbi5zdGFydH0ke2RldGFpbHN9YDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGkxOG4gZXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBJMThuRXJyb3IgZXh0ZW5kcyBQYXJzZUVycm9yIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRpb25Db25maWcge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhcnQ6IHN0cmluZywgcHVibGljIGVuZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IG5ldyBJbnRlcnBvbGF0aW9uQ29uZmlnKFwie3tcIiwgXCJ9fVwiKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNvbnN0ICRFT0YgPSAwO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSA5O1xuZXhwb3J0IGNvbnN0ICRMRiA9IDEwO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gMTE7XG5leHBvcnQgY29uc3QgJEZGID0gMTI7XG5leHBvcnQgY29uc3QgJENSID0gMTM7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gMzI7XG5leHBvcnQgY29uc3QgJEJBTkcgPSAzMztcbmV4cG9ydCBjb25zdCAkRFEgPSAzNDtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IDM1O1xuZXhwb3J0IGNvbnN0ICQkID0gMzY7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSAzNztcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gMzg7XG5leHBvcnQgY29uc3QgJFNRID0gMzk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IDQwO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSA0MTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IDQyO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gNDM7XG5leHBvcnQgY29uc3QgJENPTU1BID0gNDQ7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gNDU7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IDQ2O1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IDQ3O1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IDU4O1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSA1OTtcbmV4cG9ydCBjb25zdCAkTFQgPSA2MDtcbmV4cG9ydCBjb25zdCAkRVEgPSA2MTtcbmV4cG9ydCBjb25zdCAkR1QgPSA2MjtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSA2MztcblxuZXhwb3J0IGNvbnN0ICQwID0gNDg7XG5leHBvcnQgY29uc3QgJDkgPSA1NztcblxuZXhwb3J0IGNvbnN0ICRBID0gNjU7XG5leHBvcnQgY29uc3QgJEUgPSA2OTtcbmV4cG9ydCBjb25zdCAkRiA9IDcwO1xuZXhwb3J0IGNvbnN0ICRYID0gODg7XG5leHBvcnQgY29uc3QgJFogPSA5MDtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0tFVCA9IDkxO1xuZXhwb3J0IGNvbnN0ICRCQUNLU0xBU0ggPSA5MjtcbmV4cG9ydCBjb25zdCAkUkJSQUNLRVQgPSA5MztcbmV4cG9ydCBjb25zdCAkQ0FSRVQgPSA5NDtcbmV4cG9ydCBjb25zdCAkXyA9IDk1O1xuXG5leHBvcnQgY29uc3QgJGEgPSA5NztcbmV4cG9ydCBjb25zdCAkZSA9IDEwMTtcbmV4cG9ydCBjb25zdCAkZiA9IDEwMjtcbmV4cG9ydCBjb25zdCAkbiA9IDExMDtcbmV4cG9ydCBjb25zdCAkciA9IDExNDtcbmV4cG9ydCBjb25zdCAkdCA9IDExNjtcbmV4cG9ydCBjb25zdCAkdSA9IDExNztcbmV4cG9ydCBjb25zdCAkdiA9IDExODtcbmV4cG9ydCBjb25zdCAkeCA9IDEyMDtcbmV4cG9ydCBjb25zdCAkeiA9IDEyMjtcblxuZXhwb3J0IGNvbnN0ICRMQlJBQ0UgPSAxMjM7XG5leHBvcnQgY29uc3QgJEJBUiA9IDEyNDtcbmV4cG9ydCBjb25zdCAkUkJSQUNFID0gMTI1O1xuZXhwb3J0IGNvbnN0ICROQlNQID0gMTYwO1xuXG5leHBvcnQgY29uc3QgJFBJUEUgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFRJTERBID0gMTI2O1xuZXhwb3J0IGNvbnN0ICRBVCA9IDY0O1xuXG5leHBvcnQgY29uc3QgJEJUID0gOTY7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCBjb2RlID09PSAkTkJTUDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAkMCA8PSBjb2RlICYmIGNvZGUgPD0gJDk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpTGV0dGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkeikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkWik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FzY2lpSGV4RGlnaXQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkYSAmJiBjb2RlIDw9ICRmKSB8fCAoY29kZSA+PSAkQSAmJiBjb2RlIDw9ICRGKSB8fCBpc0RpZ2l0KGNvZGUpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgZW51bSBUYWdDb250ZW50VHlwZSB7XG4gIFJBV19URVhULFxuICBFU0NBUEFCTEVfUkFXX1RFWFQsXG4gIFBBUlNBQkxFX0RBVEFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWdEZWZpbml0aW9uIHtcbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW47XG4gIHJlcXVpcmVkUGFyZW50czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICBwYXJlbnRUb0FkZDogc3RyaW5nO1xuICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogc3RyaW5nIHwgbnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbjtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbjtcblxuICBpc0Nsb3NlZEJ5Q2hpbGQobmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0TnNOYW1lKGVsZW1lbnROYW1lOiBzdHJpbmcpOiBbc3RyaW5nIHwgbnVsbCwgc3RyaW5nXSB7XG4gIGlmIChlbGVtZW50TmFtZVswXSAhPT0gXCI6XCIpIHtcbiAgICByZXR1cm4gW251bGwsIGVsZW1lbnROYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGNvbG9uSW5kZXggPSBlbGVtZW50TmFtZS5pbmRleE9mKFwiOlwiLCAxKTtcblxuICBpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGZvcm1hdCBcIiR7ZWxlbWVudE5hbWV9XCIgZXhwZWN0aW5nIFwiOm5hbWVzcGFjZTpuYW1lXCJgKTtcbiAgfVxuXG4gIHJldHVybiBbZWxlbWVudE5hbWUuc2xpY2UoMSwgY29sb25JbmRleCksIGVsZW1lbnROYW1lLnNsaWNlKGNvbG9uSW5kZXggKyAxKV07XG59XG5cbi8vIGA8bmctY29udGFpbmVyPmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdDb250YWluZXIodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy1jb250YWluZXJcIjtcbn1cblxuLy8gYDxuZy1jb250ZW50PmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdDb250ZW50KHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGVudFwiO1xufVxuXG4vLyBgPG5nLXRlbXBsYXRlPmAgdGFncyB3b3JrIHRoZSBzYW1lIHJlZ2FyZGxlc3MgdGhlIG5hbWVzcGFjZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTmdUZW1wbGF0ZSh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLXRlbXBsYXRlXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogc3RyaW5nKTogc3RyaW5nO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5zUHJlZml4KGZ1bGxOYW1lOiBudWxsKTogbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gZnVsbE5hbWUgPT09IG51bGwgPyBudWxsIDogc3BsaXROc05hbWUoZnVsbE5hbWUpWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VOc0FuZE5hbWUocHJlZml4OiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGA6JHtwcmVmaXh9OiR7bG9jYWxOYW1lfWAgOiBsb2NhbE5hbWU7XG59XG5cbi8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZXNcbi8vIHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbnRpdGllcy5qc29uXG4vLyBUaGlzIGxpc3QgaXMgbm90IGV4aGF1c3RpdmUgdG8ga2VlcCB0aGUgY29tcGlsZXIgZm9vdHByaW50IGxvdy5cbi8vIFRoZSBgJiMxMjM7YCAvIGAmI3gxYWI7YCBzeW50YXggc2hvdWxkIGJlIHVzZWQgd2hlbiB0aGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSBkb2VzIG5vdFxuLy8gZXhpc3QuXG5cbmV4cG9ydCBjb25zdCBOQU1FRF9FTlRJVElFUzoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICBBYWN1dGU6IFwiXFx1MDBDMVwiLFxuICBhYWN1dGU6IFwiXFx1MDBFMVwiLFxuICBBY2lyYzogXCJcXHUwMEMyXCIsXG4gIGFjaXJjOiBcIlxcdTAwRTJcIixcbiAgYWN1dGU6IFwiXFx1MDBCNFwiLFxuICBBRWxpZzogXCJcXHUwMEM2XCIsXG4gIGFlbGlnOiBcIlxcdTAwRTZcIixcbiAgQWdyYXZlOiBcIlxcdTAwQzBcIixcbiAgYWdyYXZlOiBcIlxcdTAwRTBcIixcbiAgYWxlZnN5bTogXCJcXHUyMTM1XCIsXG4gIEFscGhhOiBcIlxcdTAzOTFcIixcbiAgYWxwaGE6IFwiXFx1MDNCMVwiLFxuICBhbXA6IFwiJlwiLFxuICBhbmQ6IFwiXFx1MjIyN1wiLFxuICBhbmc6IFwiXFx1MjIyMFwiLFxuICBhcG9zOiBcIlxcdTAwMjdcIixcbiAgQXJpbmc6IFwiXFx1MDBDNVwiLFxuICBhcmluZzogXCJcXHUwMEU1XCIsXG4gIGFzeW1wOiBcIlxcdTIyNDhcIixcbiAgQXRpbGRlOiBcIlxcdTAwQzNcIixcbiAgYXRpbGRlOiBcIlxcdTAwRTNcIixcbiAgQXVtbDogXCJcXHUwMEM0XCIsXG4gIGF1bWw6IFwiXFx1MDBFNFwiLFxuICBiZHF1bzogXCJcXHUyMDFFXCIsXG4gIEJldGE6IFwiXFx1MDM5MlwiLFxuICBiZXRhOiBcIlxcdTAzQjJcIixcbiAgYnJ2YmFyOiBcIlxcdTAwQTZcIixcbiAgYnVsbDogXCJcXHUyMDIyXCIsXG4gIGNhcDogXCJcXHUyMjI5XCIsXG4gIENjZWRpbDogXCJcXHUwMEM3XCIsXG4gIGNjZWRpbDogXCJcXHUwMEU3XCIsXG4gIGNlZGlsOiBcIlxcdTAwQjhcIixcbiAgY2VudDogXCJcXHUwMEEyXCIsXG4gIENoaTogXCJcXHUwM0E3XCIsXG4gIGNoaTogXCJcXHUwM0M3XCIsXG4gIGNpcmM6IFwiXFx1MDJDNlwiLFxuICBjbHViczogXCJcXHUyNjYzXCIsXG4gIGNvbmc6IFwiXFx1MjI0NVwiLFxuICBjb3B5OiBcIlxcdTAwQTlcIixcbiAgY3JhcnI6IFwiXFx1MjFCNVwiLFxuICBjdXA6IFwiXFx1MjIyQVwiLFxuICBjdXJyZW46IFwiXFx1MDBBNFwiLFxuICBkYWdnZXI6IFwiXFx1MjAyMFwiLFxuICBEYWdnZXI6IFwiXFx1MjAyMVwiLFxuICBkYXJyOiBcIlxcdTIxOTNcIixcbiAgZEFycjogXCJcXHUyMUQzXCIsXG4gIGRlZzogXCJcXHUwMEIwXCIsXG4gIERlbHRhOiBcIlxcdTAzOTRcIixcbiAgZGVsdGE6IFwiXFx1MDNCNFwiLFxuICBkaWFtczogXCJcXHUyNjY2XCIsXG4gIGRpdmlkZTogXCJcXHUwMEY3XCIsXG4gIEVhY3V0ZTogXCJcXHUwMEM5XCIsXG4gIGVhY3V0ZTogXCJcXHUwMEU5XCIsXG4gIEVjaXJjOiBcIlxcdTAwQ0FcIixcbiAgZWNpcmM6IFwiXFx1MDBFQVwiLFxuICBFZ3JhdmU6IFwiXFx1MDBDOFwiLFxuICBlZ3JhdmU6IFwiXFx1MDBFOFwiLFxuICBlbXB0eTogXCJcXHUyMjA1XCIsXG4gIGVtc3A6IFwiXFx1MjAwM1wiLFxuICBlbnNwOiBcIlxcdTIwMDJcIixcbiAgRXBzaWxvbjogXCJcXHUwMzk1XCIsXG4gIGVwc2lsb246IFwiXFx1MDNCNVwiLFxuICBlcXVpdjogXCJcXHUyMjYxXCIsXG4gIEV0YTogXCJcXHUwMzk3XCIsXG4gIGV0YTogXCJcXHUwM0I3XCIsXG4gIEVUSDogXCJcXHUwMEQwXCIsXG4gIGV0aDogXCJcXHUwMEYwXCIsXG4gIEV1bWw6IFwiXFx1MDBDQlwiLFxuICBldW1sOiBcIlxcdTAwRUJcIixcbiAgZXVybzogXCJcXHUyMEFDXCIsXG4gIGV4aXN0OiBcIlxcdTIyMDNcIixcbiAgZm5vZjogXCJcXHUwMTkyXCIsXG4gIGZvcmFsbDogXCJcXHUyMjAwXCIsXG4gIGZyYWMxMjogXCJcXHUwMEJEXCIsXG4gIGZyYWMxNDogXCJcXHUwMEJDXCIsXG4gIGZyYWMzNDogXCJcXHUwMEJFXCIsXG4gIGZyYXNsOiBcIlxcdTIwNDRcIixcbiAgR2FtbWE6IFwiXFx1MDM5M1wiLFxuICBnYW1tYTogXCJcXHUwM0IzXCIsXG4gIGdlOiBcIlxcdTIyNjVcIixcbiAgZ3Q6IFwiPlwiLFxuICBoYXJyOiBcIlxcdTIxOTRcIixcbiAgaEFycjogXCJcXHUyMUQ0XCIsXG4gIGhlYXJ0czogXCJcXHUyNjY1XCIsXG4gIGhlbGxpcDogXCJcXHUyMDI2XCIsXG4gIElhY3V0ZTogXCJcXHUwMENEXCIsXG4gIGlhY3V0ZTogXCJcXHUwMEVEXCIsXG4gIEljaXJjOiBcIlxcdTAwQ0VcIixcbiAgaWNpcmM6IFwiXFx1MDBFRVwiLFxuICBpZXhjbDogXCJcXHUwMEExXCIsXG4gIElncmF2ZTogXCJcXHUwMENDXCIsXG4gIGlncmF2ZTogXCJcXHUwMEVDXCIsXG4gIGltYWdlOiBcIlxcdTIxMTFcIixcbiAgaW5maW46IFwiXFx1MjIxRVwiLFxuICBpbnQ6IFwiXFx1MjIyQlwiLFxuICBJb3RhOiBcIlxcdTAzOTlcIixcbiAgaW90YTogXCJcXHUwM0I5XCIsXG4gIGlxdWVzdDogXCJcXHUwMEJGXCIsXG4gIGlzaW46IFwiXFx1MjIwOFwiLFxuICBJdW1sOiBcIlxcdTAwQ0ZcIixcbiAgaXVtbDogXCJcXHUwMEVGXCIsXG4gIEthcHBhOiBcIlxcdTAzOUFcIixcbiAga2FwcGE6IFwiXFx1MDNCQVwiLFxuICBMYW1iZGE6IFwiXFx1MDM5QlwiLFxuICBsYW1iZGE6IFwiXFx1MDNCQlwiLFxuICBsYW5nOiBcIlxcdTI3RThcIixcbiAgbGFxdW86IFwiXFx1MDBBQlwiLFxuICBsYXJyOiBcIlxcdTIxOTBcIixcbiAgbEFycjogXCJcXHUyMUQwXCIsXG4gIGxjZWlsOiBcIlxcdTIzMDhcIixcbiAgbGRxdW86IFwiXFx1MjAxQ1wiLFxuICBsZTogXCJcXHUyMjY0XCIsXG4gIGxmbG9vcjogXCJcXHUyMzBBXCIsXG4gIGxvd2FzdDogXCJcXHUyMjE3XCIsXG4gIGxvejogXCJcXHUyNUNBXCIsXG4gIGxybTogXCJcXHUyMDBFXCIsXG4gIGxzYXF1bzogXCJcXHUyMDM5XCIsXG4gIGxzcXVvOiBcIlxcdTIwMThcIixcbiAgbHQ6IFwiPFwiLFxuICBtYWNyOiBcIlxcdTAwQUZcIixcbiAgbWRhc2g6IFwiXFx1MjAxNFwiLFxuICBtaWNybzogXCJcXHUwMEI1XCIsXG4gIG1pZGRvdDogXCJcXHUwMEI3XCIsXG4gIG1pbnVzOiBcIlxcdTIyMTJcIixcbiAgTXU6IFwiXFx1MDM5Q1wiLFxuICBtdTogXCJcXHUwM0JDXCIsXG4gIG5hYmxhOiBcIlxcdTIyMDdcIixcbiAgbmJzcDogXCJcXHUwMEEwXCIsXG4gIG5kYXNoOiBcIlxcdTIwMTNcIixcbiAgbmU6IFwiXFx1MjI2MFwiLFxuICBuaTogXCJcXHUyMjBCXCIsXG4gIG5vdDogXCJcXHUwMEFDXCIsXG4gIG5vdGluOiBcIlxcdTIyMDlcIixcbiAgbnN1YjogXCJcXHUyMjg0XCIsXG4gIE50aWxkZTogXCJcXHUwMEQxXCIsXG4gIG50aWxkZTogXCJcXHUwMEYxXCIsXG4gIE51OiBcIlxcdTAzOURcIixcbiAgbnU6IFwiXFx1MDNCRFwiLFxuICBPYWN1dGU6IFwiXFx1MDBEM1wiLFxuICBvYWN1dGU6IFwiXFx1MDBGM1wiLFxuICBPY2lyYzogXCJcXHUwMEQ0XCIsXG4gIG9jaXJjOiBcIlxcdTAwRjRcIixcbiAgT0VsaWc6IFwiXFx1MDE1MlwiLFxuICBvZWxpZzogXCJcXHUwMTUzXCIsXG4gIE9ncmF2ZTogXCJcXHUwMEQyXCIsXG4gIG9ncmF2ZTogXCJcXHUwMEYyXCIsXG4gIG9saW5lOiBcIlxcdTIwM0VcIixcbiAgT21lZ2E6IFwiXFx1MDNBOVwiLFxuICBvbWVnYTogXCJcXHUwM0M5XCIsXG4gIE9taWNyb246IFwiXFx1MDM5RlwiLFxuICBvbWljcm9uOiBcIlxcdTAzQkZcIixcbiAgb3BsdXM6IFwiXFx1MjI5NVwiLFxuICBvcjogXCJcXHUyMjI4XCIsXG4gIG9yZGY6IFwiXFx1MDBBQVwiLFxuICBvcmRtOiBcIlxcdTAwQkFcIixcbiAgT3NsYXNoOiBcIlxcdTAwRDhcIixcbiAgb3NsYXNoOiBcIlxcdTAwRjhcIixcbiAgT3RpbGRlOiBcIlxcdTAwRDVcIixcbiAgb3RpbGRlOiBcIlxcdTAwRjVcIixcbiAgb3RpbWVzOiBcIlxcdTIyOTdcIixcbiAgT3VtbDogXCJcXHUwMEQ2XCIsXG4gIG91bWw6IFwiXFx1MDBGNlwiLFxuICBwYXJhOiBcIlxcdTAwQjZcIixcbiAgcGVybWlsOiBcIlxcdTIwMzBcIixcbiAgcGVycDogXCJcXHUyMkE1XCIsXG4gIFBoaTogXCJcXHUwM0E2XCIsXG4gIHBoaTogXCJcXHUwM0M2XCIsXG4gIFBpOiBcIlxcdTAzQTBcIixcbiAgcGk6IFwiXFx1MDNDMFwiLFxuICBwaXY6IFwiXFx1MDNENlwiLFxuICBwbHVzbW46IFwiXFx1MDBCMVwiLFxuICBwb3VuZDogXCJcXHUwMEEzXCIsXG4gIHByaW1lOiBcIlxcdTIwMzJcIixcbiAgUHJpbWU6IFwiXFx1MjAzM1wiLFxuICBwcm9kOiBcIlxcdTIyMEZcIixcbiAgcHJvcDogXCJcXHUyMjFEXCIsXG4gIFBzaTogXCJcXHUwM0E4XCIsXG4gIHBzaTogXCJcXHUwM0M4XCIsXG4gIHF1b3Q6IFwiXFx1MDAyMlwiLFxuICByYWRpYzogXCJcXHUyMjFBXCIsXG4gIHJhbmc6IFwiXFx1MjdFOVwiLFxuICByYXF1bzogXCJcXHUwMEJCXCIsXG4gIHJhcnI6IFwiXFx1MjE5MlwiLFxuICByQXJyOiBcIlxcdTIxRDJcIixcbiAgcmNlaWw6IFwiXFx1MjMwOVwiLFxuICByZHF1bzogXCJcXHUyMDFEXCIsXG4gIHJlYWw6IFwiXFx1MjExQ1wiLFxuICByZWc6IFwiXFx1MDBBRVwiLFxuICByZmxvb3I6IFwiXFx1MjMwQlwiLFxuICBSaG86IFwiXFx1MDNBMVwiLFxuICByaG86IFwiXFx1MDNDMVwiLFxuICBybG06IFwiXFx1MjAwRlwiLFxuICByc2FxdW86IFwiXFx1MjAzQVwiLFxuICByc3F1bzogXCJcXHUyMDE5XCIsXG4gIHNicXVvOiBcIlxcdTIwMUFcIixcbiAgU2Nhcm9uOiBcIlxcdTAxNjBcIixcbiAgc2Nhcm9uOiBcIlxcdTAxNjFcIixcbiAgc2RvdDogXCJcXHUyMkM1XCIsXG4gIHNlY3Q6IFwiXFx1MDBBN1wiLFxuICBzaHk6IFwiXFx1MDBBRFwiLFxuICBTaWdtYTogXCJcXHUwM0EzXCIsXG4gIHNpZ21hOiBcIlxcdTAzQzNcIixcbiAgc2lnbWFmOiBcIlxcdTAzQzJcIixcbiAgc2ltOiBcIlxcdTIyM0NcIixcbiAgc3BhZGVzOiBcIlxcdTI2NjBcIixcbiAgc3ViOiBcIlxcdTIyODJcIixcbiAgc3ViZTogXCJcXHUyMjg2XCIsXG4gIHN1bTogXCJcXHUyMjExXCIsXG4gIHN1cDogXCJcXHUyMjgzXCIsXG4gIHN1cDE6IFwiXFx1MDBCOVwiLFxuICBzdXAyOiBcIlxcdTAwQjJcIixcbiAgc3VwMzogXCJcXHUwMEIzXCIsXG4gIHN1cGU6IFwiXFx1MjI4N1wiLFxuICBzemxpZzogXCJcXHUwMERGXCIsXG4gIFRhdTogXCJcXHUwM0E0XCIsXG4gIHRhdTogXCJcXHUwM0M0XCIsXG4gIHRoZXJlNDogXCJcXHUyMjM0XCIsXG4gIFRoZXRhOiBcIlxcdTAzOThcIixcbiAgdGhldGE6IFwiXFx1MDNCOFwiLFxuICB0aGV0YXN5bTogXCJcXHUwM0QxXCIsXG4gIHRoaW5zcDogXCJcXHUyMDA5XCIsXG4gIFRIT1JOOiBcIlxcdTAwREVcIixcbiAgdGhvcm46IFwiXFx1MDBGRVwiLFxuICB0aWxkZTogXCJcXHUwMkRDXCIsXG4gIHRpbWVzOiBcIlxcdTAwRDdcIixcbiAgdHJhZGU6IFwiXFx1MjEyMlwiLFxuICBVYWN1dGU6IFwiXFx1MDBEQVwiLFxuICB1YWN1dGU6IFwiXFx1MDBGQVwiLFxuICB1YXJyOiBcIlxcdTIxOTFcIixcbiAgdUFycjogXCJcXHUyMUQxXCIsXG4gIFVjaXJjOiBcIlxcdTAwREJcIixcbiAgdWNpcmM6IFwiXFx1MDBGQlwiLFxuICBVZ3JhdmU6IFwiXFx1MDBEOVwiLFxuICB1Z3JhdmU6IFwiXFx1MDBGOVwiLFxuICB1bWw6IFwiXFx1MDBBOFwiLFxuICB1cHNpaDogXCJcXHUwM0QyXCIsXG4gIFVwc2lsb246IFwiXFx1MDNBNVwiLFxuICB1cHNpbG9uOiBcIlxcdTAzQzVcIixcbiAgVXVtbDogXCJcXHUwMERDXCIsXG4gIHV1bWw6IFwiXFx1MDBGQ1wiLFxuICB3ZWllcnA6IFwiXFx1MjExOFwiLFxuICBYaTogXCJcXHUwMzlFXCIsXG4gIHhpOiBcIlxcdTAzQkVcIixcbiAgWWFjdXRlOiBcIlxcdTAwRERcIixcbiAgeWFjdXRlOiBcIlxcdTAwRkRcIixcbiAgeWVuOiBcIlxcdTAwQTVcIixcbiAgeXVtbDogXCJcXHUwMEZGXCIsXG4gIFl1bWw6IFwiXFx1MDE3OFwiLFxuICBaZXRhOiBcIlxcdTAzOTZcIixcbiAgemV0YTogXCJcXHUwM0I2XCIsXG4gIHp3ajogXCJcXHUyMDBEXCIsXG4gIHp3bmo6IFwiXFx1MjAwQ1wiXG59O1xuXG4vLyBUaGUgJm5nc3A7IHBzZXVkby1lbnRpdHkgaXMgZGVub3RpbmcgYSBzcGFjZS4gc2VlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhcnQtbGFuZy9hbmd1bGFyL2Jsb2IvMGJiNjExMzg3ZDI5ZDY1YjVhZjdmOWQyNTE1YWI1NzFmZDNmYmVlNC9fdGVzdHMvdGVzdC9jb21waWxlci9wcmVzZXJ2ZV93aGl0ZXNwYWNlX3Rlc3QuZGFydFxuZXhwb3J0IGNvbnN0IE5HU1BfVU5JQ09ERSA9IFwiXFx1RTUwMFwiO1xuXG5OQU1FRF9FTlRJVElFU1tcIm5nc3BcIl0gPSBOR1NQX1VOSUNPREU7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tIFwiLi9jaGFyc1wiO1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZUxvY2F0aW9uLCBQYXJzZVNvdXJjZUZpbGUsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuL2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge05BTUVEX0VOVElUSUVTLCBUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICBUQUdfT1BFTl9TVEFSVCxcbiAgVEFHX09QRU5fRU5ELFxuICBUQUdfT1BFTl9FTkRfVk9JRCxcbiAgVEFHX0NMT1NFLFxuICBURVhULFxuICBFU0NBUEFCTEVfUkFXX1RFWFQsXG4gIFJBV19URVhULFxuICBDT01NRU5UX1NUQVJULFxuICBDT01NRU5UX0VORCxcbiAgQ0RBVEFfU1RBUlQsXG4gIENEQVRBX0VORCxcbiAgQVRUUl9OQU1FLFxuICBBVFRSX1ZBTFVFLFxuICBET0NfVFlQRSxcbiAgRVhQQU5TSU9OX0ZPUk1fU1RBUlQsXG4gIEVYUEFOU0lPTl9DQVNFX1ZBTFVFLFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQsXG4gIEVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsXG4gIEVYUEFOU0lPTl9GT1JNX0VORCxcbiAgRU9GXG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBUb2tlblR5cGUsIHB1YmxpYyBwYXJ0czogc3RyaW5nW10sIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGVycm9yTXNnOiBzdHJpbmcsIHB1YmxpYyB0b2tlblR5cGU6IFRva2VuVHlwZSwgc3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIoc3BhbiwgZXJyb3JNc2cpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2tlbnM6IFRva2VuW10sIHB1YmxpYyBlcnJvcnM6IFRva2VuRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKFxuICBzb3VyY2U6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIGdldFRhZ0RlZmluaXRpb246ICh0YWdOYW1lOiBzdHJpbmcpID0+IFRhZ0RlZmluaXRpb24sXG4gIHRva2VuaXplRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSxcbiAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbik6IFRva2VuaXplUmVzdWx0IHtcbiAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoXG4gICAgbmV3IFBhcnNlU291cmNlRmlsZShzb3VyY2UsIHVybCksXG4gICAgZ2V0VGFnRGVmaW5pdGlvbixcbiAgICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zLFxuICAgIGludGVycG9sYXRpb25Db25maWdcbiAgKS50b2tlbml6ZSgpO1xufVxuXG5jb25zdCBfQ1JfT1JfQ1JMRl9SRUdFWFAgPSAvXFxyXFxuPy9nO1xuXG5mdW5jdGlvbiBfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKGNoYXJDb2RlOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBjaGFyID0gY2hhckNvZGUgPT09IGNoYXJzLiRFT0YgPyBcIkVPRlwiIDogU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gIHJldHVybiBgVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCIke2NoYXJ9XCJgO1xufVxuXG5mdW5jdGlvbiBfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eVNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBVbmtub3duIGVudGl0eSBcIiR7ZW50aXR5U3JjfVwiIC0gdXNlIHRoZSBcIiYjPGRlY2ltYWw+O1wiIG9yICBcIiYjeDxoZXg+O1wiIHN5bnRheGA7XG59XG5cbmNsYXNzIENvbnRyb2xGbG93RXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3I6IFRva2VuRXJyb3IpIHt9XG59XG5cbi8vIFNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjd3JpdGluZ1xuY2xhc3MgVG9rZW5pemVyIHtcbiAgcHJpdmF0ZSBfaW5wdXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG4gIC8vIE5vdGU6IHRoaXMgaXMgYWx3YXlzIGxvd2VyY2FzZSFcbiAgcHJpdmF0ZSBfcGVlayA9IC0xO1xuICBwcml2YXRlIF9uZXh0UGVlayA9IC0xO1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9saW5lID0gMDtcbiAgcHJpdmF0ZSBfY29sdW1uID0gLTE7XG4gIHByaXZhdGUgX2N1cnJlbnRUb2tlblN0YXJ0OiBQYXJzZUxvY2F0aW9uO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5UeXBlOiBUb2tlblR5cGU7XG4gIHByaXZhdGUgX2V4cGFuc2lvbkNhc2VTdGFjazogVG9rZW5UeXBlW10gPSBbXTtcbiAgcHJpdmF0ZSBfaW5JbnRlcnBvbGF0aW9uID0gZmFsc2U7XG5cbiAgdG9rZW5zOiBUb2tlbltdID0gW107XG4gIGVycm9yczogVG9rZW5FcnJvcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBfZmlsZSBUaGUgaHRtbCBzb3VyY2VcbiAgICogQHBhcmFtIF9nZXRUYWdEZWZpbml0aW9uXG4gICAqIEBwYXJhbSBfdG9rZW5pemVJY3UgV2hldGhlciB0byB0b2tlbml6ZSBJQ1UgbWVzc2FnZXMgKGNvbnNpZGVyZWQgYXMgdGV4dCBub2RlcyB3aGVuIGZhbHNlKVxuICAgKiBAcGFyYW0gX2ludGVycG9sYXRpb25Db25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZpbGU6IFBhcnNlU291cmNlRmlsZSxcbiAgICBwcml2YXRlIF9nZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICAgIHByaXZhdGUgX3Rva2VuaXplSWN1OiBib29sZWFuLFxuICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICkge1xuICAgIHRoaXMuX2lucHV0ID0gX2ZpbGUuY29udGVudDtcbiAgICB0aGlzLl9sZW5ndGggPSBfZmlsZS5jb250ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjcHJlcHJvY2Vzc2luZy10aGUtaW5wdXQtc3RyZWFtXG4gICAgLy8gSW4gb3JkZXIgdG8ga2VlcCB0aGUgb3JpZ2luYWwgcG9zaXRpb24gaW4gdGhlIHNvdXJjZSwgd2UgY2FuIG5vdFxuICAgIC8vIHByZS1wcm9jZXNzIGl0LlxuICAgIC8vIEluc3RlYWQgQ1JzIGFyZSBwcm9jZXNzZWQgcmlnaHQgYmVmb3JlIGluc3RhbnRpYXRpbmcgdGhlIHRva2Vucy5cbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKF9DUl9PUl9DUkxGX1JFR0VYUCwgXCJcXG5cIik7XG4gIH1cblxuICB0b2tlbml6ZSgpOiBUb2tlbml6ZVJlc3VsdCB7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRFT0YpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJExUKSkge1xuICAgICAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEJBTkcpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZUNkYXRhKHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRNSU5VUykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZUNvbW1lbnQoc3RhcnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZURvY1R5cGUoc3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVUYWdDbG9zZShzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuKHN0YXJ0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISh0aGlzLl90b2tlbml6ZUljdSAmJiB0aGlzLl90b2tlbml6ZUV4cGFuc2lvbkZvcm0oKSkpIHtcbiAgICAgICAgICB0aGlzLl9jb25zdW1lVGV4dCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgQ29udHJvbEZsb3dFcnJvcikge1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZS5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FT0YpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgICByZXR1cm4gbmV3IFRva2VuaXplUmVzdWx0KG1lcmdlVGV4dFRva2Vucyh0aGlzLnRva2VucyksIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB3aGV0aGVyIGFuIElDVSB0b2tlbiBoYXMgYmVlbiBjcmVhdGVkXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHJpdmF0ZSBfdG9rZW5pemVFeHBhbnNpb25Gb3JtKCk6IGJvb2xlYW4ge1xuICAgIGlmIChpc0V4cGFuc2lvbkZvcm1TdGFydCh0aGlzLl9pbnB1dCwgdGhpcy5faW5kZXgsIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcpKSB7XG4gICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uRm9ybVN0YXJ0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNFeHBhbnNpb25DYXNlU3RhcnQodGhpcy5fcGVlaykgJiYgdGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRSQlJBQ0UpIHtcbiAgICAgIGlmICh0aGlzLl9pc0luRXhwYW5zaW9uQ2FzZSgpKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uRm9ybUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMb2NhdGlvbigpOiBQYXJzZUxvY2F0aW9uIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlTG9jYXRpb24odGhpcy5fZmlsZSwgdGhpcy5faW5kZXgsIHRoaXMuX2xpbmUsIHRoaXMuX2NvbHVtbik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTcGFuKFxuICAgIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSxcbiAgICBlbmQ6IFBhcnNlTG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpXG4gICk6IFBhcnNlU291cmNlU3BhbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQsIGVuZCk7XG4gIH1cblxuICBwcml2YXRlIF9iZWdpblRva2VuKHR5cGU6IFRva2VuVHlwZSwgc3RhcnQ6IFBhcnNlTG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpKSB7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgX2VuZFRva2VuKHBhcnRzOiBzdHJpbmdbXSwgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSk6IFRva2VuIHtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBUb2tlbih0aGlzLl9jdXJyZW50VG9rZW5UeXBlLCBwYXJ0cywgbmV3IFBhcnNlU291cmNlU3Bhbih0aGlzLl9jdXJyZW50VG9rZW5TdGFydCwgZW5kKSk7XG4gICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRXJyb3IobXNnOiBzdHJpbmcsIHNwYW46IFBhcnNlU291cmNlU3Bhbik6IENvbnRyb2xGbG93RXJyb3Ige1xuICAgIGlmICh0aGlzLl9pc0luRXhwYW5zaW9uRm9ybSgpKSB7XG4gICAgICBtc2cgKz0gYCAoRG8geW91IGhhdmUgYW4gdW5lc2NhcGVkIFwie1wiIGluIHlvdXIgdGVtcGxhdGU/IFVzZSBcInt7ICd7JyB9fVwiKSB0byBlc2NhcGUgaXQuKWA7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yID0gbmV3IFRva2VuRXJyb3IobXNnLCB0aGlzLl9jdXJyZW50VG9rZW5UeXBlLCBzcGFuKTtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5TdGFydCA9IG51bGwhO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblR5cGUgPSBudWxsITtcbiAgICByZXR1cm4gbmV3IENvbnRyb2xGbG93RXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWR2YW5jZSgpIHtcbiAgICBpZiAodGhpcy5faW5kZXggPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKGNoYXJzLiRFT0YpLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJExGKSB7XG4gICAgICB0aGlzLl9saW5lKys7XG4gICAgICB0aGlzLl9jb2x1bW4gPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlayAhPT0gY2hhcnMuJExGICYmIHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDUikge1xuICAgICAgdGhpcy5fY29sdW1uKys7XG4gICAgfVxuICAgIHRoaXMuX2luZGV4Kys7XG4gICAgdGhpcy5fcGVlayA9IHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCA/IGNoYXJzLiRFT0YgOiB0aGlzLl9pbnB1dC5jaGFyQ29kZUF0KHRoaXMuX2luZGV4KTtcbiAgICB0aGlzLl9uZXh0UGVlayA9IHRoaXMuX2luZGV4ICsgMSA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCArIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhckNvZGUpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVDYXNlSW5zZW5zaXRpdmUoY2hhckNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wYXJlQ2hhckNvZGVDYXNlSW5zZW5zaXRpdmUodGhpcy5fcGVlaywgY2hhckNvZGUpKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlKGNoYXJDb2RlOiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhckNvZGUpKSB7XG4gICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKGxvY2F0aW9uLCBsb2NhdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRTdHIoY2hhcnM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxlbiA9IGNoYXJzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5faW5kZXggKyBsZW4gPiB0aGlzLl9sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCF0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgLy8gSWYgYXR0ZW1wdGluZyB0byBwYXJzZSB0aGUgc3RyaW5nIGZhaWxzLCB3ZSB3YW50IHRvIHJlc2V0IHRoZSBwYXJzZXJcbiAgICAgICAgLy8gdG8gd2hlcmUgaXQgd2FzIGJlZm9yZSB0aGUgYXR0ZW1wdFxuICAgICAgICB0aGlzLl9yZXN0b3JlUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUoY2hhcnM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9yZXF1aXJlU3RyKGNoYXJzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9hdHRlbXB0U3RyKGNoYXJzKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlOiAoY29kZTogbnVtYmVyKSA9PiBib29sZWFuKSB7XG4gICAgd2hpbGUgKCFwcmVkaWNhdGUodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbiwgbGVuOiBudW1iZXIpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihwcmVkaWNhdGUpO1xuICAgIGlmICh0aGlzLl9pbmRleCAtIHN0YXJ0Lm9mZnNldCA8IGxlbikge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbihzdGFydCwgc3RhcnQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0VW50aWxDaGFyKGNoYXI6IG51bWJlcikge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFyKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZENoYXIoZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChkZWNvZGVFbnRpdGllcyAmJiB0aGlzLl9wZWVrID09PSBjaGFycy4kQU1QRVJTQU5EKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjb2RlRW50aXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlY29kZUVudGl0eSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kSEFTSCkpIHtcbiAgICAgIGNvbnN0IGlzSGV4ID0gdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiR4KSB8fCB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJFgpO1xuICAgICAgY29uc3QgbnVtYmVyU3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpLm9mZnNldDtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNEaWdpdEVudGl0eUVuZCk7XG4gICAgICBpZiAodGhpcy5fcGVlayAhPT0gY2hhcnMuJFNFTUlDT0xPTikge1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3Qgc3RyTnVtID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG51bWJlclN0YXJ0LCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSBwYXJzZUludChzdHJOdW0sIGlzSGV4ID8gMTYgOiAxMCk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKHN0YXJ0Lm9mZnNldCArIDEsIHRoaXMuX2luZGV4IC0gMSk7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2coZW50aXR5KSwgdGhpcy5fZ2V0U3BhbihzdGFydCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTmFtZWRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gXCImXCI7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKHN0YXJ0Lm9mZnNldCArIDEsIHRoaXMuX2luZGV4IC0gMSk7XG4gICAgICBjb25zdCBjaGFyID0gTkFNRURfRU5USVRJRVNbbmFtZV07XG4gICAgICBpZiAoIWNoYXIpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3Vua25vd25FbnRpdHlFcnJvck1zZyhuYW1lKSwgdGhpcy5fZ2V0U3BhbihzdGFydCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYXI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVJhd1RleHQoZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4sIGZpcnN0Q2hhck9mRW5kOiBudW1iZXIsIGF0dGVtcHRFbmRSZXN0OiAoKSA9PiBib29sZWFuKTogVG9rZW4ge1xuICAgIGxldCB0YWdDbG9zZVN0YXJ0OiBQYXJzZUxvY2F0aW9uO1xuICAgIGNvbnN0IHRleHRTdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihkZWNvZGVFbnRpdGllcyA/IFRva2VuVHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQgOiBUb2tlblR5cGUuUkFXX1RFWFQsIHRleHRTdGFydCk7XG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRhZ0Nsb3NlU3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShmaXJzdENoYXJPZkVuZCkgJiYgYXR0ZW1wdEVuZFJlc3QoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRhZ0Nsb3NlU3RhcnQub2Zmc2V0KSB7XG4gICAgICAgIC8vIGFkZCB0aGUgY2hhcmFjdGVycyBjb25zdW1lZCBieSB0aGUgcHJldmlvdXMgaWYgc3RhdGVtZW50IHRvIHRoZSBvdXRwdXRcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnB1dC5zdWJzdHJpbmcodGFnQ2xvc2VTdGFydC5vZmZzZXQsIHRoaXMuX2luZGV4KSk7XG4gICAgICB9XG4gICAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gZmlyc3RDaGFyT2ZFbmQpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcihkZWNvZGVFbnRpdGllcykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZW5kVG9rZW4oW3RoaXMuX3Byb2Nlc3NDYXJyaWFnZVJldHVybnMocGFydHMuam9pbihcIlwiKSldLCB0YWdDbG9zZVN0YXJ0KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ09NTUVOVF9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTUlOVVMpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChmYWxzZSwgY2hhcnMuJE1JTlVTLCAoKSA9PiB0aGlzLl9hdHRlbXB0U3RyKFwiLT5cIikpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDZGF0YShzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNEQVRBX1NUQVJULCBzdGFydCk7XG4gICAgdGhpcy5fcmVxdWlyZVN0cihcIkNEQVRBW1wiKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRSQlJBQ0tFVCwgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIl0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9FTkQsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZURvY1R5cGUoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5ET0NfVFlQRSwgc3RhcnQpO1xuICAgIHRoaXMuX2F0dGVtcHRVbnRpbENoYXIoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3RoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAyLCB0aGlzLl9pbmRleCAtIDEpXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lUHJlZml4QW5kTmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbmFtZU9yUHJlZml4U3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICBsZXQgcHJlZml4OiBzdHJpbmcgPSBudWxsITtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcnMuJENPTE9OICYmICFpc1ByZWZpeEVuZCh0aGlzLl9wZWVrKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgICBsZXQgbmFtZVN0YXJ0OiBudW1iZXI7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRDT0xPTikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcHJlZml4ID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVPclByZWZpeFN0YXJ0LCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgbmFtZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVTdGFydCA9IG5hbWVPclByZWZpeFN0YXJ0O1xuICAgIH1cbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKGlzTmFtZUVuZCwgdGhpcy5faW5kZXggPT09IG5hbWVTdGFydCA/IDEgOiAwKTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIHJldHVybiBbcHJlZml4LCBuYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgY29uc3Qgc2F2ZWRQb3MgPSB0aGlzLl9zYXZlUG9zaXRpb24oKTtcbiAgICBsZXQgdGFnTmFtZTogc3RyaW5nO1xuICAgIGxldCBsb3dlcmNhc2VUYWdOYW1lOiBzdHJpbmc7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghY2hhcnMuaXNBc2NpaUxldHRlcih0aGlzLl9wZWVrKSkge1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5leHBlY3RlZENoYXJhY3RlckVycm9yTXNnKHRoaXMuX3BlZWspLCB0aGlzLl9nZXRTcGFuKCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmFtZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0KTtcbiAgICAgIHRhZ05hbWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcobmFtZVN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgICBsb3dlcmNhc2VUYWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTTEFTSCAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kR1QpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUF0dHJpYnV0ZU5hbWUoKTtcbiAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRFUSkpIHtcbiAgICAgICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5FbmQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgLy8gV2hlbiB0aGUgc3RhcnQgdGFnIGlzIGludmFsaWQsIGFzc3VtZSB3ZSB3YW50IGEgXCI8XCJcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKHNhdmVkUG9zKTtcbiAgICAgICAgLy8gQmFjayB0byBiYWNrIHRleHQgdG9rZW5zIGFyZSBtZXJnZWQgYXQgdGhlIGVuZFxuICAgICAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5URVhULCBzdGFydCk7XG4gICAgICAgIHRoaXMuX2VuZFRva2VuKFtcIjxcIl0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudFRva2VuVHlwZSA9IHRoaXMuX2dldFRhZ0RlZmluaXRpb24odGFnTmFtZSkuY29udGVudFR5cGU7XG5cbiAgICBpZiAoY29udGVudFRva2VuVHlwZSA9PT0gVGFnQ29udGVudFR5cGUuUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVCkge1xuICAgICAgdGhpcy5fY29uc3VtZVJhd1RleHRXaXRoVGFnQ2xvc2UobG93ZXJjYXNlVGFnTmFtZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVJhd1RleHRXaXRoVGFnQ2xvc2UobG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nLCBkZWNvZGVFbnRpdGllczogYm9vbGVhbikge1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzLCBjaGFycy4kTFQsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0ckNhc2VJbnNlbnNpdGl2ZShsb3dlcmNhc2VUYWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kR1QpO1xuICAgIH0pO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRBR19DTE9TRSwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbbnVsbCEsIGxvd2VyY2FzZVRhZ05hbWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuU3RhcnQoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCwgc3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwYXJ0cyk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQXR0cmlidXRlTmFtZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX05BTUUpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKHByZWZpeEFuZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkFUVFJfVkFMVUUpO1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kU1EgfHwgdGhpcy5fcGVlayA9PT0gY2hhcnMuJERRKSB7XG4gICAgICBjb25zdCBxdW90ZUNoYXIgPSB0aGlzLl9wZWVrO1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gcXVvdGVDaGFyKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBwYXJ0cy5qb2luKFwiXCIpO1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZVN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGVVbnRpbEZuKGlzTmFtZUVuZCwgMSk7XG4gICAgICB2YWx1ZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyh2YWx1ZVN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgfVxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHZhbHVlKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ09wZW5FbmQoKSB7XG4gICAgY29uc3QgdG9rZW5UeXBlID0gdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRTTEFTSCkgPyBUb2tlblR5cGUuVEFHX09QRU5fRU5EX1ZPSUQgOiBUb2tlblR5cGUuVEFHX09QRU5fRU5EO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4odG9rZW5UeXBlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgY29uc3QgcHJlZml4QW5kTmFtZSA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kR1QpO1xuICAgIHRoaXMuX2VuZFRva2VuKHByZWZpeEFuZE5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcblxuICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5wdXNoKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5fcmVhZFVudGlsKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW2NvbmRpdGlvbl0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlJBV19URVhULCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5fcmVhZFVudGlsKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3R5cGVdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uQ2FzZVN0YXJ0KCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX1ZBTFVFLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kTEJSQUNFKS50cmltKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW3ZhbHVlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJExCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5wdXNoKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VFbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX0VORCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRSQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uRm9ybUVuZCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGV4dCgpIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiYgdGhpcy5fYXR0ZW1wdFN0cih0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KSkge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuc3RhcnQpO1xuICAgICAgICB0aGlzLl9pbkludGVycG9sYXRpb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyAmJlxuICAgICAgICB0aGlzLl9pbkludGVycG9sYXRpb24gJiZcbiAgICAgICAgdGhpcy5fYXR0ZW1wdFN0cih0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZClcbiAgICAgICkge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuZW5kKTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICghdGhpcy5faXNUZXh0RW5kKCkpO1xuXG4gICAgdGhpcy5fZW5kVG9rZW4oW3RoaXMuX3Byb2Nlc3NDYXJyaWFnZVJldHVybnMocGFydHMuam9pbihcIlwiKSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVGV4dEVuZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJExUIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiRFT0YpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90b2tlbml6ZUljdSAmJiAhdGhpcy5faW5JbnRlcnBvbGF0aW9uKSB7XG4gICAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgICAvLyBzdGFydCBvZiBhbiBleHBhbnNpb24gZm9ybVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRSQlJBQ0UgJiYgdGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICAvLyBlbmQgb2YgYW5kIGV4cGFuc2lvbiBjYXNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdmVQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICByZXR1cm4gW3RoaXMuX3BlZWssIHRoaXMuX2luZGV4LCB0aGlzLl9jb2x1bW4sIHRoaXMuX2xpbmUsIHRoaXMudG9rZW5zLmxlbmd0aF07XG4gIH1cblxuICBwcml2YXRlIF9yZWFkVW50aWwoY2hhcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIHRoaXMuX2F0dGVtcHRVbnRpbENoYXIoY2hhcik7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5faW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzdG9yZVBvc2l0aW9uKHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XG4gICAgdGhpcy5fcGVlayA9IHBvc2l0aW9uWzBdO1xuICAgIHRoaXMuX2luZGV4ID0gcG9zaXRpb25bMV07XG4gICAgdGhpcy5fY29sdW1uID0gcG9zaXRpb25bMl07XG4gICAgdGhpcy5fbGluZSA9IHBvc2l0aW9uWzNdO1xuICAgIGNvbnN0IG5iVG9rZW5zID0gcG9zaXRpb25bNF07XG4gICAgaWYgKG5iVG9rZW5zIDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAvLyByZW1vdmUgYW55IGV4dHJhIHRva2Vuc1xuICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLnRva2Vucy5zbGljZSgwLCBuYlRva2Vucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNJbkV4cGFuc2lvbkNhc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2tbdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCAtIDFdID09PSBUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25Gb3JtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05vdFdoaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAhY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8IGNvZGUgPT09IGNoYXJzLiRFT0Y7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBjaGFycy5pc1doaXRlc3BhY2UoY29kZSkgfHxcbiAgICBjb2RlID09PSBjaGFycy4kR1QgfHxcbiAgICBjb2RlID09PSBjaGFycy4kU0xBU0ggfHxcbiAgICBjb2RlID09PSBjaGFycy4kU1EgfHxcbiAgICBjb2RlID09PSBjaGFycy4kRFEgfHxcbiAgICBjb2RlID09PSBjaGFycy4kRVFcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNQcmVmaXhFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPCBjaGFycy4kYSB8fCBjaGFycy4keiA8IGNvZGUpICYmIChjb2RlIDwgY2hhcnMuJEEgfHwgY2hhcnMuJFogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiQwIHx8IGNvZGUgPiBjaGFycy4kOSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNEaWdpdEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUhleERpZ2l0KGNvZGUpO1xufVxuXG5mdW5jdGlvbiBpc05hbWVkRW50aXR5RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJFNFTUlDT0xPTiB8fCBjb2RlID09PSBjaGFycy4kRU9GIHx8ICFjaGFycy5pc0FzY2lpTGV0dGVyKGNvZGUpO1xufVxuXG5mdW5jdGlvbiBpc0V4cGFuc2lvbkZvcm1TdGFydChpbnB1dDogc3RyaW5nLCBvZmZzZXQ6IG51bWJlciwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IGJvb2xlYW4ge1xuICBjb25zdCBpc0ludGVycG9sYXRpb25TdGFydCA9IGludGVycG9sYXRpb25Db25maWdcbiAgICA/IGlucHV0LmluZGV4T2YoaW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCwgb2Zmc2V0KSA9PT0gb2Zmc2V0XG4gICAgOiBmYWxzZTtcblxuICByZXR1cm4gaW5wdXQuY2hhckNvZGVBdChvZmZzZXQpID09PSBjaGFycy4kTEJSQUNFICYmICFpc0ludGVycG9sYXRpb25TdGFydDtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25DYXNlU3RhcnQocGVlazogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBwZWVrID09PSBjaGFycy4kRVEgfHwgY2hhcnMuaXNBc2NpaUxldHRlcihwZWVrKSB8fCBjaGFycy5pc0RpZ2l0KHBlZWspO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlQ2hhckNvZGVDYXNlSW5zZW5zaXRpdmUoY29kZTE6IG51bWJlciwgY29kZTI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlMSkgPT09IHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTIpO1xufVxuXG5mdW5jdGlvbiB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjb2RlID49IGNoYXJzLiRhICYmIGNvZGUgPD0gY2hhcnMuJHogPyBjb2RlIC0gY2hhcnMuJGEgKyBjaGFycy4kQSA6IGNvZGU7XG59XG5cbmZ1bmN0aW9uIG1lcmdlVGV4dFRva2VucyhzcmNUb2tlbnM6IFRva2VuW10pOiBUb2tlbltdIHtcbiAgY29uc3QgZHN0VG9rZW5zOiBUb2tlbltdID0gW107XG4gIGxldCBsYXN0RHN0VG9rZW46IFRva2VuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY1Rva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRva2VuID0gc3JjVG9rZW5zW2ldO1xuICAgIGlmIChsYXN0RHN0VG9rZW4gJiYgbGFzdERzdFRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5URVhUICYmIHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5URVhUKSB7XG4gICAgICBsYXN0RHN0VG9rZW4ucGFydHNbMF0gKz0gdG9rZW4ucGFydHNbMF07XG4gICAgICBsYXN0RHN0VG9rZW4uc291cmNlU3Bhbi5lbmQgPSB0b2tlbi5zb3VyY2VTcGFuLmVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdERzdFRva2VuID0gdG9rZW47XG4gICAgICBkc3RUb2tlbnMucHVzaChsYXN0RHN0VG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkc3RUb2tlbnM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL2FzdFwiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0ICogYXMgbGV4IGZyb20gXCIuL2xleGVyXCI7XG5pbXBvcnQge1RhZ0RlZmluaXRpb24sIGdldE5zUHJlZml4LCBpc05nQ29udGFpbmVyLCBtZXJnZU5zQW5kTmFtZX0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZUVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudE5hbWU6IHN0cmluZyB8IG51bGwsIHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpOiBUcmVlRXJyb3Ige1xuICAgIHJldHVybiBuZXcgVHJlZUVycm9yKGVsZW1lbnROYW1lLCBzcGFuLCBtc2cpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3BhbiwgbXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VUcmVlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3ROb2RlczogaHRtbC5Ob2RlW10sIHB1YmxpYyBlcnJvcnM6IFBhcnNlRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7fVxuXG4gIHBhcnNlKFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcnNlRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIGNvbnN0IHRva2Vuc0FuZEVycm9ycyA9IGxleC50b2tlbml6ZShzb3VyY2UsIHVybCwgdGhpcy5nZXRUYWdEZWZpbml0aW9uLCBwYXJzZUV4cGFuc2lvbkZvcm1zLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICAgIGNvbnN0IHRyZWVBbmRFcnJvcnMgPSBuZXcgX1RyZWVCdWlsZGVyKHRva2Vuc0FuZEVycm9ycy50b2tlbnMsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbikuYnVpbGQoKTtcblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KFxuICAgICAgdHJlZUFuZEVycm9ycy5yb290Tm9kZXMsXG4gICAgICAodG9rZW5zQW5kRXJyb3JzLmVycm9ycyBhcyBQYXJzZUVycm9yW10pLmNvbmNhdCh0cmVlQW5kRXJyb3JzLmVycm9ycylcbiAgICApO1xuICB9XG59XG5cbmNsYXNzIF9UcmVlQnVpbGRlciB7XG4gIHByaXZhdGUgX2luZGV4ID0gLTE7XG4gIHByaXZhdGUgX3BlZWs6IGxleC5Ub2tlbjtcblxuICBwcml2YXRlIF9yb290Tm9kZXM6IGh0bWwuTm9kZVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogVHJlZUVycm9yW10gPSBbXTtcblxuICBwcml2YXRlIF9lbGVtZW50U3RhY2s6IGh0bWwuRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlbnM6IGxleC5Ub2tlbltdLCBwcml2YXRlIGdldFRhZ0RlZmluaXRpb246ICh0YWdOYW1lOiBzdHJpbmcpID0+IFRhZ0RlZmluaXRpb24pIHtcbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBidWlsZCgpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVTdGFydFRhZyh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEFHX0NMT1NFKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFbmRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkNEQVRBX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZUNkYXRhKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DT01NRU5UX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZUNvbW1lbnQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5URVhUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5SQVdfVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VWb2lkRWxlbWVudCgpO1xuICAgICAgICB0aGlzLl9jb25zdW1lVGV4dCh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbih0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2tpcCBhbGwgb3RoZXIgdG9rZW5zLi4uXG4gICAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQodGhpcy5fcm9vdE5vZGVzLCB0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWR2YW5jZSgpOiBsZXguVG9rZW4ge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLl9wZWVrO1xuICAgIGlmICh0aGlzLl9pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIE5vdGU6IHRoZXJlIGlzIGFsd2F5cyBhbiBFT0YgdG9rZW4gYXQgdGhlIGVuZFxuICAgICAgdGhpcy5faW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5fcGVlayA9IHRoaXMudG9rZW5zW3RoaXMuX2luZGV4XTtcbiAgICByZXR1cm4gcHJldjtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2VJZih0eXBlOiBsZXguVG9rZW5UeXBlKTogbGV4LlRva2VuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gdHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnRUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICB0aGlzLl9hZHZhbmNlSWYobGV4LlRva2VuVHlwZS5DREFUQV9FTkQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNvbW1lbnQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLl9hZHZhbmNlSWYobGV4LlRva2VuVHlwZS5SQVdfVEVYVCk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ09NTUVOVF9FTkQpO1xuICAgIGNvbnN0IHZhbHVlID0gdGV4dCAhPT0gbnVsbCA/IHRleHQucGFydHNbMF0udHJpbSgpIDogbnVsbDtcbiAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5Db21tZW50KHZhbHVlLCB0b2tlbi5zb3VyY2VTcGFuKSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRXhwYW5zaW9uKHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCBzd2l0Y2hWYWx1ZSA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgY29uc3QgY2FzZXM6IGh0bWwuRXhwYW5zaW9uQ2FzZVtdID0gW107XG5cbiAgICAvLyByZWFkID1cbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX1ZBTFVFKSB7XG4gICAgICBjb25zdCBleHBDYXNlID0gdGhpcy5fcGFyc2VFeHBhbnNpb25DYXNlKCk7XG4gICAgICBpZiAoIWV4cENhc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBlcnJvclxuICAgICAgY2FzZXMucHVzaChleHBDYXNlKTtcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBmaW5hbCB9XG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSAhPT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3Bhbih0b2tlbi5zb3VyY2VTcGFuLnN0YXJ0LCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9hZGRUb1BhcmVudChcbiAgICAgIG5ldyBodG1sLkV4cGFuc2lvbihzd2l0Y2hWYWx1ZS5wYXJ0c1swXSwgdHlwZS5wYXJ0c1swXSwgY2FzZXMsIHNvdXJjZVNwYW4sIHN3aXRjaFZhbHVlLnNvdXJjZVNwYW4pXG4gICAgKTtcblxuICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlRXhwYW5zaW9uQ2FzZSgpOiBodG1sLkV4cGFuc2lvbkNhc2UgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIC8vIHJlYWQge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ3snLmApKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlYWQgdW50aWwgfVxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fYWR2YW5jZSgpO1xuXG4gICAgY29uc3QgZXhwID0gdGhpcy5fY29sbGVjdEV4cGFuc2lvbkV4cFRva2VucyhzdGFydCk7XG4gICAgaWYgKCFleHApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX2FkdmFuY2UoKTtcbiAgICBleHAucHVzaChuZXcgbGV4LlRva2VuKGxleC5Ub2tlblR5cGUuRU9GLCBbXSwgZW5kLnNvdXJjZVNwYW4pKTtcblxuICAgIC8vIHBhcnNlIGV2ZXJ5dGhpbmcgaW4gYmV0d2VlbiB7IGFuZCB9XG4gICAgY29uc3QgcGFyc2VkRXhwID0gbmV3IF9UcmVlQnVpbGRlcihleHAsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbikuYnVpbGQoKTtcbiAgICBpZiAocGFyc2VkRXhwLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9lcnJvcnMuY29uY2F0KHBhcnNlZEV4cC5lcnJvcnMgYXMgVHJlZUVycm9yW10pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odmFsdWUuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICBjb25zdCBleHBTb3VyY2VTcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydC5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQuc291cmNlU3Bhbi5lbmQpO1xuICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKHZhbHVlLnBhcnRzWzBdLCBwYXJzZWRFeHAucm9vdE5vZGVzLCBzb3VyY2VTcGFuLCB2YWx1ZS5zb3VyY2VTcGFuLCBleHBTb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQ6IGxleC5Ub2tlbik6IGxleC5Ub2tlbltdIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwOiBsZXguVG9rZW5bXSA9IFtdO1xuICAgIGNvbnN0IGV4cGFuc2lvbkZvcm1TdGFjayA9IFtsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVF07XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICAgKSB7XG4gICAgICAgIGV4cGFuc2lvbkZvcm1TdGFjay5wdXNoKHRoaXMuX3BlZWsudHlwZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX0VORCkge1xuICAgICAgICBpZiAobGFzdE9uU3RhY2soZXhwYW5zaW9uRm9ybVN0YWNrLCBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgICAgaWYgKGV4cGFuc2lvbkZvcm1TdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBleHA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX0VORCkge1xuICAgICAgICBpZiAobGFzdE9uU3RhY2soZXhwYW5zaW9uRm9ybVN0YWNrLCBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSkge1xuICAgICAgICAgIGV4cGFuc2lvbkZvcm1TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FT0YpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgZXhwLnB1c2godGhpcy5fYWR2YW5jZSgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGV4dCh0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgbGV0IHRleHQgPSB0b2tlbi5wYXJ0c1swXTtcbiAgICBpZiAodGV4dC5sZW5ndGggPiAwICYmIHRleHRbMF0gPT09IFwiXFxuXCIpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcbiAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24ocGFyZW50Lm5hbWUpLmlnbm9yZUZpcnN0TGYpIHtcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5ldyBodG1sLlRleHQodGV4dCwgdG9rZW4uc291cmNlU3BhbikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlVm9pZEVsZW1lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgaWYgKGVsICYmIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5wb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lU3RhcnRUYWcoc3RhcnRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgcHJlZml4ID0gc3RhcnRUYWdUb2tlbi5wYXJ0c1swXTtcbiAgICBjb25zdCBuYW1lID0gc3RhcnRUYWdUb2tlbi5wYXJ0c1sxXTtcbiAgICBjb25zdCBhdHRyczogaHRtbC5BdHRyaWJ1dGVbXSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQVRUUl9OQU1FKSB7XG4gICAgICBhdHRycy5wdXNoKHRoaXMuX2NvbnN1bWVBdHRyKHRoaXMuX2FkdmFuY2UoKSkpO1xuICAgIH1cbiAgICBjb25zdCBmdWxsTmFtZSA9IHRoaXMuX2dldEVsZW1lbnRGdWxsTmFtZShwcmVmaXgsIG5hbWUsIHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSk7XG4gICAgbGV0IHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgLy8gTm90ZTogVGhlcmUgY291bGQgaGF2ZSBiZWVuIGEgdG9rZW5pemVyIGVycm9yXG4gICAgLy8gc28gdGhhdCB3ZSBkb24ndCBnZXQgYSB0b2tlbiBmb3IgdGhlIGVuZCB0YWcuLi5cbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICBzZWxmQ2xvc2luZyA9IHRydWU7XG4gICAgICBjb25zdCB0YWdEZWYgPSB0aGlzLmdldFRhZ0RlZmluaXRpb24oZnVsbE5hbWUpO1xuICAgICAgaWYgKCEodGFnRGVmLmNhblNlbGZDbG9zZSB8fCBnZXROc1ByZWZpeChmdWxsTmFtZSkgIT09IG51bGwgfHwgdGFnRGVmLmlzVm9pZCkpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goXG4gICAgICAgICAgVHJlZUVycm9yLmNyZWF0ZShcbiAgICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgICAgc3RhcnRUYWdUb2tlbi5zb3VyY2VTcGFuLFxuICAgICAgICAgICAgYE9ubHkgdm9pZCBhbmQgZm9yZWlnbiBlbGVtZW50cyBjYW4gYmUgc2VsZiBjbG9zZWQgXCIke3N0YXJ0VGFnVG9rZW4ucGFydHNbMV19XCJgXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19PUEVOX0VORCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZW5kID0gdGhpcy5fcGVlay5zb3VyY2VTcGFuLnN0YXJ0O1xuICAgIGNvbnN0IHNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0VGFnVG9rZW4uc291cmNlU3Bhbi5zdGFydCwgZW5kKTtcbiAgICBjb25zdCBlbCA9IG5ldyBodG1sLkVsZW1lbnQoZnVsbE5hbWUsIGF0dHJzLCBbXSwgc3Bhbiwgc3BhbiwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9wdXNoRWxlbWVudChlbCk7XG4gICAgaWYgKHNlbGZDbG9zaW5nKSB7XG4gICAgICB0aGlzLl9wb3BFbGVtZW50KGZ1bGxOYW1lKTtcbiAgICAgIGVsLmVuZFNvdXJjZVNwYW4gPSBzcGFuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3B1c2hFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKTtcblxuICAgIGlmIChwYXJlbnRFbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24ocGFyZW50RWwubmFtZSkuaXNDbG9zZWRCeUNoaWxkKGVsLm5hbWUpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpO1xuICAgIGNvbnN0IHtwYXJlbnQsIGNvbnRhaW5lcn0gPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk7XG5cbiAgICBpZiAocGFyZW50ICYmIHRhZ0RlZi5yZXF1aXJlRXh0cmFQYXJlbnQocGFyZW50Lm5hbWUpKSB7XG4gICAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgICB0YWdEZWYucGFyZW50VG9BZGQsXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgZWwuc291cmNlU3BhbixcbiAgICAgICAgZWwuc3RhcnRTb3VyY2VTcGFuLFxuICAgICAgICBlbC5lbmRTb3VyY2VTcGFuXG4gICAgICApO1xuICAgICAgdGhpcy5faW5zZXJ0QmVmb3JlQ29udGFpbmVyKHBhcmVudCwgY29udGFpbmVyLCBuZXdQYXJlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZFRvUGFyZW50KGVsKTtcbiAgICB0aGlzLl9lbGVtZW50U3RhY2sucHVzaChlbCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lRW5kVGFnKGVuZFRhZ1Rva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IHRoaXMuX2dldEVsZW1lbnRGdWxsTmFtZShlbmRUYWdUb2tlbi5wYXJ0c1swXSwgZW5kVGFnVG9rZW4ucGFydHNbMV0sIHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSk7XG5cbiAgICBpZiAodGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpKSB7XG4gICAgICB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkhLmVuZFNvdXJjZVNwYW4gPSBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdldFRhZ0RlZmluaXRpb24oZnVsbE5hbWUpLmlzVm9pZCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goXG4gICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgZnVsbE5hbWUsXG4gICAgICAgICAgZW5kVGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICBgVm9pZCBlbGVtZW50cyBkbyBub3QgaGF2ZSBlbmQgdGFncyBcIiR7ZW5kVGFnVG9rZW4ucGFydHNbMV19XCJgXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyck1zZyA9IGBVbmV4cGVjdGVkIGNsb3NpbmcgdGFnIFwiJHtcbiAgICAgICAgZnVsbE5hbWVcbiAgICAgIH1cIi4gSXQgbWF5IGhhcHBlbiB3aGVuIHRoZSB0YWcgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnkgYW5vdGhlciB0YWcuIEZvciBtb3JlIGluZm8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNjbG9zaW5nLWVsZW1lbnRzLXRoYXQtaGF2ZS1pbXBsaWVkLWVuZC10YWdzYDtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUoZnVsbE5hbWUsIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sIGVyck1zZykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3BvcEVsZW1lbnQoZnVsbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IHN0YWNrSW5kZXggPSB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgc3RhY2tJbmRleCA+PSAwOyBzdGFja0luZGV4LS0pIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZWxlbWVudFN0YWNrW3N0YWNrSW5kZXhdO1xuICAgICAgaWYgKGVsLm5hbWUgPT09IGZ1bGxOYW1lKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2Uoc3RhY2tJbmRleCwgdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIHN0YWNrSW5kZXgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuY2xvc2VkQnlQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQXR0cihhdHRyTmFtZTogbGV4LlRva2VuKTogaHRtbC5BdHRyaWJ1dGUge1xuICAgIGNvbnN0IGZ1bGxOYW1lID0gbWVyZ2VOc0FuZE5hbWUoYXR0ck5hbWUucGFydHNbMF0sIGF0dHJOYW1lLnBhcnRzWzFdKTtcbiAgICBsZXQgZW5kID0gYXR0ck5hbWUuc291cmNlU3Bhbi5lbmQ7XG4gICAgbGV0IHZhbHVlID0gXCJcIjtcbiAgICBsZXQgdmFsdWVTcGFuOiBQYXJzZVNvdXJjZVNwYW4gPSB1bmRlZmluZWQhO1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQVRUUl9WQUxVRSkge1xuICAgICAgY29uc3QgdmFsdWVUb2tlbiA9IHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHZhbHVlID0gdmFsdWVUb2tlbi5wYXJ0c1swXTtcbiAgICAgIGVuZCA9IHZhbHVlVG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgICB2YWx1ZVNwYW4gPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW47XG4gICAgfVxuICAgIHJldHVybiBuZXcgaHRtbC5BdHRyaWJ1dGUoZnVsbE5hbWUsIHZhbHVlLCBuZXcgUGFyc2VTb3VyY2VTcGFuKGF0dHJOYW1lLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCksIHZhbHVlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50KCk6IGh0bWwuRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoID4gMCA/IHRoaXMuX2VsZW1lbnRTdGFja1t0aGlzLl9lbGVtZW50U3RhY2subGVuZ3RoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBpbiB0aGUgRE9NIGFuZCB0aGUgY29udGFpbmVyLlxuICAgKlxuICAgKiBgPG5nLWNvbnRhaW5lcj5gIGVsZW1lbnRzIGFyZSBza2lwcGVkIGFzIHRoZXkgYXJlIG5vdCByZW5kZXJlZCBhcyBET00gZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX2dldFBhcmVudEVsZW1lbnRTa2lwcGluZ0NvbnRhaW5lcnMoKToge3BhcmVudDogaHRtbC5FbGVtZW50IHwgbnVsbDsgY29udGFpbmVyOiBodG1sLkVsZW1lbnQgfCBudWxsfSB7XG4gICAgbGV0IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIWlzTmdDb250YWluZXIodGhpcy5fZWxlbWVudFN0YWNrW2ldLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiB7cGFyZW50OiB0aGlzLl9lbGVtZW50U3RhY2tbaV0sIGNvbnRhaW5lcn07XG4gICAgICB9XG4gICAgICBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50U3RhY2tbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtwYXJlbnQ6IG51bGwsIGNvbnRhaW5lcn07XG4gIH1cblxuICBwcml2YXRlIF9hZGRUb1BhcmVudChub2RlOiBodG1sLk5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBub2RlIGJldHdlZW4gdGhlIHBhcmVudCBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICogV2hlbiBubyBjb250YWluZXIgaXMgZ2l2ZW4sIHRoZSBub2RlIGlzIGFwcGVuZGVkIGFzIGEgY2hpbGQgb2YgdGhlIHBhcmVudC5cbiAgICogQWxzbyB1cGRhdGVzIHRoZSBlbGVtZW50IHN0YWNrIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQ6IGh0bWwuRWxlbWVudCwgY29udGFpbmVyOiBodG1sLkVsZW1lbnQgfCBudWxsLCBub2RlOiBodG1sLkVsZW1lbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fYWRkVG9QYXJlbnQobm9kZSk7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucHVzaChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBjb250YWluZXIgd2l0aCB0aGUgbmV3IG5vZGUgaW4gdGhlIGNoaWxkcmVuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoY29udGFpbmVyKTtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuW2luZGV4XSA9IG5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChjb250YWluZXIpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnNwbGljZSh0aGlzLl9lbGVtZW50U3RhY2suaW5kZXhPZihjb250YWluZXIpLCAwLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4OiBzdHJpbmcsIGxvY2FsTmFtZTogc3RyaW5nLCBwYXJlbnRFbGVtZW50OiBodG1sLkVsZW1lbnQgfCBudWxsKTogc3RyaW5nIHtcbiAgICBpZiAocHJlZml4ID09PSBudWxsKSB7XG4gICAgICBwcmVmaXggPSB0aGlzLmdldFRhZ0RlZmluaXRpb24obG9jYWxOYW1lKS5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCE7XG4gICAgICBpZiAocHJlZml4ID09PSBudWxsICYmIHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcHJlZml4ID0gZ2V0TnNQcmVmaXgocGFyZW50RWxlbWVudC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VOc0FuZE5hbWUocHJlZml4LCBsb2NhbE5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhc3RPblN0YWNrKHN0YWNrOiBhbnlbXSwgZWxlbWVudDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSBlbGVtZW50O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhZ0NvbnRlbnRUeXBlLCBUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi90YWdzXCI7XG5cbmV4cG9ydCBjbGFzcyBYbWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50ID0gZmFsc2U7XG4gIHJlcXVpcmVkUGFyZW50czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICBwYXJlbnRUb0FkZDogc3RyaW5nO1xuICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogc3RyaW5nO1xuICBjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBO1xuICBpc1ZvaWQgPSBmYWxzZTtcbiAgaWdub3JlRmlyc3RMZiA9IGZhbHNlO1xuICBjYW5TZWxmQ2xvc2UgPSB0cnVlO1xuXG4gIHJlcXVpcmVFeHRyYVBhcmVudChjdXJyZW50UGFyZW50OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0Nsb3NlZEJ5Q2hpbGQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IF9UQUdfREVGSU5JVElPTiA9IG5ldyBYbWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYbWxUYWdEZWZpbml0aW9uKHRhZ05hbWU6IHN0cmluZyk6IFhtbFRhZ0RlZmluaXRpb24ge1xuICByZXR1cm4gX1RBR19ERUZJTklUSU9OO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQge1RhZ0NvbnRlbnRUeXBlLCBUYWdEZWZpbml0aW9ufSBmcm9tICcuL3RhZ3MnO1xuXG5leHBvcnQgY2xhc3MgSHRtbFRhZ0RlZmluaXRpb24gaW1wbGVtZW50cyBUYWdEZWZpbml0aW9uIHtcbiAgcHJpdmF0ZSBjbG9zZWRCeUNoaWxkcmVuOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcblxuICBjbG9zZWRCeVBhcmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZ3xudWxsO1xuICBjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGU7XG4gIGlzVm9pZDogYm9vbGVhbjtcbiAgaWdub3JlRmlyc3RMZjogYm9vbGVhbjtcbiAgY2FuU2VsZkNsb3NlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB7Y2xvc2VkQnlDaGlsZHJlbiwgcmVxdWlyZWRQYXJlbnRzLCBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeCxcbiAgICAgICBjb250ZW50VHlwZSA9IFRhZ0NvbnRlbnRUeXBlLlBBUlNBQkxFX0RBVEEsIGNsb3NlZEJ5UGFyZW50ID0gZmFsc2UsIGlzVm9pZCA9IGZhbHNlLFxuICAgICAgIGlnbm9yZUZpcnN0TGYgPSBmYWxzZX06IHtcbiAgICAgICAgY2xvc2VkQnlDaGlsZHJlbj86IHN0cmluZ1tdLFxuICAgICAgICBjbG9zZWRCeVBhcmVudD86IGJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkUGFyZW50cz86IHN0cmluZ1tdLFxuICAgICAgICBpbXBsaWNpdE5hbWVzcGFjZVByZWZpeD86IHN0cmluZyxcbiAgICAgICAgY29udGVudFR5cGU/OiBUYWdDb250ZW50VHlwZSxcbiAgICAgICAgaXNWb2lkPzogYm9vbGVhbixcbiAgICAgICAgaWdub3JlRmlyc3RMZj86IGJvb2xlYW5cbiAgICAgIH0gPSB7fSkge1xuICAgIGlmIChjbG9zZWRCeUNoaWxkcmVuICYmIGNsb3NlZEJ5Q2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY2xvc2VkQnlDaGlsZHJlbi5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5jbG9zZWRCeUNoaWxkcmVuW3RhZ05hbWVdID0gdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuaXNWb2lkID0gaXNWb2lkO1xuICAgIHRoaXMuY2xvc2VkQnlQYXJlbnQgPSBjbG9zZWRCeVBhcmVudCB8fCBpc1ZvaWQ7XG4gICAgaWYgKHJlcXVpcmVkUGFyZW50cyAmJiByZXF1aXJlZFBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZXF1aXJlZFBhcmVudHMgPSB7fTtcbiAgICAgIC8vIFRoZSBmaXJzdCBwYXJlbnQgaXMgdGhlIGxpc3QgaXMgYXV0b21hdGljYWxseSB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlZCBwYXJlbnRzIGFyZSBwcmVzZW50XG4gICAgICB0aGlzLnBhcmVudFRvQWRkID0gcmVxdWlyZWRQYXJlbnRzWzBdO1xuICAgICAgcmVxdWlyZWRQYXJlbnRzLmZvckVhY2godGFnTmFtZSA9PiB0aGlzLnJlcXVpcmVkUGFyZW50c1t0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmltcGxpY2l0TmFtZXNwYWNlUHJlZml4ID0gaW1wbGljaXROYW1lc3BhY2VQcmVmaXggfHwgbnVsbDtcbiAgICB0aGlzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGU7XG4gICAgdGhpcy5pZ25vcmVGaXJzdExmID0gaWdub3JlRmlyc3RMZjtcbiAgfVxuXG4gIHJlcXVpcmVFeHRyYVBhcmVudChjdXJyZW50UGFyZW50OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMucmVxdWlyZWRQYXJlbnRzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50UGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsY1BhcmVudCA9IGN1cnJlbnRQYXJlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc1BhcmVudFRlbXBsYXRlID0gbGNQYXJlbnQgPT09ICd0ZW1wbGF0ZScgfHwgY3VycmVudFBhcmVudCA9PT0gJ25nLXRlbXBsYXRlJztcbiAgICByZXR1cm4gIWlzUGFyZW50VGVtcGxhdGUgJiYgdGhpcy5yZXF1aXJlZFBhcmVudHNbbGNQYXJlbnRdICE9PSB0cnVlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVm9pZCB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgaW4gdGhpcy5jbG9zZWRCeUNoaWxkcmVuO1xuICB9XG59XG5cbi8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvc3ludGF4Lmh0bWwjb3B0aW9uYWwtdGFnc1xuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBmdWxseSBjb25mb3JtIHRvIHRoZSBIVE1MNSBzcGVjLlxuY29uc3QgVEFHX0RFRklOSVRJT05TOiB7W2tleTogc3RyaW5nXTogSHRtbFRhZ0RlZmluaXRpb259ID0ge1xuICAnYmFzZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdtZXRhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2FyZWEnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnZW1iZWQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbGluayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdpbWcnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW5wdXQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncGFyYW0nOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaHInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnYnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnc291cmNlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3RyYWNrJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3dicic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbXG4gICAgICAnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jsb2NrcXVvdGUnLCAnZGl2JywgJ2RsJywgICAgICAnZmllbGRzZXQnLCAnZm9vdGVyJywgJ2Zvcm0nLFxuICAgICAgJ2gxJywgICAgICAnaDInLCAgICAgICdoMycsICAgICdoNCcsICAgICAgICAgJ2g1JywgICdoNicsICAgICAgJ2hlYWRlcicsICAgJ2hncm91cCcsICdocicsXG4gICAgICAnbWFpbicsICAgICduYXYnLCAgICAgJ29sJywgICAgJ3AnLCAgICAgICAgICAncHJlJywgJ3NlY3Rpb24nLCAndGFibGUnLCAgICAndWwnXG4gICAgXSxcbiAgICBjbG9zZWRCeVBhcmVudDogdHJ1ZVxuICB9KSxcbiAgJ3RoZWFkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3Rib2R5JywgJ3Rmb290J119KSxcbiAgJ3Rib2R5JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3Rib2R5JywgJ3Rmb290J10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICd0Zm9vdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keSddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndHInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe1xuICAgIGNsb3NlZEJ5Q2hpbGRyZW46IFsndHInXSxcbiAgICByZXF1aXJlZFBhcmVudHM6IFsndGJvZHknLCAndGZvb3QnLCAndGhlYWQnXSxcbiAgICBjbG9zZWRCeVBhcmVudDogdHJ1ZVxuICB9KSxcbiAgJ3RkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3RkJywgJ3RoJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICd0aCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnY29sJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtyZXF1aXJlZFBhcmVudHM6IFsnY29sZ3JvdXAnXSwgaXNWb2lkOiB0cnVlfSksXG4gICdzdmcnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnc3ZnJ30pLFxuICAnbWF0aCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aW1wbGljaXROYW1lc3BhY2VQcmVmaXg6ICdtYXRoJ30pLFxuICAnbGknOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnbGknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2R0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2R0JywgJ2RkJ119KSxcbiAgJ2RkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2R0JywgJ2RkJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdyYic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncnRjJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncnAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdvcHRncm91cCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRncm91cCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0aW9uJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ29wdGlvbicsICdvcHRncm91cCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncHJlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpZ25vcmVGaXJzdExmOiB0cnVlfSksXG4gICdsaXN0aW5nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpZ25vcmVGaXJzdExmOiB0cnVlfSksXG4gICdzdHlsZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUfSksXG4gICdzY3JpcHQnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAndGl0bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFR9KSxcbiAgJ3RleHRhcmVhJzpcbiAgICAgIG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVCwgaWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxufTtcblxuY29uc3QgX0RFRkFVTFRfVEFHX0RFRklOSVRJT04gPSBuZXcgSHRtbFRhZ0RlZmluaXRpb24oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEh0bWxUYWdEZWZpbml0aW9uKHRhZ05hbWU6IHN0cmluZyk6IEh0bWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIFRBR19ERUZJTklUSU9OU1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge0kxOG5QbHVyYWxQaXBlLCBJMThuU2VsZWN0UGlwZSwgTmdMb2NhbGVMb2NhbGl6YXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5NZXNzYWdlc0J5SWQge1xuICBbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFhtbE1lc3NhZ2VzQnlJZCB7XG4gIFtpZDogc3RyaW5nXTogeG1sLk5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWN1Q29udGVudCB7XG4gIGNhc2VzOiB7W3ZhbHVlOiBzdHJpbmddOiBodG1sLk5vZGVbXX07XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnRTdHIge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogc3RyaW5nfTtcbiAgZXhwcmVzc2lvbjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBgUGxhY2Vob2xkZXJNYXBwZXJgIGNvbnZlcnRzIHBsYWNlaG9sZGVyIG5hbWVzIGZyb20gaW50ZXJuYWwgdG8gc2VyaWFsaXplZCByZXByZXNlbnRhdGlvbiBhbmRcbiAqIGJhY2suXG4gKlxuICogSXQgc2hvdWxkIGJlIHVzZWQgZm9yIHNlcmlhbGl6YXRpb24gZm9ybWF0IHRoYXQgcHV0IGNvbnN0cmFpbnRzIG9uIHRoZSBwbGFjZWhvbGRlciBuYW1lcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGFjZWhvbGRlck1hcHBlciB7XG4gIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBtYXBwZXIgdGhhdCB0YWtlIGEgZnVuY3Rpb24gdG8gdHJhbnNmb3JtIGFuIGludGVybmFsIG5hbWUgdG8gYSBwdWJsaWMgbmFtZVxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXIgZXh0ZW5kcyBpMThuLlJlY3Vyc2VWaXNpdG9yIGltcGxlbWVudHMgUGxhY2Vob2xkZXJNYXBwZXIge1xuICBwcml2YXRlIGludGVybmFsVG9QdWJsaWM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBwcml2YXRlIHB1YmxpY1RvTmV4dElkOiB7W2s6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb0ludGVybmFsOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAvLyBjcmVhdGUgYSBtYXBwaW5nIGZyb20gdGhlIG1lc3NhZ2VcbiAgY29uc3RydWN0b3IobWVzc2FnZTogaTE4bi5NZXNzYWdlLCBwcml2YXRlIG1hcE5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgbWVzc2FnZS5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkgPyB0aGlzLmludGVybmFsVG9QdWJsaWNbaW50ZXJuYWxOYW1lXSA6IG51bGw7XG4gIH1cblxuICB0b0ludGVybmFsTmFtZShwdWJsaWNOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5wdWJsaWNUb0ludGVybmFsLmhhc093blByb3BlcnR5KHB1YmxpY05hbWUpID8gdGhpcy5wdWJsaWNUb0ludGVybmFsW3B1YmxpY05hbWVdIDogbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5zdGFydE5hbWUpO1xuICAgIHN1cGVyLnZpc2l0VGFnUGxhY2Vob2xkZXIocGgsIGNvbnRleHQpO1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguY2xvc2VOYW1lKTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGgubmFtZSk7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgLy8gWE1CIHBsYWNlaG9sZGVycyBjb3VsZCBvbmx5IGNvbnRhaW5zIEEtWiwgMC05IGFuZCBfXG4gIHByaXZhdGUgdmlzaXRQbGFjZWhvbGRlck5hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWludGVybmFsTmFtZSB8fCB0aGlzLmludGVybmFsVG9QdWJsaWMuaGFzT3duUHJvcGVydHkoaW50ZXJuYWxOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwdWJsaWNOYW1lID0gdGhpcy5tYXBOYW1lKGludGVybmFsTmFtZSk7XG5cbiAgICBpZiAodGhpcy5wdWJsaWNUb0ludGVybmFsLmhhc093blByb3BlcnR5KHB1YmxpY05hbWUpKSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgWE1CIHdoZW4gaXQgaGFzIGFscmVhZHkgYmVlbiB1c2VkXG4gICAgICBjb25zdCBuZXh0SWQgPSB0aGlzLnB1YmxpY1RvTmV4dElkW3B1YmxpY05hbWVdO1xuICAgICAgdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXSA9IG5leHRJZCArIDE7XG4gICAgICBwdWJsaWNOYW1lID0gYCR7cHVibGljTmFtZX1fJHtuZXh0SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXSA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gPSBwdWJsaWNOYW1lO1xuICAgIHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA9IGludGVybmFsTmFtZTtcbiAgfVxufVxuXG5jb25zdCBpMThuU2VsZWN0UGlwZSA9IG5ldyBJMThuU2VsZWN0UGlwZSgpO1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIGkxOG5QbHVyYWxQaXBlOiBJMThuUGx1cmFsUGlwZTtcbiAgY29uc3RydWN0b3IobG9jYWxlOiBzdHJpbmcsIHByaXZhdGUgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIHRoaXMuaTE4blBsdXJhbFBpcGUgPSBuZXcgSTE4blBsdXJhbFBpcGUobmV3IE5nTG9jYWxlTG9jYWxpemF0aW9uKGxvY2FsZSkpO1xuICB9XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaWYgKGdldEh0bWxUYWdEZWZpbml0aW9uKGVsZW1lbnQubmFtZSkuaXNWb2lkKSB7XG4gICAgICByZXR1cm4gYDwke2VsZW1lbnQubmFtZX0ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5hdHRycywgXCIgXCIpfS8+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYDwke2VsZW1lbnQubmFtZX0ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5hdHRycywgXCIgXCIpfT4ke3RoaXMuc2VyaWFsaXplTm9kZXMoZWxlbWVudC5jaGlsZHJlbil9PC8ke1xuICAgICAgZWxlbWVudC5uYW1lXG4gICAgfT5gO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYCR7YXR0cmlidXRlLm5hbWV9PVwiJHthdHRyaWJ1dGUudmFsdWV9XCJgO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGA8IS0tJHtjb21tZW50LnZhbHVlfS0tPmA7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0ge307XG4gICAgZXhwYW5zaW9uLmNhc2VzLmZvckVhY2goYyA9PiAoY2FzZXNbYy52YWx1ZV0gPSB0aGlzLnNlcmlhbGl6ZU5vZGVzKGMuZXhwcmVzc2lvbikpKTtcblxuICAgIHN3aXRjaCAoZXhwYW5zaW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgcmV0dXJuIGkxOG5TZWxlY3RQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdIHx8IFwiXCIsIGNhc2VzKTtcbiAgICAgIGNhc2UgXCJwbHVyYWxcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4blBsdXJhbFBpcGUudHJhbnNmb3JtKHRoaXMucGFyYW1zW2V4cGFuc2lvbi5zd2l0Y2hWYWx1ZV0sIGNhc2VzKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGV4cGFuc2lvbiB0eXBlIFwiJHtleHBhbnNpb24udHlwZX1cImApO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYCAke2V4cGFuc2lvbkNhc2UudmFsdWV9IHske3RoaXMuc2VyaWFsaXplTm9kZXMoZXhwYW5zaW9uQ2FzZS5leHByZXNzaW9uKX19YDtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTm9kZXMobm9kZXM6IGh0bWwuTm9kZVtdLCBqb2luID0gXCJcIik6IHN0cmluZyB7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBqb2luICsgbm9kZXMubWFwKGEgPT4gYS52aXNpdCh0aGlzLCBudWxsKSkuam9pbihqb2luKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGh0bWwuTm9kZVtdLCBsb2NhbGU6IHN0cmluZywgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIG5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQobmV3IFNlcmlhbGl6ZXJWaXNpdG9yKGxvY2FsZSwgcGFyYW1zKSwgbnVsbCkpO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFRvWG1sUGFyc2VyIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBlcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIHhtbE1lc3NhZ2VzQnlJZDoge1tpZDogc3RyaW5nXTogeG1sLk5vZGV9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgTUVTU0FHRV9UQUc6IHN0cmluZykge31cblxuICBwYXJzZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnhtbE1lc3NhZ2VzQnlJZCA9IHt9O1xuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShjb250ZW50LCBcIlwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLmVycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgaHRtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICB4bWxNZXNzYWdlc0J5SWQ6IHRoaXMueG1sTWVzc2FnZXNCeUlkLFxuICAgICAgZXJyb3JzOiB0aGlzLmVycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIHRoaXMuTUVTU0FHRV9UQUc6XG4gICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICB0aGlzLnhtbE1lc3NhZ2VzQnlJZFtpZC52YWx1ZV0gPSAoZWxlbWVudCBhcyBhbnkpIGFzIHhtbC5Ob2RlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogaHRtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1lc3NhZ2UuaWQgfHwgc2hhMShzZXJpYWxpemVOb2RlcyhtZXNzYWdlLm5vZGVzKS5qb2luKFwiXCIpICsgYFske21lc3NhZ2UubWVhbmluZ31dYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsRGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIGlmIChtZXNzYWdlLmlkKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UuaWQ7XG4gIH1cblxuICBjb25zdCB2aXNpdG9yID0gbmV3IFNlcmlhbGl6ZXJJZ25vcmVJY3VFeHBWaXNpdG9yKCk7XG4gIGNvbnN0IHBhcnRzID0gbWVzc2FnZS5ub2Rlcy5tYXAoYSA9PiBhLnZpc2l0KHZpc2l0b3IsIG51bGwpKTtcbiAgcmV0dXJuIGNvbXB1dGVNc2dJZChwYXJ0cy5qb2luKFwiXCIpLCBtZXNzYWdlLm1lYW5pbmcpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogVGhlIHZpc2l0b3IgaXMgYWxzbyB1c2VkIGluIHRoZSBpMThuIHBhcnNlciB0ZXN0c1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVyVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgWyR7Y29udGFpbmVyLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfV1gO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgcmV0dXJuIGB7JHtpY3UuZXhwcmVzc2lvbn0sICR7aWN1LnR5cGV9LCAke3N0ckNhc2VzLmpvaW4oXCIsIFwiKX19YDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHBoLmlzVm9pZFxuICAgICAgPyBgPHBoIHRhZyBuYW1lPVwiJHtwaC5zdGFydE5hbWV9XCIvPmBcbiAgICAgIDogYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiPiR7cGguY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMpKS5qb2luKFwiLCBcIil9PC9waCBuYW1lPVwiJHtcbiAgICAgICAgICBwaC5jbG9zZU5hbWVcbiAgICAgICAgfVwiPmA7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC52YWx1ZSA/IGA8cGggbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlfTwvcGg+YCA6IGA8cGggbmFtZT1cIiR7cGgubmFtZX1cIi8+YDtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPHBoIGljdSBuYW1lPVwiJHtwaC5uYW1lfVwiPiR7cGgudmFsdWUudmlzaXQodGhpcyl9PC9waD5gO1xuICB9XG59XG5cbmNvbnN0IHNlcmlhbGl6ZXJWaXNpdG9yID0gbmV3IFNlcmlhbGl6ZXJWaXNpdG9yKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVOb2Rlcyhub2RlczogaTE4bi5Ob2RlW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAoYSA9PiBhLnZpc2l0KHNlcmlhbGl6ZXJWaXNpdG9yLCBudWxsKSk7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBpMThuIGh0bWwgdG8gc29tZXRoaW5nIHhtbC1saWtlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGFuIFVJRC5cbiAqXG4gKiBJZ25vcmUgdGhlIElDVSBleHByZXNzaW9ucyBzbyB0aGF0IG1lc3NhZ2UgSURzIHN0YXlzIGlkZW50aWNhbCBpZiBvbmx5IHRoZSBleHByZXNzaW9uIGNoYW5nZXMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIFNlcmlhbGl6ZXJJZ25vcmVJY3VFeHBWaXNpdG9yIGV4dGVuZHMgU2VyaWFsaXplclZpc2l0b3Ige1xuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHN0ckNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoKGs6IHN0cmluZykgPT4gYCR7a30geyR7aWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpfX1gKTtcbiAgICAvLyBEbyBub3QgdGFrZSB0aGUgZXhwcmVzc2lvbiBpbnRvIGFjY291bnRcbiAgICByZXR1cm4gYHske2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wdXRlIHRoZSBTSEExIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBzZWUgaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC00L2ZpcHMtMTgwLTQucGRmXG4gKlxuICogV0FSTklORzogdGhpcyBmdW5jdGlvbiBoYXMgbm90IGJlZW4gZGVzaWduZWQgbm90IHRlc3RlZCB3aXRoIHNlY3VyaXR5IGluIG1pbmQuXG4gKiAgICAgICAgICBETyBOT1QgVVNFIElUIElOIEEgU0VDVVJJVFkgU0VOU0lUSVZFIENPTlRFWFQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGExKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcbiAgY29uc3Qgd29yZHMzMiA9IHN0cmluZ1RvV29yZHMzMih1dGY4LCBFbmRpYW4uQmlnKTtcbiAgY29uc3QgbGVuID0gdXRmOC5sZW5ndGggKiA4O1xuXG4gIGNvbnN0IHcgPSBuZXcgQXJyYXkoODApO1xuICBsZXQgW2EsIGIsIGMsIGQsIGVdOiBudW1iZXJbXSA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICB3b3JkczMyW2xlbiA+PiA1XSB8PSAweDgwIDw8ICgyNCAtIGxlbiAlIDMyKTtcbiAgd29yZHMzMlsoKChsZW4gKyA2NCkgPj4gOSkgPDwgNCkgKyAxNV0gPSBsZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkczMyLmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IFtoMCwgaDEsIGgyLCBoMywgaDRdOiBudW1iZXJbXSA9IFthLCBiLCBjLCBkLCBlXTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgODA7IGorKykge1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAoaiA8IDE2KSB7XG4gICAgICAgIHdbal0gPSB3b3JkczMyW2kgKyBqXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdbal0gPSByb2wzMih3W2ogLSAzXSBeIHdbaiAtIDhdIF4gd1tqIC0gMTRdIF4gd1tqIC0gMTZdLCAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2YsIGtdID0gZmsoaiwgYiwgYywgZCk7XG4gICAgICBjb25zdCB0ZW1wID0gW3JvbDMyKGEsIDUpLCBmLCBlLCBrLCB3W2pdXS5yZWR1Y2UoYWRkMzIpO1xuICAgICAgW2UsIGQsIGMsIGIsIGFdID0gW2QsIGMsIHJvbDMyKGIsIDMwKSwgYSwgdGVtcF07XG4gICAgfVxuXG4gICAgW2EsIGIsIGMsIGQsIGVdID0gW2FkZDMyKGEsIGgwKSwgYWRkMzIoYiwgaDEpLCBhZGQzMihjLCBoMiksIGFkZDMyKGQsIGgzKSwgYWRkMzIoZSwgaDQpXTtcbiAgfVxuXG4gIHJldHVybiBieXRlU3RyaW5nVG9IZXhTdHJpbmcod29yZHMzMlRvQnl0ZVN0cmluZyhbYSwgYiwgYywgZCwgZV0pKTtcbn1cblxuZnVuY3Rpb24gZmsoaW5kZXg6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICBpZiAoaW5kZXggPCAyMCkge1xuICAgIHJldHVybiBbKGIgJiBjKSB8ICh+YiAmIGQpLCAweDVhODI3OTk5XTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDQwKSB7XG4gICAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4NmVkOWViYTFdO1xuICB9XG5cbiAgaWYgKGluZGV4IDwgNjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKSwgMHg4ZjFiYmNkY107XG4gIH1cblxuICByZXR1cm4gW2IgXiBjIF4gZCwgMHhjYTYyYzFkNl07XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgZmluZ2VycHJpbnQgb2YgdGhlIGdpdmVuIHN0cmluZ1xuICpcbiAqIFRoZSBvdXRwdXQgaXMgNjQgYml0IG51bWJlciBlbmNvZGVkIGFzIGEgZGVjaW1hbCBzdHJpbmdcbiAqXG4gKiBiYXNlZCBvbjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9ibG9iL21hc3Rlci9zcmMvY29tL2dvb2dsZS9qYXZhc2NyaXB0L2pzY29tcC9Hb29nbGVKc01lc3NhZ2VJZEdlbmVyYXRvci5qYXZhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5nZXJwcmludChzdHI6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB1dGY4ID0gdXRmOEVuY29kZShzdHIpO1xuXG4gIGxldCBbaGksIGxvXSA9IFtoYXNoMzIodXRmOCwgMCksIGhhc2gzMih1dGY4LCAxMDIwNzIpXTtcblxuICBpZiAoaGkgPT09IDAgJiYgKGxvID09PSAwIHx8IGxvID09PSAxKSkge1xuICAgIGhpID0gaGkgXiAweDEzMGY5YmVmO1xuICAgIGxvID0gbG8gXiAtMHg2YjVmNTZkODtcbiAgfVxuXG4gIHJldHVybiBbaGksIGxvXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVNc2dJZChtc2c6IHN0cmluZywgbWVhbmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IFtoaSwgbG9dID0gZmluZ2VycHJpbnQobXNnKTtcblxuICBpZiAobWVhbmluZykge1xuICAgIGNvbnN0IFtoaW0sIGxvbV0gPSBmaW5nZXJwcmludChtZWFuaW5nKTtcbiAgICBbaGksIGxvXSA9IGFkZDY0KHJvbDY0KFtoaSwgbG9dLCAxKSwgW2hpbSwgbG9tXSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2hpICYgMHg3ZmZmZmZmZiwgbG9dKSk7XG59XG5cbmZ1bmN0aW9uIGhhc2gzMihzdHI6IHN0cmluZywgYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IFthLCBiXSA9IFsweDllMzc3OWI5LCAweDllMzc3OWI5XTtcbiAgbGV0IGk6IG51bWJlcjtcblxuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgKyAxMiA8PSBsZW47IGkgKz0gMTIpIHtcbiAgICBhID0gYWRkMzIoYSwgd29yZEF0KHN0ciwgaSwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIGMgPSBhZGQzMihjLCB3b3JkQXQoc3RyLCBpICsgOCwgRW5kaWFuLkxpdHRsZSkpO1xuICAgIFthLCBiLCBjXSA9IG1peChbYSwgYiwgY10pO1xuICB9XG5cbiAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgYiA9IGFkZDMyKGIsIHdvcmRBdChzdHIsIGkgKyA0LCBFbmRpYW4uTGl0dGxlKSk7XG4gIC8vIHRoZSBmaXJzdCBieXRlIG9mIGMgaXMgcmVzZXJ2ZWQgZm9yIHRoZSBsZW5ndGhcbiAgYyA9IGFkZDMyKGMsIGxlbik7XG4gIGMgPSBhZGQzMihjLCB3b3JkQXQoc3RyLCBpICsgOCwgRW5kaWFuLkxpdHRsZSkgPDwgOCk7XG5cbiAgcmV0dXJuIG1peChbYSwgYiwgY10pWzJdO1xufVxuXG4vLyBjbGFuZy1mb3JtYXQgb2ZmXG5mdW5jdGlvbiBtaXgoW2EsIGIsIGNdOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAxMztcbiAgYiA9IHN1YjMyKGIsIGMpO1xuICBiID0gc3ViMzIoYiwgYSk7XG4gIGIgXj0gYSA8PCA4O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxMztcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTI7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgMTY7XG4gIGMgPSBzdWIzMihjLCBhKTtcbiAgYyA9IHN1YjMyKGMsIGIpO1xuICBjIF49IGIgPj4+IDU7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgMTA7XG4gIGMgPSBzdWIzMihjLCBhKTtcbiAgYyA9IHN1YjMyKGMsIGIpO1xuICBjIF49IGIgPj4+IDE1O1xuICByZXR1cm4gW2EsIGIsIGNdO1xufVxuLy8gY2xhbmctZm9ybWF0IG9uXG5cbi8vIFV0aWxzXG5cbmVudW0gRW5kaWFuIHtcbiAgTGl0dGxlLFxuICBCaWdcbn1cblxuZnVuY3Rpb24gYWRkMzIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYWRkMzJ0bzY0KGEsIGIpWzFdO1xufVxuXG5mdW5jdGlvbiBhZGQzMnRvNjQoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpICsgKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4+IDE2KSArIChiID4+PiAxNikgKyAobG93ID4+PiAxNik7XG4gIHJldHVybiBbaGlnaCA+Pj4gMTYsIChoaWdoIDw8IDE2KSB8IChsb3cgJiAweGZmZmYpXTtcbn1cblxuZnVuY3Rpb24gYWRkNjQoW2FoLCBhbF06IFtudW1iZXIsIG51bWJlcl0sIFtiaCwgYmxdOiBbbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IFtjYXJyeSwgbF0gPSBhZGQzMnRvNjQoYWwsIGJsKTtcbiAgY29uc3QgaCA9IGFkZDMyKGFkZDMyKGFoLCBiaCksIGNhcnJ5KTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3ViMzIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBsb3cgPSAoYSAmIDB4ZmZmZikgLSAoYiAmIDB4ZmZmZik7XG4gIGNvbnN0IGhpZ2ggPSAoYSA+PiAxNikgLSAoYiA+PiAxNikgKyAobG93ID4+IDE2KTtcbiAgcmV0dXJuIChoaWdoIDw8IDE2KSB8IChsb3cgJiAweGZmZmYpO1xufVxuXG4vLyBSb3RhdGUgYSAzMmIgbnVtYmVyIGxlZnQgYGNvdW50YCBwb3NpdGlvblxuZnVuY3Rpb24gcm9sMzIoYTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChhIDw8IGNvdW50KSB8IChhID4+PiAoMzIgLSBjb3VudCkpO1xufVxuXG4vLyBSb3RhdGUgYSA2NGIgbnVtYmVyIGxlZnQgYGNvdW50YCBwb3NpdGlvblxuZnVuY3Rpb24gcm9sNjQoW2hpLCBsb106IFtudW1iZXIsIG51bWJlcl0sIGNvdW50OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgaCA9IChoaSA8PCBjb3VudCkgfCAobG8gPj4+ICgzMiAtIGNvdW50KSk7XG4gIGNvbnN0IGwgPSAobG8gPDwgY291bnQpIHwgKGhpID4+PiAoMzIgLSBjb3VudCkpO1xuICByZXR1cm4gW2gsIGxdO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb1dvcmRzMzIoc3RyOiBzdHJpbmcsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyW10ge1xuICBjb25zdCB3b3JkczMyID0gQXJyYXkoKHN0ci5sZW5ndGggKyAzKSA+Pj4gMik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JkczMyLmxlbmd0aDsgaSsrKSB7XG4gICAgd29yZHMzMltpXSA9IHdvcmRBdChzdHIsIGkgKiA0LCBlbmRpYW4pO1xuICB9XG5cbiAgcmV0dXJuIHdvcmRzMzI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBpbmRleCA+PSBzdHIubGVuZ3RoID8gMCA6IHN0ci5jaGFyQ29kZUF0KGluZGV4KSAmIDB4ZmY7XG59XG5cbmZ1bmN0aW9uIHdvcmRBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlciwgZW5kaWFuOiBFbmRpYW4pOiBudW1iZXIge1xuICBsZXQgd29yZCA9IDA7XG4gIGlmIChlbmRpYW4gPT09IEVuZGlhbi5CaWcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgd29yZCArPSBieXRlQXQoc3RyLCBpbmRleCArIGkpIDw8ICgyNCAtIDggKiBpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoOCAqIGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd29yZDtcbn1cblxuZnVuY3Rpb24gd29yZHMzMlRvQnl0ZVN0cmluZyh3b3JkczMyOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIHJldHVybiB3b3JkczMyLnJlZHVjZSgoc3RyLCB3b3JkKSA9PiBzdHIgKyB3b3JkMzJUb0J5dGVTdHJpbmcod29yZCksIFwiXCIpO1xufVxuXG5mdW5jdGlvbiB3b3JkMzJUb0J5dGVTdHJpbmcod29yZDogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IHN0ciA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHdvcmQgPj4+ICg4ICogKDMgLSBpKSkpICYgMHhmZik7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGhleCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYiA9IGJ5dGVBdChzdHIsIGkpO1xuICAgIGhleCArPSAoYiA+Pj4gNCkudG9TdHJpbmcoMTYpICsgKGIgJiAweDBmKS50b1N0cmluZygxNik7XG4gIH1cbiAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBiYXNlZCBvbiBodHRwOi8vd3d3LmRhbnZrLm9yZy9oZXgyZGVjLmh0bWwgKEpTIGNhbiBub3QgaGFuZGxlIG1vcmUgdGhhbiA1NmIpXG5mdW5jdGlvbiBieXRlU3RyaW5nVG9EZWNTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZGVjaW1hbCA9IFwiXCI7XG4gIGxldCB0b1RoZVBvd2VyID0gXCIxXCI7XG5cbiAgZm9yIChsZXQgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRlY2ltYWwgPSBhZGRCaWdJbnQoZGVjaW1hbCwgbnVtYmVyVGltZXNCaWdJbnQoYnl0ZUF0KHN0ciwgaSksIHRvVGhlUG93ZXIpKTtcbiAgICB0b1RoZVBvd2VyID0gbnVtYmVyVGltZXNCaWdJbnQoMjU2LCB0b1RoZVBvd2VyKTtcbiAgfVxuXG4gIHJldHVybiBkZWNpbWFsXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLnJldmVyc2UoKVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG4vLyB4IGFuZCB5IGRlY2ltYWwsIGxvd2VzdCBzaWduaWZpY2FudCBkaWdpdCBmaXJzdFxuZnVuY3Rpb24gYWRkQmlnSW50KHg6IHN0cmluZywgeTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHN1bSA9IFwiXCI7XG4gIGNvbnN0IGxlbiA9IE1hdGgubWF4KHgubGVuZ3RoLCB5Lmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwLCBjYXJyeSA9IDA7IGkgPCBsZW4gfHwgY2Fycnk7IGkrKykge1xuICAgIGNvbnN0IHRtcFN1bSA9IGNhcnJ5ICsgKyh4W2ldIHx8IDApICsgKyh5W2ldIHx8IDApO1xuICAgIGlmICh0bXBTdW0gPj0gMTApIHtcbiAgICAgIGNhcnJ5ID0gMTtcbiAgICAgIHN1bSArPSB0bXBTdW0gLSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FycnkgPSAwO1xuICAgICAgc3VtICs9IHRtcFN1bTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VtO1xufVxuXG5mdW5jdGlvbiBudW1iZXJUaW1lc0JpZ0ludChudW06IG51bWJlciwgYjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHByb2R1Y3QgPSBcIlwiO1xuICBsZXQgYlRvVGhlUG93ZXIgPSBiO1xuICBmb3IgKDsgbnVtICE9PSAwOyBudW0gPSBudW0gPj4+IDEpIHtcbiAgICBpZiAobnVtICYgMSkge1xuICAgICAgcHJvZHVjdCA9IGFkZEJpZ0ludChwcm9kdWN0LCBiVG9UaGVQb3dlcik7XG4gICAgfVxuICAgIGJUb1RoZVBvd2VyID0gYWRkQmlnSW50KGJUb1RoZVBvd2VyLCBiVG9UaGVQb3dlcik7XG4gIH1cbiAgcmV0dXJuIHByb2R1Y3Q7XG59XG5cbmZ1bmN0aW9uIHV0ZjhFbmNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgZW5jb2RlZCA9IFwiXCI7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IGNvZGVQb2ludCA9IHN0ci5jaGFyQ29kZUF0KGluZGV4KTtcblxuICAgIC8vIGRlY29kZSBzdXJyb2dhdGVcbiAgICAvLyBzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgaWYgKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGJmZiAmJiBzdHIubGVuZ3RoID4gaW5kZXggKyAxKSB7XG4gICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICAgICAgaWYgKGxvdyA+PSAweGRjMDAgJiYgbG93IDw9IDB4ZGZmZikge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb2RlUG9pbnQgPSAoKGNvZGVQb2ludCAtIDB4ZDgwMCkgPDwgMTApICsgbG93IC0gMHhkYzAwICsgMHgxMDAwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50IDw9IDB4N2YpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4N2ZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gNikgJiAweDFmKSB8IDB4YzAsIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoY29kZVBvaW50ID4+IDEyKSB8IDB4ZTAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDYpICYgMHgzZikgfCAweDgwLFxuICAgICAgICAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4MWZmZmZmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhmMCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gMTIpICYgMHgzZikgfCAweDgwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5jb2RlZDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5cbmNvbnN0IF9WRVJTSU9OID0gXCIxLjJcIjtcbmNvbnN0IF9YTUxOUyA9IFwidXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjEuMlwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwieFwiO1xuY29uc3QgX0ZJTEVfVEFHID0gXCJmaWxlXCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5jb25zdCBfVEFSR0VUX1RBRyA9IFwidGFyZ2V0XCI7XG5jb25zdCBfVU5JVF9UQUcgPSBcInRyYW5zLXVuaXRcIjtcbmNvbnN0IF9DT05URVhUX0dST1VQX1RBRyA9IFwiY29udGV4dC1ncm91cFwiO1xuY29uc3QgX0NPTlRFWFRfVEFHID0gXCJjb250ZXh0XCI7XG5jb25zdCBfREVGQVVMVF9TT1VSQ0VfTEFORyA9IFwiZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvSTE4bihjb250ZW50OiBzdHJpbmcpOiBJMThuTWVzc2FnZXNCeUlkIHtcbiAgLy8geGxpZmYgdG8geG1sIG5vZGVzXG4gIGNvbnN0IHhsaWZmUGFyc2VyID0gbmV3IFhsaWZmUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHhsaWZmUGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIC8vIHhtbCBub2RlcyB0byBpMThuIG1lc3NhZ2VzXG4gIGNvbnN0IGkxOG5NZXNzYWdlc0J5SWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9O1xuICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgWG1sVG9JMThuKCk7XG5cbiAgT2JqZWN0LmtleXMobXNnSWRUb0h0bWwpLmZvckVhY2gobXNnSWQgPT4ge1xuICAgIGNvbnN0IHtpMThuTm9kZXMsIGVycm9yczogZX0gPSBjb252ZXJ0ZXIuY29udmVydChtc2dJZFRvSHRtbFttc2dJZF0pO1xuICAgIGVycm9ycy5wdXNoKC4uLmUpO1xuICAgIGkxOG5NZXNzYWdlc0J5SWRbbXNnSWRdID0gaTE4bk5vZGVzO1xuICB9KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk1lc3NhZ2VzQnlJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmZMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfVU5JVF9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiB4bWxNZXNzYWdlc0J5SWQ7XG59XG5cbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3YxLjIvb3MveGxpZmYtY29yZS5odG1sXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL3hsaWZmLXByb2ZpbGUtaHRtbC94bGlmZi1wcm9maWxlLWh0bWwtMS4yLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHRyYW5zVW5pdHM6IHhtbC5Ob2RlW10gPSBleGlzdGluZ05vZGVzICYmIGV4aXN0aW5nTm9kZXMubGVuZ3RoID8gW25ldyB4bWwuQ1IoNiksIC4uLmV4aXN0aW5nTm9kZXNdIDogW107XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCBjb250ZXh0VGFnczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRHcm91cFRhZyA9IG5ldyB4bWwuVGFnKF9DT05URVhUX0dST1VQX1RBRywge3B1cnBvc2U6IFwibG9jYXRpb25cIn0pO1xuICAgICAgY29udGV4dEdyb3VwVGFnLmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoMTApLFxuICAgICAgICBuZXcgeG1sLlRhZyhfQ09OVEVYVF9UQUcsIHtcImNvbnRleHQtdHlwZVwiOiBcInNvdXJjZWZpbGVcIn0sIFtuZXcgeG1sLlRleHQoc291cmNlLmZpbGVQYXRoKV0pLFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJsaW5lbnVtYmVyXCJ9LCBbbmV3IHhtbC5UZXh0KGAke3NvdXJjZS5zdGFydExpbmV9YCldKSxcbiAgICAgICAgbmV3IHhtbC5DUig4KVxuICAgICAgKTtcbiAgICAgIGNvbnRleHRUYWdzLnB1c2gobmV3IHhtbC5DUig4KSwgY29udGV4dEdyb3VwVGFnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRyYW5zVW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkLCBkYXRhdHlwZTogXCJodG1sXCJ9KTtcbiAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIHZpc2l0b3Iuc2VyaWFsaXplKG1lc3NhZ2Uubm9kZXMpKSxcbiAgICAgIC4uLmNvbnRleHRUYWdzXG4gICAgKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgbmV3IHhtbC5UYWcoXCJub3RlXCIsIHtwcmlvcml0eTogXCIxXCIsIGZyb206IFwiZGVzY3JpcHRpb25cIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5kZXNjcmlwdGlvbildKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICB0cmFuc1VuaXQuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgbmV3IHhtbC5UYWcoXCJub3RlXCIsIHtwcmlvcml0eTogXCIxXCIsIGZyb206IFwibWVhbmluZ1wifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLm1lYW5pbmcpXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSk7XG5cbiAgICB0cmFuc1VuaXRzLnB1c2gobmV3IHhtbC5DUig2KSwgdHJhbnNVbml0KTtcbiAgfSk7XG5cbiAgY29uc3QgYm9keSA9IG5ldyB4bWwuVGFnKFwiYm9keVwiLCB7fSwgWy4uLnRyYW5zVW5pdHMsIG5ldyB4bWwuQ1IoNCldKTtcbiAgY29uc3QgZmlsZSA9IG5ldyB4bWwuVGFnKFxuICAgIFwiZmlsZVwiLFxuICAgIHtcbiAgICAgIFwic291cmNlLWxhbmd1YWdlXCI6IGxvY2FsZSB8fCBfREVGQVVMVF9TT1VSQ0VfTEFORyxcbiAgICAgIGRhdGF0eXBlOiBcInBsYWludGV4dFwiLFxuICAgICAgb3JpZ2luYWw6IFwibmcyLnRlbXBsYXRlXCJcbiAgICB9LFxuICAgIFtuZXcgeG1sLkNSKDQpLCBib2R5LCBuZXcgeG1sLkNSKDIpXVxuICApO1xuICBjb25zdCB4bGlmZiA9IG5ldyB4bWwuVGFnKFwieGxpZmZcIiwge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TfSwgW25ldyB4bWwuQ1IoMiksIGZpbGUsIG5ldyB4bWwuQ1IoKV0pO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksIG5ldyB4bWwuQ1IoKSwgeGxpZmYsIG5ldyB4bWwuQ1IoKV0pO1xufVxuXG5leHBvcnQgY29uc3QgeGxpZmZEaWdlc3QgPSBkaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX3VuaXRNbFN0cmluZzogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBfbXNnSWRUb0h0bWw6IHtbbXNnSWQ6IHN0cmluZ106IHN0cmluZ307XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gbnVsbDtcbiAgICB0aGlzLl9tc2dJZFRvSHRtbCA9IHt9O1xuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShjb250ZW50LCBcIlwiLCBmYWxzZSk7XG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGwhO1xuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19VTklUX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl91bml0TWxTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gdGhpcy5fdW5pdE1sU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYE1lc3NhZ2UgJHtpZH0gbWlzc2VzIGEgdHJhbnNsYXRpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1NPVVJDRV9UQUc6XG4gICAgICAgIC8vIGlnbm9yZSBzb3VyY2UgbWVzc2FnZVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVEFSR0VUX1RBRzpcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0LCBpbm5lclRleHRFbmQpO1xuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBpbm5lclRleHQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9GSUxFX1RBRzpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPKHZpY2IpOiBhc3NlcnQgZmlsZSBzdHJ1Y3R1cmUsIHhsaWZmIHZlcnNpb25cbiAgICAgICAgLy8gRm9yIG5vdyBvbmx5IHJlY3Vyc2Ugb24gdW5oYW5kbGVkIG5vZGVzXG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeGxpZmYgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogbWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyIHwgbnVsbCB7XG4gICAgaWYgKGVsLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICByZXR1cm4gbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKVxuICAgIH07XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuY2xhc3MgV3JpdGVWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY3R5cGUgPSBnZXRDdHlwZUZvclRhZyhwaC50YWcpO1xuXG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgLy8gdm9pZCB0YWdzIGhhdmUgbm8gY2hpbGRyZW4gbm9yIGNsb3NpbmcgdGFnc1xuICAgICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLnN0YXJ0TmFtZSwgY3R5cGUsIFwiZXF1aXYtdGV4dFwiOiBgPCR7cGgudGFnfS8+YH0pXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30+YH0pO1xuICAgIGNvbnN0IGNsb3NlVGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7aWQ6IHBoLmNsb3NlTmFtZSwgY3R5cGUsIFwiZXF1aXYtdGV4dFwiOiBgPC8ke3BoLnRhZ30+YH0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5uYW1lLCBcImVxdWl2LXRleHRcIjogYHt7JHtwaC52YWx1ZX19fWB9KV07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgZXF1aXZUZXh0ID0gYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke09iamVjdC5rZXlzKHBoLnZhbHVlLmNhc2VzKVxuICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgLmpvaW4oXCIgXCIpfX1gO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5uYW1lLCBcImVxdWl2LXRleHRcIjogZXF1aXZUZXh0fSldO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN0eXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgICAgcmV0dXJuIFwibGJcIjtcbiAgICBjYXNlIFwiaW1nXCI6XG4gICAgICByZXR1cm4gXCJpbWFnZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYHgtJHt0YWd9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7SHRtbFRvWG1sUGFyc2VyLCBJMThuTWVzc2FnZXNCeUlkLCBYbWxNZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7ZGVjaW1hbERpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5cbmNvbnN0IF9WRVJTSU9OID0gXCIyLjBcIjtcbmNvbnN0IF9YTUxOUyA9IFwidXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjIuMFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRyA9IFwicGNcIjtcbmNvbnN0IF9YTElGRl9UQUcgPSBcInhsaWZmXCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5jb25zdCBfVEFSR0VUX1RBRyA9IFwidGFyZ2V0XCI7XG5jb25zdCBfVU5JVF9UQUcgPSBcInVuaXRcIjtcbmNvbnN0IF9OT1RFU19UQUcgPSBcIm5vdGVzXCI7XG5jb25zdCBfTk9URV9UQUcgPSBcIm5vdGVcIjtcbmNvbnN0IF9TRUdNRU5UX1RBRyA9IFwic2VnbWVudFwiO1xuY29uc3QgX0ZJTEVfVEFHID0gXCJmaWxlXCI7XG5cbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3hsaWZmLWNvcmUvdjIuMC9vcy94bGlmZi1jb3JlLXYyLjAtb3MuaHRtbFxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZjJQYXJzZXIgPSBuZXcgWGxpZmYyUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHhsaWZmMlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTm9kZXNCeU1zZ0lkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmMiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiBpMThuTm9kZXNCeU1zZ0lkO1xufVxuXG4vLyB1c2VkIHRvIG1lcmdlIHRyYW5zbGF0aW9ucyB3aGVuIGV4dHJhY3RpbmdcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfVU5JVF9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyV3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZyB8IG51bGwsIGV4aXN0aW5nTm9kZXM/OiB4bWwuTm9kZVtdKTogc3RyaW5nIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBXcml0ZVZpc2l0b3IoKTtcbiAgY29uc3QgdW5pdHM6IHhtbC5Ob2RlW10gPSBleGlzdGluZ05vZGVzICYmIGV4aXN0aW5nTm9kZXMubGVuZ3RoID8gW25ldyB4bWwuQ1IoNCksIC4uLmV4aXN0aW5nTm9kZXNdIDogW107XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCB1bml0ID0gbmV3IHhtbC5UYWcoX1VOSVRfVEFHLCB7aWQ6IG1lc3NhZ2UuaWR9KTtcbiAgICBjb25zdCBub3RlcyA9IG5ldyB4bWwuVGFnKF9OT1RFU19UQUcpO1xuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gfHwgbWVzc2FnZS5tZWFuaW5nIHx8IG1lc3NhZ2Uuc291cmNlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJkZXNjcmlwdGlvblwifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLmRlc2NyaXB0aW9uKV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLm1lYW5pbmcpIHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcImxvY2F0aW9uXCJ9LCBbXG4gICAgICAgICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgICAgICAgIGAke3NvdXJjZS5maWxlUGF0aH06JHtzb3VyY2Uuc3RhcnRMaW5lfSR7c291cmNlLmVuZExpbmUgIT09IHNvdXJjZS5zdGFydExpbmUgPyBcIixcIiArIHNvdXJjZS5lbmRMaW5lIDogXCJcIn1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuICAgICAgdW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNiksIG5vdGVzKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHNlZ21lbnQgPSBuZXcgeG1sLlRhZyhfU0VHTUVOVF9UQUcpO1xuXG4gICAgc2VnbWVudC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoOCksIG5ldyB4bWwuVGFnKF9TT1VSQ0VfVEFHLCB7fSwgdmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcykpLCBuZXcgeG1sLkNSKDYpKTtcblxuICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBzZWdtZW50LCBuZXcgeG1sLkNSKDQpKTtcblxuICAgIHVuaXRzLnB1c2gobmV3IHhtbC5DUig0KSwgdW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhfRklMRV9UQUcsIHtvcmlnaW5hbDogXCJuZy50ZW1wbGF0ZVwiLCBpZDogXCJuZ2kxOG5cIn0sIFsuLi51bml0cywgbmV3IHhtbC5DUigyKV0pO1xuXG4gIGNvbnN0IHhsaWZmID0gbmV3IHhtbC5UYWcoX1hMSUZGX1RBRywge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TLCBzcmNMYW5nOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkd9LCBbXG4gICAgbmV3IHhtbC5DUigyKSxcbiAgICBmaWxlLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmMkRpZ2VzdCA9IGRlY2ltYWxEaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmMlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1VOSVRfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3VuaXRNbFN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSB0aGlzLl91bml0TWxTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgTWVzc2FnZSAke2lkfSBtaXNzZXMgYSB0cmFuc2xhdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfU09VUkNFX1RBRzpcbiAgICAgICAgLy8gaWdub3JlIHNvdXJjZSBtZXNzYWdlXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UQVJHRVRfVEFHOlxuICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQsIGlubmVyVGV4dEVuZCk7XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IGlubmVyVGV4dDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1hMSUZGX1RBRzpcbiAgICAgICAgY29uc3QgdmVyc2lvbkF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwidmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlcnNpb25BdHRyKSB7XG4gICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25BdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh2ZXJzaW9uICE9PSBcIjIuMFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgVGhlIFhMSUZGIGZpbGUgdmVyc2lvbiAke3ZlcnNpb259IGlzIG5vdCBjb21wYXRpYmxlIHdpdGggWExJRkYgMi4wIHNlcmlhbGl6ZXJgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZVtdIHwgbnVsbCB7XG4gICAgc3dpdGNoIChlbC5uYW1lKSB7XG4gICAgICBjYXNlIF9QTEFDRUhPTERFUl9UQUc6XG4gICAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlwiKTtcbiAgICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbildO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfU1BBTk5JTkdfVEFHOlxuICAgICAgICBjb25zdCBzdGFydEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2U3RhcnRcIik7XG4gICAgICAgIGNvbnN0IGVuZEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2RW5kXCIpO1xuXG4gICAgICAgIGlmICghc3RhcnRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2U3RhcnRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdkVuZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SWQgPSBzdGFydEF0dHIudmFsdWU7XG4gICAgICAgICAgY29uc3QgZW5kSWQgPSBlbmRBdHRyLnZhbHVlO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXMuY29uY2F0KFxuICAgICAgICAgICAgbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgc3RhcnRJZCwgZWwuc291cmNlU3BhbiksXG4gICAgICAgICAgICAuLi5lbC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMsIG51bGwpKSxcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIGVuZElkLCBlbC5zb3VyY2VTcGFuKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogW10uY29uY2F0KC4uLm1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbikpXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgX25leHRQbGFjZWhvbGRlcklkOiBudW1iZXI7XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIGNvbnN0IHRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCksXG4gICAgICAgIGVxdWl2OiBwaC5zdGFydE5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRpc3A6IGA8JHtwaC50YWd9Lz5gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbdGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ1BjID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRywge1xuICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgZXF1aXZTdGFydDogcGguc3RhcnROYW1lLFxuICAgICAgZXF1aXZFbmQ6IHBoLmNsb3NlTmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkaXNwU3RhcnQ6IGA8JHtwaC50YWd9PmAsXG4gICAgICBkaXNwRW5kOiBgPC8ke3BoLnRhZ30+YFxuICAgIH0pO1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW10uY29uY2F0KC4uLnBoLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlOiB4bWwuTm9kZSkgPT4gdGFnUGMuY2hpbGRyZW4ucHVzaChub2RlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ1BjLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5UZXh0KFwiXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RhZ1BjXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7eyR7cGgudmFsdWV9fX1gXG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtjYXNlc319YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHRoaXMuX25leHRQbGFjZWhvbGRlcklkID0gMDtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgIGNhc2UgXCJiXCI6XG4gICAgY2FzZSBcImlcIjpcbiAgICBjYXNlIFwidVwiOlxuICAgICAgcmV0dXJuIFwiZm10XCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBjYXNlIFwiYVwiOlxuICAgICAgcmV0dXJuIFwibGlua1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJvdGhlclwiO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIFBsYWNlaG9sZGVyTWFwcGVyLCBTaW1wbGVQbGFjZWhvbGRlck1hcHBlciwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5cbmNvbnN0IF9NRVNTQUdFU19UQUcgPSBcIm1lc3NhZ2VidW5kbGVcIjtcbmNvbnN0IF9NRVNTQUdFX1RBRyA9IFwibXNnXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX0VYRU1QTEVfVEFHID0gXCJleFwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuXG5jb25zdCBfRE9DVFlQRSA9IGA8IUVMRU1FTlQgbWVzc2FnZWJ1bmRsZSAobXNnKSo+XG48IUFUVExJU1QgbWVzc2FnZWJ1bmRsZSBjbGFzcyBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIG1zZyAoI1BDREFUQXxwaHxzb3VyY2UpKj5cbjwhQVRUTElTVCBtc2cgaWQgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHNlcSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbmFtZSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgZGVzYyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbWVhbmluZyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgb2Jzb2xldGUgKG9ic29sZXRlKSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgeG1sOnNwYWNlIChkZWZhdWx0fHByZXNlcnZlKSBcImRlZmF1bHRcIj5cbjwhQVRUTElTVCBtc2cgaXNfaGlkZGVuIENEQVRBICNJTVBMSUVEPlxuXG48IUVMRU1FTlQgc291cmNlICgjUENEQVRBKT5cblxuPCFFTEVNRU5UIHBoICgjUENEQVRBfGV4KSo+XG48IUFUVExJU1QgcGggbmFtZSBDREFUQSAjUkVRVUlSRUQ+XG5cbjwhRUxFTUVOVCBleCAoI1BDREFUQSk+YDtcblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geG1iTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX01FU1NBR0VfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeG1iIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzOiB4bWwuTm9kZVtdID0gW10pOiBzdHJpbmcge1xuICBjb25zdCBleGFtcGxlVmlzaXRvciA9IG5ldyBFeGFtcGxlVmlzaXRvcigpO1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcbiAgY29uc3Qgcm9vdE5vZGUgPSBuZXcgeG1sLlRhZyhfTUVTU0FHRVNfVEFHKTtcblxuICBleGlzdGluZ05vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDIpLCBub2RlKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coZXhpc3RpbmdOb2Rlcyk7XG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtpZDogbWVzc2FnZS5pZH07XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgYXR0cnNbXCJkZXNjXCJdID0gbWVzc2FnZS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICBhdHRyc1tcIm1lYW5pbmdcIl0gPSBtZXNzYWdlLm1lYW5pbmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVGFnczogeG1sLlRhZ1tdID0gW107XG4gICAgbWVzc2FnZS5zb3VyY2VzLmZvckVhY2goKHNvdXJjZTogaTE4bi5NZXNzYWdlU3BhbikgPT4ge1xuICAgICAgc291cmNlVGFncy5wdXNoKFxuICAgICAgICBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIFtcbiAgICAgICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gXCIsXCIgKyBzb3VyY2UuZW5kTGluZSA6IFwiXCJ9YFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByb290Tm9kZS5jaGlsZHJlbi5wdXNoKFxuICAgICAgbmV3IHhtbC5DUigyKSxcbiAgICAgIG5ldyB4bWwuVGFnKF9NRVNTQUdFX1RBRywgYXR0cnMsIFsuLi5zb3VyY2VUYWdzLCAuLi52aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKV0pXG4gICAgKTtcbiAgfSk7XG5cbiAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKCkpO1xuXG4gIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICBuZXcgeG1sLkRlY2xhcmF0aW9uKHt2ZXJzaW9uOiBcIjEuMFwiLCBlbmNvZGluZzogXCJVVEYtOFwifSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIG5ldyB4bWwuRG9jdHlwZShfTUVTU0FHRVNfVEFHLCBfRE9DVFlQRSksXG4gICAgbmV3IHhtbC5DUigpLFxuICAgIGV4YW1wbGVWaXNpdG9yLmFkZERlZmF1bHRFeGFtcGxlcyhyb290Tm9kZSksXG4gICAgbmV3IHhtbC5DUigpXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iRGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBkaWdlc3QobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJNYXBwZXIobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogUGxhY2Vob2xkZXJNYXBwZXIge1xuICByZXR1cm4gbmV3IFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyKG1lc3NhZ2UsIHRvUHVibGljTmFtZSk7XG59XG5cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHN0YXJ0RXggPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGA8JHtwaC50YWd9PmApXSk7XG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5zdGFydE5hbWV9LCBbc3RhcnRFeF0pO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbc3RhcnRUYWdQaF07XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VFeCA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYDwvJHtwaC50YWd9PmApXSk7XG4gICAgY29uc3QgY2xvc2VUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5jbG9zZU5hbWV9LCBbY2xvc2VFeF0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChge3ske3BoLnZhbHVlfX19YCldKTtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnXSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW1xuICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICBgeyR7cGgudmFsdWUuZXhwcmVzc2lvbn0sICR7cGgudmFsdWUudHlwZX0sICR7T2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpXG4gICAgICAgICAgLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyBcIiB7Li4ufVwiKVxuICAgICAgICAgIC5qb2luKFwiIFwiKX19YFxuICAgICAgKVxuICAgIF0pO1xuICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLm5hbWV9LCBbZXhUYWddKV07XG4gIH1cblxuICBzZXJpYWxpemUobm9kZXM6IGkxOG4uTm9kZVtdKTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGVjaW1hbERpZ2VzdChtZXNzYWdlKTtcbn1cblxuLy8gVEMgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG5vbi1lbXB0eSBleGFtcGxlIG9uIHBsYWNlaG9sZGVyc1xuY2xhc3MgRXhhbXBsZVZpc2l0b3IgaW1wbGVtZW50cyB4bWwuSVZpc2l0b3Ige1xuICBhZGREZWZhdWx0RXhhbXBsZXMobm9kZTogeG1sLk5vZGUpOiB4bWwuTm9kZSB7XG4gICAgbm9kZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGFnKHRhZzogeG1sLlRhZyk6IHZvaWQge1xuICAgIGlmICh0YWcubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgaWYgKCF0YWcuY2hpbGRyZW4gfHwgdGFnLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBleFRleHQgPSBuZXcgeG1sLlRleHQodGFnLmF0dHJzW1wibmFtZVwiXSB8fCBcIi4uLlwiKTtcbiAgICAgICAgdGFnLmNoaWxkcmVuID0gW25ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtleFRleHRdKV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWcuY2hpbGRyZW4pIHtcbiAgICAgIHRhZy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnkge1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgZWxlbWVudC5hdHRycy5mb3JFYWNoKChhdHRyOiBtbC5BdHRyaWJ1dGUpID0+IHtcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhZyA9IG5ldyB4bWwuVGFnKGVsZW1lbnQubmFtZSwgYXR0cnMsIGVsZW1lbnQuY2hpbGRyZW4gYXMgYW55KTtcbiAgICByZXR1cm4gdGhpcy52aXNpdFRhZyh0YWcpO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IHhtbC5UZXh0KTogdm9pZCB7fVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogeG1sLkRlY2xhcmF0aW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiB4bWwuRG9jdHlwZSk6IHZvaWQge31cbn1cblxuLy8gWE1CL1hUQiBwbGFjZWhvbGRlcnMgY2FuIG9ubHkgY29udGFpbiBBLVosIDAtOSBhbmQgX1xuZXhwb3J0IGZ1bmN0aW9uIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnRlcm5hbE5hbWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV9dL2csIFwiX1wiKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuaW1wb3J0IHt4bWJNYXBwZXJ9IGZyb20gXCIuL3htYlwiO1xuXG5jb25zdCBfVFJBTlNMQVRJT05TX1RBRyA9IFwidHJhbnNsYXRpb25idW5kbGVcIjtcbmNvbnN0IF9UUkFOU0xBVElPTl9UQUcgPSBcInRyYW5zbGF0aW9uXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuXG5leHBvcnQgZnVuY3Rpb24geHRiTG9hZFRvSTE4bihjb250ZW50OiBzdHJpbmcpOiBJMThuTWVzc2FnZXNCeUlkIHtcbiAgLy8geHRiIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4dGJQYXJzZXIgPSBuZXcgWHRiUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzOiBwYXJzZUVycm9yc30gPSB4dGJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgaWYgKHBhcnNlRXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke3BhcnNlRXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIC8vIEJlY2F1c2Ugd2Ugc2hvdWxkIGJlIGFibGUgdG8gbG9hZCB4dGIgZmlsZXMgdGhhdCByZWx5IG9uIGZlYXR1cmVzIG5vdCBzdXBwb3J0ZWQgYnkgYW5ndWxhcixcbiAgLy8gd2UgbmVlZCB0byBkZWxheSB0aGUgY29udmVyc2lvbiBvZiBodG1sIHRvIGkxOG4gbm9kZXMgc28gdGhhdCBub24gYW5ndWxhciBtZXNzYWdlcyBhcmUgbm90XG4gIC8vIGNvbnZlcnRlZFxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3QgdmFsdWVGbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtpMThuTm9kZXMsIGVycm9yc30gPSBjb252ZXJ0ZXIuY29udmVydChtc2dJZFRvSHRtbFttc2dJZF0pO1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB4dGIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTE4bk5vZGVzO1xuICAgIH07XG4gICAgY3JlYXRlTGF6eVByb3BlcnR5KGkxOG5Ob2Rlc0J5TXNnSWQsIG1zZ0lkLCB2YWx1ZUZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGkxOG5Ob2Rlc0J5TXNnSWQ7XG59XG5cbmV4cG9ydCBjb25zdCB4dGJEaWdlc3QgPSBkaWdlc3Q7XG5cbmV4cG9ydCBjb25zdCB4dGJNYXBwZXIgPSB4bWJNYXBwZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhenlQcm9wZXJ0eShtZXNzYWdlczogYW55LCBpZDogc3RyaW5nLCB2YWx1ZUZuOiAoKSA9PiBhbnkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZuKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVzc2FnZXMsIGlkLCB7ZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWV9KTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogXyA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3Qgb3ZlcndyaXRlIGFuIFhUQiB0cmFuc2xhdGlvblwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4dGIgZmlsZVxuY2xhc3MgWHRiUGFyc2VyIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2J1bmRsZURlcHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKHh0Yjogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVuZGxlRGVwdGggPSAwO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICAvLyBXZSBjYW4gbm90IHBhcnNlIHRoZSBJQ1UgbWVzc2FnZXMgYXQgdGhpcyBwb2ludCBhcyBzb21lIG1lc3NhZ2VzIG1pZ2h0IG5vdCBvcmlnaW5hdGVcbiAgICAvLyBmcm9tIEFuZ3VsYXIgdGhhdCBjb3VsZCBub3QgYmUgbGV4J2QuXG4gICAgY29uc3QgeG1sID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZSh4dGIsIFwiXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHhtbC5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgeG1sLnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OU19UQUc6XG4gICAgICAgIHRoaXMuX2J1bmRsZURlcHRoKys7XG4gICAgICAgIGlmICh0aGlzLl9idW5kbGVEZXB0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1RSQU5TTEFUSU9OU19UQUd9PiBlbGVtZW50cyBjYW4gbm90IGJlIG5lc3RlZGApO1xuICAgICAgICB9XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aC0tO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVFJBTlNMQVRJT05fVEFHOlxuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTl9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQhLCBpbm5lclRleHRFbmQhKTtcbiAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IGlubmVyVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIFwiVW5leHBlY3RlZCB0YWdcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4dGIgc3ludGF4KSB0byBpMThuIG5vZGVzXG5jbGFzcyBYbWxUb0kxOG4gaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBJMThuRXJyb3JbXTtcblxuICBjb252ZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHhtbEljdSA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UobWVzc2FnZSwgXCJcIiwgdHJ1ZSk7XG4gICAgdGhpcy5fZXJyb3JzID0geG1sSWN1LmVycm9ycztcblxuICAgIGNvbnN0IGkxOG5Ob2RlcyA9XG4gICAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID4gMCB8fCB4bWxJY3Uucm9vdE5vZGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogbWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2Rlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaChjID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogbWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uKVxuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uUGxhY2Vob2xkZXIgfCBudWxsIHtcbiAgICBpZiAoZWwubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgY29uc3QgbmFtZUF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcIm5hbWVcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJuYW1lXCIgYXR0cmlidXRlYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgVW5leHBlY3RlZCB0YWdgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlckVycm9yIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBwdWJsaWMgaW5wdXQ6IHN0cmluZywgcHVibGljIGVyckxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMubWVzc2FnZSA9IGBQYXJzZXIgRXJyb3I6ICR7bWVzc2FnZX0gJHtlcnJMb2NhdGlvbn0gWyR7aW5wdXR9XSBpbiAke2N0eExvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogbnVtYmVyLCBwdWJsaWMgZW5kOiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3BhbjogUGFyc2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkFTVFwiO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHF1b3RlZCBleHByZXNzaW9uIG9mIHRoZSBmb3JtOlxuICpcbiAqIHF1b3RlID0gcHJlZml4IGA6YCB1bmludGVycHJldGVkRXhwcmVzc2lvblxuICogcHJlZml4ID0gaWRlbnRpZmllclxuICogdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBhcmJpdHJhcnkgc3RyaW5nXG4gKlxuICogQSBxdW90ZWQgZXhwcmVzc2lvbiBpcyBtZWFudCB0byBiZSBwcmUtcHJvY2Vzc2VkIGJ5IGFuIEFTVCB0cmFuc2Zvcm1lciB0aGF0XG4gKiBjb252ZXJ0cyBpdCBpbnRvIGFub3RoZXIgQVNUIHRoYXQgbm8gbG9uZ2VyIGNvbnRhaW5zIHF1b3RlZCBleHByZXNzaW9ucy5cbiAqIEl0IGlzIG1lYW50IHRvIGFsbG93IHRoaXJkLXBhcnR5IGRldmVsb3BlcnMgdG8gZXh0ZW5kIEFuZ3VsYXIgdGVtcGxhdGVcbiAqIGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFRoZSBgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25gIHBhcnQgb2YgdGhlIHF1b3RlIGlzXG4gKiB0aGVyZWZvcmUgbm90IGludGVycHJldGVkIGJ5IHRoZSBBbmd1bGFyJ3Mgb3duIGV4cHJlc3Npb24gcGFyc2VyLlxuICovXG5leHBvcnQgY2xhc3MgUXVvdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBwcmVmaXg6IHN0cmluZywgcHVibGljIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uOiBzdHJpbmcsIHB1YmxpYyBsb2NhdGlvbjogYW55KSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRRdW90ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIlF1b3RlXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5RXhwciBleHRlbmRzIEFTVCB7XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltcGxpY2l0UmVjZWl2ZXIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEltcGxpY2l0UmVjZWl2ZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNdWx0aXBsZSBleHByZXNzaW9ucyBzZXBhcmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFpbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q2hhaW4odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgY29uZGl0aW9uOiBBU1QsIHB1YmxpYyB0cnVlRXhwOiBBU1QsIHB1YmxpYyBmYWxzZUV4cDogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDb25kaXRpb25hbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVdyaXRlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5V3JpdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVQcm9wZXJ0eVJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTYWZlUHJvcGVydHlSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXllZFJlYWQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXllZFJlYWQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtleWVkV3JpdGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvYmo6IEFTVCwgcHVibGljIGtleTogQVNULCBwdWJsaWMgdmFsdWU6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZWRXcml0ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmluZGluZ1BpcGUgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHA6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQaXBlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsUHJpbWl0aXZlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbFByaW1pdGl2ZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbEFycmF5IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsQXJyYXkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXRlcmFsTWFwS2V5IHtcbiAga2V5OiBzdHJpbmc7XG4gIHF1b3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxNYXAgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBrZXlzOiBMaXRlcmFsTWFwS2V5W10sIHB1YmxpYyB2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRMaXRlcmFsTWFwKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgc3RyaW5nczogYW55W10sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEludGVycG9sYXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmFyeSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nLCBwdWJsaWMgbGVmdDogQVNULCBwdWJsaWMgcmlnaHQ6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QmluYXJ5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcmVmaXhOb3QgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByZWZpeE5vdCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9uTnVsbEFzc2VydCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb246IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Tm9uTnVsbEFzc2VydCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kQ2FsbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FmZU1ldGhvZENhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFNhZmVNZXRob2RDYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkNhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyB0YXJnZXQ6IEFTVCB8IG51bGwsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RnVuY3Rpb25DYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBU1RXaXRoU291cmNlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFzdDogQVNULCBwdWJsaWMgc291cmNlOiBzdHJpbmcgfCBudWxsLCBwdWJsaWMgbG9jYXRpb246IHN0cmluZywgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge1xuICAgIHN1cGVyKG5ldyBQYXJzZVNwYW4oMCwgc291cmNlID09IG51bGwgPyAwIDogc291cmNlLmxlbmd0aCkpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLnNvdXJjZX0gaW4gJHt0aGlzLmxvY2F0aW9ufWA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQmluZGluZyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNwYW4sXG4gICAgcHVibGljIGtleTogc3RyaW5nLFxuICAgIHB1YmxpYyBrZXlJc1ZhcjogYm9vbGVhbixcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBleHByZXNzaW9uOiBBU1RXaXRoU291cmNlXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Pyhhc3Q6IEFTVCwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZUFzdFZpc2l0b3IgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmxlZnQudmlzaXQodGhpcyk7XG4gICAgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpO1xuICAgIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC50YXJnZXQhLnZpc2l0KHRoaXMpO1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5vYmoudmlzaXQodGhpcyk7XG4gICAgYXN0LmtleS52aXNpdCh0aGlzKTtcbiAgICBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MsIGNvbnRleHQpO1xuICB9XG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIGFzdC52YWx1ZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEFsbChhc3RzOiBBU1RbXSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3RzLmZvckVhY2goYXN0ID0+IGFzdC52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRRdW90ZShhc3Q6IFF1b3RlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3RUcmFuc2Zvcm1lciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBhc3Q7XG4gIH1cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgSW50ZXJwb2xhdGlvbihhc3Quc3BhbiwgYXN0LnN0cmluZ3MsIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZShhc3Quc3BhbiwgYXN0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUpO1xuICB9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IE1ldGhvZENhbGwoYXN0LnNwYW4sIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFNhZmVNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ2FsbChhc3Quc3BhbiwgYXN0LnRhcmdldCEudmlzaXQodGhpcyksIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTGl0ZXJhbEFycmF5KGFzdC5zcGFuLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxNYXAoYXN0LnNwYW4sIGFzdC5rZXlzLCB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQmluYXJ5KGFzdC5zcGFuLCBhc3Qub3BlcmF0aW9uLCBhc3QubGVmdC52aXNpdCh0aGlzKSwgYXN0LnJpZ2h0LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJlZml4Tm90KGFzdC5zcGFuLCBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgTm9uTnVsbEFzc2VydChhc3Quc3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWwoYXN0LnNwYW4sIGFzdC5jb25kaXRpb24udmlzaXQodGhpcyksIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpLCBhc3QuZmFsc2VFeHAudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBCaW5kaW5nUGlwZShhc3Quc3BhbiwgYXN0LmV4cC52aXNpdCh0aGlzKSwgYXN0Lm5hbWUsIHRoaXMudmlzaXRBbGwoYXN0LmFyZ3MpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRSZWFkKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBLZXllZFdyaXRlKGFzdC5zcGFuLCBhc3Qub2JqLnZpc2l0KHRoaXMpLCBhc3Qua2V5LnZpc2l0KHRoaXMpLCBhc3QudmFsdWUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEFycmF5KGFzdHMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHJlc1tpXSA9IGFzdHNbaV0udmlzaXQodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBDaGFpbihhc3Quc3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFF1b3RlKGFzdC5zcGFuLCBhc3QucHJlZml4LCBhc3QudW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGFzdC5sb2NhdGlvbik7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICBDaGFyYWN0ZXIsXG4gIElkZW50aWZpZXIsXG4gIEtleXdvcmQsXG4gIFN0cmluZyxcbiAgT3BlcmF0b3IsXG4gIE51bWJlcixcbiAgRXJyb3Jcbn1cblxuY29uc3QgS0VZV09SRFMgPSBbXCJ2YXJcIiwgXCJsZXRcIiwgXCJhc1wiLCBcIm51bGxcIiwgXCJ1bmRlZmluZWRcIiwgXCJ0cnVlXCIsIFwiZmFsc2VcIiwgXCJpZlwiLCBcImVsc2VcIiwgXCJ0aGlzXCJdO1xuXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xuICB0b2tlbml6ZSh0ZXh0OiBzdHJpbmcpOiBUb2tlbltdIHtcbiAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIodGV4dCk7XG4gICAgY29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG4gICAgbGV0IHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB3aGlsZSAodG9rZW4gIT0gbnVsbCkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSBzY2FubmVyLnNjYW5Ub2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgbnVtVmFsdWU6IG51bWJlciwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcpIHt9XG5cbiAgaXNDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLkNoYXJhY3RlciAmJiB0aGlzLm51bVZhbHVlID09PSBjb2RlO1xuICB9XG5cbiAgaXNOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlcjtcbiAgfVxuXG4gIGlzU3RyaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5TdHJpbmc7XG4gIH1cblxuICBpc09wZXJhdG9yKG9wZXJhdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gb3BlcmF0ZXI7XG4gIH1cblxuICBpc0lkZW50aWZpZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLklkZW50aWZpZXI7XG4gIH1cblxuICBpc0tleXdvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQ7XG4gIH1cblxuICBpc0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJsZXRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZEFzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwiYXNcIjtcbiAgfVxuXG4gIGlzS2V5d29yZE51bGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJudWxsXCI7XG4gIH1cblxuICBpc0tleXdvcmRVbmRlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgfVxuXG4gIGlzS2V5d29yZFRydWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cblxuICBpc0tleXdvcmRGYWxzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImZhbHNlXCI7XG4gIH1cblxuICBpc0tleXdvcmRUaGlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidGhpc1wiO1xuICB9XG5cbiAgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuRXJyb3I7XG4gIH1cblxuICB0b051bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIgPyB0aGlzLm51bVZhbHVlIDogLTE7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBUb2tlblR5cGUuQ2hhcmFjdGVyOlxuICAgICAgY2FzZSBUb2tlblR5cGUuSWRlbnRpZmllcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLktleXdvcmQ6XG4gICAgICBjYXNlIFRva2VuVHlwZS5PcGVyYXRvcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLlN0cmluZzpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkVycm9yOlxuICAgICAgICByZXR1cm4gdGhpcy5zdHJWYWx1ZTtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLk51bWJlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdDaGFyYWN0ZXJUb2tlbihpbmRleDogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5DaGFyYWN0ZXIsIGNvZGUsIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpO1xufVxuXG5mdW5jdGlvbiBuZXdJZGVudGlmaWVyVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuSWRlbnRpZmllciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld0tleXdvcmRUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5LZXl3b3JkLCAwLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gbmV3T3BlcmF0b3JUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5PcGVyYXRvciwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld1N0cmluZ1Rva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLlN0cmluZywgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld051bWJlclRva2VuKGluZGV4OiBudW1iZXIsIG46IG51bWJlcik6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLk51bWJlciwgbiwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIG5ld0Vycm9yVG9rZW4oaW5kZXg6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuRXJyb3IsIDAsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgY29uc3QgRU9GOiBUb2tlbiA9IG5ldyBUb2tlbigtMSwgVG9rZW5UeXBlLkNoYXJhY3RlciwgMCwgXCJcIik7XG5cbmNsYXNzIFNjYW5uZXIge1xuICBsZW5ndGg6IG51bWJlcjtcbiAgcGVlayA9IDA7XG4gIGluZGV4ID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5wZWVrID0gKyt0aGlzLmluZGV4ID49IHRoaXMubGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNjYW5Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dDtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICBsZXQgcGVlayA9IHRoaXMucGVlaztcbiAgICBsZXQgaW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgLy8gU2tpcCB3aGl0ZXNwYWNlLlxuICAgIHdoaWxlIChwZWVrIDw9IGNoYXJzLiRTUEFDRSkge1xuICAgICAgaWYgKCsraW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIHBlZWsgPSBjaGFycy4kRU9GO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZWsgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBlZWsgPSBwZWVrO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBpZGVudGlmaWVycyBhbmQgbnVtYmVycy5cbiAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQocGVlaykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5JZGVudGlmaWVyKCk7XG4gICAgfVxuICAgIGlmIChjaGFycy5pc0RpZ2l0KHBlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuTnVtYmVyKGluZGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gaW5kZXg7XG4gICAgc3dpdGNoIChwZWVrKSB7XG4gICAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICByZXR1cm4gY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspID8gdGhpcy5zY2FuTnVtYmVyKHN0YXJ0KSA6IG5ld0NoYXJhY3RlclRva2VuKHN0YXJ0LCBjaGFycy4kUEVSSU9EKTtcbiAgICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDRTpcbiAgICAgIGNhc2UgY2hhcnMuJExCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kUkJSQUNLRVQ6XG4gICAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ2hhcmFjdGVyKHN0YXJ0LCBwZWVrKTtcbiAgICAgIGNhc2UgY2hhcnMuJFNROlxuICAgICAgY2FzZSBjaGFycy4kRFE6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5TdHJpbmcoKTtcbiAgICAgIGNhc2UgY2hhcnMuJEhBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQTFVTOlxuICAgICAgY2FzZSBjaGFycy4kTUlOVVM6XG4gICAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgICAgY2FzZSBjaGFycy4kU0xBU0g6XG4gICAgICBjYXNlIGNoYXJzLiRQRVJDRU5UOlxuICAgICAgY2FzZSBjaGFycy4kQ0FSRVQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5PcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSk7XG4gICAgICBjYXNlIGNoYXJzLiRRVUVTVElPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCI/XCIsIGNoYXJzLiRQRVJJT0QsIFwiLlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJExUOlxuICAgICAgY2FzZSBjaGFycy4kR1Q6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlayksIGNoYXJzLiRFUSwgXCI9XCIpO1xuICAgICAgY2FzZSBjaGFycy4kQkFORzpcbiAgICAgIGNhc2UgY2hhcnMuJEVROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsIFwiPVwiLCBjaGFycy4kRVEsIFwiPVwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEFNUEVSU0FORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCImXCIsIGNoYXJzLiRBTVBFUlNBTkQsIFwiJlwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBUjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgXCJ8XCIsIGNoYXJzLiRCQVIsIFwifFwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJE5CU1A6XG4gICAgICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Ub2tlbigpO1xuICAgIH1cblxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBbJHtTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspfV1gLCAwKTtcbiAgfVxuXG4gIHNjYW5DaGFyYWN0ZXIoc3RhcnQ6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgY29kZSk7XG4gIH1cblxuICBzY2FuT3BlcmF0b3Ioc3RhcnQ6IG51bWJlciwgc3RyOiBzdHJpbmcpOiBUb2tlbiB7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG5ld09wZXJhdG9yVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICAvKipcbiAgICogVG9rZW5pemUgYSAyLzMgY2hhciBsb25nIG9wZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydCBzdGFydCBpbmRleCBpbiB0aGUgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gb25lIGZpcnN0IHN5bWJvbCAoYWx3YXlzIHBhcnQgb2YgdGhlIG9wZXJhdG9yKVxuICAgKiBAcGFyYW0gdHdvQ29kZSBjb2RlIHBvaW50IGZvciB0aGUgc2Vjb25kIHN5bWJvbFxuICAgKiBAcGFyYW0gdHdvIHNlY29uZCBzeW1ib2wgKHBhcnQgb2YgdGhlIG9wZXJhdG9yIHdoZW4gdGhlIHNlY29uZCBjb2RlIHBvaW50IG1hdGNoZXMpXG4gICAqIEBwYXJhbSB0aHJlZUNvZGUgY29kZSBwb2ludCBmb3IgdGhlIHRoaXJkIHN5bWJvbFxuICAgKiBAcGFyYW0gdGhyZWUgdGhpcmQgc3ltYm9sIChwYXJ0IG9mIHRoZSBvcGVyYXRvciB3aGVuIHByb3ZpZGVkIGFuZCBtYXRjaGVzIHNvdXJjZSBleHByZXNzaW9uKVxuICAgKi9cbiAgc2NhbkNvbXBsZXhPcGVyYXRvcihcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIG9uZTogc3RyaW5nLFxuICAgIHR3b0NvZGU6IG51bWJlcixcbiAgICB0d286IHN0cmluZyxcbiAgICB0aHJlZUNvZGU/OiBudW1iZXIsXG4gICAgdGhyZWU/OiBzdHJpbmdcbiAgKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIGxldCBzdHI6IHN0cmluZyA9IG9uZTtcbiAgICBpZiAodGhpcy5wZWVrID09PSB0d29Db2RlKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHN0ciArPSB0d287XG4gICAgfVxuICAgIGlmICh0aHJlZUNvZGUgIT0gbnVsbCAmJiB0aGlzLnBlZWsgPT09IHRocmVlQ29kZSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBzdHIgKz0gdGhyZWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdPcGVyYXRvclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgc2NhbklkZW50aWZpZXIoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHdoaWxlIChpc0lkZW50aWZpZXJQYXJ0KHRoaXMucGVlaykpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gS0VZV09SRFMuaW5kZXhPZihzdHIpID4gLTEgPyBuZXdLZXl3b3JkVG9rZW4oc3RhcnQsIHN0cikgOiBuZXdJZGVudGlmaWVyVG9rZW4oc3RhcnQsIHN0cik7XG4gIH1cblxuICBzY2FuTnVtYmVyKHN0YXJ0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgbGV0IHNpbXBsZTogYm9vbGVhbiA9IHRoaXMuaW5kZXggPT09IHN0YXJ0O1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIGluaXRpYWwgZGlnaXQuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHtcbiAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kUEVSSU9EKSB7XG4gICAgICAgIHNpbXBsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpc0V4cG9uZW50U3RhcnQodGhpcy5wZWVrKSkge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgaWYgKGlzRXhwb25lbnRTaWduKHRoaXMucGVlaykpIHtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKFwiSW52YWxpZCBleHBvbmVudFwiLCAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgc2ltcGxlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gc2ltcGxlID8gcGFyc2VJbnRBdXRvUmFkaXgoc3RyKSA6IHBhcnNlRmxvYXQoc3RyKTtcbiAgICByZXR1cm4gbmV3TnVtYmVyVG9rZW4oc3RhcnQsIHZhbHVlKTtcbiAgfVxuXG4gIHNjYW5TdHJpbmcoKTogVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0OiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHF1b3RlOiBudW1iZXIgPSB0aGlzLnBlZWs7XG4gICAgdGhpcy5hZHZhbmNlKCk7IC8vIFNraXAgaW5pdGlhbCBxdW90ZS5cblxuICAgIGxldCBidWZmZXIgPSBcIlwiO1xuICAgIGxldCBtYXJrZXI6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMuaW5wdXQ7XG5cbiAgICB3aGlsZSAodGhpcy5wZWVrICE9PSBxdW90ZSkge1xuICAgICAgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEJBQ0tTTEFTSCkge1xuICAgICAgICBidWZmZXIgKz0gaW5wdXQuc3Vic3RyaW5nKG1hcmtlciwgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICBsZXQgdW5lc2NhcGVkQ29kZTogbnVtYmVyO1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBUUzIuMS1pbnRyb2R1Y2VkIHR5cGUgc3RyaWN0bmVzc1xuICAgICAgICB0aGlzLnBlZWsgPSB0aGlzLnBlZWs7XG4gICAgICAgIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiR1KSB7XG4gICAgICAgICAgLy8gNCBjaGFyYWN0ZXIgaGV4IGNvZGUgZm9yIHVuaWNvZGUgY2hhcmFjdGVyLlxuICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgaWYgKC9eWzAtOWEtZl0rJC9pLnRlc3QoaGV4KSkge1xuICAgICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihgSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUke2hleH1dYCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHVuZXNjYXBlKHRoaXMucGVlayk7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodW5lc2NhcGVkQ29kZSk7XG4gICAgICAgIG1hcmtlciA9IHRoaXMuaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJEVPRikge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxhc3Q6IHN0cmluZyA9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIHRlcm1pbmF0aW5nIHF1b3RlLlxuXG4gICAgcmV0dXJuIG5ld1N0cmluZ1Rva2VuKHN0YXJ0LCBidWZmZXIgKyBsYXN0KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIG5ld0Vycm9yVG9rZW4ocG9zaXRpb24sIGBMZXhlciBFcnJvcjogJHttZXNzYWdlfSBhdCBjb2x1bW4gJHtwb3NpdGlvbn0gaW4gZXhwcmVzc2lvbiBbJHt0aGlzLmlucHV0fV1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAoY2hhcnMuJGEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiR6KSB8fFxuICAgIChjaGFycy4kQSA8PSBjb2RlICYmIGNvZGUgPD0gY2hhcnMuJFopIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJF8gfHxcbiAgICBjb2RlID09PSBjaGFycy4kJFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIoaW5wdXQpO1xuICBpZiAoIWlzSWRlbnRpZmllclN0YXJ0KHNjYW5uZXIucGVlaykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2Nhbm5lci5hZHZhbmNlKCk7XG4gIHdoaWxlIChzY2FubmVyLnBlZWsgIT09IGNoYXJzLiRFT0YpIHtcbiAgICBpZiAoIWlzSWRlbnRpZmllclBhcnQoc2Nhbm5lci5wZWVrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzY2FubmVyLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyUGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgY2hhcnMuaXNEaWdpdChjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kXyB8fCBjb2RlID09PSBjaGFycy4kJDtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudFN0YXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJGUgfHwgY29kZSA9PT0gY2hhcnMuJEU7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRTaWduKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJE1JTlVTIHx8IGNvZGUgPT09IGNoYXJzLiRQTFVTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdW90ZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTUSB8fCBjb2RlID09PSBjaGFycy4kRFEgfHwgY29kZSA9PT0gY2hhcnMuJEJUO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRuOlxuICAgICAgcmV0dXJuIGNoYXJzLiRMRjtcbiAgICBjYXNlIGNoYXJzLiRmOlxuICAgICAgcmV0dXJuIGNoYXJzLiRGRjtcbiAgICBjYXNlIGNoYXJzLiRyOlxuICAgICAgcmV0dXJuIGNoYXJzLiRDUjtcbiAgICBjYXNlIGNoYXJzLiR0OlxuICAgICAgcmV0dXJuIGNoYXJzLiRUQUI7XG4gICAgY2FzZSBjaGFycy4kdjpcbiAgICAgIHJldHVybiBjaGFycy4kVlRBQjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNvZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRBdXRvUmFkaXgodGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZUludCh0ZXh0LCAxMCk7XG4gIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyIGxpdGVyYWwgd2hlbiBwYXJzaW5nIFwiICsgdGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4uL2FzdC9jaGFyc1wiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge2VzY2FwZVJlZ0V4cH0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5cbmltcG9ydCB7XG4gIEFTVCxcbiAgQVNUV2l0aFNvdXJjZSxcbiAgQXN0VmlzaXRvcixcbiAgQmluYXJ5LFxuICBCaW5kaW5nUGlwZSxcbiAgQ2hhaW4sXG4gIENvbmRpdGlvbmFsLFxuICBFbXB0eUV4cHIsXG4gIEZ1bmN0aW9uQ2FsbCxcbiAgSW1wbGljaXRSZWNlaXZlcixcbiAgSW50ZXJwb2xhdGlvbixcbiAgS2V5ZWRSZWFkLFxuICBLZXllZFdyaXRlLFxuICBMaXRlcmFsQXJyYXksXG4gIExpdGVyYWxNYXAsXG4gIExpdGVyYWxNYXBLZXksXG4gIExpdGVyYWxQcmltaXRpdmUsXG4gIE1ldGhvZENhbGwsXG4gIE5vbk51bGxBc3NlcnQsXG4gIFBhcnNlU3BhbixcbiAgUGFyc2VyRXJyb3IsXG4gIFByZWZpeE5vdCxcbiAgUHJvcGVydHlSZWFkLFxuICBQcm9wZXJ0eVdyaXRlLFxuICBRdW90ZSxcbiAgU2FmZU1ldGhvZENhbGwsXG4gIFNhZmVQcm9wZXJ0eVJlYWQsXG4gIFRlbXBsYXRlQmluZGluZ1xufSBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7RU9GLCBMZXhlciwgVG9rZW4sIFRva2VuVHlwZSwgaXNJZGVudGlmaWVyLCBpc1F1b3RlfSBmcm9tIFwiLi9sZXhlclwiO1xuXG5leHBvcnQgY2xhc3MgU3BsaXRJbnRlcnBvbGF0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0cmluZ3M6IHN0cmluZ1tdLCBwdWJsaWMgZXhwcmVzc2lvbnM6IHN0cmluZ1tdLCBwdWJsaWMgb2Zmc2V0czogbnVtYmVyW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZUJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSwgcHVibGljIHdhcm5pbmdzOiBzdHJpbmdbXSwgcHVibGljIGVycm9yczogUGFyc2VyRXJyb3JbXSkge31cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IFJlZ0V4cCB7XG4gIGNvbnN0IHBhdHRlcm4gPSBlc2NhcGVSZWdFeHAoY29uZmlnLnN0YXJ0KSArIFwiKFtcXFxcc1xcXFxTXSo/KVwiICsgZXNjYXBlUmVnRXhwKGNvbmZpZy5lbmQpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBcImdcIik7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIGVycm9yczogUGFyc2VyRXJyb3JbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xleGVyOiBMZXhlcikge31cblxuICBwYXJzZUFjdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBhbnksXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgdGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpO1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpKTtcbiAgICBjb25zdCBhc3QgPSBuZXcgUGFyc2VBU1QoXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdG9rZW5zLFxuICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgdHJ1ZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwYXJzZUJpbmRpbmcoXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuX3BhcnNlQmluZGluZ0FzdChpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcGFyc2VTaW1wbGVCaW5kaW5nKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBlcnJvcnMgPSBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlci5jaGVjayhhc3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoYEhvc3QgYmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluICR7ZXJyb3JzLmpvaW4oXCIgXCIpfWAsIGlucHV0LCBsb2NhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwb3J0RXJyb3IobWVzc2FnZTogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBlcnJMb2NhdGlvbjogc3RyaW5nLCBjdHhMb2NhdGlvbj86IGFueSkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIGlucHV0LCBlcnJMb2NhdGlvbiwgY3R4TG9jYXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlQmluZGluZ0FzdChpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogc3RyaW5nLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogQVNUIHtcbiAgICAvLyBRdW90ZXMgZXhwcmVzc2lvbnMgdXNlIDNyZC1wYXJ0eSBleHByZXNzaW9uIGxhbmd1YWdlLiBXZSBkb24ndCB3YW50IHRvIHVzZVxuICAgIC8vIG91ciBsZXhlciBvciBwYXJzZXIgZm9yIHRoYXQsIHNvIHdlIGNoZWNrIGZvciB0aGF0IGFoZWFkIG9mIHRpbWUuXG4gICAgY29uc3QgcXVvdGUgPSB0aGlzLl9wYXJzZVF1b3RlKGlucHV0LCBsb2NhdGlvbik7XG5cbiAgICBpZiAocXVvdGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHF1b3RlO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUFTVChcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0b2tlbnMsXG4gICAgICBzb3VyY2VUb0xleC5sZW5ndGgsXG4gICAgICBmYWxzZSxcbiAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoXG4gICAgKS5wYXJzZUNoYWluKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZVF1b3RlKGlucHV0OiBzdHJpbmcgfCBudWxsLCBsb2NhdGlvbjogYW55KTogQVNUIHwgbnVsbCB7XG4gICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4U2VwYXJhdG9ySW5kZXggPSBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbiAgICBpZiAocHJlZml4U2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4ID0gaW5wdXQuc3Vic3RyaW5nKDAsIHByZWZpeFNlcGFyYXRvckluZGV4KS50cmltKCk7XG4gICAgaWYgKCFpc0lkZW50aWZpZXIocHJlZml4KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uID0gaW5wdXQuc3Vic3RyaW5nKHByZWZpeFNlcGFyYXRvckluZGV4ICsgMSk7XG4gICAgcmV0dXJuIG5ldyBRdW90ZShuZXcgUGFyc2VTcGFuKDAsIGlucHV0Lmxlbmd0aCksIHByZWZpeCwgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGxvY2F0aW9uKTtcbiAgfVxuXG4gIHBhcnNlVGVtcGxhdGVCaW5kaW5ncyhwcmVmaXhUb2tlbjogc3RyaW5nIHwgbnVsbCwgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSk6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShpbnB1dCk7XG4gICAgaWYgKHByZWZpeFRva2VuKSB7XG4gICAgICAvLyBQcmVmaXggdGhlIHRva2VucyB3aXRoIHRoZSB0b2tlbnMgZnJvbSBwcmVmaXhUb2tlbiBidXQgaGF2ZSB0aGVtIHRha2Ugbm8gc3BhY2UgKDAgaW5kZXgpLlxuICAgICAgY29uc3QgcHJlZml4VG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUocHJlZml4VG9rZW4pLm1hcCh0ID0+IHtcbiAgICAgICAgdC5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMudW5zaGlmdCguLi5wcmVmaXhUb2tlbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBhcnNlQVNUKGlucHV0LCBsb2NhdGlvbiwgdG9rZW5zLCBpbnB1dC5sZW5ndGgsIGZhbHNlLCB0aGlzLmVycm9ycywgMCkucGFyc2VUZW1wbGF0ZUJpbmRpbmdzKCk7XG4gIH1cblxuICBwYXJzZUludGVycG9sYXRpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2UgfCBudWxsIHtcbiAgICBjb25zdCBzcGxpdCA9IHRoaXMuc3BsaXRJbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgaWYgKHNwbGl0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uczogQVNUW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQuZXhwcmVzc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25UZXh0ID0gc3BsaXQuZXhwcmVzc2lvbnNbaV07XG4gICAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoZXhwcmVzc2lvblRleHQpO1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoc291cmNlVG9MZXgpO1xuICAgICAgY29uc3QgYXN0ID0gbmV3IFBhcnNlQVNUKFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGhpcy5lcnJvcnMsXG4gICAgICAgIHNwbGl0Lm9mZnNldHNbaV0gKyAoZXhwcmVzc2lvblRleHQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoKVxuICAgICAgKS5wYXJzZUNoYWluKCk7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKGFzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKFxuICAgICAgbmV3IEludGVycG9sYXRpb24obmV3IFBhcnNlU3BhbigwLCBpbnB1dCA9PT0gbnVsbCA/IDAgOiBpbnB1dC5sZW5ndGgpLCBzcGxpdC5zdHJpbmdzLCBleHByZXNzaW9ucyksXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhpcy5lcnJvcnNcbiAgICApO1xuICB9XG5cbiAgc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBTcGxpdEludGVycG9sYXRpb24gfCBudWxsIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb2Zmc2V0czogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0OiBzdHJpbmcgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBmaXhlZCBzdHJpbmdcbiAgICAgICAgc3RyaW5ncy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXQgKz0gcGFydC5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHBhcnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2Zmc2V0ICs9IGludGVycG9sYXRpb25Db25maWcuc3RhcnQubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoICsgaW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgXCJCbGFuayBleHByZXNzaW9ucyBhcmUgbm90IGFsbG93ZWQgaW4gaW50ZXJwb2xhdGVkIHN0cmluZ3NcIixcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgaSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgICBsb2NhdGlvblxuICAgICAgICApO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKFwiJGltcGxpY3RcIik7XG4gICAgICAgIG9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFNwbGl0SW50ZXJwb2xhdGlvbihzdHJpbmdzLCBleHByZXNzaW9ucywgb2Zmc2V0cyk7XG4gIH1cblxuICB3cmFwTGl0ZXJhbFByaW1pdGl2ZShpbnB1dDogc3RyaW5nIHwgbnVsbCwgbG9jYXRpb246IGFueSk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT09IG51bGwgPyAwIDogaW5wdXQubGVuZ3RoKSwgaW5wdXQpLFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuZXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0cmlwQ29tbWVudHMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaSA9IHRoaXMuX2NvbW1lbnRTdGFydChpbnB1dCk7XG4gICAgcmV0dXJuIGkgIT0gbnVsbCA/IGlucHV0LnN1YnN0cmluZygwLCBpKS50cmltKCkgOiBpbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1lbnRTdGFydChpbnB1dDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgbGV0IG91dGVyUXVvdGU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICAgIGNvbnN0IG5leHRDaGFyID0gaW5wdXQuY2hhckNvZGVBdChpICsgMSk7XG5cbiAgICAgIGlmIChjaGFyID09PSBjaGFycy4kU0xBU0ggJiYgbmV4dENoYXIgPT09IGNoYXJzLiRTTEFTSCAmJiBvdXRlclF1b3RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3V0ZXJRdW90ZSA9PT0gY2hhcikge1xuICAgICAgICBvdXRlclF1b3RlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAob3V0ZXJRdW90ZSA9PT0gbnVsbCAmJiBpc1F1b3RlKGNoYXIpKSB7XG4gICAgICAgIG91dGVyUXVvdGUgPSBjaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnksIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICBjb25zdCByZWdleHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgYEdvdCBpbnRlcnBvbGF0aW9uICgke2ludGVycG9sYXRpb25Db25maWcuc3RhcnR9JHtpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZH0pIHdoZXJlIGV4cHJlc3Npb24gd2FzIGV4cGVjdGVkYCxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGBhdCBjb2x1bW4gJHt0aGlzLl9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKHBhcnRzLCAxLCBpbnRlcnBvbGF0aW9uQ29uZmlnKX0gaW5gLFxuICAgICAgICBsb2NhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKFxuICAgIHBhcnRzOiBzdHJpbmdbXSxcbiAgICBwYXJ0SW5FcnJJZHg6IG51bWJlcixcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnXG4gICk6IG51bWJlciB7XG4gICAgbGV0IGVyckxvY2F0aW9uID0gXCJcIjtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhcnRJbkVycklkeDsgaisrKSB7XG4gICAgICBlcnJMb2NhdGlvbiArPSBqICUgMiA9PT0gMCA/IHBhcnRzW2pdIDogYCR7aW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydH0ke3BhcnRzW2pdfSR7aW50ZXJwb2xhdGlvbkNvbmZpZy5lbmR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTG9jYXRpb24ubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZUFTVCB7XG4gIHByaXZhdGUgcnBhcmVuc0V4cGVjdGVkID0gMDtcbiAgcHJpdmF0ZSByYnJhY2tldHNFeHBlY3RlZCA9IDA7XG4gIHByaXZhdGUgcmJyYWNlc0V4cGVjdGVkID0gMDtcblxuICBpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlucHV0OiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2F0aW9uOiBhbnksXG4gICAgcHVibGljIHRva2VuczogVG9rZW5bXSxcbiAgICBwdWJsaWMgaW5wdXRMZW5ndGg6IG51bWJlcixcbiAgICBwdWJsaWMgcGFyc2VBY3Rpb246IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10sXG4gICAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlclxuICApIHt9XG5cbiAgcGVlayhvZmZzZXQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBjb25zdCBpID0gdGhpcy5pbmRleCArIG9mZnNldDtcbiAgICByZXR1cm4gaSA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMudG9rZW5zW2ldIDogRU9GO1xuICB9XG5cbiAgZ2V0IG5leHQoKTogVG9rZW4ge1xuICAgIHJldHVybiB0aGlzLnBlZWsoMCk7XG4gIH1cblxuICBnZXQgaW5wdXRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoID8gdGhpcy5uZXh0LmluZGV4ICsgdGhpcy5vZmZzZXQgOiB0aGlzLmlucHV0TGVuZ3RoICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBzcGFuKHN0YXJ0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlU3BhbihzdGFydCwgdGhpcy5pbnB1dEluZGV4KTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuICB9XG5cbiAgb3B0aW9uYWxDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3Rlcihjb2RlKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBlZWtLZXl3b3JkTGV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHQuaXNLZXl3b3JkTGV0KCk7XG4gIH1cbiAgcGVla0tleXdvcmRBcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0LmlzS2V5d29yZEFzKCk7XG4gIH1cblxuICBleHBlY3RDaGFyYWN0ZXIoY29kZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCAke1N0cmluZy5mcm9tQ2hhckNvZGUoY29kZSl9YCk7XG4gIH1cblxuICBvcHRpb25hbE9wZXJhdG9yKG9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzT3BlcmF0b3Iob3ApKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwZWN0T3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZykge1xuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3Iob3BlcmF0b3IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3IgJHtvcGVyYXRvcn1gKTtcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke259LCBleHBlY3RlZCBpZGVudGlmaWVyIG9yIGtleXdvcmRgKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbi50b1N0cmluZygpIGFzIHN0cmluZztcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IG4gPSB0aGlzLm5leHQ7XG4gICAgaWYgKCFuLmlzSWRlbnRpZmllcigpICYmICFuLmlzS2V5d29yZCgpICYmICFuLmlzU3RyaW5nKCkpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHtufSwgZXhwZWN0ZWQgaWRlbnRpZmllciwga2V5d29yZCwgb3Igc3RyaW5nYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBwYXJzZUNoYWluKCk6IEFTVCB7XG4gICAgY29uc3QgZXhwcnM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4cHIgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgZXhwcnMucHVzaChleHByKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcIkJpbmRpbmcgZXhwcmVzc2lvbiBjYW5ub3QgY29udGFpbiBjaGFpbmVkIGV4cHJlc3Npb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHt9IC8vIHJlYWQgYWxsIHNlbWljb2xvbnNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICcke3RoaXMubmV4dH0nYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleHBycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gZXhwcnNbMF07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ2hhaW4odGhpcy5zcGFuKHN0YXJ0KSwgZXhwcnMpO1xuICB9XG5cbiAgcGFyc2VQaXBlKCk6IEFTVCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInxcIikpIHtcbiAgICAgIGlmICh0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXCJDYW5ub3QgaGF2ZSBhIHBpcGUgaW4gYW4gYWN0aW9uIGV4cHJlc3Npb25cIik7XG4gICAgICB9XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuICAgICAgICBjb25zdCBhcmdzOiBBU1RbXSA9IFtdO1xuICAgICAgICB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHRoaXMucGFyc2VFeHByZXNzaW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IG5ldyBCaW5kaW5nUGlwZSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIG5hbWUsIGFyZ3MpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwifFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbigpOiBBU1Qge1xuICAgIHJldHVybiB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgfVxuXG4gIHBhcnNlQ29uZGl0aW9uYWwoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbE9yKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiP1wiKSkge1xuICAgICAgY29uc3QgeWVzID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIGxldCBubzogQVNUO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTikpIHtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIHRoaXMuZXJyb3IoYENvbmRpdGlvbmFsIGV4cHJlc3Npb24gJHtleHByZXNzaW9ufSByZXF1aXJlcyBhbGwgMyBleHByZXNzaW9uc2ApO1xuICAgICAgICBubyA9IG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBubyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCwgeWVzLCBubyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb2dpY2FsT3IoKTogQVNUIHtcbiAgICAvLyAnfHwnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInx8XCIpKSB7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIFwifHxcIiwgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxvZ2ljYWxBbmQoKTogQVNUIHtcbiAgICAvLyAnJiYnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCImJlwiKSkge1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlRXF1YWxpdHkoKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgXCImJlwiLCByZXN1bHQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXF1YWxpdHkoKTogQVNUIHtcbiAgICAvLyAnPT0nLCchPScsJz09PScsJyE9PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI9PVwiOlxuICAgICAgICBjYXNlIFwiPT09XCI6XG4gICAgICAgIGNhc2UgXCIhPVwiOlxuICAgICAgICBjYXNlIFwiIT09XCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUmVsYXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZVJlbGF0aW9uYWwoKTogQVNUIHtcbiAgICAvLyAnPCcsICc+JywgJzw9JywgJz49J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6XG4gICAgICAgIGNhc2UgXCI+XCI6XG4gICAgICAgIGNhc2UgXCI8PVwiOlxuICAgICAgICBjYXNlIFwiPj1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VBZGRpdGl2ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUFkZGl0aXZlKCk6IEFTVCB7XG4gICAgLy8gJysnLCAnLSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTXVsdGlwbGljYXRpdmUoKTogQVNUIHtcbiAgICAvLyAnKicsICclJywgJy8nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgIGNhc2UgXCIlXCI6XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlUHJlZml4KCk6IEFTVCB7XG4gICAgaWYgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBsZXQgcmVzdWx0OiBBU1Q7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnkodGhpcy5zcGFuKHN0YXJ0KSwgb3BlcmF0b3IsIG5ldyBMaXRlcmFsUHJpbWl0aXZlKG5ldyBQYXJzZVNwYW4oc3RhcnQsIHN0YXJ0KSwgMCksIHJlc3VsdCk7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJlZml4Tm90KHRoaXMuc3BhbihzdGFydCksIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2FsbENoYWluKCk7XG4gIH1cblxuICBwYXJzZUNhbGxDaGFpbigpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kUEVSSU9EKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI/LlwiKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkKys7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFdyaXRlKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEtleWVkUmVhZCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBGdW5jdGlvbkNhbGwodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiIVwiKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgTm9uTnVsbEFzc2VydCh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZVByaW1hcnkoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBpZiAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZE51bGwoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgbnVsbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVW5kZWZpbmVkKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHZvaWQgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVHJ1ZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmRGYWxzZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVGhpcygpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExCUkFDS0VUKSkge1xuICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbkxpc3QoY2hhcnMuJFJCUkFDS0VUKTtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxBcnJheSh0aGlzLnNwYW4oc3RhcnQpLCBlbGVtZW50cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlTGl0ZXJhbE1hcCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzSWRlbnRpZmllcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChuZXcgSW1wbGljaXRSZWNlaXZlcih0aGlzLnNwYW4oc3RhcnQpKSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzTnVtYmVyKCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uZXh0LnRvTnVtYmVyKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNTdHJpbmcoKSkge1xuICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlID0gdGhpcy5uZXh0LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCBsaXRlcmFsVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICR7dGhpcy5pbnB1dH1gKTtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7dGhpcy5uZXh0fWApO1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VFeHByZXNzaW9uTGlzdCh0ZXJtaW5hdG9yOiBudW1iZXIpOiBBU1RbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBBU1RbXSA9IFtdO1xuICAgIGlmICghdGhpcy5uZXh0LmlzQ2hhcmFjdGVyKHRlcm1pbmF0b3IpKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTGl0ZXJhbE1hcCgpOiBMaXRlcmFsTWFwIHtcbiAgICBjb25zdCBrZXlzOiBMaXRlcmFsTWFwS2V5W10gPSBbXTtcbiAgICBjb25zdCB2YWx1ZXM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSk7XG4gICAgaWYgKCF0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSB7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZCsrO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBxdW90ZWQgPSB0aGlzLm5leHQuaXNTdHJpbmcoKTtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTtcbiAgICAgICAga2V5cy5wdXNoKHtrZXksIHF1b3RlZH0pO1xuICAgICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgICB2YWx1ZXMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgICB0aGlzLnJicmFjZXNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDRSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTGl0ZXJhbE1hcCh0aGlzLnNwYW4oc3RhcnQpLCBrZXlzLCB2YWx1ZXMpO1xuICB9XG5cbiAgcGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwocmVjZWl2ZXI6IEFTVCwgaXNTYWZlID0gZmFsc2UpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gcmVjZWl2ZXIuc3Bhbi5zdGFydDtcbiAgICBjb25zdCBpZCA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNwYW4oc3RhcnQpO1xuICAgICAgcmV0dXJuIGlzU2FmZSA/IG5ldyBTYWZlTWV0aG9kQ2FsbChzcGFuLCByZWNlaXZlciwgaWQsIGFyZ3MpIDogbmV3IE1ldGhvZENhbGwoc3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzU2FmZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXCJUaGUgJz8uJyBvcGVyYXRvciBjYW5ub3QgYmUgdXNlZCBpbiB0aGUgYXNzaWdubWVudFwiKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQodGhpcy5zcGFuKHN0YXJ0KSwgcmVjZWl2ZXIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBpZiAoIXRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCaW5kaW5ncyBjYW5ub3QgY29udGFpbiBhc3NpZ25tZW50c1wiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVdyaXRlKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlSZWFkKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJzZUNhbGxBcmd1bWVudHMoKTogQmluZGluZ1BpcGVbXSB7XG4gICAgaWYgKHRoaXMubmV4dC5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbmFsczogQVNUW10gPSBbXTtcbiAgICBkbyB7XG4gICAgICBwb3NpdGlvbmFscy5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO1xuICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgcmV0dXJuIHBvc2l0aW9uYWxzIGFzIEJpbmRpbmdQaXBlW107XG4gIH1cblxuICAvKipcbiAgICogQW4gaWRlbnRpZmllciwgYSBrZXl3b3JkLCBhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGAtYCBpbmJldHdlZW4uXG4gICAqL1xuICBleHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgb3BlcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIHJlc3VsdCArPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpO1xuICAgICAgb3BlcmF0b3JGb3VuZCA9IHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIi1cIik7XG4gICAgICBpZiAob3BlcmF0b3JGb3VuZCkge1xuICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICB9XG4gICAgfSB3aGlsZSAob3BlcmF0b3JGb3VuZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG4gIH1cblxuICBwYXJzZVRlbXBsYXRlQmluZGluZ3MoKTogVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICAgIGNvbnN0IGJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSA9IFtdO1xuICAgIGxldCBwcmVmaXg6IHN0cmluZyA9IG51bGwhO1xuICAgIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgIGxldCBrZXlJc1ZhcjogYm9vbGVhbiA9IHRoaXMucGVla0tleXdvcmRMZXQoKTtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhd0tleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgICBsZXQga2V5ID0gcmF3S2V5O1xuICAgICAgaWYgKCFrZXlJc1Zhcikge1xuICAgICAgICBpZiAocHJlZml4ID09PSBudWxsKSB7XG4gICAgICAgICAgcHJlZml4ID0ga2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleSA9IHByZWZpeCArIGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pO1xuICAgICAgbGV0IG5hbWU6IHN0cmluZyA9IG51bGwhO1xuICAgICAgbGV0IGV4cHJlc3Npb246IEFTVFdpdGhTb3VyY2UgPSBudWxsITtcbiAgICAgIGlmIChrZXlJc1Zhcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPVwiKSkge1xuICAgICAgICAgIG5hbWUgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUgPSBcIiRpbXBsaWNpdFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVla0tleXdvcmRBcygpKSB7XG4gICAgICAgIGNvbnN0IGxldFN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBgYXNgXG4gICAgICAgIG5hbWUgPSByYXdLZXk7XG4gICAgICAgIGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAga2V5SXNWYXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm5leHQgIT09IEVPRiAmJiAhdGhpcy5wZWVrS2V5d29yZExldCgpKSB7XG4gICAgICAgIGNvbnN0IHN0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdCAtIHRoaXMub2Zmc2V0LCB0aGlzLmlucHV0SW5kZXggLSB0aGlzLm9mZnNldCk7XG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIHNvdXJjZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICAgICAgfVxuICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihzdGFydCksIGtleSwga2V5SXNWYXIsIG5hbWUsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmICh0aGlzLnBlZWtLZXl3b3JkQXMoKSAmJiAha2V5SXNWYXIpIHtcbiAgICAgICAgY29uc3QgbGV0U3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBjb25zdW1lIGBhc2BcbiAgICAgICAgY29uc3QgbGV0TmFtZSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7IC8vIHJlYWQgbG9jYWwgdmFyIG5hbWVcbiAgICAgICAgYmluZGluZ3MucHVzaChuZXcgVGVtcGxhdGVCaW5kaW5nKHRoaXMuc3BhbihsZXRTdGFydCksIGxldE5hbWUsIHRydWUsIGtleSwgbnVsbCEpKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge1xuICAgICAgICB0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQoYmluZGluZ3MsIHdhcm5pbmdzLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKG1lc3NhZ2UsIHRoaXMuaW5wdXQsIHRoaXMubG9jYXRpb25UZXh0KGluZGV4KSwgdGhpcy5sb2NhdGlvbikpO1xuICAgIHRoaXMuc2tpcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2NhdGlvblRleHQoaW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKGluZGV4ID09PSBudWxsKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IGBhdCBjb2x1bW4gJHt0aGlzLnRva2Vuc1tpbmRleF0uaW5kZXggKyAxfSBpbmAgOiBgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbmA7XG4gIH1cblxuICAvLyBFcnJvciByZWNvdmVyeSBzaG91bGQgc2tpcCB0b2tlbnMgdW50aWwgaXQgZW5jb3VudGVycyBhIHJlY292ZXJ5IHBvaW50LiBza2lwKCkgdHJlYXRzXG4gIC8vIHRoZSBlbmQgb2YgaW5wdXQgYW5kIGEgJzsnIGFzIHVuY29uZGl0aW9uYWxseSBhIHJlY292ZXJ5IHBvaW50LiBJdCBhbHNvIHRyZWF0cyAnKScsXG4gIC8vICd9JyBhbmQgJ10nIGFzIGNvbmRpdGlvbmFsIHJlY292ZXJ5IHBvaW50cyBpZiBvbmUgb2YgY2FsbGluZyBwcm9kdWN0aW9ucyBpcyBleHBlY3RpbmdcbiAgLy8gb25lIG9mIHRoZXNlIHN5bWJvbHMuIFRoaXMgYWxsb3dzIHNraXAoKSB0byByZWNvdmVyIGZyb20gZXJyb3JzIHN1Y2ggYXMgJyhhLikgKyAxJyBhbGxvd2luZ1xuICAvLyBtb3JlIG9mIHRoZSBBU1QgdG8gYmUgcmV0YWluZWQgKGl0IGRvZXNuJ3Qgc2tpcCBhbnkgdG9rZW5zIGFzIHRoZSAnKScgaXMgcmV0YWluZWQgYmVjYXVzZVxuICAvLyBvZiB0aGUgJygnIGJlZ2lucyBhbiAnKCcgPGV4cHI+ICcpJyBwcm9kdWN0aW9uKS4gVGhlIHJlY292ZXJ5IHBvaW50cyBvZiBncm91cGluZyBzeW1ib2xzXG4gIC8vIG11c3QgYmUgY29uZGl0aW9uYWwgYXMgdGhleSBtdXN0IGJlIHNraXBwZWQgaWYgbm9uZSBvZiB0aGUgY2FsbGluZyBwcm9kdWN0aW9ucyBhcmUgbm90XG4gIC8vIGV4cGVjdGluZyB0aGUgY2xvc2luZyB0b2tlbiBlbHNlIHdlIHdpbGwgbmV2ZXIgbWFrZSBwcm9ncmVzcyBpbiB0aGUgY2FzZSBvZiBhblxuICAvLyBleHRyYW5lb3VzIGdyb3VwIGNsb3Npbmcgc3ltYm9sIChzdWNoIGFzIGEgc3RyYXkgJyknKS4gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yICc7JyBiZWNhdXNlXG4gIC8vIHBhcnNlQ2hhaW4oKSBpcyBhbHdheXMgdGhlIHJvb3QgcHJvZHVjdGlvbiBhbmQgaXQgZXhwZWN0cyBhICc7Jy5cblxuICAvLyBJZiBhIHByb2R1Y3Rpb24gZXhwZWN0cyBvbmUgb2YgdGhlc2UgdG9rZW4gaXQgaW5jcmVtZW50cyB0aGUgY29ycmVzcG9uZGluZyBuZXN0aW5nIGNvdW50LFxuICAvLyBhbmQgdGhlbiBkZWNyZW1lbnRzIGl0IGp1c3QgcHJpb3IgdG8gY2hlY2tpbmcgaWYgdGhlIHRva2VuIGlzIGluIHRoZSBpbnB1dC5cbiAgcHJpdmF0ZSBza2lwKCkge1xuICAgIGxldCBuID0gdGhpcy5uZXh0O1xuICAgIHdoaWxlIChcbiAgICAgIHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggJiZcbiAgICAgICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pICYmXG4gICAgICAodGhpcy5ycGFyZW5zRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUlBBUkVOKSkgJiZcbiAgICAgICh0aGlzLnJicmFjZXNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpKSAmJlxuICAgICAgKHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMubmV4dC5pc0Vycm9yKCkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IodGhpcy5uZXh0LnRvU3RyaW5nKCkhLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dCgpLCB0aGlzLmxvY2F0aW9uKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIG4gPSB0aGlzLm5leHQ7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFNpbXBsZUV4cHJlc3Npb25DaGVja2VyIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHN0YXRpYyBjaGVjayhhc3Q6IEFTVCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzID0gbmV3IFNpbXBsZUV4cHJlc3Npb25DaGVja2VyKCk7XG4gICAgYXN0LnZpc2l0KHMpO1xuICAgIHJldHVybiBzLmVycm9ycztcbiAgfVxuXG4gIGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TGl0ZXJhbFByaW1pdGl2ZShhc3Q6IExpdGVyYWxQcmltaXRpdmUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJvcGVydHlXcml0ZShhc3Q6IFByb3BlcnR5V3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFNhZmVQcm9wZXJ0eVJlYWQoYXN0OiBTYWZlUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRNZXRob2RDYWxsKGFzdDogTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0RnVuY3Rpb25DYWxsKGFzdDogRnVuY3Rpb25DYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMudmlzaXRBbGwoYXN0LnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJlZml4Tm90KGFzdDogUHJlZml4Tm90LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKFwicGlwZXNcIik7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEFsbChhc3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gYXN0cy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KSB7fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgJ0EnOiAnTElOSycsXG4gICdCJzogJ0JPTERfVEVYVCcsXG4gICdCUic6ICdMSU5FX0JSRUFLJyxcbiAgJ0VNJzogJ0VNUEhBU0lTRURfVEVYVCcsXG4gICdIMSc6ICdIRUFESU5HX0xFVkVMMScsXG4gICdIMic6ICdIRUFESU5HX0xFVkVMMicsXG4gICdIMyc6ICdIRUFESU5HX0xFVkVMMycsXG4gICdINCc6ICdIRUFESU5HX0xFVkVMNCcsXG4gICdINSc6ICdIRUFESU5HX0xFVkVMNScsXG4gICdINic6ICdIRUFESU5HX0xFVkVMNicsXG4gICdIUic6ICdIT1JJWk9OVEFMX1JVTEUnLFxuICAnSSc6ICdJVEFMSUNfVEVYVCcsXG4gICdMSSc6ICdMSVNUX0lURU0nLFxuICAnTElOSyc6ICdNRURJQV9MSU5LJyxcbiAgJ09MJzogJ09SREVSRURfTElTVCcsXG4gICdQJzogJ1BBUkFHUkFQSCcsXG4gICdRJzogJ1FVT1RBVElPTicsXG4gICdTJzogJ1NUUklLRVRIUk9VR0hfVEVYVCcsXG4gICdTTUFMTCc6ICdTTUFMTF9URVhUJyxcbiAgJ1NVQic6ICdTVUJTVFJJUFQnLFxuICAnU1VQJzogJ1NVUEVSU0NSSVBUJyxcbiAgJ1RCT0RZJzogJ1RBQkxFX0JPRFknLFxuICAnVEQnOiAnVEFCTEVfQ0VMTCcsXG4gICdURk9PVCc6ICdUQUJMRV9GT09URVInLFxuICAnVEgnOiAnVEFCTEVfSEVBREVSX0NFTEwnLFxuICAnVEhFQUQnOiAnVEFCTEVfSEVBREVSJyxcbiAgJ1RSJzogJ1RBQkxFX1JPVycsXG4gICdUVCc6ICdNT05PU1BBQ0VEX1RFWFQnLFxuICAnVSc6ICdVTkRFUkxJTkVEX1RFWFQnLFxuICAnVUwnOiAnVU5PUkRFUkVEX0xJU1QnLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgcGxhY2Vob2xkZXIgd2l0aCBkaWZmZXJlbnQgY29udGVudC5cbiAqXG4gKiBSZXR1cm5zIHRoZSBzYW1lIHBsYWNlaG9sZGVyIG5hbWUgd2hlbiB0aGUgY29udGVudCBpcyBpZGVudGljYWwuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlclJlZ2lzdHJ5IHtcbiAgLy8gQ291bnQgdGhlIG9jY3VycmVuY2Ugb2YgdGhlIGJhc2UgbmFtZSB0b3AgZ2VuZXJhdGUgYSB1bmlxdWUgbmFtZVxuICBwcml2YXRlIF9wbGFjZUhvbGRlck5hbWVDb3VudHM6IHtbazogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICAvLyBNYXBzIHNpZ25hdHVyZSB0byBwbGFjZWhvbGRlciBuYW1lc1xuICBwcml2YXRlIF9zaWduYXR1cmVUb05hbWU6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIGdldFN0YXJ0VGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuX2hhc2hUYWcodGFnLCBhdHRycywgaXNWb2lkKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGlzVm9pZCA/IGJhc2VOYW1lIDogYFNUQVJUXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldENsb3NlVGFnUGxhY2Vob2xkZXJOYW1lKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoQ2xvc2luZ1RhZyh0YWcpO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVwcGVyVGFnID0gdGFnLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgYmFzZU5hbWUgPSBUQUdfVE9fUExBQ0VIT0xERVJfTkFNRVNbdXBwZXJUYWddIHx8IGBUQUdfJHt1cHBlclRhZ31gO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUoYENMT1NFXyR7YmFzZU5hbWV9YCk7XG5cbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IG5hbWU7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyTmFtZShuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdXBwZXJOYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGBQSDogJHt1cHBlck5hbWV9PSR7Y29udGVudH1gO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaXF1ZU5hbWUgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUodXBwZXJOYW1lKTtcbiAgICB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSA9IHVuaXF1ZU5hbWU7XG5cbiAgICByZXR1cm4gdW5pcXVlTmFtZTtcbiAgfVxuXG4gIGdldFVuaXF1ZVBsYWNlaG9sZGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShuYW1lLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgYSBoYXNoIGZvciBhIHRhZyAtIGRvZXMgbm90IHRha2UgYXR0cmlidXRlIG9yZGVyIGludG8gYWNjb3VudFxuICBwcml2YXRlIF9oYXNoVGFnKHRhZzogc3RyaW5nLCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LCBpc1ZvaWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0ID0gYDwke3RhZ31gO1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IGAgJHtuYW1lfT0ke2F0dHJzW25hbWVdfWApLmpvaW4oJycpO1xuICAgIGNvbnN0IGVuZCA9IGlzVm9pZCA/ICcvPicgOiBgPjwvJHt0YWd9PmA7XG5cbiAgICByZXR1cm4gc3RhcnQgKyBzdHJBdHRycyArIGVuZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc2hDbG9zaW5nVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2hhc2hUYWcoYC8ke3RhZ31gLCB7fSwgZmFsc2UpOyB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVVbmlxdWVOYW1lKGJhc2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VlbiA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50cy5oYXNPd25Qcm9wZXJ0eShiYXNlKTtcbiAgICBpZiAoIXNlZW4pIHtcbiAgICAgIHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXSA9IDE7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXTtcbiAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSBpZCArIDE7XG4gICAgcmV0dXJuIGAke2Jhc2V9XyR7aWR9YDtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0ludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7TGV4ZXJ9IGZyb20gXCIuL2xleGVyXCI7XG5pbXBvcnQge1BsYWNlaG9sZGVyUmVnaXN0cnl9IGZyb20gXCIuLi9zZXJpYWxpemVycy9wbGFjZWhvbGRlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcblxuY29uc3QgX2V4cFBhcnNlciA9IG5ldyBQYXJzZXIobmV3IExleGVyKCkpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBjb252ZXJ0aW5nIGh0bWwgbm9kZXMgdG8gYW4gaTE4biBNZXNzYWdlIGdpdmVuIGFuIGludGVycG9sYXRpb25Db25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShcbiAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZ1xuKTogKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiBpMThuLk1lc3NhZ2Uge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IEkxOG5WaXNpdG9yKF9leHBQYXJzZXIsIGludGVycG9sYXRpb25Db25maWcpO1xuXG4gIHJldHVybiAobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+XG4gICAgdmlzaXRvci50b0kxOG5NZXNzYWdlKG5vZGVzLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xufVxuXG5jbGFzcyBJMThuVmlzaXRvciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2lzSWN1OiBib29sZWFuO1xuICBwcml2YXRlIF9pY3VEZXB0aDogbnVtYmVyO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclJlZ2lzdHJ5OiBQbGFjZWhvbGRlclJlZ2lzdHJ5O1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRvQ29udGVudDoge1twaE5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyVG9NZXNzYWdlOiB7W3BoTmFtZTogc3RyaW5nXTogaTE4bi5NZXNzYWdlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHByZXNzaW9uUGFyc2VyOiBQYXJzZXIsIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpIHt9XG5cbiAgcHVibGljIHRvSTE4bk1lc3NhZ2Uobm9kZXM6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBpMThuLk1lc3NhZ2Uge1xuICAgIHRoaXMuX2lzSWN1ID0gbm9kZXMubGVuZ3RoID09PSAxICYmIG5vZGVzWzBdIGluc3RhbmNlb2YgaHRtbC5FeHBhbnNpb247XG4gICAgdGhpcy5faWN1RGVwdGggPSAwO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkgPSBuZXcgUGxhY2Vob2xkZXJSZWdpc3RyeSgpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50ID0ge307XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UgPSB7fTtcblxuICAgIGNvbnN0IGkxOG5vZGVzOiBpMThuLk5vZGVbXSA9IGh0bWwudmlzaXRBbGwodGhpcywgbm9kZXMsIHt9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5NZXNzYWdlKGkxOG5vZGVzLCB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudCwgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2UsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBlbC5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgLy8gRG8gbm90IHZpc2l0IHRoZSBhdHRyaWJ1dGVzLCB0cmFuc2xhdGFibGUgb25lcyBhcmUgdG9wLWxldmVsIEFTVHNcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaXNWb2lkOiBib29sZWFuID0gZ2V0SHRtbFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkO1xuICAgIGNvbnN0IHN0YXJ0UGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lLCBhdHRycywgaXNWb2lkKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtzdGFydFBoTmFtZV0gPSBlbC5zb3VyY2VTcGFuID8gZWwuc291cmNlU3BhbiEudG9TdHJpbmcoKSA6IFwiXCI7XG5cbiAgICBsZXQgY2xvc2VQaE5hbWUgPSBcIlwiO1xuXG4gICAgaWYgKCFpc1ZvaWQpIHtcbiAgICAgIGNsb3NlUGhOYW1lID0gdGhpcy5fcGxhY2Vob2xkZXJSZWdpc3RyeS5nZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZShlbC5uYW1lKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2Nsb3NlUGhOYW1lXSA9IGA8LyR7ZWwubmFtZX0+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uVGFnUGxhY2Vob2xkZXIoZWwubmFtZSwgYXR0cnMsIHN0YXJ0UGhOYW1lLCBjbG9zZVBoTmFtZSwgY2hpbGRyZW4sIGlzVm9pZCwgZWwuc291cmNlU3BhbiEpO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24oYXR0cmlidXRlLnZhbHVlLCBhdHRyaWJ1dGUuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUge1xuICAgIHJldHVybiB0aGlzLl92aXNpdFRleHRXaXRoSW50ZXJwb2xhdGlvbih0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aGlzLl9pY3VEZXB0aCsrO1xuICAgIGNvbnN0IGkxOG5JY3VDYXNlczoge1trOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG4gICAgY29uc3QgaTE4bkljdSA9IG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBpMThuSWN1Q2FzZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICBpY3UuY2FzZXMuZm9yRWFjaCgoY2F6ZSk6IHZvaWQgPT4ge1xuICAgICAgaTE4bkljdUNhc2VzW2NhemUudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKFxuICAgICAgICBjYXplLmV4cHJlc3Npb24ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCB7fSkpLFxuICAgICAgICBjYXplLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5faWN1RGVwdGgtLTtcblxuICAgIGlmICh0aGlzLl9pc0ljdSB8fCB0aGlzLl9pY3VEZXB0aCA+IDApIHtcbiAgICAgIC8vIFJldHVybnMgYW4gSUNVIG5vZGUgd2hlbjpcbiAgICAgIC8vIC0gdGhlIG1lc3NhZ2UgKHZzIGEgcGFydCBvZiB0aGUgbWVzc2FnZSkgaXMgYW4gSUNVIG1lc3NhZ2UsIG9yXG4gICAgICAvLyAtIHRoZSBJQ1UgbWVzc2FnZSBpcyBuZXN0ZWQuXG4gICAgICBjb25zdCBleHBQaCA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0VW5pcXVlUGxhY2Vob2xkZXIoYFZBUl8ke2ljdS50eXBlfWApO1xuICAgICAgaTE4bkljdS5leHByZXNzaW9uUGxhY2Vob2xkZXIgPSBleHBQaDtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W2V4cFBoXSA9IGljdS5zd2l0Y2hWYWx1ZTtcblxuICAgICAgcmV0dXJuIGkxOG5JY3U7XG4gICAgfVxuXG4gICAgLy8gRWxzZSByZXR1cm5zIGEgcGxhY2Vob2xkZXJcbiAgICAvLyBJQ1UgcGxhY2Vob2xkZXJzIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgd2l0aCB0aGVpciBvcmlnaW5hbCBjb250ZW50IGJ1dCB3aXRoIHRoZSB0aGVpclxuICAgIC8vIHRyYW5zbGF0aW9ucy4gV2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgdmlzaXRvciAodGhleSBhcmUgbm90IHJlLWVudHJhbnQpIHRvIGNvbXB1dGUgdGhlXG4gICAgLy8gbWVzc2FnZSBpZC5cbiAgICAvLyBUT0RPKHZpY2IpOiBhZGQgYSBodG1sLk5vZGUgLT4gaTE4bi5NZXNzYWdlIGNhY2hlIHRvIGF2b2lkIGhhdmluZyB0byByZS1jcmVhdGUgdGhlIG1zZ1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKFwiSUNVXCIsIGljdS5zb3VyY2VTcGFuLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgSTE4blZpc2l0b3IodGhpcy5fZXhwcmVzc2lvblBhcnNlciwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb01lc3NhZ2VbcGhOYW1lXSA9IHZpc2l0b3IudG9JMThuTWVzc2FnZShbaWN1XSwgXCJcIiwgXCJcIiwgXCJcIik7XG4gICAgcmV0dXJuIG5ldyBpMThuLkljdVBsYWNlaG9sZGVyKGkxOG5JY3UsIHBoTmFtZSwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24odGV4dDogc3RyaW5nLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBpMThuLk5vZGUge1xuICAgIGNvbnN0IHNwbGl0SW50ZXJwb2xhdGlvbiA9IHRoaXMuX2V4cHJlc3Npb25QYXJzZXIuc3BsaXRJbnRlcnBvbGF0aW9uKFxuICAgICAgdGV4dCxcbiAgICAgIHNvdXJjZVNwYW4uc3RhcnQudG9TdHJpbmcoKSxcbiAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWdcbiAgICApO1xuXG4gICAgaWYgKCFzcGxpdEludGVycG9sYXRpb24pIHtcbiAgICAgIC8vIE5vIGV4cHJlc3Npb24sIHJldHVybiBhIHNpbmdsZSB0ZXh0XG4gICAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LCBzb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBncm91cCBvZiB0ZXh0ICsgZXhwcmVzc2lvbnNcbiAgICBjb25zdCBub2RlczogaTE4bi5Ob2RlW10gPSBbXTtcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgaTE4bi5Db250YWluZXIobm9kZXMsIHNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHtzdGFydDogc0RlbGltaXRlciwgZW5kOiBlRGVsaW1pdGVyfSA9IHRoaXMuX2ludGVycG9sYXRpb25Db25maWc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHNwbGl0SW50ZXJwb2xhdGlvbi5leHByZXNzaW9uc1tpXTtcbiAgICAgIGNvbnN0IGJhc2VOYW1lID0gZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShleHByZXNzaW9uKSB8fCBcIklOVEVSUE9MQVRJT05cIjtcbiAgICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0UGxhY2Vob2xkZXJOYW1lKGJhc2VOYW1lLCBleHByZXNzaW9uKTtcblxuICAgICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAvLyBObyBuZWVkIHRvIGFkZCBlbXB0eSBzdHJpbmdzXG4gICAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXSwgc291cmNlU3BhbikpO1xuICAgICAgfVxuXG4gICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlBsYWNlaG9sZGVyKGV4cHJlc3Npb24sIHBoTmFtZSwgc291cmNlU3BhbikpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbcGhOYW1lXSA9IHNEZWxpbWl0ZXIgKyBleHByZXNzaW9uICsgZURlbGltaXRlcjtcbiAgICB9XG5cbiAgICAvLyBUaGUgbGFzdCBpbmRleCBjb250YWlucyBubyBleHByZXNzaW9uXG4gICAgY29uc3QgbGFzdFN0cmluZ0lkeCA9IHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgaWYgKHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLmxlbmd0aCkge1xuICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5UZXh0KHNwbGl0SW50ZXJwb2xhdGlvbi5zdHJpbmdzW2xhc3RTdHJpbmdJZHhdLCBzb3VyY2VTcGFuKSk7XG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cblxuY29uc3QgX0NVU1RPTV9QSF9FWFAgPSAvXFwvXFwvW1xcc1xcU10qaTE4bltcXHNcXFNdKlxcKFtcXHNcXFNdKnBoW1xcc1xcU10qPVtcXHNcXFNdKihcInwnKShbXFxzXFxTXSo/KVxcMVtcXHNcXFNdKlxcKS9nO1xuXG5mdW5jdGlvbiBleHRyYWN0UGxhY2Vob2xkZXJOYW1lKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW5wdXQuc3BsaXQoX0NVU1RPTV9QSF9FWFApWzJdO1xufVxuIiwiaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsIEludGVycG9sYXRpb25Db25maWd9IGZyb20gXCIuLi9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCB7Y3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5fSBmcm9tIFwiLi9pMThuXCI7XG5pbXBvcnQge1BhcnNlciwgUGFyc2VUcmVlUmVzdWx0fSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC9odG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgUGxhY2Vob2xkZXJNYXBwZXJ9IGZyb20gXCIuLi9zZXJpYWxpemVycy9zZXJpYWxpemVyXCI7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5jb25zdCBfSTE4Tl9BVFRSID0gXCJpMThuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZU1ldGFkYXRhIHtcbiAgbWVhbmluZz86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpIHtcbiAgICBzdXBlcihnZXRIdG1sVGFnRGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShzb3VyY2U6IHN0cmluZywgdXJsOiBzdHJpbmcsIHBhcnNlRXhwYW5zaW9uRm9ybXMgPSBmYWxzZSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgcmV0dXJuIHN1cGVyLnBhcnNlKHNvdXJjZSwgdXJsLCBwYXJzZUV4cGFuc2lvbkZvcm1zLCB0aGlzLmludGVycG9sYXRpb25Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgdHJhbnNsYXRhYmxlIG1lc3NhZ2VzIGZyb20gYW4gaHRtbCBBU1RcbiAgICovXG4gIGV4dHJhY3RNZXNzYWdlcyhub2RlczogaHRtbC5Ob2RlW10pOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFZpc2l0b3IoW1wid3JhcHBlclwiXSk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLmV4dHJhY3Qod3JhcHBlciwgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgfVxuXG4gIG1lcmdlVHJhbnNsYXRpb25zKFxuICAgIG5vZGVzOiBodG1sLk5vZGVbXSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgbWV0YWRhdGE/OiBNZXNzYWdlTWV0YWRhdGEsXG4gICAgaW1wbGljaXRUYWdzOiBzdHJpbmdbXSA9IFtdXG4gICk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKGltcGxpY2l0VGFncyk7XG4gICAgLy8gQ29uc3RydWN0IGEgc2luZ2xlIGZha2Ugcm9vdCBlbGVtZW50XG4gICAgY29uc3Qgd3JhcHBlciA9IG5ldyBodG1sLkVsZW1lbnQoXCJ3cmFwcGVyXCIsIFtdLCBub2RlcywgdW5kZWZpbmVkISwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB2aXNpdG9yLm1lcmdlKHdyYXBwZXIsIHRyYW5zbGF0aW9ucywgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXMsIG1ldGFkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXh0cmFjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIHB1YmxpYyBlcnJvcnM6IEkxOG5FcnJvcltdKSB7fVxufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciB0cmFuc2xhdGVkIG1lc3NhZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIHByaXZhdGUgaTE4blRvSHRtbDogSTE4blRvSHRtbFZpc2l0b3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fSxcbiAgICBwdWJsaWMgZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgcHVibGljIG1hcHBlckZhY3Rvcnk/OiAobTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlcixcbiAgICBjb25zb2xlPzogQ29uc29sZVxuICApIHtcbiAgICB0aGlzLmkxOG5Ub0h0bWwgPSBuZXcgSTE4blRvSHRtbFZpc2l0b3IoXG4gICAgICBpMThuTm9kZXNCeU1zZ0lkLFxuICAgICAgZGlnZXN0LFxuICAgICAgbWFwcGVyRmFjdG9yeSEsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsXG4gICAgICBjb25zb2xlXG4gICAgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYSBgVHJhbnNsYXRpb25CdW5kbGVgIGJ5IHBhcnNpbmcgdGhlIGdpdmVuIGBjb250ZW50YCB3aXRoIHRoZSBgc2VyaWFsaXplcmAuXG4gIHN0YXRpYyBsb2FkKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkaWdlc3Q6IChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpID0+IHN0cmluZyxcbiAgICBjcmVhdGVOYW1lTWFwcGVyOiAobWVzc2FnZTogaTE4bi5NZXNzYWdlKSA9PiBQbGFjZWhvbGRlck1hcHBlciB8IG51bGwsXG4gICAgbG9hZEZjdDogKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IEkxOG5NZXNzYWdlc0J5SWQsXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkID0gbG9hZEZjdChjb250ZW50LCB1cmwpO1xuICAgIGNvbnN0IGRpZ2VzdEZuID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gZGlnZXN0KG0pO1xuICAgIGNvbnN0IG1hcHBlckZhY3RvcnkgPSAobTogaTE4bi5NZXNzYWdlKSA9PiBjcmVhdGVOYW1lTWFwcGVyKG0pITtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uQnVuZGxlKFxuICAgICAgaTE4bk5vZGVzQnlNc2dJZCxcbiAgICAgIGRpZ2VzdEZuLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgICAgbWFwcGVyRmFjdG9yeSxcbiAgICAgIGNvbnNvbGVcbiAgICApO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gYXMgSFRNTCBub2RlcyBmcm9tIHRoZSBnaXZlbiBzb3VyY2UgbWVzc2FnZS5cbiAgZ2V0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXMpOiBodG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaHRtbFJlcyA9IHRoaXMuaTE4blRvSHRtbC5jb252ZXJ0KHNyY01zZywgcGFyYW1zKTtcbiAgICBpZiAoaHRtbFJlcy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoaHRtbFJlcy5lcnJvcnMuam9pbihcIlxcblwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxSZXMubm9kZXM7XG4gIH1cblxuICBoYXMoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWdlc3Qoc3JjTXNnKSBpbiB0aGlzLmkxOG5Ob2Rlc0J5TXNnSWQ7XG4gIH1cbn1cblxuY2xhc3MgSTE4blRvSHRtbFZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICBwcml2YXRlIF9zcmNNc2c6IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBfY29udGV4dFN0YWNrOiB7bXNnOiBpMThuLk1lc3NhZ2U7IG1hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nfVtdID0gW107XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW10gPSBbXTtcbiAgcHJpdmF0ZSBfbWFwcGVyOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmFtczoge1trZXk6IHN0cmluZ106IGFueX07XG4gIHByaXZhdGUgX3BhcmFtS2V5czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sXG4gICAgcHJpdmF0ZSBfZGlnZXN0OiAobTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfbWFwcGVyRmFjdG9yeTogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgcHJpdmF0ZSBfbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIHByaXZhdGUgX2ludGVycG9sYXRpb25Db25maWc/OiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgX2NvbnNvbGU/OiBDb25zb2xlXG4gICkge31cblxuICBjb252ZXJ0KHNyY01zZzogaTE4bi5NZXNzYWdlLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KToge25vZGVzOiBodG1sLk5vZGVbXTsgZXJyb3JzOiBJMThuRXJyb3JbXX0ge1xuICAgIHRoaXMuX2NvbnRleHRTdGFjay5sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9wYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gICAgLy8gaTE4biB0byB0ZXh0XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuY29udmVydFRvVGV4dChzcmNNc2cpO1xuXG4gICAgLy8gdGV4dCB0byBodG1sXG4gICAgY29uc3QgdXJsID0gc3JjTXNnLm5vZGVzWzBdLnNvdXJjZVNwYW4uc3RhcnQuZmlsZS51cmw7XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCkucGFyc2UodGV4dCwgdXJsLCB0cnVlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBub2RlczogaHRtbFBhcnNlci5yb290Tm9kZXMsXG4gICAgICBlcnJvcnM6IFsuLi50aGlzLl9lcnJvcnMsIC4uLmh0bWxQYXJzZXIuZXJyb3JzXVxuICAgIH07XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGV4dC52YWx1ZTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5tYXAoayA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuXG4gICAgLy8gVE9ETyh2aWNiKTogT25jZSBhbGwgZm9ybWF0IHN3aXRjaCB0byB1c2luZyBleHByZXNzaW9uIHBsYWNlaG9sZGVyc1xuICAgIC8vIHdlIHNob3VsZCB0aHJvdyB3aGVuIHRoZSBwbGFjZWhvbGRlciBpcyBub3QgaW4gdGhlIHNvdXJjZSBtZXNzYWdlXG4gICAgY29uc3QgZXhwID0gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShpY3UuZXhwcmVzc2lvbilcbiAgICAgID8gdGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVyc1tpY3UuZXhwcmVzc2lvbl1cbiAgICAgIDogaWN1LmV4cHJlc3Npb247XG5cbiAgICByZXR1cm4gYHske2V4cH0sICR7aWN1LnR5cGV9LCAke2Nhc2VzLmpvaW4oXCIgXCIpfX1gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgcGhOYW1lID0gdGhpcy5fbWFwcGVyKHBoLm5hbWUpO1xuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzLmhhc093blByb3BlcnR5KHBoTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1ZhbHVlKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbcGhOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaE5hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRFcnJvcihwaCwgYFVua25vd24gcGxhY2Vob2xkZXIgXCIke3BoLm5hbWV9XCJgKTtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8vIExvYWRlZCBtZXNzYWdlIGNvbnRhaW5zIG9ubHkgcGxhY2Vob2xkZXJzICh2cyB0YWcgYW5kIGljdSBwbGFjZWhvbGRlcnMpLlxuICAvLyBIb3dldmVyIHdoZW4gYSB0cmFuc2xhdGlvbiBjYW4gbm90IGJlIGZvdW5kLCB3ZSBuZWVkIHRvIHNlcmlhbGl6ZSB0aGUgc291cmNlIG1lc3NhZ2VcbiAgLy8gd2hpY2ggY2FuIGNvbnRhaW4gdGFnIHBsYWNlaG9sZGVyc1xuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCB0YWcgPSBgJHtwaC50YWd9YDtcbiAgICBjb25zdCBhdHRycyA9IE9iamVjdC5rZXlzKHBoLmF0dHJzKVxuICAgICAgLm1hcChuYW1lID0+IGAke25hbWV9PVwiJHtwaC5hdHRyc1tuYW1lXX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgaWYgKHBoLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWd9ICR7YXR0cnN9Lz5gO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHBoLmNoaWxkcmVuLm1hcCgoYzogaTE4bi5Ob2RlKSA9PiBjLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfT4ke2NoaWxkcmVufTwvJHt0YWd9PmA7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQW4gSUNVIHBsYWNlaG9sZGVyIHJlZmVyZW5jZXMgdGhlIHNvdXJjZSBtZXNzYWdlIHRvIGJlIHNlcmlhbGl6ZWRcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9UZXh0KHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlclRvTWVzc2FnZVtwaC5uYW1lXSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIHNvdXJjZSBtZXNzYWdlIHRvIGEgdHJhbnNsYXRlZCB0ZXh0IHN0cmluZzpcbiAgICogLSB0ZXh0IG5vZGVzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyIHRyYW5zbGF0aW9uLFxuICAgKiAtIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciBjb250ZW50LFxuICAgKiAtIElDVSBub2RlcyBhcmUgY29udmVydGVkIHRvIElDVSBleHByZXNzaW9ucy5cbiAgICovXG4gIHByaXZhdGUgY29udmVydFRvVGV4dChzcmNNc2c6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9kaWdlc3Qoc3JjTXNnKTtcblxuICAgIGNvbnN0IG1hcHBlciA9IHRoaXMuX21hcHBlckZhY3RvcnkgPyB0aGlzLl9tYXBwZXJGYWN0b3J5KHNyY01zZykgOiBudWxsO1xuICAgIGxldCBub2RlczogaTE4bi5Ob2RlW107XG5cbiAgICB0aGlzLl9jb250ZXh0U3RhY2sucHVzaCh7bXNnOiB0aGlzLl9zcmNNc2csIG1hcHBlcjogdGhpcy5fbWFwcGVyfSk7XG4gICAgdGhpcy5fc3JjTXNnID0gc3JjTXNnO1xuXG4gICAgaWYgKHRoaXMuX2kxOG5Ob2Rlc0J5TXNnSWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAvLyBXaGVuIHRoZXJlIGlzIGEgdHJhbnNsYXRpb24gdXNlIGl0cyBub2RlcyBhcyB0aGUgc291cmNlXG4gICAgICAvLyBBbmQgY3JlYXRlIGEgbWFwcGVyIHRvIGNvbnZlcnQgc2VyaWFsaXplZCBwbGFjZWhvbGRlciBuYW1lcyB0byBpbnRlcm5hbCBuYW1lc1xuICAgICAgbm9kZXMgPSB0aGlzLl9pMThuTm9kZXNCeU1zZ0lkW2lkXTtcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IChtYXBwZXIgPyBtYXBwZXIudG9JbnRlcm5hbE5hbWUobmFtZSkhIDogbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gbm8gdHJhbnNsYXRpb24gaGFzIGJlZW4gZm91bmRcbiAgICAgIC8vIC0gcmVwb3J0IGFuIGVycm9yIC8gYSB3YXJuaW5nIC8gbm90aGluZyxcbiAgICAgIC8vIC0gdXNlIHRoZSBub2RlcyBmcm9tIHRoZSBvcmlnaW5hbCBtZXNzYWdlXG4gICAgICAvLyAtIHBsYWNlaG9sZGVycyBhcmUgYWxyZWFkeSBpbnRlcm5hbCBhbmQgbmVlZCBubyBtYXBwZXJcbiAgICAgIGlmICh0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5fYWRkRXJyb3Ioc3JjTXNnLm5vZGVzWzBdLCBgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgbWVzc2FnZSBcIiR7aWR9XCJgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uc29sZSAmJiB0aGlzLl9taXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9PT0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZykge1xuICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiYCk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IHNyY01zZy5ub2RlcztcbiAgICAgIHRoaXMuX21hcHBlciA9IChuYW1lOiBzdHJpbmcpID0+IG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9jb250ZXh0U3RhY2sucG9wKCkhO1xuICAgIHRoaXMuX3NyY01zZyA9IGNvbnRleHQubXNnO1xuICAgIHRoaXMuX21hcHBlciA9IGNvbnRleHQubWFwcGVyO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9WYWx1ZShwbGFjZWhvbGRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbSA9IHBsYWNlaG9sZGVyLnJlcGxhY2UodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCwgXCJcIikucmVwbGFjZSh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCwgXCJcIik7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtS2V5cy5pbmRleE9mKHBhcmFtKSAhPT0gLTEgPyB0aGlzLl9wYXJhbXNbcGFyYW1dIDogcGxhY2Vob2xkZXI7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFcnJvcihlbDogaTE4bi5Ob2RlLCBtc2c6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3IoZWwuc291cmNlU3BhbiwgbXNnKSk7XG4gIH1cbn1cblxuZW51bSBWaXNpdG9yTW9kZSB7XG4gIEV4dHJhY3QsXG4gIE1lcmdlXG59XG5cbi8qKlxuICogVGhpcyBWaXNpdG9yIGlzIHVzZWQ6XG4gKiAxLiB0byBleHRyYWN0IGFsbCB0aGUgdHJhbnNsYXRhYmxlIHN0cmluZ3MgZnJvbSBhbiBodG1sIEFTVCAoc2VlIGBleHRyYWN0KClgKSxcbiAqIDIuIHRvIHJlcGxhY2UgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIHdpdGggdGhlIGFjdHVhbCB0cmFuc2xhdGlvbnMgKHNlZSBgbWVyZ2UoKWApXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIGRlcHRoOiBudW1iZXI7XG5cbiAgLy8gPGVsIGkxOG4+Li4uPC9lbD5cbiAgcHJpdmF0ZSBpbkkxOG5Ob2RlOiBib29sZWFuO1xuICBwcml2YXRlIGluSW1wbGljaXROb2RlOiBib29sZWFuO1xuXG4gIC8vIDwhLS1pMThuLS0+Li4uPCEtLS9pMThuLS0+XG4gIHByaXZhdGUgaW5JMThuQmxvY2s6IGJvb2xlYW47XG4gIHByaXZhdGUgYmxvY2tDaGlsZHJlbjogaHRtbC5Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBibG9ja1N0YXJ0RGVwdGg6IG51bWJlcjtcblxuICAvLyB7PGljdSBtZXNzYWdlPn1cbiAgcHJpdmF0ZSBpbkljdTogYm9vbGVhbjtcblxuICAvLyBzZXQgdG8gdm9pZCAwIHdoZW4gbm90IGluIGEgc2VjdGlvblxuICBwcml2YXRlIG1zZ0NvdW50QXRTZWN0aW9uU3RhcnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBlcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIG1vZGU6IFZpc2l0b3JNb2RlO1xuXG4gIC8vIFZpc2l0b3JNb2RlLkV4dHJhY3Qgb25seVxuICBwcml2YXRlIG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXTtcblxuICAvLyBWaXNpdG9yTW9kZS5NZXJnZSBvbmx5XG4gIHByaXZhdGUgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZTtcbiAgcHJpdmF0ZSBjcmVhdGVJMThuTWVzc2FnZTogKG1zZzogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT4gaTE4bi5NZXNzYWdlO1xuICBwcml2YXRlIG1ldGFkYXRhOiBNZXNzYWdlTWV0YWRhdGE7XG4gIHByaXZhdGUgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbXBsaWNpdFRhZ3M6IHN0cmluZ1tdID0gW10pIHt9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBtZXNzYWdlcyBmcm9tIHRoZSB0cmVlXG4gICAqL1xuICBleHRyYWN0KG5vZGU6IGh0bWwuTm9kZSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgIHRoaXMuaW5pdChWaXNpdG9yTW9kZS5FeHRyYWN0LCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICAgIG5vZGUudmlzaXQodGhpcywgbnVsbCk7XG5cbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jaykge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Iobm9kZSwgXCJVbmNsb3NlZCBibG9ja1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV4dHJhY3Rpb25SZXN1bHQodGhpcy5tZXNzYWdlcywgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB0cmVlIHdoZXJlIGFsbCB0cmFuc2xhdGFibGUgbm9kZXMgYXJlIHRyYW5zbGF0ZWRcbiAgICovXG4gIG1lcmdlKFxuICAgIG5vZGU6IGh0bWwuTm9kZSxcbiAgICB0cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uQnVuZGxlLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICBtZXRhZGF0YTogTWVzc2FnZU1ldGFkYXRhID0ge31cbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB0aGlzLmluaXQoVmlzaXRvck1vZGUuTWVyZ2UsIGludGVycG9sYXRpb25Db25maWcsIHBhcmFtcyk7XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlZE5vZGUgPSBub2RlLnZpc2l0KHRoaXMsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5jbG9zZWQgYmxvY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQodHJhbnNsYXRlZE5vZGUuY2hpbGRyZW4sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgLy8gUGFyc2UgY2FzZXMgZm9yIHRyYW5zbGF0YWJsZSBodG1sIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBleHByZXNzaW9uID0gaHRtbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FeHBhbnNpb25DYXNlKFxuICAgICAgICBpY3VDYXNlLnZhbHVlLFxuICAgICAgICBleHByZXNzaW9uLFxuICAgICAgICBpY3VDYXNlLnNvdXJjZVNwYW4sXG4gICAgICAgIGljdUNhc2UudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICBpY3VDYXNlLmV4cFNvdXJjZVNwYW5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogaHRtbC5FeHBhbnNpb24ge1xuICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKGljdSk7XG5cbiAgICBjb25zdCB3YXNJbkljdSA9IHRoaXMuaW5JY3U7XG5cbiAgICBpZiAoIXRoaXMuaW5JY3UpIHtcbiAgICAgIC8vIG5lc3RlZCBJQ1UgbWVzc2FnZXMgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgYnV0IHRvcC1sZXZlbCB0cmFuc2xhdGVkIGFzIGEgd2hvbGVcbiAgICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWRkTWVzc2FnZShbaWN1XSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluSWN1ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXNlcyA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBpY3UgPSBuZXcgaHRtbC5FeHBhbnNpb24oaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZXMsIGljdS5zb3VyY2VTcGFuLCBpY3Uuc3dpdGNoVmFsdWVTb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICB0aGlzLmluSWN1ID0gd2FzSW5JY3U7XG5cbiAgICByZXR1cm4gaWN1O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBodG1sLlRleHQge1xuICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbih0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaHRtbC5FbGVtZW50IHwgbnVsbCB7XG4gICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4oZWwpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBjb25zdCB3YXNJbkkxOG5Ob2RlID0gdGhpcy5pbkkxOG5Ob2RlO1xuICAgIGNvbnN0IHdhc0luSW1wbGljaXROb2RlID0gdGhpcy5pbkltcGxpY2l0Tm9kZTtcbiAgICBsZXQgY2hpbGROb2RlczogaHRtbC5Ob2RlW10gPSBbXTtcbiAgICBsZXQgdHJhbnNsYXRlZENoaWxkTm9kZXM6IGh0bWwuTm9kZVtdID0gdW5kZWZpbmVkITtcblxuICAgIC8vIEV4dHJhY3Q6XG4gICAgLy8gLSB0b3AgbGV2ZWwgbm9kZXMgd2l0aCB0aGUgKGltcGxpY2l0KSBcImkxOG5cIiBhdHRyaWJ1dGUgaWYgbm90IGFscmVhZHkgaW4gYSBzZWN0aW9uXG4gICAgLy8gLSBJQ1UgbWVzc2FnZXNcbiAgICBjb25zdCBpMThuQXR0ciA9IGdldEkxOG5BdHRyKGVsKTtcbiAgICBjb25zdCBpc0ltcGxpY2l0ID0gdGhpcy5faW1wbGljaXRUYWdzLnNvbWUodGFnID0+IGVsLm5hbWUgPT09IHRhZykgJiYgIXRoaXMuaW5JY3UgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb247XG4gICAgY29uc3QgaXNUb3BMZXZlbEltcGxpY2l0ID0gIXdhc0luSW1wbGljaXROb2RlICYmIGlzSW1wbGljaXQ7XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlIHx8IGlzSW1wbGljaXQ7XG4gICAgaWYgKCF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uICYmICF0aGlzLmluSWN1KSB7XG4gICAgICBpZiAoaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0KSB7XG4gICAgICAgIHRoaXMuaW5JMThuTm9kZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2UoZWwuY2hpbGRyZW4sIHRoaXMubWV0YWRhdGEpITtcbiAgICAgICAgdHJhbnNsYXRlZENoaWxkTm9kZXMgPSB0aGlzLnRyYW5zbGF0ZU1lc3NhZ2UoZWwsIG1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5FeHRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGlzVHJhbnNsYXRhYmxlID0gaTE4bkF0dHIgfHwgaXNUb3BMZXZlbEltcGxpY2l0O1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGFibGUpIHtcbiAgICAgICAgICB0aGlzLm9wZW5UcmFuc2xhdGFibGVTZWN0aW9uKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKGVsLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihlbCwgXCJDb3VsZCBub3QgbWFyayBhbiBlbGVtZW50IGFzIHRyYW5zbGF0YWJsZSBpbnNpZGUgYSB0cmFuc2xhdGFibGUgc2VjdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuRXh0cmFjdCkge1xuICAgICAgICAvLyBEZXNjZW5kIGludG8gY2hpbGQgbm9kZXMgZm9yIGV4dHJhY3Rpb25cbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IHZpc2l0Tm9kZXMgPSB0cmFuc2xhdGVkQ2hpbGROb2RlcyB8fCBlbC5jaGlsZHJlbjtcbiAgICAgIHZpc2l0Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZC52aXNpdCh0aGlzLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHZpc2l0ZWQgJiYgIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgICAvLyBEbyBub3QgYWRkIHRoZSBjaGlsZHJlbiBmcm9tIHRyYW5zbGF0YWJsZSBzZWN0aW9ucyAoPSBpMThuIGJsb2NrcyBoZXJlKVxuICAgICAgICAgIC8vIFRoZXkgd2lsbCBiZSBhZGRlZCBsYXRlciBpbiB0aGlzIGxvb3Agd2hlbiB0aGUgYmxvY2sgY2xvc2VzIChpLmUuIG9uIGA8IS0tIC9pMThuIC0tPmApXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMuY29uY2F0KHZpc2l0ZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcHRoLS07XG4gICAgdGhpcy5pbkkxOG5Ob2RlID0gd2FzSW5JMThuTm9kZTtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gd2FzSW5JbXBsaWNpdE5vZGU7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoZWwubmFtZSwgW10sIGNoaWxkTm9kZXMsIGVsLnNvdXJjZVNwYW4sIGVsLnN0YXJ0U291cmNlU3BhbiwgZWwuZW5kU291cmNlU3Bhbik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjb2RlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KG1vZGU6IFZpc2l0b3JNb2RlLCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuaW5JMThuQmxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmluSTE4bk5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoID0gMDtcbiAgICB0aGlzLmluSWN1ID0gZmFsc2U7XG4gICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNyZWF0ZUkxOG5NZXNzYWdlID0gY3JlYXRlSTE4bk1lc3NhZ2VGYWN0b3J5KGludGVycG9sYXRpb25Db25maWcpO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgLy8gYWRkIGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2VcbiAgcHJpdmF0ZSBhZGRNZXNzYWdlKGFzdDogaHRtbC5Ob2RlW10sIHttZWFuaW5nID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBpZCA9IFwiXCJ9ID0ge30pOiBpMThuLk1lc3NhZ2UgfCBudWxsIHtcbiAgICBpZiAoXG4gICAgICBhc3QubGVuZ3RoID09PSAwIHx8XG4gICAgICAoYXN0Lmxlbmd0aCA9PT0gMSAmJiBhc3RbMF0gaW5zdGFuY2VvZiBodG1sLkF0dHJpYnV0ZSAmJiAhKGFzdFswXSBhcyBodG1sLkF0dHJpYnV0ZSkudmFsdWUpXG4gICAgKSB7XG4gICAgICAvLyBEbyBub3QgY3JlYXRlIGVtcHR5IG1lc3NhZ2VzXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jcmVhdGVJMThuTWVzc2FnZShhc3QsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZCk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gbWVzc2FnZSBnaXZlbiB0aGUgYFRyYW5zbGF0aW9uQnVuZGxlYFxuICAvLyBUaGlzIGlzIHVzZWQgZm9yIHRyYW5zbGF0aW5nIGVsZW1lbnRzIC8gYmxvY2tzIC0gc2VlIGBfdHJhbnNsYXRlQXR0cmlidXRlc2AgZm9yIGF0dHJpYnV0ZXNcbiAgLy8gbm8tb3Agd2hlbiBjYWxsZWQgaW4gZXh0cmFjdGlvbiBtb2RlIChyZXR1cm5zIFtdKVxuICBwcml2YXRlIHRyYW5zbGF0ZU1lc3NhZ2UoZWw6IGh0bWwuTm9kZSwgbWVzc2FnZTogaTE4bi5NZXNzYWdlKTogaHRtbC5Ob2RlW10ge1xuICAgIGlmIChtZXNzYWdlICYmIHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy50cmFuc2xhdGlvbnMuZ2V0KG1lc3NhZ2UsIHRoaXMucGFyYW1zKTtcbiAgICAgIGlmIChub2Rlcykge1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGVsLCBgVHJhbnNsYXRpb24gdW5hdmFpbGFibGUgZm9yIG1lc3NhZ2UgaWQ9XCIke3RoaXMudHJhbnNsYXRpb25zLmRpZ2VzdChtZXNzYWdlKX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIG5vZGUgYXMgYSBjaGlsZCBvZiB0aGUgYmxvY2sgd2hlbjpcbiAgICogLSB3ZSBhcmUgaW4gYSBibG9jayxcbiAgICogLSB3ZSBhcmUgbm90IGluc2lkZSBhIElDVSBtZXNzYWdlICh0aG9zZSBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5KSxcbiAgICogLSB0aGUgbm9kZSBpcyBhIFwiZGlyZWN0IGNoaWxkXCIgb2YgdGhlIGJsb2NrXG4gICAqL1xuICBwcml2YXRlIG1heUJlQWRkQmxvY2tDaGlsZHJlbihub2RlOiBodG1sLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbkkxOG5CbG9jayAmJiAhdGhpcy5pbkljdSAmJiB0aGlzLmRlcHRoID09PSB0aGlzLmJsb2NrU3RhcnREZXB0aCkge1xuICAgICAgdGhpcy5ibG9ja0NoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoZSBzdGFydCBvZiBhIHNlY3Rpb24sIHNlZSBgX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbmBcbiAgICovXG4gIHByaXZhdGUgb3BlblRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIHN0YXJ0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSB0cmFuc2xhdGFibGUgc2VjdGlvbiBjb3VsZCBiZTpcbiAgICogLSB0aGUgY29udGVudCBvZiB0cmFuc2xhdGFibGUgZWxlbWVudCxcbiAgICogLSBub2RlcyBiZXR3ZWVuIGA8IS0tIGkxOG4gLS0+YCBhbmQgYDwhLS0gL2kxOG4gLS0+YCBjb21tZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCAhPT0gdm9pZCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgYSBzZWN0aW9uLlxuICAgKlxuICAgKiBJZiBhIHNlY3Rpb24gaGFzIG9ubHkgb25lIHNpZ25pZmljYW50IGNoaWxkcmVuIChjb21tZW50cyBub3Qgc2lnbmlmaWNhbnQpIHRoZW4gd2Ugc2hvdWxkIG5vdFxuICAgKiBrZWVwIHRoZSBtZXNzYWdlIGZyb20gdGhpcyBjaGlsZHJlbjpcbiAgICpcbiAgICogYDxwIGkxOG49XCJtZWFuaW5nfGRlc2NyaXB0aW9uXCI+e0lDVSBtZXNzYWdlfTwvcD5gIHdvdWxkIHByb2R1Y2UgdHdvIG1lc3NhZ2VzOlxuICAgKiAtIG9uZSBmb3IgdGhlIDxwPiBjb250ZW50IHdpdGggbWVhbmluZyBhbmQgZGVzY3JpcHRpb24sXG4gICAqIC0gYW5vdGhlciBvbmUgZm9yIHRoZSBJQ1UgbWVzc2FnZS5cbiAgICpcbiAgICogSW4gdGhpcyBjYXNlIHRoZSBsYXN0IG1lc3NhZ2UgaXMgZGlzY2FyZGVkIGFzIGl0IGNvbnRhaW5zIGxlc3MgaW5mb3JtYXRpb24gKHRoZSBBU1QgaXNcbiAgICogb3RoZXJ3aXNlIGlkZW50aWNhbCkuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB3ZSBzaG91bGQgc3RpbGwga2VlcCBtZXNzYWdlcyBleHRyYWN0ZWQgZnJvbSBhdHRyaWJ1dGVzIGluc2lkZSB0aGUgc2VjdGlvbiAoaWUgaW4gdGhlXG4gICAqIElDVSBtZXNzYWdlIGhlcmUpXG4gICAqL1xuICBwcml2YXRlIF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb24obm9kZTogaHRtbC5Ob2RlLCBkaXJlY3RDaGlsZHJlbjogaHRtbC5Ob2RlW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNJblRyYW5zbGF0YWJsZVNlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5leHBlY3RlZCBzZWN0aW9uIGVuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0O1xuICAgIGNvbnN0IHNpZ25pZmljYW50Q2hpbGRyZW46IG51bWJlciA9IGRpcmVjdENoaWxkcmVuLnJlZHVjZShcbiAgICAgIChjb3VudDogbnVtYmVyLCBuOiBodG1sLk5vZGUpOiBudW1iZXIgPT4gY291bnQgKyAobiBpbnN0YW5jZW9mIGh0bWwuQ29tbWVudCA/IDAgOiAxKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgaWYgKHNpZ25pZmljYW50Q2hpbGRyZW4gPT09IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnRJbmRleCE7IGktLSkge1xuICAgICAgICBjb25zdCBhc3QgPSB0aGlzLm1lc3NhZ2VzW2ldLm5vZGVzO1xuICAgICAgICBpZiAoIShhc3QubGVuZ3RoID09PSAxICYmIGFzdFswXSBpbnN0YW5jZW9mIGkxOG4uVGV4dCkpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKG5vZGU6IGh0bWwuTm9kZSwgbXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbXNnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0STE4bkF0dHIocDogaHRtbC5FbGVtZW50KTogaHRtbC5BdHRyaWJ1dGUgfCBudWxsIHtcbiAgcmV0dXJuIHAuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gX0kxOE5fQVRUUikgfHwgbnVsbDtcbn1cbiIsImltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIExPQ0FMRV9JRCxcbiAgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gIE9wdGlvbmFsLFxuICBUUkFOU0xBVElPTlMsXG4gIFRSQU5TTEFUSU9OU19GT1JNQVRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7eGxpZmZEaWdlc3QsIHhsaWZmTG9hZFRvSTE4bn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveGxpZmZcIjtcbmltcG9ydCB7eGxpZmYyRGlnZXN0LCB4bGlmZjJMb2FkVG9JMThufSBmcm9tIFwiLi9zZXJpYWxpemVycy94bGlmZjJcIjtcbmltcG9ydCB7eHRiRGlnZXN0LCB4dGJMb2FkVG9JMThuLCB4dGJNYXBwZXJ9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3h0YlwiO1xuaW1wb3J0IHtIdG1sUGFyc2VyLCBUcmFuc2xhdGlvbkJ1bmRsZX0gZnJvbSBcIi4vcGFyc2VyL2h0bWxcIjtcbmltcG9ydCB7STE4bk1lc3NhZ2VzQnlJZCwgc2VyaWFsaXplTm9kZXN9IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vYXN0L2kxOG5fYXN0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJMThuIHtcbiAgKGRlZjogc3RyaW5nIHwgSTE4bkRlZiwgcGFyYW1zPzoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkRlZiB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBtZWFuaW5nPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE1JU1NJTkdfVFJBTlNMQVRJT05fU1RSQVRFR1kgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k+KFxuICBcIk1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5XCJcbik7XG5cbi8qKlxuICogQSBzcGVjdWxhdGl2ZSBwb2x5ZmlsbCB0byB1c2UgaTE4biBjb2RlIHRyYW5zbGF0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCkgZm9ybWF0OiBzdHJpbmcsXG4gICAgQEluamVjdChUUkFOU0xBVElPTlMpIHRyYW5zbGF0aW9uczogc3RyaW5nLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUlTU0lOR19UUkFOU0xBVElPTl9TVFJBVEVHWSlcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneTogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPSBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5XYXJuaW5nXG4gICkge1xuICAgIGxldCBsb2FkRmN0OiAoY29udGVudDogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4gSTE4bk1lc3NhZ2VzQnlJZDtcbiAgICBsZXQgZGlnZXN0OiAobWVzc2FnZTogTWVzc2FnZSkgPT4gc3RyaW5nO1xuICAgIGxldCBjcmVhdGVNYXBwZXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gbnVsbDtcbiAgICBmb3JtYXQgPSAoZm9ybWF0IHx8IFwieGxmXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgXCJ4dGJcIjpcbiAgICAgICAgbG9hZEZjdCA9IHh0YkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHh0YkRpZ2VzdDtcbiAgICAgICAgY3JlYXRlTWFwcGVyID0geHRiTWFwcGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ4bGlmZjJcIjpcbiAgICAgIGNhc2UgXCJ4bGYyXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZjJMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4bGlmZjJEaWdlc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInhsaWZmXCI6XG4gICAgICBjYXNlIFwieGxmXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4bGlmZkxvYWRUb0kxOG47XG4gICAgICAgIGRpZ2VzdCA9IHhsaWZmRGlnZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0cmFuc2xhdGlvbnMgZm9ybWF0ICR7Zm9ybWF0fWApO1xuICAgIH1cbiAgICBjb25zdCBodG1sUGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uc0J1bmRsZSA9IFRyYW5zbGF0aW9uQnVuZGxlLmxvYWQoXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBcImkxOG5cIixcbiAgICAgIGRpZ2VzdCxcbiAgICAgIGNyZWF0ZU1hcHBlcixcbiAgICAgIGxvYWRGY3QsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVxuICAgICk7XG5cbiAgICAvLyB0b2RvIHVzZSBpbnRlcnBvbGF0aW9uIGNvbmZpZ1xuICAgIHJldHVybiAoZGVmOiBzdHJpbmcgfCBJMThuRGVmLCBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0eXBlb2YgZGVmID09PSBcInN0cmluZ1wiID8gZGVmIDogZGVmLnZhbHVlO1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgZGVmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1ldGFkYXRhW1wiaWRcIl0gPSBkZWYuaWQ7XG4gICAgICAgIG1ldGFkYXRhW1wibWVhbmluZ1wiXSA9IGRlZi5tZWFuaW5nO1xuICAgICAgICBtZXRhZGF0YVtcImRlc2NyaXB0aW9uXCJdID0gZGVmLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgY29uc3QgaHRtbFBhcnNlclJlc3VsdCA9IGh0bWxQYXJzZXIucGFyc2UoY29udGVudCwgXCJcIiwgdHJ1ZSk7XG5cbiAgICAgIGlmIChodG1sUGFyc2VyUmVzdWx0LmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgaHRtbFBhcnNlclJlc3VsdC5lcnJvcnM7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lcmdlZE5vZGVzID0gaHRtbFBhcnNlci5tZXJnZVRyYW5zbGF0aW9ucyhcbiAgICAgICAgaHRtbFBhcnNlclJlc3VsdC5yb290Tm9kZXMsXG4gICAgICAgIHRyYW5zbGF0aW9uc0J1bmRsZSxcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgW1wid3JhcHBlclwiXVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZU5vZGVzKG1lcmdlZE5vZGVzLnJvb3ROb2RlcywgbG9jYWxlLCBwYXJhbXMpLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsImNoYXJzLiRFT0YiLCJjaGFycy4kTFQiLCJjaGFycy4kQkFORyIsImNoYXJzLiRMQlJBQ0tFVCIsImNoYXJzLiRNSU5VUyIsImNoYXJzLiRTTEFTSCIsImNoYXJzLiRSQlJBQ0UiLCJjaGFycy4kTEYiLCJjaGFycy4kQ1IiLCJjaGFycy4kQU1QRVJTQU5EIiwiY2hhcnMuJEhBU0giLCJjaGFycy4keCIsImNoYXJzLiRYIiwiY2hhcnMuJFNFTUlDT0xPTiIsImNoYXJzLiRSQlJBQ0tFVCIsImNoYXJzLiRHVCIsImNoYXJzLiRDT0xPTiIsImNoYXJzLmlzQXNjaWlMZXR0ZXIiLCJjaGFycy4kRVEiLCJjaGFycy4kU1EiLCJjaGFycy4kRFEiLCJjaGFycy4kTEJSQUNFIiwiY2hhcnMuJENPTU1BIiwiY2hhcnMuaXNXaGl0ZXNwYWNlIiwiY2hhcnMuJGEiLCJjaGFycy4keiIsImNoYXJzLiRBIiwiY2hhcnMuJFoiLCJjaGFycy4kMCIsImNoYXJzLiQ5IiwiY2hhcnMuaXNBc2NpaUhleERpZ2l0IiwiY2hhcnMuaXNEaWdpdCIsImxleC50b2tlbml6ZSIsImxleC5Ub2tlblR5cGUiLCJodG1sLkNvbW1lbnQiLCJodG1sLkV4cGFuc2lvbiIsImxleC5Ub2tlbiIsImh0bWwuRXhwYW5zaW9uQ2FzZSIsImh0bWwuVGV4dCIsImh0bWwuRWxlbWVudCIsImh0bWwuQXR0cmlidXRlIiwiaTE4bi5SZWN1cnNlVmlzaXRvciIsInNlcmlhbGl6ZU5vZGVzIiwiU2VyaWFsaXplclZpc2l0b3IiLCJtbC52aXNpdEFsbCIsImkxOG4uVGV4dCIsImkxOG4uUGxhY2Vob2xkZXIiLCJpMThuLkNvbnRhaW5lciIsImkxOG4uSWN1IiwiX1BMQUNFSE9MREVSX1RBRyIsIl9TT1VSQ0VfVEFHIiwiX1RBUkdFVF9UQUciLCJfVU5JVF9UQUciLCJYbWxUb0kxOG4iLCJUb2tlbiIsIlRva2VuVHlwZSIsImNoYXJzLiRTUEFDRSIsImNoYXJzLiRQRVJJT0QiLCJjaGFycy4kTFBBUkVOIiwiY2hhcnMuJFJQQVJFTiIsImNoYXJzLiRQTFVTIiwiY2hhcnMuJFNUQVIiLCJjaGFycy4kUEVSQ0VOVCIsImNoYXJzLiRDQVJFVCIsImNoYXJzLiRRVUVTVElPTiIsImNoYXJzLiRCQVIiLCJjaGFycy4kTkJTUCIsImNoYXJzLiRCQUNLU0xBU0giLCJjaGFycy4kdSIsImNoYXJzLiRfIiwiY2hhcnMuJCQiLCJjaGFycy4kZSIsImNoYXJzLiRFIiwiY2hhcnMuJEJUIiwiY2hhcnMuJG4iLCJjaGFycy4kZiIsImNoYXJzLiRGRiIsImNoYXJzLiRyIiwiY2hhcnMuJHQiLCJjaGFycy4kVEFCIiwiY2hhcnMuJHYiLCJjaGFycy4kVlRBQiIsIlBhcnNlciIsImh0bWwudmlzaXRBbGwiLCJpMThuLk1lc3NhZ2UiLCJpMThuLlRhZ1BsYWNlaG9sZGVyIiwiaTE4bi5JY3VQbGFjZWhvbGRlciIsIlZpc2l0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBZ0JBLElBQUE7SUFDRSxjQUFtQixLQUFhLEVBQVMsVUFBMkI7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQWlCO0tBQUk7Ozs7OztJQUN4RSxvQkFBSzs7Ozs7SUFBTCxVQUFNLE9BQWdCLEVBQUUsT0FBWTtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDO2VBcEJIO0lBcUJDLENBQUE7QUFMRCxBQU9BLElBQUE7SUFDRSxtQkFDUyxhQUNBLE1BQ0EsT0FDQSxZQUNBO1FBSkEsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gs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QUFDO0FBQ3RCLEFBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLEFBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8scUJBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMzQixBQUFPLHFCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUMxQixBQUFPLHFCQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDMUIsQUFBTyxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLEFBQU8scUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QixBQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEFBQU8scUJBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUMxQixBQUFPLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsQUFBTyxxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLEFBQU8scUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixBQUFPLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixBQUFPLHFCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFNUIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLEFBQU8scUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixBQUFPLHFCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0IsQUFBTyxxQkFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLEFBQU8scUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFckIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEFBQU8scUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixBQUFPLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsQUFBTyxxQkFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBRXRCLEFBQU8scUJBQU0sT0FB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LElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLFFBQVE7SUFDakIsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxHQUFHO0lBQ1AsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixHQUFHLEVBQUUsUUFBUTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixFQUFFLEVBQUUsR0FBRztJQUNQLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixLQUFLLEVBQUUsUUFBUTtJQUNmLEVBQUUsRUFBRSxRQUFRO0lBQ1osSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEdBQUcsRUFBRSxRQUFRO0lBQ2IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSxRQUFRO0lBQ2IsR0FBRyxFQUFFLFFBQVE7SUFDYixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsR0FBRyxFQUFFLFFBQVE7SUFDYixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxRQUFRO0lBQ2YsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLFFBQVE7SUFDakIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFD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LGtCQUFtQyxFQUFsQyxTQUFDLEVBQUUsU0FBQyxFQUFFLFNBQUM7SUFDbkIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FB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