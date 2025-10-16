import React, { useEffect, useState } from "react";

const words = ["business", "sales", "purchase"];

const Hero: React.FC = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const TYPING_SPEED = 120;
  const DELETING_SPEED = 60;
  const PAUSE_BEFORE_DELETE = 1000;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullWord = words[loopIndex % words.length];

    if (isDeleting) {
      // deleting
      if (displayText.length > 0) {
        timer = setTimeout(
          () => setDisplayText(fullWord.substring(0, displayText.length - 1)),
          DELETING_SPEED
        );
      } else {
        // finished deleting -> move to next word and start typing
        setIsDeleting(false);
        setLoopIndex((v) => v + 1);
      }
    } else {
      // typing
      if (displayText.length < fullWord.length) {
        timer = setTimeout(
          () => setDisplayText(fullWord.substring(0, displayText.length + 1)),
          TYPING_SPEED
        );
      } else {
        // finished typing -> pause then start deleting
        timer = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isDeleting, loopIndex]);

  return (
    <section
      aria-label="Your business starts here"
      className="relative w-full h-screen overflow-hidden flex flex-col gap-8 items-center justify-center text-white"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/cba53bbc9da969e517c57a5612d69c67.webm"
          type="video/webm"
        />
        <source
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/986066259c4c6052743b7ec549526896.mp4"
          type="video/mp4"
        />
      </video>

      {/* dim overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content (on top) */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Solving your{" "}
          <span className="relative inline-flex items-baseline">
            {/* highlighted word */}
            <span
              aria-live="polite"
              className="text-green-400 font-semibold text-4xl md:text-6xl tracking-tight transition-all duration-300 ease-linear  inline-block"
              style={{borderBottom: "none"}}            
            >
              {displayText}
            </span>
            {/* blinking cursor */}
            <span className="cursor-blink bg-green-400 ml-1 w-[3px] h-[1.25em] inline-block" />
          </span>{" "}
          problems
        </h1>

        <p className="text-4xl md:text-6xl font-medium text-gray-200">
          One step at a time.
        </p>
      </div>

      <div className="bg-green-700 flex flex-col  gap-3 z-10 rounded-3xl p-4">
        <div className="flex justify-between gap-10">
            Start For Free
            <span className="text-sm text-slate-300 mt-3">Meeting your desires</span>
        </div>
        <div>
            <button className="w-full border-slate-900 text-slate-100 bg-green-300 flex justify-between p-2 rounded-2xl">GET STARTED </button>
        </div>
      </div>
    </section>
  );
};


export default Hero;
