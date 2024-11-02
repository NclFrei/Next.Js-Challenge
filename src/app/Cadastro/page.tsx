"use client"

import styled from 'styled-components'
import ImageCadastroSection from '@/components/ImageCadastroSection/ImageCadastroSection'
import FormCadastro from '@/components/FormCadastro/FormCadastro'

const Main = styled.main`
    display: flex;
    height: 100vh;
`



export default function Cadastro() {
    return (
        <Main>  
            <ImageCadastroSection/>
            <FormCadastro />
        </Main>
    )
}