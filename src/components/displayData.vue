<template>
  <div>
    <header class="text-center">
      <h1>Brettonians</h1>
    </header>
    <v-expansion-panels variant="popout" class="my-4">
      <v-expansion-panel v-for="(warrior, index) in warriors" :key="index +1">
        <v-expansion-panel-title class="text-center d-block">
          <h2 class="mb-0">{{ warrior.name }}</h2><br>
          <h4 class="mb-0">{{ warrior.title }}</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-container>
            <v-row class="text-center border-b w-100 mx-auto">
                    <v-col class="border-e pa-0">M</v-col>
                    <v-col class="border-e pa-0">WS</v-col>
                    <v-col class="border-e pa-0">BS</v-col>
                    <v-col class="border-e pa-0">S</v-col>
                    <v-col class="border-e pa-0">T</v-col>
                    <v-col class="border-e pa-0">W</v-col>
                    <v-col class="border-e pa-0">I</v-col>
                    <v-col class="border-e pa-0">A</v-col>
                    <v-col class="border-e pa-0">Ld</v-col>
                    <v-col class="pa-0">Sv</v-col>
                  </v-row>
                  <v-row class="text-center w-100 mx-auto">
                    <v-col class="border-e pa-0">{{ warrior.stats.M[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.WS[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.BS[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.S[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.T[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.W[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.I[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.A[0] }}</v-col>
                    <v-col class="border-e pa-0">{{ warrior.stats.Ld[0] }}</v-col>
                    <v-col class="pa-0">{{ warrior.stats.Sv[0] }}</v-col>
                </v-row>
          </v-container>
          <v-continer>
            <v-row v-if="!!warrior.special_rules">
              <v-col class="px-3">
                <h4 class="text-uppercase">Special Rules</h4>
                <p v-for="(rule, index) in warrior.special_rules.rule" :key="index">
                  <strong>{{ rule.title }}:</strong> {{ rule.description }}
                </p>
              </v-col>
            </v-row>
            <v-row v-if="!!warrior.equipment">
              <v-col class="px-3">
                <h4 class="text-uppercase">Equipment</h4>
                <div v-if="!!warrior.equipment.weapon">
                  <v-btn v-for="(weapon, index) in warrior.equipment.weapon" :key="index + 1" class="mb-3 me-3">
                    {{ weapon.name }}
                    <v-tooltip activator="parent" location="top">
                      {{ weapon.name }} | {{ weapon.range }} | {{ weapon.strength }}<br />
                      <strong>{{ weapon.rule[0].title }}:</strong> {{ weapon.rule[0].description }}
                    </v-tooltip>
                  </v-btn>
                </div>
                <div v-if="!!warrior.equipment.armour">
                  <v-btn v-for="(armour, index) in warrior.equipment.armour" :key="index + 1" class="mb-3 me-3">
                    {{ armour.name }}
                    <v-tooltip activator="parent" location="top">
                      <strong>{{ armour.rule[0].title }}:</strong> {{ armour.rule[0].description }}
                    </v-tooltip>
                  </v-btn>
                </div>
                <div v-if="!!warrior.equipment.misc">
                  <v-btn v-for="(misc, index) in warrior.equipment.misc" :key="index + 1" class="mb-3 me-3">
                    {{ misc.name }}
                    <v-tooltip activator="parent" location="top">
                      {{ misc.description }}
                    </v-tooltip>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-continer>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  computed: {
    warriors() {
      const data = JSON.parse(localStorage.getItem('myData'));
      return data.warriors;
    },
  },

  methods: {
    clearData() {
      localStorage.removeItem('myData');
    },
  }
}

</script>
