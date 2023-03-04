import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowUpCircleIcon, ArrowDownCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowUpCircleIcon height={32} color="#00b37e" />
                </header>
                <strong>32131</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowDownCircleIcon height={32} color="#f75a68" />
                </header>
                <strong>32131</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollarIcon height={32} color="#00b37e" />
                </header>
                <strong>32131</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}