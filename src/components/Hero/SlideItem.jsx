import { Link } from "react-router";

const SlideItem = ({ slide }) => {
  const { title, subtitle, image } = slide;

  return (
    <div className="swiper-slide relative w-full h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171010]/80 to-transparent z-10"></div>

      <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-2 text-white">{subtitle}</p>
          <Link
            to="/browse-task"
            className="btn mt-4 px-6 py-2.5  text-sm font-medium shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-green-800 rounded-md border-none"
          >
            Browse Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
