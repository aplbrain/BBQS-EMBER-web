<template>
  <q-page class="column items-center">
    <PageTitle title="Metadata" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            This page will host instructions for formatting and querying the metadata stored in the
            EMBER Archive. EMBER will leverage the metadata capabilities provided by various
            Community Standards (e.g.,
            <LinkText text="Neurodata Without Borders (NWB)" uri="https://www.nwb.org/" />
            ,
            <LinkText
              text="Brain Imaging Data Structure (BIDS)"
              uri="https://bids.neuroimaging.io/"
            />
            ), and will have a centralized Metadata system to enable searching across various data
            collections from the
            <LinkText :link="links.bbqs_acronym" />. Program.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { links } from 'src/constants/links';
</script>
