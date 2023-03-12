import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Deseneolvimejnto</td>
                            <td>preoc</td>
                            <td>
                                <PriceHighlight variant="income">venda</PriceHighlight>
                            </td>
                            <td>data</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Deseneolvimejnto</td>
                            <td>preoc</td>
                            <td>venda</td>
                            <td>data</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div >
    )
}