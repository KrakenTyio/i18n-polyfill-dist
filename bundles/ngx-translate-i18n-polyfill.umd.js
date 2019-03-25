(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngx-translate/i18n-polyfill', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-translate'] = global['ngx-translate'] || {}, global['ngx-translate']['i18n-polyfill'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Text = (function () {
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
    var Expansion = (function () {
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
    var ExpansionCase = (function () {
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
    var Attribute = (function () {
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
    var Element = (function () {
        function Element(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
            if (startSourceSpan === void 0) {
                startSourceSpan = null;
            }
            if (endSourceSpan === void 0) {
                endSourceSpan = null;
            }
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
    var Comment = (function () {
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
        if (context === void 0) {
            context = null;
        }
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
    var Message = (function () {
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
    var Text$1 = (function () {
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
    var Container = (function () {
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
    var Icu = (function () {
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
    var TagPlaceholder = (function () {
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
    var Placeholder = (function () {
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
    var IcuPlaceholder = (function () {
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
    var RecurseVisitor = (function () {
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
    var Text$2 = (function () {
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
    var CR = (function (_super) {
        __extends(CR, _super);
        function CR(ws) {
            if (ws === void 0) {
                ws = 0;
            }
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
     */ ParseLocation = (function () {
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
    var ParseSourceFile = (function () {
        function ParseSourceFile(content, url) {
            if (url === void 0) {
                url = "";
            }
            this.content = content;
            this.url = url;
        }
        return ParseSourceFile;
    }());
    var ParseSourceSpan = (function () {
        function ParseSourceSpan(start, end, details) {
            if (details === void 0) {
                details = null;
            }
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
    var ParseError = (function () {
        function ParseError(span, msg, level) {
            if (level === void 0) {
                level = ParseErrorLevel.ERROR;
            }
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
     */ I18nError = (function (_super) {
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
    var InterpolationConfig = (function () {
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
    var Token = (function () {
        function Token(type, parts, sourceSpan) {
            this.type = type;
            this.parts = parts;
            this.sourceSpan = sourceSpan;
        }
        return Token;
    }());
    var TokenError = (function (_super) {
        __extends(TokenError, _super);
        function TokenError(errorMsg, tokenType, span) {
            var _this = _super.call(this, span, errorMsg) || this;
            _this.tokenType = tokenType;
            return _this;
        }
        return TokenError;
    }(ParseError));
    var TokenizeResult = (function () {
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
        if (tokenizeExpansionForms === void 0) {
            tokenizeExpansionForms = false;
        }
        if (interpolationConfig === void 0) {
            interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
        }
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
    var ControlFlowError = (function () {
        function ControlFlowError(error) {
            this.error = error;
        }
        return ControlFlowError;
    }());
    var Tokenizer = (function () {
        /**
         * @param _file The html source
         * @param _getTagDefinition
         * @param _tokenizeIcu Whether to tokenize ICU messages (considered as text nodes when false)
         * @param _interpolationConfig
         */
        function Tokenizer(_file, _getTagDefinition, _tokenizeIcu, _interpolationConfig) {
            if (_interpolationConfig === void 0) {
                _interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
            }
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
                    catch (e) {
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
                if (start === void 0) {
                    start = this._getLocation();
                }
                if (end === void 0) {
                    end = this._getLocation();
                }
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
                if (start === void 0) {
                    start = this._getLocation();
                }
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
                if (end === void 0) {
                    end = this._getLocation();
                }
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
                    catch (e) {
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
                var /** @type {?} */ prefix = ((null));
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
                catch (e) {
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
    var TreeError = (function (_super) {
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
    var ParseTreeResult = (function () {
        function ParseTreeResult(rootNodes, errors) {
            this.rootNodes = rootNodes;
            this.errors = errors;
        }
        return ParseTreeResult;
    }());
    var Parser = (function () {
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
                if (parseExpansionForms === void 0) {
                    parseExpansionForms = false;
                }
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
                var /** @type {?} */ tokensAndErrors = tokenize(source, url, this.getTagDefinition, parseExpansionForms, interpolationConfig);
                var /** @type {?} */ treeAndErrors = new _TreeBuilder(tokensAndErrors.tokens, this.getTagDefinition).build();
                return new ParseTreeResult(treeAndErrors.rootNodes, ((tokensAndErrors.errors)).concat(treeAndErrors.errors));
            };
        return Parser;
    }());
    var _TreeBuilder = (function () {
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
                var /** @type {?} */ valueSpan = ((undefined));
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
    var XmlTagDefinition = (function () {
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
    var HtmlTagDefinition = (function () {
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
     */ SimplePlaceholderMapper = (function (_super) {
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
    var /** @type {?} */ i18nSelectPipe = new common.I18nSelectPipe();
    var SerializerVisitor = (function () {
        function SerializerVisitor(locale, params) {
            this.params = params;
            this.i18nPluralPipe = new common.I18nPluralPipe(new common.NgLocaleLocalization(locale));
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
                if (join === void 0) {
                    join = "";
                }
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
     */ SerializerVisitor$1 = (function () {
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
     */ SerializerIgnoreIcuExpVisitor = (function (_super) {
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
    var XliffParser = (function () {
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
                        var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n = (function () {
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
    var Xliff2Parser = (function () {
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
                        var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                        var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                        var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n$1 = (function () {
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
    var XtbParser = (function () {
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
                                var /** @type {?} */ innerTextStart = ((element.startSourceSpan)).end.offset;
                                var /** @type {?} */ innerTextEnd = ((element.endSourceSpan)).start.offset;
                                var /** @type {?} */ content = ((element.startSourceSpan)).start.file.content;
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
    var XmlToI18n$2 = (function () {
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
    var ParserError = (function () {
        function ParserError(message, input, errLocation, ctxLocation) {
            this.input = input;
            this.errLocation = errLocation;
            this.ctxLocation = ctxLocation;
            this.message = "Parser Error: " + message + " " + errLocation + " [" + input + "] in " + ctxLocation;
        }
        return ParserError;
    }());
    var ParseSpan = (function () {
        function ParseSpan(start, end) {
            this.start = start;
            this.end = end;
        }
        return ParseSpan;
    }());
    var AST = (function () {
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
                if (context === void 0) {
                    context = null;
                }
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
     */ Quote = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
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
    var EmptyExpr = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                // do nothing
            };
        return EmptyExpr;
    }(AST));
    var ImplicitReceiver = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitImplicitReceiver(this, context);
            };
        return ImplicitReceiver;
    }(AST));
    /**
     * Multiple expressions separated by a semicolon.
     */
    var /**
     * Multiple expressions separated by a semicolon.
     */ Chain = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitChain(this, context);
            };
        return Chain;
    }(AST));
    var Conditional = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitConditional(this, context);
            };
        return Conditional;
    }(AST));
    var PropertyRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPropertyRead(this, context);
            };
        return PropertyRead;
    }(AST));
    var PropertyWrite = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPropertyWrite(this, context);
            };
        return PropertyWrite;
    }(AST));
    var SafePropertyRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitSafePropertyRead(this, context);
            };
        return SafePropertyRead;
    }(AST));
    var KeyedRead = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitKeyedRead(this, context);
            };
        return KeyedRead;
    }(AST));
    var KeyedWrite = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitKeyedWrite(this, context);
            };
        return KeyedWrite;
    }(AST));
    var BindingPipe = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPipe(this, context);
            };
        return BindingPipe;
    }(AST));
    var LiteralPrimitive = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralPrimitive(this, context);
            };
        return LiteralPrimitive;
    }(AST));
    var LiteralArray = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralArray(this, context);
            };
        return LiteralArray;
    }(AST));
    var LiteralMap = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitLiteralMap(this, context);
            };
        return LiteralMap;
    }(AST));
    var Interpolation = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitInterpolation(this, context);
            };
        return Interpolation;
    }(AST));
    var Binary = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitBinary(this, context);
            };
        return Binary;
    }(AST));
    var PrefixNot = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitPrefixNot(this, context);
            };
        return PrefixNot;
    }(AST));
    var NonNullAssert = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitNonNullAssert(this, context);
            };
        return NonNullAssert;
    }(AST));
    var MethodCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitMethodCall(this, context);
            };
        return MethodCall;
    }(AST));
    var SafeMethodCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitSafeMethodCall(this, context);
            };
        return SafeMethodCall;
    }(AST));
    var FunctionCall = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
                return visitor.visitFunctionCall(this, context);
            };
        return FunctionCall;
    }(AST));
    var ASTWithSource = (function (_super) {
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
                if (context === void 0) {
                    context = null;
                }
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
    var TemplateBinding = (function () {
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
    var Lexer = (function () {
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
    var Token$1 = (function () {
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
    var Scanner = (function () {
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
    var SplitInterpolation = (function () {
        function SplitInterpolation(strings, expressions, offsets) {
            this.strings = strings;
            this.expressions = expressions;
            this.offsets = offsets;
        }
        return SplitInterpolation;
    }());
    var TemplateBindingParseResult = (function () {
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
    var Parser$1 = (function () {
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
    var ParseAST = (function () {
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
             */ function () {
                return this.peek(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ParseAST.prototype, "inputIndex", {
            get: /**
             * @return {?}
             */ function () {
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
                if (isSafe === void 0) {
                    isSafe = false;
                }
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
                var /** @type {?} */ prefix = ((null));
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
                    var /** @type {?} */ name_2 = ((null));
                    var /** @type {?} */ expression = ((null));
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
                if (index === void 0) {
                    index = null;
                }
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
                if (index === void 0) {
                    index = null;
                }
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
    var SimpleExpressionChecker = (function () {
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
     */ PlaceholderRegistry = (function () {
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
    var I18nVisitor = (function () {
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
    var HtmlParser = (function (_super) {
        __extends(HtmlParser, _super);
        function HtmlParser(interpolationConfig) {
            if (interpolationConfig === void 0) {
                interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
            }
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
                if (parseExpansionForms === void 0) {
                    parseExpansionForms = false;
                }
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
                if (implicitTags === void 0) {
                    implicitTags = [];
                }
                var /** @type {?} */ visitor = new Visitor$4(implicitTags);
                // Construct a single fake root element
                var /** @type {?} */ wrapper = new Element("wrapper", [], nodes, /** @type {?} */ ((undefined)), undefined, undefined);
                return visitor.merge(wrapper, translations, this.interpolationConfig, params, metadata);
            };
        return HtmlParser;
    }(Parser));
    var ExtractionResult = (function () {
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
     */ TranslationBundle = (function () {
        function TranslationBundle(i18nNodesByMsgId, digest, interpolationConfig, missingTranslationStrategy, mapperFactory, console) {
            if (i18nNodesByMsgId === void 0) {
                i18nNodesByMsgId = {};
            }
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
                if (interpolationConfig === void 0) {
                    interpolationConfig = DEFAULT_INTERPOLATION_CONFIG;
                }
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
    var I18nToHtmlVisitor = (function () {
        function I18nToHtmlVisitor(_i18nNodesByMsgId, _digest, _mapperFactory, _missingTranslationStrategy, _interpolationConfig, _console) {
            if (_i18nNodesByMsgId === void 0) {
                _i18nNodesByMsgId = {};
            }
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
                    if (this._missingTranslationStrategy === core.MissingTranslationStrategy.Error) {
                        this._addError(srcMsg.nodes[0], "Missing translation for message \"" + id + "\"");
                    }
                    else if (this._console && this._missingTranslationStrategy === core.MissingTranslationStrategy.Warning) {
                        this._console.warn("Missing translation for message \"" + id + "\"");
                    }
                    nodes = srcMsg.nodes;
                    this._mapper = function (name) { return name; };
                }
                var /** @type {?} */ text = nodes.map(function (node) { return node.visit(_this); }).join("");
                var /** @type {?} */ context = ((this._contextStack.pop()));
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
     */ Visitor$4 = (function () {
        function Visitor$$1(_implicitTags) {
            if (_implicitTags === void 0) {
                _implicitTags = [];
            }
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
                if (metadata === void 0) {
                    metadata = {};
                }
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
                var /** @type {?} */ translatedChildNodes = ((undefined));
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
                        var /** @type {?} */ message = ((this.addMessage(el.children, this.metadata)));
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
                if (params === void 0) {
                    params = {};
                }
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
                    (ast.length === 1 && ast[0] instanceof Attribute && !((ast[0])).value)) {
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
             */ function () {
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
    var /** @type {?} */ MISSING_TRANSLATION_STRATEGY = new core.InjectionToken("MissingTranslationStrategy");
    /**
     * A speculative polyfill to use i18n code translations
     */
    var I18n = (function () {
        function I18n(format, translations, locale, missingTranslationStrategy) {
            if (missingTranslationStrategy === void 0) {
                missingTranslationStrategy = core.MissingTranslationStrategy.Warning;
            }
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
                if (params === void 0) {
                    params = {};
                }
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        I18n.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [core.TRANSLATIONS_FORMAT,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.TRANSLATIONS,] },] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
                { type: core.MissingTranslationStrategy, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MISSING_TRANSLATION_STRATEGY,] },] },
            ];
        };
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

    exports.I18n = I18n;
    exports.MISSING_TRANSLATION_STRATEGY = MISSING_TRANSLATION_STRATEGY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1pMThuLXBvbHlmaWxsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaTE4bl9hc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htbF9oZWxwZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9wYXJzZV91dGlsLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaW50ZXJwb2xhdGlvbl9jb25maWcudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9jaGFycy50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3RhZ3MudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2FzdC9sZXhlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3BhcnNlci50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvYXN0L3htbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9hc3QvaHRtbF90YWdzLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy9kaWdlc3QudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3hsaWZmLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9zZXJpYWxpemVycy94bGlmZjIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3htYi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvc2VyaWFsaXplcnMveHRiLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvYXN0LnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvbGV4ZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3BhcnNlci9wYXJzZXIudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL3NlcmlhbGl6ZXJzL3BsYWNlaG9sZGVyLnRzIiwibmc6Ly9Abmd4LXRyYW5zbGF0ZS9pMThuLXBvbHlmaWxsL3NyYy9wYXJzZXIvaTE4bi50cyIsIm5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC9zcmMvcGFyc2VyL2h0bWwudHMiLCJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvc3JjL2kxOG4tcG9seWZpbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChvW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tIFwiLi9wYXJzZV91dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbiBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjYXNlczogRXhwYW5zaW9uQ2FzZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHN3aXRjaFZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uQ2FzZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogTm9kZVtdLFxuICAgIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIHZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyBleHBTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFeHBhbnNpb25DYXNlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyB2YWx1ZVNwYW4/OiBQYXJzZVNvdXJjZVNwYW5cbiAgKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0QXR0cmlidXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGF0dHJzOiBBdHRyaWJ1dGVbXSxcbiAgICBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHB1YmxpYyBzdGFydFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiB8IG51bGwgPSBudWxsLFxuICAgIHB1YmxpYyBlbmRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4gfCBudWxsID0gbnVsbFxuICApIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgLy8gUmV0dXJuaW5nIGEgdHJ1dGh5IHZhbHVlIGZyb20gYHZpc2l0KClgIHdpbGwgcHJldmVudCBgdmlzaXRBbGwoKWAgZnJvbSB0aGUgY2FsbCB0byB0aGUgdHlwZWRcbiAgLy8gbWV0aG9kIGFuZCByZXN1bHQgcmV0dXJuZWQgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBpbmNsdWRlZCBpbiBgdmlzaXRBbGwoKWBzIHJlc3VsdCBhcnJheS5cbiAgdmlzaXQ/KG5vZGU6IE5vZGUsIGNvbnRleHQ6IGFueSk6IGFueTtcblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IEF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbW1lbnQoY29tbWVudDogQ29tbWVudCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IEV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRBbGwodmlzaXRvcjogVmlzaXRvciwgbm9kZXM6IE5vZGVbXSwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueVtdIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0IHZpc2l0ID0gdmlzaXRvci52aXNpdFxuICAgID8gKGFzdDogTm9kZSkgPT4gdmlzaXRvci52aXNpdCEoYXN0LCBjb250ZXh0KSB8fCBhc3QudmlzaXQodmlzaXRvciwgY29udGV4dClcbiAgICA6IChhc3Q6IE5vZGUpID0+IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgbm9kZXMuZm9yRWFjaChhc3QgPT4ge1xuICAgIGNvbnN0IGFzdFJlc3VsdCA9IHZpc2l0KGFzdCk7XG4gICAgaWYgKGFzdFJlc3VsdCkge1xuICAgICAgcmVzdWx0LnB1c2goYXN0UmVzdWx0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4vcGFyc2VfdXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIHNvdXJjZXM6IE1lc3NhZ2VTcGFuW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBzb3VyY2UgbWVzc2FnZSBBU1RcbiAgICogQHBhcmFtIHBsYWNlaG9sZGVycyBtYXBzIHBsYWNlaG9sZGVyIG5hbWVzIHRvIHN0YXRpYyBjb250ZW50XG4gICAqIEBwYXJhbSBwbGFjZWhvbGRlclRvTWVzc2FnZSBtYXBzIHBsYWNlaG9sZGVyIG5hbWVzIHRvIG1lc3NhZ2VzICh1c2VkIGZvciBuZXN0ZWQgSUNVIG1lc3NhZ2VzKVxuICAgKiBAcGFyYW0gbWVhbmluZ1xuICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIGlkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbm9kZXM6IE5vZGVbXSxcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXJzOiB7W3BoTmFtZTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBwdWJsaWMgcGxhY2Vob2xkZXJUb01lc3NhZ2U6IHtbcGhOYW1lOiBzdHJpbmddOiBNZXNzYWdlfSxcbiAgICBwdWJsaWMgbWVhbmluZzogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBpZDogc3RyaW5nXG4gICkge1xuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVQYXRoOiBub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsLFxuICAgICAgICAgIHN0YXJ0TGluZTogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5saW5lICsgMSxcbiAgICAgICAgICBzdGFydENvbDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5jb2wgKyAxLFxuICAgICAgICAgIGVuZExpbmU6IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLnNvdXJjZVNwYW4uZW5kLmxpbmUgKyAxLFxuICAgICAgICAgIGVuZENvbDogbm9kZXNbMF0uc291cmNlU3Bhbi5zdGFydC5jb2wgKyAxXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IFtdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBsaW5lIGFuZCBjb2x1bW5zIGluZGV4ZXMgYXJlIDEgYmFzZWRcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVNwYW4ge1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBzdGFydExpbmU6IG51bWJlcjtcbiAgc3RhcnRDb2w6IG51bWJlcjtcbiAgZW5kTGluZTogbnVtYmVyO1xuICBlbmRDb2w6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLy8gVE9ETyh2aWNiKTogZG8gd2UgcmVhbGx5IG5lZWQgdGhpcyBub2RlICh2cyBhbiBhcnJheSkgP1xuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSwgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENvbnRhaW5lcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWN1IGltcGxlbWVudHMgTm9kZSB7XG4gIHB1YmxpYyBleHByZXNzaW9uUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGV4cHJlc3Npb246IHN0cmluZyxcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjYXNlczoge1trOiBzdHJpbmddOiBOb2RlfSxcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEljdSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRhZzogc3RyaW5nLFxuICAgIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIHB1YmxpYyBzdGFydE5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgY2xvc2VOYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGNoaWxkcmVuOiBOb2RlW10sXG4gICAgcHVibGljIGlzVm9pZDogYm9vbGVhbixcbiAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuXG4gICkge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRhZ1BsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFBsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJY3VQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IEljdSwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cblxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEljdVBsYWNlaG9sZGVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IENvbnRhaW5lciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IFRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbi8vIENsb25lIHRoZSBBU1RcbmV4cG9ydCBjbGFzcyBDbG9uZVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQsIGNvbnRleHQ/OiBhbnkpOiBUZXh0IHtcbiAgICByZXR1cm4gbmV3IFRleHQodGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogQ29udGFpbmVyIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbi5tYXAobiA9PiBuLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgICByZXR1cm4gbmV3IENvbnRhaW5lcihjaGlsZHJlbiwgY29udGFpbmVyLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBJY3UsIGNvbnRleHQ/OiBhbnkpOiBJY3Uge1xuICAgIGNvbnN0IGNhc2VzOiB7W2s6IHN0cmluZ106IE5vZGV9ID0ge307XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGtleSA9PiAoY2FzZXNba2V5XSA9IGljdS5jYXNlc1trZXldLnZpc2l0KHRoaXMsIGNvbnRleHQpKSk7XG4gICAgY29uc3QgbXNnID0gbmV3IEljdShpY3UuZXhwcmVzc2lvbiwgaWN1LnR5cGUsIGNhc2VzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgbXNnLmV4cHJlc3Npb25QbGFjZWhvbGRlciA9IGljdS5leHByZXNzaW9uUGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIG1zZztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IFRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogVGFnUGxhY2Vob2xkZXIge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGguY2hpbGRyZW4ubWFwKG4gPT4gbi52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIG5ldyBUYWdQbGFjZWhvbGRlcihwaC50YWcsIHBoLmF0dHJzLCBwaC5zdGFydE5hbWUsIHBoLmNsb3NlTmFtZSwgY2hpbGRyZW4sIHBoLmlzVm9pZCwgcGguc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IFBsYWNlaG9sZGVyIHtcbiAgICByZXR1cm4gbmV3IFBsYWNlaG9sZGVyKHBoLnZhbHVlLCBwaC5uYW1lLCBwaC5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IEljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogSWN1UGxhY2Vob2xkZXIge1xuICAgIHJldHVybiBuZXcgSWN1UGxhY2Vob2xkZXIocGgudmFsdWUsIHBoLm5hbWUsIHBoLnNvdXJjZVNwYW4pO1xuICB9XG59XG5cbi8vIFZpc2l0IGFsbCB0aGUgbm9kZXMgcmVjdXJzaXZlbHlcbmV4cG9ydCBjbGFzcyBSZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogVGV4dCwgY29udGV4dD86IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IEljdSwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHBoLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBJY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWaXNpdG9yIHtcbiAgdmlzaXRUYWcodGFnOiBUYWcpOiBhbnk7XG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KTogYW55O1xuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IGFueTtcbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiBEZWNsYXJhdGlvbik6IGFueTtcbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IERvY3R5cGUpOiBhbnk7XG59XG5cbmNsYXNzIFZpc2l0b3IgaW1wbGVtZW50cyBJVmlzaXRvciB7XG4gIHZpc2l0VGFnKHRhZzogVGFnKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHJBdHRycyA9IHRoaXMuX3NlcmlhbGl6ZUF0dHJpYnV0ZXModGFnLmF0dHJzKTtcbiAgICBpZiAodGFnLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGA8JHt0YWcubmFtZX0ke3N0ckF0dHJzfS8+YDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJDaGlsZHJlbiA9IHRhZy5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9PiR7c3RyQ2hpbGRyZW4uam9pbihcIlwiKX08LyR7dGFnLm5hbWV9PmA7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogVGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIF9lc2NhcGVYbWwodGV4dC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgZWxlbWVudC5hdHRycy5mb3JFYWNoKChhdHRyOiBtbC5BdHRyaWJ1dGUpID0+IHtcbiAgICAgIGF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhZyA9IG5ldyBUYWcoZWxlbWVudC5uYW1lLCBhdHRycywgZWxlbWVudC5jaGlsZHJlbiBhcyBhbnkpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0VGFnKHRhZyk7XG4gIH1cblxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDw/eG1sJHt0aGlzLl9zZXJpYWxpemVBdHRyaWJ1dGVzKGRlY2wuYXR0cnMpfSA/PmA7XG4gIH1cblxuICBwcml2YXRlIF9zZXJpYWxpemVBdHRyaWJ1dGVzKGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30pIHtcbiAgICBjb25zdCBzdHJBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKVxuICAgICAgLm1hcCgobmFtZTogc3RyaW5nKSA9PiBgJHtuYW1lfT1cIiR7X2VzY2FwZVhtbChhdHRyc1tuYW1lXSl9XCJgKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiBzdHJBdHRycy5sZW5ndGggPiAwID8gXCIgXCIgKyBzdHJBdHRycyA6IFwiXCI7XG4gIH1cblxuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogRG9jdHlwZSk6IGFueSB7XG4gICAgcmV0dXJuIGA8IURPQ1RZUEUgJHtkb2N0eXBlLnJvb3RUYWd9IFtcXG4ke2RvY3R5cGUuZHRkfVxcbl0+YDtcbiAgfVxufVxuXG5jb25zdCBfdmlzaXRvciA9IG5ldyBWaXNpdG9yKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUobm9kZXM6IE5vZGVbXSk6IHN0cmluZyB7XG4gIHJldHVybiBub2Rlcy5tYXAoKG5vZGU6IE5vZGUpOiBzdHJpbmcgPT4gbm9kZS52aXNpdChfdmlzaXRvcikpLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRGVjbGFyYXRpb24gaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGVjbGFyYXRpb24odGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3R5cGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvb3RUYWc6IHN0cmluZywgcHVibGljIGR0ZDogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERvY3R5cGUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhZyBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHt9LCBwdWJsaWMgY2hpbGRyZW46IE5vZGVbXSA9IFtdKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRhZyh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IHN0cmluZykge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZXh0KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDUiBleHRlbmRzIFRleHQge1xuICBjb25zdHJ1Y3Rvcih3cyA9IDApIHtcbiAgICBzdXBlcihgXFxuJHtuZXcgQXJyYXkod3MgKyAxKS5qb2luKFwiIFwiKX1gKTtcbiAgfVxufVxuXG5jb25zdCBfRVNDQVBFRF9DSEFSUzogW1JlZ0V4cCwgc3RyaW5nXVtdID0gW1xuICBbLyYvZywgXCImYW1wO1wiXSxcbiAgWy9cIi9nLCBcIiZxdW90O1wiXSxcbiAgWy8nL2csIFwiJmFwb3M7XCJdLFxuICBbLzwvZywgXCImbHQ7XCJdLFxuICBbLz4vZywgXCImZ3Q7XCJdXG5dO1xuXG5mdW5jdGlvbiBfZXNjYXBlWG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBfRVNDQVBFRF9DSEFSUy5yZWR1Y2UoKHN0cjogc3RyaW5nLCBlbnRyeTogW1JlZ0V4cCwgc3RyaW5nXSkgPT4gc3RyLnJlcGxhY2UoZW50cnlbMF0sIGVudHJ5WzFdKSwgdGV4dCk7XG59XG4iLCJpbXBvcnQge0kxOG5EZWZ9IGZyb20gXCIuLi9pMThuLXBvbHlmaWxsXCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhcnNlTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBwdWJsaWMgb2Zmc2V0OiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsIHB1YmxpYyBjb2w6IG51bWJlcikge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCAhPSBudWxsID8gYCR7dGhpcy5saW5lfToke3RoaXMuY29sfWAgOiBcIlwiO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBzb3VyY2UgYXJvdW5kIHRoZSBsb2NhdGlvblxuICAvLyBVcCB0byBgbWF4Q2hhcnNgIG9yIGBtYXhMaW5lc2Agb24gZWFjaCBzaWRlIG9mIHRoZSBsb2NhdGlvblxuICBnZXRDb250ZXh0KG1heENoYXJzOiBudW1iZXIsIG1heExpbmVzOiBudW1iZXIpOiB7YmVmb3JlOiBzdHJpbmc7IGFmdGVyOiBzdHJpbmd9IHwgbnVsbCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZmlsZS5jb250ZW50O1xuICAgIGxldCBzdGFydE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHN0YXJ0T2Zmc2V0ICE9IG51bGwpIHtcbiAgICAgIGlmIChzdGFydE9mZnNldCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdGFydE9mZnNldCA9IGNvbnRlbnQubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBlbmRPZmZzZXQgPSBzdGFydE9mZnNldDtcbiAgICAgIGxldCBjdHhDaGFycyA9IDA7XG4gICAgICBsZXQgY3R4TGluZXMgPSAwO1xuXG4gICAgICB3aGlsZSAoY3R4Q2hhcnMgPCBtYXhDaGFycyAmJiBzdGFydE9mZnNldCA+IDApIHtcbiAgICAgICAgc3RhcnRPZmZzZXQtLTtcbiAgICAgICAgY3R4Q2hhcnMrKztcbiAgICAgICAgaWYgKGNvbnRlbnRbc3RhcnRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3R4Q2hhcnMgPSAwO1xuICAgICAgY3R4TGluZXMgPSAwO1xuICAgICAgd2hpbGUgKGN0eENoYXJzIDwgbWF4Q2hhcnMgJiYgZW5kT2Zmc2V0IDwgY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGVuZE9mZnNldCsrO1xuICAgICAgICBjdHhDaGFycysrO1xuICAgICAgICBpZiAoY29udGVudFtlbmRPZmZzZXRdID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgaWYgKCsrY3R4TGluZXMgPT09IG1heExpbmVzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlOiBjb250ZW50LnN1YnN0cmluZyhzdGFydE9mZnNldCwgdGhpcy5vZmZzZXQpLFxuICAgICAgICBhZnRlcjogY29udGVudC5zdWJzdHJpbmcodGhpcy5vZmZzZXQsIGVuZE9mZnNldCArIDEpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNvdXJjZUZpbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGVudDogc3RyaW5nLCBwdWJsaWMgdXJsID0gXCJcIikge31cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlU291cmNlU3BhbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFydDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGVuZDogUGFyc2VMb2NhdGlvbiwgcHVibGljIGRldGFpbHM6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBQYXJzZUVycm9yTGV2ZWwge1xuICBXQVJOSU5HLFxuICBFUlJPUlxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgcHVibGljIG1zZzogc3RyaW5nLFxuICAgIHB1YmxpYyBsZXZlbDogUGFyc2VFcnJvckxldmVsID0gUGFyc2VFcnJvckxldmVsLkVSUk9SXG4gICkge31cblxuICBjb250ZXh0dWFsTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuc3Bhbi5zdGFydC5nZXRDb250ZXh0KDEwMCwgMyk7XG4gICAgcmV0dXJuIGN0eCA/IGAgKFwiJHtjdHguYmVmb3JlfVske1BhcnNlRXJyb3JMZXZlbFt0aGlzLmxldmVsXX0gLT5dJHtjdHguYWZ0ZXJ9XCIpYCA6IFwiXCI7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLnNwYW4uZGV0YWlscyA/IGAsICR7dGhpcy5zcGFuLmRldGFpbHN9YCA6IFwiXCI7XG4gICAgcmV0dXJuIGAke3RoaXMubXNnfSR7dGhpcy5jb250ZXh0dWFsTWVzc2FnZSgpfTogJHt0aGlzLnNwYW4uc3RhcnR9JHtkZXRhaWxzfWA7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpMThuIGVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgSTE4bkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbXNnOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuLCBtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnRlcnBvbGF0aW9uQ29uZmlnIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBzdHJpbmcsIHB1YmxpYyBlbmQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc6IEludGVycG9sYXRpb25Db25maWcgPSBuZXcgSW50ZXJwb2xhdGlvbkNvbmZpZyhcInt7XCIsIFwifX1cIik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjb25zdCAkRU9GID0gMDtcbmV4cG9ydCBjb25zdCAkVEFCID0gOTtcbmV4cG9ydCBjb25zdCAkTEYgPSAxMDtcbmV4cG9ydCBjb25zdCAkVlRBQiA9IDExO1xuZXhwb3J0IGNvbnN0ICRGRiA9IDEyO1xuZXhwb3J0IGNvbnN0ICRDUiA9IDEzO1xuZXhwb3J0IGNvbnN0ICRTUEFDRSA9IDMyO1xuZXhwb3J0IGNvbnN0ICRCQU5HID0gMzM7XG5leHBvcnQgY29uc3QgJERRID0gMzQ7XG5leHBvcnQgY29uc3QgJEhBU0ggPSAzNTtcbmV4cG9ydCBjb25zdCAkJCA9IDM2O1xuZXhwb3J0IGNvbnN0ICRQRVJDRU5UID0gMzc7XG5leHBvcnQgY29uc3QgJEFNUEVSU0FORCA9IDM4O1xuZXhwb3J0IGNvbnN0ICRTUSA9IDM5O1xuZXhwb3J0IGNvbnN0ICRMUEFSRU4gPSA0MDtcbmV4cG9ydCBjb25zdCAkUlBBUkVOID0gNDE7XG5leHBvcnQgY29uc3QgJFNUQVIgPSA0MjtcbmV4cG9ydCBjb25zdCAkUExVUyA9IDQzO1xuZXhwb3J0IGNvbnN0ICRDT01NQSA9IDQ0O1xuZXhwb3J0IGNvbnN0ICRNSU5VUyA9IDQ1O1xuZXhwb3J0IGNvbnN0ICRQRVJJT0QgPSA0NjtcbmV4cG9ydCBjb25zdCAkU0xBU0ggPSA0NztcbmV4cG9ydCBjb25zdCAkQ09MT04gPSA1ODtcbmV4cG9ydCBjb25zdCAkU0VNSUNPTE9OID0gNTk7XG5leHBvcnQgY29uc3QgJExUID0gNjA7XG5leHBvcnQgY29uc3QgJEVRID0gNjE7XG5leHBvcnQgY29uc3QgJEdUID0gNjI7XG5leHBvcnQgY29uc3QgJFFVRVNUSU9OID0gNjM7XG5cbmV4cG9ydCBjb25zdCAkMCA9IDQ4O1xuZXhwb3J0IGNvbnN0ICQ5ID0gNTc7XG5cbmV4cG9ydCBjb25zdCAkQSA9IDY1O1xuZXhwb3J0IGNvbnN0ICRFID0gNjk7XG5leHBvcnQgY29uc3QgJEYgPSA3MDtcbmV4cG9ydCBjb25zdCAkWCA9IDg4O1xuZXhwb3J0IGNvbnN0ICRaID0gOTA7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNLRVQgPSA5MTtcbmV4cG9ydCBjb25zdCAkQkFDS1NMQVNIID0gOTI7XG5leHBvcnQgY29uc3QgJFJCUkFDS0VUID0gOTM7XG5leHBvcnQgY29uc3QgJENBUkVUID0gOTQ7XG5leHBvcnQgY29uc3QgJF8gPSA5NTtcblxuZXhwb3J0IGNvbnN0ICRhID0gOTc7XG5leHBvcnQgY29uc3QgJGUgPSAxMDE7XG5leHBvcnQgY29uc3QgJGYgPSAxMDI7XG5leHBvcnQgY29uc3QgJG4gPSAxMTA7XG5leHBvcnQgY29uc3QgJHIgPSAxMTQ7XG5leHBvcnQgY29uc3QgJHQgPSAxMTY7XG5leHBvcnQgY29uc3QgJHUgPSAxMTc7XG5leHBvcnQgY29uc3QgJHYgPSAxMTg7XG5leHBvcnQgY29uc3QgJHggPSAxMjA7XG5leHBvcnQgY29uc3QgJHogPSAxMjI7XG5cbmV4cG9ydCBjb25zdCAkTEJSQUNFID0gMTIzO1xuZXhwb3J0IGNvbnN0ICRCQVIgPSAxMjQ7XG5leHBvcnQgY29uc3QgJFJCUkFDRSA9IDEyNTtcbmV4cG9ydCBjb25zdCAkTkJTUCA9IDE2MDtcblxuZXhwb3J0IGNvbnN0ICRQSVBFID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRUSUxEQSA9IDEyNjtcbmV4cG9ydCBjb25zdCAkQVQgPSA2NDtcblxuZXhwb3J0IGNvbnN0ICRCVCA9IDk2O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJFRBQiAmJiBjb2RlIDw9ICRTUEFDRSkgfHwgY29kZSA9PT0gJE5CU1A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gJDAgPD0gY29kZSAmJiBjb2RlIDw9ICQ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUxldHRlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChjb2RlID49ICRhICYmIGNvZGUgPD0gJHopIHx8IChjb2RlID49ICRBICYmIGNvZGUgPD0gJFopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc2NpaUhleERpZ2l0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGNvZGUgPj0gJGEgJiYgY29kZSA8PSAkZikgfHwgKGNvZGUgPj0gJEEgJiYgY29kZSA8PSAkRikgfHwgaXNEaWdpdChjb2RlKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGVudW0gVGFnQ29udGVudFR5cGUge1xuICBSQVdfVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBQQVJTQUJMRV9EQVRBXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnRGVmaW5pdGlvbiB7XG4gIGNsb3NlZEJ5UGFyZW50OiBib29sZWFuO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZyB8IG51bGw7XG4gIGNvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZTtcbiAgaXNWb2lkOiBib29sZWFuO1xuICBpZ25vcmVGaXJzdExmOiBib29sZWFuO1xuICBjYW5TZWxmQ2xvc2U6IGJvb2xlYW47XG5cbiAgcmVxdWlyZUV4dHJhUGFyZW50KGN1cnJlbnRQYXJlbnQ6IHN0cmluZyk6IGJvb2xlYW47XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdE5zTmFtZShlbGVtZW50TmFtZTogc3RyaW5nKTogW3N0cmluZyB8IG51bGwsIHN0cmluZ10ge1xuICBpZiAoZWxlbWVudE5hbWVbMF0gIT09IFwiOlwiKSB7XG4gICAgcmV0dXJuIFtudWxsLCBlbGVtZW50TmFtZV07XG4gIH1cblxuICBjb25zdCBjb2xvbkluZGV4ID0gZWxlbWVudE5hbWUuaW5kZXhPZihcIjpcIiwgMSk7XG5cbiAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBmb3JtYXQgXCIke2VsZW1lbnROYW1lfVwiIGV4cGVjdGluZyBcIjpuYW1lc3BhY2U6bmFtZVwiYCk7XG4gIH1cblxuICByZXR1cm4gW2VsZW1lbnROYW1lLnNsaWNlKDEsIGNvbG9uSW5kZXgpLCBlbGVtZW50TmFtZS5zbGljZShjb2xvbkluZGV4ICsgMSldO1xufVxuXG4vLyBgPG5nLWNvbnRhaW5lcj5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGFpbmVyKHRhZ05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3BsaXROc05hbWUodGFnTmFtZSlbMV0gPT09IFwibmctY29udGFpbmVyXCI7XG59XG5cbi8vIGA8bmctY29udGVudD5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nQ29udGVudCh0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHNwbGl0TnNOYW1lKHRhZ05hbWUpWzFdID09PSBcIm5nLWNvbnRlbnRcIjtcbn1cblxuLy8gYDxuZy10ZW1wbGF0ZT5gIHRhZ3Mgd29yayB0aGUgc2FtZSByZWdhcmRsZXNzIHRoZSBuYW1lc3BhY2VcbmV4cG9ydCBmdW5jdGlvbiBpc05nVGVtcGxhdGUodGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzcGxpdE5zTmFtZSh0YWdOYW1lKVsxXSA9PT0gXCJuZy10ZW1wbGF0ZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyk6IHN0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBnZXROc1ByZWZpeChmdWxsTmFtZTogbnVsbCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TnNQcmVmaXgoZnVsbE5hbWU6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIGZ1bGxOYW1lID09PSBudWxsID8gbnVsbCA6IHNwbGl0TnNOYW1lKGZ1bGxOYW1lKVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTnNBbmROYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwcmVmaXggPyBgOiR7cHJlZml4fToke2xvY2FsTmFtZX1gIDogbG9jYWxOYW1lO1xufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2VzXG4vLyBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZW50aXRpZXMuanNvblxuLy8gVGhpcyBsaXN0IGlzIG5vdCBleGhhdXN0aXZlIHRvIGtlZXAgdGhlIGNvbXBpbGVyIGZvb3RwcmludCBsb3cuXG4vLyBUaGUgYCYjMTIzO2AgLyBgJiN4MWFiO2Agc3ludGF4IHNob3VsZCBiZSB1c2VkIHdoZW4gdGhlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2UgZG9lcyBub3Rcbi8vIGV4aXN0LlxuXG5leHBvcnQgY29uc3QgTkFNRURfRU5USVRJRVM6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgQWFjdXRlOiBcIlxcdTAwQzFcIixcbiAgYWFjdXRlOiBcIlxcdTAwRTFcIixcbiAgQWNpcmM6IFwiXFx1MDBDMlwiLFxuICBhY2lyYzogXCJcXHUwMEUyXCIsXG4gIGFjdXRlOiBcIlxcdTAwQjRcIixcbiAgQUVsaWc6IFwiXFx1MDBDNlwiLFxuICBhZWxpZzogXCJcXHUwMEU2XCIsXG4gIEFncmF2ZTogXCJcXHUwMEMwXCIsXG4gIGFncmF2ZTogXCJcXHUwMEUwXCIsXG4gIGFsZWZzeW06IFwiXFx1MjEzNVwiLFxuICBBbHBoYTogXCJcXHUwMzkxXCIsXG4gIGFscGhhOiBcIlxcdTAzQjFcIixcbiAgYW1wOiBcIiZcIixcbiAgYW5kOiBcIlxcdTIyMjdcIixcbiAgYW5nOiBcIlxcdTIyMjBcIixcbiAgYXBvczogXCJcXHUwMDI3XCIsXG4gIEFyaW5nOiBcIlxcdTAwQzVcIixcbiAgYXJpbmc6IFwiXFx1MDBFNVwiLFxuICBhc3ltcDogXCJcXHUyMjQ4XCIsXG4gIEF0aWxkZTogXCJcXHUwMEMzXCIsXG4gIGF0aWxkZTogXCJcXHUwMEUzXCIsXG4gIEF1bWw6IFwiXFx1MDBDNFwiLFxuICBhdW1sOiBcIlxcdTAwRTRcIixcbiAgYmRxdW86IFwiXFx1MjAxRVwiLFxuICBCZXRhOiBcIlxcdTAzOTJcIixcbiAgYmV0YTogXCJcXHUwM0IyXCIsXG4gIGJydmJhcjogXCJcXHUwMEE2XCIsXG4gIGJ1bGw6IFwiXFx1MjAyMlwiLFxuICBjYXA6IFwiXFx1MjIyOVwiLFxuICBDY2VkaWw6IFwiXFx1MDBDN1wiLFxuICBjY2VkaWw6IFwiXFx1MDBFN1wiLFxuICBjZWRpbDogXCJcXHUwMEI4XCIsXG4gIGNlbnQ6IFwiXFx1MDBBMlwiLFxuICBDaGk6IFwiXFx1MDNBN1wiLFxuICBjaGk6IFwiXFx1MDNDN1wiLFxuICBjaXJjOiBcIlxcdTAyQzZcIixcbiAgY2x1YnM6IFwiXFx1MjY2M1wiLFxuICBjb25nOiBcIlxcdTIyNDVcIixcbiAgY29weTogXCJcXHUwMEE5XCIsXG4gIGNyYXJyOiBcIlxcdTIxQjVcIixcbiAgY3VwOiBcIlxcdTIyMkFcIixcbiAgY3VycmVuOiBcIlxcdTAwQTRcIixcbiAgZGFnZ2VyOiBcIlxcdTIwMjBcIixcbiAgRGFnZ2VyOiBcIlxcdTIwMjFcIixcbiAgZGFycjogXCJcXHUyMTkzXCIsXG4gIGRBcnI6IFwiXFx1MjFEM1wiLFxuICBkZWc6IFwiXFx1MDBCMFwiLFxuICBEZWx0YTogXCJcXHUwMzk0XCIsXG4gIGRlbHRhOiBcIlxcdTAzQjRcIixcbiAgZGlhbXM6IFwiXFx1MjY2NlwiLFxuICBkaXZpZGU6IFwiXFx1MDBGN1wiLFxuICBFYWN1dGU6IFwiXFx1MDBDOVwiLFxuICBlYWN1dGU6IFwiXFx1MDBFOVwiLFxuICBFY2lyYzogXCJcXHUwMENBXCIsXG4gIGVjaXJjOiBcIlxcdTAwRUFcIixcbiAgRWdyYXZlOiBcIlxcdTAwQzhcIixcbiAgZWdyYXZlOiBcIlxcdTAwRThcIixcbiAgZW1wdHk6IFwiXFx1MjIwNVwiLFxuICBlbXNwOiBcIlxcdTIwMDNcIixcbiAgZW5zcDogXCJcXHUyMDAyXCIsXG4gIEVwc2lsb246IFwiXFx1MDM5NVwiLFxuICBlcHNpbG9uOiBcIlxcdTAzQjVcIixcbiAgZXF1aXY6IFwiXFx1MjI2MVwiLFxuICBFdGE6IFwiXFx1MDM5N1wiLFxuICBldGE6IFwiXFx1MDNCN1wiLFxuICBFVEg6IFwiXFx1MDBEMFwiLFxuICBldGg6IFwiXFx1MDBGMFwiLFxuICBFdW1sOiBcIlxcdTAwQ0JcIixcbiAgZXVtbDogXCJcXHUwMEVCXCIsXG4gIGV1cm86IFwiXFx1MjBBQ1wiLFxuICBleGlzdDogXCJcXHUyMjAzXCIsXG4gIGZub2Y6IFwiXFx1MDE5MlwiLFxuICBmb3JhbGw6IFwiXFx1MjIwMFwiLFxuICBmcmFjMTI6IFwiXFx1MDBCRFwiLFxuICBmcmFjMTQ6IFwiXFx1MDBCQ1wiLFxuICBmcmFjMzQ6IFwiXFx1MDBCRVwiLFxuICBmcmFzbDogXCJcXHUyMDQ0XCIsXG4gIEdhbW1hOiBcIlxcdTAzOTNcIixcbiAgZ2FtbWE6IFwiXFx1MDNCM1wiLFxuICBnZTogXCJcXHUyMjY1XCIsXG4gIGd0OiBcIj5cIixcbiAgaGFycjogXCJcXHUyMTk0XCIsXG4gIGhBcnI6IFwiXFx1MjFENFwiLFxuICBoZWFydHM6IFwiXFx1MjY2NVwiLFxuICBoZWxsaXA6IFwiXFx1MjAyNlwiLFxuICBJYWN1dGU6IFwiXFx1MDBDRFwiLFxuICBpYWN1dGU6IFwiXFx1MDBFRFwiLFxuICBJY2lyYzogXCJcXHUwMENFXCIsXG4gIGljaXJjOiBcIlxcdTAwRUVcIixcbiAgaWV4Y2w6IFwiXFx1MDBBMVwiLFxuICBJZ3JhdmU6IFwiXFx1MDBDQ1wiLFxuICBpZ3JhdmU6IFwiXFx1MDBFQ1wiLFxuICBpbWFnZTogXCJcXHUyMTExXCIsXG4gIGluZmluOiBcIlxcdTIyMUVcIixcbiAgaW50OiBcIlxcdTIyMkJcIixcbiAgSW90YTogXCJcXHUwMzk5XCIsXG4gIGlvdGE6IFwiXFx1MDNCOVwiLFxuICBpcXVlc3Q6IFwiXFx1MDBCRlwiLFxuICBpc2luOiBcIlxcdTIyMDhcIixcbiAgSXVtbDogXCJcXHUwMENGXCIsXG4gIGl1bWw6IFwiXFx1MDBFRlwiLFxuICBLYXBwYTogXCJcXHUwMzlBXCIsXG4gIGthcHBhOiBcIlxcdTAzQkFcIixcbiAgTGFtYmRhOiBcIlxcdTAzOUJcIixcbiAgbGFtYmRhOiBcIlxcdTAzQkJcIixcbiAgbGFuZzogXCJcXHUyN0U4XCIsXG4gIGxhcXVvOiBcIlxcdTAwQUJcIixcbiAgbGFycjogXCJcXHUyMTkwXCIsXG4gIGxBcnI6IFwiXFx1MjFEMFwiLFxuICBsY2VpbDogXCJcXHUyMzA4XCIsXG4gIGxkcXVvOiBcIlxcdTIwMUNcIixcbiAgbGU6IFwiXFx1MjI2NFwiLFxuICBsZmxvb3I6IFwiXFx1MjMwQVwiLFxuICBsb3dhc3Q6IFwiXFx1MjIxN1wiLFxuICBsb3o6IFwiXFx1MjVDQVwiLFxuICBscm06IFwiXFx1MjAwRVwiLFxuICBsc2FxdW86IFwiXFx1MjAzOVwiLFxuICBsc3F1bzogXCJcXHUyMDE4XCIsXG4gIGx0OiBcIjxcIixcbiAgbWFjcjogXCJcXHUwMEFGXCIsXG4gIG1kYXNoOiBcIlxcdTIwMTRcIixcbiAgbWljcm86IFwiXFx1MDBCNVwiLFxuICBtaWRkb3Q6IFwiXFx1MDBCN1wiLFxuICBtaW51czogXCJcXHUyMjEyXCIsXG4gIE11OiBcIlxcdTAzOUNcIixcbiAgbXU6IFwiXFx1MDNCQ1wiLFxuICBuYWJsYTogXCJcXHUyMjA3XCIsXG4gIG5ic3A6IFwiXFx1MDBBMFwiLFxuICBuZGFzaDogXCJcXHUyMDEzXCIsXG4gIG5lOiBcIlxcdTIyNjBcIixcbiAgbmk6IFwiXFx1MjIwQlwiLFxuICBub3Q6IFwiXFx1MDBBQ1wiLFxuICBub3RpbjogXCJcXHUyMjA5XCIsXG4gIG5zdWI6IFwiXFx1MjI4NFwiLFxuICBOdGlsZGU6IFwiXFx1MDBEMVwiLFxuICBudGlsZGU6IFwiXFx1MDBGMVwiLFxuICBOdTogXCJcXHUwMzlEXCIsXG4gIG51OiBcIlxcdTAzQkRcIixcbiAgT2FjdXRlOiBcIlxcdTAwRDNcIixcbiAgb2FjdXRlOiBcIlxcdTAwRjNcIixcbiAgT2NpcmM6IFwiXFx1MDBENFwiLFxuICBvY2lyYzogXCJcXHUwMEY0XCIsXG4gIE9FbGlnOiBcIlxcdTAxNTJcIixcbiAgb2VsaWc6IFwiXFx1MDE1M1wiLFxuICBPZ3JhdmU6IFwiXFx1MDBEMlwiLFxuICBvZ3JhdmU6IFwiXFx1MDBGMlwiLFxuICBvbGluZTogXCJcXHUyMDNFXCIsXG4gIE9tZWdhOiBcIlxcdTAzQTlcIixcbiAgb21lZ2E6IFwiXFx1MDNDOVwiLFxuICBPbWljcm9uOiBcIlxcdTAzOUZcIixcbiAgb21pY3JvbjogXCJcXHUwM0JGXCIsXG4gIG9wbHVzOiBcIlxcdTIyOTVcIixcbiAgb3I6IFwiXFx1MjIyOFwiLFxuICBvcmRmOiBcIlxcdTAwQUFcIixcbiAgb3JkbTogXCJcXHUwMEJBXCIsXG4gIE9zbGFzaDogXCJcXHUwMEQ4XCIsXG4gIG9zbGFzaDogXCJcXHUwMEY4XCIsXG4gIE90aWxkZTogXCJcXHUwMEQ1XCIsXG4gIG90aWxkZTogXCJcXHUwMEY1XCIsXG4gIG90aW1lczogXCJcXHUyMjk3XCIsXG4gIE91bWw6IFwiXFx1MDBENlwiLFxuICBvdW1sOiBcIlxcdTAwRjZcIixcbiAgcGFyYTogXCJcXHUwMEI2XCIsXG4gIHBlcm1pbDogXCJcXHUyMDMwXCIsXG4gIHBlcnA6IFwiXFx1MjJBNVwiLFxuICBQaGk6IFwiXFx1MDNBNlwiLFxuICBwaGk6IFwiXFx1MDNDNlwiLFxuICBQaTogXCJcXHUwM0EwXCIsXG4gIHBpOiBcIlxcdTAzQzBcIixcbiAgcGl2OiBcIlxcdTAzRDZcIixcbiAgcGx1c21uOiBcIlxcdTAwQjFcIixcbiAgcG91bmQ6IFwiXFx1MDBBM1wiLFxuICBwcmltZTogXCJcXHUyMDMyXCIsXG4gIFByaW1lOiBcIlxcdTIwMzNcIixcbiAgcHJvZDogXCJcXHUyMjBGXCIsXG4gIHByb3A6IFwiXFx1MjIxRFwiLFxuICBQc2k6IFwiXFx1MDNBOFwiLFxuICBwc2k6IFwiXFx1MDNDOFwiLFxuICBxdW90OiBcIlxcdTAwMjJcIixcbiAgcmFkaWM6IFwiXFx1MjIxQVwiLFxuICByYW5nOiBcIlxcdTI3RTlcIixcbiAgcmFxdW86IFwiXFx1MDBCQlwiLFxuICByYXJyOiBcIlxcdTIxOTJcIixcbiAgckFycjogXCJcXHUyMUQyXCIsXG4gIHJjZWlsOiBcIlxcdTIzMDlcIixcbiAgcmRxdW86IFwiXFx1MjAxRFwiLFxuICByZWFsOiBcIlxcdTIxMUNcIixcbiAgcmVnOiBcIlxcdTAwQUVcIixcbiAgcmZsb29yOiBcIlxcdTIzMEJcIixcbiAgUmhvOiBcIlxcdTAzQTFcIixcbiAgcmhvOiBcIlxcdTAzQzFcIixcbiAgcmxtOiBcIlxcdTIwMEZcIixcbiAgcnNhcXVvOiBcIlxcdTIwM0FcIixcbiAgcnNxdW86IFwiXFx1MjAxOVwiLFxuICBzYnF1bzogXCJcXHUyMDFBXCIsXG4gIFNjYXJvbjogXCJcXHUwMTYwXCIsXG4gIHNjYXJvbjogXCJcXHUwMTYxXCIsXG4gIHNkb3Q6IFwiXFx1MjJDNVwiLFxuICBzZWN0OiBcIlxcdTAwQTdcIixcbiAgc2h5OiBcIlxcdTAwQURcIixcbiAgU2lnbWE6IFwiXFx1MDNBM1wiLFxuICBzaWdtYTogXCJcXHUwM0MzXCIsXG4gIHNpZ21hZjogXCJcXHUwM0MyXCIsXG4gIHNpbTogXCJcXHUyMjNDXCIsXG4gIHNwYWRlczogXCJcXHUyNjYwXCIsXG4gIHN1YjogXCJcXHUyMjgyXCIsXG4gIHN1YmU6IFwiXFx1MjI4NlwiLFxuICBzdW06IFwiXFx1MjIxMVwiLFxuICBzdXA6IFwiXFx1MjI4M1wiLFxuICBzdXAxOiBcIlxcdTAwQjlcIixcbiAgc3VwMjogXCJcXHUwMEIyXCIsXG4gIHN1cDM6IFwiXFx1MDBCM1wiLFxuICBzdXBlOiBcIlxcdTIyODdcIixcbiAgc3psaWc6IFwiXFx1MDBERlwiLFxuICBUYXU6IFwiXFx1MDNBNFwiLFxuICB0YXU6IFwiXFx1MDNDNFwiLFxuICB0aGVyZTQ6IFwiXFx1MjIzNFwiLFxuICBUaGV0YTogXCJcXHUwMzk4XCIsXG4gIHRoZXRhOiBcIlxcdTAzQjhcIixcbiAgdGhldGFzeW06IFwiXFx1MDNEMVwiLFxuICB0aGluc3A6IFwiXFx1MjAwOVwiLFxuICBUSE9STjogXCJcXHUwMERFXCIsXG4gIHRob3JuOiBcIlxcdTAwRkVcIixcbiAgdGlsZGU6IFwiXFx1MDJEQ1wiLFxuICB0aW1lczogXCJcXHUwMEQ3XCIsXG4gIHRyYWRlOiBcIlxcdTIxMjJcIixcbiAgVWFjdXRlOiBcIlxcdTAwREFcIixcbiAgdWFjdXRlOiBcIlxcdTAwRkFcIixcbiAgdWFycjogXCJcXHUyMTkxXCIsXG4gIHVBcnI6IFwiXFx1MjFEMVwiLFxuICBVY2lyYzogXCJcXHUwMERCXCIsXG4gIHVjaXJjOiBcIlxcdTAwRkJcIixcbiAgVWdyYXZlOiBcIlxcdTAwRDlcIixcbiAgdWdyYXZlOiBcIlxcdTAwRjlcIixcbiAgdW1sOiBcIlxcdTAwQThcIixcbiAgdXBzaWg6IFwiXFx1MDNEMlwiLFxuICBVcHNpbG9uOiBcIlxcdTAzQTVcIixcbiAgdXBzaWxvbjogXCJcXHUwM0M1XCIsXG4gIFV1bWw6IFwiXFx1MDBEQ1wiLFxuICB1dW1sOiBcIlxcdTAwRkNcIixcbiAgd2VpZXJwOiBcIlxcdTIxMThcIixcbiAgWGk6IFwiXFx1MDM5RVwiLFxuICB4aTogXCJcXHUwM0JFXCIsXG4gIFlhY3V0ZTogXCJcXHUwMEREXCIsXG4gIHlhY3V0ZTogXCJcXHUwMEZEXCIsXG4gIHllbjogXCJcXHUwMEE1XCIsXG4gIHl1bWw6IFwiXFx1MDBGRlwiLFxuICBZdW1sOiBcIlxcdTAxNzhcIixcbiAgWmV0YTogXCJcXHUwMzk2XCIsXG4gIHpldGE6IFwiXFx1MDNCNlwiLFxuICB6d2o6IFwiXFx1MjAwRFwiLFxuICB6d25qOiBcIlxcdTIwMENcIlxufTtcblxuLy8gVGhlICZuZ3NwOyBwc2V1ZG8tZW50aXR5IGlzIGRlbm90aW5nIGEgc3BhY2UuIHNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ0LWxhbmcvYW5ndWxhci9ibG9iLzBiYjYxMTM4N2QyOWQ2NWI1YWY3ZjlkMjUxNWFiNTcxZmQzZmJlZTQvX3Rlc3RzL3Rlc3QvY29tcGlsZXIvcHJlc2VydmVfd2hpdGVzcGFjZV90ZXN0LmRhcnRcbmV4cG9ydCBjb25zdCBOR1NQX1VOSUNPREUgPSBcIlxcdUU1MDBcIjtcblxuTkFNRURfRU5USVRJRVNbXCJuZ3NwXCJdID0gTkdTUF9VTklDT0RFO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSBcIi4vY2hhcnNcIjtcbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VMb2NhdGlvbiwgUGFyc2VTb3VyY2VGaWxlLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtOQU1FRF9FTlRJVElFUywgVGFnQ29udGVudFR5cGUsIFRhZ0RlZmluaXRpb259IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgVEFHX09QRU5fU1RBUlQsXG4gIFRBR19PUEVOX0VORCxcbiAgVEFHX09QRU5fRU5EX1ZPSUQsXG4gIFRBR19DTE9TRSxcbiAgVEVYVCxcbiAgRVNDQVBBQkxFX1JBV19URVhULFxuICBSQVdfVEVYVCxcbiAgQ09NTUVOVF9TVEFSVCxcbiAgQ09NTUVOVF9FTkQsXG4gIENEQVRBX1NUQVJULFxuICBDREFUQV9FTkQsXG4gIEFUVFJfTkFNRSxcbiAgQVRUUl9WQUxVRSxcbiAgRE9DX1RZUEUsXG4gIEVYUEFOU0lPTl9GT1JNX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9WQUxVRSxcbiAgRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJULFxuICBFWFBBTlNJT05fQ0FTRV9FWFBfRU5ELFxuICBFWFBBTlNJT05fRk9STV9FTkQsXG4gIEVPRlxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTogVG9rZW5UeXBlLCBwdWJsaWMgcGFydHM6IHN0cmluZ1tdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5FcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlcnJvck1zZzogc3RyaW5nLCBwdWJsaWMgdG9rZW5UeXBlOiBUb2tlblR5cGUsIHNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5pemVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9rZW5zOiBUb2tlbltdLCBwdWJsaWMgZXJyb3JzOiBUb2tlbkVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShcbiAgc291cmNlOiBzdHJpbmcsXG4gIHVybDogc3RyaW5nLFxuICBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uLFxuICB0b2tlbml6ZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4pOiBUb2tlbml6ZVJlc3VsdCB7XG4gIHJldHVybiBuZXcgVG9rZW5pemVyKFxuICAgIG5ldyBQYXJzZVNvdXJjZUZpbGUoc291cmNlLCB1cmwpLFxuICAgIGdldFRhZ0RlZmluaXRpb24sXG4gICAgdG9rZW5pemVFeHBhbnNpb25Gb3JtcyxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICkudG9rZW5pemUoKTtcbn1cblxuY29uc3QgX0NSX09SX0NSTEZfUkVHRVhQID0gL1xcclxcbj8vZztcblxuZnVuY3Rpb24gX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFyQ29kZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgY2hhciA9IGNoYXJDb2RlID09PSBjaGFycy4kRU9GID8gXCJFT0ZcIiA6IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuICByZXR1cm4gYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJHtjaGFyfVwiYDtcbn1cblxuZnVuY3Rpb24gX3Vua25vd25FbnRpdHlFcnJvck1zZyhlbnRpdHlTcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5rbm93biBlbnRpdHkgXCIke2VudGl0eVNyY31cIiAtIHVzZSB0aGUgXCImIzxkZWNpbWFsPjtcIiBvciAgXCImI3g8aGV4PjtcIiBzeW50YXhgO1xufVxuXG5jbGFzcyBDb250cm9sRmxvd0Vycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBUb2tlbkVycm9yKSB7fVxufVxuXG4vLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI3dyaXRpbmdcbmNsYXNzIFRva2VuaXplciB7XG4gIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuICAvLyBOb3RlOiB0aGlzIGlzIGFsd2F5cyBsb3dlcmNhc2UhXG4gIHByaXZhdGUgX3BlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfbmV4dFBlZWsgPSAtMTtcbiAgcHJpdmF0ZSBfaW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfbGluZSA9IDA7XG4gIHByaXZhdGUgX2NvbHVtbiA9IC0xO1xuICBwcml2YXRlIF9jdXJyZW50VG9rZW5TdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudFRva2VuVHlwZTogVG9rZW5UeXBlO1xuICBwcml2YXRlIF9leHBhbnNpb25DYXNlU3RhY2s6IFRva2VuVHlwZVtdID0gW107XG4gIHByaXZhdGUgX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuXG4gIHRva2VuczogVG9rZW5bXSA9IFtdO1xuICBlcnJvcnM6IFRva2VuRXJyb3JbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gX2ZpbGUgVGhlIGh0bWwgc291cmNlXG4gICAqIEBwYXJhbSBfZ2V0VGFnRGVmaW5pdGlvblxuICAgKiBAcGFyYW0gX3Rva2VuaXplSWN1IFdoZXRoZXIgdG8gdG9rZW5pemUgSUNVIG1lc3NhZ2VzIChjb25zaWRlcmVkIGFzIHRleHQgbm9kZXMgd2hlbiBmYWxzZSlcbiAgICogQHBhcmFtIF9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9maWxlOiBQYXJzZVNvdXJjZUZpbGUsXG4gICAgcHJpdmF0ZSBfZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbixcbiAgICBwcml2YXRlIF90b2tlbml6ZUljdTogYm9vbGVhbixcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApIHtcbiAgICB0aGlzLl9pbnB1dCA9IF9maWxlLmNvbnRlbnQ7XG4gICAgdGhpcy5fbGVuZ3RoID0gX2ZpbGUuY29udGVudC5sZW5ndGg7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3ByZXByb2Nlc3NpbmctdGhlLWlucHV0LXN0cmVhbVxuICAgIC8vIEluIG9yZGVyIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UsIHdlIGNhbiBub3RcbiAgICAvLyBwcmUtcHJvY2VzcyBpdC5cbiAgICAvLyBJbnN0ZWFkIENScyBhcmUgcHJvY2Vzc2VkIHJpZ2h0IGJlZm9yZSBpbnN0YW50aWF0aW5nIHRoZSB0b2tlbnMuXG4gICAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShfQ1JfT1JfQ1JMRl9SRUdFWFAsIFwiXFxuXCIpO1xuICB9XG5cbiAgdG9rZW5pemUoKTogVG9rZW5pemVSZXN1bHQge1xuICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRMVCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRCQU5HKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTEJSQUNLRVQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YShzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kTUlOVVMpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHN0YXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWVEb2NUeXBlKHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnQ2xvc2Uoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lVGFnT3BlbihzdGFydCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEodGhpcy5fdG9rZW5pemVJY3UgJiYgdGhpcy5fdG9rZW5pemVFeHBhbnNpb25Gb3JtKCkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZVRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIENvbnRyb2xGbG93RXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRU9GKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZVJlc3VsdChtZXJnZVRleHRUb2tlbnModGhpcy50b2tlbnMpLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgd2hldGhlciBhbiBJQ1UgdG9rZW4gaGFzIGJlZW4gY3JlYXRlZFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHByaXZhdGUgX3Rva2VuaXplRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICBpZiAoaXNFeHBhbnNpb25Gb3JtU3RhcnQodGhpcy5faW5wdXQsIHRoaXMuX2luZGV4LCB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnKSkge1xuICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1TdGFydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHRoaXMuX3BlZWspICYmIHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb25DYXNlU3RhcnQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFKSB7XG4gICAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkNhc2UoKSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRXhwYW5zaW9uQ2FzZUVuZCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzSW5FeHBhbnNpb25Gb3JtKCkpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYXRpb24oKTogUGFyc2VMb2NhdGlvbiB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIHRoaXMuX2luZGV4LCB0aGlzLl9saW5lLCB0aGlzLl9jb2x1bW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3BhbihcbiAgICBzdGFydDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCksXG4gICAgZW5kOiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKVxuICApOiBQYXJzZVNvdXJjZVNwYW4ge1xuICAgIHJldHVybiBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmVnaW5Ub2tlbih0eXBlOiBUb2tlblR5cGUsIHN0YXJ0OiBQYXJzZUxvY2F0aW9uID0gdGhpcy5fZ2V0TG9jYXRpb24oKSkge1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IHR5cGU7XG4gIH1cblxuICBwcml2YXRlIF9lbmRUb2tlbihwYXJ0czogc3RyaW5nW10sIGVuZDogUGFyc2VMb2NhdGlvbiA9IHRoaXMuX2dldExvY2F0aW9uKCkpOiBUb2tlbiB7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgVG9rZW4odGhpcy5fY3VycmVudFRva2VuVHlwZSwgcGFydHMsIG5ldyBQYXJzZVNvdXJjZVNwYW4odGhpcy5fY3VycmVudFRva2VuU3RhcnQsIGVuZCkpO1xuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgIHRoaXMuX2N1cnJlbnRUb2tlblN0YXJ0ID0gbnVsbCE7XG4gICAgdGhpcy5fY3VycmVudFRva2VuVHlwZSA9IG51bGwhO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVycm9yKG1zZzogc3RyaW5nLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBDb250cm9sRmxvd0Vycm9yIHtcbiAgICBpZiAodGhpcy5faXNJbkV4cGFuc2lvbkZvcm0oKSkge1xuICAgICAgbXNnICs9IGAgKERvIHlvdSBoYXZlIGFuIHVuZXNjYXBlZCBcIntcIiBpbiB5b3VyIHRlbXBsYXRlPyBVc2UgXCJ7eyAneycgfX1cIikgdG8gZXNjYXBlIGl0LilgO1xuICAgIH1cbiAgICBjb25zdCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKG1zZywgdGhpcy5fY3VycmVudFRva2VuVHlwZSwgc3Bhbik7XG4gICAgdGhpcy5fY3VycmVudFRva2VuU3RhcnQgPSBudWxsITtcbiAgICB0aGlzLl9jdXJyZW50VG9rZW5UeXBlID0gbnVsbCE7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sRmxvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKSB7XG4gICAgaWYgKHRoaXMuX2luZGV4ID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyhjaGFycy4kRU9GKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMRikge1xuICAgICAgdGhpcy5fbGluZSsrO1xuICAgICAgdGhpcy5fY29sdW1uID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRMRiAmJiB0aGlzLl9wZWVrICE9PSBjaGFycy4kQ1IpIHtcbiAgICAgIHRoaXMuX2NvbHVtbisrO1xuICAgIH1cbiAgICB0aGlzLl9pbmRleCsrO1xuICAgIHRoaXMuX3BlZWsgPSB0aGlzLl9pbmRleCA+PSB0aGlzLl9sZW5ndGggPyBjaGFycy4kRU9GIDogdGhpcy5faW5wdXQuY2hhckNvZGVBdCh0aGlzLl9pbmRleCk7XG4gICAgdGhpcy5fbmV4dFBlZWsgPSB0aGlzLl9pbmRleCArIDEgPj0gdGhpcy5fbGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuX2lucHV0LmNoYXJDb2RlQXQodGhpcy5faW5kZXggKyAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGVtcHRDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJDb2RlKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdENoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNoYXJDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKHRoaXMuX3BlZWssIGNoYXJDb2RlKSkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVpcmVDaGFyQ29kZShjaGFyQ29kZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJDb2RlKSkge1xuICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3Bhbihsb2NhdGlvbiwgbG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBsZW4gPSBjaGFycy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2luZGV4ICsgbGVuID4gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgIC8vIElmIGF0dGVtcHRpbmcgdG8gcGFyc2UgdGhlIHN0cmluZyBmYWlscywgd2Ugd2FudCB0byByZXNldCB0aGUgcGFyc2VyXG4gICAgICAgIC8vIHRvIHdoZXJlIGl0IHdhcyBiZWZvcmUgdGhlIGF0dGVtcHRcbiAgICAgICAgdGhpcy5fcmVzdG9yZVBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0U3RyQ2FzZUluc2Vuc2l0aXZlKGNoYXJzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZUNhc2VJbnNlbnNpdGl2ZShjaGFycy5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZVN0cihjaGFyczogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIGlmICghdGhpcy5fYXR0ZW1wdFN0cihjaGFycykpIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4obG9jYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKHByZWRpY2F0ZTogKGNvZGU6IG51bWJlcikgPT4gYm9vbGVhbikge1xuICAgIHdoaWxlICghcHJlZGljYXRlKHRoaXMuX3BlZWspKSB7XG4gICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWlyZUNoYXJDb2RlVW50aWxGbihwcmVkaWNhdGU6IChjb2RlOiBudW1iZXIpID0+IGJvb2xlYW4sIGxlbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4ocHJlZGljYXRlKTtcbiAgICBpZiAodGhpcy5faW5kZXggLSBzdGFydC5vZmZzZXQgPCBsZW4pIHtcbiAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmV4cGVjdGVkQ2hhcmFjdGVyRXJyb3JNc2codGhpcy5fcGVlayksIHRoaXMuX2dldFNwYW4oc3RhcnQsIHN0YXJ0KSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0ZW1wdFVudGlsQ2hhcihjaGFyOiBudW1iZXIpIHtcbiAgICB3aGlsZSAodGhpcy5fcGVlayAhPT0gY2hhcikge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlYWRDaGFyKGRlY29kZUVudGl0aWVzOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoZGVjb2RlRW50aXRpZXMgJiYgdGhpcy5fcGVlayA9PT0gY2hhcnMuJEFNUEVSU0FORCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlY29kZUVudGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0W2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNvZGVFbnRpdHkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldExvY2F0aW9uKCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEhBU0gpKSB7XG4gICAgICBjb25zdCBpc0hleCA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4keCkgfHwgdGhpcy5fYXR0ZW1wdENoYXJDb2RlKGNoYXJzLiRYKTtcbiAgICAgIGNvbnN0IG51bWJlclN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKS5vZmZzZXQ7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzRGlnaXRFbnRpdHlFbmQpO1xuICAgICAgaWYgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHN0ck51bSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhudW1iZXJTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gcGFyc2VJbnQoc3RyTnVtLCBpc0hleCA/IDE2IDogMTApO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgICB0aHJvdyB0aGlzLl9jcmVhdGVFcnJvcihfdW5rbm93bkVudGl0eUVycm9yTXNnKGVudGl0eSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHRoaXMuX3NhdmVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05hbWVkRW50aXR5RW5kKTtcbiAgICAgIGlmICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0VNSUNPTE9OKSB7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzdGFydFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIFwiJlwiO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhzdGFydC5vZmZzZXQgKyAxLCB0aGlzLl9pbmRleCAtIDEpO1xuICAgICAgY29uc3QgY2hhciA9IE5BTUVEX0VOVElUSUVTW25hbWVdO1xuICAgICAgaWYgKCFjaGFyKSB7XG4gICAgICAgIHRocm93IHRoaXMuX2NyZWF0ZUVycm9yKF91bmtub3duRW50aXR5RXJyb3JNc2cobmFtZSksIHRoaXMuX2dldFNwYW4oc3RhcnQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0KGRlY29kZUVudGl0aWVzOiBib29sZWFuLCBmaXJzdENoYXJPZkVuZDogbnVtYmVyLCBhdHRlbXB0RW5kUmVzdDogKCkgPT4gYm9vbGVhbik6IFRva2VuIHtcbiAgICBsZXQgdGFnQ2xvc2VTdGFydDogUGFyc2VMb2NhdGlvbjtcbiAgICBjb25zdCB0ZXh0U3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oZGVjb2RlRW50aXRpZXMgPyBUb2tlblR5cGUuRVNDQVBBQkxFX1JBV19URVhUIDogVG9rZW5UeXBlLlJBV19URVhULCB0ZXh0U3RhcnQpO1xuICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0YWdDbG9zZVN0YXJ0ID0gdGhpcy5fZ2V0TG9jYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLl9hdHRlbXB0Q2hhckNvZGUoZmlyc3RDaGFyT2ZFbmQpICYmIGF0dGVtcHRFbmRSZXN0KCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0YWdDbG9zZVN0YXJ0Lm9mZnNldCkge1xuICAgICAgICAvLyBhZGQgdGhlIGNoYXJhY3RlcnMgY29uc3VtZWQgYnkgdGhlIHByZXZpb3VzIGlmIHN0YXRlbWVudCB0byB0aGUgb3V0cHV0XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5faW5wdXQuc3Vic3RyaW5nKHRhZ0Nsb3NlU3RhcnQub2Zmc2V0LCB0aGlzLl9pbmRleCkpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGZpcnN0Q2hhck9mRW5kKSB7XG4gICAgICAgIHBhcnRzLnB1c2godGhpcy5fcmVhZENoYXIoZGVjb2RlRW50aXRpZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSwgdGFnQ2xvc2VTdGFydCk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ29tbWVudChzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkNPTU1FTlRfU1RBUlQsIHN0YXJ0KTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJE1JTlVTKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gICAgY29uc3QgdGV4dFRva2VuID0gdGhpcy5fY29uc3VtZVJhd1RleHQoZmFsc2UsIGNoYXJzLiRNSU5VUywgKCkgPT4gdGhpcy5fYXR0ZW1wdFN0cihcIi0+XCIpKTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DT01NRU5UX0VORCwgdGV4dFRva2VuLnNvdXJjZVNwYW4uZW5kKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lQ2RhdGEoc3RhcnQ6IFBhcnNlTG9jYXRpb24pIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5DREFUQV9TVEFSVCwgc3RhcnQpO1xuICAgIHRoaXMuX3JlcXVpcmVTdHIoXCJDREFUQVtcIik7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICAgIGNvbnN0IHRleHRUb2tlbiA9IHRoaXMuX2NvbnN1bWVSYXdUZXh0KGZhbHNlLCBjaGFycy4kUkJSQUNLRVQsICgpID0+IHRoaXMuX2F0dGVtcHRTdHIoXCJdPlwiKSk7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQ0RBVEFfRU5ELCB0ZXh0VG9rZW4uc291cmNlU3Bhbi5lbmQpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVEb2NUeXBlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRE9DX1RZUEUsIHN0YXJ0KTtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQub2Zmc2V0ICsgMiwgdGhpcy5faW5kZXggLSAxKV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVByZWZpeEFuZE5hbWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG5hbWVPclByZWZpeFN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgbGV0IHByZWZpeDogc3RyaW5nID0gbnVsbCE7XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IGNoYXJzLiRDT0xPTiAmJiAhaXNQcmVmaXhFbmQodGhpcy5fcGVlaykpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9XG4gICAgbGV0IG5hbWVTdGFydDogbnVtYmVyO1xuICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kQ09MT04pIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHByZWZpeCA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lT3JQcmVmaXhTdGFydCwgdGhpcy5faW5kZXggLSAxKTtcbiAgICAgIG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lU3RhcnQgPSBuYW1lT3JQcmVmaXhTdGFydDtcbiAgICB9XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIHRoaXMuX2luZGV4ID09PSBuYW1lU3RhcnQgPyAxIDogMCk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2lucHV0LnN1YnN0cmluZyhuYW1lU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlbihzdGFydDogUGFyc2VMb2NhdGlvbikge1xuICAgIGNvbnN0IHNhdmVkUG9zID0gdGhpcy5fc2F2ZVBvc2l0aW9uKCk7XG4gICAgbGV0IHRhZ05hbWU6IHN0cmluZztcbiAgICBsZXQgbG93ZXJjYXNlVGFnTmFtZTogc3RyaW5nO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWNoYXJzLmlzQXNjaWlMZXR0ZXIodGhpcy5fcGVlaykpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5fY3JlYXRlRXJyb3IoX3VuZXhwZWN0ZWRDaGFyYWN0ZXJFcnJvck1zZyh0aGlzLl9wZWVrKSwgdGhpcy5fZ2V0U3BhbigpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fY29uc3VtZVRhZ09wZW5TdGFydChzdGFydCk7XG4gICAgICB0YWdOYW1lID0gdGhpcy5faW5wdXQuc3Vic3RyaW5nKG5hbWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgbG93ZXJjYXNlVGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHdoaWxlICh0aGlzLl9wZWVrICE9PSBjaGFycy4kU0xBU0ggJiYgdGhpcy5fcGVlayAhPT0gY2hhcnMuJEdUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVOYW1lKCk7XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kRVEpKSB7XG4gICAgICAgICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgICAgICAgIHRoaXMuX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnN1bWVUYWdPcGVuRW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBDb250cm9sRmxvd0Vycm9yKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlIHN0YXJ0IHRhZyBpcyBpbnZhbGlkLCBhc3N1bWUgd2Ugd2FudCBhIFwiPFwiXG4gICAgICAgIHRoaXMuX3Jlc3RvcmVQb3NpdGlvbihzYXZlZFBvcyk7XG4gICAgICAgIC8vIEJhY2sgdG8gYmFjayB0ZXh0IHRva2VucyBhcmUgbWVyZ2VkIGF0IHRoZSBlbmRcbiAgICAgICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEVYVCwgc3RhcnQpO1xuICAgICAgICB0aGlzLl9lbmRUb2tlbihbXCI8XCJdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRUb2tlblR5cGUgPSB0aGlzLl9nZXRUYWdEZWZpbml0aW9uKHRhZ05hbWUpLmNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKGNvbnRlbnRUb2tlblR5cGUgPT09IFRhZ0NvbnRlbnRUeXBlLlJBV19URVhUKSB7XG4gICAgICB0aGlzLl9jb25zdW1lUmF3VGV4dFdpdGhUYWdDbG9zZShsb3dlcmNhc2VUYWdOYW1lLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50VG9rZW5UeXBlID09PSBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQpIHtcbiAgICAgIHRoaXMuX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVSYXdUZXh0V2l0aFRhZ0Nsb3NlKGxvd2VyY2FzZVRhZ05hbWU6IHN0cmluZywgZGVjb2RlRW50aXRpZXM6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0ZXh0VG9rZW4gPSB0aGlzLl9jb25zdW1lUmF3VGV4dChkZWNvZGVFbnRpdGllcywgY2hhcnMuJExULCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG4gICAgICBpZiAoIXRoaXMuX2F0dGVtcHRTdHJDYXNlSW5zZW5zaXRpdmUobG93ZXJjYXNlVGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRlbXB0Q2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB9KTtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5UQUdfQ0xPU0UsIHRleHRUb2tlbi5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW251bGwhLCBsb3dlcmNhc2VUYWdOYW1lXSk7XG4gIH1cblxuICBwcml2YXRlIF9jb25zdW1lVGFnT3BlblN0YXJ0KHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX09QRU5fU1RBUlQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuX2NvbnN1bWVQcmVmaXhBbmROYW1lKCk7XG4gICAgdGhpcy5fZW5kVG9rZW4ocGFydHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuQVRUUl9OQU1FKTtcbiAgICBjb25zdCBwcmVmaXhBbmROYW1lID0gdGhpcy5fY29uc3VtZVByZWZpeEFuZE5hbWUoKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5BVFRSX1ZBTFVFKTtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcbiAgICBpZiAodGhpcy5fcGVlayA9PT0gY2hhcnMuJFNRIHx8IHRoaXMuX3BlZWsgPT09IGNoYXJzLiREUSkge1xuICAgICAgY29uc3QgcXVvdGVDaGFyID0gdGhpcy5fcGVlaztcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgd2hpbGUgKHRoaXMuX3BlZWsgIT09IHF1b3RlQ2hhcikge1xuICAgICAgICBwYXJ0cy5wdXNoKHRoaXMuX3JlYWRDaGFyKHRydWUpKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gcGFydHMuam9pbihcIlwiKTtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlVW50aWxGbihpc05hbWVFbmQsIDEpO1xuICAgICAgdmFsdWUgPSB0aGlzLl9pbnB1dC5zdWJzdHJpbmcodmFsdWVTdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9lbmRUb2tlbihbdGhpcy5fcHJvY2Vzc0NhcnJpYWdlUmV0dXJucyh2YWx1ZSldKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVUYWdPcGVuRW5kKCkge1xuICAgIGNvbnN0IHRva2VuVHlwZSA9IHRoaXMuX2F0dGVtcHRDaGFyQ29kZShjaGFycy4kU0xBU0gpID8gVG9rZW5UeXBlLlRBR19PUEVOX0VORF9WT0lEIDogVG9rZW5UeXBlLlRBR19PUEVOX0VORDtcbiAgICB0aGlzLl9iZWdpblRva2VuKHRva2VuVHlwZSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRHVCk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRhZ0Nsb3NlKHN0YXJ0OiBQYXJzZUxvY2F0aW9uKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuVEFHX0NMT1NFLCBzdGFydCk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICAgIGNvbnN0IHByZWZpeEFuZE5hbWUgPSB0aGlzLl9jb25zdW1lUHJlZml4QW5kTmFtZSgpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJEdUKTtcbiAgICB0aGlzLl9lbmRUb2tlbihwcmVmaXhBbmROYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25Gb3JtU3RhcnQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kTEJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fU1RBUlQpO1xuXG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuUkFXX1RFWFQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtjb25kaXRpb25dLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJENPTU1BKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5SQVdfVEVYVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuX3JlYWRVbnRpbChjaGFycy4kQ09NTUEpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt0eXBlXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRDT01NQSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkNhc2VTdGFydCgpIHtcbiAgICB0aGlzLl9iZWdpblRva2VuKFRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9yZWFkVW50aWwoY2hhcnMuJExCUkFDRSkudHJpbSgpO1xuICAgIHRoaXMuX2VuZFRva2VuKFt2YWx1ZV0sIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX2F0dGVtcHRDaGFyQ29kZVVudGlsRm4oaXNOb3RXaGl0ZXNwYWNlKTtcblxuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fcmVxdWlyZUNoYXJDb2RlKGNoYXJzLiRMQlJBQ0UpO1xuICAgIHRoaXMuX2VuZFRva2VuKFtdLCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9hdHRlbXB0Q2hhckNvZGVVbnRpbEZuKGlzTm90V2hpdGVzcGFjZSk7XG5cbiAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2sucHVzaChUb2tlblR5cGUuRVhQQU5TSU9OX0NBU0VfRVhQX1NUQVJUKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVFeHBhbnNpb25DYXNlRW5kKCkge1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQsIHRoaXMuX2dldExvY2F0aW9uKCkpO1xuICAgIHRoaXMuX3JlcXVpcmVDaGFyQ29kZShjaGFycy4kUkJSQUNFKTtcbiAgICB0aGlzLl9lbmRUb2tlbihbXSwgdGhpcy5fZ2V0TG9jYXRpb24oKSk7XG4gICAgdGhpcy5fYXR0ZW1wdENoYXJDb2RlVW50aWxGbihpc05vdFdoaXRlc3BhY2UpO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbkZvcm1FbmQoKSB7XG4gICAgdGhpcy5fYmVnaW5Ub2tlbihUb2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5ELCB0aGlzLl9nZXRMb2NhdGlvbigpKTtcbiAgICB0aGlzLl9yZXF1aXJlQ2hhckNvZGUoY2hhcnMuJFJCUkFDRSk7XG4gICAgdGhpcy5fZW5kVG9rZW4oW10pO1xuXG4gICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRMb2NhdGlvbigpO1xuICAgIHRoaXMuX2JlZ2luVG9rZW4oVG9rZW5UeXBlLlRFWFQsIHN0YXJ0KTtcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIGlmICh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnICYmIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5zdGFydCkpIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcgJiZcbiAgICAgICAgdGhpcy5faW5JbnRlcnBvbGF0aW9uICYmXG4gICAgICAgIHRoaXMuX2F0dGVtcHRTdHIodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQpXG4gICAgICApIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnLmVuZCk7XG4gICAgICAgIHRoaXMuX2luSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaCh0aGlzLl9yZWFkQ2hhcih0cnVlKSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoIXRoaXMuX2lzVGV4dEVuZCgpKTtcblxuICAgIHRoaXMuX2VuZFRva2VuKFt0aGlzLl9wcm9jZXNzQ2FycmlhZ2VSZXR1cm5zKHBhcnRzLmpvaW4oXCJcIikpXSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1RleHRFbmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3BlZWsgPT09IGNoYXJzLiRMVCB8fCB0aGlzLl9wZWVrID09PSBjaGFycy4kRU9GKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdG9rZW5pemVJY3UgJiYgIXRoaXMuX2luSW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKGlzRXhwYW5zaW9uRm9ybVN0YXJ0KHRoaXMuX2lucHV0LCB0aGlzLl9pbmRleCwgdGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZykpIHtcbiAgICAgICAgLy8gc3RhcnQgb2YgYW4gZXhwYW5zaW9uIGZvcm1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrID09PSBjaGFycy4kUkJSQUNFICYmIHRoaXMuX2lzSW5FeHBhbnNpb25DYXNlKCkpIHtcbiAgICAgICAgLy8gZW5kIG9mIGFuZCBleHBhbnNpb24gY2FzZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlUG9zaXRpb24oKTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgcmV0dXJuIFt0aGlzLl9wZWVrLCB0aGlzLl9pbmRleCwgdGhpcy5fY29sdW1uLCB0aGlzLl9saW5lLCB0aGlzLnRva2Vucy5sZW5ndGhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVhZFVudGlsKGNoYXI6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB0aGlzLl9hdHRlbXB0VW50aWxDaGFyKGNoYXIpO1xuICAgIHJldHVybiB0aGlzLl9pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3RvcmVQb3NpdGlvbihwb3NpdGlvbjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIHRoaXMuX3BlZWsgPSBwb3NpdGlvblswXTtcbiAgICB0aGlzLl9pbmRleCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuX2NvbHVtbiA9IHBvc2l0aW9uWzJdO1xuICAgIHRoaXMuX2xpbmUgPSBwb3NpdGlvblszXTtcbiAgICBjb25zdCBuYlRva2VucyA9IHBvc2l0aW9uWzRdO1xuICAgIGlmIChuYlRva2VucyA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgLy8gcmVtb3ZlIGFueSBleHRyYSB0b2tlbnNcbiAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2UoMCwgbmJUb2tlbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzSW5FeHBhbnNpb25DYXNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrW3RoaXMuX2V4cGFuc2lvbkNhc2VTdGFjay5sZW5ndGggLSAxXSA9PT0gVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9pc0luRXhwYW5zaW9uRm9ybSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZXhwYW5zaW9uQ2FzZVN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuX2V4cGFuc2lvbkNhc2VTdGFja1t0aGlzLl9leHBhbnNpb25DYXNlU3RhY2subGVuZ3RoIC0gMV0gPT09IFRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOb3RXaGl0ZXNwYWNlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWNoYXJzLmlzV2hpdGVzcGFjZShjb2RlKSB8fCBjb2RlID09PSBjaGFycy4kRU9GO1xufVxuXG5mdW5jdGlvbiBpc05hbWVFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEdUIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNMQVNIIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJFNRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJERRIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJEVRXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzUHJlZml4RW5kKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIChjb2RlIDwgY2hhcnMuJGEgfHwgY2hhcnMuJHogPCBjb2RlKSAmJiAoY29kZSA8IGNoYXJzLiRBIHx8IGNoYXJzLiRaIDwgY29kZSkgJiYgKGNvZGUgPCBjaGFycy4kMCB8fCBjb2RlID4gY2hhcnMuJDkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRGlnaXRFbnRpdHlFbmQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU0VNSUNPTE9OIHx8IGNvZGUgPT09IGNoYXJzLiRFT0YgfHwgIWNoYXJzLmlzQXNjaWlIZXhEaWdpdChjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lZEVudGl0eUVuZChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRTRU1JQ09MT04gfHwgY29kZSA9PT0gY2hhcnMuJEVPRiB8fCAhY2hhcnMuaXNBc2NpaUxldHRlcihjb2RlKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBhbnNpb25Gb3JtU3RhcnQoaW5wdXQ6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBib29sZWFuIHtcbiAgY29uc3QgaXNJbnRlcnBvbGF0aW9uU3RhcnQgPSBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgPyBpbnB1dC5pbmRleE9mKGludGVycG9sYXRpb25Db25maWcuc3RhcnQsIG9mZnNldCkgPT09IG9mZnNldFxuICAgIDogZmFsc2U7XG5cbiAgcmV0dXJuIGlucHV0LmNoYXJDb2RlQXQob2Zmc2V0KSA9PT0gY2hhcnMuJExCUkFDRSAmJiAhaXNJbnRlcnBvbGF0aW9uU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwYW5zaW9uQ2FzZVN0YXJ0KHBlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gcGVlayA9PT0gY2hhcnMuJEVRIHx8IGNoYXJzLmlzQXNjaWlMZXR0ZXIocGVlaykgfHwgY2hhcnMuaXNEaWdpdChwZWVrKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUNoYXJDb2RlQ2FzZUluc2Vuc2l0aXZlKGNvZGUxOiBudW1iZXIsIGNvZGUyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvVXBwZXJDYXNlQ2hhckNvZGUoY29kZTEpID09PSB0b1VwcGVyQ2FzZUNoYXJDb2RlKGNvZGUyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlckNhc2VDaGFyQ29kZShjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gY29kZSA+PSBjaGFycy4kYSAmJiBjb2RlIDw9IGNoYXJzLiR6ID8gY29kZSAtIGNoYXJzLiRhICsgY2hhcnMuJEEgOiBjb2RlO1xufVxuXG5mdW5jdGlvbiBtZXJnZVRleHRUb2tlbnMoc3JjVG9rZW5zOiBUb2tlbltdKTogVG9rZW5bXSB7XG4gIGNvbnN0IGRzdFRva2VuczogVG9rZW5bXSA9IFtdO1xuICBsZXQgbGFzdERzdFRva2VuOiBUb2tlbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2tlbiA9IHNyY1Rva2Vuc1tpXTtcbiAgICBpZiAobGFzdERzdFRva2VuICYmIGxhc3REc3RUb2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCAmJiB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCkge1xuICAgICAgbGFzdERzdFRva2VuLnBhcnRzWzBdICs9IHRva2VuLnBhcnRzWzBdO1xuICAgICAgbGFzdERzdFRva2VuLnNvdXJjZVNwYW4uZW5kID0gdG9rZW4uc291cmNlU3Bhbi5lbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3REc3RUb2tlbiA9IHRva2VuO1xuICAgICAgZHN0VG9rZW5zLnB1c2gobGFzdERzdFRva2VuKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHN0VG9rZW5zO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gXCIuL3BhcnNlX3V0aWxcIjtcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi9hc3RcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4vaW50ZXJwb2xhdGlvbl9jb25maWdcIjtcbmltcG9ydCAqIGFzIGxleCBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtUYWdEZWZpbml0aW9uLCBnZXROc1ByZWZpeCwgaXNOZ0NvbnRhaW5lciwgbWVyZ2VOc0FuZE5hbWV9IGZyb20gXCIuL3RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWVFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lOiBzdHJpbmcgfCBudWxsLCBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1zZzogc3RyaW5nKTogVHJlZUVycm9yIHtcbiAgICByZXR1cm4gbmV3IFRyZWVFcnJvcihlbGVtZW50TmFtZSwgc3BhbiwgbXNnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50TmFtZTogc3RyaW5nIHwgbnVsbCwgc3BhbjogUGFyc2VTb3VyY2VTcGFuLCBtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlVHJlZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb290Tm9kZXM6IGh0bWwuTm9kZVtdLCBwdWJsaWMgZXJyb3JzOiBQYXJzZUVycm9yW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2V0VGFnRGVmaW5pdGlvbjogKHRhZ05hbWU6IHN0cmluZykgPT4gVGFnRGVmaW5pdGlvbikge31cblxuICBwYXJzZShcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnNBbmRFcnJvcnMgPSBsZXgudG9rZW5pemUoc291cmNlLCB1cmwsIHRoaXMuZ2V0VGFnRGVmaW5pdGlvbiwgcGFyc2VFeHBhbnNpb25Gb3JtcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBjb25zdCB0cmVlQW5kRXJyb3JzID0gbmV3IF9UcmVlQnVpbGRlcih0b2tlbnNBbmRFcnJvcnMudG9rZW5zLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG5cbiAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChcbiAgICAgIHRyZWVBbmRFcnJvcnMucm9vdE5vZGVzLFxuICAgICAgKHRva2Vuc0FuZEVycm9ycy5lcnJvcnMgYXMgUGFyc2VFcnJvcltdKS5jb25jYXQodHJlZUFuZEVycm9ycy5lcnJvcnMpXG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBfVHJlZUJ1aWxkZXIge1xuICBwcml2YXRlIF9pbmRleCA9IC0xO1xuICBwcml2YXRlIF9wZWVrOiBsZXguVG9rZW47XG5cbiAgcHJpdmF0ZSBfcm9vdE5vZGVzOiBodG1sLk5vZGVbXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IFRyZWVFcnJvcltdID0gW107XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFN0YWNrOiBodG1sLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9rZW5zOiBsZXguVG9rZW5bXSwgcHJpdmF0ZSBnZXRUYWdEZWZpbml0aW9uOiAodGFnTmFtZTogc3RyaW5nKSA9PiBUYWdEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fYWR2YW5jZSgpO1xuICB9XG5cbiAgYnVpbGQoKTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVPRikge1xuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jb25zdW1lU3RhcnRUYWcodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLlRBR19DTE9TRSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lRW5kVGFnKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5DREFUQV9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDZGF0YSh0aGlzLl9hZHZhbmNlKCkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuQ09NTUVOVF9TVEFSVCkge1xuICAgICAgICB0aGlzLl9jbG9zZVZvaWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVDb21tZW50KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuVEVYVCB8fFxuICAgICAgICB0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuUkFXX1RFWFQgfHxcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVTQ0FQQUJMRV9SQVdfVEVYVFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlVm9pZEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5fY29uc3VtZVRleHQodGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWVFeHBhbnNpb24odGhpcy5fYWR2YW5jZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG90aGVyIHRva2Vucy4uLlxuICAgICAgICB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRoaXMuX3Jvb3ROb2RlcywgdGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkdmFuY2UoKTogbGV4LlRva2VuIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5fcGVlaztcbiAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBOb3RlOiB0aGVyZSBpcyBhbHdheXMgYW4gRU9GIHRva2VuIGF0IHRoZSBlbmRcbiAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuX3BlZWsgPSB0aGlzLnRva2Vuc1t0aGlzLl9pbmRleF07XG4gICAgcmV0dXJuIHByZXY7XG4gIH1cblxuICBwcml2YXRlIF9hZHZhbmNlSWYodHlwZTogbGV4LlRva2VuVHlwZSk6IGxleC5Ub2tlbiB8IG51bGwge1xuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUNkYXRhKHN0YXJ0VG9rZW46IGxleC5Ub2tlbikge1xuICAgIHRoaXMuX2NvbnN1bWVUZXh0KHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuQ0RBVEFfRU5EKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnN1bWVDb21tZW50KHRva2VuOiBsZXguVG9rZW4pIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fYWR2YW5jZUlmKGxleC5Ub2tlblR5cGUuUkFXX1RFWFQpO1xuICAgIHRoaXMuX2FkdmFuY2VJZihsZXguVG9rZW5UeXBlLkNPTU1FTlRfRU5EKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRleHQgIT09IG51bGwgPyB0ZXh0LnBhcnRzWzBdLnRyaW0oKSA6IG51bGw7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQobmV3IGh0bWwuQ29tbWVudCh2YWx1ZSwgdG9rZW4uc291cmNlU3BhbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUV4cGFuc2lvbih0b2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5fYWR2YW5jZSgpO1xuICAgIGNvbnN0IGNhc2VzOiBodG1sLkV4cGFuc2lvbkNhc2VbXSA9IFtdO1xuXG4gICAgLy8gcmVhZCA9XG4gICAgd2hpbGUgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9WQUxVRSkge1xuICAgICAgY29uc3QgZXhwQ2FzZSA9IHRoaXMuX3BhcnNlRXhwYW5zaW9uQ2FzZSgpO1xuICAgICAgaWYgKCFleHBDYXNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZXJyb3JcbiAgICAgIGNhc2VzLnB1c2goZXhwQ2FzZSk7XG4gICAgfVxuXG4gICAgLy8gcmVhZCB0aGUgZmluYWwgfVxuICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgIT09IGxleC5Ub2tlblR5cGUuRVhQQU5TSU9OX0ZPUk1fRU5EKSB7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHRoaXMuX3BlZWsuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4odG9rZW4uc291cmNlU3Bhbi5zdGFydCwgdGhpcy5fcGVlay5zb3VyY2VTcGFuLmVuZCk7XG4gICAgdGhpcy5fYWRkVG9QYXJlbnQoXG4gICAgICBuZXcgaHRtbC5FeHBhbnNpb24oc3dpdGNoVmFsdWUucGFydHNbMF0sIHR5cGUucGFydHNbMF0sIGNhc2VzLCBzb3VyY2VTcGFuLCBzd2l0Y2hWYWx1ZS5zb3VyY2VTcGFuKVxuICAgICk7XG5cbiAgICB0aGlzLl9hZHZhbmNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUV4cGFuc2lvbkNhc2UoKTogaHRtbC5FeHBhbnNpb25DYXNlIHwgbnVsbCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZHZhbmNlKCk7XG5cbiAgICAvLyByZWFkIHtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlICE9PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9TVEFSVCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCB0aGlzLl9wZWVrLnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd7Jy5gKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZWFkIHVudGlsIH1cbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2FkdmFuY2UoKTtcblxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX2NvbGxlY3RFeHBhbnNpb25FeHBUb2tlbnMoc3RhcnQpO1xuICAgIGlmICghZXhwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgZXhwLnB1c2gobmV3IGxleC5Ub2tlbihsZXguVG9rZW5UeXBlLkVPRiwgW10sIGVuZC5zb3VyY2VTcGFuKSk7XG5cbiAgICAvLyBwYXJzZSBldmVyeXRoaW5nIGluIGJldHdlZW4geyBhbmQgfVxuICAgIGNvbnN0IHBhcnNlZEV4cCA9IG5ldyBfVHJlZUJ1aWxkZXIoZXhwLCB0aGlzLmdldFRhZ0RlZmluaXRpb24pLmJ1aWxkKCk7XG4gICAgaWYgKHBhcnNlZEV4cC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fZXJyb3JzLmNvbmNhdChwYXJzZWRFeHAuZXJyb3JzIGFzIFRyZWVFcnJvcltdKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHZhbHVlLnNvdXJjZVNwYW4uc3RhcnQsIGVuZC5zb3VyY2VTcGFuLmVuZCk7XG4gICAgY29uc3QgZXhwU291cmNlU3BhbiA9IG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnQuc291cmNlU3Bhbi5zdGFydCwgZW5kLnNvdXJjZVNwYW4uZW5kKTtcbiAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZSh2YWx1ZS5wYXJ0c1swXSwgcGFyc2VkRXhwLnJvb3ROb2Rlcywgc291cmNlU3BhbiwgdmFsdWUuc291cmNlU3BhbiwgZXhwU291cmNlU3Bhbik7XG4gIH1cblxuICBwcml2YXRlIF9jb2xsZWN0RXhwYW5zaW9uRXhwVG9rZW5zKHN0YXJ0OiBsZXguVG9rZW4pOiBsZXguVG9rZW5bXSB8IG51bGwge1xuICAgIGNvbnN0IGV4cDogbGV4LlRva2VuW10gPSBbXTtcbiAgICBjb25zdCBleHBhbnNpb25Gb3JtU3RhY2sgPSBbbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRdO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9GT1JNX1NUQVJUIHx8XG4gICAgICAgIHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlRcbiAgICAgICkge1xuICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucHVzaCh0aGlzLl9wZWVrLnR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkVYUEFOU0lPTl9DQVNFX0VYUF9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fQ0FTRV9FWFBfU1RBUlQpKSB7XG4gICAgICAgICAgZXhwYW5zaW9uRm9ybVN0YWNrLnBvcCgpO1xuICAgICAgICAgIGlmIChleHBhbnNpb25Gb3JtU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKG51bGwsIHN0YXJ0LnNvdXJjZVNwYW4sIGBJbnZhbGlkIElDVSBtZXNzYWdlLiBNaXNzaW5nICd9Jy5gKSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9FTkQpIHtcbiAgICAgICAgaWYgKGxhc3RPblN0YWNrKGV4cGFuc2lvbkZvcm1TdGFjaywgbGV4LlRva2VuVHlwZS5FWFBBTlNJT05fRk9STV9TVEFSVCkpIHtcbiAgICAgICAgICBleHBhbnNpb25Gb3JtU3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JzLnB1c2goVHJlZUVycm9yLmNyZWF0ZShudWxsLCBzdGFydC5zb3VyY2VTcGFuLCBgSW52YWxpZCBJQ1UgbWVzc2FnZS4gTWlzc2luZyAnfScuYCkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wZWVrLnR5cGUgPT09IGxleC5Ub2tlblR5cGUuRU9GKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFRyZWVFcnJvci5jcmVhdGUobnVsbCwgc3RhcnQuc291cmNlU3BhbiwgYEludmFsaWQgSUNVIG1lc3NhZ2UuIE1pc3NpbmcgJ30nLmApKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGV4cC5wdXNoKHRoaXMuX2FkdmFuY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVRleHQodG9rZW46IGxleC5Ub2tlbikge1xuICAgIGxldCB0ZXh0ID0gdG9rZW4ucGFydHNbMF07XG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCAmJiB0ZXh0WzBdID09PSBcIlxcblwiKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgICBpZiAocGFyZW50ICE9PSBudWxsICYmIHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudC5uYW1lKS5pZ25vcmVGaXJzdExmKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9hZGRUb1BhcmVudChuZXcgaHRtbC5UZXh0KHRleHQsIHRva2VuLnNvdXJjZVNwYW4pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZVZvaWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChlbCAmJiB0aGlzLmdldFRhZ0RlZmluaXRpb24oZWwubmFtZSkuaXNWb2lkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50U3RhY2sucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZVN0YXJ0VGFnKHN0YXJ0VGFnVG9rZW46IGxleC5Ub2tlbikge1xuICAgIGNvbnN0IHByZWZpeCA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMF07XG4gICAgY29uc3QgbmFtZSA9IHN0YXJ0VGFnVG9rZW4ucGFydHNbMV07XG4gICAgY29uc3QgYXR0cnM6IGh0bWwuQXR0cmlidXRlW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfTkFNRSkge1xuICAgICAgYXR0cnMucHVzaCh0aGlzLl9jb25zdW1lQXR0cih0aGlzLl9hZHZhbmNlKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUocHJlZml4LCBuYW1lLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuICAgIGxldCBzZWxmQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8vIE5vdGU6IFRoZXJlIGNvdWxkIGhhdmUgYmVlbiBhIHRva2VuaXplciBlcnJvclxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZ2V0IGEgdG9rZW4gZm9yIHRoZSBlbmQgdGFnLi4uXG4gICAgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkRfVk9JRCkge1xuICAgICAgdGhpcy5fYWR2YW5jZSgpO1xuICAgICAgc2VsZkNsb3NpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFnRGVmID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKTtcbiAgICAgIGlmICghKHRhZ0RlZi5jYW5TZWxmQ2xvc2UgfHwgZ2V0TnNQcmVmaXgoZnVsbE5hbWUpICE9PSBudWxsIHx8IHRhZ0RlZi5pc1ZvaWQpKSB7XG4gICAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICAgIFRyZWVFcnJvci5jcmVhdGUoXG4gICAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICAgIHN0YXJ0VGFnVG9rZW4uc291cmNlU3BhbixcbiAgICAgICAgICAgIGBPbmx5IHZvaWQgYW5kIGZvcmVpZ24gZWxlbWVudHMgY2FuIGJlIHNlbGYgY2xvc2VkIFwiJHtzdGFydFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BlZWsudHlwZSA9PT0gbGV4LlRva2VuVHlwZS5UQUdfT1BFTl9FTkQpIHtcbiAgICAgIHRoaXMuX2FkdmFuY2UoKTtcbiAgICAgIHNlbGZDbG9zaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX3BlZWsuc291cmNlU3Bhbi5zdGFydDtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydFRhZ1Rva2VuLnNvdXJjZVNwYW4uc3RhcnQsIGVuZCk7XG4gICAgY29uc3QgZWwgPSBuZXcgaHRtbC5FbGVtZW50KGZ1bGxOYW1lLCBhdHRycywgW10sIHNwYW4sIHNwYW4sIHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcHVzaEVsZW1lbnQoZWwpO1xuICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgdGhpcy5fcG9wRWxlbWVudChmdWxsTmFtZSk7XG4gICAgICBlbC5lbmRTb3VyY2VTcGFuID0gc3BhbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdXNoRWxlbWVudChlbDogaHRtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCk7XG5cbiAgICBpZiAocGFyZW50RWwgJiYgdGhpcy5nZXRUYWdEZWZpbml0aW9uKHBhcmVudEVsLm5hbWUpLmlzQ2xvc2VkQnlDaGlsZChlbC5uYW1lKSkge1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnBvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ0RlZiA9IHRoaXMuZ2V0VGFnRGVmaW5pdGlvbihlbC5uYW1lKTtcbiAgICBjb25zdCB7cGFyZW50LCBjb250YWluZXJ9ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudFNraXBwaW5nQ29udGFpbmVycygpO1xuXG4gICAgaWYgKHBhcmVudCAmJiB0YWdEZWYucmVxdWlyZUV4dHJhUGFyZW50KHBhcmVudC5uYW1lKSkge1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgdGFnRGVmLnBhcmVudFRvQWRkLFxuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIGVsLnNvdXJjZVNwYW4sXG4gICAgICAgIGVsLnN0YXJ0U291cmNlU3BhbixcbiAgICAgICAgZWwuZW5kU291cmNlU3BhblxuICAgICAgKTtcbiAgICAgIHRoaXMuX2luc2VydEJlZm9yZUNvbnRhaW5lcihwYXJlbnQsIGNvbnRhaW5lciwgbmV3UGFyZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRUb1BhcmVudChlbCk7XG4gICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2goZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUVuZFRhZyhlbmRUYWdUb2tlbjogbGV4LlRva2VuKSB7XG4gICAgY29uc3QgZnVsbE5hbWUgPSB0aGlzLl9nZXRFbGVtZW50RnVsbE5hbWUoZW5kVGFnVG9rZW4ucGFydHNbMF0sIGVuZFRhZ1Rva2VuLnBhcnRzWzFdLCB0aGlzLl9nZXRQYXJlbnRFbGVtZW50KCkpO1xuXG4gICAgaWYgKHRoaXMuX2dldFBhcmVudEVsZW1lbnQoKSkge1xuICAgICAgdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpIS5lbmRTb3VyY2VTcGFuID0gZW5kVGFnVG9rZW4uc291cmNlU3BhbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRUYWdEZWZpbml0aW9uKGZ1bGxOYW1lKS5pc1ZvaWQpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKFxuICAgICAgICBUcmVlRXJyb3IuY3JlYXRlKFxuICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgIGVuZFRhZ1Rva2VuLnNvdXJjZVNwYW4sXG4gICAgICAgICAgYFZvaWQgZWxlbWVudHMgZG8gbm90IGhhdmUgZW5kIHRhZ3MgXCIke2VuZFRhZ1Rva2VuLnBhcnRzWzFdfVwiYFxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvcEVsZW1lbnQoZnVsbE5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJNc2cgPSBgVW5leHBlY3RlZCBjbG9zaW5nIHRhZyBcIiR7XG4gICAgICAgIGZ1bGxOYW1lXG4gICAgICB9XCIuIEl0IG1heSBoYXBwZW4gd2hlbiB0aGUgdGFnIGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ5IGFub3RoZXIgdGFnLiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjY2xvc2luZy1lbGVtZW50cy10aGF0LWhhdmUtaW1wbGllZC1lbmQtdGFnc2A7XG4gICAgICB0aGlzLl9lcnJvcnMucHVzaChUcmVlRXJyb3IuY3JlYXRlKGZ1bGxOYW1lLCBlbmRUYWdUb2tlbi5zb3VyY2VTcGFuLCBlcnJNc2cpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wb3BFbGVtZW50KGZ1bGxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBzdGFja0luZGV4ID0gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDE7IHN0YWNrSW5kZXggPj0gMDsgc3RhY2tJbmRleC0tKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIGlmIChlbC5uYW1lID09PSBmdWxsTmFtZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50U3RhY2suc3BsaWNlKHN0YWNrSW5kZXgsIHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSBzdGFja0luZGV4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5nZXRUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmNsb3NlZEJ5UGFyZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3VtZUF0dHIoYXR0ck5hbWU6IGxleC5Ub2tlbik6IGh0bWwuQXR0cmlidXRlIHtcbiAgICBjb25zdCBmdWxsTmFtZSA9IG1lcmdlTnNBbmROYW1lKGF0dHJOYW1lLnBhcnRzWzBdLCBhdHRyTmFtZS5wYXJ0c1sxXSk7XG4gICAgbGV0IGVuZCA9IGF0dHJOYW1lLnNvdXJjZVNwYW4uZW5kO1xuICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgbGV0IHZhbHVlU3BhbjogUGFyc2VTb3VyY2VTcGFuID0gdW5kZWZpbmVkITtcbiAgICBpZiAodGhpcy5fcGVlay50eXBlID09PSBsZXguVG9rZW5UeXBlLkFUVFJfVkFMVUUpIHtcbiAgICAgIGNvbnN0IHZhbHVlVG9rZW4gPSB0aGlzLl9hZHZhbmNlKCk7XG4gICAgICB2YWx1ZSA9IHZhbHVlVG9rZW4ucGFydHNbMF07XG4gICAgICBlbmQgPSB2YWx1ZVRva2VuLnNvdXJjZVNwYW4uZW5kO1xuICAgICAgdmFsdWVTcGFuID0gdmFsdWVUb2tlbi5zb3VyY2VTcGFuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGh0bWwuQXR0cmlidXRlKGZ1bGxOYW1lLCB2YWx1ZSwgbmV3IFBhcnNlU291cmNlU3BhbihhdHRyTmFtZS5zb3VyY2VTcGFuLnN0YXJ0LCBlbmQpLCB2YWx1ZVNwYW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50RWxlbWVudCgpOiBodG1sLkVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCA+IDAgPyB0aGlzLl9lbGVtZW50U3RhY2tbdGhpcy5fZWxlbWVudFN0YWNrLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgaW4gdGhlIERPTSBhbmQgdGhlIGNvbnRhaW5lci5cbiAgICpcbiAgICogYDxuZy1jb250YWluZXI+YCBlbGVtZW50cyBhcmUgc2tpcHBlZCBhcyB0aGV5IGFyZSBub3QgcmVuZGVyZWQgYXMgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9nZXRQYXJlbnRFbGVtZW50U2tpcHBpbmdDb250YWluZXJzKCk6IHtwYXJlbnQ6IGh0bWwuRWxlbWVudCB8IG51bGw7IGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbH0ge1xuICAgIGxldCBjb250YWluZXI6IGh0bWwuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX2VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpc05nQ29udGFpbmVyKHRoaXMuX2VsZW1lbnRTdGFja1tpXS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge3BhcmVudDogdGhpcy5fZWxlbWVudFN0YWNrW2ldLCBjb250YWluZXJ9O1xuICAgICAgfVxuICAgICAgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFN0YWNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7cGFyZW50OiBudWxsLCBjb250YWluZXJ9O1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9QYXJlbnQobm9kZTogaHRtbC5Ob2RlKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0UGFyZW50RWxlbWVudCgpO1xuICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IGEgbm9kZSBiZXR3ZWVuIHRoZSBwYXJlbnQgYW5kIHRoZSBjb250YWluZXIuXG4gICAqIFdoZW4gbm8gY29udGFpbmVyIGlzIGdpdmVuLCB0aGUgbm9kZSBpcyBhcHBlbmRlZCBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQuXG4gICAqIEFsc28gdXBkYXRlcyB0aGUgZWxlbWVudCBzdGFjayBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRCZWZvcmVDb250YWluZXIocGFyZW50OiBodG1sLkVsZW1lbnQsIGNvbnRhaW5lcjogaHRtbC5FbGVtZW50IHwgbnVsbCwgbm9kZTogaHRtbC5FbGVtZW50KSB7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FkZFRvUGFyZW50KG5vZGUpO1xuICAgICAgdGhpcy5fZWxlbWVudFN0YWNrLnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgY29udGFpbmVyIHdpdGggdGhlIG5ldyBub2RlIGluIHRoZSBjaGlsZHJlblxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNvbnRhaW5lcik7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm9vdE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRTdGFjay5zcGxpY2UodGhpcy5fZWxlbWVudFN0YWNrLmluZGV4T2YoY29udGFpbmVyKSwgMCwgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RWxlbWVudEZ1bGxOYW1lKHByZWZpeDogc3RyaW5nLCBsb2NhbE5hbWU6IHN0cmluZywgcGFyZW50RWxlbWVudDogaHRtbC5FbGVtZW50IHwgbnVsbCk6IHN0cmluZyB7XG4gICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgcHJlZml4ID0gdGhpcy5nZXRUYWdEZWZpbml0aW9uKGxvY2FsTmFtZSkuaW1wbGljaXROYW1lc3BhY2VQcmVmaXghO1xuICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCAmJiBwYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGdldE5zUHJlZml4KHBhcmVudEVsZW1lbnQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlTnNBbmROYW1lKHByZWZpeCwgbG9jYWxOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXN0T25TdGFjayhzdGFjazogYW55W10sIGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gZWxlbWVudDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4vdGFnc1wiO1xuXG5leHBvcnQgY2xhc3MgWG1sVGFnRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFRhZ0RlZmluaXRpb24ge1xuICBjbG9zZWRCeVBhcmVudCA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZztcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlID0gVGFnQ29udGVudFR5cGUuUEFSU0FCTEVfREFUQTtcbiAgaXNWb2lkID0gZmFsc2U7XG4gIGlnbm9yZUZpcnN0TGYgPSBmYWxzZTtcbiAgY2FuU2VsZkNsb3NlID0gdHJ1ZTtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNDbG9zZWRCeUNoaWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5jb25zdCBfVEFHX0RFRklOSVRJT04gPSBuZXcgWG1sVGFnRGVmaW5pdGlvbigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBYbWxUYWdEZWZpbml0aW9uIHtcbiAgcmV0dXJuIF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cblxuaW1wb3J0IHtUYWdDb250ZW50VHlwZSwgVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi90YWdzJztcblxuZXhwb3J0IGNsYXNzIEh0bWxUYWdEZWZpbml0aW9uIGltcGxlbWVudHMgVGFnRGVmaW5pdGlvbiB7XG4gIHByaXZhdGUgY2xvc2VkQnlDaGlsZHJlbjoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY2xvc2VkQnlQYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVxdWlyZWRQYXJlbnRzOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn07XG4gIHBhcmVudFRvQWRkOiBzdHJpbmc7XG4gIGltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiBzdHJpbmd8bnVsbDtcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlO1xuICBpc1ZvaWQ6IGJvb2xlYW47XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW47XG4gIGNhblNlbGZDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAge2Nsb3NlZEJ5Q2hpbGRyZW4sIHJlcXVpcmVkUGFyZW50cywgaW1wbGljaXROYW1lc3BhY2VQcmVmaXgsXG4gICAgICAgY29udGVudFR5cGUgPSBUYWdDb250ZW50VHlwZS5QQVJTQUJMRV9EQVRBLCBjbG9zZWRCeVBhcmVudCA9IGZhbHNlLCBpc1ZvaWQgPSBmYWxzZSxcbiAgICAgICBpZ25vcmVGaXJzdExmID0gZmFsc2V9OiB7XG4gICAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4/OiBzdHJpbmdbXSxcbiAgICAgICAgY2xvc2VkQnlQYXJlbnQ/OiBib29sZWFuLFxuICAgICAgICByZXF1aXJlZFBhcmVudHM/OiBzdHJpbmdbXSxcbiAgICAgICAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg/OiBzdHJpbmcsXG4gICAgICAgIGNvbnRlbnRUeXBlPzogVGFnQ29udGVudFR5cGUsXG4gICAgICAgIGlzVm9pZD86IGJvb2xlYW4sXG4gICAgICAgIGlnbm9yZUZpcnN0TGY/OiBib29sZWFuXG4gICAgICB9ID0ge30pIHtcbiAgICBpZiAoY2xvc2VkQnlDaGlsZHJlbiAmJiBjbG9zZWRCeUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNsb3NlZEJ5Q2hpbGRyZW4uZm9yRWFjaCh0YWdOYW1lID0+IHRoaXMuY2xvc2VkQnlDaGlsZHJlblt0YWdOYW1lXSA9IHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmlzVm9pZCA9IGlzVm9pZDtcbiAgICB0aGlzLmNsb3NlZEJ5UGFyZW50ID0gY2xvc2VkQnlQYXJlbnQgfHwgaXNWb2lkO1xuICAgIGlmIChyZXF1aXJlZFBhcmVudHMgJiYgcmVxdWlyZWRQYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucmVxdWlyZWRQYXJlbnRzID0ge307XG4gICAgICAvLyBUaGUgZmlyc3QgcGFyZW50IGlzIHRoZSBsaXN0IGlzIGF1dG9tYXRpY2FsbHkgd2hlbiBub25lIG9mIHRoZSBsaXN0ZWQgcGFyZW50cyBhcmUgcHJlc2VudFxuICAgICAgdGhpcy5wYXJlbnRUb0FkZCA9IHJlcXVpcmVkUGFyZW50c1swXTtcbiAgICAgIHJlcXVpcmVkUGFyZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4gdGhpcy5yZXF1aXJlZFBhcmVudHNbdGFnTmFtZV0gPSB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5pbXBsaWNpdE5hbWVzcGFjZVByZWZpeCA9IGltcGxpY2l0TmFtZXNwYWNlUHJlZml4IHx8IG51bGw7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgIHRoaXMuaWdub3JlRmlyc3RMZiA9IGlnbm9yZUZpcnN0TGY7XG4gIH1cblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnJlcXVpcmVkUGFyZW50cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbGNQYXJlbnQgPSBjdXJyZW50UGFyZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNQYXJlbnRUZW1wbGF0ZSA9IGxjUGFyZW50ID09PSAndGVtcGxhdGUnIHx8IGN1cnJlbnRQYXJlbnQgPT09ICduZy10ZW1wbGF0ZSc7XG4gICAgcmV0dXJuICFpc1BhcmVudFRlbXBsYXRlICYmIHRoaXMucmVxdWlyZWRQYXJlbnRzW2xjUGFyZW50XSAhPT0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZvaWQgfHwgbmFtZS50b0xvd2VyQ2FzZSgpIGluIHRoaXMuY2xvc2VkQnlDaGlsZHJlbjtcbiAgfVxufVxuXG4vLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUxL3N5bnRheC5odG1sI29wdGlvbmFsLXRhZ3Ncbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgZnVsbHkgY29uZm9ybSB0byB0aGUgSFRNTDUgc3BlYy5cbmNvbnN0IFRBR19ERUZJTklUSU9OUzoge1trZXk6IHN0cmluZ106IEh0bWxUYWdEZWZpbml0aW9ufSA9IHtcbiAgJ2Jhc2UnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnbWV0YSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICdhcmVhJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2VtYmVkJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2xpbmsnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAnaW1nJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2lucHV0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3BhcmFtJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2hyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ2JyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpc1ZvaWQ6IHRydWV9KSxcbiAgJ3NvdXJjZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd0cmFjayc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aXNWb2lkOiB0cnVlfSksXG4gICd3YnInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2lzVm9pZDogdHJ1ZX0pLFxuICAncCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7XG4gICAgY2xvc2VkQnlDaGlsZHJlbjogW1xuICAgICAgJ2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdibG9ja3F1b3RlJywgJ2RpdicsICdkbCcsICAgICAgJ2ZpZWxkc2V0JywgJ2Zvb3RlcicsICdmb3JtJyxcbiAgICAgICdoMScsICAgICAgJ2gyJywgICAgICAnaDMnLCAgICAnaDQnLCAgICAgICAgICdoNScsICAnaDYnLCAgICAgICdoZWFkZXInLCAgICdoZ3JvdXAnLCAnaHInLFxuICAgICAgJ21haW4nLCAgICAnbmF2JywgICAgICdvbCcsICAgICdwJywgICAgICAgICAgJ3ByZScsICdzZWN0aW9uJywgJ3RhYmxlJywgICAgJ3VsJ1xuICAgIF0sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0aGVhZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddfSksXG4gICd0Ym9keSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0Ym9keScsICd0Zm9vdCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGZvb3QnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGJvZHknXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3RyJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtcbiAgICBjbG9zZWRCeUNoaWxkcmVuOiBbJ3RyJ10sXG4gICAgcmVxdWlyZWRQYXJlbnRzOiBbJ3Rib2R5JywgJ3Rmb290JywgJ3RoZWFkJ10sXG4gICAgY2xvc2VkQnlQYXJlbnQ6IHRydWVcbiAgfSksXG4gICd0ZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWyd0ZCcsICd0aCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAndGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsndGQnLCAndGgnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ2NvbCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7cmVxdWlyZWRQYXJlbnRzOiBbJ2NvbGdyb3VwJ10sIGlzVm9pZDogdHJ1ZX0pLFxuICAnc3ZnJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtpbXBsaWNpdE5hbWVzcGFjZVByZWZpeDogJ3N2Zyd9KSxcbiAgJ21hdGgnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2ltcGxpY2l0TmFtZXNwYWNlUHJlZml4OiAnbWF0aCd9KSxcbiAgJ2xpJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ2xpJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdkdCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddfSksXG4gICdkZCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydkdCcsICdkZCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAncmInOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsncmInLCAncnQnLCAncnRjJywgJ3JwJ10sIGNsb3NlZEJ5UGFyZW50OiB0cnVlfSksXG4gICdydCc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydCcsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3J0Yyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydyYicsICdydGMnLCAncnAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3JwJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjbG9zZWRCeUNoaWxkcmVuOiBbJ3JiJywgJ3J0JywgJ3J0YycsICdycCddLCBjbG9zZWRCeVBhcmVudDogdHJ1ZX0pLFxuICAnb3B0Z3JvdXAnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2Nsb3NlZEJ5Q2hpbGRyZW46IFsnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ29wdGlvbic6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7Y2xvc2VkQnlDaGlsZHJlbjogWydvcHRpb24nLCAnb3B0Z3JvdXAnXSwgY2xvc2VkQnlQYXJlbnQ6IHRydWV9KSxcbiAgJ3ByZSc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnbGlzdGluZyc6IG5ldyBIdG1sVGFnRGVmaW5pdGlvbih7aWdub3JlRmlyc3RMZjogdHJ1ZX0pLFxuICAnc3R5bGUnOiBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5SQVdfVEVYVH0pLFxuICAnc2NyaXB0JzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuUkFXX1RFWFR9KSxcbiAgJ3RpdGxlJzogbmV3IEh0bWxUYWdEZWZpbml0aW9uKHtjb250ZW50VHlwZTogVGFnQ29udGVudFR5cGUuRVNDQVBBQkxFX1JBV19URVhUfSksXG4gICd0ZXh0YXJlYSc6XG4gICAgICBuZXcgSHRtbFRhZ0RlZmluaXRpb24oe2NvbnRlbnRUeXBlOiBUYWdDb250ZW50VHlwZS5FU0NBUEFCTEVfUkFXX1RFWFQsIGlnbm9yZUZpcnN0TGY6IHRydWV9KSxcbn07XG5cbmNvbnN0IF9ERUZBVUxUX1RBR19ERUZJTklUSU9OID0gbmV3IEh0bWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sVGFnRGVmaW5pdGlvbih0YWdOYW1lOiBzdHJpbmcpOiBIdG1sVGFnRGVmaW5pdGlvbiB7XG4gIHJldHVybiBUQUdfREVGSU5JVElPTlNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBfREVGQVVMVF9UQUdfREVGSU5JVElPTjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQge2dldEh0bWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L2h0bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIE5nTG9jYWxlTG9jYWxpemF0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTWVzc2FnZXNCeUlkIHtcbiAgW21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBYbWxNZXNzYWdlc0J5SWQge1xuICBbaWQ6IHN0cmluZ106IHhtbC5Ob2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljdUNvbnRlbnQge1xuICBjYXNlczoge1t2YWx1ZTogc3RyaW5nXTogaHRtbC5Ob2RlW119O1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJY3VDb250ZW50U3RyIHtcbiAgY2FzZXM6IHtbdmFsdWU6IHN0cmluZ106IHN0cmluZ307XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgYFBsYWNlaG9sZGVyTWFwcGVyYCBjb252ZXJ0cyBwbGFjZWhvbGRlciBuYW1lcyBmcm9tIGludGVybmFsIHRvIHNlcmlhbGl6ZWQgcmVwcmVzZW50YXRpb24gYW5kXG4gKiBiYWNrLlxuICpcbiAqIEl0IHNob3VsZCBiZSB1c2VkIGZvciBzZXJpYWxpemF0aW9uIGZvcm1hdCB0aGF0IHB1dCBjb25zdHJhaW50cyBvbiB0aGUgcGxhY2Vob2xkZXIgbmFtZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJNYXBwZXIge1xuICB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuXG4gIHRvSW50ZXJuYWxOYW1lKHB1YmxpY05hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgbWFwcGVyIHRoYXQgdGFrZSBhIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBhbiBpbnRlcm5hbCBuYW1lIHRvIGEgcHVibGljIG5hbWVcbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyIGV4dGVuZHMgaTE4bi5SZWN1cnNlVmlzaXRvciBpbXBsZW1lbnRzIFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcHJpdmF0ZSBpbnRlcm5hbFRvUHVibGljOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaWNUb05leHRJZDoge1trOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gIHByaXZhdGUgcHVibGljVG9JbnRlcm5hbDoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgLy8gY3JlYXRlIGEgbWFwcGluZyBmcm9tIHRoZSBtZXNzYWdlXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSwgcHJpdmF0ZSBtYXBOYW1lOiAobmFtZTogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIG1lc3NhZ2Uubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICB9XG5cbiAgdG9QdWJsaWNOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxUb1B1YmxpYy5oYXNPd25Qcm9wZXJ0eShpbnRlcm5hbE5hbWUpID8gdGhpcy5pbnRlcm5hbFRvUHVibGljW2ludGVybmFsTmFtZV0gOiBudWxsO1xuICB9XG5cbiAgdG9JbnRlcm5hbE5hbWUocHVibGljTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSA/IHRoaXMucHVibGljVG9JbnRlcm5hbFtwdWJsaWNOYW1lXSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmlzaXRQbGFjZWhvbGRlck5hbWUocGguc3RhcnROYW1lKTtcbiAgICBzdXBlci52aXNpdFRhZ1BsYWNlaG9sZGVyKHBoLCBjb250ZXh0KTtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLmNsb3NlTmFtZSk7XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICB0aGlzLnZpc2l0UGxhY2Vob2xkZXJOYW1lKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdFBsYWNlaG9sZGVyTmFtZShwaC5uYW1lKTtcbiAgfVxuXG4gIC8vIFhNQiBwbGFjZWhvbGRlcnMgY291bGQgb25seSBjb250YWlucyBBLVosIDAtOSBhbmQgX1xuICBwcml2YXRlIHZpc2l0UGxhY2Vob2xkZXJOYW1lKGludGVybmFsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFpbnRlcm5hbE5hbWUgfHwgdGhpcy5pbnRlcm5hbFRvUHVibGljLmhhc093blByb3BlcnR5KGludGVybmFsTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHVibGljTmFtZSA9IHRoaXMubWFwTmFtZShpbnRlcm5hbE5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHVibGljVG9JbnRlcm5hbC5oYXNPd25Qcm9wZXJ0eShwdWJsaWNOYW1lKSkge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IFhNQiB3aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgY29uc3QgbmV4dElkID0gdGhpcy5wdWJsaWNUb05leHRJZFtwdWJsaWNOYW1lXTtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSBuZXh0SWQgKyAxO1xuICAgICAgcHVibGljTmFtZSA9IGAke3B1YmxpY05hbWV9XyR7bmV4dElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGljVG9OZXh0SWRbcHVibGljTmFtZV0gPSAxO1xuICAgIH1cblxuICAgIHRoaXMuaW50ZXJuYWxUb1B1YmxpY1tpbnRlcm5hbE5hbWVdID0gcHVibGljTmFtZTtcbiAgICB0aGlzLnB1YmxpY1RvSW50ZXJuYWxbcHVibGljTmFtZV0gPSBpbnRlcm5hbE5hbWU7XG4gIH1cbn1cblxuY29uc3QgaTE4blNlbGVjdFBpcGUgPSBuZXcgSTE4blNlbGVjdFBpcGUoKTtcbmNsYXNzIFNlcmlhbGl6ZXJWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBpMThuUGx1cmFsUGlwZTogSTE4blBsdXJhbFBpcGU7XG4gIGNvbnN0cnVjdG9yKGxvY2FsZTogc3RyaW5nLCBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmkxOG5QbHVyYWxQaXBlID0gbmV3IEkxOG5QbHVyYWxQaXBlKG5ldyBOZ0xvY2FsZUxvY2FsaXphdGlvbihsb2NhbGUpKTtcbiAgfVxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGlmIChnZXRIdG1sVGFnRGVmaW5pdGlvbihlbGVtZW50Lm5hbWUpLmlzVm9pZCkge1xuICAgICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0vPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8JHtlbGVtZW50Lm5hbWV9JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuYXR0cnMsIFwiIFwiKX0+JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGVsZW1lbnQuY2hpbGRyZW4pfTwvJHtcbiAgICAgIGVsZW1lbnQubmFtZVxuICAgIH0+YDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAke2F0dHJpYnV0ZS5uYW1lfT1cIiR7YXR0cmlidXRlLnZhbHVlfVwiYDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBgPCEtLSR7Y29tbWVudC52YWx1ZX0tLT5gO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IHt9O1xuICAgIGV4cGFuc2lvbi5jYXNlcy5mb3JFYWNoKGMgPT4gKGNhc2VzW2MudmFsdWVdID0gdGhpcy5zZXJpYWxpemVOb2RlcyhjLmV4cHJlc3Npb24pKSk7XG5cbiAgICBzd2l0Y2ggKGV4cGFuc2lvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIHJldHVybiBpMThuU2VsZWN0UGlwZS50cmFuc2Zvcm0odGhpcy5wYXJhbXNbZXhwYW5zaW9uLnN3aXRjaFZhbHVlXSB8fCBcIlwiLCBjYXNlcyk7XG4gICAgICBjYXNlIFwicGx1cmFsXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5QbHVyYWxQaXBlLnRyYW5zZm9ybSh0aGlzLnBhcmFtc1tleHBhbnNpb24uc3dpdGNoVmFsdWVdLCBjYXNlcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBleHBhbnNpb24gdHlwZSBcIiR7ZXhwYW5zaW9uLnR5cGV9XCJgKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGAgJHtleHBhbnNpb25DYXNlLnZhbHVlfSB7JHt0aGlzLnNlcmlhbGl6ZU5vZGVzKGV4cGFuc2lvbkNhc2UuZXhwcmVzc2lvbil9fWA7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgam9pbiA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gam9pbiArIG5vZGVzLm1hcChhID0+IGEudmlzaXQodGhpcywgbnVsbCkpLmpvaW4oam9pbik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSwgbG9jYWxlOiBzdHJpbmcsIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KG5ldyBTZXJpYWxpemVyVmlzaXRvcihsb2NhbGUsIHBhcmFtcyksIG51bGwpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxUb1htbFBhcnNlciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSB4bWxNZXNzYWdlc0J5SWQ6IHtbaWQ6IHN0cmluZ106IHhtbC5Ob2RlfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIE1FU1NBR0VfVEFHOiBzdHJpbmcpIHt9XG5cbiAgcGFyc2UoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy54bWxNZXNzYWdlc0J5SWQgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBwYXJzZXIuZXJyb3JzO1xuICAgIGh0bWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeG1sTWVzc2FnZXNCeUlkOiB0aGlzLnhtbE1lc3NhZ2VzQnlJZCxcbiAgICAgIGVycm9yczogdGhpcy5lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSB0aGlzLk1FU1NBR0VfVEFHOlxuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdGhpcy54bWxNZXNzYWdlc0J5SWRbaWQudmFsdWVdID0gKGVsZW1lbnQgYXMgYW55KSBhcyB4bWwuTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLmlkIHx8IHNoYTEoc2VyaWFsaXplTm9kZXMobWVzc2FnZS5ub2Rlcykuam9pbihcIlwiKSArIGBbJHttZXNzYWdlLm1lYW5pbmd9XWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbERpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICBpZiAobWVzc2FnZS5pZCkge1xuICAgIHJldHVybiBtZXNzYWdlLmlkO1xuICB9XG5cbiAgY29uc3QgdmlzaXRvciA9IG5ldyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvcigpO1xuICBjb25zdCBwYXJ0cyA9IG1lc3NhZ2Uubm9kZXMubWFwKGEgPT4gYS52aXNpdCh2aXNpdG9yLCBudWxsKSk7XG4gIHJldHVybiBjb21wdXRlTXNnSWQocGFydHMuam9pbihcIlwiKSwgbWVzc2FnZS5tZWFuaW5nKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGkxOG4gaHRtbCB0byBzb21ldGhpbmcgeG1sLWxpa2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYW4gVUlELlxuICpcbiAqIFRoZSB2aXNpdG9yIGlzIGFsc28gdXNlZCBpbiB0aGUgaTE4biBwYXJzZXIgdGVzdHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYFske2NvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oXCIsIFwiKX1dYDtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgc3RyQ2FzZXMgPSBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLm1hcCgoazogc3RyaW5nKSA9PiBgJHtrfSB7JHtpY3UuY2FzZXNba10udmlzaXQodGhpcyl9fWApO1xuICAgIHJldHVybiBgeyR7aWN1LmV4cHJlc3Npb259LCAke2ljdS50eXBlfSwgJHtzdHJDYXNlcy5qb2luKFwiLCBcIil9fWA7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBwaC5pc1ZvaWRcbiAgICAgID8gYDxwaCB0YWcgbmFtZT1cIiR7cGguc3RhcnROYW1lfVwiLz5gXG4gICAgICA6IGA8cGggdGFnIG5hbWU9XCIke3BoLnN0YXJ0TmFtZX1cIj4ke3BoLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzKSkuam9pbihcIiwgXCIpfTwvcGggbmFtZT1cIiR7XG4gICAgICAgICAgcGguY2xvc2VOYW1lXG4gICAgICAgIH1cIj5gO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gcGgudmFsdWUgPyBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCI+JHtwaC52YWx1ZX08L3BoPmAgOiBgPHBoIG5hbWU9XCIke3BoLm5hbWV9XCIvPmA7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gYDxwaCBpY3UgbmFtZT1cIiR7cGgubmFtZX1cIj4ke3BoLnZhbHVlLnZpc2l0KHRoaXMpfTwvcGg+YDtcbiAgfVxufVxuXG5jb25zdCBzZXJpYWxpemVyVmlzaXRvciA9IG5ldyBTZXJpYWxpemVyVmlzaXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTm9kZXMobm9kZXM6IGkxOG4uTm9kZVtdKTogc3RyaW5nW10ge1xuICByZXR1cm4gbm9kZXMubWFwKGEgPT4gYS52aXNpdChzZXJpYWxpemVyVmlzaXRvciwgbnVsbCkpO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgaTE4biBodG1sIHRvIHNvbWV0aGluZyB4bWwtbGlrZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhbiBVSUQuXG4gKlxuICogSWdub3JlIHRoZSBJQ1UgZXhwcmVzc2lvbnMgc28gdGhhdCBtZXNzYWdlIElEcyBzdGF5cyBpZGVudGljYWwgaWYgb25seSB0aGUgZXhwcmVzc2lvbiBjaGFuZ2VzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBTZXJpYWxpemVySWdub3JlSWN1RXhwVmlzaXRvciBleHRlbmRzIFNlcmlhbGl6ZXJWaXNpdG9yIHtcbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHJDYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKChrOiBzdHJpbmcpID0+IGAke2t9IHske2ljdS5jYXNlc1trXS52aXNpdCh0aGlzKX19YCk7XG4gICAgLy8gRG8gbm90IHRha2UgdGhlIGV4cHJlc3Npb24gaW50byBhY2NvdW50XG4gICAgcmV0dXJuIGB7JHtpY3UudHlwZX0sICR7c3RyQ2FzZXMuam9pbihcIiwgXCIpfX1gO1xuICB9XG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgU0hBMSBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gKlxuICogc2VlIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtNC9maXBzLTE4MC00LnBkZlxuICpcbiAqIFdBUk5JTkc6IHRoaXMgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGRlc2lnbmVkIG5vdCB0ZXN0ZWQgd2l0aCBzZWN1cml0eSBpbiBtaW5kLlxuICogICAgICAgICAgRE8gTk9UIFVTRSBJVCBJTiBBIFNFQ1VSSVRZIFNFTlNJVElWRSBDT05URVhULlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhMShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHV0ZjggPSB1dGY4RW5jb2RlKHN0cik7XG4gIGNvbnN0IHdvcmRzMzIgPSBzdHJpbmdUb1dvcmRzMzIodXRmOCwgRW5kaWFuLkJpZyk7XG4gIGNvbnN0IGxlbiA9IHV0ZjgubGVuZ3RoICogODtcblxuICBjb25zdCB3ID0gbmV3IEFycmF5KDgwKTtcbiAgbGV0IFthLCBiLCBjLCBkLCBlXTogbnVtYmVyW10gPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgd29yZHMzMltsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XG4gIHdvcmRzMzJbKCgobGVuICsgNjQpID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBbaDAsIGgxLCBoMiwgaDMsIGg0XTogbnVtYmVyW10gPSBbYSwgYiwgYywgZCwgZV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKGogPCAxNikge1xuICAgICAgICB3W2pdID0gd29yZHMzMltpICsgal07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3W2pdID0gcm9sMzIod1tqIC0gM10gXiB3W2ogLSA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtmLCBrXSA9IGZrKGosIGIsIGMsIGQpO1xuICAgICAgY29uc3QgdGVtcCA9IFtyb2wzMihhLCA1KSwgZiwgZSwgaywgd1tqXV0ucmVkdWNlKGFkZDMyKTtcbiAgICAgIFtlLCBkLCBjLCBiLCBhXSA9IFtkLCBjLCByb2wzMihiLCAzMCksIGEsIHRlbXBdO1xuICAgIH1cblxuICAgIFthLCBiLCBjLCBkLCBlXSA9IFthZGQzMihhLCBoMCksIGFkZDMyKGIsIGgxKSwgYWRkMzIoYywgaDIpLCBhZGQzMihkLCBoMyksIGFkZDMyKGUsIGg0KV07XG4gIH1cblxuICByZXR1cm4gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2EsIGIsIGMsIGQsIGVdKSk7XG59XG5cbmZ1bmN0aW9uIGZrKGluZGV4OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgaWYgKGluZGV4IDwgMjApIHtcbiAgICByZXR1cm4gWyhiICYgYykgfCAofmIgJiBkKSwgMHg1YTgyNzk5OV07XG4gIH1cblxuICBpZiAoaW5kZXggPCA0MCkge1xuICAgIHJldHVybiBbYiBeIGMgXiBkLCAweDZlZDllYmExXTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDYwKSB7XG4gICAgcmV0dXJuIFsoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCksIDB4OGYxYmJjZGNdO1xuICB9XG5cbiAgcmV0dXJuIFtiIF4gYyBeIGQsIDB4Y2E2MmMxZDZdO1xufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIGZpbmdlcnByaW50IG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIDY0IGJpdCBudW1iZXIgZW5jb2RlZCBhcyBhIGRlY2ltYWwgc3RyaW5nXG4gKlxuICogYmFzZWQgb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvYmxvYi9tYXN0ZXIvc3JjL2NvbS9nb29nbGUvamF2YXNjcmlwdC9qc2NvbXAvR29vZ2xlSnNNZXNzYWdlSWRHZW5lcmF0b3IuamF2YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZ2VycHJpbnQoc3RyOiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgdXRmOCA9IHV0ZjhFbmNvZGUoc3RyKTtcblxuICBsZXQgW2hpLCBsb10gPSBbaGFzaDMyKHV0ZjgsIDApLCBoYXNoMzIodXRmOCwgMTAyMDcyKV07XG5cbiAgaWYgKGhpID09PSAwICYmIChsbyA9PT0gMCB8fCBsbyA9PT0gMSkpIHtcbiAgICBoaSA9IGhpIF4gMHgxMzBmOWJlZjtcbiAgICBsbyA9IGxvIF4gLTB4NmI1ZjU2ZDg7XG4gIH1cblxuICByZXR1cm4gW2hpLCBsb107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTXNnSWQobXNnOiBzdHJpbmcsIG1lYW5pbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBbaGksIGxvXSA9IGZpbmdlcnByaW50KG1zZyk7XG5cbiAgaWYgKG1lYW5pbmcpIHtcbiAgICBjb25zdCBbaGltLCBsb21dID0gZmluZ2VycHJpbnQobWVhbmluZyk7XG4gICAgW2hpLCBsb10gPSBhZGQ2NChyb2w2NChbaGksIGxvXSwgMSksIFtoaW0sIGxvbV0pO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVTdHJpbmdUb0RlY1N0cmluZyh3b3JkczMyVG9CeXRlU3RyaW5nKFtoaSAmIDB4N2ZmZmZmZmYsIGxvXSkpO1xufVxuXG5mdW5jdGlvbiBoYXNoMzIoc3RyOiBzdHJpbmcsIGM6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBbYSwgYl0gPSBbMHg5ZTM3NzliOSwgMHg5ZTM3NzliOV07XG4gIGxldCBpOiBudW1iZXI7XG5cbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpICsgMTIgPD0gbGVuOyBpICs9IDEyKSB7XG4gICAgYSA9IGFkZDMyKGEsIHdvcmRBdChzdHIsIGksIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBiID0gYWRkMzIoYiwgd29yZEF0KHN0ciwgaSArIDQsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpKTtcbiAgICBbYSwgYiwgY10gPSBtaXgoW2EsIGIsIGNdKTtcbiAgfVxuXG4gIGEgPSBhZGQzMihhLCB3b3JkQXQoc3RyLCBpLCBFbmRpYW4uTGl0dGxlKSk7XG4gIGIgPSBhZGQzMihiLCB3b3JkQXQoc3RyLCBpICsgNCwgRW5kaWFuLkxpdHRsZSkpO1xuICAvLyB0aGUgZmlyc3QgYnl0ZSBvZiBjIGlzIHJlc2VydmVkIGZvciB0aGUgbGVuZ3RoXG4gIGMgPSBhZGQzMihjLCBsZW4pO1xuICBjID0gYWRkMzIoYywgd29yZEF0KHN0ciwgaSArIDgsIEVuZGlhbi5MaXR0bGUpIDw8IDgpO1xuXG4gIHJldHVybiBtaXgoW2EsIGIsIGNdKVsyXTtcbn1cblxuLy8gY2xhbmctZm9ybWF0IG9mZlxuZnVuY3Rpb24gbWl4KFthLCBiLCBjXTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgYSA9IHN1YjMyKGEsIGIpO1xuICBhID0gc3ViMzIoYSwgYyk7XG4gIGEgXj0gYyA+Pj4gMTM7XG4gIGIgPSBzdWIzMihiLCBjKTtcbiAgYiA9IHN1YjMyKGIsIGEpO1xuICBiIF49IGEgPDwgODtcbiAgYyA9IHN1YjMyKGMsIGEpO1xuICBjID0gc3ViMzIoYywgYik7XG4gIGMgXj0gYiA+Pj4gMTM7XG4gIGEgPSBzdWIzMihhLCBiKTtcbiAgYSA9IHN1YjMyKGEsIGMpO1xuICBhIF49IGMgPj4+IDEyO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDE2O1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiA1O1xuICBhID0gc3ViMzIoYSwgYik7XG4gIGEgPSBzdWIzMihhLCBjKTtcbiAgYSBePSBjID4+PiAzO1xuICBiID0gc3ViMzIoYiwgYyk7XG4gIGIgPSBzdWIzMihiLCBhKTtcbiAgYiBePSBhIDw8IDEwO1xuICBjID0gc3ViMzIoYywgYSk7XG4gIGMgPSBzdWIzMihjLCBiKTtcbiAgYyBePSBiID4+PiAxNTtcbiAgcmV0dXJuIFthLCBiLCBjXTtcbn1cbi8vIGNsYW5nLWZvcm1hdCBvblxuXG4vLyBVdGlsc1xuXG5lbnVtIEVuZGlhbiB7XG4gIExpdHRsZSxcbiAgQmlnXG59XG5cbmZ1bmN0aW9uIGFkZDMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGFkZDMydG82NChhLCBiKVsxXTtcbn1cblxuZnVuY3Rpb24gYWRkMzJ0bzY0KGE6IG51bWJlciwgYjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGxvdyA9IChhICYgMHhmZmZmKSArIChiICYgMHhmZmZmKTtcbiAgY29uc3QgaGlnaCA9IChhID4+PiAxNikgKyAoYiA+Pj4gMTYpICsgKGxvdyA+Pj4gMTYpO1xuICByZXR1cm4gW2hpZ2ggPj4+IDE2LCAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKV07XG59XG5cbmZ1bmN0aW9uIGFkZDY0KFthaCwgYWxdOiBbbnVtYmVyLCBudW1iZXJdLCBbYmgsIGJsXTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBbY2FycnksIGxdID0gYWRkMzJ0bzY0KGFsLCBibCk7XG4gIGNvbnN0IGggPSBhZGQzMihhZGQzMihhaCwgYmgpLCBjYXJyeSk7XG4gIHJldHVybiBbaCwgbF07XG59XG5cbmZ1bmN0aW9uIHN1YjMyKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpIC0gKGIgJiAweGZmZmYpO1xuICBjb25zdCBoaWdoID0gKGEgPj4gMTYpIC0gKGIgPj4gMTYpICsgKGxvdyA+PiAxNik7XG4gIHJldHVybiAoaGlnaCA8PCAxNikgfCAobG93ICYgMHhmZmZmKTtcbn1cblxuLy8gUm90YXRlIGEgMzJiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDMyKGE6IG51bWJlciwgY291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoYSA8PCBjb3VudCkgfCAoYSA+Pj4gKDMyIC0gY291bnQpKTtcbn1cblxuLy8gUm90YXRlIGEgNjRiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbmZ1bmN0aW9uIHJvbDY0KFtoaSwgbG9dOiBbbnVtYmVyLCBudW1iZXJdLCBjb3VudDogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGggPSAoaGkgPDwgY291bnQpIHwgKGxvID4+PiAoMzIgLSBjb3VudCkpO1xuICBjb25zdCBsID0gKGxvIDw8IGNvdW50KSB8IChoaSA+Pj4gKDMyIC0gY291bnQpKTtcbiAgcmV0dXJuIFtoLCBsXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9Xb3JkczMyKHN0cjogc3RyaW5nLCBlbmRpYW46IEVuZGlhbik6IG51bWJlcltdIHtcbiAgY29uc3Qgd29yZHMzMiA9IEFycmF5KChzdHIubGVuZ3RoICsgMykgPj4+IDIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMzMi5sZW5ndGg7IGkrKykge1xuICAgIHdvcmRzMzJbaV0gPSB3b3JkQXQoc3RyLCBpICogNCwgZW5kaWFuKTtcbiAgfVxuXG4gIHJldHVybiB3b3JkczMyO1xufVxuXG5mdW5jdGlvbiBieXRlQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gaW5kZXggPj0gc3RyLmxlbmd0aCA/IDAgOiBzdHIuY2hhckNvZGVBdChpbmRleCkgJiAweGZmO1xufVxuXG5mdW5jdGlvbiB3b3JkQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGVuZGlhbjogRW5kaWFuKTogbnVtYmVyIHtcbiAgbGV0IHdvcmQgPSAwO1xuICBpZiAoZW5kaWFuID09PSBFbmRpYW4uQmlnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHdvcmQgKz0gYnl0ZUF0KHN0ciwgaW5kZXggKyBpKSA8PCAoMjQgLSA4ICogaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgKDggKiBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdvcmQ7XG59XG5cbmZ1bmN0aW9uIHdvcmRzMzJUb0J5dGVTdHJpbmcod29yZHMzMjogbnVtYmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gd29yZHMzMi5yZWR1Y2UoKHN0ciwgd29yZCkgPT4gc3RyICsgd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQpLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQ6IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3b3JkID4+PiAoOCAqICgzIC0gaSkpKSAmIDB4ZmYpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVTdHJpbmdUb0hleFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBoZXggPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGIgPSBieXRlQXQoc3RyLCBpKTtcbiAgICBoZXggKz0gKGIgPj4+IDQpLnRvU3RyaW5nKDE2KSArIChiICYgMHgwZikudG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gYmFzZWQgb24gaHR0cDovL3d3dy5kYW52ay5vcmcvaGV4MmRlYy5odG1sIChKUyBjYW4gbm90IGhhbmRsZSBtb3JlIHRoYW4gNTZiKVxuZnVuY3Rpb24gYnl0ZVN0cmluZ1RvRGVjU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGRlY2ltYWwgPSBcIlwiO1xuICBsZXQgdG9UaGVQb3dlciA9IFwiMVwiO1xuXG4gIGZvciAobGV0IGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkZWNpbWFsID0gYWRkQmlnSW50KGRlY2ltYWwsIG51bWJlclRpbWVzQmlnSW50KGJ5dGVBdChzdHIsIGkpLCB0b1RoZVBvd2VyKSk7XG4gICAgdG9UaGVQb3dlciA9IG51bWJlclRpbWVzQmlnSW50KDI1NiwgdG9UaGVQb3dlcik7XG4gIH1cblxuICByZXR1cm4gZGVjaW1hbFxuICAgIC5zcGxpdChcIlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbihcIlwiKTtcbn1cblxuLy8geCBhbmQgeSBkZWNpbWFsLCBsb3dlc3Qgc2lnbmlmaWNhbnQgZGlnaXQgZmlyc3RcbmZ1bmN0aW9uIGFkZEJpZ0ludCh4OiBzdHJpbmcsIHk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzdW0gPSBcIlwiO1xuICBjb25zdCBsZW4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMCwgY2FycnkgPSAwOyBpIDwgbGVuIHx8IGNhcnJ5OyBpKyspIHtcbiAgICBjb25zdCB0bXBTdW0gPSBjYXJyeSArICsoeFtpXSB8fCAwKSArICsoeVtpXSB8fCAwKTtcbiAgICBpZiAodG1wU3VtID49IDEwKSB7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgICBzdW0gKz0gdG1wU3VtIC0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIHN1bSArPSB0bXBTdW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyVGltZXNCaWdJbnQobnVtOiBudW1iZXIsIGI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBwcm9kdWN0ID0gXCJcIjtcbiAgbGV0IGJUb1RoZVBvd2VyID0gYjtcbiAgZm9yICg7IG51bSAhPT0gMDsgbnVtID0gbnVtID4+PiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHByb2R1Y3QgPSBhZGRCaWdJbnQocHJvZHVjdCwgYlRvVGhlUG93ZXIpO1xuICAgIH1cbiAgICBiVG9UaGVQb3dlciA9IGFkZEJpZ0ludChiVG9UaGVQb3dlciwgYlRvVGhlUG93ZXIpO1xuICB9XG4gIHJldHVybiBwcm9kdWN0O1xufVxuXG5mdW5jdGlvbiB1dGY4RW5jb2RlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCBjb2RlUG9pbnQgPSBzdHIuY2hhckNvZGVBdChpbmRleCk7XG5cbiAgICAvLyBkZWNvZGUgc3Vycm9nYXRlXG4gICAgLy8gc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIGlmIChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRiZmYgJiYgc3RyLmxlbmd0aCA+IGluZGV4ICsgMSkge1xuICAgICAgY29uc3QgbG93ID0gc3RyLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgIGlmIChsb3cgPj0gMHhkYzAwICYmIGxvdyA8PSAweGRmZmYpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29kZVBvaW50ID0gKChjb2RlUG9pbnQgLSAweGQ4MDApIDw8IDEwKSArIGxvdyAtIDB4ZGMwMCArIDB4MTAwMDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA8PSAweDdmKSB7XG4gICAgICBlbmNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDdmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxZikgfCAweGMwLCAoY29kZVBvaW50ICYgMHgzZikgfCAweDgwKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcbiAgICAgIGVuY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKGNvZGVQb2ludCA+PiAxMikgfCAweGUwLFxuICAgICAgICAoKGNvZGVQb2ludCA+PiA2KSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKGNvZGVQb2ludCAmIDB4M2YpIHwgMHg4MFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8PSAweDFmZmZmZikge1xuICAgICAgZW5jb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4ZjAsXG4gICAgICAgICgoY29kZVBvaW50ID4+IDEyKSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgKChjb2RlUG9pbnQgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgIChjb2RlUG9pbnQgJiAweDNmKSB8IDB4ODBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIHhtbCBmcm9tIFwiLi94bWxfaGVscGVyXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0WG1sVGFnRGVmaW5pdGlvbn0gZnJvbSBcIi4uL2FzdC94bWxfdGFnc1wiO1xuaW1wb3J0IHtIdG1sVG9YbWxQYXJzZXIsIEkxOG5NZXNzYWdlc0J5SWQsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuaW1wb3J0IHtkaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMS4yXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoxLjJcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9UQUcgPSBcInhcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ0cmFucy11bml0XCI7XG5jb25zdCBfQ09OVEVYVF9HUk9VUF9UQUcgPSBcImNvbnRleHQtZ3JvdXBcIjtcbmNvbnN0IF9DT05URVhUX1RBRyA9IFwiY29udGV4dFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB4bGlmZkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZlBhcnNlciA9IG5ldyBYbGlmZlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBtZXNzYWdlc1xuICBjb25zdCBpMThuTWVzc2FnZXNCeUlkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTWVzc2FnZXNCeUlkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIGkxOG5NZXNzYWdlc0J5SWQ7XG59XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL29zL3hsaWZmLWNvcmUuaHRtbFxuLy8gaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi94bGlmZi1wcm9maWxlLWh0bWwveGxpZmYtcHJvZmlsZS1odG1sLTEuMi5odG1sXG5leHBvcnQgZnVuY3Rpb24geGxpZmZXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2Rlcz86IHhtbC5Ob2RlW10pOiBzdHJpbmcge1xuICBjb25zdCB2aXNpdG9yID0gbmV3IFdyaXRlVmlzaXRvcigpO1xuICBjb25zdCB0cmFuc1VuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDYpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgY29udGV4dFRhZ3M6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0R3JvdXBUYWcgPSBuZXcgeG1sLlRhZyhfQ09OVEVYVF9HUk9VUF9UQUcsIHtwdXJwb3NlOiBcImxvY2F0aW9uXCJ9KTtcbiAgICAgIGNvbnRleHRHcm91cFRhZy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICBuZXcgeG1sLkNSKDEwKSxcbiAgICAgICAgbmV3IHhtbC5UYWcoX0NPTlRFWFRfVEFHLCB7XCJjb250ZXh0LXR5cGVcIjogXCJzb3VyY2VmaWxlXCJ9LCBbbmV3IHhtbC5UZXh0KHNvdXJjZS5maWxlUGF0aCldKSxcbiAgICAgICAgbmV3IHhtbC5DUigxMCksXG4gICAgICAgIG5ldyB4bWwuVGFnKF9DT05URVhUX1RBRywge1wiY29udGV4dC10eXBlXCI6IFwibGluZW51bWJlclwifSwgW25ldyB4bWwuVGV4dChgJHtzb3VyY2Uuc3RhcnRMaW5lfWApXSksXG4gICAgICAgIG5ldyB4bWwuQ1IoOClcbiAgICAgICk7XG4gICAgICBjb250ZXh0VGFncy5wdXNoKG5ldyB4bWwuQ1IoOCksIGNvbnRleHRHcm91cFRhZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cmFuc1VuaXQgPSBuZXcgeG1sLlRhZyhfVU5JVF9UQUcsIHtpZDogbWVzc2FnZS5pZCwgZGF0YXR5cGU6IFwiaHRtbFwifSk7XG4gICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCB2aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKSksXG4gICAgICAuLi5jb250ZXh0VGFnc1xuICAgICk7XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcImRlc2NyaXB0aW9uXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UuZGVzY3JpcHRpb24pXSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgdHJhbnNVbml0LmNoaWxkcmVuLnB1c2goXG4gICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgIG5ldyB4bWwuVGFnKFwibm90ZVwiLCB7cHJpb3JpdHk6IFwiMVwiLCBmcm9tOiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyYW5zVW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuXG4gICAgdHJhbnNVbml0cy5wdXNoKG5ldyB4bWwuQ1IoNiksIHRyYW5zVW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgeG1sLlRhZyhcImJvZHlcIiwge30sIFsuLi50cmFuc1VuaXRzLCBuZXcgeG1sLkNSKDQpXSk7XG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhcbiAgICBcImZpbGVcIixcbiAgICB7XG4gICAgICBcInNvdXJjZS1sYW5ndWFnZVwiOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkcsXG4gICAgICBkYXRhdHlwZTogXCJwbGFpbnRleHRcIixcbiAgICAgIG9yaWdpbmFsOiBcIm5nMi50ZW1wbGF0ZVwiXG4gICAgfSxcbiAgICBbbmV3IHhtbC5DUig0KSwgYm9keSwgbmV3IHhtbC5DUigyKV1cbiAgKTtcbiAgY29uc3QgeGxpZmYgPSBuZXcgeG1sLlRhZyhcInhsaWZmXCIsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOU30sIFtuZXcgeG1sLkNSKDIpLCBmaWxlLCBuZXcgeG1sLkNSKCldKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmRGlnZXN0ID0gZGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsITtcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVU5JVF9UQUd9PiBtaXNzZXMgdGhlIFwiaWRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlkQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodGhpcy5fbXNnSWRUb0h0bWwuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgRHVwbGljYXRlZCB0cmFuc2xhdGlvbnMgZm9yIG1zZyAke2lkfWApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdW5pdE1sU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21zZ0lkVG9IdG1sW2lkXSA9IHRoaXMuX3VuaXRNbFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBNZXNzYWdlICR7aWR9IG1pc3NlcyBhIHRyYW5zbGF0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9TT1VSQ0VfVEFHOlxuICAgICAgICAvLyBpZ25vcmUgc291cmNlIG1lc3NhZ2VcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RBUkdFVF9UQUc6XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dFN0YXJ0ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLmVuZC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5zdGFydFNvdXJjZVNwYW4hLnN0YXJ0LmZpbGUuY29udGVudDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0ID0gY29udGVudC5zbGljZShpbm5lclRleHRTdGFydCwgaW5uZXJUZXh0RW5kKTtcbiAgICAgICAgdGhpcy5fdW5pdE1sU3RyaW5nID0gaW5uZXJUZXh0O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfRklMRV9UQUc6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETyh2aWNiKTogYXNzZXJ0IGZpbGUgc3RydWN0dXJlLCB4bGlmZiB2ZXJzaW9uXG4gICAgICAgIC8vIEZvciBub3cgb25seSByZWN1cnNlIG9uIHVuaGFuZGxlZCBub2Rlc1xuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogaTE4bi5QbGFjZWhvbGRlciB8IG51bGwge1xuICAgIGlmIChlbC5uYW1lID09PSBfUExBQ0VIT0xERVJfVEFHKSB7XG4gICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICBpZiAobmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIG5hbWVBdHRyLnZhbHVlLCBlbC5zb3VyY2VTcGFuISk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGN0eXBlID0gZ2V0Q3R5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5zdGFydE5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwke3BoLnRhZ30vPmB9KV07XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRUYWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGguc3RhcnROYW1lLCBjdHlwZSwgXCJlcXVpdi10ZXh0XCI6IGA8JHtwaC50YWd9PmB9KTtcbiAgICBjb25zdCBjbG9zZVRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge2lkOiBwaC5jbG9zZU5hbWUsIGN0eXBlLCBcImVxdWl2LXRleHRcIjogYDwvJHtwaC50YWd9PmB9KTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGB7eyR7cGgudmFsdWV9fX1gfSldO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGVxdWl2VGV4dCA9IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKX19YDtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtpZDogcGgubmFtZSwgXCJlcXVpdi10ZXh0XCI6IGVxdWl2VGV4dH0pXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICAgIHJldHVybiBcImxiXCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGB4LSR7dGFnfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0ICogYXMgeG1sIGZyb20gXCIuL3htbF9oZWxwZXJcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5FcnJvcn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5pbXBvcnQge0h0bWxUb1htbFBhcnNlciwgSTE4bk1lc3NhZ2VzQnlJZCwgWG1sTWVzc2FnZXNCeUlkfSBmcm9tIFwiLi9zZXJpYWxpemVyXCI7XG5pbXBvcnQge2RlY2ltYWxEaWdlc3R9IGZyb20gXCIuL2RpZ2VzdFwiO1xuXG5jb25zdCBfVkVSU0lPTiA9IFwiMi4wXCI7XG5jb25zdCBfWE1MTlMgPSBcInVybjpvYXNpczpuYW1lczp0Yzp4bGlmZjpkb2N1bWVudDoyLjBcIjtcbmNvbnN0IF9ERUZBVUxUX1NPVVJDRV9MQU5HID0gXCJlblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcgPSBcInBjXCI7XG5jb25zdCBfWExJRkZfVEFHID0gXCJ4bGlmZlwiO1xuY29uc3QgX1NPVVJDRV9UQUcgPSBcInNvdXJjZVwiO1xuY29uc3QgX1RBUkdFVF9UQUcgPSBcInRhcmdldFwiO1xuY29uc3QgX1VOSVRfVEFHID0gXCJ1bml0XCI7XG5jb25zdCBfTk9URVNfVEFHID0gXCJub3Rlc1wiO1xuY29uc3QgX05PVEVfVEFHID0gXCJub3RlXCI7XG5jb25zdCBfU0VHTUVOVF9UQUcgPSBcInNlZ21lbnRcIjtcbmNvbnN0IF9GSUxFX1RBRyA9IFwiZmlsZVwiO1xuXG4vLyBodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi94bGlmZi1jb3JlL3YyLjAvb3MveGxpZmYtY29yZS12Mi4wLW9zLmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9JMThuKGNvbnRlbnQ6IHN0cmluZyk6IEkxOG5NZXNzYWdlc0J5SWQge1xuICAvLyB4bGlmZiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeGxpZmYyUGFyc2VyID0gbmV3IFhsaWZmMlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yc30gPSB4bGlmZjJQYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICBPYmplY3Qua2V5cyhtc2dJZFRvSHRtbCkuZm9yRWFjaChtc2dJZCA9PiB7XG4gICAgY29uc3Qge2kxOG5Ob2RlcywgZXJyb3JzOiBlfSA9IGNvbnZlcnRlci5jb252ZXJ0KG1zZ0lkVG9IdG1sW21zZ0lkXSk7XG4gICAgZXJyb3JzLnB1c2goLi4uZSk7XG4gICAgaTE4bk5vZGVzQnlNc2dJZFttc2dJZF0gPSBpMThuTm9kZXM7XG4gIH0pO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4gaTE4bk5vZGVzQnlNc2dJZDtcbn1cblxuLy8gdXNlZCB0byBtZXJnZSB0cmFuc2xhdGlvbnMgd2hlbiBleHRyYWN0aW5nXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyTG9hZFRvWG1sKGNvbnRlbnQ6IHN0cmluZyk6IFhtbE1lc3NhZ2VzQnlJZCB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sVG9YbWxQYXJzZXIoX1VOSVRfVEFHKTtcbiAgY29uc3Qge3htbE1lc3NhZ2VzQnlJZCwgZXJyb3JzfSA9IHBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeGxpZmYyIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgcmV0dXJuIHhtbE1lc3NhZ2VzQnlJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMldyaXRlKG1lc3NhZ2VzOiBpMThuLk1lc3NhZ2VbXSwgbG9jYWxlOiBzdHJpbmcgfCBudWxsLCBleGlzdGluZ05vZGVzPzogeG1sLk5vZGVbXSk6IHN0cmluZyB7XG4gIGNvbnN0IHZpc2l0b3IgPSBuZXcgV3JpdGVWaXNpdG9yKCk7XG4gIGNvbnN0IHVuaXRzOiB4bWwuTm9kZVtdID0gZXhpc3RpbmdOb2RlcyAmJiBleGlzdGluZ05vZGVzLmxlbmd0aCA/IFtuZXcgeG1sLkNSKDQpLCAuLi5leGlzdGluZ05vZGVzXSA6IFtdO1xuXG4gIG1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IG5ldyB4bWwuVGFnKF9VTklUX1RBRywge2lkOiBtZXNzYWdlLmlkfSk7XG4gICAgY29uc3Qgbm90ZXMgPSBuZXcgeG1sLlRhZyhfTk9URVNfVEFHKTtcblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uIHx8IG1lc3NhZ2UubWVhbmluZyB8fCBtZXNzYWdlLnNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgIG5ldyB4bWwuQ1IoOCksXG4gICAgICAgICAgbmV3IHhtbC5UYWcoX05PVEVfVEFHLCB7Y2F0ZWdvcnk6IFwiZGVzY3JpcHRpb25cIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5kZXNjcmlwdGlvbildKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVzc2FnZS5tZWFuaW5nKSB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJtZWFuaW5nXCJ9LCBbbmV3IHhtbC5UZXh0KG1lc3NhZ2UubWVhbmluZyldKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJsb2NhdGlvblwifSwgW1xuICAgICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgICBgJHtzb3VyY2UuZmlsZVBhdGh9OiR7c291cmNlLnN0YXJ0TGluZX0ke3NvdXJjZS5lbmRMaW5lICE9PSBzb3VyY2Uuc3RhcnRMaW5lID8gXCIsXCIgKyBzb3VyY2UuZW5kTGluZSA6IFwiXCJ9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpKTtcbiAgICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBub3Rlcyk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBzZWdtZW50ID0gbmV3IHhtbC5UYWcoX1NFR01FTlRfVEFHKTtcblxuICAgIHNlZ21lbnQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDgpLCBuZXcgeG1sLlRhZyhfU09VUkNFX1RBRywge30sIHZpc2l0b3Iuc2VyaWFsaXplKG1lc3NhZ2Uubm9kZXMpKSwgbmV3IHhtbC5DUig2KSk7XG5cbiAgICB1bml0LmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUig2KSwgc2VnbWVudCwgbmV3IHhtbC5DUig0KSk7XG5cbiAgICB1bml0cy5wdXNoKG5ldyB4bWwuQ1IoNCksIHVuaXQpO1xuICB9KTtcblxuICBjb25zdCBmaWxlID0gbmV3IHhtbC5UYWcoX0ZJTEVfVEFHLCB7b3JpZ2luYWw6IFwibmcudGVtcGxhdGVcIiwgaWQ6IFwibmdpMThuXCJ9LCBbLi4udW5pdHMsIG5ldyB4bWwuQ1IoMildKTtcblxuICBjb25zdCB4bGlmZiA9IG5ldyB4bWwuVGFnKF9YTElGRl9UQUcsIHt2ZXJzaW9uOiBfVkVSU0lPTiwgeG1sbnM6IF9YTUxOUywgc3JjTGFuZzogbG9jYWxlIHx8IF9ERUZBVUxUX1NPVVJDRV9MQU5HfSwgW1xuICAgIG5ldyB4bWwuQ1IoMiksXG4gICAgZmlsZSxcbiAgICBuZXcgeG1sLkNSKClcbiAgXSk7XG5cbiAgcmV0dXJuIHhtbC5zZXJpYWxpemUoW25ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246IFwiMS4wXCIsIGVuY29kaW5nOiBcIlVURi04XCJ9KSwgbmV3IHhtbC5DUigpLCB4bGlmZiwgbmV3IHhtbC5DUigpXSk7XG59XG5cbmV4cG9ydCBjb25zdCB4bGlmZjJEaWdlc3QgPSBkZWNpbWFsRGlnZXN0O1xuXG4vLyBFeHRyYWN0IG1lc3NhZ2VzIGFzIHhtbCBub2RlcyBmcm9tIHRoZSB4bGlmZiBmaWxlXG5jbGFzcyBYbGlmZjJQYXJzZXIgaW1wbGVtZW50cyBtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfdW5pdE1sU3RyaW5nOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIF9tc2dJZFRvSHRtbDoge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcblxuICBwYXJzZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsO1xuICAgIHRoaXMuX21zZ0lkVG9IdG1sID0ge307XG5cbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKGNvbnRlbnQsIFwiXCIsIGZhbHNlKTtcblxuICAgIHRoaXMuX2Vycm9ycyA9IHBhcnNlci5lcnJvcnM7XG4gICAgbWwudmlzaXRBbGwodGhpcywgcGFyc2VyLnJvb3ROb2RlcywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbXNnSWRUb0h0bWw6IHRoaXMuX21zZ0lkVG9IdG1sLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgIGNhc2UgX1VOSVRfVEFHOlxuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBudWxsO1xuICAgICAgICBjb25zdCBpZEF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiaWRcIik7XG4gICAgICAgIGlmICghaWRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19VTklUX1RBR30+IG1pc3NlcyB0aGUgXCJpZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlkID0gaWRBdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl9tc2dJZFRvSHRtbC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGBEdXBsaWNhdGVkIHRyYW5zbGF0aW9ucyBmb3IgbXNnICR7aWR9YCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl91bml0TWxTdHJpbmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbXNnSWRUb0h0bWxbaWRdID0gdGhpcy5fdW5pdE1sU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYE1lc3NhZ2UgJHtpZH0gbWlzc2VzIGEgdHJhbnNsYXRpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1NPVVJDRV9UQUc6XG4gICAgICAgIC8vIGlnbm9yZSBzb3VyY2UgbWVzc2FnZVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfVEFSR0VUX1RBRzpcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0RW5kID0gZWxlbWVudC5lbmRTb3VyY2VTcGFuIS5zdGFydC5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuc3RhcnQuZmlsZS5jb250ZW50O1xuICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0LCBpbm5lclRleHRFbmQpO1xuICAgICAgICB0aGlzLl91bml0TWxTdHJpbmcgPSBpbm5lclRleHQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9YTElGRl9UQUc6XG4gICAgICAgIGNvbnN0IHZlcnNpb25BdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcInZlcnNpb25cIik7XG4gICAgICAgIGlmICh2ZXJzaW9uQXR0cikge1xuICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSB2ZXJzaW9uQXR0ci52YWx1ZTtcbiAgICAgICAgICBpZiAodmVyc2lvbiAhPT0gXCIyLjBcIikge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYFRoZSBYTElGRiBmaWxlIHZlcnNpb24gJHt2ZXJzaW9ufSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFhMSUZGIDIuMCBzZXJpYWxpemVyYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4sIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0IG1sIG5vZGVzICh4bGlmZiBzeW50YXgpIHRvIGkxOG4gbm9kZXNcbmNsYXNzIFhtbFRvSTE4biBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuXG4gIGNvbnZlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeG1sSWN1ID0gbmV3IFBhcnNlcihnZXRYbWxUYWdEZWZpbml0aW9uKS5wYXJzZShtZXNzYWdlLCBcIlwiLCB0cnVlKTtcbiAgICB0aGlzLl9lcnJvcnMgPSB4bWxJY3UuZXJyb3JzO1xuXG4gICAgY29uc3QgaTE4bk5vZGVzID1cbiAgICAgIHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwIHx8IHhtbEljdS5yb290Tm9kZXMubGVuZ3RoID09PSAwID8gW10gOiBbXS5jb25jYXQoLi4ubWwudmlzaXRBbGwodGhpcywgeG1sSWN1LnJvb3ROb2RlcykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGVbXSB8IG51bGwge1xuICAgIHN3aXRjaCAoZWwubmFtZSkge1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfVEFHOlxuICAgICAgICBjb25zdCBuYW1lQXR0ciA9IGVsLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwiZXF1aXZcIik7XG4gICAgICAgIGlmIChuYW1lQXR0cikge1xuICAgICAgICAgIHJldHVybiBbbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgbmFtZUF0dHIudmFsdWUsIGVsLnNvdXJjZVNwYW4pXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdlwiIGF0dHJpYnV0ZWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRzpcbiAgICAgICAgY29uc3Qgc3RhcnRBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBlbmRBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdkVuZFwiKTtcblxuICAgICAgICBpZiAoIXN0YXJ0QXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdlN0YXJ0XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWVuZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwiZXF1aXZFbmRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdGFydElkID0gc3RhcnRBdHRyLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGVuZElkID0gZW5kQXR0ci52YWx1ZTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVzOiBpMThuLk5vZGVbXSA9IFtdO1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGVzLmNvbmNhdChcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIHN0YXJ0SWQsIGVsLnNvdXJjZVNwYW4pLFxuICAgICAgICAgICAgLi4uZWwuY2hpbGRyZW4ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzLCBudWxsKSksXG4gICAgICAgICAgICBuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBlbmRJZCwgZWwuc291cmNlU3BhbilcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGBVbmV4cGVjdGVkIHRhZ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oaWN1OiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGNhc2VNYXA6IHtbdmFsdWU6IHN0cmluZ106IGkxOG4uTm9kZX0gPSB7fTtcblxuICAgIG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcykuZm9yRWFjaCgoYzogYW55KSA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCBpY3VDYXNlLmV4cHJlc3Npb24pKVxuICAgIH07XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4sIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5jbGFzcyBXcml0ZVZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICBwcml2YXRlIF9uZXh0UGxhY2Vob2xkZXJJZDogbnVtYmVyO1xuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICByZXR1cm4gW25ldyB4bWwuVGV4dCh0ZXh0LnZhbHVlKV07XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlRm9yVGFnKHBoLnRhZyk7XG5cbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICBjb25zdCB0YWdQaCA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtcbiAgICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgICBlcXVpdjogcGguc3RhcnROYW1lLFxuICAgICAgICB0eXBlLFxuICAgICAgICBkaXNwOiBgPCR7cGgudGFnfS8+YFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gW3RhZ1BoXTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWdQYyA9IG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9TUEFOTklOR19UQUcsIHtcbiAgICAgIGlkOiAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKSxcbiAgICAgIGVxdWl2U3RhcnQ6IHBoLnN0YXJ0TmFtZSxcbiAgICAgIGVxdWl2RW5kOiBwaC5jbG9zZU5hbWUsXG4gICAgICB0eXBlLFxuICAgICAgZGlzcFN0YXJ0OiBgPCR7cGgudGFnfT5gLFxuICAgICAgZGlzcEVuZDogYDwvJHtwaC50YWd9PmBcbiAgICB9KTtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdLmNvbmNhdCguLi5waC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZTogeG1sLk5vZGUpID0+IHRhZ1BjLmNoaWxkcmVuLnB1c2gobm9kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWdQYy5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuVGV4dChcIlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YWdQY107XG4gIH1cblxuICB2aXNpdFBsYWNlaG9sZGVyKHBoOiBpMThuLlBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgaWRTdHIgPSAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogaWRTdHIsXG4gICAgICAgIGVxdWl2OiBwaC5uYW1lLFxuICAgICAgICBkaXNwOiBge3ske3BoLnZhbHVlfX19YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGNhc2VzID0gT2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpXG4gICAgICAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZSArIFwiIHsuLi59XCIpXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgY29uc3QgaWRTdHIgPSAodGhpcy5fbmV4dFBsYWNlaG9sZGVySWQrKykudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogaWRTdHIsXG4gICAgICAgIGVxdWl2OiBwaC5uYW1lLFxuICAgICAgICBkaXNwOiBgeyR7cGgudmFsdWUuZXhwcmVzc2lvbn0sICR7cGgudmFsdWUudHlwZX0sICR7Y2FzZXN9fWBcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShub2RlczogaTE4bi5Ob2RlW10pOiB4bWwuTm9kZVtdIHtcbiAgICB0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCA9IDA7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUZvclRhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAodGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlIFwiYnJcIjpcbiAgICBjYXNlIFwiYlwiOlxuICAgIGNhc2UgXCJpXCI6XG4gICAgY2FzZSBcInVcIjpcbiAgICAgIHJldHVybiBcImZtdFwiO1xuICAgIGNhc2UgXCJpbWdcIjpcbiAgICAgIHJldHVybiBcImltYWdlXCI7XG4gICAgY2FzZSBcImFcIjpcbiAgICAgIHJldHVybiBcImxpbmtcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwib3RoZXJcIjtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuaW1wb3J0IHtkZWNpbWFsRGlnZXN0fSBmcm9tIFwiLi9kaWdlc3RcIjtcbmltcG9ydCB7SHRtbFRvWG1sUGFyc2VyLCBQbGFjZWhvbGRlck1hcHBlciwgU2ltcGxlUGxhY2Vob2xkZXJNYXBwZXIsIFhtbE1lc3NhZ2VzQnlJZH0gZnJvbSBcIi4vc2VyaWFsaXplclwiO1xuXG5jb25zdCBfTUVTU0FHRVNfVEFHID0gXCJtZXNzYWdlYnVuZGxlXCI7XG5jb25zdCBfTUVTU0FHRV9UQUcgPSBcIm1zZ1wiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcbmNvbnN0IF9FWEVNUExFX1RBRyA9IFwiZXhcIjtcbmNvbnN0IF9TT1VSQ0VfVEFHID0gXCJzb3VyY2VcIjtcblxuY29uc3QgX0RPQ1RZUEUgPSBgPCFFTEVNRU5UIG1lc3NhZ2VidW5kbGUgKG1zZykqPlxuPCFBVFRMSVNUIG1lc3NhZ2VidW5kbGUgY2xhc3MgQ0RBVEEgI0lNUExJRUQ+XG5cbjwhRUxFTUVOVCBtc2cgKCNQQ0RBVEF8cGh8c291cmNlKSo+XG48IUFUVExJU1QgbXNnIGlkIENEQVRBICNJTVBMSUVEPlxuPCFBVFRMSVNUIG1zZyBzZXEgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG5hbWUgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIGRlc2MgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG1lYW5pbmcgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIG9ic29sZXRlIChvYnNvbGV0ZSkgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHhtbDpzcGFjZSAoZGVmYXVsdHxwcmVzZXJ2ZSkgXCJkZWZhdWx0XCI+XG48IUFUVExJU1QgbXNnIGlzX2hpZGRlbiBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIHNvdXJjZSAoI1BDREFUQSk+XG5cbjwhRUxFTUVOVCBwaCAoI1BDREFUQXxleCkqPlxuPCFBVFRMSVNUIHBoIG5hbWUgQ0RBVEEgI1JFUVVJUkVEPlxuXG48IUVMRU1FTlQgZXggKCNQQ0RBVEEpPmA7XG5cbi8vIHVzZWQgdG8gbWVyZ2UgdHJhbnNsYXRpb25zIHdoZW4gZXh0cmFjdGluZ1xuZXhwb3J0IGZ1bmN0aW9uIHhtYkxvYWRUb1htbChjb250ZW50OiBzdHJpbmcpOiBYbWxNZXNzYWdlc0J5SWQge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgSHRtbFRvWG1sUGFyc2VyKF9NRVNTQUdFX1RBRyk7XG4gIGNvbnN0IHt4bWxNZXNzYWdlc0J5SWQsIGVycm9yc30gPSBwYXJzZXIucGFyc2UoY29udGVudCk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhtYiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiB4bWxNZXNzYWdlc0J5SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB4bWJXcml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nIHwgbnVsbCwgZXhpc3RpbmdOb2RlczogeG1sLk5vZGVbXSA9IFtdKTogc3RyaW5nIHtcbiAgY29uc3QgZXhhbXBsZVZpc2l0b3IgPSBuZXcgRXhhbXBsZVZpc2l0b3IoKTtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKCk7XG4gIGNvbnN0IHJvb3ROb2RlID0gbmV3IHhtbC5UYWcoX01FU1NBR0VTX1RBRyk7XG5cbiAgZXhpc3RpbmdOb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigyKSwgbm9kZSk7XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGV4aXN0aW5nTm9kZXMpO1xuICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7aWQ6IG1lc3NhZ2UuaWR9O1xuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24pIHtcbiAgICAgIGF0dHJzW1wiZGVzY1wiXSA9IG1lc3NhZ2UuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgYXR0cnNbXCJtZWFuaW5nXCJdID0gbWVzc2FnZS5tZWFuaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVRhZ3M6IHhtbC5UYWdbXSA9IFtdO1xuICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgIHNvdXJjZVRhZ3MucHVzaChcbiAgICAgICAgbmV3IHhtbC5UYWcoX1NPVVJDRV9UQUcsIHt9LCBbXG4gICAgICAgICAgbmV3IHhtbC5UZXh0KFxuICAgICAgICAgICAgYCR7c291cmNlLmZpbGVQYXRofToke3NvdXJjZS5zdGFydExpbmV9JHtzb3VyY2UuZW5kTGluZSAhPT0gc291cmNlLnN0YXJ0TGluZSA/IFwiLFwiICsgc291cmNlLmVuZExpbmUgOiBcIlwifWBcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChcbiAgICAgIG5ldyB4bWwuQ1IoMiksXG4gICAgICBuZXcgeG1sLlRhZyhfTUVTU0FHRV9UQUcsIGF0dHJzLCBbLi4uc291cmNlVGFncywgLi4udmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcyldKVxuICAgICk7XG4gIH0pO1xuXG4gIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigpKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbXG4gICAgbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLFxuICAgIG5ldyB4bWwuQ1IoKSxcbiAgICBuZXcgeG1sLkRvY3R5cGUoX01FU1NBR0VTX1RBRywgX0RPQ1RZUEUpLFxuICAgIG5ldyB4bWwuQ1IoKSxcbiAgICBleGFtcGxlVmlzaXRvci5hZGREZWZhdWx0RXhhbXBsZXMocm9vdE5vZGUpLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHhtYkRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGlnZXN0KG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geG1iTWFwcGVyKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgcmV0dXJuIG5ldyBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcihtZXNzYWdlLCB0b1B1YmxpY05hbWUpO1xufVxuXG5jbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ6IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW107XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IGkxOG4uTm9kZSkgPT4gbm9kZXMucHVzaCguLi5ub2RlLnZpc2l0KHRoaXMpKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IG5vZGVzID0gW25ldyB4bWwuVGV4dChgeyR7aWN1LmV4cHJlc3Npb25QbGFjZWhvbGRlcn0sICR7aWN1LnR5cGV9LCBgKV07XG5cbiAgICBPYmplY3Qua2V5cyhpY3UuY2FzZXMpLmZvckVhY2goKGM6IHN0cmluZykgPT4ge1xuICAgICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYCR7Y30ge2ApLCAuLi5pY3UuY2FzZXNbY10udmlzaXQodGhpcyksIG5ldyB4bWwuVGV4dChgfSBgKSk7XG4gICAgfSk7XG5cbiAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgfWApKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBzdGFydEV4ID0gbmV3IHhtbC5UYWcoX0VYRU1QTEVfVEFHLCB7fSwgW25ldyB4bWwuVGV4dChgPCR7cGgudGFnfT5gKV0pO1xuICAgIGNvbnN0IHN0YXJ0VGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguc3RhcnROYW1lfSwgW3N0YXJ0RXhdKTtcbiAgICBpZiAocGguaXNWb2lkKSB7XG4gICAgICAvLyB2b2lkIHRhZ3MgaGF2ZSBubyBjaGlsZHJlbiBub3IgY2xvc2luZyB0YWdzXG4gICAgICByZXR1cm4gW3N0YXJ0VGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRXggPSBuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbbmV3IHhtbC5UZXh0KGA8LyR7cGgudGFnfT5gKV0pO1xuICAgIGNvbnN0IGNsb3NlVGFnUGggPSBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGguY2xvc2VOYW1lfSwgW2Nsb3NlRXhdKTtcblxuICAgIHJldHVybiBbc3RhcnRUYWdQaCwgLi4udGhpcy5zZXJpYWxpemUocGguY2hpbGRyZW4pLCBjbG9zZVRhZ1BoXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBleFRhZyA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtuZXcgeG1sLlRleHQoYHt7JHtwaC52YWx1ZX19fWApXSk7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7bmFtZTogcGgubmFtZX0sIFtleFRhZ10pXTtcbiAgfVxuXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBleFRhZyA9IG5ldyB4bWwuVGFnKF9FWEVNUExFX1RBRywge30sIFtcbiAgICAgIG5ldyB4bWwuVGV4dChcbiAgICAgICAgYHske3BoLnZhbHVlLmV4cHJlc3Npb259LCAke3BoLnZhbHVlLnR5cGV9LCAke09iamVjdC5rZXlzKHBoLnZhbHVlLmNhc2VzKVxuICAgICAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgICAgICAuam9pbihcIiBcIil9fWBcbiAgICAgIClcbiAgICBdKTtcbiAgICByZXR1cm4gW25ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnXSldO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4ubm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGRlY2ltYWxEaWdlc3QobWVzc2FnZSk7XG59XG5cbi8vIFRDIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBub24tZW1wdHkgZXhhbXBsZSBvbiBwbGFjZWhvbGRlcnNcbmNsYXNzIEV4YW1wbGVWaXNpdG9yIGltcGxlbWVudHMgeG1sLklWaXNpdG9yIHtcbiAgYWRkRGVmYXVsdEV4YW1wbGVzKG5vZGU6IHhtbC5Ob2RlKTogeG1sLk5vZGUge1xuICAgIG5vZGUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRhZyh0YWc6IHhtbC5UYWcpOiB2b2lkIHtcbiAgICBpZiAodGFnLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGlmICghdGFnLmNoaWxkcmVuIHx8IHRhZy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhUZXh0ID0gbmV3IHhtbC5UZXh0KHRhZy5hdHRyc1tcIm5hbWVcIl0gfHwgXCIuLi5cIik7XG4gICAgICAgIHRhZy5jaGlsZHJlbiA9IFtuZXcgeG1sLlRhZyhfRVhFTVBMRV9UQUcsIHt9LCBbZXhUZXh0XSldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFnLmNoaWxkcmVuKSB7XG4gICAgICB0YWcuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KTogYW55IHtcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGVsZW1lbnQuYXR0cnMuZm9yRWFjaCgoYXR0cjogbWwuQXR0cmlidXRlKSA9PiB7XG4gICAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCB0YWcgPSBuZXcgeG1sLlRhZyhlbGVtZW50Lm5hbWUsIGF0dHJzLCBlbGVtZW50LmNoaWxkcmVuIGFzIGFueSk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRUYWcodGFnKTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiB4bWwuVGV4dCk6IHZvaWQge31cblxuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IHhtbC5EZWNsYXJhdGlvbik6IHZvaWQge31cblxuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogeG1sLkRvY3R5cGUpOiB2b2lkIHt9XG59XG5cbi8vIFhNQi9YVEIgcGxhY2Vob2xkZXJzIGNhbiBvbmx5IGNvbnRhaW4gQS1aLCAwLTkgYW5kIF9cbmV4cG9ydCBmdW5jdGlvbiB0b1B1YmxpY05hbWUoaW50ZXJuYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaW50ZXJuYWxOYW1lLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTlfXS9nLCBcIl9cIik7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5pbXBvcnQgKiBhcyBpMThuIGZyb20gXCIuLi9hc3QvaTE4bl9hc3RcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7UGFyc2VyfSBmcm9tIFwiLi4vYXN0L3BhcnNlclwiO1xuaW1wb3J0IHtnZXRYbWxUYWdEZWZpbml0aW9ufSBmcm9tIFwiLi4vYXN0L3htbF90YWdzXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7ZGlnZXN0fSBmcm9tIFwiLi9kaWdlc3RcIjtcbmltcG9ydCB7eG1iTWFwcGVyfSBmcm9tIFwiLi94bWJcIjtcblxuY29uc3QgX1RSQU5TTEFUSU9OU19UQUcgPSBcInRyYW5zbGF0aW9uYnVuZGxlXCI7XG5jb25zdCBfVFJBTlNMQVRJT05fVEFHID0gXCJ0cmFuc2xhdGlvblwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1RBRyA9IFwicGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHh0YkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHh0YiB0byB4bWwgbm9kZXNcbiAgY29uc3QgeHRiUGFyc2VyID0gbmV3IFh0YlBhcnNlcigpO1xuICBjb25zdCB7bXNnSWRUb0h0bWwsIGVycm9yczogcGFyc2VFcnJvcnN9ID0geHRiUGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChwYXJzZUVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHh0YiBwYXJzZSBlcnJvcnM6XFxuJHtwYXJzZUVycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICB9XG5cbiAgLy8geG1sIG5vZGVzIHRvIGkxOG4gbm9kZXNcbiAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge307XG4gIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBYbWxUb0kxOG4oKTtcblxuICAvLyBCZWNhdXNlIHdlIHNob3VsZCBiZSBhYmxlIHRvIGxvYWQgeHRiIGZpbGVzIHRoYXQgcmVseSBvbiBmZWF0dXJlcyBub3Qgc3VwcG9ydGVkIGJ5IGFuZ3VsYXIsXG4gIC8vIHdlIG5lZWQgdG8gZGVsYXkgdGhlIGNvbnZlcnNpb24gb2YgaHRtbCB0byBpMThuIG5vZGVzIHNvIHRoYXQgbm9uIGFuZ3VsYXIgbWVzc2FnZXMgYXJlIG5vdFxuICAvLyBjb252ZXJ0ZWRcbiAgT2JqZWN0LmtleXMobXNnSWRUb0h0bWwpLmZvckVhY2gobXNnSWQgPT4ge1xuICAgIGNvbnN0IHZhbHVlRm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnN9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgeHRiIHBhcnNlIGVycm9yczpcXG4ke2Vycm9ycy5qb2luKFwiXFxuXCIpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGkxOG5Ob2RlcztcbiAgICB9O1xuICAgIGNyZWF0ZUxhenlQcm9wZXJ0eShpMThuTm9kZXNCeU1zZ0lkLCBtc2dJZCwgdmFsdWVGbik7XG4gIH0pO1xuXG4gIHJldHVybiBpMThuTm9kZXNCeU1zZ0lkO1xufVxuXG5leHBvcnQgY29uc3QgeHRiRGlnZXN0ID0gZGlnZXN0O1xuXG5leHBvcnQgY29uc3QgeHRiTWFwcGVyID0geG1iTWFwcGVyO1xuXG5mdW5jdGlvbiBjcmVhdGVMYXp5UHJvcGVydHkobWVzc2FnZXM6IGFueSwgaWQ6IHN0cmluZywgdmFsdWVGbjogKCkgPT4gYW55KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXNzYWdlcywgaWQsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGbigpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lc3NhZ2VzLCBpZCwge2VudW1lcmFibGU6IHRydWUsIHZhbHVlfSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IF8gPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IG92ZXJ3cml0ZSBhbiBYVEIgdHJhbnNsYXRpb25cIik7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gRXh0cmFjdCBtZXNzYWdlcyBhcyB4bWwgbm9kZXMgZnJvbSB0aGUgeHRiIGZpbGVcbmNsYXNzIFh0YlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9idW5kbGVEZXB0aDogbnVtYmVyO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdO1xuICBwcml2YXRlIF9tc2dJZFRvSHRtbDoge1ttc2dJZDogc3RyaW5nXTogc3RyaW5nfTtcblxuICBwYXJzZSh4dGI6IHN0cmluZykge1xuICAgIHRoaXMuX2J1bmRsZURlcHRoID0gMDtcbiAgICB0aGlzLl9tc2dJZFRvSHRtbCA9IHt9O1xuXG4gICAgLy8gV2UgY2FuIG5vdCBwYXJzZSB0aGUgSUNVIG1lc3NhZ2VzIGF0IHRoaXMgcG9pbnQgYXMgc29tZSBtZXNzYWdlcyBtaWdodCBub3Qgb3JpZ2luYXRlXG4gICAgLy8gZnJvbSBBbmd1bGFyIHRoYXQgY291bGQgbm90IGJlIGxleCdkLlxuICAgIGNvbnN0IHhtbCA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoeHRiLCBcIlwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9lcnJvcnMgPSB4bWwuZXJyb3JzO1xuICAgIG1sLnZpc2l0QWxsKHRoaXMsIHhtbC5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZ0lkVG9IdG1sOiB0aGlzLl9tc2dJZFRvSHRtbCxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICBjYXNlIF9UUkFOU0xBVElPTlNfVEFHOlxuICAgICAgICB0aGlzLl9idW5kbGVEZXB0aCsrO1xuICAgICAgICBpZiAodGhpcy5fYnVuZGxlRGVwdGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYDwke19UUkFOU0xBVElPTlNfVEFHfT4gZWxlbWVudHMgY2FuIG5vdCBiZSBuZXN0ZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBudWxsKTtcbiAgICAgICAgdGhpcy5fYnVuZGxlRGVwdGgtLTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1RSQU5TTEFUSU9OX1RBRzpcbiAgICAgICAgY29uc3QgaWRBdHRyID0gZWxlbWVudC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImlkXCIpO1xuICAgICAgICBpZiAoIWlkQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsZW1lbnQsIGA8JHtfVFJBTlNMQVRJT05fVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUZXh0U3RhcnQgPSBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiEuZW5kLm9mZnNldDtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyVGV4dEVuZCA9IGVsZW1lbnQuZW5kU291cmNlU3BhbiEuc3RhcnQub2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRleHQgPSBjb250ZW50LnNsaWNlKGlubmVyVGV4dFN0YXJ0ISwgaW5uZXJUZXh0RW5kISk7XG4gICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSBpbm5lclRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBcIlVuZXhwZWN0ZWQgdGFnXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogbWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdFRleHQodGV4dDogbWwuVGV4dCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoZXhwYW5zaW9uQ2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3Iobm9kZTogbWwuTm9kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IEkxOG5FcnJvcihub2RlLnNvdXJjZVNwYW4hLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuLy8gQ29udmVydCBtbCBub2RlcyAoeHRiIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IG1sLnZpc2l0QWxsKHRoaXMsIHhtbEljdS5yb290Tm9kZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG5Ob2RlcyxcbiAgICAgIGVycm9yczogdGhpcy5fZXJyb3JzXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IGkxOG4uVGV4dCh0ZXh0LnZhbHVlLCB0ZXh0LnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogbWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBjYXNlTWFwOiB7W3ZhbHVlOiBzdHJpbmddOiBpMThuLk5vZGV9ID0ge307XG5cbiAgICBtbC52aXNpdEFsbCh0aGlzLCBpY3UuY2FzZXMpLmZvckVhY2goYyA9PiB7XG4gICAgICBjYXNlTWFwW2MudmFsdWVdID0gbmV3IGkxOG4uQ29udGFpbmVyKGMubm9kZXMsIGljdS5zb3VyY2VTcGFuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgY2FzZU1hcCwgaWN1LnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpY3VDYXNlLnZhbHVlLFxuICAgICAgbm9kZXM6IG1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbilcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLlBsYWNlaG9sZGVyIHwgbnVsbCB7XG4gICAgaWYgKGVsLm5hbWUgPT09IF9QTEFDRUhPTERFUl9UQUcpIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJuYW1lXCIpO1xuICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgIHJldHVybiBuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbiEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYDwke19QTEFDRUhPTERFUl9UQUd9PiBtaXNzZXMgdGhlIFwibmFtZVwiIGF0dHJpYnV0ZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHByaXZhdGUgX2FkZEVycm9yKG5vZGU6IG1sLk5vZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBJMThuRXJyb3Iobm9kZS5zb3VyY2VTcGFuISwgbWVzc2FnZSkpO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXJzZXJFcnJvciB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgcHVibGljIGlucHV0OiBzdHJpbmcsIHB1YmxpYyBlcnJMb2NhdGlvbjogc3RyaW5nLCBwdWJsaWMgY3R4TG9jYXRpb24/OiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgUGFyc2VyIEVycm9yOiAke21lc3NhZ2V9ICR7ZXJyTG9jYXRpb259IFske2lucHV0fV0gaW4gJHtjdHhMb2NhdGlvbn1gO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZVNwYW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhcnQ6IG51bWJlciwgcHVibGljIGVuZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQVNUIHtcbiAgY29uc3RydWN0b3IocHVibGljIHNwYW46IFBhcnNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJBU1RcIjtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBxdW90ZWQgZXhwcmVzc2lvbiBvZiB0aGUgZm9ybTpcbiAqXG4gKiBxdW90ZSA9IHByZWZpeCBgOmAgdW5pbnRlcnByZXRlZEV4cHJlc3Npb25cbiAqIHByZWZpeCA9IGlkZW50aWZpZXJcbiAqIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uID0gYXJiaXRyYXJ5IHN0cmluZ1xuICpcbiAqIEEgcXVvdGVkIGV4cHJlc3Npb24gaXMgbWVhbnQgdG8gYmUgcHJlLXByb2Nlc3NlZCBieSBhbiBBU1QgdHJhbnNmb3JtZXIgdGhhdFxuICogY29udmVydHMgaXQgaW50byBhbm90aGVyIEFTVCB0aGF0IG5vIGxvbmdlciBjb250YWlucyBxdW90ZWQgZXhwcmVzc2lvbnMuXG4gKiBJdCBpcyBtZWFudCB0byBhbGxvdyB0aGlyZC1wYXJ0eSBkZXZlbG9wZXJzIHRvIGV4dGVuZCBBbmd1bGFyIHRlbXBsYXRlXG4gKiBleHByZXNzaW9uIGxhbmd1YWdlLiBUaGUgYHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uYCBwYXJ0IG9mIHRoZSBxdW90ZSBpc1xuICogdGhlcmVmb3JlIG5vdCBpbnRlcnByZXRlZCBieSB0aGUgQW5ndWxhcidzIG93biBleHByZXNzaW9uIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFF1b3RlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcHJlZml4OiBzdHJpbmcsIHB1YmxpYyB1bmludGVycHJldGVkRXhwcmVzc2lvbjogc3RyaW5nLCBwdWJsaWMgbG9jYXRpb246IGFueSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UXVvdGUodGhpcywgY29udGV4dCk7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJRdW90ZVwiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eUV4cHIgZXh0ZW5kcyBBU1Qge1xuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbXBsaWNpdFJlY2VpdmVyIGV4dGVuZHMgQVNUIHtcbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbXBsaWNpdFJlY2VpdmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogTXVsdGlwbGUgZXhwcmVzc2lvbnMgc2VwYXJhdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICovXG5leHBvcnQgY2xhc3MgQ2hhaW4gZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENoYWluKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGNvbmRpdGlvbjogQVNULCBwdWJsaWMgdHJ1ZUV4cDogQVNULCBwdWJsaWMgZmFsc2VFeHA6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q29uZGl0aW9uYWwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UmVhZCBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFByb3BlcnR5UmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlXcml0ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHJlY2VpdmVyOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcm9wZXJ0eVdyaXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWZlUHJvcGVydHlSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0U2FmZVByb3BlcnR5UmVhZCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2V5ZWRSZWFkIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgb2JqOiBBU1QsIHB1YmxpYyBrZXk6IEFTVCkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0S2V5ZWRSZWFkKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLZXllZFdyaXRlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgb2JqOiBBU1QsIHB1YmxpYyBrZXk6IEFTVCwgcHVibGljIHZhbHVlOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEtleWVkV3JpdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJpbmRpbmdQaXBlIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwOiBBU1QsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhcmdzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0UGlwZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbFByaW1pdGl2ZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdExpdGVyYWxQcmltaXRpdmUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdGVyYWxBcnJheSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIGV4cHJlc3Npb25zOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbEFycmF5KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl0ZXJhbE1hcEtleSB7XG4gIGtleTogc3RyaW5nO1xuICBxdW90ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTWFwIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMga2V5czogTGl0ZXJhbE1hcEtleVtdLCBwdWJsaWMgdmFsdWVzOiBhbnlbXSkge1xuICAgIHN1cGVyKHNwYW4pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IEFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TGl0ZXJhbE1hcCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU3BhbiwgcHVibGljIHN0cmluZ3M6IGFueVtdLCBwdWJsaWMgZXhwcmVzc2lvbnM6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRJbnRlcnBvbGF0aW9uKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBvcGVyYXRpb246IHN0cmluZywgcHVibGljIGxlZnQ6IEFTVCwgcHVibGljIHJpZ2h0OiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEJpbmFyeSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlZml4Tm90IGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgZXhwcmVzc2lvbjogQVNUKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRQcmVmaXhOb3QodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vbk51bGxBc3NlcnQgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyBleHByZXNzaW9uOiBBU1QpIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE5vbk51bGxBc3NlcnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZENhbGwgZXh0ZW5kcyBBU1Qge1xuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNwYW4sIHB1YmxpYyByZWNlaXZlcjogQVNULCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdE1ldGhvZENhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZmVNZXRob2RDYWxsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgcmVjZWl2ZXI6IEFTVCwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoc3Bhbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQXN0VmlzaXRvciwgY29udGV4dDogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRTYWZlTWV0aG9kQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25DYWxsIGV4dGVuZHMgQVNUIHtcbiAgY29uc3RydWN0b3Ioc3BhbjogUGFyc2VTcGFuLCBwdWJsaWMgdGFyZ2V0OiBBU1QgfCBudWxsLCBwdWJsaWMgYXJnczogYW55W10pIHtcbiAgICBzdXBlcihzcGFuKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEZ1bmN0aW9uQ2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQVNUV2l0aFNvdXJjZSBleHRlbmRzIEFTVCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhc3Q6IEFTVCwgcHVibGljIHNvdXJjZTogc3RyaW5nIHwgbnVsbCwgcHVibGljIGxvY2F0aW9uOiBzdHJpbmcsIHB1YmxpYyBlcnJvcnM6IFBhcnNlckVycm9yW10pIHtcbiAgICBzdXBlcihuZXcgUGFyc2VTcGFuKDAsIHNvdXJjZSA9PSBudWxsID8gMCA6IHNvdXJjZS5sZW5ndGgpKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5hc3QudmlzaXQodmlzaXRvciwgY29udGV4dCk7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5zb3VyY2V9IGluICR7dGhpcy5sb2NhdGlvbn1gO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUJpbmRpbmcge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3BhbjogUGFyc2VTcGFuLFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZyxcbiAgICBwdWJsaWMga2V5SXNWYXI6IGJvb2xlYW4sXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogQVNUV2l0aFNvdXJjZVxuICApIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXN0VmlzaXRvciB7XG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0S2V5ZWRSZWFkKGFzdDogS2V5ZWRSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRMaXRlcmFsQXJyYXkoYXN0OiBMaXRlcmFsQXJyYXksIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdD8oYXN0OiBBU1QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN1cnNpdmVBc3RWaXNpdG9yIGltcGxlbWVudHMgQXN0VmlzaXRvciB7XG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5sZWZ0LnZpc2l0KHRoaXMpO1xuICAgIGFzdC5yaWdodC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmNvbmRpdGlvbi52aXNpdCh0aGlzKTtcbiAgICBhc3QudHJ1ZUV4cC52aXNpdCh0aGlzKTtcbiAgICBhc3QuZmFsc2VFeHAudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LmV4cC52aXNpdCh0aGlzKTtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QudGFyZ2V0IS52aXNpdCh0aGlzKTtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoYXN0OiBJbXBsaWNpdFJlY2VpdmVyLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRLZXllZFdyaXRlKGFzdDogS2V5ZWRXcml0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3Qub2JqLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5rZXkudmlzaXQodGhpcyk7XG4gICAgYXN0LnZhbHVlLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QudmFsdWVzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzLCBjb250ZXh0KTtcbiAgfVxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QuZXhwcmVzc2lvbi52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICBhc3QudmFsdWUudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGFzdC5yZWNlaXZlci52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy52aXNpdEFsbChhc3QuYXJncywgY29udGV4dCk7XG4gIH1cbiAgdmlzaXRBbGwoYXN0czogQVNUW10sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgYXN0cy5mb3JFYWNoKGFzdCA9PiBhc3QudmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXN0VHJhbnNmb3JtZXIgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgdmlzaXRJbnRlcnBvbGF0aW9uKGFzdDogSW50ZXJwb2xhdGlvbiwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEludGVycG9sYXRpb24oYXN0LnNwYW4sIGFzdC5zdHJpbmdzLCB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucykpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUoYXN0LnNwYW4sIGFzdC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UmVhZChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlXcml0ZShhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgYXN0LnZhbHVlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBTYWZlUHJvcGVydHlSZWFkKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBNZXRob2RDYWxsKGFzdC5zcGFuLCBhc3QucmVjZWl2ZXIudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBTYWZlTWV0aG9kQ2FsbChhc3Quc3BhbiwgYXN0LnJlY2VpdmVyLnZpc2l0KHRoaXMpLCBhc3QubmFtZSwgdGhpcy52aXNpdEFsbChhc3QuYXJncykpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbkNhbGwoYXN0LnNwYW4sIGFzdC50YXJnZXQhLnZpc2l0KHRoaXMpLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IExpdGVyYWxBcnJheShhc3Quc3BhbiwgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbE1hcChhc3Q6IExpdGVyYWxNYXAsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTWFwKGFzdC5zcGFuLCBhc3Qua2V5cywgdGhpcy52aXNpdEFsbChhc3QudmFsdWVzKSk7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEJpbmFyeShhc3Quc3BhbiwgYXN0Lm9wZXJhdGlvbiwgYXN0LmxlZnQudmlzaXQodGhpcyksIGFzdC5yaWdodC52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IFByZWZpeE5vdChhc3Quc3BhbiwgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcykpO1xuICB9XG5cbiAgdmlzaXROb25OdWxsQXNzZXJ0KGFzdDogTm9uTnVsbEFzc2VydCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IE5vbk51bGxBc3NlcnQoYXN0LnNwYW4sIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q29uZGl0aW9uYWwoYXN0OiBDb25kaXRpb25hbCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKGFzdC5zcGFuLCBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpLCBhc3QudHJ1ZUV4cC52aXNpdCh0aGlzKSwgYXN0LmZhbHNlRXhwLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0UGlwZShhc3Q6IEJpbmRpbmdQaXBlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQmluZGluZ1BpcGUoYXN0LnNwYW4sIGFzdC5leHAudmlzaXQodGhpcyksIGFzdC5uYW1lLCB0aGlzLnZpc2l0QWxsKGFzdC5hcmdzKSk7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KTogQVNUIHtcbiAgICByZXR1cm4gbmV3IEtleWVkUmVhZChhc3Quc3BhbiwgYXN0Lm9iai52aXNpdCh0aGlzKSwgYXN0LmtleS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgS2V5ZWRXcml0ZShhc3Quc3BhbiwgYXN0Lm9iai52aXNpdCh0aGlzKSwgYXN0LmtleS52aXNpdCh0aGlzKSwgYXN0LnZhbHVlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0QWxsKGFzdHM6IGFueVtdKTogYW55W10ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBBcnJheShhc3RzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICByZXNbaV0gPSBhc3RzW2ldLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluLCBjb250ZXh0OiBhbnkpOiBBU1Qge1xuICAgIHJldHVybiBuZXcgQ2hhaW4oYXN0LnNwYW4sIHRoaXMudmlzaXRBbGwoYXN0LmV4cHJlc3Npb25zKSk7XG4gIH1cblxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSk6IEFTVCB7XG4gICAgcmV0dXJuIG5ldyBRdW90ZShhc3Quc3BhbiwgYXN0LnByZWZpeCwgYXN0LnVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uLCBhc3QubG9jYXRpb24pO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gXCIuLi9hc3QvY2hhcnNcIjtcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgQ2hhcmFjdGVyLFxuICBJZGVudGlmaWVyLFxuICBLZXl3b3JkLFxuICBTdHJpbmcsXG4gIE9wZXJhdG9yLFxuICBOdW1iZXIsXG4gIEVycm9yXG59XG5cbmNvbnN0IEtFWVdPUkRTID0gW1widmFyXCIsIFwibGV0XCIsIFwiYXNcIiwgXCJudWxsXCIsIFwidW5kZWZpbmVkXCIsIFwidHJ1ZVwiLCBcImZhbHNlXCIsIFwiaWZcIiwgXCJlbHNlXCIsIFwidGhpc1wiXTtcblxuZXhwb3J0IGNsYXNzIExleGVyIHtcbiAgdG9rZW5pemUodGV4dDogc3RyaW5nKTogVG9rZW5bXSB7XG4gICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKHRleHQpO1xuICAgIGNvbnN0IHRva2VuczogVG9rZW5bXSA9IFtdO1xuICAgIGxldCB0b2tlbiA9IHNjYW5uZXIuc2NhblRva2VuKCk7XG4gICAgd2hpbGUgKHRva2VuICE9IG51bGwpIHtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIHR5cGU6IFRva2VuVHlwZSwgcHVibGljIG51bVZhbHVlOiBudW1iZXIsIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nKSB7fVxuXG4gIGlzQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5DaGFyYWN0ZXIgJiYgdGhpcy5udW1WYWx1ZSA9PT0gY29kZTtcbiAgfVxuXG4gIGlzTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXI7XG4gIH1cblxuICBpc1N0cmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuU3RyaW5nO1xuICB9XG5cbiAgaXNPcGVyYXRvcihvcGVyYXRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yICYmIHRoaXMuc3RyVmFsdWUgPT09IG9wZXJhdGVyO1xuICB9XG5cbiAgaXNJZGVudGlmaWVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5JZGVudGlmaWVyO1xuICB9XG5cbiAgaXNLZXl3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkO1xuICB9XG5cbiAgaXNLZXl3b3JkTGV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwibGV0XCI7XG4gIH1cblxuICBpc0tleXdvcmRBcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcImFzXCI7XG4gIH1cblxuICBpc0tleXdvcmROdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwibnVsbFwiO1xuICB9XG5cbiAgaXNLZXl3b3JkVW5kZWZpbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICBpc0tleXdvcmRUcnVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9XG5cbiAgaXNLZXl3b3JkRmFsc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PT0gXCJmYWxzZVwiO1xuICB9XG5cbiAgaXNLZXl3b3JkVGhpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09PSBcInRoaXNcIjtcbiAgfVxuXG4gIGlzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gVG9rZW5UeXBlLkVycm9yO1xuICB9XG5cbiAgdG9OdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBUb2tlblR5cGUuTnVtYmVyID8gdGhpcy5udW1WYWx1ZSA6IC0xO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkNoYXJhY3RlcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLklkZW50aWZpZXI6XG4gICAgICBjYXNlIFRva2VuVHlwZS5LZXl3b3JkOlxuICAgICAgY2FzZSBUb2tlblR5cGUuT3BlcmF0b3I6XG4gICAgICBjYXNlIFRva2VuVHlwZS5TdHJpbmc6XG4gICAgICBjYXNlIFRva2VuVHlwZS5FcnJvcjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyVmFsdWU7XG4gICAgICBjYXNlIFRva2VuVHlwZS5OdW1iZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm51bVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3Q2hhcmFjdGVyVG9rZW4oaW5kZXg6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuQ2hhcmFjdGVyLCBjb2RlLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKTtcbn1cblxuZnVuY3Rpb24gbmV3SWRlbnRpZmllclRva2VuKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLklkZW50aWZpZXIsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdLZXl3b3JkVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuS2V5d29yZCwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld09wZXJhdG9yVG9rZW4oaW5kZXg6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBUb2tlblR5cGUuT3BlcmF0b3IsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdTdHJpbmdUb2tlbihpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5TdHJpbmcsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXJUb2tlbihpbmRleDogbnVtYmVyLCBuOiBudW1iZXIpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIFRva2VuVHlwZS5OdW1iZXIsIG4sIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBuZXdFcnJvclRva2VuKGluZGV4OiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgVG9rZW5UeXBlLkVycm9yLCAwLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVPRjogVG9rZW4gPSBuZXcgVG9rZW4oLTEsIFRva2VuVHlwZS5DaGFyYWN0ZXIsIDAsIFwiXCIpO1xuXG5jbGFzcyBTY2FubmVyIHtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHBlZWsgPSAwO1xuICBpbmRleCA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dDogc3RyaW5nKSB7XG4gICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIHRoaXMucGVlayA9ICsrdGhpcy5pbmRleCA+PSB0aGlzLmxlbmd0aCA/IGNoYXJzLiRFT0YgOiB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5pbmRleCk7XG4gIH1cblxuICBzY2FuVG9rZW4oKTogVG9rZW4gfCBudWxsIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQ7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgbGV0IHBlZWsgPSB0aGlzLnBlZWs7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleDtcblxuICAgIC8vIFNraXAgd2hpdGVzcGFjZS5cbiAgICB3aGlsZSAocGVlayA8PSBjaGFycy4kU1BBQ0UpIHtcbiAgICAgIGlmICgrK2luZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBwZWVrID0gY2hhcnMuJEVPRjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWVrID0gaW5wdXQuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wZWVrID0gcGVlaztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgaWRlbnRpZmllcnMgYW5kIG51bWJlcnMuXG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KHBlZWspKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuSWRlbnRpZmllcigpO1xuICAgIH1cbiAgICBpZiAoY2hhcnMuaXNEaWdpdChwZWVrKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nhbk51bWJlcihpbmRleCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IGluZGV4O1xuICAgIHN3aXRjaCAocGVlaykge1xuICAgICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSA/IHRoaXMuc2Nhbk51bWJlcihzdGFydCkgOiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgY2hhcnMuJFBFUklPRCk7XG4gICAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRSQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0tFVDpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kQ09NTUE6XG4gICAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICAgIGNhc2UgY2hhcnMuJFNFTUlDT0xPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNoYXJhY3RlcihzdGFydCwgcGVlayk7XG4gICAgICBjYXNlIGNoYXJzLiRTUTpcbiAgICAgIGNhc2UgY2hhcnMuJERROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuU3RyaW5nKCk7XG4gICAgICBjYXNlIGNoYXJzLiRIQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICAgIGNhc2UgY2hhcnMuJE1JTlVTOlxuICAgICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICAgIGNhc2UgY2hhcnMuJFNMQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUEVSQ0VOVDpcbiAgICAgIGNhc2UgY2hhcnMuJENBUkVUOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuT3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlaykpO1xuICAgICAgY2FzZSBjaGFycy4kUVVFU1RJT046XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwiP1wiLCBjaGFycy4kUEVSSU9ELCBcIi5cIik7XG4gICAgICBjYXNlIGNoYXJzLiRMVDpcbiAgICAgIGNhc2UgY2hhcnMuJEdUOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsIFwiPVwiKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBTkc6XG4gICAgICBjYXNlIGNoYXJzLiRFUTpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihzdGFydCwgU3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKSwgY2hhcnMuJEVRLCBcIj1cIiwgY2hhcnMuJEVRLCBcIj1cIik7XG4gICAgICBjYXNlIGNoYXJzLiRBTVBFUlNBTkQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwiJlwiLCBjaGFycy4kQU1QRVJTQU5ELCBcIiZcIik7XG4gICAgICBjYXNlIGNoYXJzLiRCQVI6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFwifFwiLCBjaGFycy4kQkFSLCBcInxcIik7XG4gICAgICBjYXNlIGNoYXJzLiROQlNQOlxuICAgICAgICB3aGlsZSAoY2hhcnMuaXNXaGl0ZXNwYWNlKHRoaXMucGVlaykpIHtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuVG9rZW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gdGhpcy5lcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgWyR7U3RyaW5nLmZyb21DaGFyQ29kZShwZWVrKX1dYCwgMCk7XG4gIH1cblxuICBzY2FuQ2hhcmFjdGVyKHN0YXJ0OiBudW1iZXIsIGNvZGU6IG51bWJlcik6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbmV3Q2hhcmFjdGVyVG9rZW4oc3RhcnQsIGNvZGUpO1xuICB9XG5cbiAgc2Nhbk9wZXJhdG9yKHN0YXJ0OiBudW1iZXIsIHN0cjogc3RyaW5nKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdPcGVyYXRvclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRva2VuaXplIGEgMi8zIGNoYXIgbG9uZyBvcGVyYXRvclxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnQgc3RhcnQgaW5kZXggaW4gdGhlIGV4cHJlc3Npb25cbiAgICogQHBhcmFtIG9uZSBmaXJzdCBzeW1ib2wgKGFsd2F5cyBwYXJ0IG9mIHRoZSBvcGVyYXRvcilcbiAgICogQHBhcmFtIHR3b0NvZGUgY29kZSBwb2ludCBmb3IgdGhlIHNlY29uZCBzeW1ib2xcbiAgICogQHBhcmFtIHR3byBzZWNvbmQgc3ltYm9sIChwYXJ0IG9mIHRoZSBvcGVyYXRvciB3aGVuIHRoZSBzZWNvbmQgY29kZSBwb2ludCBtYXRjaGVzKVxuICAgKiBAcGFyYW0gdGhyZWVDb2RlIGNvZGUgcG9pbnQgZm9yIHRoZSB0aGlyZCBzeW1ib2xcbiAgICogQHBhcmFtIHRocmVlIHRoaXJkIHN5bWJvbCAocGFydCBvZiB0aGUgb3BlcmF0b3Igd2hlbiBwcm92aWRlZCBhbmQgbWF0Y2hlcyBzb3VyY2UgZXhwcmVzc2lvbilcbiAgICovXG4gIHNjYW5Db21wbGV4T3BlcmF0b3IoXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBvbmU6IHN0cmluZyxcbiAgICB0d29Db2RlOiBudW1iZXIsXG4gICAgdHdvOiBzdHJpbmcsXG4gICAgdGhyZWVDb2RlPzogbnVtYmVyLFxuICAgIHRocmVlPzogc3RyaW5nXG4gICk6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICBsZXQgc3RyOiBzdHJpbmcgPSBvbmU7XG4gICAgaWYgKHRoaXMucGVlayA9PT0gdHdvQ29kZSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBzdHIgKz0gdHdvO1xuICAgIH1cbiAgICBpZiAodGhyZWVDb2RlICE9IG51bGwgJiYgdGhpcy5wZWVrID09PSB0aHJlZUNvZGUpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgc3RyICs9IHRocmVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T3BlcmF0b3JUb2tlbihzdGFydCwgc3RyKTtcbiAgfVxuXG4gIHNjYW5JZGVudGlmaWVyKCk6IFRva2VuIHtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB3aGlsZSAoaXNJZGVudGlmaWVyUGFydCh0aGlzLnBlZWspKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyOiBzdHJpbmcgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIEtFWVdPUkRTLmluZGV4T2Yoc3RyKSA+IC0xID8gbmV3S2V5d29yZFRva2VuKHN0YXJ0LCBzdHIpIDogbmV3SWRlbnRpZmllclRva2VuKHN0YXJ0LCBzdHIpO1xuICB9XG5cbiAgc2Nhbk51bWJlcihzdGFydDogbnVtYmVyKTogVG9rZW4ge1xuICAgIGxldCBzaW1wbGU6IGJvb2xlYW4gPSB0aGlzLmluZGV4ID09PSBzdGFydDtcbiAgICB0aGlzLmFkdmFuY2UoKTsgLy8gU2tpcCBpbml0aWFsIGRpZ2l0LlxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspKSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGVlayA9PT0gY2hhcnMuJFBFUklPRCkge1xuICAgICAgICBzaW1wbGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFeHBvbmVudFN0YXJ0KHRoaXMucGVlaykpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIGlmIChpc0V4cG9uZW50U2lnbih0aGlzLnBlZWspKSB7XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihcIkludmFsaWQgZXhwb25lbnRcIiwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIHNpbXBsZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyOiBzdHJpbmcgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHNpbXBsZSA/IHBhcnNlSW50QXV0b1JhZGl4KHN0cikgOiBwYXJzZUZsb2F0KHN0cik7XG4gICAgcmV0dXJuIG5ld051bWJlclRva2VuKHN0YXJ0LCB2YWx1ZSk7XG4gIH1cblxuICBzY2FuU3RyaW5nKCk6IFRva2VuIHtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBxdW90ZTogbnVtYmVyID0gdGhpcy5wZWVrO1xuICAgIHRoaXMuYWR2YW5jZSgpOyAvLyBTa2lwIGluaXRpYWwgcXVvdGUuXG5cbiAgICBsZXQgYnVmZmVyID0gXCJcIjtcbiAgICBsZXQgbWFya2VyOiBudW1iZXIgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IGlucHV0OiBzdHJpbmcgPSB0aGlzLmlucHV0O1xuXG4gICAgd2hpbGUgKHRoaXMucGVlayAhPT0gcXVvdGUpIHtcbiAgICAgIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiRCQUNLU0xBU0gpIHtcbiAgICAgICAgYnVmZmVyICs9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgbGV0IHVuZXNjYXBlZENvZGU6IG51bWJlcjtcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgVFMyLjEtaW50cm9kdWNlZCB0eXBlIHN0cmljdG5lc3NcbiAgICAgICAgdGhpcy5wZWVrID0gdGhpcy5wZWVrO1xuICAgICAgICBpZiAodGhpcy5wZWVrID09PSBjaGFycy4kdSkge1xuICAgICAgICAgIC8vIDQgY2hhcmFjdGVyIGhleCBjb2RlIGZvciB1bmljb2RlIGNoYXJhY3Rlci5cbiAgICAgICAgICBjb25zdCBoZXg6IHN0cmluZyA9IGlucHV0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgIGlmICgvXlswLTlhLWZdKyQvaS50ZXN0KGhleCkpIHtcbiAgICAgICAgICAgIHVuZXNjYXBlZENvZGUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoYEludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JHtoZXh9XWAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuZXNjYXBlZENvZGUgPSB1bmVzY2FwZSh0aGlzLnBlZWspO1xuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVuZXNjYXBlZENvZGUpO1xuICAgICAgICBtYXJrZXIgPSB0aGlzLmluZGV4O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsgPT09IGNoYXJzLiRFT0YpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoXCJVbnRlcm1pbmF0ZWQgcXVvdGVcIiwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0OiBzdHJpbmcgPSBpbnB1dC5zdWJzdHJpbmcobWFya2VyLCB0aGlzLmluZGV4KTtcbiAgICB0aGlzLmFkdmFuY2UoKTsgLy8gU2tpcCB0ZXJtaW5hdGluZyBxdW90ZS5cblxuICAgIHJldHVybiBuZXdTdHJpbmdUb2tlbihzdGFydCwgYnVmZmVyICsgbGFzdCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogVG9rZW4ge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmluZGV4ICsgb2Zmc2V0O1xuICAgIHJldHVybiBuZXdFcnJvclRva2VuKHBvc2l0aW9uLCBgTGV4ZXIgRXJyb3I6ICR7bWVzc2FnZX0gYXQgY29sdW1uICR7cG9zaXRpb259IGluIGV4cHJlc3Npb24gWyR7dGhpcy5pbnB1dH1dYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgKGNoYXJzLiRhIDw9IGNvZGUgJiYgY29kZSA8PSBjaGFycy4keikgfHxcbiAgICAoY2hhcnMuJEEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiRaKSB8fFxuICAgIGNvZGUgPT09IGNoYXJzLiRfIHx8XG4gICAgY29kZSA9PT0gY2hhcnMuJCRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllcihpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKGlucHV0KTtcbiAgaWYgKCFpc0lkZW50aWZpZXJTdGFydChzY2FubmVyLnBlZWspKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNjYW5uZXIuYWR2YW5jZSgpO1xuICB3aGlsZSAoc2Nhbm5lci5wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgaWYgKCFpc0lkZW50aWZpZXJQYXJ0KHNjYW5uZXIucGVlaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2Nhbm5lci5hZHZhbmNlKCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzSWRlbnRpZmllclBhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjaGFycy5pc0FzY2lpTGV0dGVyKGNvZGUpIHx8IGNoYXJzLmlzRGlnaXQoY29kZSkgfHwgY29kZSA9PT0gY2hhcnMuJF8gfHwgY29kZSA9PT0gY2hhcnMuJCQ7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb25lbnRTdGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRlIHx8IGNvZGUgPT09IGNoYXJzLiRFO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9uZW50U2lnbihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT09IGNoYXJzLiRNSU5VUyB8fCBjb2RlID09PSBjaGFycy4kUExVUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUXVvdGUoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09PSBjaGFycy4kU1EgfHwgY29kZSA9PT0gY2hhcnMuJERRIHx8IGNvZGUgPT09IGNoYXJzLiRCVDtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGUoY29kZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kbjpcbiAgICAgIHJldHVybiBjaGFycy4kTEY7XG4gICAgY2FzZSBjaGFycy4kZjpcbiAgICAgIHJldHVybiBjaGFycy4kRkY7XG4gICAgY2FzZSBjaGFycy4kcjpcbiAgICAgIHJldHVybiBjaGFycy4kQ1I7XG4gICAgY2FzZSBjaGFycy4kdDpcbiAgICAgIHJldHVybiBjaGFycy4kVEFCO1xuICAgIGNhc2UgY2hhcnMuJHY6XG4gICAgICByZXR1cm4gY2hhcnMuJFZUQUI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50QXV0b1JhZGl4KHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gcGFyc2VJbnQodGV4dCwgMTApO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyBcIiArIHRleHQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gXCIuLi9hc3QvY2hhcnNcIjtcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSBcIi4uL2FzdC9pbnRlcnBvbGF0aW9uX2NvbmZpZ1wiO1xuaW1wb3J0IHtlc2NhcGVSZWdFeHB9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuXG5pbXBvcnQge1xuICBBU1QsXG4gIEFTVFdpdGhTb3VyY2UsXG4gIEFzdFZpc2l0b3IsXG4gIEJpbmFyeSxcbiAgQmluZGluZ1BpcGUsXG4gIENoYWluLFxuICBDb25kaXRpb25hbCxcbiAgRW1wdHlFeHByLFxuICBGdW5jdGlvbkNhbGwsXG4gIEltcGxpY2l0UmVjZWl2ZXIsXG4gIEludGVycG9sYXRpb24sXG4gIEtleWVkUmVhZCxcbiAgS2V5ZWRXcml0ZSxcbiAgTGl0ZXJhbEFycmF5LFxuICBMaXRlcmFsTWFwLFxuICBMaXRlcmFsTWFwS2V5LFxuICBMaXRlcmFsUHJpbWl0aXZlLFxuICBNZXRob2RDYWxsLFxuICBOb25OdWxsQXNzZXJ0LFxuICBQYXJzZVNwYW4sXG4gIFBhcnNlckVycm9yLFxuICBQcmVmaXhOb3QsXG4gIFByb3BlcnR5UmVhZCxcbiAgUHJvcGVydHlXcml0ZSxcbiAgUXVvdGUsXG4gIFNhZmVNZXRob2RDYWxsLFxuICBTYWZlUHJvcGVydHlSZWFkLFxuICBUZW1wbGF0ZUJpbmRpbmdcbn0gZnJvbSBcIi4vYXN0XCI7XG5pbXBvcnQge0VPRiwgTGV4ZXIsIFRva2VuLCBUb2tlblR5cGUsIGlzSWRlbnRpZmllciwgaXNRdW90ZX0gZnJvbSBcIi4vbGV4ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNwbGl0SW50ZXJwb2xhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdHJpbmdzOiBzdHJpbmdbXSwgcHVibGljIGV4cHJlc3Npb25zOiBzdHJpbmdbXSwgcHVibGljIG9mZnNldHM6IG51bWJlcltdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVCaW5kaW5nczogVGVtcGxhdGVCaW5kaW5nW10sIHB1YmxpYyB3YXJuaW5nczogc3RyaW5nW10sIHB1YmxpYyBlcnJvcnM6IFBhcnNlckVycm9yW10pIHt9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChjb25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBSZWdFeHAge1xuICBjb25zdCBwYXR0ZXJuID0gZXNjYXBlUmVnRXhwKGNvbmZpZy5zdGFydCkgKyBcIihbXFxcXHNcXFxcU10qPylcIiArIGVzY2FwZVJlZ0V4cChjb25maWcuZW5kKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgXCJnXCIpO1xufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcbiAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sZXhlcjogTGV4ZXIpIHt9XG5cbiAgcGFyc2VBY3Rpb24oXG4gICAgaW5wdXQ6IHN0cmluZyxcbiAgICBsb2NhdGlvbjogYW55LFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHXG4gICk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZSh0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KSk7XG4gICAgY29uc3QgYXN0ID0gbmV3IFBhcnNlQVNUKFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRva2VucyxcbiAgICAgIHNvdXJjZVRvTGV4Lmxlbmd0aCxcbiAgICAgIHRydWUsXG4gICAgICB0aGlzLmVycm9ycyxcbiAgICAgIGlucHV0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aFxuICAgICkucGFyc2VDaGFpbigpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShhc3QsIGlucHV0LCBsb2NhdGlvbiwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcGFyc2VCaW5kaW5nKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IGFueSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHBhcnNlU2ltcGxlQmluZGluZyhcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgY29uc3QgYXN0ID0gdGhpcy5fcGFyc2VCaW5kaW5nQXN0KGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgZXJyb3JzID0gU2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIuY2hlY2soYXN0KTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKGBIb3N0IGJpbmRpbmcgZXhwcmVzc2lvbiBjYW5ub3QgY29udGFpbiAke2Vycm9ycy5qb2luKFwiIFwiKX1gLCBpbnB1dCwgbG9jYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKG1lc3NhZ2U6IHN0cmluZywgaW5wdXQ6IHN0cmluZywgZXJyTG9jYXRpb246IHN0cmluZywgY3R4TG9jYXRpb24/OiBhbnkpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcihtZXNzYWdlLCBpbnB1dCwgZXJyTG9jYXRpb24sIGN0eExvY2F0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUJpbmRpbmdBc3QoaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IHN0cmluZywgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IEFTVCB7XG4gICAgLy8gUXVvdGVzIGV4cHJlc3Npb25zIHVzZSAzcmQtcGFydHkgZXhwcmVzc2lvbiBsYW5ndWFnZS4gV2UgZG9uJ3Qgd2FudCB0byB1c2VcbiAgICAvLyBvdXIgbGV4ZXIgb3IgcGFyc2VyIGZvciB0aGF0LCBzbyB3ZSBjaGVjayBmb3IgdGhhdCBhaGVhZCBvZiB0aW1lLlxuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5fcGFyc2VRdW90ZShpbnB1dCwgbG9jYXRpb24pO1xuXG4gICAgaWYgKHF1b3RlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBxdW90ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja05vSW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHNvdXJjZVRvTGV4ID0gdGhpcy5fc3RyaXBDb21tZW50cyhpbnB1dCk7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoc291cmNlVG9MZXgpO1xuICAgIHJldHVybiBuZXcgUGFyc2VBU1QoXG4gICAgICBpbnB1dCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdG9rZW5zLFxuICAgICAgc291cmNlVG9MZXgubGVuZ3RoLFxuICAgICAgZmFsc2UsXG4gICAgICB0aGlzLmVycm9ycyxcbiAgICAgIGlucHV0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aFxuICAgICkucGFyc2VDaGFpbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VRdW90ZShpbnB1dDogc3RyaW5nIHwgbnVsbCwgbG9jYXRpb246IGFueSk6IEFTVCB8IG51bGwge1xuICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeFNlcGFyYXRvckluZGV4ID0gaW5wdXQuaW5kZXhPZihcIjpcIik7XG4gICAgaWYgKHByZWZpeFNlcGFyYXRvckluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeCA9IGlucHV0LnN1YnN0cmluZygwLCBwcmVmaXhTZXBhcmF0b3JJbmRleCkudHJpbSgpO1xuICAgIGlmICghaXNJZGVudGlmaWVyKHByZWZpeCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1bmludGVycHJldGVkRXhwcmVzc2lvbiA9IGlucHV0LnN1YnN0cmluZyhwcmVmaXhTZXBhcmF0b3JJbmRleCArIDEpO1xuICAgIHJldHVybiBuZXcgUXVvdGUobmV3IFBhcnNlU3BhbigwLCBpbnB1dC5sZW5ndGgpLCBwcmVmaXgsIHVuaW50ZXJwcmV0ZWRFeHByZXNzaW9uLCBsb2NhdGlvbik7XG4gIH1cblxuICBwYXJzZVRlbXBsYXRlQmluZGluZ3MocHJlZml4VG9rZW46IHN0cmluZyB8IG51bGwsIGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpOiBUZW1wbGF0ZUJpbmRpbmdQYXJzZVJlc3VsdCB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5fbGV4ZXIudG9rZW5pemUoaW5wdXQpO1xuICAgIGlmIChwcmVmaXhUb2tlbikge1xuICAgICAgLy8gUHJlZml4IHRoZSB0b2tlbnMgd2l0aCB0aGUgdG9rZW5zIGZyb20gcHJlZml4VG9rZW4gYnV0IGhhdmUgdGhlbSB0YWtlIG5vIHNwYWNlICgwIGluZGV4KS5cbiAgICAgIGNvbnN0IHByZWZpeFRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHByZWZpeFRva2VuKS5tYXAodCA9PiB7XG4gICAgICAgIHQuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zLnVuc2hpZnQoLi4ucHJlZml4VG9rZW5zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQYXJzZUFTVChpbnB1dCwgbG9jYXRpb24sIHRva2VucywgaW5wdXQubGVuZ3RoLCBmYWxzZSwgdGhpcy5lcnJvcnMsIDApLnBhcnNlVGVtcGxhdGVCaW5kaW5ncygpO1xuICB9XG5cbiAgcGFyc2VJbnRlcnBvbGF0aW9uKFxuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgbG9jYXRpb246IGFueSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBBU1RXaXRoU291cmNlIHwgbnVsbCB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNwbGl0SW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGlmIChzcGxpdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IEFTVFtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0LmV4cHJlc3Npb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uVGV4dCA9IHNwbGl0LmV4cHJlc3Npb25zW2ldO1xuICAgICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGV4cHJlc3Npb25UZXh0KTtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHNvdXJjZVRvTGV4KTtcbiAgICAgIGNvbnN0IGFzdCA9IG5ldyBQYXJzZUFTVChcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIHNvdXJjZVRvTGV4Lmxlbmd0aCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRoaXMuZXJyb3JzLFxuICAgICAgICBzcGxpdC5vZmZzZXRzW2ldICsgKGV4cHJlc3Npb25UZXh0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aClcbiAgICAgICkucGFyc2VDaGFpbigpO1xuICAgICAgZXhwcmVzc2lvbnMucHVzaChhc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgIG5ldyBJbnRlcnBvbGF0aW9uKG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT09IG51bGwgPyAwIDogaW5wdXQubGVuZ3RoKSwgc3BsaXQuc3RyaW5ncywgZXhwcmVzc2lvbnMpLFxuICAgICAgaW5wdXQsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRoaXMuZXJyb3JzXG4gICAgKTtcbiAgfVxuXG4gIHNwbGl0SW50ZXJwb2xhdGlvbihcbiAgICBpbnB1dDogc3RyaW5nLFxuICAgIGxvY2F0aW9uOiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUdcbiAgKTogU3BsaXRJbnRlcnBvbGF0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgcmVnZXhwID0gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQocmVnZXhwKTtcbiAgICBpZiAocGFydHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGV4cHJlc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG9mZnNldHM6IG51bWJlcltdID0gW107XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFydDogc3RyaW5nID0gcGFydHNbaV07XG4gICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgLy8gZml4ZWQgc3RyaW5nXG4gICAgICAgIHN0cmluZ3MucHVzaChwYXJ0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9mZnNldCArPSBpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0Lmxlbmd0aDtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChwYXJ0KTtcbiAgICAgICAgb2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBwYXJ0Lmxlbmd0aCArIGludGVycG9sYXRpb25Db25maWcuZW5kLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIFwiQmxhbmsgZXhwcmVzc2lvbnMgYXJlIG5vdCBhbGxvd2VkIGluIGludGVycG9sYXRlZCBzdHJpbmdzXCIsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgYGF0IGNvbHVtbiAke3RoaXMuX2ZpbmRJbnRlcnBvbGF0aW9uRXJyb3JDb2x1bW4ocGFydHMsIGksIGludGVycG9sYXRpb25Db25maWcpfSBpbmAsXG4gICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaChcIiRpbXBsaWN0XCIpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTcGxpdEludGVycG9sYXRpb24oc3RyaW5ncywgZXhwcmVzc2lvbnMsIG9mZnNldHMpO1xuICB9XG5cbiAgd3JhcExpdGVyYWxQcmltaXRpdmUoaW5wdXQ6IHN0cmluZyB8IG51bGwsIGxvY2F0aW9uOiBhbnkpOiBBU1RXaXRoU291cmNlIHtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoXG4gICAgICBuZXcgTGl0ZXJhbFByaW1pdGl2ZShuZXcgUGFyc2VTcGFuKDAsIGlucHV0ID09PSBudWxsID8gMCA6IGlucHV0Lmxlbmd0aCksIGlucHV0KSxcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aGlzLmVycm9yc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9zdHJpcENvbW1lbnRzKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGkgPSB0aGlzLl9jb21tZW50U3RhcnQoaW5wdXQpO1xuICAgIHJldHVybiBpICE9IG51bGwgPyBpbnB1dC5zdWJzdHJpbmcoMCwgaSkudHJpbSgpIDogaW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21tZW50U3RhcnQoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICAgIGxldCBvdXRlclF1b3RlOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgICBjb25zdCBuZXh0Q2hhciA9IGlucHV0LmNoYXJDb2RlQXQoaSArIDEpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gY2hhcnMuJFNMQVNIICYmIG5leHRDaGFyID09PSBjaGFycy4kU0xBU0ggJiYgb3V0ZXJRdW90ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKG91dGVyUXVvdGUgPT09IGNoYXIpIHtcbiAgICAgICAgb3V0ZXJRdW90ZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKG91dGVyUXVvdGUgPT09IG51bGwgJiYgaXNRdW90ZShjaGFyKSkge1xuICAgICAgICBvdXRlclF1b3RlID0gY2hhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja05vSW50ZXJwb2xhdGlvbihpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogYW55LCBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgcmVnZXhwID0gX2NyZWF0ZUludGVycG9sYXRlUmVnRXhwKGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQocmVnZXhwKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgIGBHb3QgaW50ZXJwb2xhdGlvbiAoJHtpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0fSR7aW50ZXJwb2xhdGlvbkNvbmZpZy5lbmR9KSB3aGVyZSBleHByZXNzaW9uIHdhcyBleHBlY3RlZGAsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgMSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgbG9jYXRpb25cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihcbiAgICBwYXJ0czogc3RyaW5nW10sXG4gICAgcGFydEluRXJySWR4OiBudW1iZXIsXG4gICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZ1xuICApOiBudW1iZXIge1xuICAgIGxldCBlcnJMb2NhdGlvbiA9IFwiXCI7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXJ0SW5FcnJJZHg7IGorKykge1xuICAgICAgZXJyTG9jYXRpb24gKz0gaiAlIDIgPT09IDAgPyBwYXJ0c1tqXSA6IGAke2ludGVycG9sYXRpb25Db25maWcuc3RhcnR9JHtwYXJ0c1tqXX0ke2ludGVycG9sYXRpb25Db25maWcuZW5kfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyckxvY2F0aW9uLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VBU1Qge1xuICBwcml2YXRlIHJwYXJlbnNFeHBlY3RlZCA9IDA7XG4gIHByaXZhdGUgcmJyYWNrZXRzRXhwZWN0ZWQgPSAwO1xuICBwcml2YXRlIHJicmFjZXNFeHBlY3RlZCA9IDA7XG5cbiAgaW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnB1dDogc3RyaW5nLFxuICAgIHB1YmxpYyBsb2NhdGlvbjogYW55LFxuICAgIHB1YmxpYyB0b2tlbnM6IFRva2VuW10sXG4gICAgcHVibGljIGlucHV0TGVuZ3RoOiBudW1iZXIsXG4gICAgcHVibGljIHBhcnNlQWN0aW9uOiBib29sZWFuLFxuICAgIHByaXZhdGUgZXJyb3JzOiBQYXJzZXJFcnJvcltdLFxuICAgIHByaXZhdGUgb2Zmc2V0OiBudW1iZXJcbiAgKSB7fVxuXG4gIHBlZWsob2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIGkgPCB0aGlzLnRva2Vucy5sZW5ndGggPyB0aGlzLnRva2Vuc1tpXSA6IEVPRjtcbiAgfVxuXG4gIGdldCBuZXh0KCk6IFRva2VuIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKDApO1xuICB9XG5cbiAgZ2V0IGlucHV0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMubmV4dC5pbmRleCArIHRoaXMub2Zmc2V0IDogdGhpcy5pbnB1dExlbmd0aCArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgc3BhbihzdGFydDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQYXJzZVNwYW4oc3RhcnQsIHRoaXMuaW5wdXRJbmRleCk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgfVxuXG4gIG9wdGlvbmFsQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY29kZSkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwZWVrS2V5d29yZExldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0LmlzS2V5d29yZExldCgpO1xuICB9XG4gIHBlZWtLZXl3b3JkQXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRBcygpO1xuICB9XG5cbiAgZXhwZWN0Q2hhcmFjdGVyKGNvZGU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpfWApO1xuICB9XG5cbiAgb3B0aW9uYWxPcGVyYXRvcihvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV4dC5pc09wZXJhdG9yKG9wKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGV4cGVjdE9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVycm9yKGBNaXNzaW5nIGV4cGVjdGVkIG9wZXJhdG9yICR7b3BlcmF0b3J9YCk7XG4gIH1cblxuICBleHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbiA9IHRoaXMubmV4dDtcbiAgICBpZiAoIW4uaXNJZGVudGlmaWVyKCkgJiYgIW4uaXNLZXl3b3JkKCkpIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHtufSwgZXhwZWN0ZWQgaWRlbnRpZmllciBvciBrZXl3b3JkYCk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBleHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSAmJiAhbi5pc1N0cmluZygpKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7bn0sIGV4cGVjdGVkIGlkZW50aWZpZXIsIGtleXdvcmQsIG9yIHN0cmluZ2ApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuLnRvU3RyaW5nKCkgYXMgc3RyaW5nO1xuICB9XG5cbiAgcGFyc2VDaGFpbigpOiBBU1Qge1xuICAgIGNvbnN0IGV4cHJzOiBBU1RbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleHByID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgIGV4cHJzLnB1c2goZXhwcik7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJzZUFjdGlvbikge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXCJCaW5kaW5nIGV4cHJlc3Npb24gY2Fubm90IGNvbnRhaW4gY2hhaW5lZCBleHByZXNzaW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pKSB7fSAvLyByZWFkIGFsbCBzZW1pY29sb25zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAnJHt0aGlzLm5leHR9J2ApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9XG4gICAgaWYgKGV4cHJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGV4cHJzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENoYWluKHRoaXMuc3BhbihzdGFydCksIGV4cHJzKTtcbiAgfVxuXG4gIHBhcnNlUGlwZSgpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCJ8XCIpKSB7XG4gICAgICBpZiAodGhpcy5wYXJzZUFjdGlvbikge1xuICAgICAgICB0aGlzLmVycm9yKFwiQ2Fubm90IGhhdmUgYSBwaXBlIGluIGFuIGFjdGlvbiBleHByZXNzaW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTtcbiAgICAgICAgY29uc3QgYXJnczogQVNUW10gPSBbXTtcbiAgICAgICAgd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKSkge1xuICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLnBhcnNlRXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBuZXcgQmluZGluZ1BpcGUodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBuYW1lLCBhcmdzKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcInxcIikpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUV4cHJlc3Npb24oKTogQVNUIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7XG4gIH1cblxuICBwYXJzZUNvbmRpdGlvbmFsKCk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wYXJzZUxvZ2ljYWxPcigpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj9cIikpIHtcbiAgICAgIGNvbnN0IHllcyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICBsZXQgbm86IEFTVDtcbiAgICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgICB0aGlzLmVycm9yKGBDb25kaXRpb25hbCBleHByZXNzaW9uICR7ZXhwcmVzc2lvbn0gcmVxdWlyZXMgYWxsIDMgZXhwcmVzc2lvbnNgKTtcbiAgICAgICAgbm8gPSBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm8gPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbCh0aGlzLnNwYW4oc3RhcnQpLCByZXN1bHQsIHllcywgbm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlTG9naWNhbE9yKCk6IEFTVCB7XG4gICAgLy8gJ3x8J1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbEFuZCgpO1xuICAgIHdoaWxlICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCJ8fFwiKSkge1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlTG9naWNhbEFuZCgpO1xuICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCBcInx8XCIsIHJlc3VsdCwgcmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VMb2dpY2FsQW5kKCk6IEFTVCB7XG4gICAgLy8gJyYmJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlRXF1YWxpdHkoKTtcbiAgICB3aGlsZSAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiJiZcIikpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZUVxdWFsaXR5KCk7XG4gICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIFwiJiZcIiwgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUVxdWFsaXR5KCk6IEFTVCB7XG4gICAgLy8gJz09JywnIT0nLCc9PT0nLCchPT0nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VSZWxhdGlvbmFsKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiPT1cIjpcbiAgICAgICAgY2FzZSBcIj09PVwiOlxuICAgICAgICBjYXNlIFwiIT1cIjpcbiAgICAgICAgY2FzZSBcIiE9PVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VSZWxhdGlvbmFsKCk6IEFTVCB7XG4gICAgLy8gJzwnLCAnPicsICc8PScsICc+PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUFkZGl0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiPFwiOlxuICAgICAgICBjYXNlIFwiPlwiOlxuICAgICAgICBjYXNlIFwiPD1cIjpcbiAgICAgICAgY2FzZSBcIj49XCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VBZGRpdGl2ZSgpOiBBU1Qge1xuICAgIC8vICcrJywgJy0nXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VNdWx0aXBsaWNhdGl2ZSgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VNdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZU11bHRpcGxpY2F0aXZlKCk6IEFTVCB7XG4gICAgLy8gJyonLCAnJScsICcvJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICBjYXNlIFwiJVwiOlxuICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgb3BlcmF0b3IsIHJlc3VsdCwgcmlnaHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZVByZWZpeCgpOiBBU1Qge1xuICAgIGlmICh0aGlzLm5leHQudHlwZSA9PT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgbGV0IHJlc3VsdDogQVNUO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5KHRoaXMuc3BhbihzdGFydCksIG9wZXJhdG9yLCBuZXcgTGl0ZXJhbFByaW1pdGl2ZShuZXcgUGFyc2VTcGFuKHN0YXJ0LCBzdGFydCksIDApLCByZXN1bHQpO1xuICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByZWZpeE5vdCh0aGlzLnNwYW4oc3RhcnQpLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZUNhbGxDaGFpbigpO1xuICB9XG5cbiAgcGFyc2VDYWxsQ2hhaW4oKTogQVNUIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVByaW1hcnkoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFBFUklPRCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZXN1bHQsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25hbE9wZXJhdG9yKFwiPy5cIikpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZXN1bHQsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgS2V5ZWRXcml0ZSh0aGlzLnNwYW4ocmVzdWx0LnNwYW4uc3RhcnQpLCByZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFJlYWQodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0LCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VDYWxsQXJndW1lbnRzKCk7XG4gICAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgICByZXN1bHQgPSBuZXcgRnVuY3Rpb25DYWxsKHRoaXMuc3BhbihyZXN1bHQuc3Bhbi5zdGFydCksIHJlc3VsdCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIiFcIikpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IE5vbk51bGxBc3NlcnQodGhpcy5zcGFuKHJlc3VsdC5zcGFuLnN0YXJ0KSwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyc2VQcmltYXJ5KCk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgaWYgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0tleXdvcmROdWxsKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIG51bGwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFVuZGVmaW5lZCgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB2b2lkIDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFRydWUoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkRmFsc2UoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFRoaXMoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IEltcGxpY2l0UmVjZWl2ZXIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5wYXJzZUV4cHJlc3Npb25MaXN0KGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsQXJyYXkodGhpcy5zcGFuKHN0YXJ0KSwgZWxlbWVudHMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0UpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUxpdGVyYWxNYXAoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc0lkZW50aWZpZXIoKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VBY2Nlc3NNZW1iZXJPck1ldGhvZENhbGwobmV3IEltcGxpY2l0UmVjZWl2ZXIodGhpcy5zcGFuKHN0YXJ0KSksIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc051bWJlcigpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmV4dC50b051bWJlcigpO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzU3RyaW5nKCkpIHtcbiAgICAgIGNvbnN0IGxpdGVyYWxWYWx1ZSA9IHRoaXMubmV4dC50b1N0cmluZygpO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgbGl0ZXJhbFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAke3RoaXMuaW5wdXR9YCk7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke3RoaXMubmV4dH1gKTtcbiAgICAgIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCkpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbkxpc3QodGVybWluYXRvcjogbnVtYmVyKTogQVNUW10ge1xuICAgIGNvbnN0IHJlc3VsdDogQVNUW10gPSBbXTtcbiAgICBpZiAoIXRoaXMubmV4dC5pc0NoYXJhY3Rlcih0ZXJtaW5hdG9yKSkge1xuICAgICAgZG8ge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTU1BKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxpdGVyYWxNYXAoKTogTGl0ZXJhbE1hcCB7XG4gICAgY29uc3Qga2V5czogTGl0ZXJhbE1hcEtleVtdID0gW107XG4gICAgY29uc3QgdmFsdWVzOiBBU1RbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0UpO1xuICAgIGlmICghdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkge1xuICAgICAgdGhpcy5yYnJhY2VzRXhwZWN0ZWQrKztcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgcXVvdGVkID0gdGhpcy5uZXh0LmlzU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk7XG4gICAgICAgIGtleXMucHVzaCh7a2V5LCBxdW90ZWR9KTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTtcbiAgICAgICAgdmFsdWVzLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSkpO1xuICAgICAgdGhpcy5yYnJhY2VzRXhwZWN0ZWQtLTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExpdGVyYWxNYXAodGhpcy5zcGFuKHN0YXJ0KSwga2V5cywgdmFsdWVzKTtcbiAgfVxuXG4gIHBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlY2VpdmVyOiBBU1QsIGlzU2FmZSA9IGZhbHNlKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHJlY2VpdmVyLnNwYW4uc3RhcnQ7XG4gICAgY29uc3QgaWQgPSB0aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMUEFSRU4pKSB7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO1xuICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VDYWxsQXJndW1lbnRzKCk7XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUlBBUkVOKTtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICBjb25zdCBzcGFuID0gdGhpcy5zcGFuKHN0YXJ0KTtcbiAgICAgIHJldHVybiBpc1NhZmUgPyBuZXcgU2FmZU1ldGhvZENhbGwoc3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKSA6IG5ldyBNZXRob2RDYWxsKHNwYW4sIHJlY2VpdmVyLCBpZCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1NhZmUpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFwiVGhlICc/Licgb3BlcmF0b3IgY2Fubm90IGJlIHVzZWQgaW4gdGhlIGFzc2lnbm1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTYWZlUHJvcGVydHlSZWFkKHRoaXMuc3BhbihzdGFydCksIHJlY2VpdmVyLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmluZGluZ3MgY2Fubm90IGNvbnRhaW4gYXNzaWdubWVudHNcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlXcml0ZSh0aGlzLnNwYW4oc3RhcnQpLCByZWNlaXZlciwgaWQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UmVhZCh0aGlzLnNwYW4oc3RhcnQpLCByZWNlaXZlciwgaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyc2VDYWxsQXJndW1lbnRzKCk6IEJpbmRpbmdQaXBlW10ge1xuICAgIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTikpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb25hbHM6IEFTVFtdID0gW107XG4gICAgZG8ge1xuICAgICAgcG9zaXRpb25hbHMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICB9IHdoaWxlICh0aGlzLm9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSkpO1xuICAgIHJldHVybiBwb3NpdGlvbmFscyBhcyBCaW5kaW5nUGlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGlkZW50aWZpZXIsIGEga2V5d29yZCwgYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBgLWAgaW5iZXR3ZWVuLlxuICAgKi9cbiAgZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IG9wZXJhdG9yRm91bmQgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTtcbiAgICAgIG9wZXJhdG9yRm91bmQgPSB0aGlzLm9wdGlvbmFsT3BlcmF0b3IoXCItXCIpO1xuICAgICAgaWYgKG9wZXJhdG9yRm91bmQpIHtcbiAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKG9wZXJhdG9yRm91bmQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdC50b1N0cmluZygpO1xuICB9XG5cbiAgcGFyc2VUZW1wbGF0ZUJpbmRpbmdzKCk6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCBiaW5kaW5nczogVGVtcGxhdGVCaW5kaW5nW10gPSBbXTtcbiAgICBsZXQgcHJlZml4OiBzdHJpbmcgPSBudWxsITtcbiAgICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSBbXTtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICBsZXQga2V5SXNWYXI6IGJvb2xlYW4gPSB0aGlzLnBlZWtLZXl3b3JkTGV0KCk7XG4gICAgICBpZiAoa2V5SXNWYXIpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCByYXdLZXkgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpO1xuICAgICAgbGV0IGtleSA9IHJhd0tleTtcbiAgICAgIGlmICgha2V5SXNWYXIpIHtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgICAgIHByZWZpeCA9IGtleTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXkgPSBwcmVmaXggKyBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTtcbiAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBudWxsITtcbiAgICAgIGxldCBleHByZXNzaW9uOiBBU1RXaXRoU291cmNlID0gbnVsbCE7XG4gICAgICBpZiAoa2V5SXNWYXIpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxPcGVyYXRvcihcIj1cIikpIHtcbiAgICAgICAgICBuYW1lID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gXCIkaW1wbGljaXRcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWtLZXl3b3JkQXMoKSkge1xuICAgICAgICBjb25zdCBsZXRTdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7IC8vIGNvbnN1bWUgYGFzYFxuICAgICAgICBuYW1lID0gcmF3S2V5O1xuICAgICAgICBrZXkgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpOyAvLyByZWFkIGxvY2FsIHZhciBuYW1lXG4gICAgICAgIGtleUlzVmFyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0ICE9PSBFT0YgJiYgIXRoaXMucGVla0tleXdvcmRMZXQoKSkge1xuICAgICAgICBjb25zdCBzdCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICAgICAgY29uc3QgYXN0ID0gdGhpcy5wYXJzZVBpcGUoKTtcbiAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3QgLSB0aGlzLm9mZnNldCwgdGhpcy5pbnB1dEluZGV4IC0gdGhpcy5vZmZzZXQpO1xuICAgICAgICBleHByZXNzaW9uID0gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBzb3VyY2UsIHRoaXMubG9jYXRpb24sIHRoaXMuZXJyb3JzKTtcbiAgICAgIH1cbiAgICAgIGJpbmRpbmdzLnB1c2gobmV3IFRlbXBsYXRlQmluZGluZyh0aGlzLnNwYW4oc3RhcnQpLCBrZXksIGtleUlzVmFyLCBuYW1lLCBleHByZXNzaW9uKSk7XG4gICAgICBpZiAodGhpcy5wZWVrS2V5d29yZEFzKCkgJiYgIWtleUlzVmFyKSB7XG4gICAgICAgIGNvbnN0IGxldFN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgLy8gY29uc3VtZSBgYXNgXG4gICAgICAgIGNvbnN0IGxldE5hbWUgPSB0aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpOyAvLyByZWFkIGxvY2FsIHZhciBuYW1lXG4gICAgICAgIGJpbmRpbmdzLnB1c2gobmV3IFRlbXBsYXRlQmluZGluZyh0aGlzLnNwYW4obGV0U3RhcnQpLCBsZXROYW1lLCB0cnVlLCBrZXksIG51bGwhKSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMub3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgdGhpcy5vcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0KGJpbmRpbmdzLCB3YXJuaW5ncywgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcihtZXNzYWdlLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dChpbmRleCksIHRoaXMubG9jYXRpb24pKTtcbiAgICB0aGlzLnNraXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9jYXRpb25UZXh0KGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGggPyBgYXQgY29sdW1uICR7dGhpcy50b2tlbnNbaW5kZXhdLmluZGV4ICsgMX0gaW5gIDogYGF0IHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb25gO1xuICB9XG5cbiAgLy8gRXJyb3IgcmVjb3Zlcnkgc2hvdWxkIHNraXAgdG9rZW5zIHVudGlsIGl0IGVuY291bnRlcnMgYSByZWNvdmVyeSBwb2ludC4gc2tpcCgpIHRyZWF0c1xuICAvLyB0aGUgZW5kIG9mIGlucHV0IGFuZCBhICc7JyBhcyB1bmNvbmRpdGlvbmFsbHkgYSByZWNvdmVyeSBwb2ludC4gSXQgYWxzbyB0cmVhdHMgJyknLFxuICAvLyAnfScgYW5kICddJyBhcyBjb25kaXRpb25hbCByZWNvdmVyeSBwb2ludHMgaWYgb25lIG9mIGNhbGxpbmcgcHJvZHVjdGlvbnMgaXMgZXhwZWN0aW5nXG4gIC8vIG9uZSBvZiB0aGVzZSBzeW1ib2xzLiBUaGlzIGFsbG93cyBza2lwKCkgdG8gcmVjb3ZlciBmcm9tIGVycm9ycyBzdWNoIGFzICcoYS4pICsgMScgYWxsb3dpbmdcbiAgLy8gbW9yZSBvZiB0aGUgQVNUIHRvIGJlIHJldGFpbmVkIChpdCBkb2Vzbid0IHNraXAgYW55IHRva2VucyBhcyB0aGUgJyknIGlzIHJldGFpbmVkIGJlY2F1c2VcbiAgLy8gb2YgdGhlICcoJyBiZWdpbnMgYW4gJygnIDxleHByPiAnKScgcHJvZHVjdGlvbikuIFRoZSByZWNvdmVyeSBwb2ludHMgb2YgZ3JvdXBpbmcgc3ltYm9sc1xuICAvLyBtdXN0IGJlIGNvbmRpdGlvbmFsIGFzIHRoZXkgbXVzdCBiZSBza2lwcGVkIGlmIG5vbmUgb2YgdGhlIGNhbGxpbmcgcHJvZHVjdGlvbnMgYXJlIG5vdFxuICAvLyBleHBlY3RpbmcgdGhlIGNsb3NpbmcgdG9rZW4gZWxzZSB3ZSB3aWxsIG5ldmVyIG1ha2UgcHJvZ3Jlc3MgaW4gdGhlIGNhc2Ugb2YgYW5cbiAgLy8gZXh0cmFuZW91cyBncm91cCBjbG9zaW5nIHN5bWJvbCAoc3VjaCBhcyBhIHN0cmF5ICcpJykuIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciAnOycgYmVjYXVzZVxuICAvLyBwYXJzZUNoYWluKCkgaXMgYWx3YXlzIHRoZSByb290IHByb2R1Y3Rpb24gYW5kIGl0IGV4cGVjdHMgYSAnOycuXG5cbiAgLy8gSWYgYSBwcm9kdWN0aW9uIGV4cGVjdHMgb25lIG9mIHRoZXNlIHRva2VuIGl0IGluY3JlbWVudHMgdGhlIGNvcnJlc3BvbmRpbmcgbmVzdGluZyBjb3VudCxcbiAgLy8gYW5kIHRoZW4gZGVjcmVtZW50cyBpdCBqdXN0IHByaW9yIHRvIGNoZWNraW5nIGlmIHRoZSB0b2tlbiBpcyBpbiB0aGUgaW5wdXQuXG4gIHByaXZhdGUgc2tpcCgpIHtcbiAgICBsZXQgbiA9IHRoaXMubmV4dDtcbiAgICB3aGlsZSAoXG4gICAgICB0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoICYmXG4gICAgICAhbi5pc0NoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSAmJlxuICAgICAgKHRoaXMucnBhcmVuc0V4cGVjdGVkIDw9IDAgfHwgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTikpICYmXG4gICAgICAodGhpcy5yYnJhY2VzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkgJiZcbiAgICAgICh0aGlzLnJicmFja2V0c0V4cGVjdGVkIDw9IDAgfHwgIW4uaXNDaGFyYWN0ZXIoY2hhcnMuJFJCUkFDS0VUKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLm5leHQuaXNFcnJvcigpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2gobmV3IFBhcnNlckVycm9yKHRoaXMubmV4dC50b1N0cmluZygpISwgdGhpcy5pbnB1dCwgdGhpcy5sb2NhdGlvblRleHQoKSwgdGhpcy5sb2NhdGlvbikpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICBuID0gdGhpcy5uZXh0O1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlciBpbXBsZW1lbnRzIEFzdFZpc2l0b3Ige1xuICBzdGF0aWMgY2hlY2soYXN0OiBBU1QpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcyA9IG5ldyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlcigpO1xuICAgIGFzdC52aXNpdChzKTtcbiAgICByZXR1cm4gcy5lcnJvcnM7XG4gIH1cblxuICBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgdmlzaXRJbXBsaWNpdFJlY2VpdmVyKGFzdDogSW1wbGljaXRSZWNlaXZlciwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24sIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdExpdGVyYWxQcmltaXRpdmUoYXN0OiBMaXRlcmFsUHJpbWl0aXZlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcm9wZXJ0eVJlYWQoYXN0OiBQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRTYWZlUHJvcGVydHlSZWFkKGFzdDogU2FmZVByb3BlcnR5UmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TWV0aG9kQ2FsbChhc3Q6IE1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFNhZmVNZXRob2RDYWxsKGFzdDogU2FmZU1ldGhvZENhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEZ1bmN0aW9uQ2FsbChhc3Q6IEZ1bmN0aW9uQ2FsbCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5LCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC5leHByZXNzaW9ucyk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwLCBjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLnZpc2l0QWxsKGFzdC52YWx1ZXMpO1xuICB9XG5cbiAgdmlzaXRCaW5hcnkoYXN0OiBCaW5hcnksIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0Tm9uTnVsbEFzc2VydChhc3Q6IE5vbk51bGxBc3NlcnQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChcInBpcGVzXCIpO1xuICB9XG5cbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBbGwoYXN0czogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGFzdHMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gIH1cblxuICB2aXNpdENoYWluKGFzdDogQ2hhaW4sIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdFF1b3RlKGFzdDogUXVvdGUsIGNvbnRleHQ6IGFueSkge31cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY29uc3QgVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICdBJzogJ0xJTksnLFxuICAnQic6ICdCT0xEX1RFWFQnLFxuICAnQlInOiAnTElORV9CUkVBSycsXG4gICdFTSc6ICdFTVBIQVNJU0VEX1RFWFQnLFxuICAnSDEnOiAnSEVBRElOR19MRVZFTDEnLFxuICAnSDInOiAnSEVBRElOR19MRVZFTDInLFxuICAnSDMnOiAnSEVBRElOR19MRVZFTDMnLFxuICAnSDQnOiAnSEVBRElOR19MRVZFTDQnLFxuICAnSDUnOiAnSEVBRElOR19MRVZFTDUnLFxuICAnSDYnOiAnSEVBRElOR19MRVZFTDYnLFxuICAnSFInOiAnSE9SSVpPTlRBTF9SVUxFJyxcbiAgJ0knOiAnSVRBTElDX1RFWFQnLFxuICAnTEknOiAnTElTVF9JVEVNJyxcbiAgJ0xJTksnOiAnTUVESUFfTElOSycsXG4gICdPTCc6ICdPUkRFUkVEX0xJU1QnLFxuICAnUCc6ICdQQVJBR1JBUEgnLFxuICAnUSc6ICdRVU9UQVRJT04nLFxuICAnUyc6ICdTVFJJS0VUSFJPVUdIX1RFWFQnLFxuICAnU01BTEwnOiAnU01BTExfVEVYVCcsXG4gICdTVUInOiAnU1VCU1RSSVBUJyxcbiAgJ1NVUCc6ICdTVVBFUlNDUklQVCcsXG4gICdUQk9EWSc6ICdUQUJMRV9CT0RZJyxcbiAgJ1REJzogJ1RBQkxFX0NFTEwnLFxuICAnVEZPT1QnOiAnVEFCTEVfRk9PVEVSJyxcbiAgJ1RIJzogJ1RBQkxFX0hFQURFUl9DRUxMJyxcbiAgJ1RIRUFEJzogJ1RBQkxFX0hFQURFUicsXG4gICdUUic6ICdUQUJMRV9ST1cnLFxuICAnVFQnOiAnTU9OT1NQQUNFRF9URVhUJyxcbiAgJ1UnOiAnVU5ERVJMSU5FRF9URVhUJyxcbiAgJ1VMJzogJ1VOT1JERVJFRF9MSVNUJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIHBsYWNlaG9sZGVyIHdpdGggZGlmZmVyZW50IGNvbnRlbnQuXG4gKlxuICogUmV0dXJucyB0aGUgc2FtZSBwbGFjZWhvbGRlciBuYW1lIHdoZW4gdGhlIGNvbnRlbnQgaXMgaWRlbnRpY2FsLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJSZWdpc3RyeSB7XG4gIC8vIENvdW50IHRoZSBvY2N1cnJlbmNlIG9mIHRoZSBiYXNlIG5hbWUgdG9wIGdlbmVyYXRlIGEgdW5pcXVlIG5hbWVcbiAgcHJpdmF0ZSBfcGxhY2VIb2xkZXJOYW1lQ291bnRzOiB7W2s6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgLy8gTWFwcyBzaWduYXR1cmUgdG8gcGxhY2Vob2xkZXIgbmFtZXNcbiAgcHJpdmF0ZSBfc2lnbmF0dXJlVG9OYW1lOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICBnZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZywgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgaXNWb2lkOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoVGFnKHRhZywgYXR0cnMsIGlzVm9pZCk7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJUYWcgPSB0YWcudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBiYXNlTmFtZSA9IFRBR19UT19QTEFDRUhPTERFUl9OQU1FU1t1cHBlclRhZ10gfHwgYFRBR18ke3VwcGVyVGFnfWA7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShpc1ZvaWQgPyBiYXNlTmFtZSA6IGBTVEFSVF8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5faGFzaENsb3NpbmdUYWcodGFnKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGBDTE9TRV8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlck5hbWUobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVwcGVyTmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBgUEg6ICR7dXBwZXJOYW1lfT0ke2NvbnRlbnR9YDtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlxdWVOYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKHVwcGVyTmFtZSk7XG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSB1bmlxdWVOYW1lO1xuXG4gICAgcmV0dXJuIHVuaXF1ZU5hbWU7XG4gIH1cblxuICBnZXRVbmlxdWVQbGFjZWhvbGRlcihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUobmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGEgaGFzaCBmb3IgYSB0YWcgLSBkb2VzIG5vdCB0YWtlIGF0dHJpYnV0ZSBvcmRlciBpbnRvIGFjY291bnRcbiAgcHJpdmF0ZSBfaGFzaFRhZyh0YWc6IHN0cmluZywgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgaXNWb2lkOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IGA8JHt0YWd9YDtcbiAgICBjb25zdCBzdHJBdHRycyA9IE9iamVjdC5rZXlzKGF0dHJzKS5zb3J0KCkubWFwKChuYW1lKSA9PiBgICR7bmFtZX09JHthdHRyc1tuYW1lXX1gKS5qb2luKCcnKTtcbiAgICBjb25zdCBlbmQgPSBpc1ZvaWQgPyAnLz4nIDogYD48LyR7dGFnfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0ICsgc3RyQXR0cnMgKyBlbmQ7XG4gIH1cblxuICBwcml2YXRlIF9oYXNoQ2xvc2luZ1RhZyh0YWc6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9oYXNoVGFnKGAvJHt0YWd9YCwge30sIGZhbHNlKTsgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlVW5pcXVlTmFtZShiYXNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNlZW4gPSB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHMuaGFzT3duUHJvcGVydHkoYmFzZSk7XG4gICAgaWYgKCFzZWVuKSB7XG4gICAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSAxO1xuICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV07XG4gICAgdGhpcy5fcGxhY2VIb2xkZXJOYW1lQ291bnRzW2Jhc2VdID0gaWQgKyAxO1xuICAgIHJldHVybiBgJHtiYXNlfV8ke2lkfWA7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQge0xleGVyfSBmcm9tIFwiLi9sZXhlclwiO1xuaW1wb3J0IHtQbGFjZWhvbGRlclJlZ2lzdHJ5fSBmcm9tIFwiLi4vc2VyaWFsaXplcnMvcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSBcIi4uL2FzdC9wYXJzZV91dGlsXCI7XG5cbmNvbnN0IF9leHBQYXJzZXIgPSBuZXcgUGFyc2VyKG5ldyBMZXhlcigpKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gY29udmVydGluZyBodG1sIG5vZGVzIHRvIGFuIGkxOG4gTWVzc2FnZSBnaXZlbiBhbiBpbnRlcnBvbGF0aW9uQ29uZmlnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkoXG4gIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWdcbik6IChub2RlczogaHRtbC5Ob2RlW10sIG1lYW5pbmc6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaWQ6IHN0cmluZykgPT4gaTE4bi5NZXNzYWdlIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBJMThuVmlzaXRvcihfZXhwUGFyc2VyLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICByZXR1cm4gKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKSA9PlxuICAgIHZpc2l0b3IudG9JMThuTWVzc2FnZShub2RlcywgbWVhbmluZywgZGVzY3JpcHRpb24sIGlkKTtcbn1cblxuY2xhc3MgSTE4blZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF9pc0ljdTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWN1RGVwdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJSZWdpc3RyeTogUGxhY2Vob2xkZXJSZWdpc3RyeTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJUb0NvbnRlbnQ6IHtbcGhOYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xuICBwcml2YXRlIF9wbGFjZWhvbGRlclRvTWVzc2FnZToge1twaE5hbWU6IHN0cmluZ106IGkxOG4uTWVzc2FnZX07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwcmVzc2lvblBhcnNlcjogUGFyc2VyLCBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKSB7fVxuXG4gIHB1YmxpYyB0b0kxOG5NZXNzYWdlKG5vZGVzOiBodG1sLk5vZGVbXSwgbWVhbmluZzogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBpZDogc3RyaW5nKTogaTE4bi5NZXNzYWdlIHtcbiAgICB0aGlzLl9pc0ljdSA9IG5vZGVzLmxlbmd0aCA9PT0gMSAmJiBub2Rlc1swXSBpbnN0YW5jZW9mIGh0bWwuRXhwYW5zaW9uO1xuICAgIHRoaXMuX2ljdURlcHRoID0gMDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5ID0gbmV3IFBsYWNlaG9sZGVyUmVnaXN0cnkoKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudCA9IHt9O1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlID0ge307XG5cbiAgICBjb25zdCBpMThub2RlczogaTE4bi5Ob2RlW10gPSBodG1sLnZpc2l0QWxsKHRoaXMsIG5vZGVzLCB7fSk7XG5cbiAgICByZXR1cm4gbmV3IGkxOG4uTWVzc2FnZShpMThub2RlcywgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnQsIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlLCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBodG1sLnZpc2l0QWxsKHRoaXMsIGVsLmNoaWxkcmVuKTtcbiAgICBjb25zdCBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZWwuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIC8vIERvIG5vdCB2aXNpdCB0aGUgYXR0cmlidXRlcywgdHJhbnNsYXRhYmxlIG9uZXMgYXJlIHRvcC1sZXZlbCBBU1RzXG4gICAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGlzVm9pZDogYm9vbGVhbiA9IGdldEh0bWxUYWdEZWZpbml0aW9uKGVsLm5hbWUpLmlzVm9pZDtcbiAgICBjb25zdCBzdGFydFBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0U3RhcnRUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSwgYXR0cnMsIGlzVm9pZCk7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJUb0NvbnRlbnRbc3RhcnRQaE5hbWVdID0gZWwuc291cmNlU3BhbiA/IGVsLnNvdXJjZVNwYW4hLnRvU3RyaW5nKCkgOiBcIlwiO1xuXG4gICAgbGV0IGNsb3NlUGhOYW1lID0gXCJcIjtcblxuICAgIGlmICghaXNWb2lkKSB7XG4gICAgICBjbG9zZVBoTmFtZSA9IHRoaXMuX3BsYWNlaG9sZGVyUmVnaXN0cnkuZ2V0Q2xvc2VUYWdQbGFjZWhvbGRlck5hbWUoZWwubmFtZSk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtjbG9zZVBoTmFtZV0gPSBgPC8ke2VsLm5hbWV9PmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBpMThuLlRhZ1BsYWNlaG9sZGVyKGVsLm5hbWUsIGF0dHJzLCBzdGFydFBoTmFtZSwgY2xvc2VQaE5hbWUsIGNoaWxkcmVuLCBpc1ZvaWQsIGVsLnNvdXJjZVNwYW4hKTtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2l0VGV4dFdpdGhJbnRlcnBvbGF0aW9uKGF0dHJpYnV0ZS52YWx1ZSwgYXR0cmlidXRlLnNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaTE4bi5Ob2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaXRUZXh0V2l0aEludGVycG9sYXRpb24odGV4dC52YWx1ZSwgdGV4dC5zb3VyY2VTcGFuISk7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogaHRtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpOiBpMThuLk5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgdGhpcy5faWN1RGVwdGgrKztcbiAgICBjb25zdCBpMThuSWN1Q2FzZXM6IHtbazogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuICAgIGNvbnN0IGkxOG5JY3UgPSBuZXcgaTE4bi5JY3UoaWN1LnN3aXRjaFZhbHVlLCBpY3UudHlwZSwgaTE4bkljdUNhc2VzLCBpY3Uuc291cmNlU3Bhbik7XG4gICAgaWN1LmNhc2VzLmZvckVhY2goKGNhemUpOiB2b2lkID0+IHtcbiAgICAgIGkxOG5JY3VDYXNlc1tjYXplLnZhbHVlXSA9IG5ldyBpMThuLkNvbnRhaW5lcihcbiAgICAgICAgY2F6ZS5leHByZXNzaW9uLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcywge30pKSxcbiAgICAgICAgY2F6ZS5leHBTb3VyY2VTcGFuXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2ljdURlcHRoLS07XG5cbiAgICBpZiAodGhpcy5faXNJY3UgfHwgdGhpcy5faWN1RGVwdGggPiAwKSB7XG4gICAgICAvLyBSZXR1cm5zIGFuIElDVSBub2RlIHdoZW46XG4gICAgICAvLyAtIHRoZSBtZXNzYWdlICh2cyBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UpIGlzIGFuIElDVSBtZXNzYWdlLCBvclxuICAgICAgLy8gLSB0aGUgSUNVIG1lc3NhZ2UgaXMgbmVzdGVkLlxuICAgICAgY29uc3QgZXhwUGggPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFVuaXF1ZVBsYWNlaG9sZGVyKGBWQVJfJHtpY3UudHlwZX1gKTtcbiAgICAgIGkxOG5JY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyID0gZXhwUGg7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclRvQ29udGVudFtleHBQaF0gPSBpY3Uuc3dpdGNoVmFsdWU7XG5cbiAgICAgIHJldHVybiBpMThuSWN1O1xuICAgIH1cblxuICAgIC8vIEVsc2UgcmV0dXJucyBhIHBsYWNlaG9sZGVyXG4gICAgLy8gSUNVIHBsYWNlaG9sZGVycyBzaG91bGQgbm90IGJlIHJlcGxhY2VkIHdpdGggdGhlaXIgb3JpZ2luYWwgY29udGVudCBidXQgd2l0aCB0aGUgdGhlaXJcbiAgICAvLyB0cmFuc2xhdGlvbnMuIFdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IHZpc2l0b3IgKHRoZXkgYXJlIG5vdCByZS1lbnRyYW50KSB0byBjb21wdXRlIHRoZVxuICAgIC8vIG1lc3NhZ2UgaWQuXG4gICAgLy8gVE9ETyh2aWNiKTogYWRkIGEgaHRtbC5Ob2RlIC0+IGkxOG4uTWVzc2FnZSBjYWNoZSB0byBhdm9pZCBoYXZpbmcgdG8gcmUtY3JlYXRlIHRoZSBtc2dcbiAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFBsYWNlaG9sZGVyTmFtZShcIklDVVwiLCBpY3Uuc291cmNlU3Bhbi50b1N0cmluZygpKTtcbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IEkxOG5WaXNpdG9yKHRoaXMuX2V4cHJlc3Npb25QYXJzZXIsIHRoaXMuX2ludGVycG9sYXRpb25Db25maWcpO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9NZXNzYWdlW3BoTmFtZV0gPSB2aXNpdG9yLnRvSTE4bk1lc3NhZ2UoW2ljdV0sIFwiXCIsIFwiXCIsIFwiXCIpO1xuICAgIHJldHVybiBuZXcgaTE4bi5JY3VQbGFjZWhvbGRlcihpMThuSWN1LCBwaE5hbWUsIGljdS5zb3VyY2VTcGFuKTtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShpY3VDYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWFjaGFibGUgY29kZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0VGV4dFdpdGhJbnRlcnBvbGF0aW9uKHRleHQ6IHN0cmluZywgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKTogaTE4bi5Ob2RlIHtcbiAgICBjb25zdCBzcGxpdEludGVycG9sYXRpb24gPSB0aGlzLl9leHByZXNzaW9uUGFyc2VyLnNwbGl0SW50ZXJwb2xhdGlvbihcbiAgICAgIHRleHQsXG4gICAgICBzb3VyY2VTcGFuLnN0YXJ0LnRvU3RyaW5nKCksXG4gICAgICB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnXG4gICAgKTtcblxuICAgIGlmICghc3BsaXRJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAvLyBObyBleHByZXNzaW9uLCByZXR1cm4gYSBzaW5nbGUgdGV4dFxuICAgICAgcmV0dXJuIG5ldyBpMThuLlRleHQodGV4dCwgc291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgZ3JvdXAgb2YgdGV4dCArIGV4cHJlc3Npb25zXG4gICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IGkxOG4uQ29udGFpbmVyKG5vZGVzLCBzb3VyY2VTcGFuKTtcbiAgICBjb25zdCB7c3RhcnQ6IHNEZWxpbWl0ZXIsIGVuZDogZURlbGltaXRlcn0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uQ29uZmlnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdEludGVycG9sYXRpb24uc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzcGxpdEludGVycG9sYXRpb24uZXhwcmVzc2lvbnNbaV07XG4gICAgICBjb25zdCBiYXNlTmFtZSA9IGV4dHJhY3RQbGFjZWhvbGRlck5hbWUoZXhwcmVzc2lvbikgfHwgXCJJTlRFUlBPTEFUSU9OXCI7XG4gICAgICBjb25zdCBwaE5hbWUgPSB0aGlzLl9wbGFjZWhvbGRlclJlZ2lzdHJ5LmdldFBsYWNlaG9sZGVyTmFtZShiYXNlTmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tpXS5sZW5ndGgpIHtcbiAgICAgICAgLy8gTm8gbmVlZCB0byBhZGQgZW1wdHkgc3RyaW5nc1xuICAgICAgICBub2Rlcy5wdXNoKG5ldyBpMThuLlRleHQoc3BsaXRJbnRlcnBvbGF0aW9uLnN0cmluZ3NbaV0sIHNvdXJjZVNwYW4pKTtcbiAgICAgIH1cblxuICAgICAgbm9kZXMucHVzaChuZXcgaTE4bi5QbGFjZWhvbGRlcihleHByZXNzaW9uLCBwaE5hbWUsIHNvdXJjZVNwYW4pKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVG9Db250ZW50W3BoTmFtZV0gPSBzRGVsaW1pdGVyICsgZXhwcmVzc2lvbiArIGVEZWxpbWl0ZXI7XG4gICAgfVxuXG4gICAgLy8gVGhlIGxhc3QgaW5kZXggY29udGFpbnMgbm8gZXhwcmVzc2lvblxuICAgIGNvbnN0IGxhc3RTdHJpbmdJZHggPSBzcGxpdEludGVycG9sYXRpb24uc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGlmIChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tsYXN0U3RyaW5nSWR4XS5sZW5ndGgpIHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IGkxOG4uVGV4dChzcGxpdEludGVycG9sYXRpb24uc3RyaW5nc1tsYXN0U3RyaW5nSWR4XSwgc291cmNlU3BhbikpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG5cbmNvbnN0IF9DVVNUT01fUEhfRVhQID0gL1xcL1xcL1tcXHNcXFNdKmkxOG5bXFxzXFxTXSpcXChbXFxzXFxTXSpwaFtcXHNcXFNdKj1bXFxzXFxTXSooXCJ8JykoW1xcc1xcU10qPylcXDFbXFxzXFxTXSpcXCkvZztcblxuZnVuY3Rpb24gZXh0cmFjdFBsYWNlaG9sZGVyTmFtZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlucHV0LnNwbGl0KF9DVVNUT01fUEhfRVhQKVsyXTtcbn1cbiIsImltcG9ydCAqIGFzIGh0bWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSBcIi4uL2FzdC9pMThuX2FzdFwiO1xuaW1wb3J0IHtJMThuRXJyb3J9IGZyb20gXCIuLi9hc3QvcGFyc2VfdXRpbFwiO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tIFwiLi4vYXN0L2ludGVycG9sYXRpb25fY29uZmlnXCI7XG5pbXBvcnQge2NyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeX0gZnJvbSBcIi4vaTE4blwiO1xuaW1wb3J0IHtQYXJzZXIsIFBhcnNlVHJlZVJlc3VsdH0gZnJvbSBcIi4uL2FzdC9wYXJzZXJcIjtcbmltcG9ydCB7Z2V0SHRtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QvaHRtbF90YWdzXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWQsIFBsYWNlaG9sZGVyTWFwcGVyfSBmcm9tIFwiLi4vc2VyaWFsaXplcnMvc2VyaWFsaXplclwiO1xuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuY29uc3QgX0kxOE5fQVRUUiA9IFwiaTE4blwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VNZXRhZGF0YSB7XG4gIG1lYW5pbmc/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHKSB7XG4gICAgc3VwZXIoZ2V0SHRtbFRhZ0RlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwYXJzZUV4cGFuc2lvbkZvcm1zID0gZmFsc2UpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHJldHVybiBzdXBlci5wYXJzZShzb3VyY2UsIHVybCwgcGFyc2VFeHBhbnNpb25Gb3JtcywgdGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHRyYW5zbGF0YWJsZSBtZXNzYWdlcyBmcm9tIGFuIGh0bWwgQVNUXG4gICAqL1xuICBleHRyYWN0TWVzc2FnZXMobm9kZXM6IGh0bWwuTm9kZVtdKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBWaXNpdG9yKFtcIndyYXBwZXJcIl0pO1xuICAgIC8vIENvbnN0cnVjdCBhIHNpbmdsZSBmYWtlIHJvb3QgZWxlbWVudFxuICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgaHRtbC5FbGVtZW50KFwid3JhcHBlclwiLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdmlzaXRvci5leHRyYWN0KHdyYXBwZXIsIHRoaXMuaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cblxuICBtZXJnZVRyYW5zbGF0aW9ucyhcbiAgICBub2RlczogaHRtbC5Ob2RlW10sXG4gICAgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZSxcbiAgICBwYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgIG1ldGFkYXRhPzogTWVzc2FnZU1ldGFkYXRhLFxuICAgIGltcGxpY2l0VGFnczogc3RyaW5nW10gPSBbXVxuICApOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIGNvbnN0IHZpc2l0b3IgPSBuZXcgVmlzaXRvcihpbXBsaWNpdFRhZ3MpO1xuICAgIC8vIENvbnN0cnVjdCBhIHNpbmdsZSBmYWtlIHJvb3QgZWxlbWVudFxuICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgaHRtbC5FbGVtZW50KFwid3JhcHBlclwiLCBbXSwgbm9kZXMsIHVuZGVmaW5lZCEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gdmlzaXRvci5tZXJnZSh3cmFwcGVyLCB0cmFuc2xhdGlvbnMsIHRoaXMuaW50ZXJwb2xhdGlvbkNvbmZpZywgcGFyYW1zLCBtZXRhZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dHJhY3Rpb25SZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBwdWJsaWMgZXJyb3JzOiBJMThuRXJyb3JbXSkge31cbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgdHJhbnNsYXRlZCBtZXNzYWdlc1xuICovXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25CdW5kbGUge1xuICBwcml2YXRlIGkxOG5Ub0h0bWw6IEkxOG5Ub0h0bWxWaXNpdG9yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bk5vZGVzQnlNc2dJZDoge1ttc2dJZDogc3RyaW5nXTogaTE4bi5Ob2RlW119ID0ge30sXG4gICAgcHVibGljIGRpZ2VzdDogKG06IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcsXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICAgIHB1YmxpYyBtYXBwZXJGYWN0b3J5PzogKG06IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIsXG4gICAgY29uc29sZT86IENvbnNvbGVcbiAgKSB7XG4gICAgdGhpcy5pMThuVG9IdG1sID0gbmV3IEkxOG5Ub0h0bWxWaXNpdG9yKFxuICAgICAgaTE4bk5vZGVzQnlNc2dJZCxcbiAgICAgIGRpZ2VzdCxcbiAgICAgIG1hcHBlckZhY3RvcnkhLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgICAgY29uc29sZVxuICAgICk7XG4gIH1cblxuICAvLyBDcmVhdGVzIGEgYFRyYW5zbGF0aW9uQnVuZGxlYCBieSBwYXJzaW5nIHRoZSBnaXZlbiBgY29udGVudGAgd2l0aCB0aGUgYHNlcmlhbGl6ZXJgLlxuICBzdGF0aWMgbG9hZChcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGlnZXN0OiAobWVzc2FnZTogaTE4bi5NZXNzYWdlKSA9PiBzdHJpbmcsXG4gICAgY3JlYXRlTmFtZU1hcHBlcjogKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSkgPT4gUGxhY2Vob2xkZXJNYXBwZXIgfCBudWxsLFxuICAgIGxvYWRGY3Q6IChjb250ZW50OiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiBJMThuTWVzc2FnZXNCeUlkLFxuICAgIG1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJR1xuICApOiBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gICAgY29uc3QgaTE4bk5vZGVzQnlNc2dJZCA9IGxvYWRGY3QoY29udGVudCwgdXJsKTtcbiAgICBjb25zdCBkaWdlc3RGbiA9IChtOiBpMThuLk1lc3NhZ2UpID0+IGRpZ2VzdChtKTtcbiAgICBjb25zdCBtYXBwZXJGYWN0b3J5ID0gKG06IGkxOG4uTWVzc2FnZSkgPT4gY3JlYXRlTmFtZU1hcHBlcihtKSE7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbkJ1bmRsZShcbiAgICAgIGkxOG5Ob2Rlc0J5TXNnSWQsXG4gICAgICBkaWdlc3RGbixcbiAgICAgIGludGVycG9sYXRpb25Db25maWcsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICAgIG1hcHBlckZhY3RvcnksXG4gICAgICBjb25zb2xlXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGFzIEhUTUwgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gc291cmNlIG1lc3NhZ2UuXG4gIGdldChzcmNNc2c6IGkxOG4uTWVzc2FnZSwgcGFyYW1zKTogaHRtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGh0bWxSZXMgPSB0aGlzLmkxOG5Ub0h0bWwuY29udmVydChzcmNNc2csIHBhcmFtcyk7XG4gICAgaWYgKGh0bWxSZXMuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGh0bWxSZXMuZXJyb3JzLmpvaW4oXCJcXG5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sUmVzLm5vZGVzO1xuICB9XG5cbiAgaGFzKHNyY01zZzogaTE4bi5NZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlnZXN0KHNyY01zZykgaW4gdGhpcy5pMThuTm9kZXNCeU1zZ0lkO1xuICB9XG59XG5cbmNsYXNzIEkxOG5Ub0h0bWxWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBfc3JjTXNnOiBpMThuLk1lc3NhZ2U7XG4gIHByaXZhdGUgX2NvbnRleHRTdGFjazoge21zZzogaTE4bi5NZXNzYWdlOyBtYXBwZXI6IChuYW1lOiBzdHJpbmcpID0+IHN0cmluZ31bXSA9IFtdO1xuICBwcml2YXRlIF9lcnJvcnM6IEkxOG5FcnJvcltdID0gW107XG4gIHByaXZhdGUgX21hcHBlcjogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBwcml2YXRlIF9wYXJhbXM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICBwcml2YXRlIF9wYXJhbUtleXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2kxOG5Ob2Rlc0J5TXNnSWQ6IHtbbXNnSWQ6IHN0cmluZ106IGkxOG4uTm9kZVtdfSA9IHt9LFxuICAgIHByaXZhdGUgX2RpZ2VzdDogKG06IGkxOG4uTWVzc2FnZSkgPT4gc3RyaW5nLFxuICAgIHByaXZhdGUgX21hcHBlckZhY3Rvcnk6IChtOiBpMThuLk1lc3NhZ2UpID0+IFBsYWNlaG9sZGVyTWFwcGVyLFxuICAgIHByaXZhdGUgX21pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5OiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSxcbiAgICBwcml2YXRlIF9pbnRlcnBvbGF0aW9uQ29uZmlnPzogSW50ZXJwb2xhdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIF9jb25zb2xlPzogQ29uc29sZVxuICApIHt9XG5cbiAgY29udmVydChzcmNNc2c6IGkxOG4uTWVzc2FnZSwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHtub2RlczogaHRtbC5Ob2RlW107IGVycm9yczogSTE4bkVycm9yW119IHtcbiAgICB0aGlzLl9jb250ZXh0U3RhY2subGVuZ3RoID0gMDtcbiAgICB0aGlzLl9lcnJvcnMubGVuZ3RoID0gMDtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcblxuICAgIC8vIGkxOG4gdG8gdGV4dFxuICAgIGNvbnN0IHRleHQgPSB0aGlzLmNvbnZlcnRUb1RleHQoc3JjTXNnKTtcblxuICAgIC8vIHRleHQgdG8gaHRtbFxuICAgIGNvbnN0IHVybCA9IHNyY01zZy5ub2Rlc1swXS5zb3VyY2VTcGFuLnN0YXJ0LmZpbGUudXJsO1xuICAgIGNvbnN0IGh0bWxQYXJzZXIgPSBuZXcgSHRtbFBhcnNlcigpLnBhcnNlKHRleHQsIHVybCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZXM6IGh0bWxQYXJzZXIucm9vdE5vZGVzLFxuICAgICAgZXJyb3JzOiBbLi4udGhpcy5fZXJyb3JzLCAuLi5odG1sUGFyc2VyLmVycm9yc11cbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRleHQudmFsdWU7XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuLm1hcChuID0+IG4udmlzaXQodGhpcykpLmpvaW4oXCJcIik7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb25zdCBjYXNlcyA9IE9iamVjdC5rZXlzKGljdS5jYXNlcykubWFwKGsgPT4gYCR7a30geyR7aWN1LmNhc2VzW2tdLnZpc2l0KHRoaXMpfX1gKTtcblxuICAgIC8vIFRPRE8odmljYik6IE9uY2UgYWxsIGZvcm1hdCBzd2l0Y2ggdG8gdXNpbmcgZXhwcmVzc2lvbiBwbGFjZWhvbGRlcnNcbiAgICAvLyB3ZSBzaG91bGQgdGhyb3cgd2hlbiB0aGUgcGxhY2Vob2xkZXIgaXMgbm90IGluIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAgIGNvbnN0IGV4cCA9IHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnMuaGFzT3duUHJvcGVydHkoaWN1LmV4cHJlc3Npb24pXG4gICAgICA/IHRoaXMuX3NyY01zZy5wbGFjZWhvbGRlcnNbaWN1LmV4cHJlc3Npb25dXG4gICAgICA6IGljdS5leHByZXNzaW9uO1xuXG4gICAgcmV0dXJuIGB7JHtleHB9LCAke2ljdS50eXBlfSwgJHtjYXNlcy5qb2luKFwiIFwiKX19YDtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBoTmFtZSA9IHRoaXMuX21hcHBlcihwaC5uYW1lKTtcbiAgICBpZiAodGhpcy5fc3JjTXNnLnBsYWNlaG9sZGVycy5oYXNPd25Qcm9wZXJ0eShwaE5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9WYWx1ZSh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJzW3BoTmFtZV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2UuaGFzT3duUHJvcGVydHkocGhOYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvVGV4dCh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2VbcGhOYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkRXJyb3IocGgsIGBVbmtub3duIHBsYWNlaG9sZGVyIFwiJHtwaC5uYW1lfVwiYCk7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvLyBMb2FkZWQgbWVzc2FnZSBjb250YWlucyBvbmx5IHBsYWNlaG9sZGVycyAodnMgdGFnIGFuZCBpY3UgcGxhY2Vob2xkZXJzKS5cbiAgLy8gSG93ZXZlciB3aGVuIGEgdHJhbnNsYXRpb24gY2FuIG5vdCBiZSBmb3VuZCwgd2UgbmVlZCB0byBzZXJpYWxpemUgdGhlIHNvdXJjZSBtZXNzYWdlXG4gIC8vIHdoaWNoIGNhbiBjb250YWluIHRhZyBwbGFjZWhvbGRlcnNcbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFnID0gYCR7cGgudGFnfWA7XG4gICAgY29uc3QgYXR0cnMgPSBPYmplY3Qua2V5cyhwaC5hdHRycylcbiAgICAgIC5tYXAobmFtZSA9PiBgJHtuYW1lfT1cIiR7cGguYXR0cnNbbmFtZV19XCJgKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIHJldHVybiBgPCR7dGFnfSAke2F0dHJzfS8+YDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwaC5jaGlsZHJlbi5tYXAoKGM6IGkxOG4uTm9kZSkgPT4gYy52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgICByZXR1cm4gYDwke3RhZ30gJHthdHRyc30+JHtjaGlsZHJlbn08LyR7dGFnfT5gO1xuICB9XG5cbiAgLy8gTG9hZGVkIG1lc3NhZ2UgY29udGFpbnMgb25seSBwbGFjZWhvbGRlcnMgKHZzIHRhZyBhbmQgaWN1IHBsYWNlaG9sZGVycykuXG4gIC8vIEhvd2V2ZXIgd2hlbiBhIHRyYW5zbGF0aW9uIGNhbiBub3QgYmUgZm91bmQsIHdlIG5lZWQgdG8gc2VyaWFsaXplIHRoZSBzb3VyY2UgbWVzc2FnZVxuICAvLyB3aGljaCBjYW4gY29udGFpbiB0YWcgcGxhY2Vob2xkZXJzXG4gIHZpc2l0SWN1UGxhY2Vob2xkZXIocGg6IGkxOG4uSWN1UGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIEFuIElDVSBwbGFjZWhvbGRlciByZWZlcmVuY2VzIHRoZSBzb3VyY2UgbWVzc2FnZSB0byBiZSBzZXJpYWxpemVkXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRvVGV4dCh0aGlzLl9zcmNNc2cucGxhY2Vob2xkZXJUb01lc3NhZ2VbcGgubmFtZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYSBzb3VyY2UgbWVzc2FnZSB0byBhIHRyYW5zbGF0ZWQgdGV4dCBzdHJpbmc6XG4gICAqIC0gdGV4dCBub2RlcyBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciB0cmFuc2xhdGlvbixcbiAgICogLSBwbGFjZWhvbGRlcnMgYXJlIHJlcGxhY2VkIHdpdGggdGhlaXIgY29udGVudCxcbiAgICogLSBJQ1Ugbm9kZXMgYXJlIGNvbnZlcnRlZCB0byBJQ1UgZXhwcmVzc2lvbnMuXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnRUb1RleHQoc3JjTXNnOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGlkID0gdGhpcy5fZGlnZXN0KHNyY01zZyk7XG5cbiAgICBjb25zdCBtYXBwZXIgPSB0aGlzLl9tYXBwZXJGYWN0b3J5ID8gdGhpcy5fbWFwcGVyRmFjdG9yeShzcmNNc2cpIDogbnVsbDtcbiAgICBsZXQgbm9kZXM6IGkxOG4uTm9kZVtdO1xuXG4gICAgdGhpcy5fY29udGV4dFN0YWNrLnB1c2goe21zZzogdGhpcy5fc3JjTXNnLCBtYXBwZXI6IHRoaXMuX21hcHBlcn0pO1xuICAgIHRoaXMuX3NyY01zZyA9IHNyY01zZztcblxuICAgIGlmICh0aGlzLl9pMThuTm9kZXNCeU1zZ0lkLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gV2hlbiB0aGVyZSBpcyBhIHRyYW5zbGF0aW9uIHVzZSBpdHMgbm9kZXMgYXMgdGhlIHNvdXJjZVxuICAgICAgLy8gQW5kIGNyZWF0ZSBhIG1hcHBlciB0byBjb252ZXJ0IHNlcmlhbGl6ZWQgcGxhY2Vob2xkZXIgbmFtZXMgdG8gaW50ZXJuYWwgbmFtZXNcbiAgICAgIG5vZGVzID0gdGhpcy5faTE4bk5vZGVzQnlNc2dJZFtpZF07XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiAobWFwcGVyID8gbWFwcGVyLnRvSW50ZXJuYWxOYW1lKG5hbWUpISA6IG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXaGVuIG5vIHRyYW5zbGF0aW9uIGhhcyBiZWVuIGZvdW5kXG4gICAgICAvLyAtIHJlcG9ydCBhbiBlcnJvciAvIGEgd2FybmluZyAvIG5vdGhpbmcsXG4gICAgICAvLyAtIHVzZSB0aGUgbm9kZXMgZnJvbSB0aGUgb3JpZ2luYWwgbWVzc2FnZVxuICAgICAgLy8gLSBwbGFjZWhvbGRlcnMgYXJlIGFscmVhZHkgaW50ZXJuYWwgYW5kIG5lZWQgbm8gbWFwcGVyXG4gICAgICBpZiAodGhpcy5fbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPT09IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LkVycm9yKSB7XG4gICAgICAgIHRoaXMuX2FkZEVycm9yKHNyY01zZy5ub2Rlc1swXSwgYE1pc3NpbmcgdHJhbnNsYXRpb24gZm9yIG1lc3NhZ2UgXCIke2lkfVwiYCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbnNvbGUgJiYgdGhpcy5fbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kgPT09IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmcpIHtcbiAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBtZXNzYWdlIFwiJHtpZH1cImApO1xuICAgICAgfVxuICAgICAgbm9kZXMgPSBzcmNNc2cubm9kZXM7XG4gICAgICB0aGlzLl9tYXBwZXIgPSAobmFtZTogc3RyaW5nKSA9PiBuYW1lO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gbm9kZXMubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSkuam9pbihcIlwiKTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fY29udGV4dFN0YWNrLnBvcCgpITtcbiAgICB0aGlzLl9zcmNNc2cgPSBjb250ZXh0Lm1zZztcbiAgICB0aGlzLl9tYXBwZXIgPSBjb250ZXh0Lm1hcHBlcjtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRvVmFsdWUocGxhY2Vob2xkZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW0gPSBwbGFjZWhvbGRlci5yZXBsYWNlKHRoaXMuX2ludGVycG9sYXRpb25Db25maWcuc3RhcnQsIFwiXCIpLnJlcGxhY2UodGhpcy5faW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQsIFwiXCIpO1xuICAgIHJldHVybiB0aGlzLl9wYXJhbUtleXMuaW5kZXhPZihwYXJhbSkgIT09IC0xID8gdGhpcy5fcGFyYW1zW3BhcmFtXSA6IHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXJyb3IoZWw6IGkxOG4uTm9kZSwgbXNnOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKGVsLnNvdXJjZVNwYW4sIG1zZykpO1xuICB9XG59XG5cbmVudW0gVmlzaXRvck1vZGUge1xuICBFeHRyYWN0LFxuICBNZXJnZVxufVxuXG4vKipcbiAqIFRoaXMgVmlzaXRvciBpcyB1c2VkOlxuICogMS4gdG8gZXh0cmFjdCBhbGwgdGhlIHRyYW5zbGF0YWJsZSBzdHJpbmdzIGZyb20gYW4gaHRtbCBBU1QgKHNlZSBgZXh0cmFjdCgpYCksXG4gKiAyLiB0byByZXBsYWNlIHRoZSB0cmFuc2xhdGFibGUgc3RyaW5ncyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNsYXRpb25zIChzZWUgYG1lcmdlKClgKVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBkZXB0aDogbnVtYmVyO1xuXG4gIC8vIDxlbCBpMThuPi4uLjwvZWw+XG4gIHByaXZhdGUgaW5JMThuTm9kZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbkltcGxpY2l0Tm9kZTogYm9vbGVhbjtcblxuICAvLyA8IS0taTE4bi0tPi4uLjwhLS0vaTE4bi0tPlxuICBwcml2YXRlIGluSTE4bkJsb2NrOiBib29sZWFuO1xuICBwcml2YXRlIGJsb2NrQ2hpbGRyZW46IGh0bWwuTm9kZVtdID0gW107XG4gIHByaXZhdGUgYmxvY2tTdGFydERlcHRoOiBudW1iZXI7XG5cbiAgLy8gezxpY3UgbWVzc2FnZT59XG4gIHByaXZhdGUgaW5JY3U6IGJvb2xlYW47XG5cbiAgLy8gc2V0IHRvIHZvaWQgMCB3aGVuIG5vdCBpbiBhIHNlY3Rpb25cbiAgcHJpdmF0ZSBtc2dDb3VudEF0U2VjdGlvblN0YXJ0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZXJyb3JzOiBJMThuRXJyb3JbXTtcbiAgcHJpdmF0ZSBtb2RlOiBWaXNpdG9yTW9kZTtcblxuICAvLyBWaXNpdG9yTW9kZS5FeHRyYWN0IG9ubHlcbiAgcHJpdmF0ZSBtZXNzYWdlczogaTE4bi5NZXNzYWdlW107XG5cbiAgLy8gVmlzaXRvck1vZGUuTWVyZ2Ugb25seVxuICBwcml2YXRlIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25CdW5kbGU7XG4gIHByaXZhdGUgY3JlYXRlSTE4bk1lc3NhZ2U6IChtc2c6IGh0bWwuTm9kZVtdLCBtZWFuaW5nOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IGkxOG4uTWVzc2FnZTtcbiAgcHJpdmF0ZSBtZXRhZGF0YTogTWVzc2FnZU1ldGFkYXRhO1xuICBwcml2YXRlIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW1wbGljaXRUYWdzOiBzdHJpbmdbXSA9IFtdKSB7fVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgdHJlZVxuICAgKi9cbiAgZXh0cmFjdChub2RlOiBodG1sLk5vZGUsIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICB0aGlzLmluaXQoVmlzaXRvck1vZGUuRXh0cmFjdCwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG5cbiAgICBub2RlLnZpc2l0KHRoaXMsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2spIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKG5vZGUsIFwiVW5jbG9zZWQgYmxvY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFeHRyYWN0aW9uUmVzdWx0KHRoaXMubWVzc2FnZXMsIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdHJlZSB3aGVyZSBhbGwgdHJhbnNsYXRhYmxlIG5vZGVzIGFyZSB0cmFuc2xhdGVkXG4gICAqL1xuICBtZXJnZShcbiAgICBub2RlOiBodG1sLk5vZGUsXG4gICAgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbkJ1bmRsZSxcbiAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgbWV0YWRhdGE6IE1lc3NhZ2VNZXRhZGF0YSA9IHt9XG4gICk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgdGhpcy5pbml0KFZpc2l0b3JNb2RlLk1lcmdlLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCBwYXJhbXMpO1xuICAgIHRoaXMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWROb2RlID0gbm9kZS52aXNpdCh0aGlzLCBudWxsKTtcblxuICAgIGlmICh0aGlzLmluSTE4bkJsb2NrKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuY2xvc2VkIGJsb2NrXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUGFyc2VUcmVlUmVzdWx0KHRyYW5zbGF0ZWROb2RlLmNoaWxkcmVuLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogaHRtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIC8vIFBhcnNlIGNhc2VzIGZvciB0cmFuc2xhdGFibGUgaHRtbCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGh0bWwudmlzaXRBbGwodGhpcywgaWN1Q2FzZS5leHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICByZXR1cm4gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZShcbiAgICAgICAgaWN1Q2FzZS52YWx1ZSxcbiAgICAgICAgZXhwcmVzc2lvbixcbiAgICAgICAgaWN1Q2FzZS5zb3VyY2VTcGFuLFxuICAgICAgICBpY3VDYXNlLnZhbHVlU291cmNlU3BhbixcbiAgICAgICAgaWN1Q2FzZS5leHBTb3VyY2VTcGFuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGh0bWwuRXhwYW5zaW9uIHtcbiAgICB0aGlzLm1heUJlQWRkQmxvY2tDaGlsZHJlbihpY3UpO1xuXG4gICAgY29uc3Qgd2FzSW5JY3UgPSB0aGlzLmluSWN1O1xuXG4gICAgaWYgKCF0aGlzLmluSWN1KSB7XG4gICAgICAvLyBuZXN0ZWQgSUNVIG1lc3NhZ2VzIHNob3VsZCBub3QgYmUgZXh0cmFjdGVkIGJ1dCB0b3AtbGV2ZWwgdHJhbnNsYXRlZCBhcyBhIHdob2xlXG4gICAgICBpZiAodGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgICB0aGlzLmFkZE1lc3NhZ2UoW2ljdV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5pbkljdSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY2FzZXMgPSBodG1sLnZpc2l0QWxsKHRoaXMsIGljdS5jYXNlcywgY29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09PSBWaXNpdG9yTW9kZS5NZXJnZSkge1xuICAgICAgaWN1ID0gbmV3IGh0bWwuRXhwYW5zaW9uKGljdS5zd2l0Y2hWYWx1ZSwgaWN1LnR5cGUsIGNhc2VzLCBpY3Uuc291cmNlU3BhbiwgaWN1LnN3aXRjaFZhbHVlU291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgdGhpcy5pbkljdSA9IHdhc0luSWN1O1xuXG4gICAgcmV0dXJuIGljdTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGh0bWwuVGV4dCwgY29udGV4dDogYW55KTogaHRtbC5UZXh0IHtcbiAgICBpZiAodGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbikge1xuICAgICAgdGhpcy5tYXlCZUFkZEJsb2NrQ2hpbGRyZW4odGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsOiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGh0bWwuRWxlbWVudCB8IG51bGwge1xuICAgIHRoaXMubWF5QmVBZGRCbG9ja0NoaWxkcmVuKGVsKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgY29uc3Qgd2FzSW5JMThuTm9kZSA9IHRoaXMuaW5JMThuTm9kZTtcbiAgICBjb25zdCB3YXNJbkltcGxpY2l0Tm9kZSA9IHRoaXMuaW5JbXBsaWNpdE5vZGU7XG4gICAgbGV0IGNoaWxkTm9kZXM6IGh0bWwuTm9kZVtdID0gW107XG4gICAgbGV0IHRyYW5zbGF0ZWRDaGlsZE5vZGVzOiBodG1sLk5vZGVbXSA9IHVuZGVmaW5lZCE7XG5cbiAgICAvLyBFeHRyYWN0OlxuICAgIC8vIC0gdG9wIGxldmVsIG5vZGVzIHdpdGggdGhlIChpbXBsaWNpdCkgXCJpMThuXCIgYXR0cmlidXRlIGlmIG5vdCBhbHJlYWR5IGluIGEgc2VjdGlvblxuICAgIC8vIC0gSUNVIG1lc3NhZ2VzXG4gICAgY29uc3QgaTE4bkF0dHIgPSBnZXRJMThuQXR0cihlbCk7XG4gICAgY29uc3QgaXNJbXBsaWNpdCA9IHRoaXMuX2ltcGxpY2l0VGFncy5zb21lKHRhZyA9PiBlbC5uYW1lID09PSB0YWcpICYmICF0aGlzLmluSWN1ICYmICF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uO1xuICAgIGNvbnN0IGlzVG9wTGV2ZWxJbXBsaWNpdCA9ICF3YXNJbkltcGxpY2l0Tm9kZSAmJiBpc0ltcGxpY2l0O1xuICAgIHRoaXMuaW5JbXBsaWNpdE5vZGUgPSB3YXNJbkltcGxpY2l0Tm9kZSB8fCBpc0ltcGxpY2l0O1xuICAgIGlmICghdGhpcy5pc0luVHJhbnNsYXRhYmxlU2VjdGlvbiAmJiAhdGhpcy5pbkljdSkge1xuICAgICAgaWYgKGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdCkge1xuICAgICAgICB0aGlzLmluSTE4bk5vZGUgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5hZGRNZXNzYWdlKGVsLmNoaWxkcmVuLCB0aGlzLm1ldGFkYXRhKSE7XG4gICAgICAgIHRyYW5zbGF0ZWRDaGlsZE5vZGVzID0gdGhpcy50cmFuc2xhdGVNZXNzYWdlKGVsLCBtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuRXh0cmFjdCkge1xuICAgICAgICBjb25zdCBpc1RyYW5zbGF0YWJsZSA9IGkxOG5BdHRyIHx8IGlzVG9wTGV2ZWxJbXBsaWNpdDtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRhYmxlKSB7XG4gICAgICAgICAgdGhpcy5vcGVuVHJhbnNsYXRhYmxlU2VjdGlvbihlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbC5jaGlsZHJlbik7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0YWJsZSkge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlVHJhbnNsYXRhYmxlU2VjdGlvbihlbCwgZWwuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpMThuQXR0ciB8fCBpc1RvcExldmVsSW1wbGljaXQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoZWwsIFwiQ291bGQgbm90IG1hcmsgYW4gZWxlbWVudCBhcyB0cmFuc2xhdGFibGUgaW5zaWRlIGEgdHJhbnNsYXRhYmxlIHNlY3Rpb25cIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLkV4dHJhY3QpIHtcbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIGNoaWxkIG5vZGVzIGZvciBleHRyYWN0aW9uXG4gICAgICAgIGh0bWwudmlzaXRBbGwodGhpcywgZWwuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCB2aXNpdE5vZGVzID0gdHJhbnNsYXRlZENoaWxkTm9kZXMgfHwgZWwuY2hpbGRyZW47XG4gICAgICB2aXNpdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCk7XG4gICAgICAgIGlmICh2aXNpdGVkICYmICF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICAgICAgLy8gRG8gbm90IGFkZCB0aGUgY2hpbGRyZW4gZnJvbSB0cmFuc2xhdGFibGUgc2VjdGlvbnMgKD0gaTE4biBibG9ja3MgaGVyZSlcbiAgICAgICAgICAvLyBUaGV5IHdpbGwgYmUgYWRkZWQgbGF0ZXIgaW4gdGhpcyBsb29wIHdoZW4gdGhlIGJsb2NrIGNsb3NlcyAoaS5lLiBvbiBgPCEtLSAvaTE4biAtLT5gKVxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmNvbmNhdCh2aXNpdGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHRoaXMuaW5JMThuTm9kZSA9IHdhc0luSTE4bk5vZGU7XG4gICAgdGhpcy5pbkltcGxpY2l0Tm9kZSA9IHdhc0luSW1wbGljaXROb2RlO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVmlzaXRvck1vZGUuTWVyZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FbGVtZW50KGVsLm5hbWUsIFtdLCBjaGlsZE5vZGVzLCBlbC5zb3VyY2VTcGFuLCBlbC5zdGFydFNvdXJjZVNwYW4sIGVsLmVuZFNvdXJjZVNwYW4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogaHRtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY29kZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdChtb2RlOiBWaXNpdG9yTW9kZSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZywgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmluSTE4bkJsb2NrID0gZmFsc2U7XG4gICAgdGhpcy5pbkkxOG5Ob2RlID0gZmFsc2U7XG4gICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgdGhpcy5pbkljdSA9IGZhbHNlO1xuICAgIHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLmluSW1wbGljaXROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVJMThuTWVzc2FnZSA9IGNyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeShpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8vIGFkZCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlXG4gIHByaXZhdGUgYWRkTWVzc2FnZShhc3Q6IGh0bWwuTm9kZVtdLCB7bWVhbmluZyA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiwgaWQgPSBcIlwifSA9IHt9KTogaTE4bi5NZXNzYWdlIHwgbnVsbCB7XG4gICAgaWYgKFxuICAgICAgYXN0Lmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKGFzdC5sZW5ndGggPT09IDEgJiYgYXN0WzBdIGluc3RhbmNlb2YgaHRtbC5BdHRyaWJ1dGUgJiYgIShhc3RbMF0gYXMgaHRtbC5BdHRyaWJ1dGUpLnZhbHVlKVxuICAgICkge1xuICAgICAgLy8gRG8gbm90IGNyZWF0ZSBlbXB0eSBtZXNzYWdlc1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlSTE4bk1lc3NhZ2UoYXN0LCBtZWFuaW5nLCBkZXNjcmlwdGlvbiwgaWQpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIC8vIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgZ2l2ZW4gdGhlIGBUcmFuc2xhdGlvbkJ1bmRsZWBcbiAgLy8gVGhpcyBpcyB1c2VkIGZvciB0cmFuc2xhdGluZyBlbGVtZW50cyAvIGJsb2NrcyAtIHNlZSBgX3RyYW5zbGF0ZUF0dHJpYnV0ZXNgIGZvciBhdHRyaWJ1dGVzXG4gIC8vIG5vLW9wIHdoZW4gY2FsbGVkIGluIGV4dHJhY3Rpb24gbW9kZSAocmV0dXJucyBbXSlcbiAgcHJpdmF0ZSB0cmFuc2xhdGVNZXNzYWdlKGVsOiBodG1sLk5vZGUsIG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IGh0bWwuTm9kZVtdIHtcbiAgICBpZiAobWVzc2FnZSAmJiB0aGlzLm1vZGUgPT09IFZpc2l0b3JNb2RlLk1lcmdlKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMudHJhbnNsYXRpb25zLmdldChtZXNzYWdlLCB0aGlzLnBhcmFtcyk7XG4gICAgICBpZiAobm9kZXMpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihlbCwgYFRyYW5zbGF0aW9uIHVuYXZhaWxhYmxlIGZvciBtZXNzYWdlIGlkPVwiJHt0aGlzLnRyYW5zbGF0aW9ucy5kaWdlc3QobWVzc2FnZSl9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBub2RlIGFzIGEgY2hpbGQgb2YgdGhlIGJsb2NrIHdoZW46XG4gICAqIC0gd2UgYXJlIGluIGEgYmxvY2ssXG4gICAqIC0gd2UgYXJlIG5vdCBpbnNpZGUgYSBJQ1UgbWVzc2FnZSAodGhvc2UgYXJlIGhhbmRsZWQgc2VwYXJhdGVseSksXG4gICAqIC0gdGhlIG5vZGUgaXMgYSBcImRpcmVjdCBjaGlsZFwiIG9mIHRoZSBibG9ja1xuICAgKi9cbiAgcHJpdmF0ZSBtYXlCZUFkZEJsb2NrQ2hpbGRyZW4obm9kZTogaHRtbC5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5JMThuQmxvY2sgJiYgIXRoaXMuaW5JY3UgJiYgdGhpcy5kZXB0aCA9PT0gdGhpcy5ibG9ja1N0YXJ0RGVwdGgpIHtcbiAgICAgIHRoaXMuYmxvY2tDaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGUgc3RhcnQgb2YgYSBzZWN0aW9uLCBzZWUgYF9jbG9zZVRyYW5zbGF0YWJsZVNlY3Rpb25gXG4gICAqL1xuICBwcml2YXRlIG9wZW5UcmFuc2xhdGFibGVTZWN0aW9uKG5vZGU6IGh0bWwuTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuZXhwZWN0ZWQgc2VjdGlvbiBzdGFydFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tc2dDb3VudEF0U2VjdGlvblN0YXJ0ID0gdGhpcy5tZXNzYWdlcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgdHJhbnNsYXRhYmxlIHNlY3Rpb24gY291bGQgYmU6XG4gICAqIC0gdGhlIGNvbnRlbnQgb2YgdHJhbnNsYXRhYmxlIGVsZW1lbnQsXG4gICAqIC0gbm9kZXMgYmV0d2VlbiBgPCEtLSBpMThuIC0tPmAgYW5kIGA8IS0tIC9pMThuIC0tPmAgY29tbWVudHNcbiAgICovXG4gIHByaXZhdGUgZ2V0IGlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgIT09IHZvaWQgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXJtaW5hdGVzIGEgc2VjdGlvbi5cbiAgICpcbiAgICogSWYgYSBzZWN0aW9uIGhhcyBvbmx5IG9uZSBzaWduaWZpY2FudCBjaGlsZHJlbiAoY29tbWVudHMgbm90IHNpZ25pZmljYW50KSB0aGVuIHdlIHNob3VsZCBub3RcbiAgICoga2VlcCB0aGUgbWVzc2FnZSBmcm9tIHRoaXMgY2hpbGRyZW46XG4gICAqXG4gICAqIGA8cCBpMThuPVwibWVhbmluZ3xkZXNjcmlwdGlvblwiPntJQ1UgbWVzc2FnZX08L3A+YCB3b3VsZCBwcm9kdWNlIHR3byBtZXNzYWdlczpcbiAgICogLSBvbmUgZm9yIHRoZSA8cD4gY29udGVudCB3aXRoIG1lYW5pbmcgYW5kIGRlc2NyaXB0aW9uLFxuICAgKiAtIGFub3RoZXIgb25lIGZvciB0aGUgSUNVIG1lc3NhZ2UuXG4gICAqXG4gICAqIEluIHRoaXMgY2FzZSB0aGUgbGFzdCBtZXNzYWdlIGlzIGRpc2NhcmRlZCBhcyBpdCBjb250YWlucyBsZXNzIGluZm9ybWF0aW9uICh0aGUgQVNUIGlzXG4gICAqIG90aGVyd2lzZSBpZGVudGljYWwpLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgd2Ugc2hvdWxkIHN0aWxsIGtlZXAgbWVzc2FnZXMgZXh0cmFjdGVkIGZyb20gYXR0cmlidXRlcyBpbnNpZGUgdGhlIHNlY3Rpb24gKGllIGluIHRoZVxuICAgKiBJQ1UgbWVzc2FnZSBoZXJlKVxuICAgKi9cbiAgcHJpdmF0ZSBfY2xvc2VUcmFuc2xhdGFibGVTZWN0aW9uKG5vZGU6IGh0bWwuTm9kZSwgZGlyZWN0Q2hpbGRyZW46IGh0bWwuTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSW5UcmFuc2xhdGFibGVTZWN0aW9uKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihub2RlLCBcIlVuZXhwZWN0ZWQgc2VjdGlvbiBlbmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMubXNnQ291bnRBdFNlY3Rpb25TdGFydDtcbiAgICBjb25zdCBzaWduaWZpY2FudENoaWxkcmVuOiBudW1iZXIgPSBkaXJlY3RDaGlsZHJlbi5yZWR1Y2UoXG4gICAgICAoY291bnQ6IG51bWJlciwgbjogaHRtbC5Ob2RlKTogbnVtYmVyID0+IGNvdW50ICsgKG4gaW5zdGFuY2VvZiBodG1sLkNvbW1lbnQgPyAwIDogMSksXG4gICAgICAwXG4gICAgKTtcblxuICAgIGlmIChzaWduaWZpY2FudENoaWxkcmVuID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxOyBpID49IHN0YXJ0SW5kZXghOyBpLS0pIHtcbiAgICAgICAgY29uc3QgYXN0ID0gdGhpcy5tZXNzYWdlc1tpXS5ub2RlcztcbiAgICAgICAgaWYgKCEoYXN0Lmxlbmd0aCA9PT0gMSAmJiBhc3RbMF0gaW5zdGFuY2VvZiBpMThuLlRleHQpKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1zZ0NvdW50QXRTZWN0aW9uU3RhcnQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihub2RlOiBodG1sLk5vZGUsIG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiEsIG1zZykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEkxOG5BdHRyKHA6IGh0bWwuRWxlbWVudCk6IGh0bWwuQXR0cmlidXRlIHwgbnVsbCB7XG4gIHJldHVybiBwLmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IF9JMThOX0FUVFIpIHx8IG51bGw7XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBMT0NBTEVfSUQsXG4gIE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LFxuICBPcHRpb25hbCxcbiAgVFJBTlNMQVRJT05TLFxuICBUUkFOU0xBVElPTlNfRk9STUFUXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3hsaWZmRGlnZXN0LCB4bGlmZkxvYWRUb0kxOG59IGZyb20gXCIuL3NlcmlhbGl6ZXJzL3hsaWZmXCI7XG5pbXBvcnQge3hsaWZmMkRpZ2VzdCwgeGxpZmYyTG9hZFRvSTE4bn0gZnJvbSBcIi4vc2VyaWFsaXplcnMveGxpZmYyXCI7XG5pbXBvcnQge3h0YkRpZ2VzdCwgeHRiTG9hZFRvSTE4biwgeHRiTWFwcGVyfSBmcm9tIFwiLi9zZXJpYWxpemVycy94dGJcIjtcbmltcG9ydCB7SHRtbFBhcnNlciwgVHJhbnNsYXRpb25CdW5kbGV9IGZyb20gXCIuL3BhcnNlci9odG1sXCI7XG5pbXBvcnQge0kxOG5NZXNzYWdlc0J5SWQsIHNlcmlhbGl6ZU5vZGVzfSBmcm9tIFwiLi9zZXJpYWxpemVycy9zZXJpYWxpemVyXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL2FzdC9pMThuX2FzdFwiO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSTE4biB7XG4gIChkZWY6IHN0cmluZyB8IEkxOG5EZWYsIHBhcmFtcz86IHtba2V5OiBzdHJpbmddOiBhbnl9KTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5EZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbWVhbmluZz86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBNSVNTSU5HX1RSQU5TTEFUSU9OX1NUUkFURUdZID0gbmV3IEluamVjdGlvblRva2VuPE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5PihcbiAgXCJNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneVwiXG4pO1xuXG4vKipcbiAqIEEgc3BlY3VsYXRpdmUgcG9seWZpbGwgdG8gdXNlIGkxOG4gY29kZSB0cmFuc2xhdGlvbnNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OU19GT1JNQVQpIGZvcm1hdDogc3RyaW5nLFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TKSB0cmFuc2xhdGlvbnM6IHN0cmluZyxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KE1JU1NJTkdfVFJBTlNMQVRJT05fU1RSQVRFR1kpXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3k6IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5ID0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZ1xuICApIHtcbiAgICBsZXQgbG9hZEZjdDogKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpID0+IEkxOG5NZXNzYWdlc0J5SWQ7XG4gICAgbGV0IGRpZ2VzdDogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHN0cmluZztcbiAgICBsZXQgY3JlYXRlTWFwcGVyID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IG51bGw7XG4gICAgZm9ybWF0ID0gKGZvcm1hdCB8fCBcInhsZlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlIFwieHRiXCI6XG4gICAgICAgIGxvYWRGY3QgPSB4dGJMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4dGJEaWdlc3Q7XG4gICAgICAgIGNyZWF0ZU1hcHBlciA9IHh0Yk1hcHBlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwieGxpZmYyXCI6XG4gICAgICBjYXNlIFwieGxmMlwiOlxuICAgICAgICBsb2FkRmN0ID0geGxpZmYyTG9hZFRvSTE4bjtcbiAgICAgICAgZGlnZXN0ID0geGxpZmYyRGlnZXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ4bGlmZlwiOlxuICAgICAgY2FzZSBcInhsZlwiOlxuICAgICAgICBsb2FkRmN0ID0geGxpZmZMb2FkVG9JMThuO1xuICAgICAgICBkaWdlc3QgPSB4bGlmZkRpZ2VzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHJhbnNsYXRpb25zIGZvcm1hdCAke2Zvcm1hdH1gKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKCk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbnNCdW5kbGUgPSBUcmFuc2xhdGlvbkJ1bmRsZS5sb2FkKFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgXCJpMThuXCIsXG4gICAgICBkaWdlc3QsXG4gICAgICBjcmVhdGVNYXBwZXIsXG4gICAgICBsb2FkRmN0LFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3lcbiAgICApO1xuXG4gICAgLy8gdG9kbyB1c2UgaW50ZXJwb2xhdGlvbiBjb25maWdcbiAgICByZXR1cm4gKGRlZjogc3RyaW5nIHwgSTE4bkRlZiwgcGFyYW1zOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdHlwZW9mIGRlZiA9PT0gXCJzdHJpbmdcIiA/IGRlZiA6IGRlZi52YWx1ZTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0ge307XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBtZXRhZGF0YVtcImlkXCJdID0gZGVmLmlkO1xuICAgICAgICBtZXRhZGF0YVtcIm1lYW5pbmdcIl0gPSBkZWYubWVhbmluZztcbiAgICAgICAgbWV0YWRhdGFbXCJkZXNjcmlwdGlvblwiXSA9IGRlZi5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGh0bWxQYXJzZXJSZXN1bHQgPSBodG1sUGFyc2VyLnBhcnNlKGNvbnRlbnQsIFwiXCIsIHRydWUpO1xuXG4gICAgICBpZiAoaHRtbFBhcnNlclJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IGh0bWxQYXJzZXJSZXN1bHQuZXJyb3JzO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWROb2RlcyA9IGh0bWxQYXJzZXIubWVyZ2VUcmFuc2xhdGlvbnMoXG4gICAgICAgIGh0bWxQYXJzZXJSZXN1bHQucm9vdE5vZGVzLFxuICAgICAgICB0cmFuc2xhdGlvbnNCdW5kbGUsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIFtcIndyYXBwZXJcIl1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzZXJpYWxpemVOb2RlcyhtZXJnZWROb2Rlcy5yb290Tm9kZXMsIGxvY2FsZSwgcGFyYW1zKS5qb2luKFwiXCIpO1xuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJjaGFycy4kRU9GIiwiY2hhcnMuJExUIiwiY2hhcnMuJEJBTkciLCJjaGFycy4kTEJSQUNLRVQiLCJjaGFycy4kTUlOVVMiLCJjaGFycy4kU0xBU0giLCJjaGFycy4kUkJSQUNFIiwiY2hhcnMuJExGIiwiY2hhcnMuJENSIiwiY2hhcnMuJEFNUEVSU0FORCIsImNoYXJzLiRIQVNIIiwiY2hhcnMuJHgiLCJjaGFycy4kWCIsImNoYXJzLiRTRU1JQ09MT04iLCJjaGFycy4kUkJSQUNLRVQiLCJjaGFycy4kR1QiLCJjaGFycy4kQ09MT04iLCJjaGFycy5pc0FzY2lpTGV0dGVyIiwiY2hhcnMuJEVRIiwiY2hhcnMuJFNRIiwiY2hhcnMuJERRIiwiY2hhcnMuJExCUkFDRSIsImNoYXJzLiRDT01NQSIsImNoYXJzLmlzV2hpdGVzcGFjZSIsImNoYXJzLiRhIiwiY2hhcnMuJHoiLCJjaGFycy4kQSIsImNoYXJzLiRaIiwiY2hhcnMuJDAiLCJjaGFycy4kOSIsImNoYXJzLmlzQXNjaWlIZXhEaWdpdCIsImNoYXJzLmlzRGlnaXQiLCJsZXgudG9rZW5pemUiLCJsZXguVG9rZW5UeXBlIiwiaHRtbC5Db21tZW50IiwiaHRtbC5FeHBhbnNpb24iLCJsZXguVG9rZW4iLCJodG1sLkV4cGFuc2lvbkNhc2UiLCJodG1sLlRleHQiLCJodG1sLkVsZW1lbnQiLCJodG1sLkF0dHJpYnV0ZSIsImkxOG4uUmVjdXJzZVZpc2l0b3IiLCJJMThuU2VsZWN0UGlwZSIsIkkxOG5QbHVyYWxQaXBlIiwiTmdMb2NhbGVMb2NhbGl6YXRpb24iLCJzZXJpYWxpemVOb2RlcyIsIlNlcmlhbGl6ZXJWaXNpdG9yIiwibWwudmlzaXRBbGwiLCJpMThuLlRleHQiLCJpMThuLlBsYWNlaG9sZGVyIiwiaTE4bi5Db250YWluZXIiLCJpMThuLkljdSIsIl9QTEFDRUhPTERFUl9UQUciLCJfU09VUkNFX1RBRyIsIl9UQVJHRVRfVEFHIiwiX1VOSVRfVEFHIiwiWG1sVG9JMThuIiwiVG9rZW4iLCJUb2tlblR5cGUiLCJjaGFycy4kU1BBQ0UiLCJjaGFycy4kUEVSSU9EIiwiY2hhcnMuJExQQVJFTiIsImNoYXJzLiRSUEFSRU4iLCJjaGFycy4kUExVUyIsImNoYXJzLiRTVEFSIiwiY2hhcnMuJFBFUkNFTlQiLCJjaGFycy4kQ0FSRVQiLCJjaGFycy4kUVVFU1RJT04iLCJjaGFycy4kQkFSIiwiY2hhcnMuJE5CU1AiLCJjaGFycy4kQkFDS1NMQVNIIiwiY2hhcnMuJHUiLCJjaGFycy4kXyIsImNoYXJzLiQkIiwiY2hhcnMuJGUiLCJjaGFycy4kRSIsImNoYXJzLiRCVCIsImNoYXJzLiRuIiwiY2hhcnMuJGYiLCJjaGFycy4kRkYiLCJjaGFycy4kciIsImNoYXJzLiR0IiwiY2hhcnMuJFRBQiIsImNoYXJzLiR2IiwiY2hhcnMuJFZUQUIiLCJQYXJzZXIiLCJodG1sLnZpc2l0QWxsIiwiaTE4bi5NZXNzYWdlIiwiaTE4bi5UYWdQbGFjZWhvbGRlciIsImkxOG4uSWN1UGxhY2Vob2xkZXIiLCJWaXNpdG9yIiwiTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kiLCJJbmplY3Rpb25Ub2tlbiIsIkluamVjdGFibGUiLCJJbmplY3QiLCJUUkFOU0xBVElPTlNfRk9STUFUIiwiVFJBTlNMQVRJT05TIiwiTE9DQUxFX0lEIiwiT3B0aW9uYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7U0FDcEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0UsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0FBRUQsb0JBcUZ1QixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFV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RUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixHQUFHLEVBQUUsUUFBUTtRQUNiLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsRUFBRSxFQUFFLFFBQVE7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixFQUFFLEVBQUUsR0FBRztRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixLQUFLLEVBQUUsUUFBUTtRQUNmLEVBQUUsRUFBRSxRQUFRO1FBQ1osSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLFFBQVE7UUFDYixJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7UUFDYixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxRQUFRO1FBQ2YsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUUsUUFBUTtRQUNiLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FB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