import { Links } from '@/types';
import { Link } from '@inertiajs/react';
import { } from 'react';

function Pagination({ links }: { links: Links }) {

  return (
    <>
      <nav className='text-center mt-4'>
        <div className='flex justify-around items-center'>
          <Link preserveScroll className={`${links.prev === null ? 'bg-gray-500 cursor-default' : 'bg-blue-500'} px-4 py-2 bg-blue-500 text-white rounded-md`} disabled={links.prev === null} href={links.prev ?? ''} >Prev </Link>
          <Link preserveScroll className={`${links.next === null ? 'bg-gray-500 cursor-default' : 'bg-blue-500'} px-4 py-2 bg-blue-500 text-white rounded-md`} disabled={links.next === null} href={links.next ?? ''}>Next</Link>
        </div>
      </nav>
    </>
  );
}

export default Pagination;