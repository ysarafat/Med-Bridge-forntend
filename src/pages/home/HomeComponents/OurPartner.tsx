import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { PartnerData } from "@/utils/partnerData";
import Marquee from "react-fast-marquee";

const OurPartner = () => {
  return (
    <div>
      <SectionTitle
        title="Our Official Partner"
        subTitle="Powered by Our Trusted Collaborators"
      />
      <div className="bg-gradient-to-l from-rose-100 to-teal-100 p-4">
        <Container className="">
          <Marquee>
            {PartnerData.map((partner, index) => (
              <div
                key={index}
                className="border-2 border-primaryColor  h-[170px] shadow-md rounded-lg  flex justify-center items-center px-8 hover:shadow-xl duration-300 bg-white w-[200px]  mx-3"
              >
                <img
                  src={partner.logo}
                  alt=""
                  className="aspect-auto h-[120px] "
                />
              </div>
            ))}
          </Marquee>
        </Container>
      </div>
    </div>
  );
};

export default OurPartner;
