import Link from "next/link";

interface ProblemData {
  title: string;
  given: {
    label: string;
    value: string;
  }[];
  steps: {
    equation: string;
    values: string[];
    result?: string;
  }[];
  finalAnswer: string;
}

interface Template1Props {
  problemData: ProblemData;
  problemNumber: number;
}

export default function Template1({ problemData, problemNumber }: Template1Props) {
  return (
    <div className="min-h-screen p-8 pb-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in">
          <Link 
            href="/" 
            className="inline-block mb-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Template 1: Problem {problemNumber}
          </h1>
          <h2 className="text-2xl text-gray-600">{problemData.title}</h2>
        </div>

        {/* Main Container */}
        <div className="math-box animate-slide-up">
          {/* Given Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <span className="highlight-box mr-3">Given:</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {problemData.given.map((item, index) => (
                <div key={index} className="variable-box text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                  <div className="text-xl">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Solution:</h3>
            
            {problemData.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="space-y-4">
                {/* Step Number */}
                <div className="flex items-center mb-3">
                  <span className="black-box mr-3">Step {stepIndex + 1}</span>
                </div>

                {/* Equation Box */}
                <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-300">
                  {step.values.map((value, valueIndex) => {
                    const isOperator = ['+', '-', '×', '÷', '='].includes(value);
                    const hasSuperscript = value.includes('²') || value.includes('³');
                    const isSquareRoot = value === '√';
                    return (
                      <div key={valueIndex} className="flex items-center">
                        {isSquareRoot ? (
                          <span className="text-2xl font-bold text-gray-700">√</span>
                        ) : hasSuperscript ? (
                          <div className="number-box">
                            {value.replace('²', '').replace('³', '')}
                            {value.includes('²') && <sup>²</sup>}
                            {value.includes('³') && <sup>³</sup>}
                          </div>
                        ) : isOperator ? (
                          <span className="text-2xl font-bold text-gray-700 mx-1">{value}</span>
                        ) : (
                          <div className="number-box">{value}</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Result if exists */}
                {step.result && (
                  <div className="flex items-center justify-center">
                    <span className="arrow mr-2">↓</span>
                    <div className="highlight-box">
                      {step.result}
                    </div>
                  </div>
                )}

                {/* Arrow to next step */}
                {stepIndex < problemData.steps.length - 1 && (
                  <div className="flex justify-center my-2">
                    <span className="arrow text-3xl animate-bounce-subtle">↓</span>
                  </div>
                )}
              </div>
            ))}

            {/* Final Answer */}
            <div className="mt-8 pt-6 border-t-4 border-blue-400">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-2xl font-bold text-gray-700">Final Answer:</span>
                <div className="highlight-box text-xl animate-pulse-slow">
                  {problemData.finalAnswer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}