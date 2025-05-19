const SlideItem = ({ slide }) => {
  const { title, subtitle, cta, image } = slide;

  return (
    <div className="swiper-slide relative">
      <img
        src="https://via.placeholder.com/1200x400?text=Find+Top+Freelancers"
        alt="Banner 1"
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 banner-text">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2">{subtitle}</p>
          <button
            className="mt-4 px-4 py-2 rounded"
            style={{ backgroundColor: "#85A947", color: "#EFE3C2" }}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
