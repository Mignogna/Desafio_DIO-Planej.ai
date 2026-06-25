import { PiggyBank, CreditCard, Landmark, Goal, Wallet, CalendarClock, } from "lucide-react"

import type { FormStepProps } from "../components/features/simulation/FormSteps"

export const simulationFormSteps = [
    {
        id: "income",
        icon: PiggyBank,
        title: "Renda mensal bruta",
        question: "Somando todas as suas fontes de renda, qual o seu ganho mensal?",
        inputProps: {
            placeholder: "Ex.: 5.000,00",
            prefix: "R$",
            maxLength: 12,
        }
    },
    {
        id: "expenses",
        icon: CreditCard,
        title: "Custos de vida fixos",
        question: "Quanto você gasta com as despesas mensais (aluguel, contas, etc)?",
        inputProps: {
            placeholder: "Ex.: 2.000,00",
            prefix: "R$",
            maxLength: 12,
        }
    },
    {
        id: "debts",
        icon: Landmark,
        title: "Despesas extras",
        question: "Quanto do seu orçamento está reservado para despesas extras (seguros, impostos, eventos)?",
        inputProps: {
            placeholder: "Ex.: 500,00",
            prefix: "R$",
            maxLength: 12,
        }
    },
    {
        id: "goalName",
        icon: Goal,
        title: "Seu grande sonho",
        question: "Qual o objetivo que você deseja alcançar?",
        inputProps: {
            placeholder: "Ex.: Viagem para o Japão.",
            maxLength: 50,
        }
    },
    {
        id: "goalAmount",
        icon: Wallet,
        title: "Custo da meta",
        question: "Quanto custa para realizar este sonho?",
        inputProps: {
            placeholder: "Ex.: 15.000,00",
            prefix: "R$",
            maxLength: 12,
        }
    },
    {
        id: "goalDeadline",
        icon: CalendarClock,
        title: "Vamos estipular prazos...",
        question: "Em quanto tempo você planeja atingir este objetivo?",
        inputProps: {
            type: "number",
            placeholder: "Ex.: 12",
            suffix: "meses",
            min: 1,
            max: 120,
        },
        submitButtonProps: {
            label: 'Gerar Simulação  ',
            emojiIcon: " ✨"
        }
    },
] satisfies FormStepProps[]

export type SimulationFormData = Record<
(typeof simulationFormSteps)[number] ["id"], string>

export type SimulationRecord = SimulationFormData & {id: string}