import SelectedRowsButtons from './SelectedRowsButtons';
import Plural from '../Plural';

const SelectedRowsArea = ({ rows, ...props }) => {
  return (
    <div className="flex flex-col text-white">
      <p className="-mt-2 mb-2 font-bold">
        {<Plural one="rand selectat" many="randuri selectate" count={rows.length} />}
      </p>
      <SelectedRowsButtons activities={rows} {...props} />
    </div>
  );
};

export default SelectedRowsArea;
