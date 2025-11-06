import type { QTableColumn } from 'quasar/dist/types/api/qtable.js';
import { getDateString } from 'src/utils/date';

export interface EmberProjectMetadata extends ProjectMetadata {
  id: string;
  title: string;
  year: number;
  tags: string[];
  summary: string;
  funding: Funding[];
  publications: Publications[];
  doi: string; // EMBER project DOI
  license: string; // TODO - object like BossDB ?
  dataUri: string; // TODO
  // TODO -- Relationships in EMBER: dandiset_ids, embervault_ids, etc.

  websiteSpecific: WebsiteMetadata;
}

export interface WebsiteMetadata {
  initials: string;
  citationAuthorYear: string; // TODO - could probably auto-generate this
  s3Uri: string; // TOOD -- could probably auto-generate this
  size: string; // TODO -- auto calculat this via s3 somehow?
}

export interface NIHProjectMetadata extends ProjectMetadata {
  funding: Funding;
}
export interface ProjectMetadata {
  contributors: Contributor[];
  species: Species[];
  sensors: string[]; // TODO -- what should be the type? should this be broken down?
  dataModalities: string[]; // TOOD -- what should be the type? should this be broken down?
  approaches: string[]; // TOOD -- what should be the type? should this be broken down?
  dataGenerationSort: string[]; // TOOD -- what should be the type? should this be broken down?
}

export interface Funding {
  awardTitle: string;
  awardIdentifier: string;
  activityCode: string; // i.e. R61, R34, etc.
  awardeeOrganization: string;
  periodOfPerformance: number; // (years)
  startDate: Date;
  awardLink: string; // Link to NIH RePORTER project details
  programOfficers: Person[];
  principalInvestigators: Person[];
}

export interface Publications {
  title: string;
  authors: Person[];
  year: number;
  doi: string;
}

export interface Person {
  name: string;
  email?: string;
  // TODO -- identifier for person (i.e., ORCID)
}

export enum ContributorRole {
  principalInvestigator = 'pi',
  contactPrincipalInvestigator = 'contact_pi',
  author = 'author',
  // TODO -- other roles ...
}
export interface Contributor extends Person {
  roles: ContributorRole[];
}

export interface Species {
  taxonomyId: number;
  currentName: string;
  genbankCommonName: string;
  ncbiBlastName: string;
  rank: string; // TODO Enum ?
  commonName: string;
}

export const ProjectTableColumns: QTableColumn[] = [
  {
    name: 'awardIdentifier',
    label: 'Grant Number',
    align: 'left',
    field: (row) => row.funding.awardIdentifier,
    required: true,
    sortable: true,
  },
  {
    name: 'awardTitle',
    label: 'Grant Title',
    align: 'left',
    field: (row) => row.funding.awardTitle,
    required: true,
    sortable: true,
  },
  {
    name: 'principalInvestigator',
    label: 'Principal Investigator(s)',
    align: 'left',
    field: (row) =>
      row.contributors.sort((a: Contributor, b: Contributor) => {
        if (a.roles.includes(ContributorRole.contactPrincipalInvestigator)) return -1;
        if (b.roles.includes(ContributorRole.contactPrincipalInvestigator)) return 1;

        return 0;
      }),
    required: true,
    sortable: true,
    format: (val) => val.map((c: Contributor) => c.name).join(', '),
  },
  {
    name: 'contactPrincipalInvestigator',
    label: 'Contact PI',
    align: 'left',
    field: (row) =>
      row.contributors.filter((c: Contributor) =>
        c.roles.includes(ContributorRole.contactPrincipalInvestigator),
      ),
    required: true,
    sortable: true,
  },
  {
    name: 'startDate',
    label: 'Project Start Date',
    align: 'left',
    field: (row) => getDateString(row.funding.startDate),
    required: true,
    sortable: true,
    sort: (a, b, rowA, rowB) => rowA.funding.startDate - rowB.funding.startDate,
  },
  {
    name: 'currentName',
    label: 'Model Organism(s)',
    align: 'left',
    field: (row) => row.species.map((s: Species) => s.currentName).join(', '),
    required: true,
    sortable: true,
  },
];
