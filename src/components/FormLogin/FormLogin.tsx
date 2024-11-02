"use client";
import styled from 'styled-components'
import Cadastro from '@/app/Cadastro/page';

const FormSection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContainerForm = styled.div`
    border: 1px solid #989898;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
`

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
`

const Formdiv = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkText = styled.a`
  color: #089CE2;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #089CE2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

`;

const Span = styled.span`
  margin-right: 2px;
  color: #989898;
  font-weight: 400
`

const ContainerLearnMore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Split = styled.div`
  border: 1px solid #989898;
  margin-bottom: 5px;
`

const Paragraph = styled.p`
    font-weight: 200;
    font-size: 0.7rem;
    `



export default function FormLogin() {
    return (
        <FormSection>
            <ContainerForm>
              <Title>Acessar Conta</Title>
              <Formdiv>
                  <Input type="text" placeholder="Digite o seu CPF" value=""/>
                  <Input type="password" placeholder="Senha" value=""/>
                  <LinkContainer>
                      <LinkText href="#">Esqueci minha senha</LinkText>
                  </LinkContainer>
                  <Button type="submit">ENTRAR</Button>
              </Formdiv>
              <ContainerLearnMore>
                <div>
                  <Span>Não tem uma Conta?</Span>
                  <LinkText href='/Cadastro'>Cadastre-se</LinkText>
                </div>
                <Split></Split>
                <p><strong>O Que é ReparoRápido?</strong></p>
                <Paragraph>Acesse as informações e descubra tudo o que o ReparoRápido pode te oferecer</Paragraph>
                <Button>Saiba mais</Button>
                <p>Aponta a camêra do celular e <LinkText href="#">Saiba mais!</LinkText></p>
                <img src="null" alt=""/>
              </ContainerLearnMore>
            </ContainerForm>
        </FormSection>
    )
}
