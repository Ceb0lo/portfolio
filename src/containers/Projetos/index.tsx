import Projeto from '../../components/Projetos'
import Texto from '../../components/Texto'
import { ListaDeProjetos } from './styles'

const Projetos = () => (
  <section>
    <Texto fontSize={16} fontWeight={true}>
      Projetos
    </Texto>
    <ListaDeProjetos>
      <Projeto />
    </ListaDeProjetos>
  </section>
)

export default Projetos
