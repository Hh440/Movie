'use client'

import clsx from "clsx"

interface ButtonProps{
    type?:'button'|'submit'|'reset'|undefined
    fullwidth?:boolean
    children?:React.ReactNode
    onClick?:()=>void
    danger?:boolean
    disabled?:boolean
    secondary?:boolean
}

export const Button:React.FC<ButtonProps>=({
    type,
    fullwidth,
    children,
    onClick,
    danger,
    secondary,
    disabled,

})=>{
    return(
        <button onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
            flex justify-center rounded-md px-3 py-2 text-smfont-semibold focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2
        
        `,disabled && "opacity-50 cursor default",
        fullwidth && "w-full",
        secondary ? 'text-gray-900':'text-white',
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:oultine-rose-600",
        !secondary&&!danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600')}>
            {children}

        </button>
    )
}