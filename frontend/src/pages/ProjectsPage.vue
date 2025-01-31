<template>
  <q-page>
    <PageTitle title="Projects" />
    <div class="q-ma-xl row">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            The NIH
            <LinkText :link="links.brain_initiative" />
            , through its ongoing
            <LinkText :link="links.bbqs_full" />
            , has funded {{ projectCounts.total }} research projects, with the earliest project start
            date of {{ earliestProjectStart }}. {{ projectCounts.r61r33 }} of the projects are funded
            through the
            <LinkText
              text="R61/R33 mechanism"
              uri="https://grants.nih.gov/grants/guide/rfa-files/RFA-MH-22-240.html"
            />
            intended to support the development and validation of next-generation tools, methods, and
            analytic approaches to precisely quantify behaviors and combine them with simultaneous
            recordings of brain activity in humans; {{ projectCounts.r34 }} of the projects are funded
            through the
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
        </q-card-section>
      </q-card>
    </div>

    <div class="q-ma-xl row justify-center">
      <q-table
        :rows="initialProjectList"
        :columns="ProjectTableColumns"
        :rows-per-page-options="[0]"
        class="col-12"
      >
        <template v-slot:body-cell-awardIdentifier="props">
          <q-td>
            <a :href="props.row.funding.awardLink" target="_blank" class="link">
              {{ props.value }}
            </a>
          </q-td>
        </template>
        <template v-slot:body-cell-contactPrincipalInvestigator="props">
          <q-td>
            <span v-for="(pi, idx) in props.value" :key="pi">
              <a v-if="'email' in pi && pi.email" :href="`mailto:${pi.email}`" target="_blank" class="link">
                {{ pi.name }}
              </a>
              <span v-else>{{ pi.name }}</span>
              <span v-if="idx != 0">, </span>
            </span>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { links } from 'src/constants/links';
import { initialProjectList } from 'src/constants/projects';
import { ProjectTableColumns } from 'src/models/projects';
import { getMonthYear } from 'src/utils/date';

const projectCounts: Record<string, number> = {
  total: initialProjectList.length,
  r61r33: initialProjectList.filter(
    (p) => p.funding.activityCode === 'R61' || p.funding.activityCode === 'R33'
  ).length,
  r34: initialProjectList.filter((p) => p.funding.activityCode === 'R34').length,
};

const earliestProjectStart: string = getMonthYear(
  new Date(initialProjectList.map((p) => p.funding.startDate.getTime()).sort()[0])
);
</script>
