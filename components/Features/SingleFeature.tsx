import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-3 flex h-[35px] w-[35px] items-center justify-center ">
          {icon}
        </div>
        <h3 className="mb-3 text-xl text-current font-bold sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-current">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
