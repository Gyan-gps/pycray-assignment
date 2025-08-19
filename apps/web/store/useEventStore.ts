import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  id: string;
  name: string;
  date: Date;
}

interface IEventState {
  events: Event[];
  addEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
}

export const useEventStore = create<IEventState>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      removeEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "event-storage",
    }
  )
);
