/**
 * hearth.ts
 *
 * Apps registered on HEARTH (Hub for Exploratory Analysis, Resource-sharing, Testing, and
 * Hypothesis-generation), EMBER's portal for managing and processing data hosted on EMBER.
 * See https://www.hearth.emberarchive.org
 */
export interface HearthApp {
  name: string;
  description: string;
  uri: string;
  logo: string;
}

export const hearthApps: HearthApp[] = [
  {
    name: 'Clip Extractor',
    description: 'Trim, describe, & share video clips from data hosted on EMBER.',
    uri: 'https://clip-extractor.brain-bbqs.org',
    logo: '/hearth/clip-extractor-logo.svg',
  },
  {
    name: 'Encoding Helper',
    description: 'Inspect and tune the internal encoding of video files.',
    uri: 'https://encoding-helper.brain-bbqs.org',
    logo: '/hearth/encoding-helper-logo.svg',
  },
];
