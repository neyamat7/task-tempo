const tasks = [
  {
    id: 1,
    title: "Design Logo for Startup",
    deadline: "2025-04-06",
    category: "Graphic Design",
    price: "$150",
  },
  {
    id: 2,
    title: "Write Product Description",
    deadline: "2025-04-07",
    category: "Content Writing",
    price: "$80",
  },
  {
    id: 3,
    title: "Build Landing Page",
    deadline: "2025-04-08",
    category: "Web Development",
    price: "$400",
  },
  {
    id: 4,
    title: "Edit Short Video",
    deadline: "2025-04-09",
    category: "Video Editing",
    price: "$120",
  },
  {
    id: 5,
    title: "SEO Audit for E-commerce Site",
    deadline: "2025-04-10",
    category: "SEO",
    price: "$250",
  },
  {
    id: 6,
    title: "Create Social Media Post Series",
    deadline: "2025-04-11",
    category: "Social Media",
    price: "$90",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-10 bg-[#EFE3C2] text-[#123524]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
        <p className="text-center text-sm mb-8 text-[#3E7B27]">
          Find the most urgent freelance work available right now
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#85A947]"
            >
              <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
              <p className="text-sm text-[#3E7B27] mb-1">
                Category: {task.category}
              </p>
              <p className="text-sm text-[#123524] mb-3">Price: {task.price}</p>
              <p className="text-xs text-[#123524]/70">
                Deadline:{" "}
                <span className="font-medium text-[#123524]">
                  {new Date(task.deadline).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
              <button className="mt-4 w-full btn btn-sm rounded-full bg-[#3E7B27] hover:bg-[#85A947] text-[#EFE3C2] border-none transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
