import { motion } from "framer-motion";

export default function BirthdayScene({ onPrank }) {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-red-950 to-black flex flex-col items-center justify-center relative overflow-hidden text-white">

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
          }}
          className="absolute text-4xl"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        >
          🎈
        </motion.div>
      ))}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-5xl md:text-8xl font-black mb-10 text-center"
      >
        HAPPY BIRTHDAY RAJESH 💩
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={onPrank}
        className="w-72 h-72 rounded-full bg-pink-300 flex items-center justify-center text-9xl cursor-pointer shadow-[0_0_60px_gold]"
      >
        🎂
      </motion.div>

      <p className="mt-6 text-xl animate-pulse">
        Click the cake to cut it 💩
      </p>
    </div>
  );
}
