import Link from 'next/link';
import React from 'react';

const PersonProfilePageLink = ({ link, classStyle, linkText, iconSymbol }) => {
  return (
    <Link href={link}>
      <a
        className={`${classStyle} border-solid border-1 text-lg text-white lg:py-12 py-2 rounded text-center whitespace-nowrap`}
      >
        <i className={`fa-solid fa-${iconSymbol}`} />
        <span className="ml-2">{linkText}</span>
      </a>
    </Link>
  );
};

export default PersonProfilePageLink;
