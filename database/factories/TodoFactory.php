<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->realText(10),
            'description' => fake()->realText(30),
            'status' => fake()->randomElement(['todo', 'in_progress', 'done']),
            'due_date' => fake()->date(),
            'priority' => fake()->randomElement(['低', '中', '高']),
        ];
    }
}
