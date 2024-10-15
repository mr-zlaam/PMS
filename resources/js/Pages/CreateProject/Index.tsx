import Dropdown from '@/Components/Dropdown';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { } from 'react';

function CreateTask() {
  return (
    <AuthenticatedLayout>
      <Head title='CreateProject' />
      <section className='text-[#ffffff] p-2'>
        <h1>Hello worl</h1>
        <div className='max-w-[480px] mx-auto bg-[#1F2938] rounded  p-5 relative top-10'>
          <div>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <TextInput id='name' name='name' type='text' className='w-full' placeholder='Name...' />
          </div>
          <div>
            <InputLabel htmlFor='description'>Description</InputLabel>
            <textarea id='description' name='description' className='w-full border-[1px] border-[#6D727F]/50 bg-[#111828] rounded resize-x-none' placeholder='Description...' />
          </div>

          <div>
            <InputLabel htmlFor='due_date'>Due Date</InputLabel>
            <TextInput id='due_date' name='due_date' type='date' className='w-full' placeholder='Name...' />
          </div>
          <div>


            <InputLabel htmlFor='status'>Status</InputLabel>
            <select name="status" id="status">
              <option value="complete"></option>
            </select>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  );
}

export default CreateTask;