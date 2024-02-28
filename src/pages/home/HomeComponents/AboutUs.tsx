import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const AboutUs = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  const animateImage = {
    hidden: {
      x: 220,
      opacity: 0.5,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        ease: "easeIn",
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <SectionTitle
        title="About Us"
        subTitle="Discover Our Mission, Vision, and Commitment to Community Health and Resilience"
      />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animate}
        ref={ref}
        className="bg-gradient-to-r from-rose-100 to-teal-100 p-4 overflow-hidden"
      >
        <Container className="bg-white rounded-lg flex flex-col md:flex-row items-center gap-8">
          <motion.div className="py-5 w-full">
            <motion.p
              variants={childAnimate}
              ref={ref}
              className="text-lg font-semibold text-primaryColor"
            >
              Who We Are?
            </motion.p>
            <motion.h1
              variants={childAnimate}
              className="text-4xl font-extrabold mt-2 mb-3"
            >
              Our Dream is Global Health and Medical Supply Distribution
            </motion.h1>
            <motion.p variants={childAnimate} className="text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              esse debitis amet provident eveniet fuga fugit unde soluta cumque
              architecto quisquam facere numquam a perspiciatis voluptas, natus
              voluptatem eius error!
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
              <motion.div
                variants={childAnimate}
                className="border border-slate-200 rounded-lg bg-yellow-500/5"
              >
                <div className="text-slate-500 p-4">
                  <span className="block text-4xl font-bold text-black">
                    3.5
                  </span>
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                variants={childAnimate}
                className="border border-slate-200 rounded-lg bg-pink-500/5"
              >
                <div className="text-slate-500 p-4">
                  <span className="block text-4xl font-bold text-black">
                    25
                  </span>
                  Project Challenge
                </div>
              </motion.div>
              <motion.div
                variants={childAnimate}
                className="border border-slate-200 rounded-lg bg-green-500/5"
              >
                <div className="text-slate-500 p-4">
                  <span className="block text-4xl font-bold text-black">
                    850+
                  </span>
                  Positive Reviews
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView && "visible"}
            variants={animateImage}
            className="py-5 w-full"
            ref={ref}
          >
            <img
              className="w-full h-[330px] rounded-lg"
              src="https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </motion.div>
        </Container>
      </motion.div>
    </div>
  );
};

export default AboutUs;
