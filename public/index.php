<?php

declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', '1');

use App\Libraries\ApiResponseStrategy;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER,
    $_GET,
    $_POST,
    $_COOKIE,
    $_FILES
);

$router = new League\Route\Router;
$router->setStrategy(new ApiResponseStrategy(new \Laminas\Diactoros\ResponseFactory()));

// map a route
$router->map('GET', '/api/v1/test', function (ServerRequestInterface $request): array {
    return [
        'message' => 'it works',
        'status' => 200,
        'method' => $request->getMethod(),
    ];
});

$response = $router->dispatch($request);

// send the response to the browser
(new Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);