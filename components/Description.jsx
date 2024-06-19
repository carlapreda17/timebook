import toaster from '../lib/toaster';
import FullDescriptionTooltip from './LogbookTable/FullDescriptionTooltip';

const Description = ({ description, limit, copyText = true }) => {
  const handleCopy = (text) => {
    if (!copyText) {
      return;
    }
    toaster.success('Textul a fost copiat cu succes!');
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      {description.length > limit ? (
        <FullDescriptionTooltip description={description}>
          <h3 className="line-clamp-2 py-0.5" onClick={() => handleCopy(description)}>
            {description}
          </h3>
        </FullDescriptionTooltip>
      ) : (
        <h3 className="line-clamp-2 py-0.5" onClick={() => handleCopy(description)}>
          {description}
        </h3>
      )}
    </>
  );
};

export default Description;
