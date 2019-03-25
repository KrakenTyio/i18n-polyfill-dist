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
import * as tslib_1 from "tslib";
import * as ml from "../ast/ast";
import * as i18n from "../ast/i18n_ast";
import * as xml from "./xml_helper";
import { Parser } from "../ast/parser";
import { getXmlTagDefinition } from "../ast/xml_tags";
import { I18nError } from "../ast/parse_util";
import { HtmlToXmlParser } from "./serializer";
import { decimalDigest } from "./digest";
var /** @type {?} */ _VERSION = "2.0";
var /** @type {?} */ _XMLNS = "urn:oasis:names:tc:xliff:document:2.0";
var /** @type {?} */ _DEFAULT_SOURCE_LANG = "en";
var /** @type {?} */ _PLACEHOLDER_TAG = "ph";
var /** @type {?} */ _PLACEHOLDER_SPANNING_TAG = "pc";
var /** @type {?} */ _XLIFF_TAG = "xliff";
var /** @type {?} */ _SOURCE_TAG = "source";
var /** @type {?} */ _TARGET_TAG = "target";
var /** @type {?} */ _UNIT_TAG = "unit";
var /** @type {?} */ _NOTES_TAG = "notes";
var /** @type {?} */ _NOTE_TAG = "note";
var /** @type {?} */ _SEGMENT_TAG = "segment";
var /** @type {?} */ _FILE_TAG = "file";
/**
 * @param {?} content
 * @return {?}
 */
export function xliff2LoadToI18n(content) {
    // xliff to xml nodes
    var /** @type {?} */ xliff2Parser = new Xliff2Parser();
    var _a = xliff2Parser.parse(content), msgIdToHtml = _a.msgIdToHtml, errors = _a.errors;
    // xml nodes to i18n nodes
    var /** @type {?} */ i18nNodesByMsgId = {};
    var /** @type {?} */ converter = new XmlToI18n();
    Object.keys(msgIdToHtml).forEach(function (msgId) {
        var _a = converter.convert(msgIdToHtml[msgId]), i18nNodes = _a.i18nNodes, e = _a.errors;
        errors.push.apply(errors, tslib_1.__spread(e));
        i18nNodesByMsgId[msgId] = i18nNodes;
    });
    if (errors.length) {
        throw new Error("xliff2 parse errors:\n" + errors.join("\n"));
    }
    return i18nNodesByMsgId;
}
/**
 * @param {?} content
 * @return {?}
 */
export function xliff2LoadToXml(content) {
    var /** @type {?} */ parser = new HtmlToXmlParser(_UNIT_TAG);
    var _a = parser.parse(content), xmlMessagesById = _a.xmlMessagesById, errors = _a.errors;
    if (errors.length) {
        throw new Error("xliff2 parse errors:\n" + errors.join("\n"));
    }
    return xmlMessagesById;
}
/**
 * @param {?} messages
 * @param {?} locale
 * @param {?=} existingNodes
 * @return {?}
 */
export function xliff2Write(messages, locale, existingNodes) {
    var /** @type {?} */ visitor = new WriteVisitor();
    var /** @type {?} */ units = existingNodes && existingNodes.length ? tslib_1.__spread([new xml.CR(4)], existingNodes) : [];
    messages.forEach(function (message) {
        var /** @type {?} */ unit = new xml.Tag(_UNIT_TAG, { id: message.id });
        var /** @type {?} */ notes = new xml.Tag(_NOTES_TAG);
        if (message.description || message.meaning || message.sources.length) {
            if (message.description) {
                notes.children.push(new xml.CR(8), new xml.Tag(_NOTE_TAG, { category: "description" }, [new xml.Text(message.description)]));
            }
            if (message.meaning) {
                notes.children.push(new xml.CR(8), new xml.Tag(_NOTE_TAG, { category: "meaning" }, [new xml.Text(message.meaning)]));
            }
            message.sources.forEach(function (source) {
                notes.children.push(new xml.CR(8), new xml.Tag(_NOTE_TAG, { category: "location" }, [
                    new xml.Text(source.filePath + ":" + source.startLine + (source.endLine !== source.startLine ? "," + source.endLine : ""))
                ]));
            });
            notes.children.push(new xml.CR(6));
            unit.children.push(new xml.CR(6), notes);
        }
        var /** @type {?} */ segment = new xml.Tag(_SEGMENT_TAG);
        segment.children.push(new xml.CR(8), new xml.Tag(_SOURCE_TAG, {}, visitor.serialize(message.nodes)), new xml.CR(6));
        unit.children.push(new xml.CR(6), segment, new xml.CR(4));
        units.push(new xml.CR(4), unit);
    });
    var /** @type {?} */ file = new xml.Tag(_FILE_TAG, { original: "ng.template", id: "ngi18n" }, tslib_1.__spread(units, [new xml.CR(2)]));
    var /** @type {?} */ xliff = new xml.Tag(_XLIFF_TAG, { version: _VERSION, xmlns: _XMLNS, srcLang: locale || _DEFAULT_SOURCE_LANG }, [
        new xml.CR(2),
        file,
        new xml.CR()
    ]);
    return xml.serialize([new xml.Declaration({ version: "1.0", encoding: "UTF-8" }), new xml.CR(), xliff, new xml.CR()]);
}
export var /** @type {?} */ xliff2Digest = decimalDigest;
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
        ml.visitAll(this, parser.rootNodes, null);
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
            case _UNIT_TAG:
                this._unitMlString = null;
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
                        ml.visitAll(this, element.children, null);
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
            case _XLIFF_TAG:
                var /** @type {?} */ versionAttr = element.attrs.find(function (attr) { return attr.name === "version"; });
                if (versionAttr) {
                    var /** @type {?} */ version = versionAttr.value;
                    if (version !== "2.0") {
                        this._addError(element, "The XLIFF file version " + version + " is not compatible with XLIFF 2.0 serializer");
                    }
                    else {
                        ml.visitAll(this, element.children, null);
                    }
                }
                break;
            default:
                ml.visitAll(this, element.children, null);
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
function Xliff2Parser_tsickle_Closure_declarations() {
    /** @type {?} */
    Xliff2Parser.prototype._unitMlString;
    /** @type {?} */
    Xliff2Parser.prototype._errors;
    /** @type {?} */
    Xliff2Parser.prototype._msgIdToHtml;
}
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
        var /** @type {?} */ i18nNodes = this._errors.length > 0 || xmlIcu.rootNodes.length === 0 ? [] : [].concat.apply([], tslib_1.__spread(ml.visitAll(this, xmlIcu.rootNodes)));
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
        return new i18n.Text(text.value, text.sourceSpan);
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
            case _PLACEHOLDER_TAG:
                var /** @type {?} */ nameAttr = el.attrs.find(function (attr) { return attr.name === "equiv"; });
                if (nameAttr) {
                    return [new i18n.Placeholder("", nameAttr.value, el.sourceSpan)];
                }
                this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"equiv\" attribute");
                break;
            case _PLACEHOLDER_SPANNING_TAG:
                var /** @type {?} */ startAttr = el.attrs.find(function (attr) { return attr.name === "equivStart"; });
                var /** @type {?} */ endAttr = el.attrs.find(function (attr) { return attr.name === "equivEnd"; });
                if (!startAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"equivStart\" attribute");
                }
                else if (!endAttr) {
                    this._addError(el, "<" + _PLACEHOLDER_TAG + "> misses the \"equivEnd\" attribute");
                }
                else {
                    var /** @type {?} */ startId = startAttr.value;
                    var /** @type {?} */ endId = endAttr.value;
                    var /** @type {?} */ nodes = [];
                    return nodes.concat.apply(nodes, tslib_1.__spread([new i18n.Placeholder("", startId, el.sourceSpan)], el.children.map(function (node) { return node.visit(_this, null); }), [new i18n.Placeholder("", endId, el.sourceSpan)]));
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
        ml.visitAll(this, icu.cases).forEach(function (c) {
            caseMap[c.value] = new i18n.Container(c.nodes, icu.sourceSpan);
        });
        return new i18n.Icu(icu.switchValue, icu.type, caseMap, icu.sourceSpan);
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
            nodes: [].concat.apply([], tslib_1.__spread(ml.visitAll(this, icuCase.expression)))
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
function XmlToI18n_tsickle_Closure_declarations() {
    /** @type {?} */
    XmlToI18n.prototype._errors;
}
var WriteVisitor = /** @class */ (function () {
    function WriteVisitor() {
    }
    /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitText = /**
     * @param {?} text
     * @param {?=} context
     * @return {?}
     */
    function (text, context) {
        return [new xml.Text(text.value)];
    };
    /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitContainer = /**
     * @param {?} container
     * @param {?=} context
     * @return {?}
     */
    function (container, context) {
        var _this = this;
        var /** @type {?} */ nodes = [];
        container.children.forEach(function (node) { return nodes.push.apply(nodes, tslib_1.__spread(node.visit(_this))); });
        return nodes;
    };
    /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitIcu = /**
     * @param {?} icu
     * @param {?=} context
     * @return {?}
     */
    function (icu, context) {
        var _this = this;
        var /** @type {?} */ nodes = [new xml.Text("{" + icu.expressionPlaceholder + ", " + icu.type + ", ")];
        Object.keys(icu.cases).forEach(function (c) {
            nodes.push.apply(nodes, tslib_1.__spread([new xml.Text(c + " {")], icu.cases[c].visit(_this), [new xml.Text("} ")]));
        });
        nodes.push(new xml.Text("}"));
        return nodes;
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitTagPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var _this = this;
        var /** @type {?} */ type = getTypeForTag(ph.tag);
        if (ph.isVoid) {
            var /** @type {?} */ tagPh = new xml.Tag(_PLACEHOLDER_TAG, {
                id: (this._nextPlaceholderId++).toString(),
                equiv: ph.startName,
                type: type,
                disp: "<" + ph.tag + "/>"
            });
            return [tagPh];
        }
        var /** @type {?} */ tagPc = new xml.Tag(_PLACEHOLDER_SPANNING_TAG, {
            id: (this._nextPlaceholderId++).toString(),
            equivStart: ph.startName,
            equivEnd: ph.closeName,
            type: type,
            dispStart: "<" + ph.tag + ">",
            dispEnd: "</" + ph.tag + ">"
        });
        var /** @type {?} */ nodes = [].concat.apply([], tslib_1.__spread(ph.children.map(function (node) { return node.visit(_this); })));
        if (nodes.length) {
            nodes.forEach(function (node) { return tagPc.children.push(node); });
        }
        else {
            tagPc.children.push(new xml.Text(""));
        }
        return [tagPc];
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var /** @type {?} */ idStr = (this._nextPlaceholderId++).toString();
        return [
            new xml.Tag(_PLACEHOLDER_TAG, {
                id: idStr,
                equiv: ph.name,
                disp: "{{" + ph.value + "}}"
            })
        ];
    };
    /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    WriteVisitor.prototype.visitIcuPlaceholder = /**
     * @param {?} ph
     * @param {?=} context
     * @return {?}
     */
    function (ph, context) {
        var /** @type {?} */ cases = Object.keys(ph.value.cases)
            .map(function (value) { return value + " {...}"; })
            .join(" ");
        var /** @type {?} */ idStr = (this._nextPlaceholderId++).toString();
        return [
            new xml.Tag(_PLACEHOLDER_TAG, {
                id: idStr,
                equiv: ph.name,
                disp: "{" + ph.value.expression + ", " + ph.value.type + ", " + cases + "}"
            })
        ];
    };
    /**
     * @param {?} nodes
     * @return {?}
     */
    WriteVisitor.prototype.serialize = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        this._nextPlaceholderId = 0;
        return [].concat.apply([], tslib_1.__spread(nodes.map(function (node) { return node.visit(_this); })));
    };
    return WriteVisitor;
}());
function WriteVisitor_tsickle_Closure_declarations() {
    /** @type {?} */
    WriteVisitor.prototype._nextPlaceholderId;
}
/**
 * @param {?} tag
 * @return {?}
 */
function getTypeForTag(tag) {
    switch (tag.toLowerCase()) {
        case "br":
        case "b":
        case "i":
        case "u":
            return "fmt";
        case "img":
            return "image";
        case "a":
            return "link";
        default:
            return "other";
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxpZmYyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvaTE4bi1wb2x5ZmlsbC8iLCJzb3VyY2VzIjpbInNyYy9zZXJpYWxpemVycy94bGlmZjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDakMsT0FBTyxLQUFLLElBQUksTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEtBQUssR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFvQyxNQUFNLGNBQWMsQ0FBQztBQUNoRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRXZDLHFCQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIscUJBQU0sTUFBTSxHQUFHLHVDQUF1QyxDQUFDO0FBQ3ZELHFCQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQztBQUNsQyxxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDOUIscUJBQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDO0FBQ3ZDLHFCQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDM0IscUJBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QixxQkFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzdCLHFCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDekIscUJBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUMzQixxQkFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3pCLHFCQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDL0IscUJBQU0sU0FBUyxHQUFHLE1BQU0sQ0FB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O0FBRUQsdUJBQXVCLEdBQVc7SUFDaEMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsS0FBSyxLQUFLO1lBQ1IsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCO1lBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNsQjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBtbCBmcm9tIFwiLi4vYXN0L2FzdFwiO1xuaW1wb3J0ICogYXMgaTE4biBmcm9tIFwiLi4vYXN0L2kxOG5fYXN0XCI7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSBcIi4veG1sX2hlbHBlclwiO1xuaW1wb3J0IHtQYXJzZXJ9IGZyb20gXCIuLi9hc3QvcGFyc2VyXCI7XG5pbXBvcnQge2dldFhtbFRhZ0RlZmluaXRpb259IGZyb20gXCIuLi9hc3QveG1sX3RhZ3NcIjtcbmltcG9ydCB7STE4bkVycm9yfSBmcm9tIFwiLi4vYXN0L3BhcnNlX3V0aWxcIjtcbmltcG9ydCB7SHRtbFRvWG1sUGFyc2VyLCBJMThuTWVzc2FnZXNCeUlkLCBYbWxNZXNzYWdlc0J5SWR9IGZyb20gXCIuL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7ZGVjaW1hbERpZ2VzdH0gZnJvbSBcIi4vZGlnZXN0XCI7XG5cbmNvbnN0IF9WRVJTSU9OID0gXCIyLjBcIjtcbmNvbnN0IF9YTUxOUyA9IFwidXJuOm9hc2lzOm5hbWVzOnRjOnhsaWZmOmRvY3VtZW50OjIuMFwiO1xuY29uc3QgX0RFRkFVTFRfU09VUkNFX0xBTkcgPSBcImVuXCI7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gXCJwaFwiO1xuY29uc3QgX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRyA9IFwicGNcIjtcbmNvbnN0IF9YTElGRl9UQUcgPSBcInhsaWZmXCI7XG5jb25zdCBfU09VUkNFX1RBRyA9IFwic291cmNlXCI7XG5jb25zdCBfVEFSR0VUX1RBRyA9IFwidGFyZ2V0XCI7XG5jb25zdCBfVU5JVF9UQUcgPSBcInVuaXRcIjtcbmNvbnN0IF9OT1RFU19UQUcgPSBcIm5vdGVzXCI7XG5jb25zdCBfTk9URV9UQUcgPSBcIm5vdGVcIjtcbmNvbnN0IF9TRUdNRU5UX1RBRyA9IFwic2VnbWVudFwiO1xuY29uc3QgX0ZJTEVfVEFHID0gXCJmaWxlXCI7XG5cbi8vIGh0dHA6Ly9kb2NzLm9hc2lzLW9wZW4ub3JnL3hsaWZmL3hsaWZmLWNvcmUvdjIuMC9vcy94bGlmZi1jb3JlLXYyLjAtb3MuaHRtbFxuZXhwb3J0IGZ1bmN0aW9uIHhsaWZmMkxvYWRUb0kxOG4oY29udGVudDogc3RyaW5nKTogSTE4bk1lc3NhZ2VzQnlJZCB7XG4gIC8vIHhsaWZmIHRvIHhtbCBub2Rlc1xuICBjb25zdCB4bGlmZjJQYXJzZXIgPSBuZXcgWGxpZmYyUGFyc2VyKCk7XG4gIGNvbnN0IHttc2dJZFRvSHRtbCwgZXJyb3JzfSA9IHhsaWZmMlBhcnNlci5wYXJzZShjb250ZW50KTtcblxuICAvLyB4bWwgbm9kZXMgdG8gaTE4biBub2Rlc1xuICBjb25zdCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX0gPSB7fTtcbiAgY29uc3QgY29udmVydGVyID0gbmV3IFhtbFRvSTE4bigpO1xuXG4gIE9iamVjdC5rZXlzKG1zZ0lkVG9IdG1sKS5mb3JFYWNoKG1zZ0lkID0+IHtcbiAgICBjb25zdCB7aTE4bk5vZGVzLCBlcnJvcnM6IGV9ID0gY29udmVydGVyLmNvbnZlcnQobXNnSWRUb0h0bWxbbXNnSWRdKTtcbiAgICBlcnJvcnMucHVzaCguLi5lKTtcbiAgICBpMThuTm9kZXNCeU1zZ0lkW21zZ0lkXSA9IGkxOG5Ob2RlcztcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHhsaWZmMiBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgfVxuXG4gIHJldHVybiBpMThuTm9kZXNCeU1zZ0lkO1xufVxuXG4vLyB1c2VkIHRvIG1lcmdlIHRyYW5zbGF0aW9ucyB3aGVuIGV4dHJhY3RpbmdcbmV4cG9ydCBmdW5jdGlvbiB4bGlmZjJMb2FkVG9YbWwoY29udGVudDogc3RyaW5nKTogWG1sTWVzc2FnZXNCeUlkIHtcbiAgY29uc3QgcGFyc2VyID0gbmV3IEh0bWxUb1htbFBhcnNlcihfVU5JVF9UQUcpO1xuICBjb25zdCB7eG1sTWVzc2FnZXNCeUlkLCBlcnJvcnN9ID0gcGFyc2VyLnBhcnNlKGNvbnRlbnQpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB4bGlmZjIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gIH1cblxuICByZXR1cm4geG1sTWVzc2FnZXNCeUlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geGxpZmYyV3JpdGUobWVzc2FnZXM6IGkxOG4uTWVzc2FnZVtdLCBsb2NhbGU6IHN0cmluZyB8IG51bGwsIGV4aXN0aW5nTm9kZXM/OiB4bWwuTm9kZVtdKTogc3RyaW5nIHtcbiAgY29uc3QgdmlzaXRvciA9IG5ldyBXcml0ZVZpc2l0b3IoKTtcbiAgY29uc3QgdW5pdHM6IHhtbC5Ob2RlW10gPSBleGlzdGluZ05vZGVzICYmIGV4aXN0aW5nTm9kZXMubGVuZ3RoID8gW25ldyB4bWwuQ1IoNCksIC4uLmV4aXN0aW5nTm9kZXNdIDogW107XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICBjb25zdCB1bml0ID0gbmV3IHhtbC5UYWcoX1VOSVRfVEFHLCB7aWQ6IG1lc3NhZ2UuaWR9KTtcbiAgICBjb25zdCBub3RlcyA9IG5ldyB4bWwuVGFnKF9OT1RFU19UQUcpO1xuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gfHwgbWVzc2FnZS5tZWFuaW5nIHx8IG1lc3NhZ2Uuc291cmNlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIG5vdGVzLmNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgbmV3IHhtbC5DUig4KSxcbiAgICAgICAgICBuZXcgeG1sLlRhZyhfTk9URV9UQUcsIHtjYXRlZ29yeTogXCJkZXNjcmlwdGlvblwifSwgW25ldyB4bWwuVGV4dChtZXNzYWdlLmRlc2NyaXB0aW9uKV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLm1lYW5pbmcpIHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcIm1lYW5pbmdcIn0sIFtuZXcgeG1sLlRleHQobWVzc2FnZS5tZWFuaW5nKV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2Uuc291cmNlcy5mb3JFYWNoKChzb3VyY2U6IGkxOG4uTWVzc2FnZVNwYW4pID0+IHtcbiAgICAgICAgbm90ZXMuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDgpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9OT1RFX1RBRywge2NhdGVnb3J5OiBcImxvY2F0aW9uXCJ9LCBbXG4gICAgICAgICAgICBuZXcgeG1sLlRleHQoXG4gICAgICAgICAgICAgIGAke3NvdXJjZS5maWxlUGF0aH06JHtzb3VyY2Uuc3RhcnRMaW5lfSR7c291cmNlLmVuZExpbmUgIT09IHNvdXJjZS5zdGFydExpbmUgPyBcIixcIiArIHNvdXJjZS5lbmRMaW5lIDogXCJcIn1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBub3Rlcy5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNikpO1xuICAgICAgdW5pdC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoNiksIG5vdGVzKTtcblxuICAgIH1cblxuICAgIGNvbnN0IHNlZ21lbnQgPSBuZXcgeG1sLlRhZyhfU0VHTUVOVF9UQUcpO1xuXG4gICAgc2VnbWVudC5jaGlsZHJlbi5wdXNoKG5ldyB4bWwuQ1IoOCksIG5ldyB4bWwuVGFnKF9TT1VSQ0VfVEFHLCB7fSwgdmlzaXRvci5zZXJpYWxpemUobWVzc2FnZS5ub2RlcykpLCBuZXcgeG1sLkNSKDYpKTtcblxuICAgIHVuaXQuY2hpbGRyZW4ucHVzaChuZXcgeG1sLkNSKDYpLCBzZWdtZW50LCBuZXcgeG1sLkNSKDQpKTtcblxuICAgIHVuaXRzLnB1c2gobmV3IHhtbC5DUig0KSwgdW5pdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZpbGUgPSBuZXcgeG1sLlRhZyhfRklMRV9UQUcsIHtvcmlnaW5hbDogXCJuZy50ZW1wbGF0ZVwiLCBpZDogXCJuZ2kxOG5cIn0sIFsuLi51bml0cywgbmV3IHhtbC5DUigyKV0pO1xuXG4gIGNvbnN0IHhsaWZmID0gbmV3IHhtbC5UYWcoX1hMSUZGX1RBRywge3ZlcnNpb246IF9WRVJTSU9OLCB4bWxuczogX1hNTE5TLCBzcmNMYW5nOiBsb2NhbGUgfHwgX0RFRkFVTFRfU09VUkNFX0xBTkd9LCBbXG4gICAgbmV3IHhtbC5DUigyKSxcbiAgICBmaWxlLFxuICAgIG5ldyB4bWwuQ1IoKVxuICBdKTtcblxuICByZXR1cm4geG1sLnNlcmlhbGl6ZShbbmV3IHhtbC5EZWNsYXJhdGlvbih7dmVyc2lvbjogXCIxLjBcIiwgZW5jb2Rpbmc6IFwiVVRGLThcIn0pLCBuZXcgeG1sLkNSKCksIHhsaWZmLCBuZXcgeG1sLkNSKCldKTtcbn1cblxuZXhwb3J0IGNvbnN0IHhsaWZmMkRpZ2VzdCA9IGRlY2ltYWxEaWdlc3Q7XG5cbi8vIEV4dHJhY3QgbWVzc2FnZXMgYXMgeG1sIG5vZGVzIGZyb20gdGhlIHhsaWZmIGZpbGVcbmNsYXNzIFhsaWZmMlBhcnNlciBpbXBsZW1lbnRzIG1sLlZpc2l0b3Ige1xuICBwcml2YXRlIF91bml0TWxTdHJpbmc6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG4gIHByaXZhdGUgX21zZ0lkVG9IdG1sOiB7W21zZ0lkOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHBhcnNlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgdGhpcy5fbXNnSWRUb0h0bWwgPSB7fTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoZ2V0WG1sVGFnRGVmaW5pdGlvbikucGFyc2UoY29udGVudCwgXCJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5fZXJyb3JzID0gcGFyc2VyLmVycm9ycztcbiAgICBtbC52aXNpdEFsbCh0aGlzLCBwYXJzZXIucm9vdE5vZGVzLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtc2dJZFRvSHRtbDogdGhpcy5fbXNnSWRUb0h0bWwsXG4gICAgICBlcnJvcnM6IHRoaXMuX2Vycm9yc1xuICAgIH07XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQubmFtZSkge1xuICAgICAgY2FzZSBfVU5JVF9UQUc6XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGlkQXR0ciA9IGVsZW1lbnQuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJpZFwiKTtcbiAgICAgICAgaWYgKCFpZEF0dHIpIHtcbiAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgPCR7X1VOSVRfVEFHfT4gbWlzc2VzIHRoZSBcImlkXCIgYXR0cmlidXRlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBpZEF0dHIudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuX21zZ0lkVG9IdG1sLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWxlbWVudCwgYER1cGxpY2F0ZWQgdHJhbnNsYXRpb25zIGZvciBtc2cgJHtpZH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3VuaXRNbFN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICB0aGlzLl9tc2dJZFRvSHRtbFtpZF0gPSB0aGlzLl91bml0TWxTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgTWVzc2FnZSAke2lkfSBtaXNzZXMgYSB0cmFuc2xhdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfU09VUkNFX1RBRzpcbiAgICAgICAgLy8gaWdub3JlIHNvdXJjZSBtZXNzYWdlXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9UQVJHRVRfVEFHOlxuICAgICAgICBjb25zdCBpbm5lclRleHRTdGFydCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5lbmQub2Zmc2V0O1xuICAgICAgICBjb25zdCBpbm5lclRleHRFbmQgPSBlbGVtZW50LmVuZFNvdXJjZVNwYW4hLnN0YXJ0Lm9mZnNldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuIS5zdGFydC5maWxlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlubmVyVGV4dCA9IGNvbnRlbnQuc2xpY2UoaW5uZXJUZXh0U3RhcnQsIGlubmVyVGV4dEVuZCk7XG4gICAgICAgIHRoaXMuX3VuaXRNbFN0cmluZyA9IGlubmVyVGV4dDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX1hMSUZGX1RBRzpcbiAgICAgICAgY29uc3QgdmVyc2lvbkF0dHIgPSBlbGVtZW50LmF0dHJzLmZpbmQoYXR0ciA9PiBhdHRyLm5hbWUgPT09IFwidmVyc2lvblwiKTtcbiAgICAgICAgaWYgKHZlcnNpb25BdHRyKSB7XG4gICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHZlcnNpb25BdHRyLnZhbHVlO1xuICAgICAgICAgIGlmICh2ZXJzaW9uICE9PSBcIjIuMFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRFcnJvcihlbGVtZW50LCBgVGhlIFhMSUZGIGZpbGUgdmVyc2lvbiAke3ZlcnNpb259IGlzIG5vdCBjb21wYXRpYmxlIHdpdGggWExJRkYgMi4wIHNlcmlhbGl6ZXJgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICB2aXNpdENvbW1lbnQoY29tbWVudDogbWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBtbC5FeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbi8vIENvbnZlcnQgbWwgbm9kZXMgKHhsaWZmIHN5bnRheCkgdG8gaTE4biBub2Rlc1xuY2xhc3MgWG1sVG9JMThuIGltcGxlbWVudHMgbWwuVmlzaXRvciB7XG4gIHByaXZhdGUgX2Vycm9yczogSTE4bkVycm9yW107XG5cbiAgY29udmVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB4bWxJY3UgPSBuZXcgUGFyc2VyKGdldFhtbFRhZ0RlZmluaXRpb24pLnBhcnNlKG1lc3NhZ2UsIFwiXCIsIHRydWUpO1xuICAgIHRoaXMuX2Vycm9ycyA9IHhtbEljdS5lcnJvcnM7XG5cbiAgICBjb25zdCBpMThuTm9kZXMgPVxuICAgICAgdGhpcy5fZXJyb3JzLmxlbmd0aCA+IDAgfHwgeG1sSWN1LnJvb3ROb2Rlcy5sZW5ndGggPT09IDAgPyBbXSA6IFtdLmNvbmNhdCguLi5tbC52aXNpdEFsbCh0aGlzLCB4bWxJY3Uucm9vdE5vZGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaTE4bk5vZGVzLFxuICAgICAgZXJyb3JzOiB0aGlzLl9lcnJvcnNcbiAgICB9O1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IG1sLlRleHQsIGNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgaTE4bi5UZXh0KHRleHQudmFsdWUsIHRleHQuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWw6IG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGkxOG4uTm9kZVtdIHwgbnVsbCB7XG4gICAgc3dpdGNoIChlbC5uYW1lKSB7XG4gICAgICBjYXNlIF9QTEFDRUhPTERFUl9UQUc6XG4gICAgICAgIGNvbnN0IG5hbWVBdHRyID0gZWwuYXR0cnMuZmluZChhdHRyID0+IGF0dHIubmFtZSA9PT0gXCJlcXVpdlwiKTtcbiAgICAgICAgaWYgKG5hbWVBdHRyKSB7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgaTE4bi5QbGFjZWhvbGRlcihcIlwiLCBuYW1lQXR0ci52YWx1ZSwgZWwuc291cmNlU3BhbildO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2XCIgYXR0cmlidXRlYCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBfUExBQ0VIT0xERVJfU1BBTk5JTkdfVEFHOlxuICAgICAgICBjb25zdCBzdGFydEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2U3RhcnRcIik7XG4gICAgICAgIGNvbnN0IGVuZEF0dHIgPSBlbC5hdHRycy5maW5kKGF0dHIgPT4gYXR0ci5uYW1lID09PSBcImVxdWl2RW5kXCIpO1xuXG4gICAgICAgIGlmICghc3RhcnRBdHRyKSB7XG4gICAgICAgICAgdGhpcy5fYWRkRXJyb3IoZWwsIGA8JHtfUExBQ0VIT0xERVJfVEFHfT4gbWlzc2VzIHRoZSBcImVxdWl2U3RhcnRcIiBhdHRyaWJ1dGVgKTtcbiAgICAgICAgfSBlbHNlIGlmICghZW5kQXR0cikge1xuICAgICAgICAgIHRoaXMuX2FkZEVycm9yKGVsLCBgPCR7X1BMQUNFSE9MREVSX1RBR30+IG1pc3NlcyB0aGUgXCJlcXVpdkVuZFwiIGF0dHJpYnV0ZWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SWQgPSBzdGFydEF0dHIudmFsdWU7XG4gICAgICAgICAgY29uc3QgZW5kSWQgPSBlbmRBdHRyLnZhbHVlO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXM6IGkxOG4uTm9kZVtdID0gW107XG5cbiAgICAgICAgICByZXR1cm4gbm9kZXMuY29uY2F0KFxuICAgICAgICAgICAgbmV3IGkxOG4uUGxhY2Vob2xkZXIoXCJcIiwgc3RhcnRJZCwgZWwuc291cmNlU3BhbiksXG4gICAgICAgICAgICAuLi5lbC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMsIG51bGwpKSxcbiAgICAgICAgICAgIG5ldyBpMThuLlBsYWNlaG9sZGVyKFwiXCIsIGVuZElkLCBlbC5zb3VyY2VTcGFuKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hZGRFcnJvcihlbCwgYFVuZXhwZWN0ZWQgdGFnYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihpY3U6IG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KSB7XG4gICAgY29uc3QgY2FzZU1hcDoge1t2YWx1ZTogc3RyaW5nXTogaTE4bi5Ob2RlfSA9IHt9O1xuXG4gICAgbWwudmlzaXRBbGwodGhpcywgaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBhbnkpID0+IHtcbiAgICAgIGNhc2VNYXBbYy52YWx1ZV0gPSBuZXcgaTE4bi5Db250YWluZXIoYy5ub2RlcywgaWN1LnNvdXJjZVNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBpMThuLkljdShpY3Uuc3dpdGNoVmFsdWUsIGljdS50eXBlLCBjYXNlTWFwLCBpY3Uuc291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoaWN1Q2FzZTogbWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGljdUNhc2UudmFsdWUsXG4gICAgICBub2RlczogW10uY29uY2F0KC4uLm1sLnZpc2l0QWxsKHRoaXMsIGljdUNhc2UuZXhwcmVzc2lvbikpXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBtbC5Db21tZW50LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBtbC5BdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSkge31cblxuICBwcml2YXRlIF9hZGRFcnJvcihub2RlOiBtbC5Ob2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChuZXcgSTE4bkVycm9yKG5vZGUuc291cmNlU3BhbiwgbWVzc2FnZSkpO1xuICB9XG59XG5cbmNsYXNzIFdyaXRlVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHByaXZhdGUgX25leHRQbGFjZWhvbGRlcklkOiBudW1iZXI7XG5cbiAgdmlzaXRUZXh0KHRleHQ6IGkxOG4uVGV4dCwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIHJldHVybiBbbmV3IHhtbC5UZXh0KHRleHQudmFsdWUpXTtcbiAgfVxuXG4gIHZpc2l0Q29udGFpbmVyKGNvbnRhaW5lcjogaTE4bi5Db250YWluZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlczogeG1sLk5vZGVbXSA9IFtdO1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKChub2RlOiBpMThuLk5vZGUpID0+IG5vZGVzLnB1c2goLi4ubm9kZS52aXNpdCh0aGlzKSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtuZXcgeG1sLlRleHQoYHske2ljdS5leHByZXNzaW9uUGxhY2Vob2xkZXJ9LCAke2ljdS50eXBlfSwgYCldO1xuXG4gICAgT2JqZWN0LmtleXMoaWN1LmNhc2VzKS5mb3JFYWNoKChjOiBzdHJpbmcpID0+IHtcbiAgICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGAke2N9IHtgKSwgLi4uaWN1LmNhc2VzW2NdLnZpc2l0KHRoaXMpLCBuZXcgeG1sLlRleHQoYH0gYCkpO1xuICAgIH0pO1xuXG4gICAgbm9kZXMucHVzaChuZXcgeG1sLlRleHQoYH1gKSk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdFRhZ1BsYWNlaG9sZGVyKHBoOiBpMThuLlRhZ1BsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGVGb3JUYWcocGgudGFnKTtcblxuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIGNvbnN0IHRhZ1BoID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge1xuICAgICAgICBpZDogKHRoaXMuX25leHRQbGFjZWhvbGRlcklkKyspLnRvU3RyaW5nKCksXG4gICAgICAgIGVxdWl2OiBwaC5zdGFydE5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRpc3A6IGA8JHtwaC50YWd9Lz5gXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbdGFnUGhdO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZ1BjID0gbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1NQQU5OSU5HX1RBRywge1xuICAgICAgaWQ6ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpLFxuICAgICAgZXF1aXZTdGFydDogcGguc3RhcnROYW1lLFxuICAgICAgZXF1aXZFbmQ6IHBoLmNsb3NlTmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBkaXNwU3RhcnQ6IGA8JHtwaC50YWd9PmAsXG4gICAgICBkaXNwRW5kOiBgPC8ke3BoLnRhZ30+YFxuICAgIH0pO1xuICAgIGNvbnN0IG5vZGVzOiB4bWwuTm9kZVtdID0gW10uY29uY2F0KC4uLnBoLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlOiB4bWwuTm9kZSkgPT4gdGFnUGMuY2hpbGRyZW4ucHVzaChub2RlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ1BjLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5UZXh0KFwiXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RhZ1BjXTtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ/OiBhbnkpOiB4bWwuTm9kZVtdIHtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7eyR7cGgudmFsdWV9fX1gXG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyhwaC52YWx1ZS5jYXNlcylcbiAgICAgIC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICsgXCIgey4uLn1cIilcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBpZFN0ciA9ICh0aGlzLl9uZXh0UGxhY2Vob2xkZXJJZCsrKS50b1N0cmluZygpO1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgeG1sLlRhZyhfUExBQ0VIT0xERVJfVEFHLCB7XG4gICAgICAgIGlkOiBpZFN0cixcbiAgICAgICAgZXF1aXY6IHBoLm5hbWUsXG4gICAgICAgIGRpc3A6IGB7JHtwaC52YWx1ZS5leHByZXNzaW9ufSwgJHtwaC52YWx1ZS50eXBlfSwgJHtjYXNlc319YFxuICAgICAgfSlcbiAgICBdO1xuICB9XG5cbiAgc2VyaWFsaXplKG5vZGVzOiBpMThuLk5vZGVbXSk6IHhtbC5Ob2RlW10ge1xuICAgIHRoaXMuX25leHRQbGFjZWhvbGRlcklkID0gMDtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRm9yVGFnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0YWcudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJiclwiOlxuICAgIGNhc2UgXCJiXCI6XG4gICAgY2FzZSBcImlcIjpcbiAgICBjYXNlIFwidVwiOlxuICAgICAgcmV0dXJuIFwiZm10XCI7XG4gICAgY2FzZSBcImltZ1wiOlxuICAgICAgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgICBjYXNlIFwiYVwiOlxuICAgICAgcmV0dXJuIFwibGlua1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJvdGhlclwiO1xuICB9XG59XG4iXX0=