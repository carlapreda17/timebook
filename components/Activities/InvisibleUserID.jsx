import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const InvisibleUserID = ({ id }) => {
  const { setFieldValue } = useFormikContext();
  const handleUserChange = (id) => {
    setFieldValue('user', id);
  };
  useEffect(() => {
    handleUserChange(id);
  }, []);
  return null;
};

export default InvisibleUserID;
