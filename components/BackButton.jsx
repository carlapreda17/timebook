import { useRouter } from 'next/router';
import React from 'react';
import Button from './Button';

const BackButton = ({ color = 'blue-700' }) => {
  const router = useRouter();
  return (
    <Button className={`text-${color} text-xl`} onClick={() => router.back()}>
      <i className="fas fa-arrow-left mr-2" />
    </Button>
  );
};

export default BackButton;
