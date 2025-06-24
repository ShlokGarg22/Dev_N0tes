import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "10%" },
        { duration: 100, fill: "forwards" }
      );
    };

    if (btnRef.current) {
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link to="/create">
      <motion.button
        whileTap={{ scale: 0.985 }}
        ref={btnRef}
        className="relative overflow-hidden rounded-lg bg-slate-950 px-6 py-4 text-lg font-semibold text-white"

      >
        <span className="pointer-events-none relative z-10 flex items-center gap-2 mix-blend-difference">
          <PlusIcon className="size-4" />
          New Note
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-48 w-48 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"

        />
      </motion.button>
    </Link>
  );
};

export default SpotlightButton;
