import { useRouter } from 'next/router';
import { Formik } from 'formik';
import { toaster } from '../../lib';
import { validationSchema, initialValues } from '../../models/add-project';
import { createProject } from '../../api/projects';
import ProjectForm from './ProjectForm';

const AddProjectForm = () => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      await createProject(values);
      toaster.success('Proiectul a fost adaugat');
      router.push('/admin/projects');
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
      toaster.error('Proiectul nu a putut fi adaugat');
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <ProjectForm submitText="Adauga" />
    </Formik>
  );
};

export default AddProjectForm;
