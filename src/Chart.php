<?php
/**
 * Created by PhpStorm.
 * User: yassir
 * Date: 17-Feb-19
 * Time: 8:11 PM
 */

namespace Digitalcloud\NovaHighcharts;

use Digitalcloud\NovaHighcharts\Provider\HighChart;
use Laravel\Nova\Metrics\Metric;

abstract class Chart extends Metric
{
    private $chart;
    public $component = "nova-highcharts";
    public $height = "450px";
    public $width = "full";
    public $ranges = [];
    public $type;

    public function __construct(?string $component = null)
    {
        parent::__construct($component);

        $this->chart = new HighChart();
        $this->setType($this->type);
    }

    /**
     * @param $height
     * @return $this
     */
    public function setHeight($height)
    {
        $this->height = strpos($height, "px") === false ? $height . "px;" : $height;

        return $this;
    }

    /**
     * chart type ex(column, line, pie) chart
     * @param string $type
     * @return $this
     */
    public function setType(string $type)
    {
        $this->chart->chart([
            "type" => $type,
            "renderTo" => 'container',//$this->uriKey()
        ]);

        return $this;
    }

    /**
     * @param string|array $title
     * @return $this
     */
    public function setTitle($title)
    {
        if (is_array($title)) {
            $this->chart->title($title);
        } else {
            $this->chart->title([
                "text" => $title
            ]);
        }

        return $this;
    }

    /**
     * @param string|array $title
     * @return $this
     */
    public function setSubTitle(array $title)
    {
        if (is_array($title)) {
            $this->chart->subtitle($title);
        } else {
            $this->chart->subtitle([
                "text" => $title
            ]);
        }

        return $this;
    }

    /**
     * @param array $xAxis
     * @return $this
     */
    public function setXAxis(array $xAxis)
    {
        $this->chart->xaxis($xAxis);

        return $this;
    }

    /**
     * @param array $dataSeries
     * @return HighChart
     */
    public function result(array $dataSeries)
    {
        $this->chart->series($dataSeries);

        return $this->chart;
    }

    /**
     * @param array $yAxis
     * @return $this
     */
    public function setYAxis($yAxis)
    {
        $this->chart->yaxis($yAxis);

        return $this;
    }

    /**
     * @param array $legend
     * @return $this
     */
    public function setLegend($legend)
    {
        $this->chart->legend($legend);

        return $this;
    }

    /**
     * @param array $tooltip
     * @return $this
     */
    public function setTooltip($tooltip)
    {
        $this->chart->tooltip($tooltip);

        return $this;
    }

    /**
     * @param array $colors
     * @return $this
     */
    public function setColors(array $colors)
    {
        $this->chart->colors($colors);

        return $this;
    }

    /**
     * @param array $credit
     * @return $this
     */
    public function setCredit(array $credit)
    {
        $this->chart->credits($credit);

        return $this;
    }

    /**
     * @param array $plotOptions
     * @return $this
     */
    public function setPlotOptions(array $plotOptions)
    {
        $this->chart->plotOptions($plotOptions);

        return $this;
    }

    /**
     * Get the ranges available for the metric.
     *
     * @return array
     */
    public function ranges()
    {
        return $this->ranges;
    }

    /**
     * Prepare the metric for JSON serialization.
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return array_merge(parent::jsonSerialize(), [
            'ranges' => collect($this->ranges() ?? [])->map(function ($range, $key) {
                return ['label' => $range, 'value' => $key];
            })->values()->all(),
            "height" => $this->height,
        ]);
    }
}
