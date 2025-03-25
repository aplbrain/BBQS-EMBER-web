import { Tab } from 'src/models/mainLayout';

export const defaultTabs: Tab[] = [
  { name: 'Projects', route: '/projects', external: false },
  { name: 'Data', route: 'https://dandi.emberarchive.org/', external: true },
  {
    name: 'Getting Started',
    route: '/getting-started',
    external: false,
    dropdown: {
      show: false,
      children: [
        {name: 'Documentation', route: '/documentation', external: false },
      ],
    },
  },
  { name: 'Tools', route: '/tools', external: false },
  { name: 'Metadata', route: '/metadata', external: false },
  { name: 'About', route: '/about', external: false },
];
