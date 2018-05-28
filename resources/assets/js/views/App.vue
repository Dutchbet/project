<template>
<div class="body-reflectie">
  <div class="overlay">
  </div>
      <div class="container flop">
      <h2 class="text-center test">Reflectie</h2>
            <div class="body-reflectie" v-show="$parent.step === 1">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 2</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 2">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 3</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 3">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 4</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 4">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 5</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 5">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 6</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 6">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 7</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 7">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 8</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 8">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 9</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 9">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Vraag 10</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 10">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Overzicht</button>
            </div>
            <div class="body-reflectie" v-show="$parent.step === 11">
                  <button class="topbar-reflectie-button" @click.prevent="$parent.next() ">Verstuur</button>
            </div>
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
<!--    <button @click.prevent="$parent.prev()">Previous</button>
    <button @click.prevent="$parent.next()">Next</button> -->



<!--    <button @click.prevent="$parent.prev()">Previous</button>
    <button @click.prevent="$parent.next()">Next</button> -->
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
                                    </tbody>
                   </table>
               </div>
            </div>
        </div>
    </div>
    </div>
	<div v-show="$parent.step === 1">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 1
                  </div>
                   <div class="vraagbox-reflectie-text">

                        wat heb je gezien en gehoord?
                  </div>
            </div>
                  <div	v-if="$parent.vraag1.length > 0">	
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag1">
                        {{ vraag.memo}}
                  </div>          
            </div>
            <form @submit.prevent="$parent.saveNewTask">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test</button>
            </div>
            </form>


	</div>
    	<div v-show="$parent.step === 2">
            <div class="vraagbox-reflectie">
                  <div class="vraagbox-reflectie-titel">
                        Vraag 2
                  </div>
                  <div class="vraagbox-reflectie-text">
                        Wat heb jij daarbij gedacht en gevoeld ?
                  </div>
            </div>
                        <div	v-if="$parent.vraag2.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag2">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask2">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test2</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag3.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag3">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask3">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test3</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag4.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag4">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask4">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test4</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag5.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag5">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask5">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test5</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag6.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag6">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask6">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test6</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag7.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag7">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask7">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test7</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag8.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag8">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask8">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test8</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag9.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag9">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask9">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test9</button>
            </div>
            </form>
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
                        <div	v-if="$parent.vraag10.length > 0">
                   <div
                        :key="index"
                        :index="index"
                        class="Reflectie-Response"
                        v-for="(vraag, index) in $parent.vraag10">
                        {{ vraag.memo}}
                  </div>
            </div>
            <form @submit.prevent="$parent.saveNewTask10">
            <div class="Reflectie-Bottom">
                  <input v-model="$parent.TaskName" type="text" placeholder="Typ hier uw antwoord" class="Reflectie-input">
            <button type="submit" class="button-reflectie">Test10</button>
            </div>
            </form>
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
