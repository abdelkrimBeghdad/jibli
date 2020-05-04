<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateorderitemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->integer('orders_id')->unsigned()->nullable();
            $table->foreign('orders_id')->references('id')->on('orders')
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
