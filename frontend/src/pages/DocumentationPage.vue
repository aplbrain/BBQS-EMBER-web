<template>
  <q-page class="column items-center">
    <PageTitle title="Documentation" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h2">Uploading to and Downloading Data from the EMBER-DANDI Archive</div>
          <p>
            EMBER is the BRAIN Initiative data archive for multi-modal neurophysiological and
            behavioral data. It serves as a platform for storing, sharing, and accessing multi-modal
            neurophysiological and behavioral data. These instructions will guide you on how to use
            the EMBER-DANDI Archive to upload and download data. The workflow varies based on the
            data file structures and object types involved.
          </p>
          <p>Please follow the instructions for the option that best fits your needs:</p>
          <div style="padding-left: 20px; margin-bottom: 0">
            <strong><span class="dark-red-text">My files are all in NWB and BIDS:</span></strong>
            There is one set of instructions for novice users, and one set for experienced users of
            DANDI. Navigate to a section depending on your experience with each tool:
            <ol style="padding-left: 50px; margin-top: 0; margin-bottom: 0">
              <li>I'm new to Python, CLI, and/or DANDI</li>
              <ul>
                <li>Set up Python and your environment, install DANDI CLI</li>
                <li>How do I upload data?</li>
              </ul>
              <li>I've used DANDI or CLI tools before</li>
            </ol>
          </div>
          <p style="padding-left: 20px">
            <strong
              ><span class="dark-red-text"
                >My files are in a mix of standards or I do not use standards:</span
              ></strong
            >
            Please contact the EMBER team at
            <LinkText text="emberarchive@jhuapl.edu" uri="mailto:emberarchive@jhuapl.edu/" /> to
            facilitate data ingestion into the EMBER Data Archive. We are also happy to add you to
            our Slack workspace.
          </p>

          <div class="page-break"></div>
          <!-- Visual page break -->

          <div class="text-h5">
            <strong> <span class="dark-red-text">Downloading Data: </span> </strong>
          </div>
          <p>Before getting started, please review how to download data:</p>
          <div class="text-h6">How do I download existing data?</div>
          <p>To download the whole dataset:</p>
          <ol style="margin-top: 0">
            <li>Make sure you have the DANDI CLI tool installed</li>
            <li>Click the "Download" tab on the right-hand panel</li>
            <li>Copy the command into your python terminal and hit enter</li>
          </ol>
          <img src="/documentation-images/download_dandiset.png" alt="Download Dandiset" />

          <div class="text-h6">How do I download a specific file?</div>
          <p>To download specific files:</p>
          <ol style="margin-top: 0">
            <li>Navigate to the URL of the dataset of interest</li>
            <li>Click on the "Files" tab on the right-hand panel</li>
            <li>Navigate to the folder containing the desired file</li>
            <li>Click the downward pointing arrow icon to download the file</li>
          </ol>
          <!-- This is where the closing tag for the ol should be -->
          <img
            src="/documentation-images/files_tab.png"
            alt="Files Tab"
            style="width: 1200px; height: auto"
          />

          <div class="page-break"></div>
          <!-- Visual page break -->

          <div class="text-h5">
            <strong>
              <span class="dark-red-text"> 1. I'm new to Python, CLI, and/or DANDI: </span>
            </strong>
          </div>
          <p>
            If you're new to Python, follow these instructions to get Python and a virtual Anaconda
            environment installed:
          </p>
          <ol>
            <li>
              <LinkText text="Install Anaconda" uri="https://www.anaconda.com/docs/main" /> to get
              Python and standard data science/machine learning packages, and a desktop application
            </li>
            <li>After installing, launch the Anaconda Navigator</li>
            <li>Navigate to the "Environments" tab on the left pane</li>
            <li>Create a new environment with your desired name</li>
            <img
              src="/documentation-images/anaconda_navigator.png"
              alt="Anaconda Navigator"
              style="width: 1000px; height: auto"
            />

            <li>
              Click on the newly created environment, press the "Play" icon and select "Open
              Terminal"
            </li>

            <li>
              In the python terminal in your ember-dandi specific environment, install the DANDI
              Client:
              <pre> pip install -U dandi</pre>
            </li>
          </ol>

          <div class="text-h6">How do I upload data?</div>
          <ol style="margin-top: 0">
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
          <ol style="margin-top: 0">
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
            <img
              src="/documentation-images/ecosystem.png"
              alt="Ecosystem"
              style="width: 850px; height: auto"
            />
          </ol>

          <div class="text-h6">Create an EMBER-DANDIset</div>
          <ol style="margin-top: 0">
            <li>Log in to EMBER-DANDI with your approved GitHub account</li>
            <li>Select the "New Dandiset" button in the top right corner</li>
            <li>Fill out basic metadata and hit "Register Dandiset"</li>
            <img
              src="/documentation-images/register_new_dandiset.png"
              alt="New Dandiset"
              style="width: 1200px; height: auto"
            />
          </ol>

          <div class="text-h6">Upload the converted files</div>

          <ol style="margin-top: 0">
            <li>
              In the python terminal in your ember-dandi specific environment, run: `pip install -U
              dandi`
            </li>
            <li>
              Validate the converted files, replacing `source_folder` with the path to your .nwb
              files: `dandi validate --ignore DANDI.NO_DANDISET_FOUND "source_folder"`
            </li>
            <li>Navigate to your dataset in the EMBER-DANDI archive and note the ID number</li>
            <img
              src="/documentation-images/test_number_data.png"
              alt="Test Number Data"
              style="width: 900px; height: auto"
            />
            <li>
              Upload your validated .nwb files using the following commands, replacing
              `&lt;dataset_id&gt;` and `source_folder` with your specific information:
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
          <div class="page-break"></div>
          <!-- Visual page break -->

          <div class="text-h5">
            <strong>
              <span class="dark-red-text"> 2. I've used DANDI or CLI tools before: </span>
            </strong>
          </div>
          <p>For experienced users, the steps for uploading data are as follows:</p>
          <pre class="commands">
dandi download https://dandi.emberarchive.org/dandiset/&lt;dataset_id&gt;/draft
cd &lt;dataset_id&gt;
dandi organize "source_folder" -f dry
dandi organize "source_folder"
dandi validate .
dandi upload -i ember
</pre
          >
          <p>
            For downloading data, use the standard procedures from the DANDI documentation
            <LinkText text="here" uri="https://docs.dandiarchive.org/12_download/" />
            .
          </p>
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

.dark-red-text {
  color: #8b0000; /* Dark red color */
}

.page-break {
  margin-top: 50px; /* Adds vertical space */
  border-top: 2px solid #ccc; /* Adds a horizontal line */
  padding-top: 20px; /* Adds padding above the next content for separation */
}
</style>
