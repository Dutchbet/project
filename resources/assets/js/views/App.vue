<template>

    <div>
        <h1>Reflectie</h1>

	<div v-show="$parent.step === 1">

      <h1>Wat heb je gezien en gehoord?</h1>


	</div>
    	<div v-show="$parent.step === 2">

      <h1>wat heb jij daarbij gedacht en gevoeld ?</h1>
	</div>
    	<div v-show="$parent.step === 3">

      <h1>Wat raakt je in de situatie, welke waarde is voor jou in het geding ?</h1>
	</div>
    	<div v-show="$parent.step === 4">

      <h1>Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?</h1>
	</div>
        	<div v-show="$parent.step === 5">

      <h1>Wie speelt welke rol en klopt dat volgens jou?</h1>
	</div>
        	<div v-show="$parent.step === 6">

      <h1>Wie heeft welk belang en wlke tegenstellingen zijn daarin?</h1>
	</div>
        	<div v-show="$parent.step === 7">

      <h1>Formuleer je gewetensvraag, Begin met: moet..? Of: mag...?</h1>
	</div>
        	<div v-show="$parent.step === 8">

      <h1>Zijn er nog meer gewetensvragen te formuleren?</h1>
	</div>
            	<div v-show="$parent.step === 9">

      <h1>Welke vragen zijn nog niet beantwoord?</h1>
	</div>
            	<div v-show="$parent.step === 10">

      <h1>Zijn er nog meer gewetensvragen te formuleren?</h1>
	</div>
    <button @click.prevent="$parent.prev()">Previous</button>
    <button @click.prevent="$parent.next()">Next</button>


    </div>
    
</template>
