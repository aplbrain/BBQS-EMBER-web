<template>
  <q-page class="column items-center">
    <PageTitle title="Documentation" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2">Uploading to and Downloading Data from the EMBER-DANDI Archive</div>
          <p>These instructions describe how to upload to and download data from the EMBER-DANDI Archive. The instructions are divided into two main sections: one set of instructions for novice users, and one set for experienced users of DANDI. Navigate to a section depending on your experience with each tool.</p>
          
          <div class="text-h5">I'm new to Python, CLI, and/or DANDI</div>
          <p>If you're new to Python, follow these instructions to get Python and a virtual Anaconda environment installed:</p>
          <ol>
            <li><LinkText text="Install Anaconda"
              uri="https://www.anaconda.com/docs/main"
              />
              to get Python and standard data science/machine learning packages, and a desktop application</li>
            <li>After installing, launch the Anaconda Navigator</li>
            <li>Navigate to the "Environments" tab on the left pane</li>
            <li>Create a new environment with your desired name</li>

                <img src="/documentation-images/anaconda_navigator.png" alt="Anaconda Navigator" style="width: 1000px; height: auto;">

            <li>Click on the newly created environment, press the "Play" icon and select "Open Terminal"</li>
          </ol>

          <div class="text-h6">How do I upload data?</div>
          <ol>
            <li>Create a GitHub account 
            <LinkText
              text="here"
              uri="https://github.com/"
            />
            (ideally with an .edu account for quicker approval)</li>
            <li>Register with 
            <LinkText text="EMBER-DANDI"
            uri = "https://dandi.emberarchive.org/"
            />
            using the "Log In With GitHub" button in the top right corner</li>
            <li>Wait for confirmation of review. In the meantime, convert your data to approved standards</li>
            <li>Upon approval, log in with the "Log In With GitHub" button</li>
          </ol>

          <div class="text-h6">Convert files to appropriate standards</div>
          <ol>
            <li>
            <LinkText text="Install NWB GUIDE"
           uri="https://nwb-guide.readthedocs.io/en/stable/installation.html"
            />
            , which converts common neuroscience data formats into Neurodata Without Borders standards</li>
            <li>Complete key tutorials for NWB GUIDE:
              <ul>
                <li>
                 <LinkText text="Generate a dataset"
                uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/dataset.html"
                />
                </li>
                <li>Convert 
                <LinkText text="a single session of data"
                uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/single_session.html"
                />
               </li>
                <li>Convert 
                <LinkText text="a multi-session of data"
                uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/multiple_sessions.html"
                />
                </li>
              </ul>
            </li>
            <li>Repeat with your own your data 
            </li>
            <li> Ensure your data is supported by checking the 
            <LinkText text="ecosystem compatibility"
            uri="https://nwb-guide.readthedocs.io/en/stable/format_support.html"
            />
            </li>
            <img src="/documentation-images/ecosystem.png" alt="Ecosystem" style="width: 850px; height: auto;">
          </ol>

          <div class="text-h6">Create an EMBER-DANDIset</div>
          <ol>
            <li>Log in to EMBER-DANDI with your approved GitHub account</li>
            <li>Select the "New Dandiset" button in the top right corner</li>
            <li>Fill out basic metadata and hit "Register Dandiset"</li>
            <img src="/documentation-images/register_new_dandiset.png" alt="New Dandiset" style="width: 1200px; height: auto;">
          </ol>

          <div class="text-h6">Upload the converted files</div>
          <ol>
            <li>In the python terminal in your ember-dandi specific environment, run: `pip install -U dandi`</li>
            <li>Validate the converted files, replacing `source_folder` with the path to your .nwb files: `dandi validate --ignore DANDI.NO_DANDISET_FOUND "source_folder"`</li>
            <li>Navigate to your dataset in the EMBER-DANDI archive and note the ID number</li>
            <img src="/documentation-images/test_number_data.png" alt="Test Number Data" style="width: 900px; height: auto;">
            <li>Upload your validated .nwb files using the following commands, replacing `&lt;dataset_id&gt;` and `source_folder` with your specific information:
<pre>
dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
cd &lt;dataset_id&gt;
dandi organize "source_folder" -f dry
dandi organize "source_folder"
dandi validate .
dandi upload -i ember
<img src="/documentation-images/API_key.png" alt="API Key" style="width: 500px; height: auto;">
</pre>
            </li>
          </ol>
          <div class="text-h6">How do I download existing data?</div>
          <p>To download the whole dataset:</p>
          <ol>
            <li>Click the "Download" tab on the right-hand panel</li>
            <li>Copy the command into your python terminal</li>
          </ol>
            <img src="/documentation-images/download_dandiset.png" alt="Download Dandiset">
          <p>To download specific files:</p>
          <ol>
            <li>Navigate to the URL of the dataset of interest</li>
            <li>Click on the "Files" tab on the right-hand panel</li>
            <img src="/documentation-images/files_tab.png" alt="Files Tab" style="width: 1200px; height: auto;">
            <li>Navigate to the folder containing the desired file</li>
            <li>Click the downward pointing arrow icon to download the file</li>
          </ol>

          <div class="text-h5">I've used DANDI or CLI tools before!</div>
          <p>For experienced users, the steps for uploading data are as follows:</p>
<pre class="commands">
dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
cd &lt;dataset_id&gt;
dandi organize "source_folder" -f dry
dandi organize "source_folder"
dandi validate .
dandi upload -i ember
</pre>
          <p>For downloading data, use the standard procedures from the DANDI documentation 
          <LinkText
              text="here"
              uri="https://docs.dandiarchive.org/12_download/"
            />
          .</p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem;
}
.commands {
  margin-left: 40px; /* Indent the command block */
}
</style>
