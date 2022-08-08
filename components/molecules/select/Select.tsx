import { FC } from "react";
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {SelectContent, SelectItem, SelectTrigger} from "./Select.styles";

export type ISelectItem = {
    label: string
    value: string
}

export interface ISelectProps {
    items: ISelectItem[]
    onSelectItem: (item: string) => void
    defaultValue: string
}

const Select: FC<ISelectProps> = (props): JSX.Element => {
    const { items, onSelectItem, defaultValue } = props

    const renderItem = (item: ISelectItem) => (
        <SelectItem value={item.value} key={item.value}>
            <SelectPrimitive.SelectItemText>{item.label}</SelectPrimitive.SelectItemText>
            <SelectPrimitive.ItemIndicator>
                <CheckIcon />
            </SelectPrimitive.ItemIndicator>
        </SelectItem>
    )

    return (
        <SelectPrimitive.Select defaultValue={defaultValue} onValueChange={(value) => onSelectItem(value)}>
            <SelectTrigger>
                <SelectPrimitive.Value placeholder={defaultValue} />
                <SelectPrimitive.SelectIcon>
                    <ChevronDownIcon />
                </SelectPrimitive.SelectIcon>
            </SelectTrigger>
            <SelectContent>
                <SelectPrimitive.Viewport>
                    <SelectPrimitive.ScrollUpButton>
                        <ChevronUpIcon />
                    </SelectPrimitive.ScrollUpButton>
                    <SelectPrimitive.Viewport>
                        {items.map(renderItem)}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Viewport>
            </SelectContent>
        </SelectPrimitive.Select>
    )
}

export default Select