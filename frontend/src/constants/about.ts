/**
 * about.ts
 *
 * Contains organizations, team members, and image paths to populate the About page.
 */
import type { OrganizationTeam } from 'src/models/about';

export const team: OrganizationTeam[] = [
  {
    name: 'Johns Hopkins University Applied Physics Laboratory',
    members: [
      {
        name: 'Brock Wester (PI)',
        image: 'team/brock_wester.png',
      },
      {
        name: 'Han Yi (Co-I)',
        image: 'team/han_yi.png',
      },
      {
        name: 'Sandy Hider',
        image: 'team/sandy_hider.png',
      },
      {
        name: 'Rahul Hingorani',
        image: 'team/rahul_hingorani.png',
      },
      {
        name: 'Erik Johnson',
        image: 'team/erik_johnson.png',
      },
      {
        name: 'Grace Bezold',
        image: 'team/grace_bezold.png',
      },
      {
        name: 'Lauren Diaz',
        image: 'team/lauren_diaz.jpg',
      },
      {
        name: 'Nicole Guittari',
        image: 'team/nicole_guittari.png',
      },
      {
        name: 'Mattson Ogg',
        image: 'team/mattson_ogg.png',
      },
      {
        name: 'Neha Thomas',
        image: 'team/neha_thomas.png',
      },
      {
        name: 'Nicole Tregoning',
        image: 'team/nicole_tregoning.png',
      },
    ],
  },
  {
    name: 'Duke University',
    members: [
      {
        name: 'Nanthia Suthana (Co-I)',
        image: 'team/nanthia_suthana.png',
      },
      {
        name: 'Mauricio Vallejo Martelo',
        image: 'team/mauricio_vallejo_martelo.png',
      },
    ],
  },
  {
    name: 'University of Pennsylvania',
    members: [
      {
        name: 'Dominique Duncan (Co-I)',
        image: 'team/dominique_duncan.png',
      },
    ],
  },
  {
    name: 'Dartmouth College',
    members: [
      {
        name: 'Yaroslav Halchenko (Co-I)',
        image: 'team/yaroslav_halchenko.png',
      },
      {
        name: 'Cody Baker',
        image: 'team/cody_baker.png',
      },
      {
        name: 'Austin Macdonald',
        image: 'team/austin_macdonald.png',
      },
    ],
  },
  {
    name: 'Massachusetts Institute of Technology',
    members: [
      {
        name: 'Satrajit Ghosh (C)',
        image: 'team/satrajit_ghosh.png',
      },
    ],
  },
];
