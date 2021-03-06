"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    /**
     * @param source message AST
     * @param placeholders maps placeholder names to static content
     * @param placeholderToMessage maps placeholder names to messages (used for nested ICU messages)
     * @param meaning
     * @param description
     * @param id
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
exports.Message = Message;
class Text {
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitText(this, context);
    }
}
exports.Text = Text;
// TODO(vicb): do we really need this node (vs an array) ?
class Container {
    constructor(children, sourceSpan) {
        this.children = children;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitContainer(this, context);
    }
}
exports.Container = Container;
class Icu {
    constructor(expression, type, cases, sourceSpan) {
        this.expression = expression;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitIcu(this, context);
    }
}
exports.Icu = Icu;
class TagPlaceholder {
    constructor(tag, attrs, startName, closeName, children, isVoid, sourceSpan) {
        this.tag = tag;
        this.attrs = attrs;
        this.startName = startName;
        this.closeName = closeName;
        this.children = children;
        this.isVoid = isVoid;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitTagPlaceholder(this, context);
    }
}
exports.TagPlaceholder = TagPlaceholder;
class Placeholder {
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitPlaceholder(this, context);
    }
}
exports.Placeholder = Placeholder;
class IcuPlaceholder {
    constructor(value, name, sourceSpan) {
        this.value = value;
        this.name = name;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitIcuPlaceholder(this, context);
    }
}
exports.IcuPlaceholder = IcuPlaceholder;
// Clone the AST
class CloneVisitor {
    visitText(text, context) {
        return new Text(text.value, text.sourceSpan);
    }
    visitContainer(container, context) {
        const children = container.children.map(n => n.visit(this, context));
        return new Container(children, container.sourceSpan);
    }
    visitIcu(icu, context) {
        const cases = {};
        Object.keys(icu.cases).forEach(key => (cases[key] = icu.cases[key].visit(this, context)));
        const msg = new Icu(icu.expression, icu.type, cases, icu.sourceSpan);
        msg.expressionPlaceholder = icu.expressionPlaceholder;
        return msg;
    }
    visitTagPlaceholder(ph, context) {
        const children = ph.children.map(n => n.visit(this, context));
        return new TagPlaceholder(ph.tag, ph.attrs, ph.startName, ph.closeName, children, ph.isVoid, ph.sourceSpan);
    }
    visitPlaceholder(ph, context) {
        return new Placeholder(ph.value, ph.name, ph.sourceSpan);
    }
    visitIcuPlaceholder(ph, context) {
        return new IcuPlaceholder(ph.value, ph.name, ph.sourceSpan);
    }
}
exports.CloneVisitor = CloneVisitor;
// Visit all the nodes recursively
class RecurseVisitor {
    visitText(text, context) { }
    visitContainer(container, context) {
        container.children.forEach(child => child.visit(this));
    }
    visitIcu(icu, context) {
        Object.keys(icu.cases).forEach(k => {
            icu.cases[k].visit(this);
        });
    }
    visitTagPlaceholder(ph, context) {
        ph.children.forEach(child => child.visit(this));
    }
    visitPlaceholder(ph, context) { }
    visitIcuPlaceholder(ph, context) { }
}
exports.RecurseVisitor = RecurseVisitor;
//# sourceMappingURL=i18n_ast.js.map