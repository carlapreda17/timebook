import { OpenGraph } from '.';
import * as config from '../site.config';

const AppHead = () => {
  const { description, stylesheets, scripts } = config;
  const showStylesheets = (href) => {
    return <link key={href} rel="stylesheet" href={href} />;
  };
  const showScripts = (src) => {
    return <script key={src} type="text/javascript" src={src}></script>;
  };

  return (
    <>
      <meta name="description" content={description} />
      {stylesheets.map(showStylesheets)}
      {scripts.map(showScripts)}
      <img src="/icons/loading.gif" alt="loading" className="hidden" />
      <OpenGraph />
    </>
  );
};

export default AppHead;
