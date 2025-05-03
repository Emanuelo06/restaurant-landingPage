
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";

import TestimonialBg from "../assets/testimonialBackground.jpg";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ama Amponmah",
    image: person1,
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices...",
  },
  {
    id: 2,
    name: "Kweku Addo",
    image: person2,
    text: "Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.",
  },
  {
    id: 3,
    name: "Semno Robintson",
    image: person3,
    text: "Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.",
  },
  {
    id: 4,
    name: "Elimen Stropis",
    image: person4,
    text: "Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper.",
  },
];

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div
      style={{ backgroundImage: `url(${TestimonialBg})` }}
      id="reviews"
      className="w-full bg-cover bg-center pt-10 pb-20 px-4"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-[inter] font-bold text-center">Our Happy Customers</h1>
      <p className="text-md sm:text-[15px] md:text-lg lg:text-2xl text-[#3f434a] lg:mb-20 text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Embla Carousel */}
      <div className="overflow-hidden mt-5" ref={emblaRef}>
        <div className="flex gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] xl:pt-20"
            >
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                text={testimonial.text}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-[#EA6D27]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;