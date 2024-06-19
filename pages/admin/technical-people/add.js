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

const Page = () => {
  const router = useRouter();

  const [showPassword, toggle] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const action = showPassword
    ? 'far fa-eye dark:text-slate-300'
    : 'far fa-eye-slash dark:text-slate-300';

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        as={Input}
                        type={type}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        className="absolute right-0 p-2 outline-none"
                        onClick={() => toggle(!showPassword)}
                        tabIndex="-1"
                      >
                        <i className={action}></i>
                      </button>
                    </div>
                  </Fieldset>
                </div>
                <div className="w-1/2">
                  <Fieldset name="password_confirm" label="Confirmă parola">
                    <div className="mb-1" />
                    <div className="relative">
                      <Field id="password_confirm" name="password_confirm" as={Input} type={type} />
                      <button
                        type="button"
                        className="absolute right-0 p-2 outline-none"
                        onClick={() => toggle(!showPassword)}
                        tabIndex="-1"
                      >
                        <i className={action}></i>
                      </button>
                    </div>
                  </Fieldset>
                </div>
              </div>
              <div className="flex gap-4 items-end justify-between">
                <Link href="/admin/technical-people">
                  <a className="cancel">
                    <i className="fas fa-arrow-left"></i>
                    <span className="ml-2 ">înapoi la persoane</span>
                  </a>
                </Link>
                <Submit className="confirm">
                  <i className="fas fa-plus"></i>
                  <span className="ml-2">Adauga persoana</span>
                </Submit>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
