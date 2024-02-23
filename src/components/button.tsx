import classNames from 'classnames';
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode, useState } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'stat' | 'arrow'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    id?: string;
    children?: ReactNode | ReactNode[];
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
}

const Button = ({variant, id, children, disabled = false, className, onClick, title, ...buttonProps}: ButtonProps) => {

    const [beenClicked, setBeenClicked] = useState(false);

    const handleClick = (e: any) => {
        if (onClick){
            onClick(e);
        }
        setBeenClicked(true) 

    }

    const classes = classNames(className, {
        'button-primary': variant === 'primary',
        'button-secondary': variant === 'secondary',
        'button-stat': variant === 'stat',
        'button-arrow': variant === 'arrow',
        'stat-button-clicked': variant === 'stat' && beenClicked === true,
    })

    return (
        <button
        id = {id}
        className = {classes}
        disabled = {disabled}
        onClick = {onClick}
        title = {title}
        {...buttonProps}
        >
            <span className = "button-text">{children}</span>
        </button>
    )

}

export default Button;