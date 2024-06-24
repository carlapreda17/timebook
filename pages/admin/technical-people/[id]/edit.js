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
import PersonForm from "../../../../components/Forms/PersonForm";

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
          <PersonForm onSubmit={handleSubmit} initialValues={data}></PersonForm>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
