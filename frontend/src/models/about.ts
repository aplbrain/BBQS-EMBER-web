
export interface OrganizationTeam {
  name: string;
  icon?: string;
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  image?: string;
}
