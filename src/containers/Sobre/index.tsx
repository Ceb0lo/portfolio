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
      <img src="https://github-readme-stats.vercel.app/api?username=ceb0lo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ceb0lo&layout=compact&langs_count=7&theme=dracula" />
    </Github>
  </section>
)

export default Sobre
