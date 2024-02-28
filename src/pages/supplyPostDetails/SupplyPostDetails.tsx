import Container from "@/components/Container";
import Modal from "@/components/Modal";
import PostDetailsSkeleton from "@/components/Skeleton/PostDetailsSkeleton";
import { Button } from "@/components/ui/button";
import { useGetSinglePostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { HeartHandshake } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Donate from "./SupplyComponents/Donate";

const SupplyPostDetails = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePostQuery(id);

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
    </Container>
  );
};

export default SupplyPostDetails;
