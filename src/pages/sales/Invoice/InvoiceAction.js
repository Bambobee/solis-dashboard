import { useState } from 'react';
import ActionComp from 'components/invoice/action/ActionComp';
import { StepOne, StepTwo } from 'components/invoice/actionSteps';
import React from 'react';

function InvoiceAction() {
  const [step, setStep] = useState(1);

  const handleAssign = () => {
    setStep((step) => step + 1);
  };

  const handleSendEmail = () => {
    setStep((step) => step + 1);
  };
  return (
    <ActionComp step={step} assign={handleAssign} email={handleSendEmail}>
      <StepOne step={step} />
      <div>
        <br />
      </div>
      <StepTwo step={step} />
    </ActionComp>
  );
}

export default InvoiceAction;
