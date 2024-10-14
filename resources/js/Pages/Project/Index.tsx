import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TaskResponse } from '@/types';
import { Head } from '@inertiajs/react';
import { } from 'react';

function Index({ projects }: { projects: TaskResponse }) {
  return (
    <>
      <pre>

        {
          JSON.stringify(projects, undefined, 2)
        }
      </pre>
      <AuthenticatedLayout
        header={
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Projects
          </h2>}

      >
        <Head title='Projects' />
        <div className="py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
              <div className="p-6 text-gray-900 dark:text-gray-100">
                Projects
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Index;