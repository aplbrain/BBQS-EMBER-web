<template>
  <q-page class="column items-center">
    <PageTitle title="Getting Started" />
    <div class="q-ma-xl">
      <p>
        The EMBER Archive supports free storage and sharing of public data,
        prioritizing data generated as a part of the
        <a
          href="https://braininitiative.nih.gov/research/systems-neuroscience/brain-behavior-quantification-and-synchronization-program"
          target="_blank"
          class="link"
          >Brain Behavior Quantification and Synchronization (BBQS) Program</a
        >.
        <br/>
        <!-- TODO -->
      </p>

      <div class="text-h2">Heading TBD</div> <!-- TODO -->
      <p>General Overview of the EMBER Archive ecosystem setup with nods to EMBER-DANDI, EMBER-DABI, EMBER-PHI/PII</p>

      <div class="row justify-between">
        <div class="col-12 col-md-4">
          <div class="text-h4 text-center">EMBER-DANDI</div>
          <p>...</p>
        </div>

        <div class="col-12 col-md-4">
          <div class="text-h4 text-center">EMBER-DABI</div>
          <p>...</p>
        </div>

        <div class="col-12 col-md-4">
          <div class="text-h4 text-center">EMBER-PHI/PII</div>
          <p>...</p>
        </div>

      </div>

      <div class="text-h3">Sub-Heading TBD</div>

      <p>Graphic &/or text to direct user which (EMBER-DANDI vs. EMBER-DABI vs. EMBER-PHI/PII) is right for their data. And what to do if multiple apply (example: PHI/PII + DANDI)</p>

      <div class="text-h4">Links</div>

      <div class="row q-gutter-x-md">
        <q-btn label="EMBER-DANDI"></q-btn>
        <q-btn label="EMBER-DABI"></q-btn>
        <q-btn label="EMBER-PHI/PII"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
</script>
