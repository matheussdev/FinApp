import {Container} from "./style"
export function Header(){
    return(
        <Container>
            {new Intl.DateTimeFormat('pt-br').format(new Date().getTime())}
        </Container>
    )
}