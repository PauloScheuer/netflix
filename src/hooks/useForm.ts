import { useState, ChangeEvent } from 'react';

const useForm = (initialValues: any) => {
  const [values, setValues] = useState<any>(initialValues);
  const handleValuesChange = (event: ChangeEvent<any>) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const clearForm = () => {
    setValues(initialValues);
  };

  return { values, handleValuesChange, clearForm };
};

export default useForm;
