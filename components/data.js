import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  Calculator,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "The benefits of AI powered workouts",
  desc: "From personalized guidance to optimized routines, each workout is tailored to maximize your results. Embrace efficiency, precision, and effectiveness like never before, and unlock the true potential of your fitness journey with AI-powered workouts.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Improved Workouts",
      desc: "Elevate your fitness journey with precision and effectiveness.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Personalized Feedback",
      desc: "Unlock personalized feedback on your workout form and technique.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Custom Schedule and Plans",
      desc: "Receive a custom workout schedule tailored to your needs.",
      icon: <Calculator />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
