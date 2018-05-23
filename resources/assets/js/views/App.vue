<template>
<div class="body-reflectie">
      <div class="container flop">
      <h2 class="text-center test">Reflectie</h2>
            <div class="body-reflectie" v-show="$parent.step === 1">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 2</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 2">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 3</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 3">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 4</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 4">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 5</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 5">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 6</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 6">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 7</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 7">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 8</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 8">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 9</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 9">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">vraag 10</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 10">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Overzicht</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 11">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">verstuur</button>
            </div>
      </div>

<!--    <button @click.prevent="$parent.prev()">Previous</button>
    <button @click.prevent="$parent.next()">Next</button> -->

	<div v-show="$parent.step === 1">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 1
                  </div>
                   <div class="vraagbox-reflectie-text">
                        wat heb je gezien en gehoord?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag1 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag1 }} </div>
            </div>

            <div class="waarden-bottom">
            <div class="collapsible">
                <input type="button" value="Waarden" class="more-button">
                <div class='growable'>
                    <div class='measuringWrapper'>
                    <div class="scrollmenu">
                            <table class="table">
                                <thead>
                                    <th>Waarden</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Loyaliteit</td>
                                </tr>
                                <tr>
                                    <td>Geduld</td>
                                </tr>
                                <tr>
                                    <td>Openheid</td>
                                </tr>
                                <tr>
                                    <td>Flexibiliteit</td>
                                </tr>
                                <tr>
                                    <td>Rechtvaardig</td>
                                </tr>
                                <tr>
                                    <td>Schoonheid</td>
                                </tr>
                                <tr>
                                    <td>Respect</td>
                                </tr>
                                            </tbody>
                           </table>
                       </div>
                    </div>
                </div>
            </div>
          </div>






            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag1" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
    	<div v-show="$parent.step === 2">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 2
                  </div>
                  <div class="vraagbox-reflectie-text">
                        wat heb jij daarbij gedacht en gevoeld ?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag2 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag2 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag2" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
      </div>
    	<div v-show="$parent.step === 3">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 3
                  </div>
                  <div class="vraagbox-reflectie-text">
                         Wat raakt je in de situatie, welke waarde is voor jou in het geding ?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag3 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag3 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag3" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
    	<div v-show="$parent.step === 4">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 4
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag4 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag4 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag4" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 5">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 5
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wie speelt welke rol en klopt dat volgens jou?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag5 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag5 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag5" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 6">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 6
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wie heeft welk belang en wlke tegenstellingen zijn daarin?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag6 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag6 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag6" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 7">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 7
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Formuleer je gewetensvraag, Begin met: moet..? Of: mag...?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag7 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag7 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag7" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 8">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 8
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Zijn er nog meer gewetensvragen te formuleren?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag8 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag8 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag8" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 9">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 9
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Welke vragen zijn nog niet beantwoord?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag9 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag9 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag9" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 10">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 10
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Zijn er nog meer gewetensvragen te formuleren?
                  </div>
            </div>
            <div v-if="$parent.Vragen.vraag10 !== null">
                  <div class="Reflectie-Response"> {{ $parent.Vragen.vraag10 }} </div>
            </div>
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.Vragen.vraag10" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            </div>
	</div>
      <div v-show="$parent.step === 11">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 1
                  </div>
                  <div class="vraagbox-reflectie-text">
                        wat heb je gezien en gehoord?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag1 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 2
                  </div>
                  <div class="vraagbox-reflectie-text">
                        wat heb jij daarbij gedacht en gevoeld ?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag2 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 3
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wat raakt je in de situatie, welke waarde is voor jou in het geding ?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag3 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 4
                  </div>
            <div class="vraagbox-reflectie-text">
                  Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?
            </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag4 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 5
                  </div>
                  <div class="vraagbox-reflectie-text">
                  Wie speelt welke rol en klopt dat volgens jou?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag5 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                  Vraag 6
                  </div>
            <div class="vraagbox-reflectie-text">
                  Wie heeft welk belang en wlke tegenstellingen zijn daarin?
            </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag6 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 7
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Formuleer je gewetensvraag, Begin met: moet..? Of: mag...?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag7 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 8
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Zijn er nog meer gewetensvragen te formuleren?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag8 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 9
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Welke vragen zijn nog niet beantwoord?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag9 }} </div>
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 10
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Zijn er nog meer gewetensvragen te formuleren?
                  </div>
            </div>
            <div class="Reflectie-Response"> {{ $parent.Vragen.vraag10 }} </div>
      </div>
           <div v-show="$parent.step === 12">
               Bericht is verstuurd
            </div>
</div>
</template>
