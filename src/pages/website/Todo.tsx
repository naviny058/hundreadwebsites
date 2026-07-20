import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { cn } from "../../libs/utils";

interface TodoItem {
  id: string;
  todo: string;
  status: "completed" | "pending";
  time?: string;
}

const initialTodos: TodoItem[] = [
  { id: "1", todo: "Workout", status: "completed", time: "6:30pm" },
  { id: "2", todo: "Daily Design sprint", status: "completed", time: "9:30pm" },
  { id: "4", todo: "Daily coding", status: "pending", time: "4:30pm" },
];

type Filter = "all" | "completed" | "pending";

function Todo() {
  const filters = ["all", "completed", "pending"] as const;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [todoList, setTodoList] = useState<TodoItem[]>(initialTodos);

  const filterTodo =
    filter === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === filter);

  function addTodo(todoText: string) {
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      todo: todoText,
      status: "pending",
      time: "23 july",
    };
    setTodoList((prev) => [...prev, newTodo]);
  }

  function toggleStatus(id: string) {
    setTodoList((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "completed" ? "pending" : "completed" }
          : t,
      ),
    );
  }

  return (
    <section className="relative h-screen w-full">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mt-10 w-80 rounded-3xl p-4 shadow-2xl transition-all duration-700 ease-in-out">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tighter">
              Today's To Do
            </h1>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <MdCalendarMonth />
            <span className="capitalize"> sat 20 july, 2026</span>
          </div>

          <div className="my-5 flex items-center justify-between rounded-xl bg-gray-100 p-2">
            {filters.map((item) => (
              <button
                key={item}
                className={cn(
                  "rounded-md px-4 py-2 capitalize transition",
                  filter === item && "bg-white shadow-sm",
                )}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filterTodo
              .map((t) => (
                <div
                  key={t.id}
                  className={cn(
                    "flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2",
                    t.status === "completed" && "opacity-60",
                  )}
                >
                  <div>
                    <h2
                      className={cn(
                        "text-sm font-semibold",
                        t.status === "completed" && "line-through",
                      )}
                    >
                      {t.todo}
                    </h2>
                    <p className="text-xs text-gray-600">{t.time}</p>
                  </div>
                  <div>
                    <input
                      checked={t.status === "completed"}
                      onChange={() => toggleStatus(t.id)}
                      type="checkbox"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))
              .reverse()}
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="my-4 flex w-full items-center gap-4 rounded-lg border border-dashed border-gray-500 bg-gray-100 px-4 py-2 text-sm text-gray-400 transition hover:bg-gray-200"
          >
            <BiPlus />
            <span>Add New task</span>
          </button>
        </div>
      </div>

      {isFormOpen && (
        <CreateTodoForm onClose={() => setIsFormOpen(false)} onAdd={addTodo} />
      )}
    </section>
  );
}

interface CreateTodoFormProps {
  onAdd: (todo: string) => void;
  onClose: () => void;
}

function CreateTodoForm({ onAdd, onClose }: CreateTodoFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;

    onAdd(value.trim());
    setValue("");
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <form
        onSubmit={handleSubmit}
        className="w-80 rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-4 text-lg font-bold">Add Task</h2>
        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter a new Todo"
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Todo;
