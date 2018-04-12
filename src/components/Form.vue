<template>
    <div>
        <h1>{{ txt }}</h1>
        <v-app>
        <v-container fluid>
            <v-switch
                :label="`${msg.toString()}`"
                v-model="switch1"
                color="blue"
            ></v-switch>
        </v-container>
        </v-app>
    </div>

</template>


<script>

import TestStore from './TestStore'

export default {
    name: 'Form',
    data () {
        return {
            txt: "Sample form",
            msg: "Click to save",
        }
    },
    computed: {
        switch1: {
            get () {
                return TestStore.state.autoApprove
            },
            set (newValue) {
                callUpdate(newValue)
                .then((response) => {
                    TestStore.commit('setParam', JSON.stringify(response.body.Parameter.Value))
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
}

import { API } from 'aws-amplify'

async function callUpdate(newValue) {
  console.log(newValue)
  let myInit = {
      body: {
          "Parameter" : {
              "Value": newValue
          }
      }
  }
  return await API.put('params', '/params', myInit )
    
}

</script>