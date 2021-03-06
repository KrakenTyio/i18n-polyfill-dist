import * as html from "../ast/ast";
import * as i18n from "../ast/i18n_ast";
import { InterpolationConfig } from "../ast/interpolation_config";
/**
 * Returns a function converting html nodes to an i18n Message given an interpolationConfig
 */
export declare function createI18nMessageFactory(interpolationConfig: InterpolationConfig): (nodes: html.Node[], meaning: string, description: string, id: string) => i18n.Message;
