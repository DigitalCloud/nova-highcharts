<?php

namespace Digitalcloud\NovaHighcharts;

use Digitalcloud\NovaHighcharts\Console\ChartCommand;
use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class MetricsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-highcharts', __DIR__.'/../dist/js/card.js');
        });

        if ($this->app->runningInConsole()) {
            $this->commands([ChartCommand::class]);
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
