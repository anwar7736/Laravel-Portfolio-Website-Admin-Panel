<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
use DB;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
        	[

  			"name" => "Md. Anwar Hossain",	
  			"username" => "hossain7736",	
  			"email" => "anwar7736@gmail.com",	
  			"password" => Hash::make('admin123'),	
  			"created_at" => now(),			
  			"updated_at" => now()			
      		]

        ]);
    }
}
