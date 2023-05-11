import Head from 'next/head';
import styles from '../app/styles/Home.module.scss';
import { ButtonPanel } from '../app/components/button_panel/button_panel';

type QuickLink = {
  urls: string[];
  names: string[];
  title: string;
};

type QuickLinksData = {
  [key: string]: QuickLink;
};

const quickLinksData: QuickLinksData = {
  clubtalEnvironments : {
    urls: ['https://www.clubtal.com','https://dev.clubtal.com'],
    names: ['Produccion', 'Desarrollo'],
    title: 'Clubtal websites'
  },
  clubtalRepos: {
    urls: ['https://github.com/MEGAFRAN/clubtal'],
    names: ['Github Sitio web'],
    title: 'Code repos'
  },
  clubtalProjects : {
    urls: [
    'https://clubtal.atlassian.net/jira/software/projects/WA/boards/15',
    'https://clubtal.atlassian.net/jira/software/projects/MAR/boards/17',
    'https://clubtal.atlassian.net/jira/software/c/projects/HR/boards/3',
    'https://clubtal.atlassian.net/jira/software/projects/DES/boards/8',
    'https://clubtal.atlassian.net/jira/software/projects/IDEA/boards/9',
    'https://clubtal.atlassian.net/jira/software/projects/ON/boards/10'
    ],
    names: ['Web AI', 'Marketing', 'Hr', 'Design', 'Idea', 'On Boarding'],
    title: 'Jira projects'
  },
  clubtalDocumentation : {
    urls: [
    'https://clubtal.atlassian.net/wiki/spaces/WEB/overview',
    'https://clubtal.atlassian.net/wiki/spaces/TEC/overview'
    ],
    names: ['General', 'Software'],
    title: 'Confluence documentation'
  },
  clubtalAnalytics : {
    urls: [
    'https://analytics.google.com/analytics/web/#/p326662031/reports/intelligenthome',
    'https://tagmanager.google.com/#/container/accounts/6053376668/containers/91138574/workspaces/5',
    'https://search.google.com/search-console?resource_id=sc-domain%3Aclubtal.com'
    ],
    names: ['Google analytics', 'Google tag manager', "Google search console"],
    title: 'Analytics'
  },
  clubtalTools : {
    urls: [
    'https://www.deepl.com/translator',
    'https://chat.openai.com/chat',
    'https://www.google.com/',
    'https://www.youtube.com/'
    ],
    names: ['Traductor idiomas', 'Chat Gpt', 'Google', 'Youtube'],
    title: 'General tools'
  }
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
        {
          Object.keys(quickLinksData).map((key, index) => {
            const {title, urls, names} = quickLinksData[key];
            return (
              <div key={index}>
                <p>{title}</p>
                <ButtonPanel numberOfButtons={names.length} arrayOfLinks={urls} arrayOfNames={names} />
              </div>
            );
          })
        }
      </main>
    </>
  )
}
