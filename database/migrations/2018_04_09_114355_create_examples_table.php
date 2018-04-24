<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examples', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->text('vraag1antwoord');
            $table->text('vraag2antwoord');
            $table->text('vraag3antwoord');
            $table->text('vraag4antwoord');
            $table->text('vraag5antwoord');
            $table->text('vraag6antwoord');
            $table->text('vraag7antwoord');
            $table->text('vraag8antwoord');
            $table->text('vraag9antwoord');
            $table->text('vraag10antwoord');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examples');
    }
}
