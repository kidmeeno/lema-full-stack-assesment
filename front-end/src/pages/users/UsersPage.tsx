import React, { useEffect, useState } from 'react';
import { useGetUsers } from '../../api/useGetUsers';
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';
import UserTable from '../../components/UserTable';
import { useNavigate } from 'react-router-dom';

export default function UsersPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 4;

  const { data, isLoading, refetch, isFetching } = useGetUsers(page, limit);

  useEffect(() => {
    if (page) refetch();
  }, [page]);

  const totalPages = data ? Math.ceil(data.total / limit) : 1;

  const handleUserClick = (userId: number) => {
    navigate(`/${userId}`);
  };

  if (isLoading) return <Loader />;

  return (
    <div className='max-w-4xl mx-auto mt-10 p-4 font-inter'>
      <h1 className='text-2xl text-[60px] leading-[72px] font-medium tracking-[-0.02em] mb-[24px]'>
        Users
      </h1>
      {data && (
        <>
          <UserTable
            data={data}
            isFetching={isFetching}
            onUserClick={handleUserClick}
          />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page) => setPage(page)}
          />
        </>
      )}
    </div>
  );
}
