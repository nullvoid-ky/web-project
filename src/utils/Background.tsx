import { useEffect } from "react";
import "./Background.css"
export default function Background() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      document
        .querySelectorAll<HTMLDivElement>(".parallax__layer")
        .forEach((layer) => {
          const depth = layer.getAttribute("data-depth");
          if (depth) {
            const movement = -(scrollPosition * parseFloat(depth));
            const translate3d = `translate3d(0, ${movement}px, 0)`;
            layer.style.transform = translate3d;
          }
        });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="parallax fixed inset-0 w-[100vw] h-[100%] overflow-hidden -z-10 linear">
        <div className="parallax__layer parallax__layer--back" data-depth="0.1">
          <div className="absolute w-[100vw] h-[100vh] overflow-hidden ">
            <div className="box">
              <div className="animate-linear-1 top-[12%] left-[42%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-6 top-[70%] left-[50%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-7 top-[17%] left-[6%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-3 top-[20%] left-[60%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-1 top-[50%] left-[70%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-2 top-[57%] left-[10%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-1 top-[80%] left-[70%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-5 top-[60%] left-[80%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-5 top-[32%] left-[25%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-2 top-[7%] left-[10%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-1 top-[4%] left-[70%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-5 top-[63%] left-[80%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
              <div className="animate-linear-2 top-[72%] left-[25%] absolute w-14 h-14 bg-transparent border-4 border-[#000000AA]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
