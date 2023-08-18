import { Feature } from "@/types/feature";

const technologyData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 40 40" className="fill-darkBlue"><path d="M39.282,25.866l-5.826,-7.829c-0.364,-0.455 -0.455,-1.092 -0.273,-1.638l3.095,-9.285c0.364,-1.002 0.091,-2.003 -0.637,-2.731c-0.728,-0.728 -1.73,-0.91 -2.731,-0.637l-9.285,3.095c-0.546,0.182 -1.183,0.091 -1.638,-0.273l-7.829,-5.826c-0.455,-0.364 -1.001,-0.546 -1.547,-0.546c-0.364,-0 -0.82,0.091 -1.184,0.273c-0.91,0.455 -1.456,1.365 -1.456,2.366l0.091,9.741c-0,0.637 -0.273,1.183 -0.728,1.547l-8.011,5.643c-0.819,0.638 -1.274,1.548 -1.092,2.549c0.182,1.002 0.819,1.821 1.82,2.094l9.467,3.004c0.546,0.182 1.002,0.637 1.184,1.183l2.913,9.285c0.273,1.002 1.092,1.639 2.093,1.821c1.002,0.182 2.003,-0.273 2.549,-1.092l5.644,-8.011c0.364,-0.455 0.91,-0.819 1.547,-0.728l9.74,0.091c1.002,-0 1.912,-0.546 2.367,-1.456c0.455,-0.82 0.365,-1.821 -0.273,-2.64l0,-0Z"/></svg>
    ),
    title: "Standard of care",
    paragraph:
      "Ambient leverages data from routine clinical practice facilitating swift and effective integration into workflows.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-darkBlue"><path d="M30.062,21.824l-26.568,17.712c-0.68,0.454 -1.554,0.495 -2.274,0.11c-0.72,-0.385 -1.169,-1.136 -1.169,-1.953l0,-35.424c0,-0.817 0.449,-1.567 1.169,-1.952c0.72,-0.386 1.594,-0.344 2.274,0.11l26.568,17.712c0.616,0.41 0.986,1.102 0.986,1.842c-0,0.74 -0.37,1.433 -0.986,1.842l0,0.001Z" /></svg>
    ),
    title: "Actionable",
    paragraph:
      "Ambient enhances decision making and triage by recommending clinically relevant treatment options.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-darkBlue"><path d="M9.691,3.078c-4.923,-0 -8.234,2.902 -9.241,3.915c-0.209,0.211 -0.323,0.498 -0.323,0.794l0,25.257c0,0.485 0.563,0.738 0.935,0.429c4.032,-3.342 8.912,-3.505 8.912,-3.505c6.912,-0 9.47,6.345 9.47,6.345l-0,-25.566c-0,-7.29 -9.753,-7.67 -9.753,-7.67"/><path d="M39.572,6.994c-1.007,-1.014 -4.318,-3.916 -9.24,-3.916c0,0 -9.752,0.378 -9.752,7.67l-0,25.566c-0,-0 2.556,-6.345 9.469,-6.345c-0,-0 4.88,0.164 8.911,3.504c0.373,0.309 0.936,0.055 0.936,-0.429l-0,-25.257c-0,-0.296 -0.115,-0.582 -0.324,-0.793"/></svg>
    ),
    title: "Transparent",
    paragraph:
      "Ambient employs medically interpretable AI algorithms fostering trust and alignment with established practices.",
  },
];
export default technologyData;