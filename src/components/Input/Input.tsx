import React, { FC } from 'react';

interface IInput {
  value: string;
  onChange: (value: string) => void;
}

export const Input: FC<IInput> = ({ value, onChange }) => {
  return (
    <div className='input-wrap'>
      <input
        className='input-wrap__input'
        type='text'
        placeholder='cats,dogs,cars...'
        value={value}
        onChange={ev => onChange(ev.target.value)}
      />
    </div>
  );
};
