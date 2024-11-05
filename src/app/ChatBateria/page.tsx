"use client";

import styled from "styled-components";
import Menu from "@/components/Menu/Menu";
import NavBar from "@/components/NavBar/NavBar";
import imgBateria from "@/img/Img Bateria.svg";
import Image from "next/image";
import IconIA from "@/img/Icon Ia.svg"
import IconPerfil from "@/img/Icon Perfil.svg"

const Div = styled.div`

  display: flex;

  width: 100%;

  height: 100vh;

  font-family: "Inter", sans-serif;

`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .inputBox {
     height: 40%;
     width: 60%;
     display: flex;
     justify-content: center;
     
     input {
       width: 50vw;
       height: 40px;
       border-radius: 15px;
       border: solid 2px #bcbcbc;
       color: #000;
       padding: 10px 0 10px 10px;
       font-size: 1rem;
     }
   }
`;

const ChatContainer = styled.div`

  width: 90%;

  height: 80vh;

  background-color: white;

  overflow-y: auto;

  padding: 20px;

  display: flex;

  flex-direction: column;

  gap: 15px;


`;

const Message = styled.div`

  display: flex;
  align-items: center;
  gap: 10px;

`;

const MessageIcon = styled.span`

  font-size: 2rem;

  color: #007bff;

`;

const MessageText = styled.div`
  padding: 10px;

  border-radius: 10px;

  width: 100%;

`;

const Suggestion = styled.div`

  margin: 0 auto;
  width: 60%;
  display: flex;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

`;

const ButtonContainer = styled.div`

  display: flex;

  justify-content: center;

  margin-top: 10px; gap: 20px;

`;

const Button = styled.button`

  width: 20%;

  padding: 10px;

  border: none;

  border-radius: 5px;

  color: white;

  font-weight: bold;

  cursor: pointer;
&.button-yes {

    background-color: #007bff;

  }
&.button-no {

    background-color: #ccc;

  }

`;

const Link = styled.span`

  color: #007bff;

  text-decoration: underline;

  cursor: pointer;

`;

export default function ChatBateria() {

    return (
        <Div>
            <Menu />
            <Container>
                <NavBar />
                <ChatContainer>
                    <Message>
                        <MessageIcon><Image src={IconIA} alt="Icone da Ia"/></MessageIcon>
                        <MessageText>Ótimo! Vamos dar uma olhada no seu Honda Civic 2019. Para te ajudar da melhor forma, me diga quais são os sintomas que você está percebendo?</MessageText>
                    </Message>
                    <Message>
                        <MessageIcon><Image src={IconPerfil} alt="Icone da Ia"/></MessageIcon>
                        <MessageText>Eu tento ligar o meu carro e ele não aparece nada no painel nem dá sinal de vida.</MessageText>
                    </Message>
                    <Message>
                        <MessageIcon><Image src={IconIA} alt="Icone da Ia"/></MessageIcon>
                        <MessageText>

                            Algumas possibilidades para esse problema:
                            <ul>
                                <li><b>Bateria descarregada:</b> Se a bateria estiver muito fraca, o carro pode não ter energia suficiente para ligar os componentes eletrônicos e o motor.</li>
                            </ul>

                            O que você pode fazer:
                            <ul>
                                <li>Tentar dar uma &quot;chupeta&quot; na bateria. Se tiver outro carro por perto, pode tentar ligar o seu usando a bateria do outro veículo.</li>
                            </ul>
                        </MessageText>
                    </Message>
                    <Suggestion>
                        <Image src={imgBateria} alt="Bateria de Carro"/>
                        <div>
                            <p><b>Bateria de Carro</b><br />Uma bateria de carro é um dispositivo essencial que fornece energia para iniciar o motor e alimentar sistemas elétricos do veículo.</p>
                        </div>                       
                    </Suggestion>
                    <Message>
                        <MessageIcon><Image src={IconIA} alt="Icone da Ia"/></MessageIcon>
                        <MessageText>

                            Deseja marcar um horário no <Link>Centro Automotivo Porto Seguro</Link> mais perto de você?
                        </MessageText>
                    </Message>
                    <ButtonContainer>
                        <Button className="button-yes">Sim</Button>
                        <Button className="button-no">Não</Button>
                    </ButtonContainer>
                </ChatContainer>
            </Container>
        </Div>

    );

} 