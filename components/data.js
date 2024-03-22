import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "The benefits of AI-powered workouts",
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
      icon: <ClipboardDocumentIcon />,
    },
  ],
};

const benefitTwo = {
  title: "The benefits don't stop there",
  desc: "Seamlessly integrate our platform into your current routine, amplifying your results effortlessly. With expert guidance available at your fingertips 24/7, you're equipped to conquer any fitness challenge. Stay motivated and accountable with progress tracking features and personalized challenges, ensuring every step of your journey leads to success. Elevate your fitness game to new heights with BrieAI - where innovation meets achievement.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Easy Integration",
      desc: "Seamlessly integrate BrieAI into your existing fitness regimen for enhanced results.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Progress Tracking",
      desc: "Stay motivated and accountable with progress tracking features and personalized challenges tailored to your goals.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Access expert-level guidance and support anytime, anywhere, empowering you to take control of your fitness journey. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
