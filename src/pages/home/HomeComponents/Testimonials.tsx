import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { testimonialData } from "@/utils/testimonialData";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <Container className="mt-16">
      <SectionTitle
        title="Testimonial"
        subTitle="See what others are saying about their experience with our platform"
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" w-[90%] mx-auto ">
              <img
                src={item.image}
                alt="user"
                className="w-24 h-24 border-2 border-primaryColor rounded-full p-1 mx-auto aspect-square content-stretch"
              />
              <p className="text-center text-2xl text-primaryColor font-semibold mt-2 mb-4">
                {item.name}
              </p>
              <p className="w-[80%] mx-auto text-center">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
