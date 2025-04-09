import { useEffect, useState } from 'react'
import Texto from '../Texto'
import { Card, LinkBotao } from './styles'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceb0lo/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson)
      })
  }, [])

  return (
    <>
      {repos.map((repo) => (
        <Card key={repo.id}>
          <Texto fontWeight={true}>{repo.name}</Texto>
          <Texto color="cinza">{repo.description}</Texto>
          <LinkBotao href={repo.html_url} target="_blank">
            Visualizar
          </LinkBotao>
        </Card>
      ))}
    </>
  )
}

export default Projeto
