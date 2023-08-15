import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-3 flex w-[30px] sm:w-[35px] items-center justify-center ">
          {icon}
        </div>
        <h3 className="mb-2 text-xl sm:text-2xl text-darkBlue font-bold">
          {title}
        </h3>
        <p className="pr-[10px] text-base sm:text-xl font-light text-darkBlue leading-tight">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
