
import { MdEmail, MdLock } from 'react-icons/md'

import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { api } from '../../services/api'

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

import { IFormData } from './types'

const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo Obrigatório'),
    senha: yup.string().min(3,'No mínimo 3 Caracteres').required('Campo Obrigatório'),
  }).required();


const Login = () => {
    
    const navigate = useNavigate();

    
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`)
            
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Algo saiu mal...')
            }
        }catch{
            alert('Deu ruim');
        }
    };


    return(
        <> 
            <Header />
            <Container>
               <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
               </Column>
               <Column>
                    <Wrapper>
                        
                        <TitleLogin> Faça seu Cadastro</TitleLogin>
                        <SubtitleLogin> Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email"   errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail /> } />
                            <Input name="password" errorMessage={errors?.senha?.message} control={control}placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                    
               </Column>
            </Container>
        </>
    )
}

export {Login}