import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import { RulesModal } from "./components/RulesModal";
import ScoreBoard from "./components/ScoreBoard";

export default function Home() {
  return (
    <div className="relative p-2 sm:p-16 w-full h-screen bg-gradient-to-b from-gradient1 to-gradient2 flex flex-col justify-start items-center">
      <Header>
        <ScoreBoard />
      </Header>
      <Game />
      <Footer />
      <RulesModal />
    </div>
  );
}
