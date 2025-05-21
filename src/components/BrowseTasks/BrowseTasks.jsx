import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const BrowseTasks = () => {
  
  const  {darkMode} = useTheme()
  
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
   <section
      className={`py-10 min-h-screen ${
        darkMode ? "bg-[#3d3737]" : "bg-[#EFE3C2]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Browse All Tasks
        </h2>
        <p
          className={`text-center text-sm mb-10 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Find freelance work that matches your skills and interests.
        </p>

        {tasks.length === 0 ? (
          <p
            className={`text-center py-10 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            No tasks available at the moment.
          </p>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-2.5">
            {tasks.map((task) => (
              <div
                key={task._id}
                className={`inline-block w-full mb-2.5 rounded-lg shadow-md hover:shadow-xl transition-shadow ${
                  darkMode ? "bg-[#171010]" : "bg-white"
                }`}
              >
                <div className="p-5">
                  <div className="inline-flex justify-between items-start mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-md ${
                        darkMode
                          ? "bg-[#362222] text-gray-200"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {task.category}
                    </span>
                    <span
                      className={`text-sm flex items-center ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {task._id.slice(-2)} bids
                    </span>
                  </div>

                  <h3
                    className={`whitespace-normal break-words overflow-hidden text-xl font-semibold mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Posted by: {task.userName}
                  </p>

                  <div
                    className={`flex items-center mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm mr-1">Budget:</span>
                    <span className="font-medium ml-auto">${task.budget}</span>
                  </div>

                  <div
                    className={`flex items-center mb-5 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm mr-1">Deadline:</span>
                    <span className="font-medium ml-auto">
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <Link
                    to={`/details/${task._id}`}
                    className={`mt-4 w-full block text-center py-3 rounded ${
                      darkMode
                        ? "bg-[#423F3E] hover:bg-[#362222]"
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition-colors ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
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




//  <section className="py-10 bg-[#EFE3C2] min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center text-[#123524]">
//           Browse All Tasks
//         </h2>
//         <p className="text-center text-sm text-[#3E7B27] mb-10">
//           Find freelance work that matches your skills and interests.
//         </p>

//         {tasks.length === 0 ? (
//           <p className="text-center text-[#123524]/70 py-10">
//             No tasks available at the moment.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tasks.map((task) => (
//               <div
//                 key={task._id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#85A947]"
//               >
//                 <div className="p-5">
//                   <h3 className="text-xl text-green-700 font-semibold mb-2">
//                     {task.title}
//                   </h3>
//                   <p className="text-sm text-[#3E7B27] mb-1">
//                     Category: {task.category}
//                   </p>
//                   <p className="text-sm text-[#123524] mb-1">
//                     Posted by: {task.userName}
//                   </p>
//                   <p className="text-sm text-[#123524] mb-1">
//                     Budget: ${task.budget}
//                   </p>
//                   <p className="text-xs text-[#123524]/70">
//                     Deadline:{" "}
//                     <span className="font-medium">
//                       {new Date(task.deadline).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </p>
//                   <Link
//                     to={`/details/${task._id}`}
//                     // onClick={() => handleViewDetails(task._id)}
//                     className="mt-4 w-full btn btn-sm rounded-full bg-[#3E7B27] hover:bg-[#85A947] text-[#EFE3C2] border-none transition-colors"
//                   >
//                     See Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>