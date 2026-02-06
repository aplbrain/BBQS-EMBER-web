import type { QTableColumn } from 'quasar/dist/types/api/qtable.js';

export interface ProjectComputedData {
  authorInitials: string;
  authorLastName: string;
  year: string;
}

export interface ProjectModel {
  id: number;
  dataAdministrator: ContributorModel;
  relatedPublications: PublicationModel[];
  funding: FundingModel[];
  projectId: string;
  title: string;
  description: string;
  modelOrganisms?: string[];
  dataUseAgreement?: string;
  dataUseAgreementRequired: boolean;
  dataAvailabilityEmberdandi: boolean;
  dataAvailabilityEmberrestricted: boolean;
  dataAvailabilityEmbervault: boolean;
  accessTierSummary?: string;
  lastMetadataUpdate: string;
  metadataVersion?: string;
  emberDoi?: string;
  accessLevelEmberdandisets?: string[];
  accessLevelRestrictedDatasets?: string[];
  accessLevelAccessVaultIds?: string[];
  relatedRepositories?: string[];
  relatedDandisets?: string[];
  relatedData?: string[];
}

export interface ContributorModel {
  id: number;
  name: string;
  orcid?: string;
  // externalIdentifiers?: unknown;
  email?: string;
  institution?: string;
}

export interface FundingModel {
  id: number;
  startYear?: number;
  endYear?: number;
  fundingInstitute: string;
  awardNumber: string;
  awardTitle?: string;
  fundingUrl?: string;
}

export interface PublicationModel {
  id: number;
  doi?: string;
  title: string;
  journal?: string;
  year?: number;
  publicationUrl?: string;
  authors: ContributorModel[];
}

export const ProjectTableColumns: QTableColumn[] = [
  {
    name: 'projectId',
    label: 'Project ID',
    align: 'left',
    field: 'projectId',
    required: true,
    sortable: true,
  },
  {
    name: 'title',
    label: 'Project Title',
    align: 'left',
    field: 'title',
    required: true,
    sortable: true,
    style: 'max-width: 20vw',
    classes: 'ellipsis',
  },
  {
    name: 'principalInvestigator',
    label: 'Principal Investigator',
    align: 'left',
    field: (row) => row.dataAdministrator.name,
    required: true,
    sortable: true,
  },
  {
    name: 'funding',
    label: 'Funding',
    align: 'left',
    field: (row) => row.funding,
    required: true,
    sortable: true,
  },
  // {
  //   name: 'startDate',
  //   label: 'Project Start Date',
  //   align: 'left',
  //   field: (row) => row.funding.startDate, // getDateString(row.funding.startDate),
  //   required: true,
  //   sortable: true,
  //   sort: (a, b, rowA, rowB) => rowA.funding.startDate - rowB.funding.startDate,
  // },
  {
    name: 'modelOrganisms',
    label: 'Model Organism(s)',
    align: 'left',
    field: (row) => (row.modelOrganisms?.length ? row.modelOrganisms?.join(', ') : 'None Listed'),
    required: true,
    sortable: true,
  },
];
