import { useState } from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { taskId } = useParams();

  // Mock task data for demo purposes
  const [task] = useState({
    title: "Design a logo for a new brand",
    category: "Graphic Design",
    description:
      "Create a modern, minimalist logo that reflects the brand's identity. Deliverables include vector files and multiple variations.",
    deadline: "2025-04-15T00:00:00Z",
    budget: 200,
    userName: "Jane Doe",
    userEmail: "jane@example.com",
    postedAt: "2025-03-20T10:00:00Z",
    imageUrl: "/api/placeholder/800/450", // Replace with actual image URL from DB
  });

  const [bidsCount, setBidsCount] = useState(0); // Track number of bids

  // Simulate bidding action
  const handleBidClick = () => {
    setBidsCount((prev) => prev + 1);
    alert("Your bid has been placed!");
  };

  return (
    <section className="py-12 bg-[#EFE3C2] min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#3E7B27] text-white py-3 px-6 text-center">
        <p className="text-sm md:text-base">
          You bid for <span className="font-bold">{bidsCount}</span> opportunity
          {bidsCount !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8">
        {/* Task Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-[#85A947]/20 hover:shadow-xl transition-shadow">
          {/* Image Section */}
          <div className="mb-8 overflow-hidden rounded-lg shadow-md">
            <img
              //   src={task.imageUrl}
              src="https://thumbs.dreamstime.com/b/freelance-young-woman-shocked-tasks-searches-information-freelance-young-woman-shocked-tasks-searches-information-ponders-177342365.jpg"
              alt={`Preview of ${task.title}`}
              className="w-full h-auto object-cover"
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
              onClick={handleBidClick}
              className="btn btn-lg rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-white w-full sm:w-auto transition-colors"
            >
              Bid for this Task
            </button>
            <button
              className="btn btn-lg rounded-full bg-transparent border border-[#85A947] text-[#123524] hover:bg-[#85A947]/10 w-full sm:w-auto transition-colors"
              onClick={() => alert("Message poster functionality goes here")}
            >
              Message Poster
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
