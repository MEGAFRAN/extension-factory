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
  clubtalEnvironments : {
    urls: ['https://www.clubtal.com','https://dev.clubtal.com'],
    names: ['Production', 'Development'],
    title: 'Clubtal websites'
  },
  clubtalSocialMedia: {
    urls: [
      'https://www.facebook.com/people/Clubtal-English/pfbid067t2Szxv2sfomcpPhDxD2oDmnQBNToGWMQy42Z6bBQd1UswAn2MM4pk5TS5ceAArl/',
      'https://www.facebook.com/people/Clubtal-Esp/pfbid0Xy1QD2DDm4obQz75E259Ehk7vKTFNr53FFkwVujDu5RfcLBNqLAt8dCjxWqr8Xfol/',
      'https://www.instagram.com/clubtal_en/',
      'https://www.instagram.com/clubtal_es/'
    ],
    names: [
      'Facebook english', 
      'Facebook español', 
      'Instagram english', 
      'Instagram español'
    ],
    title: 'Social media'
  },
  clubtalRepos: {
    urls: ['https://github.com/MEGAFRAN/clubtal'],
    names: ['Github website'],
    title: 'Code repos'
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
