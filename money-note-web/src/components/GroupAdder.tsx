import {
  useCallback,
  useState,
} from 'react';

import Input from '#/components/Input';
import FormRow from '#/components/FormRow';

interface GroupAdderProps {
  expense: number;
  title: string;
  category: string;
}

const GroupAdder = ({ expense, title, category }: GroupAdderProps) => {
  const [localExpense, setLocalExpense] = useState(expense);
  const [localTitle, setLocalTitle] = useState(title);
  const [localCategory, setLocalCategory] = useState(category);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === 'expense') {
      setLocalExpense(value);
    }
    if (name === 'title') {
      setLocalTitle(value);
    }
    if (name === 'category') {
      setLocalCategory(value);
    }

    console.log(name, value);
  }, []);

  return (
    <form onChange={handleChange}>
      <FormRow label="금액" Component={<Input name="expense" value={localExpense} />} />
      <FormRow label="기록 이름" Component={<Input name="title" value={localTitle} />} />
      <FormRow label="카테고리" Component={<Input name="category" value={localCategory} />} />
    </form>
  );
};

export default GroupAdder;
