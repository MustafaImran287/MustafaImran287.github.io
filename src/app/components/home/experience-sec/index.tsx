import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2024 - Present",
            title: "Product Manager",
            company: "AddQual - Derby, United Kingdom",
            type: "Fulltime",
            points: [
                "Transitioned from engineering to management, taking ownership of project management, feasibility studies, client engagement and team management of 5 people",
                "Conducted detailed requirement gathering, proposal drafting, and technical analysis, converting business needs into actionable development plans",
                "Leading product design and technical direction on a MACH-based architecture, driving decoupled services and composable systems",
                "Defined and deployed a scalable microservices-based backend with PostgreSQL, API-first integration, and object storage via Azure Blob Storage and AWS S3",
                "Orchestrated CI/CD pipelines using GitHub Actions with dedicated runners, supporting both staging (Heroku) and production (Azure) deployments"
            ]
        },
        {
            year: "2022 - 2024",
            title: "Automation Engineer",
            company: "AddQual - Derby, United Kingdom",
            type: "Fulltime",
            points: [
                "Led development of an industrial intelligent automation system using FANUC and UR robots, applying Python, C++ and ROS for high-precision automated tasks",
                "Integrated computer vision and machine learning for object detection, quality control and closed-loop feedback, reducing operator dependency",
                "Built scalable architecture for automation workflows, enabling repeatable deployments and cross-team knowledge transfer",
                "Developed an HMI using Qt (QML + C++) and Python, enabling operator visibility and real-time control",
                "Delivered detailed technical documentation, impact assessments and executive-level presentations highlighting business value and operational gains"
            ]
        },
        {
            year: "2021 - 2025",
            title: "Project Manager | Business Operations",
            company: "STACKWARE – Islamabad, Pakistan (Remote)",
            type: "Fulltime",
            points: [
                "Spearheaded client engagement, technical scoping, and requirement gathering, consistently converting leads into mature projects",
                "Engineered embedded applications using C++, Python, QML, and JavaScript within the Qt framework, targeting custom embedded boards including Raspberry Pi",
                "Customized embedded Linux OS using Yocto Project to optimize application performance and system boot times",
                "Integrated MQTT protocol for lightweight and reliable device-to-device communication across IoT and industrial setups",
                "Contributed to Qt 3D based interfaces and ongoing development of advanced automotive dashboards inspired by Tesla's UI/UX"
            ]
        },
        {
            year: "2017 - Present",
            title: "Freelance Embedded Design Engineer",
            company: "Fiverr - Remote",
            type: "Freelance",
            points: [
                "Developed Qt Based Dashboard Panel in Medical Domain to monitor Lungs Performance",
                "Developed Qt Based Dashboard Controller interfaced with Siemens PLC",
                "Developed Off-Grid Lightning Control System using dashboard and mobile application",
                "Automatic Car Wash System using Arduino and Raspberry Pi interfaced with multiple motors and sensors",
                "Development of Electronic Damper Control System (EDCS) for Shan Motorsport"
            ]
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-2">{exp.title}</h3>
                                    <h4 className="text-base font-normal text-secondary">{exp.year}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <ul className="space-y-2 list-none">
                                        {exp.points?.map((point: string, pointIndex: number) => (
                                            <li key={pointIndex} className="flex items-start gap-2 leading-relaxed text-base">
                                                <span className="text-primary mt-2 flex-shrink-0">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;