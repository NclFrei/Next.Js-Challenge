"use client";

import IconMais from "@/img/IconMain.svg";
import IconMenu from "@/img/Icon menu.svg";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const Section = styled.div`
    height: 100vh;
    transition: width 0.3s ease;
`;

const SectionMenuFechado = styled.aside`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    width: 200%;
    background-color: #089CE2;
    padding-top: 30px;
    gap: 40px;
    transition: width 0.3s ease;
`;

const SectionMenuAberto = styled.div`
    display: flex;
    flex-direction: column;
    width: 150%;
    height: 100vh;
    background-color: #089CE2;
    padding: 30px;
    gap: 20px;
    transition: width 0.3s ease;
`;

const NovaConversa = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid white;
    border-radius: 25px;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    margin-top: 40px;
    cursor: pointer;
    

    i {
      font-style: normal;
      font-size: 30px;
    }
`;

const Recentes = styled.div`
    color: white;
    font-size: 1.3rem;
`;

const ItensRecentes = styled.li`
    color: white;
    font-size: 1rem;
    margin-bottom: 5px;
    margin-left: 10px;
`;

export default function Menu() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <Section>
            {isMenuOpen ? (
                <SectionMenuAberto>
                    <a onClick={toggleMenu}>
                        <Image src={IconMenu} alt="Icone do menu" />
                    </a>
                    <NovaConversa>
                        <i>+</i>Nova conversa
                    </NovaConversa>
                    <Recentes>Recentes</Recentes>
                    <ul>
                        <a href="/ChatBateria"><ItensRecentes>Problema na direção</ItensRecentes></a>
                        <ItensRecentes>Bateria não da carga</ItensRecentes>
                    </ul>
                </SectionMenuAberto>
            ) : (
                <SectionMenuFechado>
                    <a onClick={toggleMenu}>
                        <Image src={IconMenu} alt="Icone do menu" />
                    </a>
                    <a href="/Chat">
                        <Image src={IconMais} alt="Icon adicionar nova mensagem" /> 
                    </a>
                </SectionMenuFechado>
            )}
        </Section>
    );
}
