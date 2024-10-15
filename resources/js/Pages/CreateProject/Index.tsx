import Dropdown from "@/Components/Dropdown";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {} from "react";

function CreateTask() {
  return (
    <AuthenticatedLayout>
      <Head title="CreateProject" />
      <section className="text-[#ffffff] p-2">
        <h1>Hello worl</h1>
        <div className="max-w-[480px] mx-auto bg-[#1F2938] rounded  p-5 relative top-10">
          <div>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextInput
              id="name"
              name="name"
              type="text"
              className="w-full"
              placeholder="Name..."
            />
          </div>
          <div>
            <InputLabel htmlFor="description">Description</InputLabel>
            <textarea
              id="description"
              name="description"
              className="w-full border-[1px] border-[#6D727F]/50 bg-[#111828] rounded resize-x-none"
              placeholder="Description..."
            />
          </div>

          <div>
            <InputLabel htmlFor="due_date">Due Date</InputLabel>
            <TextInput
              id="due_date"
              name="due_date"
              type="date"
              className="w-full"
              placeholder="Name..."
            />
          </div>
          <div>
            <InputLabel htmlFor="status">Status</InputLabel>

            <Dropdown>
              <Dropdown.Trigger>
                <button
                  type="button"
                  // className='block w-full'
                  className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 "
                >
                  Select
                </button>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link
                  href={route("profile.edit")}
                >
                  Profile
                </Dropdown.Link>
                <Dropdown.Link
                  href={route("logout")}
                  method="post"
                  as="button"
                >
                  Log Out
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  );
}

export default CreateTask;
