<template>
  <q-page class="column items-center">
    <PageTitle title="Workflow Guidance" subtitle="Steps for ingest, validation, and data submission" />

    <div class="q-mx-xl full-width max-w-screen-lg">
      <!-- Overview -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Overview</div>
          <p>
            This page provides detailed workflow guidance for preparing, validating, and submitting data to the EMBER ecosystem.
            It is intended to help users follow a consistent process to ensure interoperability, reproducibility, and compliance
            with community standards.
          </p>
        </q-card-section>
      </q-card>

      <!-- Step 1: Organize Data -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Step 1: Organize Data</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Guidance</q-item-label>
                <q-item-label>
                  Convert or organize raw data into recognized community formats where possible:
                </q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Use NWB for neurophysiology and behavioral time series</li>
                    <li>Use file formats defined in BIDS for imaging, EEG/MEG/iEEG, and derivatives</li>
                    <li>Maintain consistent folder structures and naming conventions</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Step 2: Populate Metadata -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Step 2: Populate Metadata</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Guidance</q-item-label>
                <q-item-label>
                  Fill in required metadata fields and, where possible, use controlled vocabularies and ontologies:
                </q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>Project, dataset, subject, and session identifiers</li>
                    <li>Species, anatomy, device, and modality information</li>
                    <li>Acquisition dates, license, and contributors</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Step 3: Validate Data -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Step 3: Validate Data</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Tools</q-item-label>
                <q-item-label>
                  Run validation tools to confirm compliance:
                </q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li><strong>NWB Validator</strong>: checks internal structure and metadata completeness</li>
                    <li><strong>BIDS Validator</strong>: checks directory layout, filenames, and sidecars</li>
                    <li><strong>EMBER-DANDI Checks</strong>: automated validation during upload</li>
                  </ul>
                  <span class="text-caption">Address any validation errors or warnings before submission.</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Step 4: Prepare Ancillary Files -->
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable">Step 4: Prepare Ancillary Files</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Checklist</q-item-label>
                <q-item-label>
                  <ul class="q-ml-lg q-mt-sm">
                    <li>README files describing dataset contents and organization</li>
                    <li>Methodological notes or data processing scripts</li>
                    <li>Supplementary documentation (e.g., experimental protocols)</li>
                  </ul>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <!-- Step 5: Submit to EMBER -->
      <q-card flat class="q-mt-lg q-mb-xl">
        <q-card-section>
          <div class="text-h2 scrollable">Step 5: Submit to EMBER</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Submission</q-item-label>
                <q-item-label>
                  <ol class="q-ml-lg q-mt-sm">
                    <li>Ensure you have registered for EMBER-DANDI with your GitHub account</li>
                    <li>Use the DANDI CLI or UI to upload validated datasets</li>
                    <li>Retain validation logs and ancillary files with the dataset</li>
                  </ol>
                  <span class="text-caption">
                    Restricted workflows (e.g., sensitive or controlled-access data) will be added once finalized.
                  </span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem; /* align with Getting Started emphasis */
}
.scrollable {
  scroll-margin-top: 100px;
}
</style>
