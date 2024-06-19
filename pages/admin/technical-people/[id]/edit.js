import React from 'react';
import { Layout } from '../../../../components';
import { Field, Form, Formik } from 'formik';
import { Email, Input } from '../../../../components/Fields';
import { Fieldset, Submit } from '../../../../components/Formik';
import Birthday from '../../../../components/Persons/Birthday';
import { validationSchema } from '../../../../models/editPerson';
import { checkAuth, withAuth } from '../../../../auth';
import Link from 'next/link';
import { useQuery } from '../../../../hooks';
import { useRouter } from 'next/router';
import { updatePerson } from '../../../../api/persons';
import { toaster } from '../../../../lib';
import UpdatePersonLoading from '../../../../components/Forms/UpdatePersonLoading';
import UpdatePersonError from '../../../../components/Forms/UpdatePersonError';

const Page = () => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const { data, status } = useQuery(`identity/${id}`);
  const handleSubmit = async (values) => {
    try {
      await updatePerson(id, values);
      toaster.success('Persoana a fost editata');
      router.push(`/admin/technical-people/${id}`);
    } catch (e) {
      toaster.error('Persoana nu a putut fi editata');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <Layout title="Colaboratori" role="admin">
      <div className="card max-w-xl">
        <h1 className="card-title">Editează persoana</h1>
        {status === 'loading' && <UpdatePersonLoading />}
        {status === 'error' && <UpdatePersonError />}
        {status === 'success' && (
          <Formik validationSchema={validationSchema} onSubmit={handleSubmit} initialValues={data}>
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
                  <Fieldset name="job" label="Poziție în cadrul companiei">
                    <Field id="job" name="job" as={Input} autoComplete="off" />
                  </Fieldset>
                </div>
              </div>
              <Fieldset name="email" label="E-mail">
                <Field id="email" name="email" as={Email} autoComplete="off" />
              </Fieldset>
              <div className="flex items-center justify-between gap-4">
                <Link href={`/admin/technical-people/${id}`}>
                  <button className="cancel" type="button">
                    <i className="fas fa-arrow-left"></i>
                    <span className="ml-2">Înapoi la persoana</span>
                  </button>
                </Link>
                <Submit className="confirm">Salvează</Submit>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
