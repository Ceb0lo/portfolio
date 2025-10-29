import Avatar from '../../components/Avatar'
import Texto from '../../components/Texto'
import { Descricao, IconLink, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Texto fontSize={20} fontWeight={true}>
        Erick Lemos
      </Texto>
      <Texto fontSize={16} color="cinza">
        Ceb0lo
      </Texto>
      <Descricao fontSize={12}>
        Desenvolvedor Full Stack | Front End | Back End
      </Descricao>
      <IconLink>
        <a href="https://github.com/Ceb0lo" target="_blank" rel="noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Icone do GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ericklemosdasilva"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt="Icone do Linkedin"
          />
        </a>
        <a
          href="mailto:ericklemos2001@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Icone do Email"
          />
        </a>
      </IconLink>
    </SidebarContainer>
  </aside>
)

export default Sidebar
