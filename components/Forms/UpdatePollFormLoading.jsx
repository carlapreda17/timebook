import Button from '../Button';
import { Input, Textarea, Select } from '../Fields';

const UpdatePollFormLoading = () => {
  return (
    <form className="flex gap-2">
      <div className="card max-w-md flex flex-col gap-4 h-fit">
        <label className="w-full">
          Titlul sondajului
          <Input
            disabled
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
          />
        </label>
        <label className="w-full">
          Descrierea sondajului
          <Textarea
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
            disabled
          />
        </label>
        <label className="w-full">
          Intrebarea
          <Textarea
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
            disabled
          />
        </label>
        <label className="w-full mb-5">
          Prioritatea sondajului
          <Select
            disabled
            className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
          />
        </label>
        <Button disabled className="button full primary w-full">
          Actualizeaza
        </Button>
      </div>
      <div className="card max-w-md h-fit">
        <div className="relative">
          <div className="flex">
            <Button disabled className="text-black transition ease-in-out rounded absolute right-0">
              <i className="fas fa-plus" />
              <span className="ml-2">Adauga optiune</span>
            </Button>
          </div>

          <label className="w-full">
            Optiuni
            <div className="flex flex-col gap-5 mt-5 w-full">
              <div className="flex gap-4 w-full">
                <Input
                  disabled
                  className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
                />
                <Button
                  disabled
                  type="button"
                  className="border-red border-solid border-1 text-red hover:text-primary transition ease-in-out duration-150 py-2 rounded px-4 bg-red-600"
                >
                  <i className="fas fa-trash text-white" />
                </Button>
              </div>
              <div className="flex gap-4 w-full">
                <Input
                  disabled
                  className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
                />
                <Button
                  disabled
                  type="button"
                  className="border-red border-solid border-1 text-red hover:text-primary transition ease-in-out duration-150 py-2 rounded px-4 bg-red-600"
                >
                  <i className="fas fa-trash text-white" />
                </Button>
              </div>
              <div className="flex gap-4 w-full">
                <Input
                  disabled
                  className="form-input bg-gray-200 rounded animate-pulse w-full border-0"
                />
                <Button
                  disabled
                  type="button"
                  className="border-red border-solid border-1 text-red hover:text-primary transition ease-in-out duration-150 py-2 rounded px-4 bg-red-600"
                >
                  <i className="fas fa-trash text-white" />
                </Button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </form>
  );
};

export default UpdatePollFormLoading;
