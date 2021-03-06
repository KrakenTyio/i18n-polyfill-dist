import { PlaceholderMapper, XmlMessagesById } from "../../src/serializers/serializer";
import * as i18n from "../../src/ast/i18n_ast";
import { Node } from "../../src/serializers/xml_helper";
import { I18nDef } from "../../src/i18n-polyfill";
export declare class MessageBundle {
    private locale;
    messages: i18n.Message[];
    private htmlParser;
    constructor(locale?: string | null);
    updateFromTemplate(template: string | I18nDef, url: string): i18n.Message[];
    getMessages(): i18n.Message[];
    write(write: (messages: i18n.Message[], locale: string | null, existingNodes?: Node[], cleanNotes?: boolean) => string, digest: (message: i18n.Message) => string, xmlMessagesById?: XmlMessagesById, createMapper?: (messages: i18n.Message) => PlaceholderMapper, filterSources?: (path: string) => string, cleanNotes?: boolean): string;
}
