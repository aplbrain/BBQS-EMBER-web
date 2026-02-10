<template>
  <q-page class="column items-center">
    <PageTitle title="Getting Started" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            The EMBER Archive supports free storage and sharing of public data, prioritizing data
            generated as a part of the
            <LinkText :link="links.bbqs_full" />. Users can create an account to begin instantiating
            a project and uploading data. Users can also request access to data. As the program
            progresses, project data will be released freely and publicly following appropriate
            protocols.
          </p>
          <p>
            <span class="text-bold">
              Currently, PHI/PII data cannot be submitted to the EMBER Archive.
            </span>
            As the BBQS program progresses, EMBER will be adding functionality to support PHI/PII
            data storage.
          </p>
          <div class="text-h2 scrollable">Account Setup</div>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Login & Approval</q-item-label>
                <q-item-label>
                  To create an account, users should log in through the
                  <LinkText :link="links.ember_dandi" />
                  portal. At this time, there is no login option on the main EMBER site
                  (<LinkText text="emberarchive.org" uri="https://emberarchive.org" />).
                  Users with a <code>.edu</code> email address will be automatically approved.
                  All others will require manual approval by a member of the EMBER team.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>Future Phases</q-item-label>
                <q-item-label>
                  In future phases, users can expect a separate login mechanism to support access to
                  restricted data.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="complianceSection">Compliance</div>

          <q-list class="row">
            <q-item class="col-4">
              <q-item-section>
                <q-item-label overline>Phase I</q-item-label>
                <q-item-label>
                  Users will be required to verify human data have been de-identified and are
                  approved for release and reuse. PHI/PII data will not be accepted.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="col-4">
              <q-item-section>
                <q-item-label overline>Phase II</q-item-label>
                <q-item-label>
                  Data access controls and data use agreements will be implemented, as needed, in
                  accordance with IRB requirements.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="col-4">
              <q-item-section>
                <q-item-label overline>Phase III</q-item-label>
                <q-item-label>
                  Additional support for the storage and access control for PHI and PII data will be
                  added.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="dataUploadSection">Data Upload</div>

          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>Metadata</q-item-label>
                <q-item-label>
                  Users can create an EMBER Project, specifying required and optional data for
                  dandisets.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>Animal Electrophysiology and Behavioral Data</q-item-label>
                <q-item-label>
                  Users can upload animal electrophysiology and behavioral data, specified in NWB
                  and BIDS formats, along with supporting data files. This leverages our EMBER-DANDI
                  instance.
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>De-identified Human Data</q-item-label>
                <q-item-label>
                  Appropriately de-identified human data, such as electrophysiology, can be uploaded
                  by users once assuring the appropriate IRB processes are followed and consent
                  documented. Please contact us for more information!
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label overline>Future Phases</q-item-label>
                <q-item-label>
                  Future phases will allow upload of human data requiring access controls or data
                  use agreements, as well as secure upload of PHI/PII information.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- <q-card-section>
          <div class="row justify-between">
            <div class="col-12 col-md-6 column flex-center">
              <div class="text-h4">EMBER-DANDI</div>
              <p>...</p>
              <q-btn label="EMBER-DANDI - coming soon"></q-btn>
            </div>

            <div class="col-12 col-md-6 column flex-center">
              <div class="text-h4">EMBER-PHI/PII</div>
              <p>...</p>
              <q-btn label="EMBER-PHI/PII - coming soon"></q-btn>
            </div>
          </div>
        </q-card-section> -->
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2 scrollable" ref="dataAccessSection">Data Access & Requests</div>

          <p class="q-px-md q-py-sm">
            Users can create an account to request data access. As data are released publicly in
            support of the BBQS program, they will be listed on the
            <RouterLink to="/projects" class="link">Projects</RouterLink>
            page.
          </p>
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
      }
    }
  });
});
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem;
}
</style>
