import PersonProfilePageLink from './PersonProfilePageLink';
import PersonProfilePageButton from './PersonProfilePageButton';

const PersonProfilePageButtons = ({ data, show }) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-2.5 w-full">
      <PersonProfilePageLink
        link={`/admin/timesheets/people/${data._id}`}
        classStyle={'border-primary bg-primary'}
        linkText={'Timesheet'}
        iconSymbol={'eye'}
      />
      <PersonProfilePageLink
        link={`/admin/technical-people/${data._id}/stats`}
        classStyle={'border-primary bg-primary'}
        linkText={'Statistici'}
        iconSymbol={'chart-simple'}
      />
      <PersonProfilePageButton
        show={show}
        showValue={'vacation'}
        classStyle={'border-blue-500 bg-blue-600'}
        buttonText={'Concediu'}
        iconSymbol={'plus'}
      />
      <PersonProfilePageLink
        link={`/admin/technical-people/${data._id}/edit`}
        classStyle={'border-secondary bg-secondary'}
        linkText={'Editeaza'}
        iconSymbol={'pen-to-square'}
      />
      {data.active && (
        <PersonProfilePageButton
          show={show}
          showValue={'delete'}
          classStyle={'border-accent bg-accent'}
          buttonText={'Șterge'}
          iconSymbol={'trash'}
        />
      )}
      {!data.active && (
        <PersonProfilePageButton
          show={show}
          showValue={'activate'}
          classStyle={'border-green-700 bg-green-700'}
          buttonText={'Activeaza'}
          iconSymbol={'circle-arrow-up'}
        />
      )}
    </div>
  );
};

export default PersonProfilePageButtons;
