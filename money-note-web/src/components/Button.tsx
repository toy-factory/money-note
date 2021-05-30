import $ from './Button.module.scss';

const Button = ({ className = '', children, ...otherProps }) => (
  <button
    className={`${className} ${$.button}`}
    type="button"
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
