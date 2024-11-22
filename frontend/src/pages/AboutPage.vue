<template>
  <div class="q-ma-md column flex-center">
    <div class="text-h1 text-primary">About</div>
    <div class="q-pa-md">We are ...
      <br/><br/><br/><br/><br/><br/><br/>
    </div>

    <q-card flat>
      <div class="text-h2">The Team</div>
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
</template>

<script setup lang="ts">
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
