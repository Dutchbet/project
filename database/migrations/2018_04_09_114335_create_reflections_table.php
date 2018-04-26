<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReflectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reflections', function (Blueprint $table) {
            $table->increments('Reflection_id');
            $table->timestamps();
			$table->string('Title');
            $table->text('reflectieantwoord1');
            $table->text('reflectieantwoord2');
            $table->text('reflectieantwoord3');
            $table->text('reflectieantwoord4');
            $table->text('reflectieantwoord5');
            $table->text('reflectieantwoord6');
            $table->text('reflectieantwoord7');
            $table->text('reflectieantwoord8');
            $table->text('reflectieantwoord9');
            $table->text('reflectieantwoord10');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reflections');
    }
}
