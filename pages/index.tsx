import Head from 'next/head';
import styles from '../app/styles/Home.module.scss';
import { ButtonPanel } from '../app/components/button_panel/button_panel';

const clubtalEnvironments = {
  urls: ['https://www.clubtal.com','https://dev.clubtal.com'],
  names: ['Produccion', 'Desarrollo']
}
const clubtalRepos = {
  urls: ['https://github.com/MEGAFRAN/clubtal'],
  names: ['Github Sitio web']
}
const clubtalJira = {
  urls: [
  'https://clubtal.atlassian.net/jira/software/projects/WA/boards/15',
  'https://clubtal.atlassian.net/jira/software/c/projects/HR/boards/3',
  'https://clubtal.atlassian.net/jira/software/projects/DES/boards/8',
  'https://clubtal.atlassian.net/jira/software/projects/IDEA/boards/9',
  'https://clubtal.atlassian.net/jira/software/projects/ON/boards/10'
  ],
  names: ['Web AI', 'Hr', 'Design', 'Idea', 'On Boarding']
}
const clubtalConfluence = {
  urls: [
  'https://clubtal.atlassian.net/wiki/spaces/WEB/overview',
  'https://clubtal.atlassian.net/wiki/spaces/TEC/overview'
  ],
  names: ['General', 'Software']
}
const clubtalTools = {
  urls: [
  'https://www.deepl.com/translator',
  'https://chat.openai.com/chat',
  'https://www.google.com/',
  'https://www.youtube.com/'
  ],
  names: ['Traductor idiomas', 'Chat Gpt', 'Google', 'Youtube']
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Clubtal Links</title>
        <meta name="description" content="Links de utilidad para los miembros de Clubtal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Sitios web clubtal</p>
        <ButtonPanel numberOfButtons={clubtalEnvironments.names.length} arrayOfLinks={clubtalEnvironments.urls} arrayOfNames={clubtalEnvironments.names} />
        <p>Repositorios</p>
        <ButtonPanel numberOfButtons={clubtalRepos.names.length} arrayOfLinks={clubtalRepos.urls} arrayOfNames={clubtalRepos.names} />
        <p>Projectos Jira</p>
        <ButtonPanel numberOfButtons={clubtalJira.names.length} arrayOfLinks={clubtalJira.urls} arrayOfNames={clubtalJira.names} />
        <p>Documentacion Confluence</p>
        <ButtonPanel numberOfButtons={clubtalConfluence.names.length} arrayOfLinks={clubtalConfluence.urls} arrayOfNames={clubtalConfluence.names} />
        <p>Herramientas</p>
        <ButtonPanel numberOfButtons={clubtalTools.names.length} arrayOfLinks={clubtalTools.urls} arrayOfNames={clubtalTools.names} />
      </main>
    </>
  )
}
