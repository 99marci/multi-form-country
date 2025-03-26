## Getting Started

## Installation

First be sure to use the correct node version:

`nvm use`

Next, install the required dependencies:

`npm i`

## Running

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Implemented features:
Multi-step form implementation based on selected country:
```bash
● Step by step run thru on the form fields.
● All fields have proper validation upon clicking “next/submit”.
● User are able to go back and forward between steps that have been filled while
preserving the fields values (unless user changes the flow)
● Added progress indicator.
```