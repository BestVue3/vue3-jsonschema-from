import { CommonWidgetPropsDefine } from './types';
import { ExtractPropTypes } from 'vue';
interface RenderItemOptiopns {
    hideLabel?: boolean;
}
export declare function renderItem(props: ExtractPropTypes<typeof CommonWidgetPropsDefine>, renderChildren: (id: string) => any, options?: RenderItemOptiopns): JSX.Element;
export {};
//# sourceMappingURL=utils.d.ts.map