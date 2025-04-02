import "../../Styles/About/AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="relative about-banner">
      {/* Light black overlay */}
      <div className="absolute inset-0 bg-black/72"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl lg:text-5xl font-bold">
        About Us test
      </div>
    </div>
  );
};

export default AboutBanner;
