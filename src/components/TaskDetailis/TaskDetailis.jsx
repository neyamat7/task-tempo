import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../context/AuthContext/AuthContext";

const TaskDetails = () => {
  const { bids, user, setBids } = useAuth();

  const { taskId } = useParams();
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    setCurrentBids(bids);
  }, [user, bids]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(
          `https://freelance-task-deploy-server.vercel.app/${taskId}`
        );
        const data = await res.json();

        setTimeout(() => {
          setTask(data);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  function updateTaskBids(taskId) {
    if (task.bids.includes(user.uid)) {
      return;
    }

    const addNewBids = [...task.bids, user.uid];
    const newAddedBids = {
      bids: addNewBids,
    };

    fetch(`https://freelance-task-deploy-server.vercel.app/${taskId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedBids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        throw new Error("update bids on task failed");
      });
  }

  const handleBidClick = (taskId) => {
    if (bids.length && bids.includes(taskId)) {
      alert("you already have bid this task");
      return;
    }

    const updatedBids = [...bids, taskId];
    const updateThings = {
      email: user.email,
      bids: updatedBids,
    };

    fetch("https://freelance-task-deploy-server.vercel.app/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateThings),
    })
      .then((res) => res.json())
      .then((data) => {
        updateTaskBids(taskId);
        setBids(updatedBids);
      });

    alert("Your bid has been placed!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-[#85A947]"></span>
      </div>
    );
  }

  return (
    <section className="pb-12 pt-5 bg-[#EFE3C2] min-h-screen">
      {/* Top Banner */}
      {currentBids.length > 0 && (
        <div className="px-5 md:px-2  max-w-[992px] mx-auto mb-2">
          <div className="bg-[#3E7B27] text-white py-3 text-center max-w-[992px] mx-auto rounded-lg">
            <p className="text-sm md:text-base">
              You bid for{" "}
              <span className="font-bold">{currentBids.length}</span> opportunit
              {currentBids.length !== 1 ? "ies" : "y"}
            </p>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 ">
        {/* Task Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-[#85A947]/20 hover:shadow-xl transition-shadow">
          {/* Image Section */}
          <div className="mb-8 overflow-hidden rounded-lg shadow-md max-h-[500px] flex justify-center">
            <img
              //   src={task.imageUrl}
              src="https://thumbs.dreamstime.com/b/freelance-young-woman-shocked-tasks-searches-information-freelance-young-woman-shocked-tasks-searches-information-ponders-177342365.jpg"
              alt={`Preview of ${task.title}`}
              className="w-full h-full mx-auto object-cover border"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 text-[#123524]">
            {task.title}
          </h2>

          {/* Tags / Meta Info */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="badge badge-sm badge-outline border-[#85A947] text-[#85A947]">
              {task.category}
            </span>
            <span className="badge badge-sm badge-outline border-[#3E7B27] text-[#3E7B27]">
              Budget: ${task.budget}
            </span>
            <span className="badge badge-sm badge-outline border-[#123524] text-[#123524]">
              Posted by: {task.userName}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-[#123524] mb-2">
              Description
            </h3>
            <p className="text-[#123524]/80 whitespace-pre-line">
              {task.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
            <div className="bg-[#EFE3C2]/50 p-4 rounded-md border border-[#85A947]/20">
              <p className="text-xs uppercase text-[#3E7B27] font-medium">
                Deadline
              </p>
              <p className="text-[#123524] mt-1">
                {new Date(task.deadline).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="bg-[#EFE3C2]/50 p-4 rounded-md border border-[#85A947]/20">
              <p className="text-xs uppercase text-[#3E7B27] font-medium">
                Posted On
              </p>
              <p className="text-[#123524] mt-1">
                {new Date(task.postedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleBidClick(task._id)}
              className="btn btn-lg rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-white w-full sm:w-auto transition-colors border border-[#85A947]"
            >
              Bid for this Task
            </button>
          </div>
        </div>

        {/* Additional Info Box */}
        <div className="mt-8 bg-[#123524] text-[#EFE3C2] p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">Tips for Applying</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#EFE3C2]/80">
            <li>Personalize your message to match the task description.</li>
            <li>Include samples of relevant work in your portfolio.</li>
            <li>
              Respond quickly — faster responses often get more attention.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
