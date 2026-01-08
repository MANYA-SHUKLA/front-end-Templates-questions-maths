# Math Templates - Next.js Application

A beautiful, interactive Next.js application featuring two math problem templates with solved examples.

## Features

- **Template 1**: Trigonometry & Pythagorean Triplet problems
  - Problem 1: Pythagorean Theorem - Find Hypotenuse
  - Problem 2: Trigonometric Ratios - Find Missing Side

- **Template 2**: Compound Interest & Interest-based Questions
  - Problem 1: Find Rate of Interest (Given Amount) - Example: ₹5000 amounts to ₹6050 in 2 years
  - Problem 2: Find Amount (Given Rate) - Example: ₹8000 at 12% for 3 years

## Technology Stack

- **Next.js 15** - Latest React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Modern styling with custom animations
- **React 19** - Latest React version

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
math-templates/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with Tailwind
│   ├── template1/
│   │   ├── problem1/       # Pythagorean Theorem
│   │   └── problem2/       # Trigonometric Ratios
│   └── template2/
│       ├── problem1/       # Find Rate (Given Amount)
│       └── problem2/       # Find Amount (Given Rate)
├── components/
│   ├── Template1.tsx       # Trigonometry template component
│   └── Template2.tsx       # Compound Interest template component
└── package.json
```

## Design Features

- **Animated Boxes**: Number boxes, variable boxes, fraction boxes with hover effects
- **Smooth Animations**: Fade-in, slide-up, slide-right animations
- **Beautiful Colors**: Blue and purple gradients with accent colors
- **Interactive Elements**: Hover effects with scale transforms
- **Responsive Design**: Works on all screen sizes
- **Visual Flow**: Arrows and step-by-step progression indicators

## Template Features

### Template 1 (Trigonometry)
- Fixed box layouts for equations
- Step-by-step arithmetic breakdown
- Clear visual flow with arrows
- Highlight boxes for final answers

### Template 2 (Compound Interest)
- Fraction display boxes
- Power/exponent notation
- Interest calculation flow
- Rate highlighting

## Customization

You can easily add new problems by:
1. Creating a new page in the appropriate template folder
2. Using the template component with problem data
3. Only modifying content inside existing divs (as per assignment rules)

## Notes

- All CSS and structure remain unchanged per template
- Only content (numbers, variables, calculations) is modified
- Layout and styling are fixed per template design
