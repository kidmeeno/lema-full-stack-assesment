import React from 'react';

type TextAreaWithCountProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength: number;
  rows?: number;
  name?: string;
};

const TextAreaWithCount: React.FC<TextAreaWithCountProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  maxLength,
  rows = 5,
  name,
}) => {
  return (
    <div className='mt-4'>
      <label className='block mb-2 text-lg text-gray-700 font-medium tracking-normal'>
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        className='w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
      />
      <p className='text-sm text-gray-400 mt-1'>
        {value.length}/{maxLength} characters
      </p>
    </div>
  );
};

export default TextAreaWithCount;
