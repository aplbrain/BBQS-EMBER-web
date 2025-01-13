<template>
  <q-page>
    <div class="landing-section row justify-evenly col-12">
      <div class="row items-center justify-evenly">
        <div class="col-md-2 col col-6">
          <q-img src="ember-logo.png" />
        </div>
        <div class="q-pa-lg col-sm-9 col-10">
          <div class="text-h1 text-primary">EMBER Archive</div>
          <div class="text-h2">
            Ecosystem for Multi-modal Brain-behavior Experimentation and Research
          </div>
          <div class="q-mt-lg">
            EMBER is the
            <LinkText :link="links.brain_initiative" />
            data archive for multi-modal neurophysiological and behavioral data, supporting the
            <LinkText :link="links.bbqs_full" />.
          </div>
        </div>
      </div>
      <div class="row flex-center">
        <q-btn
          label="learn more"
          color="primary"
          icon-right="arrow_downward"
          @click="scrollTo(ref(sectionRefEl))"
        />
      </div>
    </div>

    <div class="q-mx-xl" style="min-height: 80vh">
      <div class="text-h2 text-center scrollable" ref="sectionRefEl">EMBER Archive</div>
      <p>
        EMBER is the
        <LinkText :link="links.brain_initiative" />
        data archive for multi-modal neurophysiological and behavioral data, supporting the
        <LinkText :link="links.bbqs_full" />. EMBER development, which was started in October 2024 and is
        in active progress, is supported by NIH Grant
        <LinkText :link="links.ember_grant" />
        and the Amazon Web Services (AWS)
        <LinkText :link="links.open_data" />
        program, led by the
        <LinkText :link="links.jhuapl" />
        . EMBER's core mission is to support the publicly funded BBQS research by providing an
        easy-to-use data storage and access solution for each research team. We are further
        committed to maturing EMBER as a resource to serve cloud-based analytics for primary and
        secondary research needs, in close collaboration with the BBQS Data Coordination and
        Artificial Intelligence Center (DCAIC). To learn more, visit the About page.
      </p>

      <p>
        If you are part of a research team whose work is funded by the BBQS program, you may wish to
        upload your data to EMBER as acquired through the grant and required by NIH. In order to
        find out how, visit the
        <RouterLink to="/getting-started#data-upload" class="link">Data Upload</RouterLink>
        section of the
        <RouterLink to="/getting-started" class="link">Getting Started</RouterLink>
        page.
      </p>

      <p>
        The current version of EMBER
        <span class="text-bold"
          >does not yet support storage of Personally Identifiable Information (PII) or Protected
          Health Information (PHI)</span
        >, which is a feature that will be developed in the coming years. You, the data uploader, is
        responsible for ensuring compliance with guidelines from any and all entities that may
        govern the use of your data, including the Institutional Review Board (IRB) of your
        institution. To learn more about how this may affect your workflow, visit the
        <RouterLink to="/getting-started#compliance" class="link">Compliance</RouterLink>
        section of the
        <RouterLink to="/getting-started" class="link">Getting Started</RouterLink>
        page.
      </p>

      <p>
        If you wish to learn how to view the data already deposited in EMBER, visit the
        <RouterLink to="/getting-started#data-access" class="link">Data Access</RouterLink>
        section of the
        <RouterLink to="/getting-started" class="link">Getting Started</RouterLink>
        page. If you believe that you are already approved by the primary data generators to handle
        the data, coordinate with the research team to be granted access to the corresponding
        portion of the EMBER data archive. If you do not have such approval in place, contact the
        EMBER team.
      </p>

      <p>
        If you wish to casually browse the repository to gain holistic insights into
        the projects supported by the NIH BRAIN Initiative BBQS program, such as for administrative,
        programmatic, or public relations use, visit the
        <RouterLink to="/projects" class="link">Projects</RouterLink>
        page. For more detailed or systematic queries, visit the
        <RouterLink to="/metadata" class="link">Metadata</RouterLink>
        page.
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LinkText from 'src/components/LinkText.vue';
import { links } from 'src/constants/links';
import { scrollTo } from 'src/utils/scroll';

// Scrollable Section
const sectionRefEl = ref<HTMLElement | null>(null);

</script>

<style>
.landing-section {
  min-height: calc(100vh - (72px + 66px));
}

</style>
