import { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../context/AuthContext/AuthContext";

const MyPostedTasksTable = () => {
  const { user, setBids } = useAuth();
  console.log(user?.uid);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userUid = user?.uid;

    const fetchTasks = async () => {
      try {
        // Replace this with actual API call
        const res = await fetch(`http://localhost:3000/user-tasks/${userUid}`);
        const data = await res.json();

        setTasks(data);
        setLoading(false);
        // setTimeout(() => {
        //   setTasks(data);
        //   setLoading(false);
        // }, 800);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user]);

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
        const res = await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
        });
        console.log(res);
        if (res.ok) {
          setTasks(tasks.filter((singleTask) => singleTask._id !== taskId));

          setBids((prevBids) => {
            return prevBids.filter((prevId) => prevId !== taskId);
          });

          Swal.fire("Deleted!", "Product has been deleted.", "success");
        } else {
          Swal.fire("Error", "Failed to delete product.", "error");
        }
      } catch (err) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(err);
      }
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-[#85A947]"></span>
      </div>
    );
  }

  return (
    <section className="py-10 bg-[#EFE3C2]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
          My Posted Tasks
        </h2>
        <p className="text-center text-sm text-[#3E7B27] mb-8">
          Manage your posted tasks and track their progress.
        </p>

        {tasks.length < 1 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#EFE3C2]/30 rounded-xl border border-[#85A947]/20 mx-4">
            <FaRegLightbulb className="text-[#85A947] text-4xl mb-3" />
            <p className="text-center text-[#123524]/90 text-lg md:text-xl font-medium">
              No tasks available at the moment.
            </p>
          </div>
        ) : (
          <>
            <div className="hidden sm:block overflow-x-auto rounded-lg shadow-md border border-[#85A947]/20">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#85A947]/10 text-[#123524]">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Bids
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-medium uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <tr
                      key={task._id}
                      className="hover:bg-[#EFE3C2]/10 transition-colors"
                    >
                      <td className="px-6  py-4 text-md font-medium  text-[#123524]">
                        {task.title}
                      </td>
                      <td className="px-6  py-4 whitespace-nowrap text-md font-medium  text-[#123524]">
                        {new Date(task.deadline).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6  py-4 whitespace-nowrap text-md font-medium text-[#123524]">
                        {task.budget}
                      </td>
                      <td className="px-3   py-4 whitespace-nowrap text-sm text-[#123524] ">
                        <span className="btn btn-sm rounded-full border-none bg-[#85A947]/20 text-[#3b4c1d] text-base p-3 min-w-[70px]">
                          {task.bids.length} bid
                          {task.bids.length !== 1 && task.bids.length > 0
                            ? "s"
                            : ""}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                        <Link
                          to={`/update/${task._id}`}
                          className="btn btn-sm border-none rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-white"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDeleteTask(task._id)}
                          className="btn btn-sm border-none rounded-full bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden space-y-4">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="bg-white p-5 rounded-lg shadow-md border-l-4 border-[#85A947] hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col justify-between gap-10">
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="text-base text-[#3E7B27]">Title:</span>
                        <p className="font-medium text-[#123524]">
                          {task.title}
                        </p>
                      </div>

                      <div>
                        <span className="text-base text-[#3E7B27]">
                          Deadline:
                        </span>
                        <p className="text-[#123524]">
                          {new Date(task.deadline).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      <div>
                        <span className="text-base text-[#3E7B27]">
                          Budget:
                        </span>
                        <p className="text-[#123524]">{task.budget}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="btn btn-sm rounded-full border-none bg-[#85A947]/20 text-[#3b4c1d] text-base p-3 min-w-[70px]">
                          {task.bids.length} bid
                          {task.bids.length !== 1 && task.bids.length > 0
                            ? "s"
                            : ""}
                        </span>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/update/${task._id}`}
                          className="btn btn-sm border-none rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-white"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDeleteTask(task._id)}
                          className="btn btn-sm border-none rounded-full bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyPostedTasksTable;
