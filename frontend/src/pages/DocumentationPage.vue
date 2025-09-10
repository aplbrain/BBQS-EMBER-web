<template>
  <q-page class="column items-center">
    <PageTitle title="Documentation" />

          <div class="text-h6">How do I download a specific file?</div>
          <p>To download specific files:</p>
          <ol style="margin-top: 0">
            <li>Navigate to the URL of the dataset of interest</li>
            <li>Click on the "Files" tab on the right-hand panel</li>
            <li>Navigate to the folder containing the desired file</li>
            <li>Click the downward pointing arrow icon to download the file</li>
          </ol>

        <!-- File Formats sub-branches -->
        <line x1="580" y1="230" x2="660" y2="210" /> <!-- NWB -->
        <line x1="580" y1="230" x2="660" y2="250" /> <!-- BIDS -->

        <!-- NWB sub-branch -->
        <line x1="660" y1="210" x2="740" y2="190" /> <!-- HDF5 -->
      </svg>
      
      <div class="node center">EMBER</div>
      <div class="node file-formats">File Formats</div>
      <div class="node nwb">NWB</div>
      <div class="node bids">BIDS</div>
      <div class="node hdf5">HDF5</div>
      <div class="node metadata">Metadata</div>
      <div class="node vid">Vid</div>
      <div class="node community">Community</div>
      <div class="node networkgit >Network</div>
    </div>


    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2">Uploading to and Downloading Data from the EMBER-DANDI Archive</div>
          <p>These instructions describe how to interact with the EMBER-DANDI Archive for uploading and downloading data. You will need to install the DANDI CLI to upload or download data.</p>

          <!-- Expansion item for Setup Instructions -->
          <q-expansion-item label="Setup Instructions" icon="expand_more">
            <p>If you're new to Python, follow these instructions to get Python and a virtual Anaconda environment installed:</p>
            <ol>
              <li><a href="https://docs.anaconda.com/anaconda/install/">Install Anaconda</a> to get Python and standard data science/machine learning packages, and a desktop application. After installing, launch the Anaconda Navigator.</li>
              <li>Navigate to the "Environments" tab on the left pane.</li>
              <li>Create a new environment with your desired name.</li>
              <img src="/documentation-images/anaconda_navigator.png" alt="Anaconda Navigator" style="width: 1000px; height: auto">
              <li>Click on the newly created environment, press the "Play" icon and select "Open Terminal".</li>
              <li>In the python terminal in your ember-dandi specific environment, install the DANDI Client: <pre>pip install -U dandi</pre></li>
            </ol>
          </q-expansion-item>

          <!-- Expansion item for Uploading Data -->
          <q-expansion-item label="Uploading Data" icon="expand_more">
            <p>There are different instructions depending on your data format compatibility:</p>
            <ul>
              <li><strong>My files are all NWB and BIDS compatible:</strong>
                <ul>
                  <li>I'm new to Python, CLI, and/or DANDI:
                    <ul>
                      <li>Follow the initial setup instructions above to install the DANDI CLI.</li>
                      <li>For details on how to upload data, refer to the 'Upload the converted files' section below.</li>
                    </ul>
                  </li>
                  <li>I've used DANDI or CLI tools before:
                    <ul>
                      <li>Refer to the DANDI documentation for standard procedures but use the EMBER-DANDI URLs.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>My files are not NWB/BIDS compatible, or I do not use standards:</strong> Please contact the EMBER team at <LinkText text="emberarchive@jhuapl.edu" uri="mailto:emberarchive@jhuapl.edu/" /> to facilitate data ingestion into the EMBER Data Archive.</li>
            </ul>
          </q-expansion-item>

          <!-- Expansion item for Downloading Data -->
          <q-expansion-item label="Downloading Data" icon="expand_more">
            <p>Please review the steps below on how to download data:</p>
            <p>To download the whole dataset:</p>
            <ol>
              <li>Make sure you have the DANDI CLI tool installed.</li>
              <li>Click the "Download" tab on the right-hand panel.</li>
              <li>Copy the command into your python terminal and hit enter.</li>
            </ol>
            <img src="/documentation-images/download_dandiset.png" alt="Download Dandiset" />

            <p>To download specific files:</p>
            <ol>
              <li>Navigate to the URL of the dataset of interest.</li>
              <li>Click on the "Files" tab on the right-hand panel.</li>
              <li>Navigate to the folder containing the desired file.</li>
              <li>Click the downward pointing arrow icon to download the file.</li>
            </ol>
            <img src="/documentation-images/files_tab.png" alt="Files Tab" style="width: 1200px; height: auto" />
          </q-expansion-item>

          <!-- Additional instructions for novice and expert users -->
          <q-expansion-item label="Uploading Data for Novice Users" icon="expand_more">
            <p>If you're new to Python, CLI, or DANDI, follow these detailed instructions:</p>
            <ol>
              <li>Create a GitHub account, ideally with a .edu account to get approved more quickly.</li>
              <li>Register with <LinkText text="EMBER-DANDI" uri="https://dandi.emberarchive.org/" /> using the "Log In With GitHub" button in the top right.</li>
              <li>Wait to get a confirmation of review. In the meantime, convert your data to approved standards.</li>
              <li>Upon approval, log in with the "Log In With GitHub" button in the top right.</li>
            </ol>
            <img src="/documentation-images/register_new_dandiset.png" alt="Register new Dandiset" style="width: 1200px; height: auto" />
          </q-expansion-item>

          <!-- Expansion item for expert users -->
          <q-expansion-item label="Uploading Data for Expert DANDI Users" icon="expand_more">
            <p>If you are familiar with DANDI or CLI, the upload steps are very similar to the instructions outlined in the DANDI documentation, with some substitutions of EMBER-DANDI URLs:</p>
            <pre>
              dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
              cd &lt;dataset_id&gt;
              dandi organize "source_folder" -f dry
              dandi organize "source_folder"
              dandi validate .
              dandi upload -i ember
            </pre>
            <img src="/documentation-images/api_key.png" alt="API Key" style="width: 500px; height: auto;">
          </q-expansion-item>
          
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { QExpansionItem } from 'quasar';
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem;
}
.commands {
  margin-left: 40px;
}
.dark-red-text {
  color: #8B0000;
}
.page-break {
  margin-top: 50px;
  border-top: 2px solid #ccc;
  padding-top: 20px;
}

/* Mind Melding Diagram Styles */
.map {
  position: relative;
  width: 700px;
  height: 700px;
}

svg.lines {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  stroke: #999;
  stroke-width: 2;
  z-index: 0;
}

.node {
  position: absolute;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #eee;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  text-align: center;
  z-index: 1;
}

.node:hover,
.node:focus {
  background-color: #4e79a7;
  color: white;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 18px;
}

.metadata {
  top: 230px;
  left: 150px;
  transform: translate(-50%, -50%);
}
.vid {
  top: 470px;
  left: 580px;
  transform: translate(-50%, -50%);
}
.community {
  top: 470px;
  left: 150px;
  transform: translate(-50%, -50%);
}
.network {
  top: 350px;
  left: 580px;
  transform: translate(-50%, -50%);
}
.file-formats {
  top: 230px;
  left: 580px;
  transform: translate(-50%, -50%);
}
.nwb {
  top: 210px;
  left: 660px;
  font-size: 12px;
  transform: translate(-50%, -50%);
}
.bids {
  top: 250px;
  left: 660px;
  font-size: 12px;
  transform: translate(-50%, -50%);
}
.hdf5 {
  top: 190px;
  left: 740px;
  font-size: 12px;
  transform: translate(-50%, -50%);
}
</style>
