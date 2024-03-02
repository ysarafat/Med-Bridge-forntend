import Container from "@/components/Container";
import VolunteerCardSkeleton from "@/components/Skeleton/VolunteerCardSkeleton";
import { Button } from "@/components/ui/button";
import { useAllVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import { Link } from "react-router-dom";
import VolunteerSection, { TVolunteer } from "../Volunteer/VolentersSection";

const AboutUs = () => {
  const { data, isLoading } = useAllVolunteerQuery(undefined);

  return (
    <>
      <section className="w-full h-[200px] md:h-[250px] lg:h-[300px]  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex justify-center items-center h-full  bg-gradient-to-r from-[rgba(0,0,0,0.6)] via-main-color to-[rgba(0,0,0,0.7)]">
          <h1 className="text-3xl lg:text-4xl font-title uppercase font-extrabold text-white">
            About us
          </h1>
        </div>
      </section>
      <Container>
        <div className=" ">
          <div className="flex flex-col lg:flex-row gap-10 mt-16 ">
            <div className="w-full">
              <iframe
                className="w-full rounded-lg lg:h-full h-[300px] "
                src="https://www.youtube.com/embed/D0UnqGm_miA?si=kfhaad6Qpu0Z0j2P"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl lg:text-3xl font-bold mb-3 font-title">
                We are Team Heath Bridge
              </h1>

              <p className="text-justify">
                Heath Bridge is a dedicated volunteer organization comprising 87
                passionate individuals who are committed to making a positive
                impact on society and our beloved country. Our diverse team
                includes students, as well as professionals from various fields,
                all united by the common goal of contributing to our community
                and nation. Our members generously offer their time and
                expertise free of charge, driven by a shared sense of
                responsibility and a deep-rooted desire to create meaningful
                change. At Heath Bridge, we believe in the power of collective
                action and aim to channel our collective energy, knowledge, and
                enthusiasm towards initiatives that benefit the greater good.
                With a strong foundation of collaboration and a genuine spirit
                of service, we strive to address pressing social and
                environmental issues, creating a better future for all. Join us
                in our journey to make a difference and be part of a community
                dedicated to positive change.
              </p>
            </div>
          </div>
          <div className="my-8 md:my-10 lg:my-10">
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 font-title">
              Our Vision and Mission
            </h1>
            <div className="text-justify">
              <p>
                <strong>Vision: </strong>
                At Heath Bridge, we envision a brighter, more equitable future
                for our society and country. Our primary focus is on achieving
                the Sustainable Development Goals (SDGs), with a special
                emphasis on SDG-4 (Quality Education), SDG-13 (Climate Action),
                SDG-16 (Peace, Justice, and Strong Institutions), and SDG-17
                (Partnerships for the Goals). We are resolutely committed to
                fostering a society where opportunity, justice, and
                sustainability thrive.
              </p>
              <p className="mt-3">
                <strong>Mission: </strong>
                Our mission is driven by the belief that education is the
                cornerstone of progress. We are dedicated to eradicating
                illiteracy from our society and country through our "free for
                education" initiatives. By providing access to quality
                education, we empower individuals to transform their lives and
                contribute to a more prosperous and just Bangladesh.
              </p>
              <p className="mt-1">
                We are also passionate about addressing other pressing social
                issues, including stopping child marriage, combatting drug
                addiction, and providing economic support to underprivileged
                students. By doing so, we create a supportive environment for
                vulnerable communities, helping them break the cycle of poverty
                and despair.
              </p>
              <p className="mt-1">
                Furthermore, we engage in humanitarian efforts, such as donating
                clothing and essential items to children and impoverished
                individuals in need. We understand the importance of basic
                necessities for human dignity and well-being.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 font-title">
              Our Story{" "}
            </h1>
            <div className="text-justify">
              <p>
                In November 2015, a group of 87 dedicated individuals came
                together with a shared dream: to create a better society and
                country for all. This collective effort gave birth to Heath
                Bridge, a volunteer organization driven by passion and the
                commitment to make a positive impact.
              </p>

              <p>
                The journey doesn't end there. Heath Bridge has actively taken
                on challenges like stopping child marriage, battling drug
                addiction, and offering economic support to underprivileged
                students. These efforts provide a helping hand to those in need,
                fostering a more prosperous and just society.
              </p>

              <p>
                Environmental sustainability is another cause close to our
                hearts. Through awareness campaigns and tree plantation drives,
                we continue to contribute to a greener, healthier planet.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-3 font-title">
            Volunteers
          </h1>
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-12">
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
              <VolunteerCardSkeleton />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-12">
            {data?.data?.map((volunteer: TVolunteer) => (
              <VolunteerSection key={volunteer._id} volunteer={volunteer} />
            ))}
          </div>
          <div className="mt-8 w-full mx-auto md:w-1/3 text-center ">
            <Link to={"/volunteer"}>
              <Button className="w-full" size={"lg"}>
                Joni Today as a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
