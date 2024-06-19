import { Button } from 'react-bootstrap';
import { Input, Checkbox, Textarea } from '../Fields';

const UpdateProjectFormLoading = () => {
  return (
    <div className="card max-w-md">
      <form className="space-y-4">
        <label className="w-full">
          Numele proiectului
          <Input
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
            disabled
          />
        </label>
        <div className="flex gap-6">
          <Checkbox className="form-checkbox rounded-full" disabled>
            <div>Activ</div>
          </Checkbox>
          <Checkbox className="form-checkbox rounded-full" disabled>
            <div>Important</div>
          </Checkbox>
          <Checkbox className="form-checkbox rounded-full" disabled>
            <div>Urgent</div>
          </Checkbox>
        </div>
        <label className="w-full">
          Descrierea proiectului
          <Textarea className="form-input rounded bg-gray-200 animate-pulse" disabled></Textarea>
        </label>
        <label className="w-full">
          Status
          <Input
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
            disabled
          />
        </label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7">
            <label className="w-full">
              Imaginea proiectului
              <Input
                className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
                disabled
              />
            </label>
          </div>
          <div className="col-span-5">
            <label className="w-full">
              Culoarea proiectului
              <Input
                className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
                disabled
              />
            </label>
          </div>
        </div>
        <Button className="confirm">Actualizeaza</Button>
      </form>
    </div>
  );
};

export default UpdateProjectFormLoading;
