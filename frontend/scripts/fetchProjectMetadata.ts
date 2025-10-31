/**
 * Run with
 *  yarn tsx scripts/fetchProjectMetadata.ts
 *
 * This file was generated with assistance from ChatGPT.
 */

import axios from 'axios';
import * as fs from 'fs';
import type { Contributor, NIHProjectMetadata, Person } from 'src/models/projects';

// Function to query the NIH Reporter API
async function fetchProjectData(grantNumber: string): Promise<NIHProjectMetadata | null> {
  const url = 'https://api.reporter.nih.gov/v2/projects/search';

  // API payload
  const payload = {
    criteria: {
      project_nums: [grantNumber],
    },
  };

  try {
    // Make the POST request to the API
    const response = await axios.post(url, payload);

    // Check if data is available
    const projects = response.data?.results;
    if (projects && projects.length > 0) {
      const project = projects[0]; // Assuming we want the first result

      // Dates
      const startDate = new Date(project.project_start_date);
      const endDate = new Date(project.project_end_date);
      const yearsBetween = endDate.getFullYear() - startDate.getFullYear();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const contributors: Contributor[] = project.principal_investigators.map((pi: any) => {
        if (pi.is_contact_pi) {
          return { name: pi.full_name, email: pi.email || undefined, roles: ['pi', 'contact_pi'] };
        } else {
          return { name: pi.full_name, email: pi.email || undefined, roles: ['pi'] };
        }
      });

      // Map the API response to the TypeScript object
      const projectData: NIHProjectMetadata = {
        funding: {
          awardTitle: project.project_title,
          awardIdentifier: project.core_project_num,
          activityCode: project.activity_code,
          awardeeOrganization: project.organization.org_name,
          startDate,
          periodOfPerformance: yearsBetween,
          awardLink: project.project_detail_url,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          programOfficers: project.program_officers.map((po: any) => {
            return { name: po.full_name };
          }),
          principalInvestigators: contributors.map((c: Contributor) => c as Person),
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
      console.error('No project data found for the provided grant number.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}

// Example usage
await (async () => {
  const projects: NIHProjectMetadata[] = [];
  const grantNumbers: string[] = [
    // Initial NIH BBQS Project List
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
    // EMBER Project - Kumar 2025
    // 'R21DA048634',
    // 'U01DA051235'
  ];

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

  // Write to a file
  const today = new Date().toISOString();
  fs.writeFile(`scripts/out/projectMetadata_${today}.json`, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File has been written successfully.');
  });
})();
