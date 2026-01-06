import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[250px] h-[350px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-me-img.png")}
                  alt="about-me"
                  width={250}
                  height={350}
                  quality={100}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  Research-driven Technology Professional with experience leading cross-functional engineering teams across automation, embedded systems, AI-enabled solutions, and product innovation. Proven track record delivering R&D projects involving computer vision, robotics, data-driven systems, and scalable modular architecture. Strong background in knowledge transfer, stakeholder engagement, and mentoring engineers. Experienced across automotive, aerospace, industrial and medical domains, with the ability to bridge academic research and real-world commercial deployment.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "07+", label: "Years Experience" },
                    { count: "15+", label: "Projects Completed" },
                    { count: "02", label: "Research Publications" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Core Expertise</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["HMI Development", "Embedded Systems", "Automation", "Product Management"].map((expertise) => (
                      <p
                        key={expertise}
                        className="py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                        style={{ backgroundColor: 'rgba(43, 112, 224, 0.2)' }}
                      >
                        {expertise}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
