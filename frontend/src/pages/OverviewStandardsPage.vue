<template>
  <q-page class="column items-center">
    <PageTitle title="Data Standards" subtitle="EMBER interoperability & reproducibility" />

    <div class="q-mx-xl full-width max-w-screen-lg">
      <!-- Overview -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Overview</div>
          <p>
            EMBER follows widely adopted, community-driven data standards to promote interoperability and reproducibility across multimodal neuroscience datasets. 
            The framework currently supports 
            <a href="https://bids.neuroimaging.io/index.html" target="_blank" rel="noopener" class="link">BIDS</a> 
            and 
            <a href="https://nwb.org/about-nwb/" target="_blank" rel="noopener" class="link">NWB</a> 
            formats, along with hybrid layouts that combine both where appropriate, and anticipate accepting new standards. 
            These standards ensure datasets remain consistent, shareable, and aligned with best practices in the BBQS and DCAIC communities.
          </p>

          <q-banner inline-actions class="q-mt-sm bg-grey-2 q-pa-md rounded-xl">
            <template #avatar>
              <q-icon name="rule" />
            </template>
            <div class="text-body1">
              As outlined on the 
              <router-link to="/documentation" class="link">Documentation</router-link>
              page, all data must be converted to BIDS and/or NWB before upload. 
              <div>
              Uploading raw, non-standardized folders is not supported by the EMBER–DANDI CLI, though, we also encourage community members to reach out for assistance with data formatting or validator setup.
              </div>
            </div>
          </q-banner>
        </q-card-section>
      </q-card>

      <!-- BIDS Essentials (uniform subsections) -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">BIDS Essentials</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Scope</q-item-label>
                <q-item-label>
                  MRI, EEG/MEG/iEEG, diffusion, functional, microscopy, behavioral logs, and derivatives.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Core files</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li><code>dataset_description.json</code> with <i>Name</i>, <i>BIDSVersion</i>, <i>Contributors</i></li>
                    <li><code>participants.tsv</code> plus <code>participants.json</code> for column metadata</li>
                    <li><code>README</code> and <code>CHANGES</code> for human-readable context</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Organization</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Subject/session hierarchy (<code>sub-</code>, optional <code>ses-</code>)</li>
                    <li>Modality folders (e.g., <code>anat</code>, <code>func</code>, <code>dwi</code>, <code>eeg</code>, <code>ieeg</code>, <code>meg</code>, <code>micr</code>, <code>beh</code>, <code>derivatives</code>)</li>
                    <li>Sidecar JSONs define acquisition parameters</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Naming & metadata</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Key–value filename entities (<code>sub</code>, <code>ses</code>, <code>task</code>, <code>run</code>, <code>acq</code>)</li>
                    <li>Modality-specific suffixes (e.g., <code>_bold</code>, <code>_T1w</code>, <code>_ieeg</code>)</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Learn more: <a href="https://bids.neuroimaging.io/index.html" target="_blank" rel="noopener" class="link">BIDS</a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- NWB Essentials (mirrors BIDS layout) -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">NWB Essentials</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Scope</q-item-label>
                <q-item-label>
                  Neurophysiology including ephys, behavior, optical physiology, and multimodal time series.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Core files</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>HDF5-based <code>.nwb</code> file per session capturing acquisition, processing, and analysis</li>
                    <li>Schema-validated containers for data, metadata, and results</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Organization</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Subject, devices, electrodes/units, intervals, and processing modules</li>
                    <li>Raw under <code>acquisition</code>; derived under <code>processing</code></li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Naming & metadata</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Use object types/names from PyNWB/MatNWB</li>
                    <li>Record units, sampling rates, and reference time consistently</li>
                    <li>Leverage NDX extensions when needed</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Learn more: <a href="https://nwb.org/about-nwb/" target="_blank" rel="noopener" class="link">NWB</a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Hybrid Layout Example -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Hybrid Layout Example</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>BIDS + NWB</q-item-label>
                <q-item-label>
                  Store <code>.nwb</code> files within a BIDS directory structure (e.g., iEEG or behavior):
                </q-item-label>
                <q-item-label>
                  <code class="q-pa-xs bg-grey-2">sub-01/ses-01/ieeg/sub-01_ses-01_task-rest_run-01_ieeg.nwb</code>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Validation Tools & Services (uniform presentation) -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Validation Tools & Services</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>BIDS Validator</q-item-label>
                <q-item-label>
                  Check directory layout, filenames, and sidecars, then iterate until clean.
                </q-item-label>
                <q-item-label>
                  <a href="https://bids-standard.github.io/bids-validator/" target="_blank" rel="noopener" class="link">Open BIDS Validator</a>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>NWB Validation</q-item-label>
                <q-item-label>
                  Validate with <code>pynwb validate</code> or NWBInspector for schema compliance and metadata completeness.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>EMBER–DANDI</q-item-label>
                <q-item-label>
                  Server-side checks run during upload; retain validation logs with the dataset for traceability.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Metadata Standards -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Metadata Standards</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Required fields</q-item-label>
                <q-item-label>
                  Project, subject or session identifiers, modality, acquisition date.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Controlled vocabularies</q-item-label>
                <q-item-label>
                  Species, anatomy, and device names using stable terms where available.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>Ontologies</q-item-label>
                <q-item-label>
                  Uberon (anatomy), NCBI Taxonomy (species), and behavior/task ontologies as appropriate.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <p class="q-px-md q-pt-sm">
            EMBER enforces core metadata fields and encourages controlled vocabularies and ontologies.
          </p>
        </q-card-section>
      </q-card>

     
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue'
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem;
}
.scrollable {
  scroll-margin-top: 100px;
}
code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.9em;
}
.rounded-xl { border-radius: 1rem; }
</style>
