<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Bookmark::factory(10)->create();
    }
}
