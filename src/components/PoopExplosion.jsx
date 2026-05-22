import { useEffect, useState } from "react";

export default function PoopExplosion() {
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    document.body.classList.add("shake");

    if (navigator.vibrate) {
      navigator.vibrate([300, 100, 300]);
    }

    setTimeout(() => {
      setShowEnd(true);
      document.body.classList.remove("shake");
    }, 9000);
  }, []);

  if (showEnd) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-white text-7xl font-black">
        THE END
        
         BHAI NIGHT AVALOTHA PANNA MUDICHUTHU 💩😂
      </div>
    );
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden flash-bg">

      {[...Array(250)].map((_, i) => (
        <div
          key={i}
          className="poopRain text-5xl"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 3 + 2 + "s",
            animationDelay: Math.random() * 2 + "s",
          }}
        >
          💩
        </div>
      ))}

      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl font-black text-white animate-bounce"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        >
          NOOB
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-5xl md:text-8xl font-black text-white animate-pulse px-4">
          RAJESH NOOB GOT PRANKED 💩😂
        </h1>
      </div>
    </div>
  );
}
