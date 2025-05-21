import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Replace this with actual API call
        const res = await fetch("https://task-tempo.vercel.app/tasks");
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
  }, []);

  // const handleViewDetails = (taskId) => {
  //   navigate(`/details/${taskId}`);
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-[#85A947]"></span>
      </div>
    );
  }

  return (
    <section className="py-10 bg-[#EFE3C2] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
          Browse All Tasks
        </h2>
        <p className="text-center text-sm text-[#3E7B27] mb-10">
          Find freelance work that matches your skills and interests.
        </p>

        {tasks.length === 0 ? (
          <p className="text-center text-[#123524]/70 py-10">
            No tasks available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#85A947]"
              >
                <div className="p-5">
                  <h3 className="text-xl text-green-700 font-semibold mb-2">
                    {task.title}
                  </h3>
                  <p className="text-sm text-[#3E7B27] mb-1">
                    Category: {task.category}
                  </p>
                  <p className="text-sm text-[#123524] mb-1">
                    Posted by: {task.userName}
                  </p>
                  <p className="text-sm text-[#123524] mb-1">
                    Budget: ${task.budget}
                  </p>
                  <p className="text-xs text-[#123524]/70">
                    Deadline:{" "}
                    <span className="font-medium">
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                  <Link
                    to={`/details/${task._id}`}
                    // onClick={() => handleViewDetails(task._id)}
                    className="mt-4 w-full btn btn-sm rounded-full bg-[#3E7B27] hover:bg-[#85A947] text-[#EFE3C2] border-none transition-colors"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseTasks;
