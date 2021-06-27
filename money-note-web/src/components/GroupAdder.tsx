import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Input from '#/components/Input';
import FormRow from '#/components/FormRow';
import $ from './GroupAdder.module.scss';
import apiClient from '#/lib/apiClient';

interface GroupAdderProps {
  title: string;
  expense?: number;
  category?: string;
}

const GroupAdder = ({ title, expense = 0, category = '' }: GroupAdderProps) => {
  const [localTitle, setLocalTitle] = useState(title);
  const [localExpense, setLocalExpense] = useState(expense);
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
    console.log(value, name);
  }, []);

  const handleSubmit = useCallback(async () => {
    const result = await apiClient.post('http://3.37.115.97:8080/api/group', {
      groupName: localTitle,
      expense: localExpense,
    });
    console.log(result);
  }, [localTitle, localExpense]);

  useEffect(() => {
    const handleKeyDownEnter = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyDownEnter);
    return () => window.removeEventListener('keydown', handleKeyDownEnter);
  }, [handleSubmit]);

  return (
    <form className={$.groupAdder__container} onChange={handleChange}>
      <FormRow label="여행 이름" Component={<Input name="title" value={localTitle} autoFocus />} />
      <FormRow label="금액" Component={<Input name="expense" value={localExpense} />} />
      <FormRow label="카테고리" Component={<Input name="category" value={localCategory} />} />
    </form>
  );
};

export default GroupAdder;
