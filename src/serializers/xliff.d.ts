import * as i18n from "../ast/i18n_ast";
import * as xml from "./xml_helper";
import { I18nMessagesById, XmlMessagesById } from "./serializer";
import { digest } from "./digest";
export declare function xliffLoadToI18n(content: string): I18nMessagesById;
export declare function xliffLoadToXml(content: string): XmlMessagesById;
export declare function xliffWrite(messages: i18n.Message[], locale: string | null, existingNodes?: xml.Node[]): string;
export declare const xliffDigest: typeof digest;
