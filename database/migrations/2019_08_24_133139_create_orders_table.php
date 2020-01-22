<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('OrderGenerale_id')->unsigned()->nullable();
            $table->foreign('OrderGenerale_id')->references('id')->on('OrderGenerale')
                  ->onUpdate('cascade')->onDelete('set null');

            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')
                  ->onUpdate('cascade')->onDelete('set null');
           
            $table->integer('product_id')->unsigned()->nullable();
            $table->foreign('product_id')->references('id')
                            ->on('products')->onUpdate('cascade')->onDelete('set null');

            $table->string('name');

            $table->integer('price');

            $table->integer('quantity')->unsigned();

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
        Schema::dropIfExists('orders');
    }
}
