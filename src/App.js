import './App.scss';

import Header from './components/header/header.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionSkills from './components/section-skills/section-skills.component';

function App() {

  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionSkills />
    </div>
  );
}

export default App;
