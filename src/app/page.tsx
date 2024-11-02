"use client";

import ImageLoginSection from '@/components/ImageLoginSection/ImageLoginSection';
import FormLogin from '@/components/FormLogin/FormLogin';


import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    height: 100vh;
`




export default function Home() {
  return(
    <Main>
      <ImageLoginSection />
      <FormLogin />
    </Main>
  )
}