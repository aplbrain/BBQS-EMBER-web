import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'data',
        component: () => import('pages/DataPage.vue'),
      },
      {
        path: 'getting-started',
        component: () => import('pages/GettingStartedPage.vue'),
      },
      {
        path: 'tools',
        component: () => import('pages/ToolsPage.vue'),
      },
      {
        path: 'metadata',
        component: () => import('pages/MetadataPage.vue'),
      },
      {
        path: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
