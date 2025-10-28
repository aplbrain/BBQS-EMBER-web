<template>
  <q-page padding>
    <!-- Hero / Title -->
    <div class="q-mb-lg">
      <div class="text-overline text-grey-7">EMBER Archive Project</div>
      <div class="row items-center no-wrap q-col-gutter-md">
        <div class="col-auto">
          <q-avatar square size="64px" color="primary" text-color="white">EA</q-avatar>
        </div>
        <div class="col">
          <h1 class="text-h4 q-my-none">{{ project.title }}</h1>
          <div class="text-subtitle2 text-grey-7 q-mt-xs">
            {{ project.authors }}
            <span v-if="project.year">&nbsp;•&nbsp;{{ project.year }}</span>
          </div>
          <div class="q-mt-xs">
            <q-chip
              v-for="tag in project.tags"
              :key="tag"
              dense
              square
              color="grey-3"
              text-color="grey-9"
              class="q-mr-sm"
              >{{ tag }}</q-chip
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
            <div class="text-body1 q-mt-sm">{{ project.summary }}</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-subtitle1 q-mb-sm">How to access the data (Python)</div>
            <q-banner rounded class="bg-grey-2 text-grey-9 q-mb-md">
              Install aws cli if not installed.
              <q-card flat bordered class="code-card">
                <q-card-section>
                  <pre class="language-python"><code>{{ pythonSnippet }}</code></pre>
                </q-card-section>
              </q-card>
            </q-banner>
          </q-card-section>
        </q-card>

        <!-- Publications / Citations -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h6">Citation</div>
            <div class="text-body2 q-mt-sm">
              If you use this dataset, please cite: Kumar et al. 2025 [Data set]. EMBER Archive.
              https://doi.org/10.60533/EMBER-2025-K2N5
            </div>
            <q-list separator class="q-mt-sm">
              <q-item v-for="pub in project.publications" :key="pub.title">
                <q-item-section>
                  <div class="text-body1">{{ pub.title }}</div>
                  <div class="text-caption text-grey-7">{{ pub.authors }} ({{ pub.year }})</div>
                  <div class="q-mt-xs">
                    <q-btn
                      v-if="pub.doi"
                      flat
                      dense
                      icon="bookmark"
                      :label="pub.doi"
                      :href="pub.doiUrl"
                      target="_blank"
                    />
                    <q-btn
                      v-if="pub.link"
                      flat
                      dense
                      icon="launch"
                      label="Open"
                      :href="pub.link"
                      target="_blank"
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
                    <div class="text-body2">{{ project.acquisition }}</div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="text-subtitle2 text-grey-7">Acknowledgements</div>
                    <div class="text-body2">{{ project.acknowledgements }}</div>
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
            <div class="text-subtitle1">Links</div>
            <div class="q-gutter-sm q-mt-sm">
              <q-btn
                outline
                color="primary"
                icon="table_view"
                label="View at EMBERArchive.org"
                :href="project.links.console"
                target="_blank"
                class="full-width"
              />
              <q-btn
                outline
                color="primary"
                icon="code"
                label="API Docs"
                :href="project.links.api"
                target="_blank"
                class="full-width"
              />
              <q-btn
                outline
                color="secondary"
                icon="link"
                label="Project Page"
                :href="project.links.project"
                target="_blank"
                class="full-width"
              />
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-subtitle1">Dataset Metadata</div>
            <q-list dense class="q-mt-sm">
              <q-item v-for="(val, key) in project.metadata" :key="key">
                <q-item-section>
                  <div class="text-caption text-grey-7">{{ key }}</div>
                  <div class="text-body2">{{ val }}</div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1">EMBERarchive URI</div>
            <q-banner rounded class="bg-grey-2 text-grey-9 q-mt-sm">
              <code class="break-all">{{ project.uri }}</code>
            </q-banner>
            <q-btn
              class="q-mt-sm"
              dense
              outline
              icon="content_copy"
              label="Copy URI"
              @click="copy(project.uri)"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// const leftDrawerOpen = ref(false);

const project = {
  title: 'Visual detection of seizures in mice using supervised machine learning',
  authors:
    'Gautam S. Sabnis, Leinani Hession, J. Matthew Mahoney, Arie Mobley, Marina Santos, Brian Geuther, and Vivek Kumar',
  year: '2025',
  tags: [
    'Seizure',
    'Epilepsy',
    'Machine Learning',
    'Computer Vision',
    'High Throughput',
    'Supervised Learning',
    'Mouse Models',
    'Open Field',
  ],
  summary: 'Visual detection of seizures in mice using supervised machine learning',
  acquisition: 'Data was created using XXXXX; see publication for more details.',
  acknowledgements: 'Data hosted by EMBER. Funded in part by the NIH.',
  publications: [
    {
      title: 'Visual detection of seizures in mice using supervised machine learning',
      authors: 'Kumar et al. 2025',
      year: '2025',
      doi: 'doi:10.60533/EMBER-2025-K2N5',
      doiUrl: 'https://doi.org/10.60533/EMBER-2025-K2N5',
      link: 'https://www.cell.com/cell-reports/home',
    },
  ],
  links: {
    console: 'https://EMBERarchive.org/',
    api: 'https://api-dandi.emberarchive.org/swagger',
    project: 'https://emberarchive.org/project/kumar2025',
  },
  metadata: {
    Modality: 'Electrophysiology',
    Species: 'Mouse',
    License: 'CC BY-NC-SA 4.0 Attribution-NonCommercial-ShareAlike 4.0 International',
    Size: '~GB-scale',
  },
  uri: 'https://ember-open-data.s3.us-east-1.amazonaws.com/other/kumar2025/index.html',
};

const pythonSnippet = `# View contents of kumar2025\naws s3 ls s3://ember-open-data/other/kumar2025/\n\n# Copy specific file or whole directory\naws s3 cp s3://ember-open-data/other/kumar2025/somefile .`;

async function copy(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    $q.notify({ type: 'positive', message: 'Copied!' });
  } catch {
    $q.notify({ type: 'warning', message: 'Copy failed' });
  }
}
</script>

<style scoped>
.code-card pre {
  margin: 0;
  white-space: pre-wrap;
}
.break-all {
  word-break: break-all;
}
</style>
