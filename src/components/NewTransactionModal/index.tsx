import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>
                    Nova Transação
                </Dialog.Title>

                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>


                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}