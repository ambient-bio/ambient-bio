import SingleAudience from "./SingleAudience";
import audienceData from "./audienceData"

const FeatureTemplate = () => {
  return (
    <>
      <section
        id="Audience"
        className="bg-darkBlue py-16 md:py-20 lg:py-28"
      >
        <div className="container py-6 md:py-8">
          <div className="grid grid-cols-1 gap-x-32 gap-y-14 lg:grid-cols-2">
            {audienceData.map((audience) => (
              <SingleAudience key={audience.id} audience={audience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTemplate;
