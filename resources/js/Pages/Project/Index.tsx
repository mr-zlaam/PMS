import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TaskResponse } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { } from "react";

function Index({ projects }: { projects: TaskResponse }) {
  return (
    <>
      <AuthenticatedLayout>
        <Head title="Projects" />
        <div className="py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
                  <thead className="text-xs p-3 text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400  border-b-2  border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-2">ID</th>
                      <th className="px-3 py-2">Name</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Create Date</th>
                      <th className="px-3 py-2">Due Date</th>
                      <th className="px-3 py-2">Image</th>
                      <th className="px-3 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {projects.data.map((data) => (
                      <tr
                        key={data.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-3 py-2">
                          {data.id}
                        </td>
                        <td className="px-3 py-2">
                          {data.name}
                        </td>

                        <td className="px-3 py-2 ">
                          <span
                            className={`${data.status === "pending"
                                ? "bg-red-600"
                                : data.status === "in_progress"
                                  ? "bg-yellow-500 text-gray-700"
                                  : data.status === "completed" &&
                                  "bg-green-500 font-bold text-gray-800"
                              } inline-block px-3 py-1.5 rounded-full`}
                          >
                            {data.status === "pending"
                              ? "Pending"
                              : data.status === "in_progress"
                                ? "In Progress"
                                : "Completed"}
                          </span>
                        </td>

                        <td className="px-3 py-2">
                          {data.created_at}
                        </td>
                        <td className="px-3 py-2">
                          {data.due_date}
                        </td>
                        <td className="px-3 py-2">
                          <img
                            src={data.image_path}
                            className="w-10 h-10 rounded-full"
                            alt={data.name}
                          />
                        </td>
                        <td className="px-3 py-2 flex gap-5">
                          <Link
                            href={route("project.edit", data.id)}
                            className="font-medium text-blue-600 hover:text-blue-500 underline"
                          >
                            Edit
                          </Link>
                          <Link
                            href={route("project.destroy", data.id)}
                            className="font-medium text-red-600 hover:text-blue-500 underline"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination links={projects.links} />
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Index;
