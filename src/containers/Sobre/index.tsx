import Texto from '../../components/Texto'
import { ProgrammingIcon } from './styles'

const Sobre = () => (
  <section>
    <Texto fontSize={18} fontWeight={true}>
      Olá, eu sou Erick Lemos
    </Texto>
    <Texto>
      🎓 Desenvolvedor Full Stack Python formado pela EBAC – Escola Britânica de
      Artes Criativas e Tecnologia.
    </Texto>
    <Texto fontSize={16} fontWeight={true}>
      🛠️ Tecnologias & Ferramentas
    </Texto>
    <Texto fontSize={14} fontWeight={true}>
      💻 Front-end
    </Texto>
    <ProgrammingIcon>
      <img
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5"
      />
      <img
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
        alt="CSS"
      />
      <img
        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
        alt="JavaScript"
      />
      <img
        src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
        alt="TypeScript"
      />
      <img
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
        alt="React"
      />
      <img
        src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
        alt="jQuery"
      />
      <img
        src="https://img.shields.io/badge/AJAX-005571?style=for-the-badge"
        alt="AJAX"
      />
      <img
        src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
        alt="Sass"
      />
      <img
        src="https://img.shields.io/badge/Less-1D365D?style=for-the-badge&logo=less&logoColor=white"
        alt="Less"
      />
    </ProgrammingIcon>
    <Texto fontSize={14} fontWeight={true}>
      ⚙️ Back-end
    </Texto>
    <ProgrammingIcon>
      <img
        src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
        alt="Python"
      />
      <img
        src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
        alt="Django"
      />
      <img
        src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="SQL"
      />
    </ProgrammingIcon>
    <Texto fontSize={14} fontWeight={true}>
      🔧 Ferramentas & DevOps
    </Texto>
    <ProgrammingIcon>
      <img
        src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
        alt="GitHub"
      />
      <img
        src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
        alt="Docker"
      />
      <img
        src="https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white"
        alt="Gulp"
      />
      <img
        src="https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white"
        alt="Gulp"
      />
      <img
        src="https://img.shields.io/badge/Grunt-FBA919?style=for-the-badge&logo=grunt&logoColor=black"
        alt="Grunt"
      />
    </ProgrammingIcon>
  </section>
)

export default Sobre
