"use client";
import { use } from "react"; // Import use hook
import { workData } from "@/assets/assets";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";

export default function ProjectDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise); // unwrap the promise here
  const { slug } = params;
  const project = workData.find((p) => p.slug === slug);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 15 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!project) {
    return <div className="text-center py-10 text-xl">Project not found</div>;
  }

  return (
    <div className="px-[10%] py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.description}</p>

      <Image
        src={project.bgImage}
        width={1000}
        height={600}
        alt={project.title}
        className="rounded shadow mb-10 object-cover"
      />

      {/* --- Screenshots Slider --- */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Screenshots</h2>

        {project.screenshots?.length > 0 ? (
          <>
            <div className="text-center text-sm text-gray-400 mb-2">Swipe to view more ➡️</div>
            <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
              {project.screenshots.map((src, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    width={1000}
                    height={600}
                    className="rounded-lg shadow object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => instanceRef.current?.moveToIdx(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">No screenshots uploaded yet.</p>
        )}
      </div>

      {/* Tools Used */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
        {project.tools?.length > 0 ? (
          <ul className="list-disc pl-6">
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tools listed.</p>
        )}
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-700">
          {project.overview || "No overview provided for this project yet."}
        </p>
      </div>
    </div>
  );
}
