import $ from './GroupAdder.module.scss';

interface FormRowProps {
  label: string;
  Component: JSX.Element;
}

const FormRow = ({ label, Component }: FormRowProps) => (
  <div className={$.FormRow__container}>
    <span className={$.FormRow__label}>{label}</span>
    <div className={$.FormRow__component}>
      {Component}
    </div>
  </div>
);

export default FormRow;
