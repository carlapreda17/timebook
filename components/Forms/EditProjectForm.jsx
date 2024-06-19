

import { useRouter } from 'next/router';
import { Formik } from 'formik';
import { toaster } from '../../lib';
import { validationSchema } from '../../models/add-project';
import { updateProject } from '../../api/projects';
import ProjectForm from './ProjectForm';

const EditProjectForm = ({data}) => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const handleSubmit = async (values) => {
    try {
      await updateProject(id, values);
      toaster.success('Proiectul a fost editat');
      router.push(`/admin/projects/${id}`);
    } catch (e) {
      toaster.error('Proiectul nu a putut fi editat!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      <ProjectForm submitText="Actualizeaza" />
    </Formik>
  );
};

export default EditProjectForm;
