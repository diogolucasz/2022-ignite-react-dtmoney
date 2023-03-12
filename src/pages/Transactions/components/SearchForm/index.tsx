import { SearchFormContainer } from "./styles";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Procurar uma transacao" />
            <button type="submit">
                <MagnifyingGlassIcon />
                Procurar
            </button>
        </SearchFormContainer>
    )
}