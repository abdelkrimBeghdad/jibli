<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('code');
            $table->string('name');
            $table->string('name_ar');
            $table->string('description',200);
            $table->string('category_name');
            $table->string('nameCompany');
            $table->string('quantity')->nullable();
            $table->string('brand')->nullable();
            $table->integer('price');
            $table->integer('featured')->nullable();
            $table->string('image',200)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
