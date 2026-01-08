import Template2 from "@/components/Template2";

const problemData = {
  title: "Find Rate of Interest (Given Amount)",
  given: [
    { label: "Principal (P)", value: "₹5000" },
    { label: "Amount (A)", value: "₹6050" },
    { label: "Time (n)", value: "2 years" }
  ],
  formula: "A = P(1 + r/100)ⁿ",
  steps: [
    {
      label: "Substitute values",
      calculation: ["6050", "=", "5000", "×", "(", "1", "+", "r/100", ")", "^", "2"],
      result: ""
    },
    {
      label: "Divide both sides by 5000",
      calculation: ["6050/5000", "=", "(", "1", "+", "r/100", ")", "^", "2"],
      fractions: [
        { numerator: "6050", denominator: "5000" }
      ],
      result: ""
    },
    {
      label: "Simplify fraction",
      calculation: ["121/100", "=", "(", "1", "+", "r/100", ")", "^", "2"],
      fractions: [
        { numerator: "121", denominator: "100" }
      ],
      result: ""
    },
    {
      label: "Take square root",
      calculation: ["√", "(", "121/100", ")", "=", "1", "+", "r/100"],
      result: "11/10 = 1 + r/100"
    },
    {
      label: "Solve for r",
      calculation: ["11/10", "-", "1", "=", "r/100"],
      result: "1/10 = r/100"
    },
    {
      label: "Cross multiply",
      calculation: ["r", "=", "100", "÷", "10"],
      result: "r = 10%",
      highlight: true
    }
  ],
  finalAnswer: "Rate of Interest (r) = 10% per annum"
};

export default function Problem1Page() {
  return <Template2 problemData={problemData} problemNumber={1} />;
}
