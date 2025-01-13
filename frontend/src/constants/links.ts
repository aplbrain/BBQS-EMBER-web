import { Link } from 'src/models/common';

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
  dabi_full: {
    text: 'Data Archive for the BRAIN Initiative (DABI)',
    uri: 'https://dabi.loni.usc.edu/',
  },
  open_data: {
    text: 'Open Data',
    uri: 'https://aws.amazon.com/opendata',
    // uri: 'https://registry.opendata.aws/ember', TODO: When site is published
  },
};
