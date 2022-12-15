import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/logo_dio.png'

import { Button } from '../Button'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    Row,
    MenuRight,
    Wrapper,
    UserPicture
} from './styles'

import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
const navigate = useNavigate();

  const handleClickSignIn = () =>{
    navigate('/login')
  }
  const handleClickRegister = () =>{
    navigate('/register')
  }
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/47890311?v=4" />
                ) : (
                    <>
                        <MenuRight href="/"> Home </MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="Cadastrar" onClick={handleClickRegister}/>  
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }