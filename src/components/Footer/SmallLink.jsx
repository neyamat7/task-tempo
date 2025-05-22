const SmallLink = ({ children, href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center bg-card-clr text-white rounded-full hover:bg-[#423F3E] transition-colors"
    >
      {children}
    </a>
  );
};

export default SmallLink;
