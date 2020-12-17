import React from "react";
import { ColorValue, StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

export type ItemValue = number | string

export interface PickerItemProps {
    label?: string;
    value: ItemValue;
    color?: ColorValue;
    testID?: string;
}

export interface PickerProps extends ViewProps {
    /**
     * @platform android
     */
    data?: any[];
    /**
     * @platform android
     */
    enabled?: boolean;
    /**
     * @platform android
     */
    itemSpace?: number;
    itemStyle?: StyleProp<TextStyle>;
    /**
     * to set top and bottom line color (Without gradients)
     */
    lineColor?: ColorValue;
    /**
     * to set top and bottom starting gradient line color
     */
    lineGradientColorFrom?: ColorValue;
    /**
     * to set top and bottom ending gradient
     */
    lineGradientColorTo?: ColorValue;
    onValueChange?: (itemValue: ItemValue) => void;
    selectedIndex?: number;
    selectedValue?: ItemValue;
    style?: StyleProp<TextStyle>;
    /**
     * Used for end-to-end tests
     */
    testID?: string;
    /**
     * @platform android
     */
    textColor?: ColorValue;
    /**
     * @platform android
     */
    textSize?: number;
}

export default class Picker extends React.Component<PickerProps, {}> {
    static Item: React.ComponentType<PickerItemProps>;
}
