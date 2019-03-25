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
/**
 * @record
 */
export function IVisitor() { }
function IVisitor_tsickle_Closure_declarations() {
    /** @type {?} */
    IVisitor.prototype.visitTag;
    /** @type {?} */
    IVisitor.prototype.visitElement;
    /** @type {?} */
    IVisitor.prototype.visitText;
    /** @type {?} */
    IVisitor.prototype.visitDeclaration;
    /** @type {?} */
    IVisitor.prototype.visitDoctype;
}
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    Visitor.prototype.visitTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        var _this = this;
        var /** @type {?} */ strAttrs = this._serializeAttributes(tag.attrs);
        if (tag.children.length === 0) {
            return "<" + tag.name + strAttrs + "/>";
        }
        var /** @type {?} */ strChildren = tag.children.map(function (node) { return node.visit(_this); });
        return "<" + tag.name + strAttrs + ">" + strChildren.join("") + "</" + tag.name + ">";
    };
    /**
     * @param {?} text
     * @return {?}
     */
    Visitor.prototype.visitText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return _escapeXml(text.value);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Visitor.prototype.visitElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ attrs = {};
        element.attrs.forEach(function (attr) {
            attrs[attr.name] = attr.value;
        });
        var /** @type {?} */ tag = new Tag(element.name, attrs, /** @type {?} */ (element.children));
        return this.visitTag(tag);
    };
    /**
     * @param {?} decl
     * @return {?}
     */
    Visitor.prototype.visitDeclaration = /**
     * @param {?} decl
     * @return {?}
     */
    function (decl) {
        return "<?xml" + this._serializeAttributes(decl.attrs) + " ?>";
    };
    /**
     * @param {?} attrs
     * @return {?}
     */
    Visitor.prototype._serializeAttributes = /**
     * @param {?} attrs
     * @return {?}
     */
    function (attrs) {
        var /** @type {?} */ strAttrs = Object.keys(attrs)
            .map(function (name) { return name + "=\"" + _escapeXml(attrs[name]) + "\""; })
            .join(" ");
        return strAttrs.length > 0 ? " " + strAttrs : "";
    };
    /**
     * @param {?} doctype
     * @return {?}
     */
    Visitor.prototype.visitDoctype = /**
     * @param {?} doctype
     * @return {?}
     */
    function (doctype) {
        return "<!DOCTYPE " + doctype.rootTag + " [\n" + doctype.dtd + "\n]>";
    };
    return Visitor;
}());
var /** @type {?} */ _visitor = new Visitor();
/**
 * @param {?} nodes
 * @return {?}
 */
export function serialize(nodes) {
    return nodes.map(function (node) { return node.visit(_visitor); }).join("");
}
/**
 * @record
 */
export function Node() { }
function Node_tsickle_Closure_declarations() {
    /** @type {?} */
    Node.prototype.visit;
}
var Declaration = /** @class */ (function () {
    function Declaration(attrs) {
        this.attrs = attrs;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    Declaration.prototype.visit = /**
     * @param {?} visitor
     * @return {?}
     */
    function (visitor) {
        return visitor.visitDeclaration(this);
    };
    return Declaration;
}());
export { Declaration };
function Declaration_tsickle_Closure_declarations() {
    /** @type {?} */
    Declaration.prototype.attrs;
}
var Doctype = /** @class */ (function () {
    function Doctype(rootTag, dtd) {
        this.rootTag = rootTag;
        this.dtd = dtd;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    Doctype.prototype.visit = /**
     * @param {?} visitor
     * @return {?}
     */
    function (visitor) {
        return visitor.visitDoctype(this);
    };
    return Doctype;
}());
export { Doctype };
function Doctype_tsickle_Closure_declarations() {
    /** @type {?} */
    Doctype.prototype.rootTag;
    /** @type {?} */
    Doctype.prototype.dtd;
}
var Tag = /** @class */ (function () {
    function Tag(name, attrs, children) {
        if (attrs === void 0) { attrs = {}; }
        if (children === void 0) { children = []; }
        this.name = name;
        this.attrs = attrs;
        this.children = children;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    Tag.prototype.visit = /**
     * @param {?} visitor
     * @return {?}
     */
    function (visitor) {
        return visitor.visitTag(this);
    };
    return Tag;
}());
export { Tag };
function Tag_tsickle_Closure_declarations() {
    /** @type {?} */
    Tag.prototype.name;
    /** @type {?} */
    Tag.prototype.attrs;
    /** @type {?} */
    Tag.prototype.children;
}
var Text = /** @class */ (function () {
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
export { Text };
function Text_tsickle_Closure_declarations() {
    /** @type {?} */
    Text.prototype.value;
}
var CR = /** @class */ (function (_super) {
    tslib_1.__extends(CR, _super);
    function CR(ws) {
        if (ws === void 0) { ws = 0; }
        return _super.call(this, "\n" + new Array(ws + 1).join(" ")) || this;
    }
    return CR;
}(Text));
export { CR };
var /** @type {?} */ _ESCAPED_CHARS = [
    [/&/g, "&amp;"],
    [/"/g, "&quot;"],
    [/'/g, "&apos;"],
    [/</g, "&lt;"],
    [/>/g, "&gt;"]
];
/**
 * @param {?} text
 * @return {?}
 */
function _escapeXml(text) {
    return _ESCAPED_CHARS.reduce(function (str, entry) { return str.replace(entry[0], entry[1]); }, text);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX2hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvIiwic291cmNlcyI6WyJzcmMvc2VyaWFsaXplcnMveG1sX2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUE7Ozs7Ozs7SUFDRSwwQkFBUTs7OztJQUFSLFVBQVMsR0FBUTtRQUFqQixpQkFRQztRQVBDLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLE1BQUksR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLE9BQUksQ0FBQztTQUNwQztRQUVELHFCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsTUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsU0FBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFLLEdBQUcsQ0FBQyxJQUFJLE1BQUcsQ0FBQztLQUN4RTs7Ozs7SUFFRCwyQkFBUzs7OztJQUFULFVBQVUsSUFBVTtRQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7Ozs7SUFFRCw4QkFBWTs7OztJQUFaLFVBQWEsT0FBbUI7UUFDOUIscUJBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCO1lBQ3ZDLEtBQUssQ0FBQyxJ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aEM7ZUFqR0g7SUFrR0MsQ0FBQTtBQU5ELGdCQU1DOzs7OztBQUVELElBQUE7SUFBd0IsOEJBQUk7SUFDMUIsWUFBWSxFQUFNO1FBQU4sbUJBQUEsRUFBQSxNQUFNO2VBQ2hCLGtCQUFNLE9BQUssSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztLQUMxQzthQXZHSDtFQW9Hd0IsSUFBSSxFQUkzQixDQUFBO0FBSkQsY0FJQztBQUVELHFCQUFNLGNBQWMsR0FBdUI7SUFDekMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ2YsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0lBQ2hCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztJQUNoQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7SUFDZCxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7Q0FDZixDQUFDOzs7OztBQUVGLG9CQUFvQixJQUFZO0lBQzlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBVyxFQUFFLEtBQXVCLElBQUssT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMvRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbWwgZnJvbSBcIi4uL2FzdC9hc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVmlzaXRvciB7XG4gIHZpc2l0VGFnKHRhZzogVGFnKTogYW55O1xuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogbWwuRWxlbWVudCk6IGFueTtcbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQpOiBhbnk7XG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogRGVjbGFyYXRpb24pOiBhbnk7XG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiBEb2N0eXBlKTogYW55O1xufVxuXG5jbGFzcyBWaXNpdG9yIGltcGxlbWVudHMgSVZpc2l0b3Ige1xuICB2aXNpdFRhZyh0YWc6IFRhZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RyQXR0cnMgPSB0aGlzLl9zZXJpYWxpemVBdHRyaWJ1dGVzKHRhZy5hdHRycyk7XG4gICAgaWYgKHRhZy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBgPCR7dGFnLm5hbWV9JHtzdHJBdHRyc30vPmA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyQ2hpbGRyZW4gPSB0YWcuY2hpbGRyZW4ubWFwKG5vZGUgPT4gbm9kZS52aXNpdCh0aGlzKSk7XG4gICAgcmV0dXJuIGA8JHt0YWcubmFtZX0ke3N0ckF0dHJzfT4ke3N0ckNoaWxkcmVuLmpvaW4oXCJcIil9PC8ke3RhZy5uYW1lfT5gO1xuICB9XG5cbiAgdmlzaXRUZXh0KHRleHQ6IFRleHQpOiBzdHJpbmcge1xuICAgIHJldHVybiBfZXNjYXBlWG1sKHRleHQudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpIHtcbiAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgIGVsZW1lbnQuYXR0cnMuZm9yRWFjaCgoYXR0cjogbWwuQXR0cmlidXRlKSA9PiB7XG4gICAgICBhdHRyc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCB0YWcgPSBuZXcgVGFnKGVsZW1lbnQubmFtZSwgYXR0cnMsIGVsZW1lbnQuY2hpbGRyZW4gYXMgYW55KTtcbiAgICByZXR1cm4gdGhpcy52aXNpdFRhZyh0YWcpO1xuICB9XG5cbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiBEZWNsYXJhdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8P3htbCR7dGhpcy5fc2VyaWFsaXplQXR0cmlidXRlcyhkZWNsLmF0dHJzKX0gPz5gO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VyaWFsaXplQXR0cmlidXRlcyhhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9KSB7XG4gICAgY29uc3Qgc3RyQXR0cnMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgICAgIC5tYXAoKG5hbWU6IHN0cmluZykgPT4gYCR7bmFtZX09XCIke19lc2NhcGVYbWwoYXR0cnNbbmFtZV0pfVwiYClcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gc3RyQXR0cnMubGVuZ3RoID4gMCA/IFwiIFwiICsgc3RyQXR0cnMgOiBcIlwiO1xuICB9XG5cbiAgdmlzaXREb2N0eXBlKGRvY3R5cGU6IERvY3R5cGUpOiBhbnkge1xuICAgIHJldHVybiBgPCFET0NUWVBFICR7ZG9jdHlwZS5yb290VGFnfSBbXFxuJHtkb2N0eXBlLmR0ZH1cXG5dPmA7XG4gIH1cbn1cblxuY29uc3QgX3Zpc2l0b3IgPSBuZXcgVmlzaXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG5vZGVzOiBOb2RlW10pOiBzdHJpbmcge1xuICByZXR1cm4gbm9kZXMubWFwKChub2RlOiBOb2RlKTogc3RyaW5nID0+IG5vZGUudmlzaXQoX3Zpc2l0b3IpKS5qb2luKFwiXCIpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIERlY2xhcmF0aW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9KSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdERlY2xhcmF0aW9uKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N0eXBlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb290VGFnOiBzdHJpbmcsIHB1YmxpYyBkdGQ6IHN0cmluZykge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREb2N0eXBlKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWcgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fSwgcHVibGljIGNoaWxkcmVuOiBOb2RlW10gPSBbXSkge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUYWcodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcpIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ1IgZXh0ZW5kcyBUZXh0IHtcbiAgY29uc3RydWN0b3Iod3MgPSAwKSB7XG4gICAgc3VwZXIoYFxcbiR7bmV3IEFycmF5KHdzICsgMSkuam9pbihcIiBcIil9YCk7XG4gIH1cbn1cblxuY29uc3QgX0VTQ0FQRURfQ0hBUlM6IFtSZWdFeHAsIHN0cmluZ11bXSA9IFtcbiAgWy8mL2csIFwiJmFtcDtcIl0sXG4gIFsvXCIvZywgXCImcXVvdDtcIl0sXG4gIFsvJy9nLCBcIiZhcG9zO1wiXSxcbiAgWy88L2csIFwiJmx0O1wiXSxcbiAgWy8+L2csIFwiJmd0O1wiXVxuXTtcblxuZnVuY3Rpb24gX2VzY2FwZVhtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gX0VTQ0FQRURfQ0hBUlMucmVkdWNlKChzdHI6IHN0cmluZywgZW50cnk6IFtSZWdFeHAsIHN0cmluZ10pID0+IHN0ci5yZXBsYWNlKGVudHJ5WzBdLCBlbnRyeVsxXSksIHRleHQpO1xufVxuIl19