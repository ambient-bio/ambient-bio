import SectionTitle from "./SectionTitle";
import SingleFeature from "./SingleFeature";
import { Feature } from "@/types/feature";

const FeatureTemplate = ({ title, featureData }: { title: string, featureData: Feature[] }) => {
  return (
    <>
      <section
        id={title}
        className="bg-offWhite py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={title}
          />
          <div className="grid grid-cols-1 gap-x-32 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featureData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTemplate;
