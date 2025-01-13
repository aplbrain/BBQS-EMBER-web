<template>
  <q-page class="column items-center">
    <PageTitle title="Projects" />
    <div class="q-ma-xl">
      <p>
        The NIH
        <LinkText :link="links.brain_initiative" />
        , through its ongoing
        <LinkText :link="links.bbqs_full" />
        , has funded [N] research projects, with the earliest project start date of [X]. [N] of the
        projects are funded through the
        <LinkText
          text="R61/R33 mechanism"
          uri="https://grants.nih.gov/grants/guide/rfa-files/RFA-MH-22-240.html"
        />
        intended to support the development and validation of next-generation tools, methods, and
        analytic approaches to precisely quantify behaviors and combine them with simultaneous
        recordings of brain activity in humans; [N] of the projects are funded through the
        <LinkText
          text="R34 mechanism"
          uri="https://grants.nih.gov/grants/guide/rfa-files/RFA-DA-23-030.html"
        />
        , intended to support planning and development of the research framework, design, and
        approach, including activities that will establish feasibility, validity, and/or other
        technically qualifying results that, if successful, would support a competitive application
        for a U01, R01 or equivalent NIH research award.
      </p>

      <p>A quick overview of the BBQS research projects is provided below.</p>
    </div>

    <q-table :rows="initialProjectList" :columns="ProjectTableColumns" />
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { links } from 'src/constants/links';
import { initialProjectList } from 'src/constants/projects';
import { ProjectTableColumns } from 'src/models/projects';
</script>
