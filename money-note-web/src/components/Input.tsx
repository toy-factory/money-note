import {
  InputHTMLAttributes,
} from 'react';

import $ from './Input.module.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...rest }: CustomInputProps) => (
  <input {...rest} className={`${$.input} ${className}`} />
);

export default Input;
