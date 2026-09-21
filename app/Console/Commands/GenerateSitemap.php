<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';

    protected $description = 'Generate the website sitemap';

    public function handle(): int
    {
        $urls = [
            [
                'loc' => url('/'),
                'changefreq' => 'weekly',
                'priority' => '1.0',
            ],
            [
                'loc' => url('/pricing'),
                'changefreq' => 'weekly',
                'priority' => '0.8',
            ],
            [
                'loc' => url('/embed'),
                'changefreq' => 'weekly',
                'priority' => '0.9',
            ],
            [
                'loc' => url('/docs'),
                'changefreq' => 'weekly',
                'priority' => '0.8',
            ],
            [
                'loc' => url('/contact'),
                'changefreq' => 'monthly',
                'priority' => '0.5',
            ],
            [
                'loc' => url('/privacy'),
                'changefreq' => 'yearly',
                'priority' => '0.3',
            ],
            [
                'loc' => url('/terms'),
                'changefreq' => 'yearly',
                'priority' => '0.3',
            ],
        ];

        $xml = view('sitemap', compact('urls'))->render();

        File::put(
            public_path('sitemap.xml'),
            $xml
        );

        $this->info('Sitemap generated successfully.');

        return self::SUCCESS;
    }
}