import {Trans} from 'react-i18next';
import './About.css';
import {Container} from "@mui/material";

export const About = () => {
  return <Container>
    <h1>About</h1>
    <Trans i18nKey={"about.desc"}>self description!!</Trans>
    <table>
      <tbody>
      <tr>
        <th><Trans i18nKey={"about.head.name"}/></th>
        <td><Trans i18nKey={"about.body.name"}/></td>
      </tr>
      <tr>
        <th><Trans i18nKey={"about.head.nickname"}/></th>
        <td><Trans i18nKey={"about.body.nickname"}/></td>
      </tr>
      <tr>
        <th><Trans i18nKey={"about.head.born"}/></th>
        <td><Trans i18nKey={"about.body.born"}/></td>
      </tr>
      <tr>
        <th><Trans i18nKey={"about.head.upbringing"}/></th>
        <td><Trans i18nKey={"about.body.upbringing"}/></td>
      </tr>
      <tr>
        <th><Trans i18nKey={"about.head.hobby"}/></th>
        <td><Trans i18nKey={"about.body.hobby"}/></td>
      </tr>
      </tbody>
    </table>
  </Container>
}

export default About;