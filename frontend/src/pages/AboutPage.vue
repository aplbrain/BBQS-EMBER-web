<template>
  <q-page class="column items-center">
    <PageTitle title="About" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            In September 2024, our team at the
            <LinkText :link="links.jhuapl" />
            , University of California, Los Angeles, University of Pennsylvania, Dartmouth College,
            and Massachusetts Institute of Technology were funded by the NIH Grant
            <LinkText :link="links.ember_grant" />
            to build the data archive for hosting the data generated through the NIH
            <LinkText :link="links.brain_initiative" />'s <LinkText :link="links.bbqs_full" />.
          </p>

          <p>
            We are thus currently developing the Ecosystem for Multi-modal Brain-behavior
            Experimentation and Research (EMBER) Archive as the accessible and versatile data
            archive for storage, processing, and curation of multimodal neurophysiological and
            behavioral datasets. EMBER extends established BRAIN Initiative data infrastructure,
            provides new data harmonization and synchronization capabilities, and supports scalable
            integrations for data coordination and AI driven batch processing to enable the goals of
            the BBQS program. This resource will facilitate dataset sharing, cross-modality
            querying, and data mining to fundamentally transform our understanding of cognition and
            behavior and provide a foundation for improved health and clinical outcomes.
          </p>

          <p>
            The members of our team collectively represent JHU/APL's existing contributions to the
            scientific community in this domain (e.g., NIH
            <LinkText text="BossDB" uri="https://bossdb.org/" />
            ; IARPA
            <LinkText text="MICrONS" uri="https://directorsblog.nih.gov/tag/microns/" />
            ; DARPA
            <LinkText
              text="Revolutionizing Prosthetics Program"
              uri="https://www.jhuapl.edu/work/projects-and-missions/revolutionizing-prosthetics"
            />
            ; NIH
            <LinkText
              text="CONNECTS"
              uri="https://braininitiative.nih.gov/research/neuroimaging-technologies-across-scales/brain-initiative-connectivity-across-scales"
            />
            ). Our effort will further crucially leverage existing BRAIN resources for large neural
            data storage that have already been created and are widely used in the community:
            namely,
            <LinkText :link="links.dandi_full" />
            , which has been developed and maintained by members of our team. The infrastructure for
            storage is generously supported by the Amazon Web Services (AWS)
            <LinkText :link="links.open_data" />
            program.
          </p>

          <p>
            Integral to EMBER's success will be acceptance in the community as the gold-standard
            engine for discovery. We will nurture bidirectional collaboration with the data
            generators, analysts, as well as the broader neuroscience research community to
            introduce and maintain tools for sharing, querying, and analyzing data. EMBER will
            maximize the BBQS program's potential to reach its ambitious objectives of transforming
            our understanding of the link between brain and behavior.
          </p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2">The Team</div>
        </q-card-section>
        <q-card-section v-for="org in team" :key="org.name">
          <div class="text-bold">{{ org.name }}</div>
          <div class="row flex-start">
            <div
              v-for="member in org.members"
              :key="member.name"
              class="col-12 col-sm-4 col-md-3 col-lg-2 column flex-center q-pa-md"
              fit="cover"
            >
              <q-img :src="member.image" class="profile" ratio="1">
                <template v-slot:error>
                  <q-icon size="xl" name="account_circle" color="grey" />
                </template>
              </q-img>
              <span>{{ member.name }}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { team } from 'src/constants/about';
import { links } from 'src/constants/links';
</script>

<style scoped>
.q-img.profile {
  border-radius: 50%;
  width: 40%;

  .q-icon {
    width: 100%;
    height: 100%;
  }
}
</style>
