import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      {/* Background Airplane Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={getImgPath("/images/home/banner/aeroplane-img.png")}
            alt="aeroplane background"
            fill
            quality={90}
            priority
            className="object-cover opacity-50"
            style={{ objectPosition: 'center' }}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl relative z-10">
            <div>
              <div className="flex items-center gap-8">
                <h2>I'm Mustafa</h2>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.png")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h4>Product Manager | Automation Engineer | Embedded Systems Expert | Aerospace Engineer</h4>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Research-driven Technology Professional with experience leading cross-functional engineering teams across automation, embedded systems, AI-enabled solutions, and product innovation. Proven track record delivering R&D projects involving computer vision, robotics, and scalable modular architecture.
            </p>
          </div>
          <div className="flex justify-center lg:hidden relative z-10">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src={getImgPath("/images/home/banner/profile-img.png")}
                alt="profile-img"
                width={300}
                height={300}
                quality={100}
                priority
                className="w-full h-full object-cover"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden lg:flex items-center justify-end pr-8 xl:pr-16 2xl:pr-24 h-full z-10">
        <div className="w-72 h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <Image
            src={getImgPath("/images/home/banner/profile-img.png")}
            alt="profile-img"
            width={400}
            height={400}
            quality={100}
            priority
            className="w-full h-full object-cover"
            style={{ imageRendering: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
