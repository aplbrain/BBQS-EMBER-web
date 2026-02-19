<template>
  <q-page>
    <PageTitle title="Projects" />
    <div class="q-mx-xl row">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            The NIH
            <LinkText :link="links.brain_initiative" />
            , through its ongoing
            <LinkText :link="links.bbqs_full" />
            , has funded over 20 research projects (and counting), with the earliest project start
            date of January 2024. Each BBQS project is funded through one of the R61, R33, or R24
            NIH funding mechansims. The
            <LinkText
              text="R61/R33 mechanism"
              uri="https://grants.nih.gov/grants/guide/rfa-files/RFA-MH-22-240.html"
            />
            is intended to support the development and validation of next-generation tools, methods,
            and analytic approaches to precisely quantify behaviors and combine them with
            simultaneous recordings of brain activity in humans, The
            <LinkText
              text="R34 mechanism"
              uri="https://grants.nih.gov/grants/guide/rfa-files/RFA-DA-23-030.html"
            />
            is intended to support planning and development of the research framework, design, and
            approach, including activities that will establish feasibility, validity, and/or other
            technically qualifying results that, if successful, would support a competitive
            application for a U01, R01 or equivalent NIH research award.
          </p>

          <p>A quick overview of the projects supported by EMBER is provided below.</p>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-mx-xl q-px-md row justify-center">
      <q-table
        :rows="projects"
        :columns="ProjectTableColumns"
        :rows-per-page-options="[0]"
        class="col-12 q-mb-lg"
      >
        <template v-slot:body-cell-projectId="props">
          <q-td>
            <router-link :to="`project/${props.row.projectId}`" target="_blank" class="link">
              {{ props.value }}
            </router-link>
          </q-td>
        </template>
        <template v-slot:body-cell-principalInvestigator="props">
          <q-td>
            <a
              v-if="props.row.dataAdministrator.email"
              :href="`mailto:${props.row.dataAdministrator.email}`"
              target="_blank"
              class="link"
            >
              {{ props.value }}
            </a>
            <span v-else>
              {{ props.value }}
            </span>
          </q-td>
        </template>
        <template v-slot:body-cell-funding="props">
          <q-td>
            <span v-for="(funding, idx) in props.row.funding" :key="idx">
              <span v-if="idx != 0">, </span>

              <a v-if="funding.fundingUrl" :href="funding.fundingUrl" target="_blank" class="link">
                {{ funding.fundingInstitute }} {{ funding.awardNumber }}
              </a>
              <span v-else>{{ funding.fundingInstitute }} {{ funding.awardNumber }}</span>
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
import type { ProjectModel } from 'src/models/projects';
import { ProjectTableColumns } from 'src/models/projects';
import projectsService from 'src/services/projects.service';
import { onMounted, ref } from 'vue';

const projects = ref<ProjectModel[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await projectsService
    .getAll()
    .then((value) => (projects.value = value))
    .catch(() => (projects.value = []));
  loading.value = false;
});
</script>
