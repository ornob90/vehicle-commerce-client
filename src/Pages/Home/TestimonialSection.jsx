import React from "react";
import Container from "../../components/Shared/Container";
import SectionHeader from "../../components/Shared/SectionHeader";
import { PiQuotesBold } from "react-icons/pi";

const TestimonialSection = () => {
  const reviews = [
    {
      review:
        '"Impressive selection of cars and excellent service. Found my dream car easily. Highly recommended!"',
      name: "Ron Rizzly",
      shortName: "Novi Sad",
      img: "https://wallpapers.com/images/hd/harry-potter-profile-pictures-1270-x-1270-opxdo6m7vpkk5eh2.jpg",
    },
    {
      review:
        '"Effortless car browsing and booking experience. The maintenance tips in the blog are a bonus. Top-notch!"',
      name: "Potter Harry",
      shortName: "Belgrade",
      img: "https://i.pinimg.com/736x/f1/e2/36/f1e2366c0694166f0bf13d10d49a938b.jpg",
    },
  ];

  return (
    <Container className="">
      <SectionHeader
        header="Client's Testimonials"
        subHeader="Reviewed by People"
        desc="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
      />
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map(({ review, name, shortName, img }) => (
          <div key={name} className="p-5 shadow-lg">
            <h3 className="font-semibold text-xl mb-12">{review}</h3>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="border border-black w-[50px] h-[50px] rounded-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{name}</h4>
                  <p>{shortName}</p>
                </div>
              </div>

              <PiQuotesBold className="text-5xl text-[#FF4D30]" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialSection;
