import { useEventStore } from '@/store/useEventStore';
import { FarmatDate } from '@/utils/FarmateDate';
import React, { useState } from 'react'
import CommonModal from '../common/CommonModal';

interface IEvent {
  id: string;
  name: string;
  date: Date;
}

const EventsListSection = () => {
  const [isDelete, setIsDelete] = useState<false | IEvent>();
  const events = useEventStore((state) => state.events);
  const removeEvent = useEventStore((state) => state.removeEvent);
  console.log(events)
  return (
    <section className='px-[10%] mt-10 lg:mt-16'>
      <h2 className='text-2xl font-bold'>Your Events</h2>
      {events?.length ? (
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300 min-w-xl max-w-7xl mx-auto">
            <thead className="bg-gray-100">
              <tr className="text-left text-[14px] lg:text-lg font-bold">
                <th className="border border-gray-300 px-4 py-2 lg:w-[60px] whitespace-nowrap">Sr. No.</th>
                <th className="border border-gray-300 px-4 py-2">Event Name</th>
                <th className="border border-gray-300 px-4 py-2">Event Date</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold text-center">
                    {index + 1}.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <p className="font-medium">{event.name}</p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                      {FarmatDate(event?.date?.toString())}
                    </p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => {
                        setIsDelete(event);
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mx-[10%] text-center font-bold text-xl mt-10">
          No events yet.
        </p>
      )}
      {isDelete && (
        <CommonModal
          closeModal={() => setIsDelete(false)}
          modalContent={
            <div className="bg-white rounded shadow-lg p-6 w-[90%] mx-auto md:w-full md:max-w-3xl">
              <h3 className="text-lg font-semibold mb-4">Are you sure you want to remove this event?</h3>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-1/4"
                  onClick={() => setIsDelete(false)}
                >
                  NO
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-1/4"
                  onClick={() => {
                    removeEvent(isDelete.id);
                    setIsDelete(false);
                  }}
                >
                  YES
                </button>
              </div>
            </div>
          }
        />
      )}
    </section>
  )
}

export default EventsListSection