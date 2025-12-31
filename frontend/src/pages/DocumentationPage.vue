<template>
  <q-page class="column items-center">
    <PageTitle title="Documentation" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            EMBER is the BRAIN Initiative data archive for multi-modal neurophysiological and
            behavioral data. It serves as a platform for storing, sharing, and accessing multi-modal
            neurophysiological and behavioral data. These instructions will guide you on how to use
            the EMBER-DANDI Archive to upload and download data. The workflow varies based on the
            data file structures and object types involved.
          </p>
          <p>Please follow the instructions for the option that best fits your needs:</p>
          <div class="q-pl-md">
            <div class="text-primary text-bold">My files are all in NWB and BIDS:</div>
            There is one set of instructions for novice users, and one set for experienced users of
            DANDI. Navigate to a section depending on your experience with each tool:
            <div class="q-pl-md">
              <ol>
                <li
                  clickable
                  @click="scrollTo(ref(experiencedUserSection))"
                  class="cursor-pointer text-primary text-underline"
                >
                  I've used DANDI or CLI tools before
                </li>
                <li
                  clickable
                  @click="scrollTo(ref(newUserSection))"
                  class="cursor-pointer text-primary text-underline"
                >
                  I'm new to Python, CLI, and/or DANDI
                </li>
                <ul>
                  <li>Set up Python and your environment, install DANDI CLI</li>
                  <li>How do I upload data?</li>
                </ul>
              </ol>
            </div>
          </div>
          <div class="q-pl-md">
            <div class="text-primary text-bold">
              My files are in a mix of standards or I have not used standards:
            </div>
            Please contact the EMBER team at
            <LinkText text="emberarchive@jhuapl.edu" uri="mailto:emberarchive@jhuapl.edu/" /> to
            facilitate data ingestion into the EMBER Data Archive. We are also happy to add you to
            our Slack workspace.
          </div>
        </q-card-section>
        <q-separator class="q-my-lg" />
        <q-card-section>
          <div class="text-h3">
            <span class="text-primary text-bold">Downloading Data</span>
          </div>
          <p>Before getting started, please review how to download data:</p>
          <div class="text-h6">How do I download existing data?</div>
          <p>To download the whole dataset:</p>
          <ol>
            <li>Make sure you have the DANDI CLI tool installed</li>
            <li>Click the "Download" tab on the right-hand panel</li>
            <li>Copy the command into your python terminal and hit enter</li>
          </ol>
          <div class="row flex-center">
            <img
              class="self-center col-4"
              :src="ASSETS_BASE_URL + 'documentation-images/download_dandiset.png'"
              alt="Download Dandiset"
            />
          </div>

          <div class="text-h6">How do I download a specific file?</div>
          <p>To download specific files:</p>
          <ol>
            <li>Navigate to the URL of the dataset of interest</li>
            <li>Click on the "Files" tab on the right-hand panel</li>
            <li>Navigate to the folder containing the desired file</li>
            <li>Click the downward pointing arrow icon to download the file</li>
          </ol>

          <div class="row flex-center">
            <img
              :src="ASSETS_BASE_URL + 'documentation-images/files_tab.png'"
              alt="Files Tab"
              class="self-center col-10"
            />
          </div>
        </q-card-section>
        <q-separator class="q-my-lg" />
        <q-card-section>
          <div class="text-h3 q-mb-lg">
            <span class="text-primary text-bold">Uploading Data</span>
          </div>
          <div class="text-h5 scrollable" ref="experiencedUserSection">
            <span class="text-primary text-bold">1. I've used DANDI or CLI tools before: </span>
          </div>
          <p>For experienced users, the steps for uploading data are as follows:</p>
          <q-card flat class="bg-grey-2 q-ml-lg q-py-xs q-px-md">
            <pre><code>dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
cd &lt;dataset_id&gt;
dandi organize "source_folder" -f dry
dandi organize "source_folder"
dandi validate .
dandi upload -i ember-dandi</code></pre>
          </q-card>
          <p>
            For downloading data, use the standard procedures from the DANDI documentation
            <LinkText
              text="here"
              uri="https://docs.dandiarchive.org/user-guide-using/accessing-data/downloading/"
            />
            .
          </p>
        </q-card-section>
        <q-card-section>
          <div class="text-h5 scrollable" ref="newUserSection">
            <span class="text-primary text-bold">2. I'm new to Python, CLI, and/or DANDI: </span>
          </div>

          <div class="text-h6">How do I install Python?</div>
          If you're new to Python, it may be useful to start by checking out
          <LinkText
            text="Python's Getting Started page"
            uri="https://www.python.org/about/gettingstarted/"
          />
          .There are many ways to install and use Python, so we've highlighted a few common ways to
          get started below.

          <ul>
            <li>
              <LinkText
                text="Install Anaconda"
                uri="https://www.anaconda.com/docs/getting-started/getting-started"
              />
            </li>
            <li><LinkText text="Install uv" uri="https://docs.astral.sh/uv/#installation" /></li>
          </ul>

          <div class="text-h6">
            How do I install the
            <LinkText text="DANDI CLient" uri="https://pypi.org/project/dandi/" />?
          </div>
          <p>
            Once you've gotten up and running with Python, the following command will install the
            DANDI CLI:
          </p>
          <q-card flat class="bg-grey-2 q-ml-lg q-py-xs q-px-md">
            <pre><code>pip install -U dandi</code></pre>
          </q-card>

          <div class="text-h6">How do I upload data?</div>
          <ol>
            <li>
              Create a GitHub account
              <LinkText text="here" uri="https://github.com/" />
              (ideally with an .edu account for quicker approval)
            </li>
            <li>
              Register with
              <LinkText text="EMBER-DANDI" uri="https://dandi.emberarchive.org/" />
              using the "Log In With GitHub" button in the top right corner
            </li>
            <li>
              Wait for confirmation of review. In the meantime, convert your data to approved
              standards
            </li>
            <li>Upon approval, log in with the "Log In With GitHub" button</li>
          </ol>

          <div class="text-h6">Convert files to appropriate standards</div>
          <ol>
            <li>
              <LinkText
                text="Install NWB GUIDE"
                uri="https://nwb-guide.readthedocs.io/en/stable/installation.html"
              />
              , a desktop application that converts common neuroscience data formats into data
              standards (Neurodata Without Borders) to enable uploading to EMBER-DANDI
            </li>

            <li>
              Complete key tutorials for NWB GUIDE:
              <ul>
                <li>
                  <LinkText
                    text="Generate a dataset"
                    uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/dataset.html"
                  />
                </li>

                <li>
                  Convert
                  <LinkText
                    text="a single session of data"
                    uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/single_session.html"
                  />
                </li>

                <li>
                  Convert
                  <LinkText
                    text="a multi-session of data"
                    uri="https://nwb-guide.readthedocs.io/en/stable/tutorials/multiple_sessions.html"
                  />
                </li>
              </ul>
            </li>
            <li>Repeat steps with your own your data</li>

            <li>
              All data formats are not currently supported! Ensure your data is supported by
              checking the
              <LinkText
                text="ecosystem compatibility"
                uri="https://nwb-guide.readthedocs.io/en/stable/format_support.html"
              />
            </li>
          </ol>

          <div class="text-h6">Create an EMBER-DANDIset</div>
          <ol style="margin-top: 0">
            <li>Log in to EMBER-DANDI with your approved GitHub account</li>
            <li>Select the "New Dandiset" button in the top right corner</li>
            <li>Fill out basic metadata and hit "Register Dandiset"</li>
            <div class="row flex-center">
              <img
                :src="ASSETS_BASE_URL + 'documentation-images/register_new_dandiset.png'"
                alt="New Dandiset"
                class="self-center col-8"
              />
            </div>
          </ol>

          <div class="text-h6">Upload the converted files</div>

          <ol>
            <li>
              In the python terminal in your ember-dandi specific environment, run: `pip install -U
              dandi`
            </li>
            <li>
              Validate the converted files, replacing `source_folder` with the path to your .nwb
              files: `dandi validate --ignore DANDI.NO_DANDISET_FOUND "source_folder"`
            </li>
            <li>Navigate to your dataset in the EMBER-DANDI archive and note the ID number</li>
            <div class="row flex-center">
              <img
                :src="ASSETS_BASE_URL + 'documentation-images/test_number_data.png'"
                alt="Test Number Data"
                class="self-center col-8"
              />
            </div>
            <li>
              Upload your validated .nwb files using the following commands, replacing
              `&lt;dataset_id&gt;` and `source_folder` with your specific information:
              <q-card flat class="bg-grey-2 q-ml-lg q-py-xs q-px-md">
                <pre><code>dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
cd &lt;dataset_id&gt;
dandi organize "source_folder" -f dry
dandi organize "source_folder"
dandi validate .
dandi upload -i ember-dandi</code></pre>
              </q-card>
            </li>
          </ol>
          <div class="row flex-center">
            <img
              :src="ASSETS_BASE_URL + 'documentation-images/API_key.png'"
              alt="API Key"
              class="self-center col-4"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ASSETS_BASE_URL } from 'src/assets';
import { ref } from 'vue';
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { scrollTo } from 'src/utils/scroll';

const experiencedUserSection = ref<HTMLElement | null>(null);
const newUserSection = ref<HTMLElement | null>(null);
</script>

<style scoped>
.q-item__section > .text-overline {
  font-size: 1rem;
}
</style>
