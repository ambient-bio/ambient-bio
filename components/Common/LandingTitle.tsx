const LandingTitle = ({
  title,
  paragraph,
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ marginBottom: mb }}
      >
        <h2 className="mt-32 mb-4 text-5xl md:text-6xl xl:text-7xl font-bold  text-darkBlue ">
          {title}
        </h2>
        <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-light text-darkBlue">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default LandingTitle;