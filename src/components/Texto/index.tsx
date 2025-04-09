import { Texto as TextoEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontWeight?: boolean
  color?: string
}

const Texto = (porps: Props) => (
  <TextoEstilo
    fontSize={porps.fontSize}
    fontWeight={porps.fontWeight}
    color={porps.color}
  >
    {porps.children}
  </TextoEstilo>
)

export default Texto
