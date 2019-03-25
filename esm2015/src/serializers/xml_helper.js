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
class Visitor {
    /**
     * @param {?} tag
     * @return {?}
     */
    visitTag(tag) {
        const /** @type {?} */ strAttrs = this._serializeAttributes(tag.attrs);
        if (tag.children.length === 0) {
            return `<${tag.name}${strAttrs}/>`;
        }
        const /** @type {?} */ strChildren = tag.children.map(node => node.visit(this));
        return `<${tag.name}${strAttrs}>${strChildren.join("")}</${tag.name}>`;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    visitText(text) {
        return _escapeXml(text.value);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    visitElement(element) {
        const /** @type {?} */ attrs = {};
        element.attrs.forEach((attr) => {
            attrs[attr.name] = attr.value;
        });
        const /** @type {?} */ tag = new Tag(element.name, attrs, /** @type {?} */ (element.children));
        return this.visitTag(tag);
    }
    /**
     * @param {?} decl
     * @return {?}
     */
    visitDeclaration(decl) {
        return `<?xml${this._serializeAttributes(decl.attrs)} ?>`;
    }
    /**
     * @param {?} attrs
     * @return {?}
     */
    _serializeAttributes(attrs) {
        const /** @type {?} */ strAttrs = Object.keys(attrs)
            .map((name) => `${name}="${_escapeXml(attrs[name])}"`)
            .join(" ");
        return strAttrs.length > 0 ? " " + strAttrs : "";
    }
    /**
     * @param {?} doctype
     * @return {?}
     */
    visitDoctype(doctype) {
        return `<!DOCTYPE ${doctype.rootTag} [\n${doctype.dtd}\n]>`;
    }
}
const /** @type {?} */ _visitor = new Visitor();
/**
 * @param {?} nodes
 * @return {?}
 */
export function serialize(nodes) {
    return nodes.map((node) => node.visit(_visitor)).join("");
}
/**
 * @record
 */
export function Node() { }
function Node_tsickle_Closure_declarations() {
    /** @type {?} */
    Node.prototype.visit;
}
export class Declaration {
    /**
     * @param {?} attrs
     */
    constructor(attrs) {
        this.attrs = attrs;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    visit(visitor) {
        return visitor.visitDeclaration(this);
    }
}
function Declaration_tsickle_Closure_declarations() {
    /** @type {?} */
    Declaration.prototype.attrs;
}
export class Doctype {
    /**
     * @param {?} rootTag
     * @param {?} dtd
     */
    constructor(rootTag, dtd) {
        this.rootTag = rootTag;
        this.dtd = dtd;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    visit(visitor) {
        return visitor.visitDoctype(this);
    }
}
function Doctype_tsickle_Closure_declarations() {
    /** @type {?} */
    Doctype.prototype.rootTag;
    /** @type {?} */
    Doctype.prototype.dtd;
}
export class Tag {
    /**
     * @param {?} name
     * @param {?=} attrs
     * @param {?=} children
     */
    constructor(name, attrs = {}, children = []) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    visit(visitor) {
        return visitor.visitTag(this);
    }
}
function Tag_tsickle_Closure_declarations() {
    /** @type {?} */
    Tag.prototype.name;
    /** @type {?} */
    Tag.prototype.attrs;
    /** @type {?} */
    Tag.prototype.children;
}
export class Text {
    /**
     * @param {?} value
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * @param {?} visitor
     * @return {?}
     */
    visit(visitor) {
        return visitor.visitText(this);
    }
}
function Text_tsickle_Closure_declarations() {
    /** @type {?} */
    Text.prototype.value;
}
export class CR extends Text {
    /**
     * @param {?=} ws
     */
    constructor(ws = 0) {
        super(`\n${new Array(ws + 1).join(" ")}`);
    }
}
const /** @type {?} */ _ESCAPED_CHARS = [
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
    return _ESCAPED_CHARS.reduce((str, entry) => str.replace(entry[0], entry[1]), text);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX2hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2kxOG4tcG9seWZpbGwvIiwic291cmNlcyI6WyJzcmMvc2VyaWFsaXplcnMveG1sX2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7O0lBQ0UsUUFBUSxDQUFDLEdBQVE7UUFDZix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUM7U0FDcEM7UUFFRCx1QkFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDeEU7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVU7UUFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQW1CO1FBQzlCLHVCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQy9C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QUF1QjtJQUN6QyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7SUFDZixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7SUFDaEIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0lBQ2hCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUNkLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztDQUNmLENBQUM7Ozs7O0FBRUYsb0JBQW9CLElBQVk7SUFDOUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFXLEVBQUUsS0FBdUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDL0ciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG1sIGZyb20gXCIuLi9hc3QvYXN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZpc2l0b3Ige1xuICB2aXNpdFRhZyh0YWc6IFRhZyk6IGFueTtcbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IG1sLkVsZW1lbnQpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogYW55O1xuICB2aXNpdERlY2xhcmF0aW9uKGRlY2w6IERlY2xhcmF0aW9uKTogYW55O1xuICB2aXNpdERvY3R5cGUoZG9jdHlwZTogRG9jdHlwZSk6IGFueTtcbn1cblxuY2xhc3MgVmlzaXRvciBpbXBsZW1lbnRzIElWaXNpdG9yIHtcbiAgdmlzaXRUYWcodGFnOiBUYWcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gdGhpcy5fc2VyaWFsaXplQXR0cmlidXRlcyh0YWcuYXR0cnMpO1xuICAgIGlmICh0YWcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYDwke3RhZy5uYW1lfSR7c3RyQXR0cnN9Lz5gO1xuICAgIH1cblxuICAgIGNvbnN0IHN0ckNoaWxkcmVuID0gdGFnLmNoaWxkcmVuLm1hcChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIHJldHVybiBgPCR7dGFnLm5hbWV9JHtzdHJBdHRyc30+JHtzdHJDaGlsZHJlbi5qb2luKFwiXCIpfTwvJHt0YWcubmFtZX0+YDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gX2VzY2FwZVhtbCh0ZXh0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBtbC5FbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSB7fTtcbiAgICBlbGVtZW50LmF0dHJzLmZvckVhY2goKGF0dHI6IG1sLkF0dHJpYnV0ZSkgPT4ge1xuICAgICAgYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgdGFnID0gbmV3IFRhZyhlbGVtZW50Lm5hbWUsIGF0dHJzLCBlbGVtZW50LmNoaWxkcmVuIGFzIGFueSk7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRUYWcodGFnKTtcbiAgfVxuXG4gIHZpc2l0RGVjbGFyYXRpb24oZGVjbDogRGVjbGFyYXRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBgPD94bWwke3RoaXMuX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoZGVjbC5hdHRycyl9ID8+YDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlcmlhbGl6ZUF0dHJpYnV0ZXMoYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIGNvbnN0IHN0ckF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpXG4gICAgICAubWFwKChuYW1lOiBzdHJpbmcpID0+IGAke25hbWV9PVwiJHtfZXNjYXBlWG1sKGF0dHJzW25hbWVdKX1cImApXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgcmV0dXJuIHN0ckF0dHJzLmxlbmd0aCA+IDAgPyBcIiBcIiArIHN0ckF0dHJzIDogXCJcIjtcbiAgfVxuXG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiBEb2N0eXBlKTogYW55IHtcbiAgICByZXR1cm4gYDwhRE9DVFlQRSAke2RvY3R5cGUucm9vdFRhZ30gW1xcbiR7ZG9jdHlwZS5kdGR9XFxuXT5gO1xuICB9XG59XG5cbmNvbnN0IF92aXNpdG9yID0gbmV3IFZpc2l0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShub2RlczogTm9kZVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIG5vZGVzLm1hcCgobm9kZTogTm9kZSk6IHN0cmluZyA9PiBub2RlLnZpc2l0KF92aXNpdG9yKSkuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHtcbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWNsYXJhdGlvbiBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSkge31cblxuICB2aXNpdCh2aXNpdG9yOiBJVmlzaXRvcik6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREZWNsYXJhdGlvbih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdHlwZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vdFRhZzogc3RyaW5nLCBwdWJsaWMgZHRkOiBzdHJpbmcpIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RG9jdHlwZSh0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFnIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyczoge1trOiBzdHJpbmddOiBzdHJpbmd9ID0ge30sIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdID0gW10pIHt9XG5cbiAgdmlzaXQodmlzaXRvcjogSVZpc2l0b3IpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VGFnKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IElWaXNpdG9yKTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENSIGV4dGVuZHMgVGV4dCB7XG4gIGNvbnN0cnVjdG9yKHdzID0gMCkge1xuICAgIHN1cGVyKGBcXG4ke25ldyBBcnJheSh3cyArIDEpLmpvaW4oXCIgXCIpfWApO1xuICB9XG59XG5cbmNvbnN0IF9FU0NBUEVEX0NIQVJTOiBbUmVnRXhwLCBzdHJpbmddW10gPSBbXG4gIFsvJi9nLCBcIiZhbXA7XCJdLFxuICBbL1wiL2csIFwiJnF1b3Q7XCJdLFxuICBbLycvZywgXCImYXBvcztcIl0sXG4gIFsvPC9nLCBcIiZsdDtcIl0sXG4gIFsvPi9nLCBcIiZndDtcIl1cbl07XG5cbmZ1bmN0aW9uIF9lc2NhcGVYbWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIF9FU0NBUEVEX0NIQVJTLnJlZHVjZSgoc3RyOiBzdHJpbmcsIGVudHJ5OiBbUmVnRXhwLCBzdHJpbmddKSA9PiBzdHIucmVwbGFjZShlbnRyeVswXSwgZW50cnlbMV0pLCB0ZXh0KTtcbn1cbiJdfQ==