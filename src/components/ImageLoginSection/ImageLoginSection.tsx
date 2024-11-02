"use client";

import ImgArrumandoCarro from "@/img/Arrumando Carro.svg"
import Image from "next/image";
import styled from 'styled-components'

const ContainerImg = styled.div`
  width: 60%;
  background-color: #A4C6CF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

    .ImgCar {
      width: 60%;
    }
`

const Paragraph = styled.p `
    color: #FFF;
    font-weight: 600;
    font-size: 2rem;
    width: 80%;
    margin-bottom: 10px;
`

export default function ImageLoginSection() {
    return( 
        <ContainerImg>
            <Paragraph>Abra a porta para solucionar os problemas do seu carro e dirija com tranquilidade</Paragraph>
            <Image className="ImgCar" src={ImgArrumandoCarro} alt="Mecanicos arrumando o carro"/>
        </ContainerImg>
    )
}