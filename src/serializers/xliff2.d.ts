import * as i18n from "../ast/i18n_ast";
import * as xml from "./xml_helper";
import { I18nMessagesById, XmlMessagesById } from "./serializer";
import { decimalDigest } from "./digest";
export declare function xliff2LoadToI18n(content: string): I18nMessagesById;
export declare function xliff2LoadToXml(content: string): XmlMessagesById;
export declare function xliff2Write(messages: i18n.Message[], locale: string | null, existingNodes?: xml.Node[], cleanNotes?: boolean): string;
export declare const xliff2Digest: typeof decimalDigest;
