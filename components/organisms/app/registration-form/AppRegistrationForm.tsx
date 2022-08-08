import {FC} from "react";
import {ComponentOrganismsRegistrationForm} from "../../../../graphql/generated/graphql-generated";
import * as Styles from './AppRegistrationForm.styles'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationFormValidation} from "./utils/validation.schema";
import Link from "../../../atoms/link/Link";

type RegistrationFormData = {
    name: string
    surname: string
    email: string
    password: string
    repeat_password: string
}

type Field = "name" | "surname" | "email" | "password" | "repeat_password"

const AppRegistrationForm: FC<ComponentOrganismsRegistrationForm> = (props): JSX.Element => {
    const { title, subtitle, input: inputs, submit, alreadyRegistered } = props

    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>({
        resolver: yupResolver(registrationFormValidation),
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
        console.log(data)
    }

    return (
        <Styles.Container>
            <Styles.Bubble>
                <Styles.FormTitle {...title} />
                <Styles.FormDescription
                    text={subtitle?.text || ''}
                    id=""
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {inputs.map((input, index) => (
                        <div key={`${input?.label}-${index}`}>
                            <Styles.FormInput
                                register={register((input?.name as Field))}
                                id=""
                                label={input?.label || ''}
                                name={input?.name || ''}
                                required={input?.required || false}
                                placeholder={input?.placeholder || ''}
                                type={input?.type}
                                errors={input?.name && errors ? errors  : undefined}
                            />
                        </div>
                    ))}
                    <Styles.FormButton id="" label={submit?.label || ''} type="submit" />
                </form>
                <Styles.BottomLink
                    id=""
                    label={alreadyRegistered?.label || ''}
                    url={alreadyRegistered?.url || ''}
                />
            </Styles.Bubble>
        </Styles.Container>
    )
}

export default AppRegistrationForm
