const testimonials = [
  {
    name: "Alex M.",
    role: "Startup Founder",
    comment:
      "Found an amazing designer in just one day. Delivered exactly what I needed!",
  },
  {
    name: "Samantha L.",
    role: "Freelance Writer",
    comment:
      "I've earned over $3000 in the past month. The platform is simple and fast.",
  },
  {
    name: "Rajiv P.",
    role: "Marketing Manager",
    comment:
      "The best place to outsource small digital tasks without hiring full-time.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-[#EFE3C2] text-[#123524]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Are Saying</h2>
        <p className="mb-8 max-w-2xl mx-auto text-[#123524]/80">
          Real stories from clients and freelancers who have found success with
          us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-lg shadow-md border-l-4 border-[#85A947]"
            >
              <p className="italic mb-4">"{testimonial.comment}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-[#3E7B27]">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
