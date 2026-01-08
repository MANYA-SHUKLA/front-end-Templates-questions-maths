import Template2 from "@/components/Template2";

const problemData = {
  title: "Find Amount (Given Rate)",
  given: [
    { label: "Principal (P)", value: "₹8000" },
    { label: "Rate (r)", value: "12% p.a." },
    { label: "Time (n)", value: "3 years" }
  ],
  formula: "A = P(1 + r/100)ⁿ",
  steps: [
    {
      label: "Substitute values",
      calculation: ["A", "=", "8000", "×", "(", "1", "+", "12/100", ")", "^", "3"],
      result: ""
    },
    {
      label: "Simplify (1 + r/100)",
      calculation: ["A", "=", "8000", "×", "(", "112/100", ")", "^", "3"],
      fractions: [
        { numerator: "112", denominator: "100" }
      ],
      result: ""
    },
    {
      label: "Further simplify",
      calculation: ["A", "=", "8000", "×", "(", "28/25", ")", "^", "3"],
      fractions: [
        { numerator: "28", denominator: "25" }
      ],
      result: ""
    },
    {
      label: "Calculate power",
      calculation: ["A", "=", "8000", "×", "21952/15625"],
      result: "A = 8000 × (21952/15625)"
    },
    {
      label: "Simplify",
      calculation: ["A", "=", "8000", "×", "1.404928"],
      result: "A = 11239.424"
    },
    {
      label: "Final calculation",
      calculation: ["A", "=", "₹11,239.42"],
      result: "",
      highlight: true
    }
  ],
  finalAnswer: "Amount (A) = ₹11,239.42"
};

export default function Problem2Page() {
  return <Template2 problemData={problemData} problemNumber={2} />;
}
