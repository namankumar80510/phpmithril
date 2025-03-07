<?php

use App\Libraries\Config;
use League\Plates\Engine;

function view(string $template, array $data = []): string
{
    return new Engine(__DIR__ . '/Views')->render($template, $data);
}

function config(string $key, $default = null)
{
    return new Config()->$key($default);
}