const MyPostedTasksTable = () => {
  const tasks = [
    {
      id: 1,
      category: "Graphic Design",
      deadline: "2025-04-20",
      budget: "$150",
      bids: 3,
      description: "Create Social Media Posts Marketing",
    },
    {
      id: 2,
      category: "Writing",
      deadline: "2025-04-22",
      budget: "$80",
      bids: 1,
      description: "Write Blog Articles",
    },
    {
      id: 3,
      category: "Marketing",
      deadline: "2025-04-25",
      budget: "$90",
      bids: 0,
      description: "Analyze Market Trends",
    },
  ];

  return (
    <div className="bg-[#EFE3C2] rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#85A947]/10 text-[#123524]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Deadline
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Budget
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider"
            >
              Bids
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-sm font-medium uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#123524]">
                {task.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#123524]">
                {task.deadline}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#123524]">
                {task.budget}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#123524]">
                <span className="badge badge-sm bg-[#85A947]/20 text-[#85A947]">
                  {task.bids} bid{task.bids !== 1 ? "s" : ""}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="btn btn-xs rounded-full bg-[#85A947] hover:bg-[#3E7B27] text-white mr-2">
                  Update
                </button>
                <button className="btn btn-xs rounded-full bg-red-500 hover:bg-red-600 text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedTasksTable;
