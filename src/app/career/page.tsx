import CareerEntry from "./CareerEntry";

export default function Experience() {
  const getDate = (year: number, month: number) => {
    const rawDate = new Date(year, month);
    return rawDate.toDateString();
  };

  return (
    <section className="py-4">
      <h3 className="text-2xl">Experience</h3>

      <CareerEntry company="British Council">
        <CareerEntry.Position
          position="Principal Front-end Developer"
          startDate={getDate(2021, 6)}
        />
        <CareerEntry.Description>TBD</CareerEntry.Description>
      </CareerEntry>

      {
        ////////////////////////////////////////////////////////////////
      }

      <CareerEntry company="spaceOS">
        <CareerEntry.Position
          position="Front-end Developer"
          startDate={getDate(2020, 5)}
          endDate={getDate(2021, 5)}
        />
        <CareerEntry.Description>
          I became part of a dynamic team of great developers working on an
          evolving startup project creating an app for workspace users and
          managers. My role was focused on bringing new designs to life in our
          web app.
        </CareerEntry.Description>
        <CareerEntry.Highlights>
          <li>translating new design requirements into Angular code</li>
          <li>thoroughly testing my implementation</li>
          <li>keeping our codebase at top quality and efficiency</li>
          <li>
            taking active part in discussions about our organisation of work and
            technologies used
          </li>
        </CareerEntry.Highlights>
        <CareerEntry.TitledSection title="Technologies">
          Angular 6, TypeScript, Sass, HTML5
        </CareerEntry.TitledSection>
        <CareerEntry.TitledSection title="Tools">
          VS Code, Fork, Chrome DevTools, Jira, GitHub
        </CareerEntry.TitledSection>
      </CareerEntry>

      {
        ////////////////////////////////////////////////////////////////
      }

      <CareerEntry company="British Council">
        <CareerEntry.Position
          position="Team Lead"
          locationType="hybrid"
          startDate={getDate(2019, 6)}
          endDate={getDate(2020, 5)}
        />
        <CareerEntry.Description>
          Over two years into the project gave me enough insight to take over a
          leadership role in my team. I would still design most of our
          prototypes but leave the development to my team and take on the
          responsibility for delivering whole functionalities. My focus was set
          on managing and meeting attainable business expectations while keeping
          high coding standards.
        </CareerEntry.Description>
        <CareerEntry.Highlights>
          <li>
            keeping up to date with the big picture of the whole development
            process
          </li>
          <li>
            consulting development progress with architects to minimise
            technical debt
          </li>
          <li>doing peer review as well as keeping correct merge order</li>
          <li>
            configuring continuous integration environment and keeping it stable
          </li>
          <li>
            building and deploying newly developed code to the dedicated
            environment for testing
          </li>
          <li>
            holding meetings for the team (daily scrum,
            review/retro/planning/refinement sessions)
          </li>
          <li>building sprint plans based on material refined with the team</li>
          <li>
            coordinating work with other team leaders and development leader
          </li>
          <li>
            explaining and discussing effects of our work with the BI team
          </li>
          <li>
            supporting pre-release QA and UAT process in terms of environment
            maintenance, feedback gathering and scheduling improvements
          </li>
          <li>
            keeping my team members focused on our goals as well as their career
            progress
          </li>
        </CareerEntry.Highlights>

        <CareerEntry.Position
          position="Front-end Developer"
          locationType="onSite"
          startDate={getDate(2017, 1)}
          endDate={getDate(2019, 5)}
        />
        <CareerEntry.Description>
          I joined a rapidly growing number of contractors working on a
          comprehensive platform designed to enhance planning, registering and
          administrating examination sessions. My primary role was to develop
          front-end applications in coordination with the back-end code being
          developed at the same time. As my experience and business knowledge
          grew, I transitioned to designing parts of the user interface from the
          scratch as well.
        </CareerEntry.Description>
        <CareerEntry.Highlights>
          <li>
            proactive research on readily available technology applicable in the
            project
          </li>
          <li>
            implementing given prototypes and proposing corrections whenever
            needed
          </li>
          <li>ensuring the proper user experience as well as accessibility</li>
          <li>writing unit tests for my code</li>
          <li>
            debugging font-end code and support in debugging back-end code
          </li>
          <li>estimating time needed for front-end tasks</li>
          <li>creating high-fidelity UI prototypes</li>
          <li>doing peer reviews</li>
        </CareerEntry.Highlights>
      </CareerEntry>

      {
        ////////////////////////////////////////////////////////////////
      }

      <CareerEntry company="Cegedim > IM Health > QuintilesIMS">
        <CareerEntry.Position
          position="Software Engineer"
          startDate={getDate(2014, 9)}
          endDate={getDate(2016, 12)}
        />
        <CareerEntry.Description>
          The division I worked in, the ECC (EMEA Customization Center), was
          responsible for deployment and technical support of Nexxus Mobile
          Intelligence — a leading customer relationship management system
          dedicated to life sciences on the market. We provided our technical
          skills as well as deep knowledge of the CRM in all of its supported
          versions to our pharmaceutical clients around the globe.
        </CareerEntry.Description>
        <CareerEntry.Highlights>
          <li>front-end configuration of the CRM</li>
          <li>writing reports in PL/SQL and applying them in the CRM</li>
          <li>optimising and correcting existing PL/SQL queries</li>
          <li>
            enhancing user experience using server-side (C#) and client-side
            (Javascript) scripts
          </li>
          <li>
            finding and applying best solutions to user-reported requests for
            data analysis
          </li>
        </CareerEntry.Highlights>
      </CareerEntry>

      {
        ////////////////////////////////////////////////////////////////
      }

      <CareerEntry company="PLUM - Web Solutions">
        <CareerEntry.Position
          position="Software Engineer"
          startDate={getDate(2014, 3)}
          endDate={getDate(2014, 8)}
        />
        <CareerEntry.Description>
          Plum is a small but feisty interactive agency specialized in
          e-commerce. Although I was officially employed as a tester, I quickly
          started doing daily tasks of a front-end developer.
        </CareerEntry.Description>
        <CareerEntry.Highlights>
          <li>pre- and post-release tests</li>
          <li>Magento system management and configuration</li>
          <li>
            design, preparation, tests and sending newsletters using Freshmail
          </li>
          <li>product photos enhancement</li>
          <li>CSS code enhancement</li>
        </CareerEntry.Highlights>
      </CareerEntry>
    </section>
  );
}
