const AboutUs = () => {
  return (
    <section className="py-10 bg-[#123524] text-[#EFE3C2]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="mb-8 max-w-2xl mx-auto text-[#EFE3C2]/80">
          We make it easy for clients to find skilled freelancers and for freelancers to earn doing what they love.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#123524] border border-[#85A947]/30 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#85A947]">Fast & Flexible</h3>
            <p>Post or apply for short-term or long-term tasks — your way.</p>
          </div>
          <div className="p-5 bg-[#123524] border border-[#85A947]/30 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#85A947]">Secure Payments</h3>
            <p>Get paid safely through our escrow system when work is completed.</p>
          </div>
          <div className="p-5 bg-[#123524] border border-[#85A947]/30 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2 text-[#85A947]">Trusted Community</h3>
            <p>Join thousands of verified users building real connections and results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;