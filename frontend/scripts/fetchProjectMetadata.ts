/**
 * fetchProjectMetadata.ts
 *
 * Purpose:
 *   Fetch project metadata from NIH RePORTER site and write to both a JSON and TS file.
 *   - JSON file: May be useful for viewing, sharing, or exporting metadata
 *   - TS file: Can be used to copy and paste metadata into src/constants/projects.ts
 *
 * Setup:
 *   Modify grantNumbers list as needed
 *
 * Usage:
 *   yarn tsx scripts/fetchProjectMetadata.ts
 *
 * This file was generated with assistance from ChatGPT.
 */

import axios from 'axios';
import * as fs from 'fs';
import {
  ContributorRole,
  type Contributor,
  type NIHProjectMetadata,
  type Person,
} from 'src/models/projects';

const grantNumbers: string[] = [
  // NIH BBQS Project List
  'U01DA063534',
  'R61MH138705',
  'R61MH135106',
  'R34DA059510',
  'R34DA059509',
  'R34DA059513',
  'R34DA059507',
  'R34DA059718',
  'R34DA059506',
  'R34DA059512',
  'R34DA059716',
  'R34DA059723',
  'R34DA059514',
  'R34DA059500',
  'R61MH135109',
  'R61MH135114',
  'R61MH135405',
  'R61MH135407',
  'R34DA061924',
  'R34DA061984',
  'R61MH138966',
  'R34DA061925',
  'R61MH138713',
  'R34DA062119',
  // EMBER Project - Kumar 2025
  // 'R21DA048634',
  // 'U01DA051235'
];

/**
 * Convert string to Title Case.
 * @param str  string to convert
 * @returns  string formatted with Title Case
 */
function toTitleCase(str: string): string {
  if (!str) return str;
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to query the NIH Reporter API
async function fetchProjectData(grantNumber: string): Promise<NIHProjectMetadata | null> {
  const url = 'https://api.reporter.nih.gov/v2/projects/search';

  // API payload
  const payload = { criteria: { project_nums: [grantNumber] } };

  try {
    // Make the POST request to the API
    const response = await axios.post(url, payload);
    const projects = response.data?.results;

    // Check if data is available
    if (projects && projects.length !== 0) {
      const project = projects[0]; // Assuming we want the first result

      // Dates
      const startDate = new Date(project.project_start_date);
      const endDate = new Date(project.project_end_date);
      const yearsBetween = endDate.getFullYear() - startDate.getFullYear();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const contributors: Contributor[] = project.principal_investigators.map((pi: any) => ({
        name: toTitleCase(pi.full_name),
        email: pi.email || undefined,
        roles: pi.is_contact_pi
          ? [ContributorRole.principalInvestigator, ContributorRole.contactPrincipalInvestigator]
          : [ContributorRole.principalInvestigator],
      }));

      // Map the API response to the TypeScript object
      const projectData: NIHProjectMetadata = {
        funding: {
          awardTitle: project.project_title,
          awardIdentifier: project.core_project_num,
          activityCode: project.activity_code,
          awardeeOrganization: toTitleCase(project.organization.org_name),
          startDate,
          periodOfPerformance: yearsBetween,
          awardLink: project.project_detail_url,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          programOfficers: project.program_officers.map((po: any) => ({
            name: toTitleCase(po.full_name),
          })),
          principalInvestigators: contributors.map((c: Contributor) => ({
            name: c.name,
            email: c.email,
          })) as Person[],
        },
        contributors: contributors,
        species: [],
        sensors: [],
        dataModalities: [],
        approaches: [],
        dataGenerationSort: [],
      };

      return projectData;
    } else {
      console.error(`No project data found for the provided grant number: ${grantNumber}.`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}

// Usage
await (async () => {
  const projects: NIHProjectMetadata[] = [];

  for (const grant of grantNumbers) {
    const projectData = await fetchProjectData(grant);

    if (projectData) {
      console.log(`Grant number ${grant} found.`);
      projects.push(projectData);
    } else {
      console.log(`No data found for grant number ${grant}.`);
    }
  }

  const content = `${JSON.stringify(projects, null, 2)}`;
  const today = new Date().toISOString();

  // Write to a JSON file
  const jsonFilePath = `scripts/out/projectMetadata_${today}.json`;
  fs.writeFile(jsonFilePath, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log(`JSON file written to ${jsonFilePath}.`);
  });

  // Write to TS file (for easy copy and paste in src/constants/projects.ts)
  const tsFileContent = `// Project Metadata generated from fetchProjectMetadata.ts script.
import type { NIHProjectMetadata } from 'src/models/projects';
import { ContributorRole } from 'src/models/projects';

export const nihProjectMetadataList: NIHProjectMetadata[] = ${JSON.stringify(projects, null, 2)
    // Dates → new Date()
    .replace(/"(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)"/g, 'new Date("$1")')
    // Enum replacements
    .replace(/"pi"/g, 'ContributorRole.principalInvestigator')
    .replace(/"contact_pi"/g, 'ContributorRole.contactPrincipalInvestigator')
    // Unquote keys
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/\\n/g, '\n')};
`;

  const tsFilePath = `scripts/out/projectMetadata_${today}.ts`;
  fs.writeFileSync(tsFilePath, tsFileContent, 'utf8');
  console.log(`TypeScript file written to: ${tsFilePath}`);
})();
