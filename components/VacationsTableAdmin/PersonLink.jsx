import Link from 'next/link';

const PersonLink = ({ data }) => {
  const fullName = data?.user?.first_name + ' ' + data?.user?.last_name.toUpperCase();
  return (
    <Link href={`/admin/vacations/${data?.user?._id}`}>
      <span className="w-full font-semibold cursor-pointer hover:text-sky-500">{fullName}</span>
    </Link>
  );
};

export default PersonLink;
