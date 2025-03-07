<?php

use League\Plates\Engine;

function view(string $template, array $data = []): string {
    return (new Engine(__DIR__ . '/Views')->render($template, $data));
}