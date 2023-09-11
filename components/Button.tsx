import React from 'react'

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className="px-10 py-2 font-medium text-white transition-all ease-in-out rounded-xl bg-slate-950 hover:scale-105 focus:scale-95">{props.text}</button>
    )
}

export default Button