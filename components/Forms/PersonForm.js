import {Field, Form, Formik} from "formik";
import {initialValues, validationSchema} from "../../models/addPerson";
import {Fieldset, Submit} from "../Formik";
import {Email, Input} from "../Fields";
import Birthday from "../Persons/Birthday";
import Link from "next/link";
import React, {useState} from "react";

const PersonForm = ({ onSubmit,initialValues }) => {
  const [showPassword, toggle] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const action = showPassword
    ? 'far fa-eye dark:text-slate-300'
    : 'far fa-eye-slash dark:text-slate-300';
  return(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col space-y-4">
        <div className="flex flex-row mobile:flex-col">
          <div className="w-1/2 mobile:mt-4 mr-6 mobile:w-full">
            <Fieldset name="last_name" label="Nume">
              <Field id="last_name" name="last_name" as={Input} autoComplete="off" />
            </Fieldset>
          </div>
          <div className="w-1/2 mobile:mt-4 mobile:w-full">
            <Fieldset name="first_name" label="Prenume">
              <Field id="first_name" name="first_name" as={Input} autoComplete="off" />
            </Fieldset>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-1/2 mr-6 mobile:w-full">
            <Birthday />
          </div>
          <div className="w-1/2 tablet:mt-4 mobile:w-full">
            <Fieldset name="job" label="Pozitie in cadrul companiei">
              <Field id="job" name="job" as={Input} autoComplete="off" />
            </Fieldset>
          </div>
        </div>
        <Fieldset name="email" label="E-mail">
          <Field id="email" name="email" as={Email} autoComplete="new-email" />
        </Fieldset>
        <div className="flex flex-row mobile:flex-col">
          <div className="w-1/2 mr-6 mobile:w-full">
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
          <div className="w-1/2 mobile:mt-4 mobile:w-full">
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
        <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
          <Link href="/admin/technical-people">
            <a className="back text-center">
              <i className="fas fa-arrow-left"></i>
              <span className="ml-2">înapoi la persoane</span>
            </a>
          </Link>
          <Submit className="confirm grow">
            <i className="fas fa-plus"></i>
            <span className="ml-2">Adauga persoana</span>
          </Submit>
        </div>
      </Form>
    </Formik>
  )
}

export default PersonForm;
