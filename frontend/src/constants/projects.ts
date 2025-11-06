/**
 * projects.ts
 *
 * Contains the list of BBQS projects and metadata for each project.
 * TODO: Convert this file of data into a real database, and access via API
 */
import type { NIHProjectMetadata } from 'src/models/projects';
import { ContributorRole } from 'src/models/projects';

// Semi auto-generated from fetchProjectMetadata.ts script
const initialBBQSProjectList: NIHProjectMetadata[] = [
  {
    funding: {
      awardTitle: 'Neural and Behavioral Correlates of Live Face-to-Face Interactions',
      awardIdentifier: 'R61MH138705',
      activityCode: 'R61',
      awardeeOrganization: 'Yale University',
      startDate: new Date('2025-09-01T12:09:00.000Z'),
      periodOfPerformance: 3,
      awardLink: '',
      programOfficers: [{ name: 'Elizabeth Ankudowich' }],
      principalInvestigators: [{ name: 'Joy Hirsch' }],
    },
    contributors: [
      {
        name: 'Joy Hirsch',
        email: 'joy.hirsch@yale.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Toward comprehensive models of naturalistic cooperation and competition in primates',
      awardIdentifier: 'U01DA063534',
      activityCode: 'U01',
      awardeeOrganization: 'Yale University',
      startDate: new Date('2025-09-01T12:09:00.000Z'),
      periodOfPerformance: 5,
      awardLink: '',
      programOfficers: [{ name: 'Holly Marie Moore' }],
      principalInvestigators: [
        { name: 'Steve W C Chang' },
        { name: 'Monika P Jadi' },
        { name: 'Anirvan S Nandy' },
        { name: 'Shreya Saxena' },
      ],
    },
    contributors: [
      {
        name: 'Steve W C Chang',
        email: 'steve.chang@yale.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      { name: 'Monika P Jadi', roles: [ContributorRole.principalInvestigator] },
      { name: 'Anirvan S Nandy', roles: [ContributorRole.principalInvestigator] },
      { name: 'Shreya Saxena', roles: [ContributorRole.principalInvestigator] },
    ],
    species: [
      {
        taxonomyId: 9483,
        currentName: 'Callithrix jacchus',
        genbankCommonName: 'common marmoset',
        ncbiBlastName: 'primates',
        rank: 'species',
        commonName: 'common marmoset',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Synchronized neuronal and peripheral biomarker recordings in freely moving humans',
      awardIdentifier: 'R61MH135106',
      activityCode: 'R61',
      awardeeOrganization: 'University Of California Los Angeles',
      startDate: new Date('2024-02-21T12:02:00.000Z'),
      periodOfPerformance: 3,
      awardLink: 'https://reporter.nih.gov/project-details/10792386',
      programOfficers: [
        {
          name: 'Elizabeth Ankudowich',
        },
      ],
      principalInvestigators: [
        {
          name: 'Nanthia A Suthana',
        },
      ],
    },
    contributors: [
      {
        name: 'Nanthia A Suthana',
        email: 'nanthia@ucla.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle: 'A modeling framework and arena for measuring contextual influences of behavior',
      awardIdentifier: 'R34DA059510',
      activityCode: 'R34',
      awardeeOrganization: 'Georgia Institute Of Technology',
      startDate: new Date('2024-08-01T12:08:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786801',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Eva Dyer',
        },
        {
          name: 'Patrick T McGrath',
        },
      ],
    },
    contributors: [
      {
        name: 'Eva Dyer',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Patrick T McGrath',
        email: 'patrick.mcgrath@biology.gatech.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 8113,
        currentName: 'Cichlidae',
        genbankCommonName: 'cichlids',
        ncbiBlastName: 'bony fishes',
        rank: 'family',
        commonName: '',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Behavioral quantification through active learning and multidimensional physiological monitoring',
      awardIdentifier: 'R34DA059509',
      activityCode: 'R34',
      awardeeOrganization: 'Carnegie-Mellon University',
      startDate: new Date('2024-08-01T12:08:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786800',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Pulkit Grover',
        },
        {
          name: 'Zheng Kuang',
        },
        {
          name: 'Jonathan E. Rubin',
        },
        {
          name: 'Eric Yttri',
        },
      ],
    },
    contributors: [
      {
        name: 'Pulkit Grover',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Zheng Kuang',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Jonathan E. Rubin',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Eric Yttri',
        email: 'eyttri@andrew.cmu.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 10090,
        currentName: 'Mus musculus',
        genbankCommonName: 'house mouse',
        ncbiBlastName: 'rodents',
        rank: 'species',
        commonName: 'mouse',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Computational attribution and fusion of vocalizations, social behavior, and neural recordings in a naturalistic environment',
      awardIdentifier: 'R34DA059513',
      activityCode: 'R34',
      awardeeOrganization: 'New York University',
      startDate: new Date('2024-02-01T12:02:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786899',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Dan Harvey Sanes',
        },
        {
          name: 'David Michael Schneider',
        },
        {
          name: 'Alexander Henry Williams',
        },
      ],
    },
    contributors: [
      {
        name: 'Dan Harvey Sanes',
        email: 'dhs1@nyu.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'David Michael Schneider',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Alexander Henry Williams',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 10047,
        currentName: 'Meriones unguiculatus',
        commonName: 'Mongolian jird',
        genbankCommonName: 'Mongolian gerbil',
        ncbiBlastName: 'rodents',
        rank: 'species',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Development of a "smart aviary" to probe neural dynamics of complex social behaviors in a gregarious songbird',
      awardIdentifier: 'R34DA059507',
      activityCode: 'R34',
      awardeeOrganization: 'University Of Pennsylvania',
      startDate: new Date('2024-04-15T12:04:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786687',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Firooz Aflatouni',
        },
        {
          name: 'Vijay Balasubramanian',
        },
        {
          name: 'Kostas Daniilidis',
        },
        {
          name: 'Marc F Schmidt',
        },
      ],
    },
    contributors: [
      {
        name: 'Firooz Aflatouni',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Vijay Balasubramanian',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Kostas Daniilidis',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Marc F Schmidt',
        email: 'MARCSCHM@SAS.UPENN.EDU',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 84832,
        currentName: 'Molothrus',
        ncbiBlastName: 'birds',
        rank: 'genus',
        commonName: '',
        genbankCommonName: '',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle: 'Harnessing biological rhythms for a resilient social motif generator',
      awardIdentifier: 'R34DA059718',
      activityCode: 'R34',
      awardeeOrganization: 'University Of Florida',
      startDate: new Date('2024-05-01T12:05:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10797723',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Nancy Padilla Coreano',
        },
        {
          name: 'Shreya Saxena',
        },
        {
          name: 'Daniel W Wesson',
        },
      ],
    },
    contributors: [
      {
        name: 'Nancy Padilla Coreano',
        email: 'npadillacoreano@ufl.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Shreya Saxena',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Daniel W Wesson',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 10090,
        currentName: 'Mus musculus',
        genbankCommonName: 'house mouse',
        ncbiBlastName: 'rodents',
        rank: 'species',
        commonName: 'mouse',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle: 'High-resolution 3D tracking of social behaviors for deep phenotypic analysis',
      awardIdentifier: 'R34DA059506',
      activityCode: 'R34',
      awardeeOrganization: 'Duke University',
      startDate: new Date('2024-09-15T12:09:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786685',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Timothy William Dunn',
        },
        {
          name: 'Bence P Olveczky',
        },
      ],
    },
    contributors: [
      {
        name: 'Timothy William Dunn',
        email: 'timothy.dunn@duke.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Bence P Olveczky',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 10090,
        currentName: 'Mus musculus',
        genbankCommonName: 'house mouse',
        ncbiBlastName: 'rodents',
        rank: 'species',
        commonName: 'mouse',
      },
      {
        taxonomyId: 10114,
        currentName: 'Rattus',
        commonName: 'rat',
        genbankCommonName: '',
        ncbiBlastName: 'rodents',
        rank: 'GENUS',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'High-throughput, high-resolution 3D measurement of ethologically relevant rodent behavior in a dynamic environment',
      awardIdentifier: 'R34DA059512',
      activityCode: 'R34',
      awardeeOrganization: 'Duke University',
      startDate: new Date('2024-02-15T12:02:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786883',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Timothy William Dunn',
        },
        {
          name: 'Gregory Darin Field',
        },
        {
          name: 'Michael R Tadross',
        },
      ],
    },
    contributors: [
      {
        name: 'Timothy William Dunn',
        email: 'timothy.dunn@duke.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Gregory Darin Field',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Michael R Tadross',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 10090,
        currentName: 'Mus musculus',
        genbankCommonName: 'house mouse',
        ncbiBlastName: 'rodents',
        rank: 'species',
        commonName: 'mouse',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle: 'Interpersonal behavioral synchrony in virtual and in-person dyadic conversation',
      awardIdentifier: 'R34DA059716',
      activityCode: 'R34',
      awardeeOrganization: 'Icahn School Of Medicine At Mount Sinai',
      startDate: new Date('2024-08-15T12:08:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10797870',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Cheryl Mary Corcoran',
        },
        {
          name: 'Jack Grinband',
        },
        {
          name: 'Muhammad Adeel Parvaz',
        },
      ],
    },
    contributors: [
      {
        name: 'Cheryl Mary Corcoran',
        email: 'cheryl.corcoran@mssm.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Jack Grinband',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Muhammad Adeel Parvaz',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Multimodal behavioral analysis of oromanual food-handling in freely moving animals',
      awardIdentifier: 'R34DA059723',
      activityCode: 'R34',
      awardeeOrganization: 'Northwestern University At Chicago',
      startDate: new Date('2024-02-01T12:02:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10795435',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Gordon M Shepherd',
        },
      ],
    },
    contributors: [
      {
        name: 'Gordon M Shepherd',
        email: 'g-shepherd@northwestern.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 10090,
        currentName: 'Mus musculus',
        genbankCommonName: 'house mouse',
        ncbiBlastName: 'rodents',
        rank: 'species',
        commonName: 'mouse',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Towards High-Resolution Neuro-Behavioral Quantification of Sheep in the Field to Study Complex Social Behaviors',
      awardIdentifier: 'R34DA059514',
      activityCode: 'R34',
      awardeeOrganization: 'Rice University',
      startDate: new Date('2024-08-01T12:08:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786956',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Caleb Kemere',
        },
      ],
    },
    contributors: [
      {
        name: 'Caleb Kemere',
        email: 'caleb.kemere@rice.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9940,
        currentName: 'Ovis aries',
        commonName: 'domestic sheep',
        genbankCommonName: 'sheep',
        ncbiBlastName: 'even-toed ungulates & whales',
        rank: 'species',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Transformative Optical Imaging of Brain & Behavior in Navigating Genetic Species',
      awardIdentifier: 'R34DA059500',
      activityCode: 'R34',
      awardeeOrganization: 'New York University School Of Medicine',
      startDate: new Date('2024-03-15T12:03:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10786461',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Katherine Nagel',
        },
        {
          name: 'David Schoppik',
        },
        {
          name: 'Nathan Christopher Shaner',
        },
        {
          name: 'Jane Wang',
        },
      ],
    },
    contributors: [
      {
        name: 'Katherine Nagel',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'David Schoppik',
        email: 'david.schoppik@nyulangone.org',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Nathan Christopher Shaner',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Jane Wang',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 7955,
        currentName: 'Danio rerio',
        commonName: 'zebra danio',
        genbankCommonName: 'zebrafish',
        ncbiBlastName: 'bony fishes',
        rank: 'species',
      },
      {
        taxonomyId: 7227,
        currentName: 'Drosophila melanogaster',
        genbankCommonName: 'fruit fly',
        ncbiBlastName: 'flies',
        rank: 'species',
        commonName: '',
      },
      {
        taxonomyId: 317513,
        currentName: 'Parhyale hawaiensis',
        ncbiBlastName: 'amphipods',
        rank: 'species',
        genbankCommonName: '',
        commonName: '',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Capturing Autobiographical memory formation in People moving Through real-world spaces Using synchronized wearables and intracranial Recordings of EEG',
      awardIdentifier: 'R61MH135109',
      activityCode: 'R61',
      awardeeOrganization: 'University Of Utah',
      startDate: new Date('2024-03-15T12:03:00.000Z'),
      periodOfPerformance: 3,
      awardLink: 'https://reporter.nih.gov/project-details/10792324',
      programOfficers: [
        {
          name: 'Elizabeth Ankudowich',
        },
      ],
      principalInvestigators: [
        {
          name: 'Cory Shields Inman',
        },
      ],
    },
    contributors: [
      {
        name: 'Cory Shields Inman',
        email: 'cory.inman@psych.utah.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Integrated movement tracking for pediatric OPM-MEG studies of intellectual disability',
      awardIdentifier: 'R61MH135114',
      activityCode: 'R61',
      awardeeOrganization: "Seattle Children's Hospital",
      startDate: new Date('2024-07-08T12:07:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10792146',
      programOfficers: [
        {
          name: 'Elizabeth Ankudowich',
        },
      ],
      principalInvestigators: [
        {
          name: 'Timothy P Roberts',
        },
        {
          name: 'John P Welsh',
        },
      ],
    },
    contributors: [
      {
        name: 'Timothy P Roberts',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'John P Welsh',
        email: 'jwelshp@gmail.com',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Developing the Context-Aware Multimodal Ecological Research and Assessment (CAMERA) Platform for Continuous Measurement and Prediction of Anxiety and Memory State',
      awardIdentifier: 'R61MH135405',
      activityCode: 'R61',
      awardeeOrganization: 'Columbia University Health Sciences',
      startDate: new Date('2024-01-01T12:01:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/10801782',
      programOfficers: [
        {
          name: 'Elizabeth Ankudowich',
        },
      ],
      principalInvestigators: [
        {
          name: 'Joshua Jacobs',
        },
        {
          name: 'Jorge Ortiz',
        },
        {
          name: 'Alik S. Widge',
        },
        {
          name: 'Brett E Youngerman',
        },
      ],
    },
    contributors: [
      {
        name: 'Joshua Jacobs',
        email: 'joshua.jacobs@columbia.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
      {
        name: 'Jorge Ortiz',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Alik S. Widge',
        roles: [ContributorRole.principalInvestigator],
      },
      {
        name: 'Brett E Youngerman',
        roles: [ContributorRole.principalInvestigator],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Novel multimodal neural, physiological, and behavioral sensing and machine learning for mental states',
      awardIdentifier: 'R61MH135407',
      activityCode: 'R61',
      awardeeOrganization: 'UNIVERSITY OF SOUTHERN CALIFORNIA',
      startDate: new Date('2024-02-01T12:02:00.000Z'),
      periodOfPerformance: 3,
      awardLink: 'https://reporter.nih.gov/project-details/11017073',
      programOfficers: [
        {
          name: 'Elizabeth Ankudowich',
        },
      ],
      principalInvestigators: [
        {
          name: 'Maryam Shanechi',
        },
      ],
    },
    contributors: [
      {
        name: 'Maryam Shanechi',
        email: 'shanechi@usc.edu',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Mapping dynamic transitions across neural, behavioral, and social scales in interacting animals',
      awardIdentifier: 'R34DA061924',
      activityCode: 'R34',
      awardeeOrganization: 'Michigan State University',
      startDate: new Date('2025-02-01T05:00:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/11035335',
      programOfficers: [{ name: 'Holly Marie Moore' }],
      principalInvestigators: [{ name: 'Flavio Frohlich' }, { name: 'Mengsen Zhang' }],
    },
    contributors: [
      { name: 'Flavio Frohlich', roles: [ContributorRole.principalInvestigator] },
      {
        name: 'Mengsen Zhang',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9668,
        currentName: 'Mustela putorius',
        genbankCommonName: 'European polecat',
        ncbiBlastName: 'carnivores',
        rank: 'species',
        commonName: '',
      },
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Quantifying organism-environment interactions in a new model system for neuroscience',
      awardIdentifier: 'R34DA061984',
      activityCode: 'R34',
      awardeeOrganization: 'Harvard University',
      startDate: new Date('2025-02-01T05:00:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/11036699',
      programOfficers: [{ name: 'Holly Marie Moore' }],
      principalInvestigators: [{ name: 'Mansi Srivastava' }],
    },
    contributors: [
      {
        name: 'Mansi Srivastava',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 442651,
        currentName: 'Hofstenia miamia' ,
        genbankCommonName: '',
        ncbiBlastName: 'animals',
        rank: 'species',
        commonName: '',
      }
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'A naturalistic multimodal platform for capturing brain-body interactions in people during physical effort-based decision making',
      awardIdentifier: 'R61MH138966',
      activityCode: 'R61',
      awardeeOrganization: 'Georgia Institute of Technology',
      startDate: new Date('2025-02-01T05:00:00.000Z'),
      periodOfPerformance: 3,
      awardLink: 'https://reporter.nih.gov/project-details/11046239',
      programOfficers: [{ name: 'Elizabeth Ankudowich' }],
      principalInvestigators: [{ name: 'Christopher John Rozell' }],
    },
    contributors: [
      {
        name: 'Christopher John Rozell',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
      {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'Building an “AI Forest” to identify the social and environmental factors underlying complex behavioral traits in wild primates.',
      awardIdentifier: 'R34DA061925',
      activityCode: 'R34',
      awardeeOrganization: 'University of Michigan at Ann Arbor',
      startDate: new Date('2025-03-15T04:00:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/11035427',
      programOfficers: [{ name: 'Holly Marie Moore' }],
      principalInvestigators: [
        { name: 'Jacinta Beehner' },
        { name: 'Marcela Eugenia Benitez' },
        { name: 'Shelly Beth Flagel' },
      ],
    },
    contributors: [
      { name: 'Jacinta Beehner', roles: [ContributorRole.principalInvestigator] },
      { name: 'Marcela Eugenia Benitez', roles: [ContributorRole.principalInvestigator] },
      {
        name: 'Shelly Beth Flagel',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
       {
        taxonomyId: 2715852,
        currentName: 'Cebus imitator' ,
        genbankCommonName: 'Panamanian white-faced capuchin',
        ncbiBlastName: 'primates',
        rank: 'species',
        commonName: '',
      }
    ],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
  {
    funding: {
      awardTitle:
        'Combining neural oscillations, physiology and privacy-preserving LiDAR/millimeter wave sensing technology to track attention states in natural contexts',
      awardIdentifier: 'R61MH138713',
      activityCode: 'R61',
      awardeeOrganization: 'University of California Los Angeles',
      startDate: new Date('2025-06-01T04:00:00.000Z'),
      periodOfPerformance: 3,
      awardLink: 'https://reporter.nih.gov/project-details/11037221',
      programOfficers: [{ name: 'Elizabeth Ankudowich' }],
      principalInvestigators: [
        { name: 'Emre Ertin' },
        { name: 'Jennie K. Grammer' },
        { name: 'Agatha Lenartowicz' },
      ],
    },
    contributors: [
      { name: 'Emre Ertin', roles: [ContributorRole.principalInvestigator] },
      { name: 'Jennie K. Grammer', roles: [ContributorRole.principalInvestigator] },
      {
        name: 'Agatha Lenartowicz',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [
            {
        taxonomyId: 9606,
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
  },
  {
    funding: {
      awardTitle:
        'The International Development Project (IDP): An international collaboration for the standardized study of experience-dependent brain and behavioral development',
      awardIdentifier: 'R34DA062119',
      activityCode: 'R34',
      awardeeOrganization: 'University Of California Berkeley',
      startDate: new Date('2025-09-01T04:00:00.000Z'),
      periodOfPerformance: 2,
      awardLink: 'https://reporter.nih.gov/project-details/11045432',
      programOfficers: [
        {
          name: 'Holly Marie Moore',
        },
      ],
      principalInvestigators: [
        {
          name: 'Linda E Wilbrecht',
        },
      ],
    },
    contributors: [
      {
        name: 'Linda E Wilbrecht',
        roles: [
          ContributorRole.principalInvestigator,
          ContributorRole.contactPrincipalInvestigator,
        ],
      },
    ],
    species: [],
    sensors: [],
    dataModalities: [],
    approaches: [],
    dataGenerationSort: [],
  },
];

// Default sorting logic
initialBBQSProjectList.sort((a: NIHProjectMetadata, b: NIHProjectMetadata) => {
  // Sort by (desc.) activity code (R61, R34)
  if (a.funding.activityCode > b.funding.activityCode) return -1;
  if (a.funding.activityCode < b.funding.activityCode) return 1;

  // Sort by (asc.) award identifier (RXX...)
  if (a.funding.awardIdentifier < b.funding.awardIdentifier) return -1;
  if (a.funding.awardIdentifier > b.funding.awardIdentifier) return 1;

  return 0;
});

export { initialBBQSProjectList };
