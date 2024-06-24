import { Field, Form, Formik } from 'formik';
import { Email, Input, Password } from '../../components/Fields';
import { Fieldset, Submit } from '../../components/Formik';
import Birthday from '../../components/Persons/Birthday';
import { initialValues, validationSchema } from '../../models/addAdmin';
import { Layout } from '../../components';
import { checkAuth, withAuth } from '../../auth';
import Link from 'next/link';
import { createAdmin } from '../../api/persons';
import { toaster } from '../../lib';
import { useRouter } from 'next/router';
import PersonForm from "../../components/Forms/PersonForm";

const Page = () => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    values['role'] = 'admin';
    try {
      await createAdmin(values);
      toaster.success('Administratorul a fost adaugat');
      router.push('/admin/profile');
    } catch (e) {
      toaster.error('Administratorul nu a putut fi adaugat');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Layout title="Timebook" role="admin">
      <div className="card max-w-xl">
        <h1 className="card-title">Adaugă administrator</h1>
       <PersonForm initialValues={initialValues} onSubmit={handleSubmit}></PersonForm>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
