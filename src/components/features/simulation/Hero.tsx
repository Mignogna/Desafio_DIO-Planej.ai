import safeMoney from "@/assets/images/safeMoney.png"

export function SimulationHero() {
    return (
        <div className="mb-8 text-center ">
            <div className="flex flex-col items-center sm:flex-row">
            <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">Queremos te ajudar a planejar o seu futuro</h1>
            <img 
            src= {safeMoney}
            alt = "Ilustração de um porquinho de cofrinho para guardar dinheiro"
            aria-hidden = "true"
            className="w-22 h-22 sm:-ml-4 sm:-mt-3"
            />
            </div>
            <p className="text-muted-foreground mt-2 w-fulltext-sm sm:text-base">
                Basta responder algumas perguntas para ter insights financeiros personalizados.
            </p>
        </div>
    )
}