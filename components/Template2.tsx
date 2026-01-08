import Link from "next/link";

interface CompoundInterestData {
  title: string;
  given: {
    label: string;
    value: string;
  }[];
  formula: string;
  steps: {
    label: string;
    calculation: string[];
    fractions?: {
      numerator: string;
      denominator: string;
    }[];
    result?: string;
    highlight?: boolean;
  }[];
  finalAnswer: string;
}

interface Template2Props {
  problemData: CompoundInterestData;
  problemNumber: number;
}

export default function Template2({ problemData, problemNumber }: Template2Props) {
  return (
    <div className="min-h-screen p-8 pb-32 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in">
          <Link 
            href="/" 
            className="inline-block mb-4 text-purple-600 hover:text-purple-800 font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Template 2: Problem {problemNumber}
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

          {/* Formula */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border-2 border-purple-300">
            <h3 className="text-lg font-bold text-gray-700 mb-3">Formula:</h3>
            <div className="text-2xl font-bold text-center text-purple-900">
              {problemData.formula}
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
                  {step.label && (
                    <span className="text-lg font-semibold text-gray-700">{step.label}</span>
                  )}
                </div>

                {/* Calculation Box */}
                <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  step.highlight 
                    ? 'bg-yellow-50 border-yellow-400 hover:border-yellow-500' 
                    : 'bg-gray-50 border-gray-300 hover:border-purple-400'
                }`}>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {step.calculation.map((value, valueIndex) => {
                      const isOperator = ['=', '+', '-', '×', '÷', '(', ')'].includes(value);
                      const isSquareRoot = value === '√';
                      return (
                        <div key={valueIndex} className="flex items-center">
                          {isSquareRoot ? (
                            <span className="text-2xl font-bold text-gray-700">√</span>
                          ) : value.includes('/') && !isOperator ? (
                            <div className="fraction-box">
                              <div className="text-center">
                                <div className="border-b-2 border-amber-600 pb-1 mb-1 font-bold">
                                  {value.split('/')[0]}
                                </div>
                                <div className="font-semibold">{value.split('/')[1]}</div>
                              </div>
                            </div>
                          ) : value.includes('^') ? (
                            <div className="number-box">
                              {value.split('^')[0]}
                              <sup className="text-sm ml-1">{value.split('^')[1]}</sup>
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
                </div>

                {/* Fractions if present */}
                {step.fractions && step.fractions.length > 0 && (
                  <div className="flex items-center justify-center gap-4">
                    {step.fractions.map((fraction, fracIndex) => (
                      <div key={fracIndex} className="fraction-box">
                        <div className="text-center">
                          <div className="border-b-2 border-amber-600 pb-1 mb-1 font-bold">
                            {fraction.numerator}
                          </div>
                          <div className="font-semibold">{fraction.denominator}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Result if exists */}
                {step.result && (
                  <div className="flex items-center justify-center">
                    <span className="arrow mr-2">↓</span>
                    <div className={`${step.highlight ? 'highlight-box' : 'variable-box'} text-lg`}>
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
            <div className="mt-8 pt-6 border-t-4 border-purple-400">
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
