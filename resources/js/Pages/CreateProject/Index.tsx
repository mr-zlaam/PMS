import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
type Status = "in_progress" | "pending" | "completed";
interface FormData {
  name: string;
  description: string;
  due_date: string;
  status: Status; // Use enum or union type for status
  image_url: string;
}

function CreateProject() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    due_date: "",
    status: "in_progress",
    image_url: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { description, due_date, image_url, name, status } = formData
    console.log(description, due_date, image_url, name, status);
  }
  return (
    <AuthenticatedLayout>
      <Head title="CreateProject" />
      <section className="text-[#ffffff] p-2">
        <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto bg-[#1F2938] rounded-lg  p-5 relative top-10">
          <div className="my-2">
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextInput
              id="name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              className="w-full"
              placeholder="Name..."
            />
          </div>
          <div className="my-1">
            <InputLabel htmlFor="description">Description</InputLabel>
            <textarea
              id="description"

              value={formData.description}
              onChange={handleChange}
              name="description"
              className="w-full border-[1px] border-[#6D727F]/50 bg-[#111828] rounded resize-x-none"
              placeholder="Description..."
            />
          </div>

          <div className="my-1">
            <InputLabel htmlFor="due_date">Due Date</InputLabel>
            <TextInput
              id="due_date"
              value={formData.due_date}
              onChange={handleChange}
              name="due_date"
              type="date"
              className="w-full"
              placeholder="Name..."
            />
          </div>
          <div className="my-1">
            <InputLabel htmlFor="status">Status</InputLabel>
            <select
              value={formData.status}
              onChange={handleChange}
              className="border-[#6D727F]/50 bg-[#111828] w-full rounded-md" name="status" id="status" >
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="in_progress">In Progress</option>
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="pending">Pending</option>
              <option className="border-[#6D727F]/50 bg-[#111828] rounded" value="completed">Completed</option>
            </select>
          </div>
          <div className="my-1">
            <InputLabel htmlFor="image_url">Image URI</InputLabel>
            <TextInput
              id="image_url"
              value={formData.image_url}
              onChange={handleChange}
              name="image_url"
              type="url"
              className="w-full"
              placeholder="Image URI..."
            />
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
