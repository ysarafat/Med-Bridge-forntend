import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import { OurTeamData } from "@/utils/OurTeamData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const OurTeam = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const animate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const childAnimate = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };
  return (
    <div className="my-16">
      <SectionTitle
        title="Our Team"
        subTitle="Meet Our Dedicated Team of Professionals"
      />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animate}
        className="overflow-hidden"
        ref={ref}
      >
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {OurTeamData.map((member) => (
            <motion.div variants={childAnimate}>
              <TeamMemberCard
                key={member.id}
                name={member.name}
                image={member.image}
                designation={member.designation}
                facebookUrl={member.facebookUrl}
                LinkedinUrl={member.linkedinUrl}
                xUrl={member.xUrl}
              />
            </motion.div>
          ))}
        </Container>
      </motion.div>
    </div>
  );
};

export default OurTeam;
