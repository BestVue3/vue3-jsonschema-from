import { CommonRendererPropsDefine } from './types';
import { ExtractPropTypes } from 'vue';
export declare function renderItem(props: ExtractPropTypes<typeof CommonRendererPropsDefine>, renderChildren: (id: string) => any): JSX.Element;
