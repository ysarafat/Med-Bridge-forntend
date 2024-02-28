import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const animateHero = {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const animateImage = {
    hidden: {
      scale: 0.9,
      opacity: 0.5,
    },
    visible: {
      scale: 1,
      opacity: 1,

      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };
  return (
    <div className="py-5 md:py-8 lg:28">
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animateHero}
          ref={ref}
          className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-5"
        >
          <motion.div className="w-full">
            <motion.h1
              variants={childAnimate}
              className="lg:text-4xl text-2xl font-extrabold text-center lg:text-start"
            >
              Disaster Health and MedicalSupply Chain{" "}
              <span className="text-primaryColor font-extrabold ">
                Community Platform
              </span>
            </motion.h1>
            <motion.p
              variants={childAnimate}
              className="text-slate-500 dark:text-slate-400 mt-4 lg:text-justify text-center "
            >
              Disaster strikes, leaving communities vulnerable. But hope thrives
              within us. This platform connects you to vital health resources,
              medical supplies, and a network of support. Together, we can
              rebuild, recover, and heal. Join us.
            </motion.p>
            <motion.div variants={childAnimate}>
              <Link to={"/supplies"}>
                <Button className="mt-5 hover:scale-[102%] transition-all w-full lg:w-1/2 ">
                  All Supplies
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={animateImage} className="w-full">
            <img
              src="https://res.cloudinary.com/db8ei7i7y/image/upload/v1708186137/hero_apvhkd.webp"
              alt="hero"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
