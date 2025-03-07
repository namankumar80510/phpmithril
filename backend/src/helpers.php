<?php

use App\Libraries\Config;
use League\Plates\Engine;

function view(string $template, array $data = []): string
{
    return new Engine(__DIR__ . '/Views')->render($template, $data);
}

function config(string $key, $default = null)
{
    return new Config()->get($key, $default);
}

function vite_assets()
{
    $config = config('assets');
    if (ENV == 'prod') {
        echo <<<HTML
        <link rel="stylesheet" href="{$config['prod']['css']}">
        <script type="module" crossorigin src="{$config['prod']['js']}"></script>
        HTML;
    } else {
        echo <<<HTML
        <script type="module" src="{$config['dev']}"></script>
        HTML;
    }
}