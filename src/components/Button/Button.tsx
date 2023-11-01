import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  color: 'green' | 'red' | 'blue';
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button: FC<IButton> = ({
  children,
  color,
  disabled = false,
  onClick,
}) => {
  return (
    <div className='button-wrap'>
      <button
        className={'button-wrap__btn' + ' ' + color}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
