<?php

use App\Controllers\TestController;

$router->group('/api/v1', function ($router) {
    $router->get('/test', [TestController::class, 'index'])->setName('test');
});
