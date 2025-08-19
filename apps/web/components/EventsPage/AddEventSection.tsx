import { useEventStore } from '@/store/useEventStore';
import { SubmitHandler, useForm } from 'react-hook-form'

export interface IEvents {
  name: string;
  date: Date;
}

const AddEventSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IEvents>()
  const addEvent = useEventStore((state) => state.addEvent);

  const onSubmit: SubmitHandler<IEvents> = (data) => {
    console.log(data)
    addEvent({ id: Date.now().toString(), ...data });
  }

  return (
    <section className='my-4 md:my-10 px-[10%]'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full max-w-md mx-auto'>
        <label className='mb-4'>
          Enter Event Name
          <input className='w-full border-1 p-2' type='text'  {...register("name", { required: true })} />
          {errors.name && <span className='text-red-600'>Event name is required</span>}
        </label>
        <label>
          Select Event Date
          <input className='w-full border-1 p-2' type='date' {...register("date", {
            required: true,
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Enter date in YYYY-MM-DD format",
            },
          })} />
          {errors.date && <span className='text-red-600'>Event Date is required</span>}
        </label>

        <input type="submit" value="Create Event" className='mt-4 py-2 rounded-sm text-white bg-green-600 hover:bg-green-400 cursor-pointer' />
      </form>

    </section>
  )
}

export default AddEventSection