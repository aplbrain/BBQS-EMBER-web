/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Run with
 *  yarn ts-node scripts/fetchProjectMetadata.ts
 *
 *
 * Generated with assistance from ChatGPT.
 */

//
import axios from 'axios';
import * as fs from 'fs';
import { Contributor, Person, ProjectMetadata } from 'src/models/projects';

// Function to query the NIH Reporter API
async function fetchProjectData(grantNumber: string): Promise<ProjectMetadata | null> {
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

      const contributors: Contributor[] = project.principal_investigators.map((pi: any) => {
        if (pi.is_contact_pi) {
          return { name: pi.full_name, email: pi.email || undefined, roles: ['pi', 'contact_pi'] };
        } else {
          return { name: pi.full_name, email: pi.email || undefined, roles: ['pi'] };
        }
      });

      // Map the API response to the TypeScript object
      const projectData: ProjectMetadata = {
        funding: {
          awardTitle: project.project_title,
          awardIdentifier: project.core_project_num,
          activityCode: project.activity_code,
          awardeeOrganization: project.organization.org_name,
          startDate,
          periodOfPerformance: yearsBetween,
          awardLink: project.project_detail_url,
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
(async () => {
  const projects: ProjectMetadata[] = [];
  const grantNumbers: string[] = [
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
