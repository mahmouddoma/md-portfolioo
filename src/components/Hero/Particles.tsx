import { motion } from "framer-motion";
import { FaReact, FaAngular, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

const techIcons = [
  <FaReact style={{ color: "#61dafb" }} />,
  <FaAngular style={{ color: "#dd0031" }} />,
  <FaJs style={{ color: "#f7df1e" }} />,
  <FaHtml5 style={{ color: "#e34c26" }} />,
  <FaCss3 style={{ color: "#264de4" }} />,
];

const Particles = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 10 + 10,
    icon: techIcons[i % techIcons.length],
  }));

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "fixed",  
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            zIndex: 5, 
            opacity: 0.4, 
            pointerEvents: "none", 
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
