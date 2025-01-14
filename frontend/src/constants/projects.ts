import { ProjectMetadata } from 'src/models/projects';

export const initialProjectList: ProjectMetadata[] = [
  {
    funding: {
      awardTitle: 'Synchronized neuronal and peripheral biomarker recordings in freely moving humans',
      awardIdentifier: 'R61MH135106',
      activityCode: 'R61',
      awardeeOrganization: 'University of California Los Angeles',
      periodOfPerformance: 0,
      startDate: new Date('2024-02-21T12:02:00Z'),
      awardLink: 'https://reporter.nih.gov/project-details/10792386',
      programOfficer: {
        name: 'Elizabeth  Ankudowich',
      },
    },
    contributors: [
      {
        name: 'Nanthia A. Suthana',
        email: '',
        principalInvestigator: true,
      }
    ],
    species: [
      {
        taxonomyId: '9606',
        currentName: 'Homo sapiens',
        genbankCommonName: 'human',
        ncbiBlastName: 'primates',
        rank: 'species',
        commonName: '',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  }
];
