import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { waitForFonts } from "./waitForFonts";

export async function initialFX() {
  await waitForFonts();

  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1 });

  // Initial states
  gsap.set(Text1.chars, { opacity: 1, y: 0 });
  gsap.set(Text2.chars, { opacity: 0, y: 80 });

  // 1. Pause for 4 seconds
  tl.to({}, { duration: 4 })
  
  // 2. Transition 1: Text 1 moves up/out, Text 2 moves up/in
  .to(Text1.chars, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05
  })
  .to(Text2.chars, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05
  }, "<")
  
  // Immediately reset Text1 to the bottom behind the scenes
  .set(Text1.chars, { y: 80 })

  // 3. Pause for 4 seconds
  .to({}, { duration: 4 })
  
  // 4. Transition 2: Text 2 moves up/out, Text 1 moves up/in
  .to(Text2.chars, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05
  })
  .to(Text1.chars, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.inOut",
    stagger: 0.05
  }, "<")
  
  // Immediately reset Text2 to the bottom behind the scenes for the next loop
  .set(Text2.chars, { y: 80 });
}
