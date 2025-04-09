import styled from 'styled-components'
import { Props } from '.'

export const Texto = styled.p<Props>`
  color: ${(props) => (props.color === 'cinza' ? '#949494' : '#282a35')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: ${(props) => (props.fontWeight ? 'bold' : 'none')};
  line-height: 22px;
  margin-bottom: 16px;
`
