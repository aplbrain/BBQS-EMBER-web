<template>
  <q-page class="column items-center">
    <PageTitle title="Workflow Guidance" subtitle="Steps for ingest, validation, and data submission" />

    <div class="q-mx-xl full-width max-w-screen-lg">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h4 q-mb-md">Overview</div>
          <p>
            This page provides detailed workflow guidance for preparing, validating, and submitting data to the EMBER ecosystem.
            It is intended to help users follow a consistent process to ensure interoperability, reproducibility, and compliance
            with community standards.
          </p>
        </q-card-section>
      </q-card>

      <q-expansion-item label="Step 1: Organize Data" icon="folder" class="q-mt-md">
        <div class="q-pa-md">
          <p>Convert or organize raw data into recognized community formats where possible:</p>
          <ul>
            <li>Use NWB for neurophysiology and behavioral time series</li>
            <li>Use BIDS for imaging, EEG/MEG/iEEG, and derivatives</li>
            <li>Maintain consistent folder structures and naming conventions</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Step 2: Populate Metadata" icon="list_alt" class="q-mt-sm">
        <div class="q-pa-md">
          <p>Fill in required metadata fields and, where possible, use controlled vocabularies and ontologies:</p>
          <ul>
            <li>Project, dataset, subject, and session identifiers</li>
            <li>Species, anatomy, device, and modality information</li>
            <li>Acquisition dates, license, and contributors</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Step 3: Validate Data" icon="verified" class="q-mt-sm">
        <div class="q-pa-md">
          <p>Run validation tools to confirm compliance:</p>
          <ul>
            <li><strong>NWB Validator</strong>: checks internal structure and metadata completeness</li>
            <li><strong>BIDS Validator</strong>: checks directory layout, filenames, and sidecars</li>
            <li><strong>EMBER-DANDI Checks</strong>: automated validation during upload</li>
          </ul>
          <p class="text-caption">Address any validation errors or warnings before submission.</p>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Step 4: Prepare Ancillary Files" icon="description" class="q-mt-sm">
        <div class="q-pa-md">
          <ul>
            <li>README files describing dataset contents and organization</li>
            <li>Methodological notes or data processing scripts</li>
            <li>Supplementary documentation (e.g., experimental protocols)</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Step 5: Submit to EMBER" icon="cloud_upload" class="q-mt-sm q-mb-xl">
        <div class="q-pa-md">
          <ol>
            <li>Ensure you have registered for EMBER-DANDI with your GitHub account</li>
            <li>Use the DANDI CLI or UI to upload validated datasets</li>
            <li>Retain validation logs and ancillary files with the dataset</li>
          </ol>
          <p class="text-caption">Restricted workflows (e.g., sensitive or controlled-access data) will be added once finalized.</p>
        </div>
      </q-expansion-item>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
</script>