"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Research = () => {
  const [researchData, setResearchData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/research-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setResearchData(data?.researchData);
      } catch (error) {
        console.error("Error fetching research data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Research & Publications</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {researchData?.map((research: any, index: any) => {
              return (
                <div
                  key={index}
                  className="group flex flex-col gap-4 border border-softGray rounded-lg p-5 xl:p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-96 md:h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={getImgPath(research?.image)}
                      alt={research?.title}
                      fill
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{
                        objectPosition: research?.title?.includes("Breast Cancer") 
                          ? "center top" 
                          : research?.title?.includes("Robotic Arm")
                          ? "center bottom"
                          : "center"
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="mb-2">{research?.title}</h4>
                      <p className="text-sm leading-relaxed" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>{research?.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {research?.technologies?.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-sm rounded-full"
                          style={{ backgroundColor: 'rgba(43, 112, 224, 0.1)', color: '#2b70e0' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {research?.link && (
                      <Link
                        href={research.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline w-fit mt-2"
                      >
                        <span>View Research</span>
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
