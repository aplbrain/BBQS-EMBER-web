<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <div class="col-12 bg-warning text-black text-body row flex-center q-py-sm">
        <q-icon name="info" size="sm" class="q-px-xs" />
        This repository is under review for potential modification in compliance with Administration
        directives.
      </div>
      <q-toolbar class="text-primary row items-stretch" :class="$q.screen.gt.sm ? 'q-px-xl' : ''">
        <q-btn
          to="/"
          class="q-py-md"
          flat
          size="lg"
          label="EMBER"
          icon-right="img:/ember-logo.png"
        />
        <q-space />
        <!-- Large screens: display tabs acorss the top -->
        <q-tabs v-if="$q.screen.gt.sm" class="row items-stretch">
          <div v-for="tab in tabs" :key="tab.name" class="full-height">
            <q-route-tab
              :label="tab.name"
              :to="tab.external ? undefined : tab.route"
              :href="tab.external ? tab.route : undefined"
              :target="tab.external ? '_blank' : undefined"
              @mouseenter="
                () => {
                  if (tab.dropdown) tab.dropdown.show = true;
                }
              "
              flat
              class="full-height"
            >
              <q-icon v-if="tab.external" class="q-ml-sm" size="xs" name="launch" />
              <q-menu
                v-if="tab.dropdown"
                v-model="tab.dropdown.show"
                fit
                auto-close
                anchor="bottom middle"
                self="top middle"
                @mouseleave="
                  () => {
                    if (tab.dropdown) tab.dropdown.show = false;
                  }
                "
              >
                <q-list>
                  <q-item
                    v-for="subtab in tab.dropdown.children"
                    :key="subtab.name"
                    :to="subtab.route"
                    :href="subtab.external ? subtab.route : undefined"
                    :target="subtab.external ? '_blank' : undefined"
                    class="text-primary items-center"
                  >
                    {{ subtab.name }}
                  </q-item>
                </q-list>
              </q-menu>
            </q-route-tab>
          </div>
        </q-tabs>
        <!-- Small Screens: display tabs in a menu dropdown -->
        <q-btn-dropdown v-if="$q.screen.lt.md" auto-close stretch flat label="Menu">
          <q-list>
            <q-item
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.external ? undefined : tab.route"
              :href="tab.external ? tab.route : undefined"
              @mouseenter="
                () => {
                  if (tab.dropdown) tab.dropdown.show = true;
                }
              "
              clickable
              class="toolbar-link items-center"
            >
              {{ tab.name }}
              <q-icon v-if="tab.external" class="q-ml-sm" size="xs" name="launch" />
              <q-menu
                v-if="tab.dropdown"
                v-model="tab.dropdown.show"
                fit
                auto-close
                anchor="center left"
                self="center right"
                @mouseleave="
                  () => {
                    if (tab.dropdown) tab.dropdown.show = false;
                  }
                "
              >
                <q-list>
                  <q-item
                    v-for="subtab in tab.dropdown.children"
                    :key="subtab.name"
                    :to="subtab.route"
                    :href="subtab.external ? subtab.route : undefined"
                    :target="subtab.external ? '_blank' : undefined"
                    class="text-primary items-center"
                  >
                    {{ subtab.name }}
                  </q-item>
                </q-list>
              </q-menu>
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
            <q-icon :name="`img:${ASSETS_BASE_URL}outside-logos/github-mark-white.svg`" size="sm" />
          </a>
        </div>
        <div class="text-body2 text-right">
          <div>
            <a class="text-white text-decoration-none" href="/privacy">Privacy Policy</a> |
            <a class="text-white text-decoration-none" href="/tos">Terms of Service</a> |
            <a class="text-white text-decoration-none" href="https://www.jhuapl.edu/">APL Home</a>
          </div>
          <div>&copy; 2024 JHU/APL. All rights reserved.</div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ASSETS_BASE_URL } from 'src/assets';
import { defaultTabs } from 'src/constants/mainLayout';
import type { Tab } from 'src/models/mainLayout';
import { ref } from 'vue';

const tabs = ref<Tab[]>(defaultTabs);
</script>

<style lang="scss">
.q-icon > img {
  width: auto;
}

.q-tab__content {
  flex-direction: row;
  flex-wrap: nowrap;
}

.bg-primary-opacity-15 {
  background-color: rgba($primary, 0.15);
}

.q-list > .q-item {
  font-size: 0.9rem;
}
</style>
