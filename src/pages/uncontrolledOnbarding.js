import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function uncontrolledOnbarding() {
  return (
    <UncontrolledOnboardingFlow
      onFinish={(data) => {
        console.log(data);
        alert("Onboarding complete!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export default uncontrolledOnbarding;
