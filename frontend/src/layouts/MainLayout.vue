<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white q-px-xl">
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
        <q-tabs class="row items-stretch">
          <q-btn to="/about" flat class="full-height">About</q-btn>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary q-pa-sm"> TBD </q-footer>
  </q-layout>
</template>

<script setup lang="ts"></script>

