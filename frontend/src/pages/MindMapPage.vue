<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import MindElixir from 'mind-elixir';
import { onMounted, ref } from 'vue';

const me = ref();

const customData = {
  nodeData: {
    id: 'root',
    topic: 'BIDS',
    children: [
      {
        id: 'child1',
        topic: 'Humans/Community',
        expanded: false,
        children: [
          { id: 'child1a', topic: 'Code of Conduct' },
          { id: 'child1b', topic: 'Contributing Guidelines' },
          { id: 'child1c', topic: 'Decision Making' },
          {
            id: 'child1d',
            topic: 'Licenses',
            expanded: false,
            children: [
              {
                id: 'child1di',
                topic: 'CC-BY-4.0',
                hyperLink: 'https://creativecommons.org/licenses/by/4.0/',
              },
              { id: 'child1dii', topic: 'MIT' },
            ],
          },
          { id: 'child1e', topic: 'RFC 2119 terms: REQUIRED, ...' },
          {
            id: 'child1f',
            topic: 'Inspired via OpenNeuro, the "Ultimated OBC"',
            expanded: false,
            children: [
              {
                id: 'child1fi',
                topic: ' Open Brain Consent Form',
                hyperLink: 'https://open-brain-consent.readthedocs.io/en/latest/ultimate.html',
              },
            ],
          },
        ],
      },
      {
        id: 'child2',
        topic: 'File formats',
        expanded: false,
        children: [
          {
            id: 'child2a',
            topic: 'Encodings',
            expanded: false,
            children: [
              { id: 'child2ai', topic: 'ASCII' },
              { id: 'child2aii', topic: 'UTF-8' },
              { id: 'child2aiii', topic: 'RFC 3339 (date time)' },
              { id: 'child2aiv', topic: 'CMIXF-12 (units)' },
            ],
          },
          { id: 'child2b', topic: 'HED' },
          {
            id: 'child2c',
            topic: 'JSON',
            expanded: false,
            children: [{ id: 'child2ci', topic: 'YAML' }],
          },
          { id: 'child2d', topic: 'Markdown' },
          { id: 'child2e', topic: 'NIfTI' },
          {
            id: 'child2f',
            topic: 'NWB',
            expanded: false,
            children: [{ id: 'child2fi', topic: 'HDF5' }],
          },
          { id: 'child2g', topic: 'OME Zarr' },
          { id: 'child2h', topic: 'TSV' },
        ],
      },
      {
        id: 'child6',
        topic: 'BEPs',
        expanded: false,
        children: [
          { id: 'child6a', topic: 'BEP001' },
          { id: 'child6b', topic: 'BEP026' },
        ],
      },
      {
        id: 'child3',
        topic: 'Metadata',
        expanded: false,
        children: [
          { id: 'child3a', topic: 'DICOM' },
          { id: 'child3b', topic: 'HED' },
          { id: 'child3c', topic: 'Cognitive Atlas' },
          { id: 'child3d', topic: 'CogPo' },
        ],
      },
      {
        id: 'child5',
        topic: 'File system',
        expanded: false,
        children: [
          { id: 'child5a', topic: 'Filename (>8.3)' },
          { id: 'child5b', topic: 'Folder (circa 1958)' },
        ],
      },
      {
        id: 'child4',
        topic: 'Automation/CI',
        expanded: false,
        children: [
          {
            id: 'child4a',
            topic: 'Circle CI',
            expanded: false,
            children: [
              { id: 'child4ai', topic: 'build' },
              { id: 'child4aii', topic: 'linkcheck' },
            ],
          },
          {
            id: 'child4b',
            topic: 'GitHub',
            expanded: false,
            children: [
              { id: 'child4bi', topic: 'codespell' },
              { id: 'child4bii', topic: 'no bad latin' },
              { id: 'child4bi', topic: '...more to catch human errors...' },
            ],
          },
        ],
      },
      {
        id: 'child7',
        topic: 'Network',
        expanded: false,
        children: [
          {
            id: 'child7a',
            topic: 'HTTP',
            expanded: false,
            children: [
              { id: 'child7ai', topic: 'TCP' },
              { id: 'child7aii', topic: 'IP' },
            ],
          },
          { id: 'child7b', topic: 'RFC 3986 (URI)' },
        ],
      },
    ],
  },
  linkData: {},
  expand: {},
};

onMounted(() => {
  me.value = new MindElixir({
    el: '#map',
    direction: MindElixir.SIDE,
  });
  me.value.init(customData);
});
</script>
<style>
#map {
  width: 100%;
  height: 1000px;
}
</style>
