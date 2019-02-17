<?php
/**
 * Created by PhpStorm.
 * User: yassir
 * Date: 17-Feb-19
 * Time: 11:48 PM
 */

namespace Digitalcloud\NovaHighcharts\Provider;

class HighChart
{
    public $title = [];
    public $subtitle = [];
    public $yAxis = [];
    public $xAxis = [];
    public $legend = [];
    public $plotOptions = [];
    public $series = [];
    public $chart = [];
    public $colors = [];
    public $credits = [];
    public $tooltip = [];

    public function title($title = [])
    {
        $this->title = $title;
        return $this;
    }

    public function subtitle($subtitle = [])
    {
        $this->subtitle = $subtitle;
        return $this;
    }

    public function yAxis($yAxis = [])
    {
        $this->yAxis = $yAxis;
        return $this;
    }

    public function xAxis($xAxis = [])
    {
        $this->xAxis = $xAxis;
        return $this;
    }

    public function legend($legend = [])
    {
        $this->legend = $legend;
        return $this;
    }

    public function tooltip($tooltip = [])
    {
        $this->tooltip = $tooltip;
        return $this;
    }

    public function plotOptions($plotOptions = [])
    {
        $this->plotOptions = $plotOptions;
        return $this;
    }

    public function series($series = [])
    {
        $this->series = $series;
        return $this;
    }

    public function chart($chart = [])
    {
        $this->chart = $chart;
        return $this;
    }

    public function colors($colors = [])
    {
        $this->colors = $colors;
        return $this;
    }

    public function credits($credits = [])
    {
        $this->credits = $credits;
        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "chart" => $this,
            "title" => $this->title,
            "subtitle" => $this->subtitle,
            "xAxis" => $this->xAxis,
            "yAxis" => $this->yAxis,
            "tooltip" => $this->tooltip,
            "credits" => $this->credits,
            "colors" => $this->colors,
            "legend" => $this->legend,
            "plotOptions" => $this->plotOptions,
            "series" => $this->series
        ];
    }

}