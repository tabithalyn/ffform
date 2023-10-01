import { useState } from "react";
import Signup from "./Signup";
import PersonalInfo from "./PersonalInfo";
import Final from "./Final";
import { Button, ProgressBar } from "react-bootstrap";

export interface FormProps {
  formData: {
    email: string,
    password: string,
    name: string,
    age: string,
    country: string,
    isDataCorrect: boolean
  }
}

export interface CompleteFormState {
  email: string,
  password: string,
  name: string,
  age: string,
  country: string,
  isDataCorrect: boolean
}

export interface FormDataProps extends FormProps {
  setFormData: React.Dispatch<React.SetStateAction<CompleteFormState>>
}

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    country: "",
    isDataCorrect: false
  });

  const FormTitles = ["Sign Up", "Personal Info", "Confirm"];

  const formDisplay = () => {
    if (step === 0) {
      return <Signup formData={formData} setFormData={setFormData} />
    } else if (step === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />
    } else {
      return <Final formData={formData} setFormData={setFormData} />
    }
  }

  return (
    <div style={{ width: "500px" }} className="m-auto shadow rounded p-5 bg-white">
      <ProgressBar
        now={FormTitles.length - 1 === step ? 100 : (step + 1) * 33}
      />
      <h1>{FormTitles[step]}</h1>
      {formDisplay()}
      <Button
        variant="secondary"
        onClick={() => setStep((currentStep) => currentStep - 1)}
        disabled={step === 0}
        className="mx-3"
      >Back</Button>
      <Button
        variant="primary"
        className="mx-3"
        disabled={!formData.isDataCorrect && FormTitles.length - 1 === step}
        onClick={() => {
          if (step === FormTitles.length - 1) {
            alert("Form Submitted!");
          } else {
            setStep((currentStep) => currentStep + 1);
          }
        }}
      >
        {step === FormTitles.length - 1 ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
 
export default Form;