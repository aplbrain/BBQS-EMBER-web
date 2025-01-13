<template>
  <q-page class="column items-center">
    <PageTitle title="Getting Started" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            The EMBER Archive supports free storage and sharing of public data, prioritizing data
            generated as a part of the
            <LinkText :link="links.bbqs_full" />.
          </p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="complianceSection">Compliance</div>

          <p></p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="dataUploadSection">Data Upload</div>

          <p></p>
        </q-card-section>

        <q-card-section>
          <div class="row justify-between">
            <div class="col-12 col-md-4 column flex-center">
              <div class="text-h4">EMBER-DANDI</div>
              <p>...</p>
              <q-btn label="EMBER-DANDI - coming soon"></q-btn>
            </div>

            <div class="col-12 col-md-4 column flex-center">
              <div class="text-h4">EMBER-DABI</div>
              <p>...</p>
              <q-btn label="EMBER-DABI - coming soon"></q-btn>
            </div>

            <div class="col-12 col-md-4 column flex-center">
              <div class="text-h4">EMBER-PHI/PII</div>
              <p>...</p>
              <q-btn label="EMBER-PHI/PII - coming soon"></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="dataAccessSection">Data Access</div>
          <p></p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="accessRequestSection">Access Request</div>
          <p></p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section> </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { links } from 'src/constants/links';
import { scrollTo } from 'src/utils/scroll';

const route = useRoute();

// Scrollable Sections
const complianceSection = ref<HTMLElement | null>(null);
const dataUploadSection = ref<HTMLElement | null>(null);
const dataAccessSection = ref<HTMLElement | null>(null);
const accessRequestSection = ref<HTMLElement | null>(null);

onMounted(() => {
  // setTimeout is used to fix a bug where scrolling doesn't work immediately on page load
  setTimeout(() => {
    if (route.hash) {
      switch (route.hash) {
        case '#compliance':
          scrollTo(complianceSection);
          break;
        case '#data-upload':
          scrollTo(dataUploadSection);
          break;
        case '#data-access':
          scrollTo(dataAccessSection);
          break;
        case '#access-request':
          scrollTo(accessRequestSection);
          break;
      }
    }
  });
});
</script>
