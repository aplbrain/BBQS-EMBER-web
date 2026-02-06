import type { AxiosResponse } from 'axios';
import { api } from 'src/boot/axios';
import type {
  ContributorModel,
  FundingModel,
  ProjectModel,
  PublicationModel,
} from 'src/models/projects';
import type { components } from 'src/services/schema';

const PROJECT_APL_URL = '/api/projects';

// Auto-Generated types for API responses
type ProjectResponse = components['schemas']['Project'];
type ContributorResponse = components['schemas']['Contributor'];
type FundingResponse = components['schemas']['Funding'];
type PublicationResponse = components['schemas']['Publication'];

// Helper Functions
function mapProjectResponse(project: ProjectResponse): ProjectModel {
  return {
    id: project.id,
    projectId: project.project_id,
    title: project.project_title,
    description: project.project_description,
    dataAdministrator: mapContributorResponse(project.data_administrator),
    relatedPublications: project.related_publications.map((pub: PublicationResponse) =>
      mapPublicationResponse(pub),
    ),
    funding: project.funding.map((f: FundingResponse) => mapFundingResponse(f)),
    modelOrganisms: project.model_organisms as string[],
    dataUseAgreement: project.data_use_agreement ?? '',
    dataUseAgreementRequired: project.data_use_agreement_required ?? false,
    dataAvailabilityEmberdandi: project.data_availability_emberdandi ?? false,
    dataAvailabilityEmberrestricted: project.data_availability_emberrestricted ?? false,
    dataAvailabilityEmbervault: project.data_availability_embervault ?? false,
    accessTierSummary: project.access_tier_summary ?? '',
    lastMetadataUpdate: project.last_metadata_update,
    metadataVersion: project.metadata_version ?? '',
    emberDoi: project.ember_doi ?? '',
    accessLevelEmberdandisets: project.access_level_emberdandisets as string[],
    accessLevelRestrictedDatasets: project.access_level_restricted_datasets as string[],
    accessLevelAccessVaultIds: project.access_level_access_vault_ids as string[],
    relatedRepositories: project.related_repositories as string[],
    relatedDandisets: project.related_dandisets as string[],
    relatedData: project.related_data as string[],
  };
}

function mapContributorResponse(contributor: ContributorResponse): ContributorModel {
  return {
    id: contributor.id,
    orcid: contributor.orcid ?? '',
    // externalIdentifiers: contributor.external_identifiers ,
    name: contributor.name,
    email: contributor.email ?? '',
    institution: contributor.institution ?? '',
  };
}

function mapFundingResponse(funding: FundingResponse): FundingModel {
  return {
    id: funding.id,
    ...(funding.start_year && { startYear: funding.start_year }),
    ...(funding.end_year && { endYear: funding.end_year }),
    fundingInstitute: funding.funding_institute,
    awardNumber: funding.award_number,
    awardTitle: funding.award_title ?? '',
    fundingUrl: funding.funding_url ?? '',
  };
}

function mapPublicationResponse(publication: PublicationResponse): PublicationModel {
  return {
    id: publication.id,
    doi: publication.publication_doi ?? '',
    title: publication.title,
    journal: publication.journal ?? '',
    ...(publication.year && { year: publication.year }),
    publicationUrl: publication.publication_url ?? '',
    authors: publication.authors?.map((a: ContributorResponse) => mapContributorResponse(a)),
  };
}

// Project API Service
class ProjectService {
  async getAll(): Promise<ProjectModel[]> {
    return api
      .get(`${PROJECT_APL_URL}/`)
      .then((response: AxiosResponse<ProjectResponse[]>) => {
        return response.data.map((project: ProjectResponse) => mapProjectResponse(project));
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }

  async getByProjectId(projectId: string): Promise<ProjectModel> {
    return api
      .get(`${PROJECT_APL_URL}/${projectId}/`)
      .then((response: AxiosResponse<ProjectResponse>) => {
        return mapProjectResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

export default new ProjectService();
