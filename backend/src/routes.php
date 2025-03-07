<?php

use Psr\Http\Message\ServerRequestInterface;

$router->map('GET', '/api/v1/test', function (ServerRequestInterface $request): array {
    return [
        'message' => 'it works',
        'status' => 200,
        'method' => $request->getMethod(),
    ];
});