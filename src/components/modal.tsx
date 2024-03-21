import classNames from 'classnames';
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode, useState } from 'react';

interface ModalProps {
    id?: string;
    title?: string;
    isOpen?: boolean;
    children?: ReactNode | ReactNode[];
    disabled?: boolean;
    className?: string;
    primaryButtonLabel?: string;
    primaryButtonOnClick?: MouseEventHandler<HTMLButtonElement>;
    secondaryButtonLabel?: string;
    secondaryButtonOnClick?: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({id, title, isOpen, children, disabled, className, primaryButtonLabel, primaryButtonOnClick, secondaryButtonLabel, secondaryButtonOnClick}: ModalProps) => {

    return (
        <dialog>
            <p>HELLO!</p>
        </dialog>
    )

}

export default Modal;