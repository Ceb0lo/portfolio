import Texto from '../../components/Texto'
import { Github } from './styles'

const Sobre = () => (
  <section>
    <Texto fontSize={16} fontWeight={true}>
      Sobre
    </Texto>
    <Texto>
      Sou desenvolvedor Full Stack em formação pela EBAC. Tenho trabalhado em
      projetos que envolvem HTML, CSS, JavaScript e React, além de estar me
      aprofundando em Python e SQL. Gosto de aprender coisas novas, resolver
      problemas de forma criativa e transformar ideias em projetos reais.
    </Texto>
    <Github>
    </Github>
  </section>
)

export default Sobre
