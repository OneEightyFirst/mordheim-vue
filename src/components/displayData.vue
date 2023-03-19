<template>
  <div>
    <header class="text-center">
      <h1>Brettonians</h1>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <div id="accordion" v-if="warriors">
              <div v-for="(warrior, index) in warriors" :key="index +1" class="card mb-3">
                <div class="card-header bg-transparent text-center" :id="warrior.name.toLowerCase().split(' ').join('')">
                  <div class="mb-0 align-items-center">
                    <button class="text-white bg-transparent border-0" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'accordion' + index">
                      <h2 class="mb-0">{{ warrior.name }}</h2>
                      <h4 class="mb-0">{{ warrior.title }}</h4>
                    </button>
                  </div>
                </div>
                <div :id="'collapse' + index" class="collapse" :aria-labelledby="warrior.name.toLowerCase().split(' ').join('')" data-bs-parent="#accordion">
                  <div class="card-body border px-1">
                    <div class="container mb-4 font-size-20">
                      <div class="row border-bottom text-center w-100 mx-auto">
                        <div class="col border-right">
                          <p>M</p>
                        </div>
                        <div class="col border-right">
                          <p>WS</p>
                        </div>
                        <div class="col border-right">
                          <p>BS</p>
                        </div>
                        <div class="col border-right">
                          <p>S</p>
                        </div>
                        <div class="col border-right">
                          <p>T</p>
                        </div>
                        <div class="col border-right">
                          <p>W</p>
                        </div>
                        <div class="col border-right">
                          <p>I</p>
                        </div>
                        <div class="col border-right">
                          <p>A</p>
                        </div>
                        <div class="col border-right">
                          <p>Ld</p>
                        </div>
                        <div class="col">
                          <p>Sv</p>
                        </div>
                      </div>
                      <div class="row text-center w-100 mx-auto">
                        <div class="col border-right">
                          <p class="text-red">{{ warrior.stats.M[0] }}"</p>
                        </div>
                        <div class="col border-right">
                          <p class="text-green">{{ warrior.stats.WS[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.BS[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.S[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.T[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.W[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.I[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.A[0] }}</p>
                        </div>
                        <div class="col border-right">
                          <p>{{ warrior.stats.Ld[0] }}</p>
                        </div>
                        <div class="col">
                          <p>{{ warrior.stats.Sv[0] }}<span v-if="!!warrior.stats.Sv[0]">+</span><span v-else>-</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col px-3">
                          <h4 class="text-uppercase">Special Rules</h4>
                          <p class="pb-3"><strong>Leader: </strong>Any warrior within 6" of the Questing Knight may use his Leadership characteristic when taking Leadership tests.</p>
                          <p class="pb-3"><strong>Knights Virtue: </strong>A Questing Knight is a chivalrous warrior who is superior to ordinary warriors. He will never panic and break from combat and so does not have to pass a Leadership test for being all alone.</p>
                          <h4 class="text-uppercase">Equipment</h4>
                          <span tabindex="0" class="btn btn-secondary mr-1 mb-2" role="button" data-toggle="popover" data-html="true" data-trigger="focus" data-placement="top" data-title="" data-content="
                            <h4 class='text-center font-size-18'>Sword | Close Combat | As User</h4>
                            <p class='pb-1'><strong>Parry:</strong>Swords offer an excellent balance of defence and offence. A model armed with a sword may parry blows. When his opponent rolls to hit, the model armed with a sword may roll a D6. If the score is greater than the highest to hit score of his opponent, the model has parried the blow, and that attack is discarded. A model may not parry attacks made with double or more its own Strength – they are simply too powerful to be stopped.</p>
                            ">Sword
                          </span>
                          <span tabindex="0" class="btn btn-secondary mr-1 mb-2" role="button" data-toggle="popover" data-html="true" data-trigger="focus" data-placement="top" data-title="" data-content="
                            <p class='pb-1'><strong>Avoid stun:</strong>A model that is equipped with a helmet has a special 4+ save on a D6 against being stunned. If the save is made, treat the stunned result as knocked down instead. This save is not modified by the opponent’s Strength.  </p>
                            ">Helmet
                          </span>
                          <span tabindex="0" class="btn btn-secondary mr-1 mb-2" role="button" data-toggle="popover" data-html="true" data-trigger="focus" data-placement="top" data-title="" data-content="
                            <p class='pb-1'><strong>Save:</strong>A warrior that is wearing heavy armour has a basic D6 saving throw of 5+.</p>
                            <p class='pb-1'><strong>Movement:</strong>A warrior that is armed with both heavy armour and a shield suffers a -1 Movement penalty.</p>
                            ">Heavy armour
                          </span>
                          <span tabindex="0" class="btn btn-secondary mr-1 mb-2" role="button" data-toggle="popover" data-html="true" data-trigger="focus" data-placement="top" data-title="" data-content="
                            <p class='pb-1'><strong>Save:</strong>A model with a shield has a +1 to their armour save.</p>
                            ">Shield
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <p v-else>No data available</p>
          </div>
        </div>
      </div>
    </section>
    <button @click="clearData">Clear Data</button>
  </div>
</template>

<script>
export default {
  computed: {
    warriors() {
      const data = JSON.parse(localStorage.getItem('myData'));
      return data.warband.warrior;
    },
  },

  methods: {
    clearData() {
      localStorage.removeItem('myData');
    }
  }
}
</script>
