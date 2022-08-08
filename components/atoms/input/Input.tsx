import {ComponentAtomInput} from "../../../graphql/generated/graphql-generated";
import {ChangeEventHandler, CSSProperties, FC} from "react";
import {RefCallBack} from "react-hook-form";
import {ChangeHandler} from "react-hook-form/dist/types/form";
import * as Styles from './Input.styles'

export interface IInputProps extends ComponentAtomInput {
    style?: CSSProperties,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
    errors?: any,
    register?: {
        name: string
        onChange: ChangeHandler
        onBlur: ChangeHandler
        ref: RefCallBack,
    }
}


const Input: FC<IInputProps> = (props): JSX.Element => {
    const { onChange, label, type, placeholder, register, errors, name, required, style, className } = props

    return (
        <Styles.Container
            style={style}
            className={className}
        >
            <Styles.Label>{label || ''}{required && '*'}</Styles.Label>
            <Styles.StyledInput
                {...register}
                placeholder={placeholder || ''}
                onChange={(event) => {
                    register?.onChange(event)
                    if (onChange) onChange(event)
                }}
                type={type || ''}
                error={!!errors[name]?.message}
            />
            {errors && name && <Styles.InputError>{errors[name]?.message}</Styles.InputError>}
        </Styles.Container>
    )
}

export default Input
