import Link from 'next/link';
import React from 'react';

const SeePersonStatsButton = ({ id }) => {
  return (
    <Link href={`/admin/technical-people/${id}/stats`}>
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 rounded-full px-4 ml-2">
        <i className="fa-solid fa-chart-simple" />
      </a>
    </Link>
  );
};

export default SeePersonStatsButton;
