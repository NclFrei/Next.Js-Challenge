"use client"


import { TipoCliente } from '@/types/types'
import { useState } from 'react'
import styled from 'styled-components'

const FormSection = styled.div`
    width: 40%;
    margin: 20px 40px 0 30px;

    h2 {
        font-size: 2rem;
        font-weight: 500; 
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    div div{
        width: 45%;
        display: flex;
        flex-direction: column;
    }
`
const TituloInput = styled.label`
    font-size: 1.2rem;
`

const Input = styled.input `
    flex-direction: column;
    padding: 10px;
    margin: 2px 0 10px 0;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const Button = styled.button`
  text-align: center;
  width: 50%;
  padding: 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #089CE2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export default function FormCadastro() {

    const [cliente, setCliente] = useState<TipoCliente>({
        nome:"",
        telefone: 0,
        cpf:"",
        data_nascimento:"",
        endereco:"",
        email:"",
        senha:"", 
    })

    const handleChange = (evento:React.ChangeEvent<HTMLInputElement>)=> {
            const {name, value} = evento.target;
            setCliente({...cliente,[name]:value})
    }

    const handleSubmit = async(evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();

        try {
            const reponse = await fetch("http://localhost:8080/myresource/postar", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(cliente)
            });

            if(reponse.ok) { 
                alert("Cadastro feito com sucesso!")
                setCliente({
                    nome:"",
                    telefone: 0,
                    cpf:"",
                    data_nascimento:"",
                    endereco:"",
                    email:"",
                    senha:"",
                });

            }
        } catch (error) {
            console.error("Falha no cadastro ", error)
        }
    }

    return (
        <FormSection>
            <h2>Faça seu cadastro!</h2>
            <Form onSubmit={handleSubmit}>
                <div>

                    <div>
                        <TituloInput>Nome completo</TituloInput>
                        <Input type="text" name='nome' id="idNome" value={cliente.nome} onChange={(evento)=> handleChange(evento)} placeholder="Digite seu nome"/>
                    </div>

                    <div>
                        <TituloInput>Telefone</TituloInput>
                        <Input type="tel" name="telefone" id="idTelefone" value={cliente.telefone} onChange={(evento)=> handleChange(evento)} placeholder="(XX) XXXXX-XXXX"/>
                    </div>
                </div>

                <div>
                    <div>
                        <TituloInput>CPF: </TituloInput>
                        <Input type="text" name="cpf" id="idCpf" value={cliente.cpf} onChange={(evento)=> handleChange(evento)}   placeholder="Apenas números" />
                    </div>
                    
                    <div>
                        <TituloInput>Data de nascimento: </TituloInput>
                        <Input type="date" id="idData_nascimento" value={cliente.data_nascimento} name="data_nascimento"  onChange={(evento) => handleChange(evento)}/>
                    </div>
                    
                </div>
                
                <TituloInput>Endereco completo</TituloInput>
                <Input type="text" name='endereco' id="idEndereco" value={cliente.endereco} onChange={(evento)=> handleChange(evento)} placeholder="Avenida / Rua, bairro, cidade e numero"/>

                <TituloInput>E-mail: </TituloInput>
                <Input type="text" name='email' id="idE-mail" value={cliente.email} onChange={(evento)=> handleChange(evento)} placeholder="E-mail@email.com"/>

                <TituloInput>Senha: </TituloInput>
                <Input type="password" name="senha" id="idSenha" value={cliente.senha} onChange={(evento)=> handleChange(evento)} />

                <Button>CADASTRAR</Button>
            </Form>
        </FormSection>
    )
}