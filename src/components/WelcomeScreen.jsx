import { motion } from "framer-motion";

export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-yellow-950 opacity-80" />

      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-yellow-400 rounded-full opacity-30"
          style={{
            width: Math.random() * 6 + "px",
            height: Math.random() * 6 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-10 text-center backdrop-blur-lg bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-yellow-300">
          💩 Welcome Rajesh Noob 💩
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          Click Enter for your special birthday surprise...🧟‍♀️
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ boxShadow: ["0 0 10px #fff", "0 0 30px rgb(255, 0, 0)"] }}
          transition={{ repeat: Infinity, duration: 1 }}
          onClick={onEnter}
          className="px-10 py-4 bg-white/10 border border-white/20 rounded-full text-2xl font-bold"
        >
          ENTER
        </motion.button>
      </motion.div>
    </div>
  );
}
