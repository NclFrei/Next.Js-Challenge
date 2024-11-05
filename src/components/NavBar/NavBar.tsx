"use client";

import IconPerfil from "@/img/Icon Perfil.svg"
import Image from "next/image";
import styled from 'styled-components';

const MenuCabelho = styled.header`
   width: 100%;
   z-index: 1000;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 12px 12px 0 12px;

   h6 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  div {
    display: flex;
    align-items: center;

  p {
    margin-right: 10px;
    font-size: 12px;
  }
    
  .IconePerfil{
    width: 25%;
  }
`;

export default function NavBar() {
    return(
        <MenuCabelho>
            <div className="profile">
                <p>Nome do Usuario</p>
                <Image className='IconePerfil' src={IconPerfil} alt="Icone perfil"/>
            </div>
        </MenuCabelho>

    )

}