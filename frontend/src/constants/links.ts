/**
 * links.ts
 *
 * Contains commonly re-used links throughout the website.
 */
import type { Link } from 'src/models/common';

export const urls = {
  ember_dandi: 'https://dandi.emberarchive.org',
  ember_dandiset: 'https://dandi.emberarchive.org/dandiset',
};

export const links: Record<string, Link> = {
  brain_initiative: {
    text: 'BRAIN Initiative',
    uri: 'https://braininitiative.nih.gov/',
  },
  bbqs_full: {
    text: 'Brain Behavior Quantification and Synchronization (BBQS) Program',
    uri: 'https://braininitiative.nih.gov/research/systems-neuroscience/brain-behavior-quantification-and-synchronization-program',
  },
  bbqs_acronym: {
    text: 'BBQS Program',
    uri: 'https://braininitiative.nih.gov/research/systems-neuroscience/brain-behavior-quantification-and-synchronization-program',
  },
  ember_grant: {
    text: 'R24MH136632',
    uri: 'https://reporter.nih.gov/project-details/10888659',
  },
  jhuapl: {
    text: 'Johns Hopkins University Applied Physics Laboratory (JHU/APL)',
    uri: 'https://www.jhuapl.edu/',
  },
  dandi_full: {
    text: 'Distributed Archives for Neurophysiology Data Integration (DANDI)',
    uri: 'https://dandiarchive.org/',
  },
  ember_dandi: {
    text: 'EMBER-DANDI',
    uri: urls.ember_dandi,
  },
  open_data: {
    text: 'Open Data',
    uri: 'https://registry.opendata.aws/ember',
  },
};
