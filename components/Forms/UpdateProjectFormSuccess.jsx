import { Field, Formik } from 'formik';
import { Form } from '../../components/Formik'
import { useRouter } from 'next/router';
import { updateProject } from '../../api/projects';
import { toaster } from '../../lib';
import { validationSchema } from '../../models/add-project';
import { Checkbox, Input, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import ColorPicker from '../Fields/ColorPicker';

const UpdateProjectFormSuccess = ({ data }) => {
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
    <Formik validationSchema={validationSchema} initialValues={data} onSubmit={handleSubmit}>
      <div className="card max-w-md">
        <Form className="space-y-4" >
          <Fieldset name="name" label="Numele proiectului">
            <Field id="name" name="name" as={Input} autoFocus autoComplete="off" />
          </Fieldset>
          <div className="flex gap-6 dark:text-white">
            <Fieldset name="active" label="">
              <Field
                id="active"
                name="active"
                as={Checkbox}
                className="form-checkbox rounded-full"
                defaultChecked={data.active == true ? true : false}
              >
                <div>Activ</div>
              </Field>
            </Fieldset>
            <Fieldset name="important" label="">
              <Field
                id="important"
                name="important"
                as={Checkbox}
                className="form-checkbox rounded-full"
                defaultChecked={data.important === true ? true : false}
              >
                <div>Important</div>
              </Field>
            </Fieldset>
            <Fieldset name="urgent" label="">
              <Field
                id="urgent"
                name="urgent"
                as={Checkbox}
                className="form-checkbox rounded-full"
                defaultChecked={data.urgent === true ? true : false}
              >
                <div>Urgent</div>
              </Field>
            </Fieldset>
          </div>
          <Fieldset name="description" label="Descrierea proiectului">
            <Field id="description" name="description" as={Textarea} autoComplete="off" />
          </Fieldset>
          <Fieldset name="status" label="Status">
            <Field id="status" name="status" as={Input} autoComplete="off" />
          </Fieldset>
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-7">
              <Fieldset name="icon" label="Imaginea proiectului">
                <Field id="icon" name="icon" as={Input} autoFocus autoComplete="off" />
              </Fieldset>
            </div>
            <div className="max-w-fit sm:col-span-5">
              <Fieldset name="design_color" label="Culoarea proiectului">
                <Field id="design_color" name="design_color" as={ColorPicker} autoComplete="off" />
              </Fieldset>
            </div>
          </div>
          <Submit className="confirm">Actualizează</Submit>
        </Form>
      </div>
    </Formik>
  );
};

export default UpdateProjectFormSuccess;
