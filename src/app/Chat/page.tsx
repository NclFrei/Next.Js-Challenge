"use client"


import styled from "styled-components";
import MenuAberto from "@/components/Menu/Menu";
import NavBar from "@/components/NavBar/NavBar";


const Div = styled.div`
   display: flex;
   width: 100%;
   height: 100vh;
   font-family: "Inter", sans-serif;

 `;


const Container = styled.div`
   width: 100%;
 `;

const Main = styled.main`
  width: 100%;
  height: 88%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .title {
    padding-left: 25%;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title strong {
    color: #089CE2;
  }
  .title h3 {
    margin: 0;
    font-size: 2.5rem;
  }

  .Mcards {
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: center;
    
  }
   .inputBox {
     height: 40%;
     width: 60%;
     display: flex;
     justify-content: center;
     align-items: end;
     
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

   @media (max-width: 1024px) {
   .title {
    padding-left: 25%;
    }

  }
    @media (max-width: 830px) {
      .Mcards div:nth-child(4) {
      display:none;
      }  
    }

   @media (max-width: 768px) {
   .title {
    padding-left: 20%;
    }
      .Mcards:nth-child(1) {
        display: none;
        visibility:hidden;  
      }

  }

  @media (max-width: 590px) {
      .Mcards div:nth-child(3) {
      display:none;
      }  

      .Mcards {
        flex-direction: column;     
      }
    }

  @media (max-width: 420px) {
  .title {
    padding-left: 15%;
    text-align: center;
    }

  .inputBox {
     width: 70%;
     input {
       width: 100vw;
        margin-left: 10%;
     }
}

    .title h3 {
    margin: 0;
    font-size: 2rem;
  }

  .Mcards {
  margin-left: 15%;
        width: 49%;
      }

}
  

 `;

export default function Chat() { 
    return(
        <Div>
            <MenuAberto /> 
            <Container>
                 <NavBar />
                <Main>
                    <div className="title">
                        <h3>
                            Olá <strong></strong>
                        </h3>
                        <h3>Como posso te ajudar?</h3>
                    </div>
                    <div className="Mcards">
                    </div>
                    <div className="inputBox">
                        <input placeholder="Digite seu problema" />
                    </div>
                </Main>
            </Container>
        </Div>
    )
}