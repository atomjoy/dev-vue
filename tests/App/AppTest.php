<?php

namespace Tests\App;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * php artisan test --stop-on-failure --testsuite=App
 */
class AppTest extends TestCase
{
	/**
	 * A basic test example.
	 */
	public function test_the_application_returns_a_successful_response(): void
	{
		$response = $this->get('/');

		$response->assertStatus(200);
	}
}
