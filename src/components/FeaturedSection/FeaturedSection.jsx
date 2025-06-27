import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import TaskItem from "../Task/TaskItem";

const FeaturedSection = () => {
  const { darkMode } = useTheme();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://task-tempo.vercel.app/featured")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data || []);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setError("Failed to get fetured tasks!");
        setLoading(false);
        console.error("failed to get featured task", err);
      });
  }, []);

  return (
    <section
      className={`py-10 ${darkMode ? "bg-dark-clr" : "bg-gray-100"} ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
        <p className="text-center text-sm mb-8 opacity-80">
          Browse through our most popular tasks and start bidding today
        </p>

        <p className="text-center text-red-500">{error}</p>

        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5  place-items-center">
              {tasks.map((task) => (
                <TaskItem key={task._id} task={task}></TaskItem>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button href="/browse-task">Browse All Tasks</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
