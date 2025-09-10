<template>
  <q-page class="column items-center">
    <PageTitle title="Standards" subtitle="EMBER interoperability & reproducibility" />

    <div class="q-mx-xl full-width max-w-screen-lg">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h4 q-mb-md">Overview</div>
          <p>
            EMBER adopts community standards to enable interoperability and reproducibility across multimodal neuroscience datasets.
            This page outlines the data and metadata standards integrated by EMBER, workflow guidance for users, validation tools,
            and EMBER-specific conventions.
          </p>
        </q-card-section>
      </q-card>

      <q-expansion-item label="Data Standards (NWB, BIDS)" icon="schema" class="q-mt-md">
        <div class="q-pa-md">
          <p>EMBER integrates widely used community standards for data organization:</p>
          <ul>
            <li><strong>NWB:</strong> for neurophysiology (ephys, behavior, optophysiology)</li>
            <li><strong>BIDS:</strong> for MRI, EEG/MEG/iEEG, microscopy, derivatives</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Metadata Standards" icon="list_alt" class="q-mt-sm">
        <div class="q-pa-md">
          <p>EMBER enforces core metadata fields and encourages controlled vocabularies/ontologies:</p>
          <ul>
            <li>Required fields: project, subject/session IDs, modality, acquisition date</li>
            <li>Controlled vocabularies: species, anatomy, device names</li>
            <li>Ontologies: Uberon (anatomy), NCBI Taxonomy, behavior/task ontologies</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Workflow Guidance" icon="directions" class="q-mt-sm">
        <div class="q-pa-md">
          <ol>
            <li>Organize/convert data into NWB or BIDS formats</li>
            <li>Populate metadata fields (use controlled vocabularies where possible)</li>
            <li>Run local validators and fix errors/warnings</li>
            <li>Prepare ancillary files (README, code, notes)</li>
            <li>Upload via EMBER‑DANDI</li>
          </ol>
          <p class="text-caption">Restricted workflows will be added once finalized.</p>
        </div>
      </q-expansion-item>

      <q-expansion-item label="Validation Tools & Services" icon="verified" class="q-mt-sm">
        <div class="q-pa-md">
          <ul>
            <li>NWB Validator: checks file structure and metadata</li>
            <li>BIDS Validator: checks directory layout, filenames, sidecars</li>
            <li>EMBER‑DANDI server‑side checks during upload</li>
          </ul>
        </div>
      </q-expansion-item>

      <q-expansion-item label="EMBER‑Specific Conventions" icon="description" class="q-mt-sm q-mb-xl">
        <div class="q-pa-md">
          <ul>
            <li>Naming rules: dataset IDs, subject/session formats (lowercase + underscores)</li>
            <li>Schema snippets: JSON/YAML examples for common metadata blocks</li>
            <li>Templates: starter JSON sidecars and field checklists</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
</script>
