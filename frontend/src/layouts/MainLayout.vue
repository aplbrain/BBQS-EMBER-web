<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white" :class="$q.screen.gt.xs ? 'q-px-xl' : ''">
      <q-toolbar class="text-primary row items-stretch">
        <q-btn
          to="/"
          class="q-py-md"
          flat
          size="lg"
          label="EMBER"
          icon-right="img:ember-logo.png"
        />
        <q-space />
        <q-tabs v-if="$q.screen.gt.xs" class="row items-stretch">
          <q-btn
            v-for="tab in tabs"
            :key="tab.name"
            :label="tab.name"
            :to="tab.route"
            flat
            class="full-height"
          />
        </q-tabs>
        <q-btn-dropdown v-if="$q.screen.lt.sm" auto-close stretch flat label="Menu">
          <q-list>
            <q-item
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.route"
              clickable
              class="toolbar-link"
            >
              <q-item-section>{{ tab.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary q-px-md q-py-lg">
      <div class="row justify-between">
        <div>
          <a href="https://github.com/aplbrain" target="_blank">
            <q-icon name="img:outside-logos/github-mark-white.svg" size="sm" />
          </a>
        </div>
        <div class="text-body2 text-right">
          <div>
            <a class="text-white text-decoration-none" href='/privacy'>Privacy Policy</a> |
            <a class="text-white text-decoration-none" href='/tos'>Terms of Service</a> |
            <a class="text-white text-decoration-none" href='https://www.jhuapl.edu/'>APL Home</a>
          </div>
          <div>&copy; 2024 JHU/APL. All rights reserved.</div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { Tab } from 'src/models/mainLayout';

const tabs: Tab[] = [
  { name: 'Projects', route: '/projects' },
  { name: 'Getting Started', route: '/getting-started' },
  { name: 'Tools', route: '/tools' },
  { name: 'Metadata', route: '/metadata' },
  { name: 'About', route: '/about' },
];
</script>

<style>
.q-icon > img {
  width: auto;
}
</style>
