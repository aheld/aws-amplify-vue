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
<<<<<<< HEAD
<<<<<<< HEAD
                this.loading = !this.loading;
                this.msg = "Saving"

                callUpdate(newValue)
                .then((data) => {
                    TestStore.commit('setParam', data)
                    console.log("return : " + data)
                    this.loading = !this.loading;
                    this.msg = "Click to save"
                })
                .catch((error) => {
                    console.log(error)
                    this.loading = !this.loading;
                    this.msg = "Click to save"
                })
            }   
=======
                callUpdate(newValue)
                .then((response) => {
                    TestStore.commit('setParam', JSON.stringify(response.body.Parameter.Value))
                })
                .catch((error) => {
                    console.log(error)
                })
            }
>>>>>>> 8ac04aefabac9d58a4d17fd9ef1ae1ff48b88b37
=======
                callUpdate(newValue)
                .then((response) => {
                    TestStore.commit('setParam', JSON.stringify(response.body.Parameter.Value))
                })
                .catch((error) => {
                    console.log(error)
                })
            }
>>>>>>> 8ac04aefabac9d58a4d17fd9ef1ae1ff48b88b37
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