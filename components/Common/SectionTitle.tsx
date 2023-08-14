const SectionTitle = ({
  title,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-bold !leading-tight text-current text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;
