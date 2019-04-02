import * as ts from "typescript";
import { AbstractAstParser } from "./abstract-ast-parser";
import { I18nDef } from "../../src/i18n-polyfill";
export declare function getAst(paths: string[]): {
    [url: string]: (string | I18nDef)[];
};
export declare class ServiceParser extends AbstractAstParser {
    protected _sourceFile: ts.SourceFile;
    extract(contents: string, path?: string): (string | I18nDef)[];
    /**
     * Detect what the TranslateService instance property
     * is called by inspecting constructor arguments
     */
    protected _findTranslateServicePropertyName(constructorNode: ts.ConstructorDeclaration | ts.FunctionDeclaration): string;
    _findPropertyName(node: any): any;
    /**
     * Find class nodes
     */
    protected _findClassNodes(node: ts.Node): ts.ClassDeclaration[];
    /**
     * Find function nodes
     */
    protected _findFunctionNodes(node: ts.Node): ts.FunctionDeclaration[];
    /**
     * Find constructor
     */
    protected _findConstructorNode(node: ts.ClassDeclaration): ts.ConstructorDeclaration;
    /**
     * Find properties
     */
    protected _findPropertyNode(node: ts.ClassDeclaration): ts.PropertyDeclaration;
    /**
     * Find all calls to TranslateService methods
     */
    protected _findCallNodes(node: ts.Node, propertyIdentifier: string): ts.CallExpression[];
    protected _findI18nVariables(node: ts.Node): ts.VariableDeclaration[];
}
export declare function getFileContent(messages: {
    [url: string]: (string | I18nDef)[];
}, sourcePath: string, format?: string, locale?: string, cleanNotes?: boolean): string;
