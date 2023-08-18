import { Audience } from "@/types/audience";

const SingleAudience = ({ audience }: { audience: Audience }) => {
  const { title, paragraph } = audience;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <h3 className="mb-2 text-xl sm:text-2xl text-offWhite font-bold">
          {title}
        </h3>
        <p className="pr-[10px] text-base sm:text-xl font-light text-offWhite leading-tight">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleAudience;
