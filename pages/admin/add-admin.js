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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form className="flex flex-col space-y-4">
            <div className="flex ">
              <div className="w-1/2 mr-6">
                <Fieldset name="last_name" label="Nume">
                  <Field id="last_name" name="last_name" as={Input} autoComplete="off" />
                </Fieldset>
              </div>
              <div className="w-1/2">
                <Fieldset name="first_name" label="Prenume">
                  <Field id="first_name" name="first_name" as={Input} autoComplete="off" />
                </Fieldset>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 mr-6">
                <Birthday />
              </div>
              <div className="w-1/2">
                <Fieldset name="job" label="Pozitie in cadrul companiei">
                  <Field id="job" name="job" as={Input} autoComplete="off" />
                </Fieldset>
              </div>
            </div>
            <Fieldset name="email" label="E-mail">
              <Field id="email" name="email" as={Email} autoComplete="new-email" />
            </Fieldset>
            <div className="flex">
              <div className="w-1/2 mr-6">
                <Fieldset name="password" label="Parola">
                  <div className="mb-1" />
                  <Field id="password" name="password" as={Password} autoComplete="new-password" />
                </Fieldset>
              </div>
              <div className="w-1/2">
                <Fieldset name="password_confirm" label="Confirma parola">
                  <div className="mb-1" />
                  <Field id="password_confirm" name="password_confirm" as={Password} />
                </Fieldset>
              </div>
            </div>
            <div className="flex flex-row justify-between pt-8 sm:flex-row gap-4 sm:justify-between mt-6">
              <Link href="/admin/profile">
                <a className="cancel">
                  <i className="fas fa-arrow-left"></i>
                  <span className="ml-2 ">Înapoi</span>
                </a>
              </Link>
              <Submit className="confirm">
                <i className="fas fa-plus"></i>
                <span className="ml-2">Adaugă</span>
              </Submit>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
