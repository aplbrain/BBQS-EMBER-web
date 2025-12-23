/**
 * about.ts
 *
 * Contains organizations, team members, and image paths to populate the About page.
 */
import type { OrganizationTeam } from 'src/models/about';
import { ASSETS_BASE_URL } from 'src/assets';

export const team: OrganizationTeam[] = [
  {
    name: 'Johns Hopkins University Applied Physics Laboratory',
    members: [
      {
        name: 'Brock Wester (PI)',
        image: ASSETS_BASE_URL + 'team/brock_wester.png',
      },
      {
        name: 'Han Yi (Co-I)',
        image: ASSETS_BASE_URL + 'team/han_yi.png',
      },
      {
        name: 'Sandy Hider',
        image: ASSETS_BASE_URL + 'team/sandy_hider.png',
      },
      {
        name: 'Rahul Hingorani',
        image: ASSETS_BASE_URL + 'team/rahul_hingorani.png',
      },
      {
        name: 'Erik Johnson',
        image: ASSETS_BASE_URL + 'team/erik_johnson.png',
      },
      {
        name: 'Grace Bezold',
        image: ASSETS_BASE_URL + 'team/grace_bezold.png',
      },
      {
        name: 'Lauren Diaz',
        image: ASSETS_BASE_URL + 'team/lauren_diaz.jpg',
      },
      {
        name: 'Nicole Guittari',
        image: ASSETS_BASE_URL + 'team/nicole_guittari.png',
      },
      {
        name: 'Mattson Ogg',
        image: ASSETS_BASE_URL + 'team/mattson_ogg.png',
      },
      {
        name: 'Neha Thomas',
        image: ASSETS_BASE_URL + 'team/neha_thomas.png',
      },
      {
        name: 'Nicole Tregoning',
        image: ASSETS_BASE_URL + 'team/nicole_tregoning.png',
      },
    ],
  },
  {
    name: 'Duke University',
    members: [
      {
        name: 'Nanthia Suthana (Co-I)',
        image: ASSETS_BASE_URL + 'team/nanthia_suthana.png',
      },
      {
        name: 'Mauricio Vallejo Martelo',
        image: ASSETS_BASE_URL + 'team/mauricio_vallejo_martelo.png',
      },
    ],
  },
  {
    name: 'University of Pennsylvania',
    members: [
      {
        name: 'Dominique Duncan (Co-I)',
        image: ASSETS_BASE_URL + 'team/dominique_duncan.png',
      },
    ],
  },
  {
    name: 'Dartmouth College',
    members: [
      {
        name: 'Yaroslav Halchenko (Co-I)',
        image: ASSETS_BASE_URL + 'team/yaroslav_halchenko.png',
      },
      {
        name: 'Cody Baker',
        image: ASSETS_BASE_URL + 'team/cody_baker.png',
      },
      {
        name: 'Austin Macdonald',
        image: ASSETS_BASE_URL + 'team/austin_macdonald.png',
      },
    ],
  },
  {
    name: 'Massachusetts Institute of Technology',
    members: [
      {
        name: 'Satrajit Ghosh (C)',
        image: ASSETS_BASE_URL + 'team/satrajit_ghosh.png',
      },
    ],
  },
];
