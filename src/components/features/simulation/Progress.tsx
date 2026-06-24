interface StepProgressProps {
    currentStep: number;
    totalSteps: number;
}   

export function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
    const progressPercentage = (currentStep / totalSteps) * 100;
    return (
        <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2"> 
                Passo {currentStep} de {totalSteps}
            </p>
            <div className="bg-border h-1 w-full overflow-hidden rounded-full">
                <div 
                role="progressbar"
                aria-valuenow={currentStep}
                aria-valuemin={1}
                aria-valuemax={totalSteps}
                aria-label={`Passo ${currentStep} de ${totalSteps}`}
                className="bg-primary h-full rounded-full transition-all duration-300 ease-in-out" 
                style={{ width: `${progressPercentage}%` }}
                />
            </div> 
             
        </div>
    )
}   