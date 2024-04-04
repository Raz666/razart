import SkillEntry from "./SkillEntry";

export default function Skills() {
  const getDate = (year: number, month: number) => {
    const rawDate = new Date(year, month);
    return rawDate.toDateString();
  };

  return (
    <section className="py-4">
      <h3 className="text-2xl">Education & skills</h3>

      <SkillEntry skill="Education">
        <SkillEntry.Language
          language="Computer Science, Software Engineering"
          level="Master of Science"
        />

        <SkillEntry.TitledSection title="Courses">
          <li>
            Master thesis: "Requirement model transformation into presentation
            layer in Flex technology"
          </li>
          <li>
            Bachelor thesis: "Web application project and mock-up — multimedia
            catalogue"
          </li>
        </SkillEntry.TitledSection>
      </SkillEntry>

      <SkillEntry skill="Skills">
        <SkillEntry.TitledSection title="Development">
          <li>HTML5, CSS3 [ Bootstrap,Semantic UI ]</li>
          <li>Javascript [ ES6, AngularJS,ReactJS ]</li>
          <li>SQL</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Platforms">
          <li>Jira, Conuence</li>
          <li>Bitbucket, Azure Devops</li>
          <li>Team City, Octopus</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Development software">
          <li>Visual Studio Code</li>
          <li>Oracle SQL Developer</li>
          <li>SQL Server Management Studio</li>
          <li>Enterprise Architect</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Image editing software">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Documentation software">
          <li>MS Ofce</li>
          <li>LaTeX Editor</li>
        </SkillEntry.TitledSection>
      </SkillEntry>

      <SkillEntry skill="Languages">
        <SkillEntry.Language language="English" level="Full proficiency" />
        <SkillEntry.Language language="Polish" level="Native speaker" />
        <SkillEntry.Language language="Japanese" level="Intermediate" />
      </SkillEntry>

      <SkillEntry skill="Interests">
        <SkillEntry.TitledSection title="Technology & Science">
          <li>
            <a href="https://www.youtube.com/@mkbhd">@mkbhd</a> /{" "}
            <a href="https://www.youtube.com/@WaveformClips">@WaveformClips</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@LinusTechTips">@LinusTechTips</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@SciShow">@SciShow</a>
          </li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Fantasy & Sci-Fi">
          <li>books, movies, tv series — you name it :]</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Role-playing games">
          <li>The Witcher, World of Warcraft</li>
          <li>Magic The Gathering</li>
          <li>Various cardboard games</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title="Japanese">
          <li>language</li>
          <li>culture</li>
          <li>manga & anime</li>
        </SkillEntry.TitledSection>
      </SkillEntry>
    </section>
  );
}
