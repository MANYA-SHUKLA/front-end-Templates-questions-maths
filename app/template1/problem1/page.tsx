import Template1 from "@/components/Template1";

const problemData = {
  title: "Pythagorean Theorem - Find Hypotenuse",
  given: [
    { label: "Base (a)", value: "3" },
    { label: "Height (b)", value: "4" },
    { label: "Find", value: "Hypotenuse (c)" }
  ],
  steps: [
    {
      equation: "a² + b² = c²",
      values: ["3²", "+", "4²", "=", "c²"],
      result: "9 + 16 = c²"
    },
    {
      equation: "25 = c²",
      values: ["25", "=", "c²"],
      result: ""
    },
    {
      equation: "c = √25",
      values: ["c", "=", "√", "25"],
      result: "c = 5"
    }
  ],
  finalAnswer: "Hypotenuse (c) = 5 units"
};

export default function Problem1Page() {
  return <Template1 problemData={problemData} problemNumber={1} />;
}
