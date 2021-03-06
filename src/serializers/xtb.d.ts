import { I18nMessagesById } from "./serializer";
import { digest } from "./digest";
import { xmbMapper } from "./xmb";
export declare function xtbLoadToI18n(content: string): I18nMessagesById;
export declare const xtbDigest: typeof digest;
export declare const xtbMapper: typeof xmbMapper;
