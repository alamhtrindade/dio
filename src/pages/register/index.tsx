
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { IFormData } from './types'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Column, Container, Row, SubtitleLogin, Title, TitleLogin, Wrapper, DivButton, AceiteText } from './styles'

const schema = yup.object({
    nome: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('email inválido').required('Campo Obrigatório'),
    senha: yup.string().min(3,'No mínimo 3 Caracteres').required('Campo Obrigatório'),
  }).required();


const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    
    const onSubmit = (formData: IFormData) => {
        try{
            alert(schema);
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
                        
                        <TitleLogin> Comece agora grátis</TitleLogin>
                        <SubtitleLogin> Crie sua conta e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nome"   errorMessage={errors?.nome?.message}  control={control} placeholder="Nome" leftIcon={<MdPerson /> } />
                            <Input name="email"   errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail /> } />
                            <Input name="password" errorMessage={errors?.senha?.message} control={control}placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <DivButton>
                                <Button title="Criar Minha Conta" variant="secondary" type="submit" />
                            </DivButton>
                        </form>
                        <Row>
                            <AceiteText>Ao clicar em "criar minha conta  grátis",
                                declaro que aceito as Políticas de 
                                Privacidade e os Termos de Uso da DIO.
                             <br />
                            já tenho conta. <a href="./login" >Fazer Login</a>
                            </AceiteText>
                        </Row>
                    </Wrapper>
                    
               </Column>
            </Container>
        </>
    )
}

export {Register}