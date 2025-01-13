import { QTableColumn } from 'quasar';

export interface ProjectMetadata {
  // TODO!! Metadata Structure
  grantNumber: string;
  grantTitle: string;
  principalInvestigator: string;
  startDate: Date;
  modelOrganism: string[];
}

export const ProjectTableColumns: QTableColumn[] = [
  {
    name: 'grantNumber',
    label: 'Grant Number',
    field: row => row.grantNumber,
    required: true,
  },
  {
    name: 'grantTitle',
    label: 'Grant Title',
    field: row => row.grantTitle,
    required: true,
  },
  {
    name: 'principalInvestigator',
    label: 'Principal Investigator',
    field: row => row.principalInvestigator,
    required: true,
  },
  {
    name: 'startDate',
    label: 'Project Start Date',
    field: row => row.startDate,
    required: true,
  },
  {
    name: 'modelOrganism',
    label: 'Model Orgnaism(s)',
    field: row => row.modelOrganism,
    required: true,
  },
]
