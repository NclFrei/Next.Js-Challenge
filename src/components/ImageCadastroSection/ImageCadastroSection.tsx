"use client";

import ImgArrumandoCarro from "@/img/Arrumando Carro.svg"
import Image from "next/image";
import styled from 'styled-components'

const ContainerImg = styled.div`
  width: 50%;
  background-color: #A4C6CF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

    .ImgCar {
      width: 60%;
    }
`


export default function ImageLoginSection() {
    return( 
        <ContainerImg>
            <Image className="ImgCar" src={ImgArrumandoCarro} alt="Mecanicos arrumando o carro"/>
        </ContainerImg>
    )
}