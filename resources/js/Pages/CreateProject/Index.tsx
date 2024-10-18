import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
type Status = "in_progress" | "pending" | "completed";
interface FormData {
  name: string;
  description: string;
  due_date: string;
  status: Status; // Use enum or union type for status
  image_url: string;
  created_by: 1,
}

function CreateProject() {
  const { errors, post, setData, reset, data } = useForm<FormData>({
    name: "",
    description: "",
    due_date: "",
    status: "in_progress",
    image_url: "",
    created_by: 1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const response = post(route("project.store"))
    console.log(response);
    if (!errors) history.go(-1)
    return reset()


  }



  return (
    <AuthenticatedLayout>
      <Head title="CreateProject" />
      <section className="text-[#ffffff] p-2">
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto bg-[#1F2938] rounded-lg  p-5 relative top-10">
          <div className="my-2">
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextInput
              required
              id="name"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              name="name"
              type="text"
              className="w-full"
              placeholder="Name..."
            />
            <InputError message={errors.name} className="" />
          </div>
          <div className="my-1">
            <InputLabel htmlFor="description">Description</InputLabel>
            <textarea
              required
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              name="description"
              className="w-full border-[1px] border-[#6D727F]/50 bg-[#111828] rounded resize-x-none"
              placeholder="Description..."
            />
            <InputError message={errors.description} />
          </div>

          <div className="my-1">
            <InputLabel htmlFor="due_date">Due Date</InputLabel>
            <TextInput
              required
              id="due_date"
              value={data.due_date}
              onChange={(e) => setData('due_date', e.target.value)}
              name="due_date"
              type="date"
              className="w-full"
              placeholder="Name..."
            />
            <InputError message={errors.due_date} />
          </div>
          <div className="my-1">
            <InputLabel htmlFor="status">Status</InputLabel>
            <select
              required
              value={data.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData('status', e.target.value as Status)}
              className="border-[#6D727F]/50 bg-[#111828] w-full rounded-md" name="status" id="status" >
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="in_progress">In Progress</option>
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="pending">Pending</option>
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="completed">Completed</option>
            </select>
            <InputError message={errors.status} />
          </div>
          <div className="my-1">
            <InputLabel htmlFor="image_url">Image URI</InputLabel>
            <TextInput
              required
              id="image_url"
              value={data.image_url}
              onChange={(e) => setData('image_url', e.target.value)}
              name="image_url"
              type="url"
              className="w-full"
              placeholder="Image URI..."
            />
            <InputError message={errors.image_url} />
          </div>
          <div className="flex items-center justify-end">
            <button type="submit" className="bg-white/80 text-black/90 rounded py-2 px-4 active:scale-90 duration-200 transition-transform m-3">Create Project</button>
          </div>
        </form>
      </section>
    </AuthenticatedLayout>
  );
}

export default CreateProject;
