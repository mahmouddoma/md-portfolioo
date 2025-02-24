import { motion } from "framer-motion";
import { FaReact, FaAngular, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

const techIcons = [
  <FaReact />,
  <FaAngular />,
  <FaJs />,
  <FaHtml5 />,
  <FaCss3 />,
];

const Particles = () => {
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 5 + 5,
    icon: techIcons[i % techIcons.length],
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
    </>
  );
};

export default Particles;
