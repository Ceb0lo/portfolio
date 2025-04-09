import Texto from '../../components/Texto'
import { Github } from './styles'

const Sobre = () => (
  <section>
    <Texto fontSize={16} fontWeight={true}>
      Sobre
    </Texto>
    <Texto>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint,
      nihil odit explicabo officiis iste vero. Temporibus recusandae obcaecati,
      eos ipsa enim reiciendis at? Vero quidem beatae repellat eligendi omnis?
    </Texto>
    <Github>
      <img src="https://github-readme-stats.vercel.app/api?username=ceb0lo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ceb0lo&layout=compact&langs_count=7&theme=dracula" />
    </Github>
  </section>
)

export default Sobre
