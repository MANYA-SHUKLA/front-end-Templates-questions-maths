import Template1 from "@/components/Template1";

const problemData = {
  title: "Trigonometric Ratios - Find Missing Side",
  given: [
    { label: "Angle (θ)", value: "30°" },
    { label: "Opposite", value: "5" },
    { label: "Find", value: "Hypotenuse" }
  ],
  steps: [
    {
      equation: "sin(θ) = Opposite / Hypotenuse",
      values: ["sin(30°)", "=", "5", "/", "Hypotenuse"],
      result: "1/2 = 5 / Hypotenuse"
    },
    {
      equation: "Cross multiply",
      values: ["Hypotenuse", "=", "5", "×", "2"],
      result: ""
    },
    {
      equation: "Hypotenuse = 10",
      values: ["Hypotenuse", "=", "10"],
      result: "Hypotenuse = 10 units"
    }
  ],
  finalAnswer: "Hypotenuse = 10 units"
};

export default function Problem2Page() {
  return <Template1 problemData={problemData} problemNumber={2} />;
}
