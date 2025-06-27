import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading.jsx";
import TaskCard from "../../components/TaskCard/TaskCard.jsx";
import TaskTable from "../../components/TaskTable/TaskTable.jsx";
import { useTheme } from "../../context/ThemeProvider/ThemProvider.jsx";

const AllTasksPage = () => {
  const queryClient = useQueryClient();
  const { darkMode } = useTheme();

  // fetch all tasks
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("https://task-tempo.vercel.app/tasks");
      const data = await res.json();
      return data;
    },
  });

  // delete task
  const { mutate: deleteTask } = useMutation({
    mutationFn: async (taskId) => {
      try {
        const res = await fetch(
          `https://task-tempo.vercel.app/tasks/${taskId}`,
          {
            method: "DELETE",
          }
        );
      } catch (err) {
        console.error(err);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // delete task by id
  async function handleDeleteTask(taskId) {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        deleteTask(taskId);

        Swal.fire("Deleted!", "Task has been deleted.", "success");
      } catch (err) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(err);
      }
    }
  }

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className={`p-8 h-full lg:ml-72 ${darkMode ? "bg-card-clr" : "bg-white"}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-gray-200" : "text-gray-900"
            } mb-2`}
          >
            All Tasks
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Manage all tasks in the system ({tasks.length} total)
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <TaskTable tasks={tasks} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
};

export default AllTasksPage;
