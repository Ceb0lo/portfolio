import styled from 'styled-components'
import Texto from '../../components/Texto'

export const Descricao = styled(Texto)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
export const IconLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  margin-bottom: 40px;

  img {
    max-width: 100%;
    height: 26px;
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    display: block;

    img {
      margin-right: 18px;
    }
  }
`
