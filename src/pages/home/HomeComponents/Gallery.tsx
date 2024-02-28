import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { galleryData } from "@/utils/galleryData";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Gallery = () => {
  return (
    <Container className="my-16">
      <SectionTitle
        title="Gallery"
        subTitle="Explore our collection of images showcasing our impact and activities"
      />
      <div className="rounded-lg">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          autoplay={{ delay: 3000 }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper rounded-lg "
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className=" w-full h-[500px]  overflow-hidden object-fill rounded-lg"
                src={item.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Gallery;
