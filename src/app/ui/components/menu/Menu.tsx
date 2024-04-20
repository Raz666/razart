import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MenuContainer } from './MenuContainer';

export const Menu = () => {
  const t = useTranslations();

  const links = [
    {
      name: t('Skills.title'),
      hash: '#skills',
    },
    {
      name: t('Experience.title'),
      hash: '#experience',
    },
    {
      name: t('Education.title'),
      hash: '#education',
    },
  ] as const;

  return (
    <MenuContainer>
      <ul className="flex gap-6 ">
        {links.map((link) => (
          <li key={link.hash}>
            <Link href={link.hash}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
};
