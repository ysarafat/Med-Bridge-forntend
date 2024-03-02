import Container from "@/components/Container";
import Modal from "@/components/Modal";
import SectionTitle from "@/components/SectionTitle";
import PostDetailsSkeleton from "@/components/Skeleton/PostDetailsSkeleton";
import { Button } from "@/components/ui/button";
import { useGetSinglePostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { useGetTestimonialsByPostIdQuery } from "@/redux/features/testimonials/testimonialsApi";
import { HeartHandshake } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Donate from "./SupplyComponents/Donate";
type TTestimonials = {
  _id: string;
  name: string;
  email: string;
  postId: string;
  testimonial: string;
  image?: string;
};
const SupplyPostDetails = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePostQuery(id);
  const { data: testimonialData } = useGetTestimonialsByPostIdQuery(id);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return isLoading ? (
    <PostDetailsSkeleton />
  ) : (
    <Container className="my-16">
      <div>
        <div className="w-full h-[500px]">
          <img
            src={data?.data?.image}
            alt=""
            className="aspect-auto object-fill w-full h-[500px]"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mt-5 mb-2">{data?.data.title}</h1>
          <p>
            Category:{" "}
            <span className="text-primaryColor">{data?.data.category}</span>
          </p>
          <p>
            Total Amount:{" "}
            <span className="text-primaryColor">{data?.data.qty} </span>
          </p>
        </div>
        <div>
          <p className="mt-6">{data?.data?.description}</p>
        </div>
        <div className="w-full md:w-1/2 mt-6">
          <Button
            onClick={() => setModal((prev) => !prev)}
            variant={"destructive"}
            className="flex items-center gap-x-2"
          >
            <HeartHandshake size={20} />
            Donate Now
          </Button>

          <Modal isOpen={modal} onClose={handleModal}>
            <Modal.ModalHeader>
              <h1 className="text-xl font-semibold text-primaryColor ">
                Donate Now
              </h1>
              <Modal.ModalCloseButton />
            </Modal.ModalHeader>
            <Donate data={data?.data} />
          </Modal>
        </div>
      </div>
      {/* supply testimonials */}
      <div className="mt-16">
        <SectionTitle
          title="Testimonials"
          subTitle="Here displayed our donors testimonials"
        />
      </div>
      <div className=" grid grid-cols-2 gap-8 ">
        {testimonialData?.data?.map((item: TTestimonials) => (
          <div className="border flex items-center gap-x-3 p-3 rounded-lg">
            <div className="w-20 h-20">
              <img
                src={item.image ? item.image : "/profilePic.png"}
                alt=""
                className="h-16 w-16 rounded-full object-cover border-2 p-1 border-primaryColor"
              />
            </div>
            <div className="w-full">
              <p>{item.testimonial}</p>
              <h5 className="text-xl font-bold text-primaryColor">
                - {item.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SupplyPostDetails;
