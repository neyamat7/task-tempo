import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const FeaturedSection = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/featured")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data || []);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError("Failed to get fetured tasks!");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-10 bg-[#EFE3C2] text-[#123524]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
        <p className="text-center text-sm mb-8 text-[#3E7B27]">
          Find the most urgent freelance work available right now
        </p>

        <p className="text-center text-red-500">{error}</p>

        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#85A947]"
              >
                <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
                <p className="text-sm text-[#3E7B27] mb-1">
                  Category: {task.category}
                </p>
                <p className="text-sm text-[#123524] mb-3">
                  Budget: ${task.budget}
                </p>
                <p className="text-sm text-[#123524]/70">
                  Deadline:{" "}
                  <span className="font-medium text-[#123524]">
                    {new Date(task.deadline).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </p>
                <Link
                  to={`/details/${task._id}`}
                  className="mt-4 w-full btn btn-sm rounded-full bg-[#3E7B27] hover:bg-[#85A947] text-[#EFE3C2] border-none transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
