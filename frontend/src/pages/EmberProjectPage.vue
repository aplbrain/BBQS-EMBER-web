<template>
  <q-page padding v-if="loading" class="column flex-center">
    <q-spinner size="10vh" color="primary" />
  </q-page>
  <q-page padding v-else-if="project">
    <!-- Hero / Title -->
    <div class="q-mb-lg">
      <div class="text-overline text-grey-7">EMBER Archive Project</div>
      <div class="row items-center no-wrap q-col-gutter-md">
        <div class="col-auto">
          <q-avatar square size="64px" color="primary" text-color="white">
            {{ computedProjectData.authorInitials }}
          </q-avatar>
        </div>
        <div class="col">
          <h1 class="text-h4 q-my-none">{{ project.title }}</h1>
          <div class="text-subtitle2 text-grey-7 q-mt-xs">
            {{ project.dataAdministrator.name }}
            <span>&nbsp;•&nbsp;{{ project.year }}</span>
          </div>
          <div class="q-mt-xs">
            <q-chip
              v-for="keyword in project.keywords"
              :key="keyword"
              dense
              square
              color="grey-3"
              text-color="grey-9"
              class="q-mr-sm"
              >{{ keyword }}</q-chip
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Body layout -->
    <div class="row q-col-gutter-xl">
      <!-- Main column -->
      <div class="col-12 col-md-8">
        <!-- Summary / Abstract -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h6">Summary</div>
            <div class="text-body1 q-mt-sm">{{ project.description }}</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="markdown-body" v-html="renderedMarkdown"></div>
          </q-card-section>
        </q-card>

        <!-- Citation -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h6">Citation</div>
            <div class="text-body2 q-mt-sm">
              If you use this dataset, please cite:
              {{ computedProjectData.authorLastName }} et al. {{ project.year }} [Dataset]. EMBER
              Archive.
              <span v-if="project.emberDoi">https://doi.org/{{ project.emberDoi }}</span>
            </div>
            <q-btn
              v-if="project.emberDoi"
              flat
              dense
              icon="bookmark"
              :label="`DOI:${project.emberDoi}`"
              @click="copy(`https://doi.org/${project.emberDoi}`)"
            >
              <q-tooltip>Copy to Clipboard</q-tooltip>
            </q-btn>
          </q-card-section>
        </q-card>

        <!-- Publications -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h6">Publications</div>

            <q-list separator class="q-mt-sm">
              <q-item v-for="pub in project.relatedPublications" :key="pub.title">
                <q-item-section>
                  <div class="text-body1">{{ pub.title }}</div>
                  <div class="text-caption text-grey-7">
                    {{ pub.authors?.map((a) => a.name).join(', ') }} ({{ pub.year }})
                  </div>
                  <div class="q-mt-xs">
                    <q-btn
                      v-if="pub.doi"
                      flat
                      dense
                      icon="article"
                      :label="`DOI:${pub.doi}`"
                      :href="`https://doi.org/${pub.doi}`"
                      target="_blank"
                      icon-right="launch"
                    />
                    <q-btn
                      v-else-if="pub.publicationUrl"
                      flat
                      dense
                      icon="article"
                      label="Publication Link"
                      :href="pub.publicationUrl"
                      target="_blank"
                      icon-right="launch"
                    />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <!-- Additional details accordion -->
        <q-card class="q-mb-xl" flat bordered>
          <q-expansion-item
            expand-separator
            icon="info"
            label="Additional Details"
            caption="Acquisition, voxel sizes, acknowledgements, and more"
            default-opened
          >
            <q-card>
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-sm-6">
                    <div class="text-subtitle2 text-grey-7">Acquisition</div>
                    <div class="text-body2">See publication for more details.</div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="text-subtitle2 text-grey-7">Acknowledgements</div>
                    <div class="text-body2">
                      Data hosted by EMBER. Funded in part by
                      {{
                        project.funding
                          .map((f) => `${f.fundingInstitute} ${f.awardNumber}`)
                          .join(', ')
                      }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card>
      </div>

      <!-- Sidebar -->
      <div class="col-12 col-md-4">
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-subtitle1">Data</div>
            <q-list dense class="q-mt-sm">
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">EMBER-DANDI</div>
                  <div v-if="!project.dataAvailabilityEmberdandi">None</div>
                  <div
                    v-else
                    v-for="(item, idx) in project.accessLevelEmberdandisets"
                    :key="idx"
                    class="text-body2"
                  >
                    <LinkText
                      :text="item"
                      :uri="`${urls.ember_dandiset}/${item.replace('EMBER-DANDI:', '')}`"
                    />
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">EMBER Restricted</div>
                  <div v-if="!project.dataAvailabilityEmberrestricted">None</div>
                  <div
                    v-else
                    v-for="(item, idx) in project.accessLevelRestrictedDatasets"
                    :key="idx"
                    class="text-body2"
                  >
                    {{ item }}
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">EMBERvault</div>
                  <div v-if="!project.dataAvailabilityEmbervault">None</div>
                  <div
                    v-else
                    v-for="(item, idx) in project.accessLevelAccessVaultIds"
                    :key="idx"
                    class="text-body2"
                  >
                    {{ item }}
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-subtitle1">Links</div>
            <div class="q-gutter-sm q-mt-sm q-px-md">
              <q-btn
                v-for="(dataset, idx) in project.relatedData"
                :key="idx"
                outline
                color="primary"
                icon="table_view"
                label="Explore Data"
                :href="dataset"
                target="_blank"
                class="full-width"
              />
              <div v-if="!project.relatedData?.length" class="text-body2">None</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-lg" flat bordered v-if="project.modelOrganisms">
          <q-card-section>
            <div class="text-subtitle1">Dataset Species</div>
            <div class="row justify-center items-center" style="height: 200px">
              <q-img
                v-for="taxon in project.modelOrganisms"
                :key="taxon.id"
                :src="taxon.imageSource"
                fit="contain"
                style="max-width: 200px; max-height: 200px"
              />
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-subtitle1">Dataset Metadata</div>
            <q-list dense class="q-mt-sm">
              <!-- TODO: Data Modality from DANDI api -->
              <!-- <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Modality</div>
                  <div class="text-body2">{{ project.dataModalities.join(', ') }}</div>
                </q-item-section>
              </q-item> -->
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Species</div>
                  <div class="text-body2">
                    {{
                      project.modelOrganisms?.length
                        ? project.modelOrganisms?.join(', ')
                        : 'None Listed'
                    }}
                  </div>
                </q-item-section>
              </q-item>
              <!-- TODO: License from DANDI api-->
              <!-- <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">License</div>
                  <div class="text-body2">{{ project.license }}</div>
                </q-item-section>
              </q-item> -->
              <!-- TODO: Size from DANDI api -->
              <!-- <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Size</div>
                  <div class="text-body2">{{ project.websiteSpecific.size }}</div>
                </q-item-section>
              </q-item> -->
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
  <q-page padding v-else class="column flex-center">
    <div class="text-h4">No Project Found</div>
    <q-btn
      class="q-mt-md"
      color="primary"
      text-color="white"
      unelevated
      to="/"
      label="Go Home"
      no-caps
    />
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import { urls } from 'src/constants/links';
import type { ProjectComputedData, ProjectModel } from 'src/models/projects';
import projectService from 'src/services/projects.service';
import { computed, onMounted, ref } from 'vue';
import { copyToClipboard, useQuasar } from 'quasar';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

const props = defineProps({ projectId: { type: String, required: true } });

const $q = useQuasar();
const md = new MarkdownIt({ html: false, linkify: false, breaks: true });

const loading = ref(false);
const project = ref<ProjectModel>();
const computedProjectData = computed<ProjectComputedData>(() => {
  if (!project.value) {
    return { authorInitials: '', authorLastName: '', year: '' } as ProjectComputedData;
  }
  return {
    authorInitials: getInitials(project.value.dataAdministrator.name),
    authorLastName: project.value.dataAdministrator.name.split(' ').pop(),
  } as ProjectComputedData;
});

const renderedMarkdown = computed(() => {
  if (project.value?.websiteContent) {
    const raw = md.render(project.value?.websiteContent);
    return DOMPurify.sanitize(raw);
  }
  return '';
});

onMounted(async () => {
  loading.value = true;
  await projectService
    .getByProjectId(props.projectId)
    .then((value) => (project.value = value))
    .catch(() => (project.value = undefined));
  loading.value = false;
});

function getInitials(name: string): string {
  if (!name) return '';
  const names = name.split(' ');
  const initials = names
    .filter((n) => n.length > 0)
    .map((n) => n[0]?.toUpperCase())
    .join('');
  return initials;
}

async function copy(text: string): Promise<void> {
  try {
    await copyToClipboard(text);
    $q.notify({ type: 'positive', message: 'Copied!' });
  } catch {
    $q.notify({ type: 'warning', message: 'Copy failed' });
  }
}
</script>

<style>
.markdown-body pre {
  background: #f5f5f5;
  padding: 12px;
  overflow-x: auto;
  border-radius: 4px;
}

.markdown-body code {
  font-family: monospace;
}

.markdown-body p {
  margin-bottom: 1em;
}
</style>
