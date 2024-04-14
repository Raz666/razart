import Experience from '@locale/experience/page';
import { Skills } from '@/app/[locale]/skills/Skills';
import { Divider, Panel } from '@components/index';
import { Education } from './skills/Education';
import Languages from './skills/Languages';
import { Interests } from './skills/Interests';

export default function Home() {
  return (
    <div className="mx-2 gap-4 sm:mx-14 md:mx-auto md:flex md:max-w-screen-md print:block">
      <div className="flex-1 basis-1/3">
        <div className="block gap-4 sm:flex md:block print:flex">
          <div className="flex-1 basis-2/3">
            <Panel slim>
              <Skills />
            </Panel>
          </div>

          <Divider className="mt-5 block print:hidden" />

          <div className="flex-1 basis-1/3">
            <Panel slim>
              <Languages />
            </Panel>

            <Divider className="mt-5 print:hidden" />

            <Panel slim>
              <Interests />
            </Panel>
          </div>
        </div>
      </div>

      <Divider className="mt-5 md:hidden print:block" />

      <div className="flex-1 basis-2/3">
        <Panel>
          <Experience />
        </Panel>

        <Divider className="mt-7 print:hidden" />

        <Panel>
          <Education />
        </Panel>
      </div>
    </div>
  );
}
