"use client";

import GetInTouch from "@/components/GetInTouch";
import Speciality from "@/components/Speciality";
import Testimonial from "@/components/Testimonial";
import HomeIntro from "@/components/HomeIntro";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <Speciality />
      <Testimonial />
      <GetInTouch />
    </>
  );
}
