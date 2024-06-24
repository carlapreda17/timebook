import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Email, Input } from '../../../components/Fields';
import { Fieldset, Submit } from '../../../components/Formik';
import Birthday from '../../../components/Persons/Birthday';
import { initialValues, validationSchema } from '../../../models/addPerson';
import { Layout } from '../../../components';
import { checkAuth, withAuth } from '../../../auth';
import Link from 'next/link';
import { createPerson } from '../../../api/persons';
import { toaster } from '../../../lib';
import { useRouter } from 'next/router';
import PersonForm from "../../../components/Forms/PersonForm";

const Page = () => {
  const router = useRouter();


  const handleSubmit = async (values) => {
    values['role'] = 'user';
    try {
      await createPerson(values);
      toaster.success('Persoana a fost adaugata');
      router.push('/admin/technical-people');
    } catch (e) {
      toaster.error('Persoana nu a putut fi adaugata');
      // eslint-disable-next-line no-console
      console.log(e);
    }
    // eslint-disable-next-line no-console
    return console.log(values);
  };
  return (
    <Layout title="Colaboratori" role="admin">
      <div className="card max-w-xl">
        <div className="mx-auto">
          <h1 className="card-title">Adaugă o persoana</h1>
            <PersonForm onSubmit={handleSubmit} initialValues={initialValues}></PersonForm>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
