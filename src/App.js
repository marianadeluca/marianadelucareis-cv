import './App.scss';

import Header from './components/header/header.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionSkills from './components/section-skills/section-skills.component';
import SectionWorkExperience from './components/section-work-experience/section-work-experience.component';

// https://rodrilima.medium.com/react-como-fazer-o-deploy-no-github-pages-87f6a6fde370
// https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb
// https://blog.shahednasser.com/how-to-internationalize-a-react-app/#:~:text=The%20easiest%20way%20to%20internationalize,but%20most%20importantly%20with%20React.



function App() {

  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionSkills />
      <SectionWorkExperience />
    </div>
  );
}

export default App;
