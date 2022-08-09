import { Trans } from 'react-i18next';

export const About = () => {
  return <div>
    <h1>About</h1>
    <Trans i18nKey={"about.desc"}>self description!!</Trans>
  </div>
}

export default About;