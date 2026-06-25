import { type SimulationFormData, simulationFormSteps } from "../../../data/Simulation";
import { FormStep } from "./FormSteps"
import { StepProgress } from "./Progress"
import { useState } from "react";
import { useSimulationStorage } from "../../../hooks/useSimulationStorage";
import { useNavigate } from "react-router-dom";

export function SimulationForm() {
    const { saveFormData } = useSimulationStorage()
    const navigate = useNavigate()
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState<SimulationFormData>(
        {} as SimulationFormData)
    const totalSteps = simulationFormSteps.length
    const currentStep = simulationFormSteps[currentStepIndex]

    const handleNextStep = (value: string) => {
        const updatedFormData = { ...formData, [currentStep.id]: value }
        setFormData(updatedFormData)
        if (currentStepIndex + 1 > totalSteps - 1) {
            const id = saveFormData(updatedFormData)
            void navigate(`/resultado/${id}`)
            return
        }
        setCurrentStepIndex((prev) => prev + 1)
    }

    const handlePreviousStep = () => {
        if (currentStepIndex === 0) {
            return
        }
        setCurrentStepIndex((prev) => prev - 1)
    }
    return (
        <div className="flex flex-col gap-4">
            <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
            <FormStep
                key={currentStep.id}
                {...currentStep}
                onBack={handlePreviousStep}
                onNext={handleNextStep}
                hideBackButton={currentStepIndex === 0}
            />
        </div>
    )
}   