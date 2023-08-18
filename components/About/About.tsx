

const About = () => {
  return (
    <section id="about" className="bg-offWhite pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 max-w-[650px]">
              <p className="text-2xl md:text-4xl font-extralight leading-tight text-darkBlue">
                We are an interdisciplinary team of physicians, scientists, and AI experts on a mission to advance the measurement of human health.
              </p>
              <a href="mailto:info@ambient.bio">
                <button className="text-sm md:text-base text-offWhite bg-ambientBlue font-bold mt-6 py-2 px-4">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
