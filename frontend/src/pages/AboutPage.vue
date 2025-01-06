<template>
  <q-page class="column flex-center">
    <PageTitle title="About" />
    <div>
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>We are a team of research scientists and engineers who...</p>
          <!-- TODO -->

          <p>
            The development of EMBER is funded through the Brain Research
            Through Advancing Innovative Neurotechnologies (BRAIN) Initiative.
          </p>
          <p>
            This research is enabled by NIH Grant R24MH136632 and the Amazon Web
            Services (AWS) Open Data program.
          </p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mt-lg col-6">
        <q-card-section>
          <div class="text-h2">The Team</div>
        </q-card-section>
        <q-card-section v-for="org in team" :key="org.name">
          <div class="text-bold">{{ org.name }}</div>
          <div class="row flex-start">
            <div
              v-for="member in org.members"
              :key="member.name"
              class="col-12 col-sm-4 col-md-3 column flex-center q-pa-md"
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
import PageTitle from 'src/components/PageTitle.vue';
import { team } from 'src/constants/about';
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
