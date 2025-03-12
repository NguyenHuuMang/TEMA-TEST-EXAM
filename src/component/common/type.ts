import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string
    classShared?: string
    classInputWrap?: string
    insertLeft?: ReactNode
    insertRight?: ReactNode
    type?: HTMLInputTypeAttribute
    symbolMoney?: string
    symbolUrl?: string
    noThereAreCommas?: boolean
    showIconTogglePassword?: boolean
    error?: string
    symbolPhone?: string
    touched?: boolean
    transparent?: boolean
    classNameAdvanced?: string
    height46px?: boolean
    isSearchInterestedParty?: boolean
}