import * as ts from "typescript";
import { I18nDef } from "../../src/i18n-polyfill";
export declare abstract class AbstractAstParser {
    protected _sourceFile: ts.SourceFile;
    protected _createSourceFile(path: string, contents: string): ts.SourceFile;
    /**
     * Get strings from function call's first argument
     */
    protected _getCallArgStrings(callNode: ts.CallExpression): (string | I18nDef)[];
    /**
     * Find all child nodes of a kind
     */
    protected _findNodes(node: ts.Node, kind: ts.SyntaxKind): ts.Node[];
    protected syntaxKindToName(kind: ts.SyntaxKind): string;
}
