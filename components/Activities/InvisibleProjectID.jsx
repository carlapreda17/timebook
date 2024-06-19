import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const InvisibleProjectID = ({ id }) => {
  const { setFieldValue } = useFormikContext();
  const handleUserChange = (id) => {
    setFieldValue('project', id);
  };
  useEffect(() => {
    handleUserChange(id);
  }, []);
  return null;
};

export default InvisibleProjectID;
