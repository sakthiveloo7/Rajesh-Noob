import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import BirthdayScene from "./components/BirthdayScene";
import PoopExplosion from "./components/PoopExplosion";

export default function App() {
  const [stage, setStage] = useState("welcome");

  return (
    <>
      {stage === "welcome" && (
        <WelcomeScreen onEnter={() => setStage("birthday")} />
      )}

      {stage === "birthday" && (
        <BirthdayScene onPrank={() => setStage("prank")} />
      )}

      {stage === "prank" && <PoopExplosion />}
    </>
  );
}
