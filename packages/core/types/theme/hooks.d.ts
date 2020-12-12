import { Ref } from 'vue';
import { Theme, ThemeLayoutsNames, FormDefine, HeaderDefine } from './ThemeProvider';
import { BuiltInWidgets, WidgetComponentDefine } from './utils';
import { Schema } from '../types';
import { SingleTypeArrayDefine } from './types';
export declare function useThemeContext(): Ref<Theme>;
/**
 * override function can not fix problem
 * we may pass `name` in condition type
 * override will emit error when we doing that
 */
export declare function useComponent<N extends ThemeLayoutsNames>(name: N): {
    header: Ref<HeaderDefine>;
    form: Ref<FormDefine>;
    array: Ref<SingleTypeArrayDefine>;
}[N extends ThemeLayoutsNames.Header ? 'header' : N extends ThemeLayoutsNames.Form ? 'form' : 'array'];
export declare function useWidget(schema: Schema, widget: BuiltInWidgets | string): Ref<WidgetComponentDefine>;
//# sourceMappingURL=hooks.d.ts.map