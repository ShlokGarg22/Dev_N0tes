import SpotlightButton from "./SpotlightButton"; // adjust path as needed
import TrueFocus from './TrueFocus';
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              <TrueFocus 
  sentence="Dev N0tes"
manualMode={false}
blurAmount={5}
borderColor="white"
animationDuration={2}
pauseBetweenAnimations={1}
/>
          </h1>
          <div className="flex items-center gap-4">
            <SpotlightButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
