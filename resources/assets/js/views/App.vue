<template>
<div class="body-reflectie">
  <div class="overlay">
  </div>
    <div class="fixed-header bg-light">
      <div class="container">
            <div class="body-reflectie" v-show="$parent.step === 1">
              <h2 class="text-center test">Reflectie</h2>
                <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 2</button>
                </div>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 2">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 1</button>
              </div>
              <h2 class="text-center test2">Reflectie</h2>
              <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 3</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 3">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 2</button>
            </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 4</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 4">
              <div class="previous">
                <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 3</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 5</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 5">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 4</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 6</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 6">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 5</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 7</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 7">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 6</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 8</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 8">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 7</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 9</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 9">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 8</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 10</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 10">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 9</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Overzicht</button>
            </div>
          </div>
            <div class="body-reflectie" v-show="$parent.step === 11">
              <div class="previous">
                  <button class="topbar-reflectie-button-left" @click.prevent="$parent.prev() ">Vraag 10</button>
              </div>
          <h2 class="text-center test2">Reflectie</h2>
          <div class="next">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Verstuur</button>
            </div>
          </div>
      </div>
    </div>

<!--    <button @click.prevent="$parent.prev()">Previous</button>
    <button @click.prevent="$parent.next()">Next</button> -->
    <!-- Bottom of the reflection page -->
      <div class="hulpmiddel">
       <div class="memo-bottom">
          Voeg een antwoord toe:
        </div>
        <div class="waarden-bottom">
          <div class="collapsible">
          <div class="title_scrollmenu">
              <div class="title_value"></div>
                <input type="button" value="Waarden" class="more-button">
          </div>

        <div class='growable'>
            <div class='measuringWrapper'>
            <div class="scrollmenu">
                    <table class="table">
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
                        <tr>
                            <td>Gemak</td>
                        </tr>
                        <tr>
                            <td>Mededogen</td>
                        </tr>
                        <tr>
                            <td>Vrede</td>
                        </tr>
                        <tr>
                            <td>Betrokkenheid</td>
                        </tr>
                        <tr>
                            <td>Betrouwbaarheid</td>
                        </tr>
                        <tr>
                            <td>Eerlijkheid</td>
                        </tr>
                        <tr>
                            <td>Solidariteit</td>
                        </tr>
                        <tr>
                            <td>Humor</td>
                        </tr>
                        <tr>
                            <td>Dankbaarheid</td>
                        </tr>
                        <tr>
                            <td>Collegialiteit</td>
                        </tr>
                        <tr>
                            <td>Verantwoordelijkheid</td>
                        </tr>
                        <tr>
                            <td>Liefde</td>
                        </tr>
                        <tr>
                            <td>Gelijk(waardig)heid</td>
                        </tr>
                        <tr>
                            <td>Tolerantie</td>
                        </tr>
                        <tr>
                            <td>Zelfstandigheid</td>
                        </tr>
                        <tr>
                            <td>Deskundigheid</td>
                        </tr>
                        <tr>
                            <td>Vrijheid</td>
                        </tr>
                        <tr>
                            <td>Dienstbaarheid</td>
                        </tr>
                        <tr>
                            <td>Zorgzaamheid</td>
                        </tr>
                        <tr>
                            <td>Gehoorzaamheid</td>
                        </tr>
                        <tr>
                            <td>Eigenheid</td>
                        </tr>
                        <tr>
                            <td>Gerechtigheid</td>
                        </tr>
                        <tr>
                            <td>Zinvolheid</td>
                        </tr>
                        <tr>
                            <td>Duidelijkheid</td>
                        </tr>
                        <tr>
                            <td>Veiligheid</td>
                        </tr>
                        <tr>
                            <td>Vetrouwen</td>
                        </tr>
                        <tr>
                            <td>Duurzaamheid</td>
                        </tr>
                      </tbody>
                  </table>
               </div>
          </div>
          </div>

        </div>
        </div>
      </div>

        <!-- End of the bottom reflection page -->
	<div v-show="$parent.step === 1">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 1
                  </div>
                   <div class="vraagbox-reflectie-text">Wat heb je gezien en gehoord?</div>
            </div>
                  <div	v-if="$parent.vraag1.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag1">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject1(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask1">
            <div class="Reflectie-Bottom">
              <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
              </div>
            </div>
            </form>


	</div>
    	<div v-show="$parent.step === 2">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 2
                  </div>
                  <div class="vraagbox-reflectie-text">Wat heb je daarbij gedacht en gevoeld?</div>
            </div>
                        <div	v-if="$parent.vraag2.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag2">
                        {{ vraag.memo}}
                        <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject2(index)"><img class="bin" src="/images/delete-color.svg"></a>
                        </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask2">
            <div class="Reflectie-Bottom">
                <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
                </div>
            </div>
            </form>
      </div>
    	<div v-show="$parent.step === 3">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 3
                  </div>
                  <div class="vraagbox-reflectie-text">Wat raakt je in de situatie, welke waarde is voor jou in het geding?</div>
            </div>
                        <div	v-if="$parent.vraag3.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag3">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject3(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask3">
            <div class="Reflectie-Bottom">
                <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
                </div>
            </div>
            </form>
	</div>
    	<div v-show="$parent.step === 4">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 4
                  </div>
                  <div class="vraagbox-reflectie-text">Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?</div>
                  </div>
                        <div	v-if="$parent.vraag4.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag4">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject4(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask4">
            <div class="Reflectie-Bottom">
              <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
              </div>
            </div>
            </form>
      </div>
      <div v-show="$parent.step === 5">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 5
                  </div>
                  <div class="vraagbox-reflectie-text">Wie speelt welke rol en klopt dat volgens jou?</div>
            </div>
                        <div	v-if="$parent.vraag5.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag5">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject5(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask5">
            <div class="Reflectie-Bottom">
                <div class="antwoordenblok">
                  <input v-model="$parent.TaskName"  type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
                </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 6">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 6
                  </div>
                  <div class="vraagbox-reflectie-text">Wie heeft welk belang en welke tegenstellingen zijn daarin?</div>
            </div>
                        <div	v-if="$parent.vraag6.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag6">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject6(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask6">
            <div class="Reflectie-Bottom">
                <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
                </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 7">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 7
                  </div>
                  <div class="vraagbox-reflectie-text">Formuleer je gewetensvraag, begin met: moet...? Of: mag...?</div>
            </div>
                        <div	v-if="$parent.vraag7.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag7">
                        {{ vraag.memo}}
                          <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject7(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask7">
            <div class="Reflectie-Bottom">
              <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
              </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 8">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 8
                  </div>
                  <div class="vraagbox-reflectie-text">Zijn er nog meer gewetensvragen te formuleren?</div>
            </div>
                        <div	v-if="$parent.vraag8.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag8">
                        {{ vraag.memo}}
                                                                         <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject8(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask8">
            <div class="Reflectie-Bottom">
                <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
                </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 9">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 9
                  </div>
                  <div class="vraagbox-reflectie-text">Welke vragen zijn nog niet beantwoord?</div>
            </div>
                        <div	v-if="$parent.vraag9.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag9">
                        {{ vraag.memo}}
                                                                         <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject9(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask9">
            <div class="Reflectie-Bottom">
              <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
              </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 10">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 10
                  </div>
                  <div class="vraagbox-reflectie-text">Welke stappen ga je in welke volgorde zetten?</div>
            </div>
                        <div	v-if="$parent.vraag10.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag10">
                        {{ vraag.memo}}
                                                                         <div class="remove">
                            <a href="#" v-on:click.prevent="$parent.deleteObject10(index)"><img class="bin" src="/images/delete-color.svg"></a>
                          </div>
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask10">
            <div class="Reflectie-Bottom">
              <div class="antwoordenblok">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
                  <button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
              </div>
            </div>
            </form>
	</div>
      <div v-show="$parent.step === 11">
            <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 1
                  </div>
                  <div class="vraagbox-reflectie-text">Wat heb je gezien en gehoord?</div>
            </div>
                               <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag1">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 2
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wat heb je daarbij gedacht en gevoeld?
                  </div>
            </div>
                                          <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag2">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 3
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wat raakt je in de situatie, welke waarde is voor jou in het geding ?
                  </div>
            </div>
                                                      <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag3">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 4
                  </div>
            <div class="vraagbox-reflectie-text">
                  Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?
            </div>
            </div>
                                                            <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag4">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 5
                  </div>
                  <div class="vraagbox-reflectie-text">
                  Wie speelt welke rol en klopt dat volgens jou?
                  </div>
            </div>
                                                                        <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag5">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                  Vraag 6
                  </div>
            <div class="vraagbox-reflectie-text">
                  Wie heeft welk belang en wlke tegenstellingen zijn daarin?
            </div>
            </div>
                                                                        <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag6">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 7
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Formuleer je gewetensvraag, begin met: moet...? Of: mag...?
                  </div>
            </div>
                                                                                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag7">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 8
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Zijn er nog meer gewetensvragen te formuleren?
                  </div>
            </div>
                                                                               <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag8">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 9
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Welke vragen zijn nog niet beantwoord?
                  </div>
            </div>
                                                                               <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag9">
                        {{ vraag.memo}}
                  </div>
                  </div>
                  <div class="clearfix">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 10
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Welke stappen ga je in welke volgorde zetten?
                  </div>
            </div>
                                                                               <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag10">
                        {{ vraag.memo}}
                  </div>
                  </div>
      </div>
           <div v-show="$parent.step === 12">

                   <button @click="$parent.savePdf">save pdf</button>

               <postroute>hello</postroute>
            </div>
</div>
</template>
