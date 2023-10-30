import React, { FC } from 'react';

interface IInput {
  value: string;
  onChange: (val: string) => void;
}

export const Input: FC<IInput> = ({ value, onChange }) => {
  return (
    <div className='input-wrap'>
      <input
        className='input-wrap__input'
        type='text'
        placeholder='Введите тег'
        value={value}
        onChange={ev => onChange(ev.target.value)}
      />
    </div>
  );
};
