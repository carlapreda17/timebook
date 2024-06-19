import { Form } from '../../components/Formik';
import { Submit } from '../Formik';
import ProjectFields from './ProjectFields';

const ProjectForm = ({submitText}) => {
  return (
    <Form className="space-y-4" >
      <ProjectFields.ProjectName />
      <div className="flex gap-6 dark:text-slate-300">
        <ProjectFields.ProjectActive defaultChecked={true} />
        <ProjectFields.ProjectImportant />
        <ProjectFields.ProjectUrgent />
      </div>
      <ProjectFields.ProjectDescription />
      <ProjectFields.ProjectStatus />
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4">
        <div className="col-span-7">
          <ProjectFields.ProjectIcon />
        </div>
        <div className="max-w-fit sm:col-span-5">
          <ProjectFields.ProjectColor />
        </div>
      </div>
      <Submit className="w-full text-base px-6">{submitText}</Submit>
    </Form>
  );
};

export default ProjectForm;
