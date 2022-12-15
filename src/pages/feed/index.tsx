import { Header } from '../../components/Header'
import { Card   } from '../../components/Card'
import { UserInfo  } from '../../components/UserInfo'

import { Column, Container, Title, TitleHighLight } from './styles'

const Feed = () => {
    return(
        <> 
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title> Feed </Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight> #RANKING 5 TOP DA SEMANA </TitleHighLight>
                    <UserInfo percentual={80} nome="Alam Henrique" image="https://avatars.githubusercontent.com/u/47890311?v=4" />
                    <UserInfo percentual={75} nome="Alam Henrique" image="https://avatars.githubusercontent.com/u/47890311?v=4" />
                    <UserInfo percentual={65} nome="Alam Henrique" image="https://avatars.githubusercontent.com/u/47890311?v=4" />
                    <UserInfo percentual={53} nome="Alam Henrique" image="https://avatars.githubusercontent.com/u/47890311?v=4" />
                    <UserInfo percentual={12} nome="Alam Henrique" image="https://avatars.githubusercontent.com/u/47890311?v=4" />
                </Column>
                
                

            </Container>
        </>
    )
}

export { Feed }