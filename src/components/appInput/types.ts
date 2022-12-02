import {ChangeEvent} from "react"

export type appInputPropsType = {
    type: string,
    name: string,
    placeholder: string,
    className?: string,
    isInvalid?: boolean,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}