<template>
  <q-page padding v-if="project">
    <!-- Hero / Title -->
    <div class="q-mb-lg">
      <div class="text-overline text-grey-7">EMBER Archive Project</div>
      <div class="row items-center no-wrap q-col-gutter-md">
        <div class="col-auto">
          <q-avatar square size="64px" color="primary" text-color="white"> {{ project.websiteSpecific.initials }} </q-avatar>
        </div>
        <div class="col">
          <h1 class="text-h4 q-my-none">{{ project.title }}</h1>
          <div class="text-subtitle2 text-grey-7 q-mt-xs">
            {{ project.contributors.map(c => c.name).join(', ') }}
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

        <!-- Citation -->
        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-h6">Citation</div>
            <div class="text-body2 q-mt-sm">
              If you use this dataset, please cite: {{ project.websiteSpecific.citationAuthorYear }} [Data set]. EMBER Archive.
              https://doi.org/{{ project.doi }}
            </div>
            <q-btn
              flat
              dense
              icon="bookmark"
              :label="`DOI:${project.doi}`"
              @click="copy(`https://doi.org/${project.doi}`)"
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
              <q-item v-for="pub in project.publications" :key="pub.title">
                <q-item-section>
                  <div class="text-body1">{{ pub.title }}</div>
                  <div class="text-caption text-grey-7">{{ pub.authors.map(a => a.name).join(', ') }} ({{ pub.year }})</div>
                  <div class="q-mt-xs">
                    <q-btn
                      v-if="pub.doi"
                      flat
                      dense
                      icon="bookmark"
                      :label="`DOI:${pub.doi}`"
                      :href="`https://doi.org/${pub.doi}`"
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
                    <div class="text-body2">Data hosted by EMBER. Funded in part by {{ project.funding.map(f => f.awardIdentifier).join(', ') }}</div>
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
                label="Explore Data"
                :href="project.dataUri"
                target="_blank"
                class="full-width"
              />
              <!-- <q-btn
                outline
                color="primary"
                icon="code"
                label="EMBER-DANDI API Docs"
                :href="project.links.api"
                target="_blank"
                class="full-width"
              /> -->
              <!-- <q-btn
                outline
                color="secondary"
                icon="link"
                label="Project Page"
                :href="project.links.project"
                target="_blank"
                class="full-width"
              /> -->
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-lg" flat bordered>
          <q-card-section>
            <div class="text-subtitle1">Dataset Metadata</div>
            <q-list dense class="q-mt-sm">
               <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Modality</div>
                  <div class="text-body2">{{project.dataModalities.join(', ')}}</div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Species</div>
                  <div class="text-body2">{{project.species.map(s => s.commonName).join(', ')}}</div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">License</div>
                  <div class="text-body2">{{project.license }}</div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <div class="text-caption text-grey-7">Size</div>
                  <div class="text-body2"> {{ project.websiteSpecific.size }} </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1">EMBER Archive URI</div>
            <q-banner rounded class="bg-grey-2 text-grey-9 q-mt-sm">
              <code class="break-all">{{ project.dataUri }}</code>
            </q-banner>
            <q-btn
              class="q-mt-sm"
              dense
              outline
              icon="content_copy"
              label="Copy URI"
              @click="copy(project.dataUri)"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
  <q-page padding v-else>
    <div class="row flex-center">
      No Project Found
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { copyToClipboard, useQuasar } from 'quasar';
import { emberProjects } from 'src/constants/projects';
import { type EmberProjectMetadata } from 'src/models/projects';
import { onMounted, ref } from 'vue';

const props = defineProps({ id: {type:String, required: true} });

const $q = useQuasar();

const project = ref<EmberProjectMetadata>();
const pythonSnippet = ref<string>();

onMounted(() => {
  if (props.id in emberProjects) {
    project.value = emberProjects[props.id];

    pythonSnippet.value = `# View contents of ${props.id}\naws s3 ls ${project.value?.websiteSpecific.s3Uri}\n\n# Copy specific file or whole directory\naws s3 cp ${project.value?.websiteSpecific.s3Uri}<file> .`;
  } else {
    console.log(`Project with id ${props.id} Not Found`)
  }
});


async function copy(text: string): Promise<void> {
  try {
    await copyToClipboard(text);
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
