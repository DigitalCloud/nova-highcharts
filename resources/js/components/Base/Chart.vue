<template>
    <loading-card :loading="loading" class="px-6 py-4">
        <div class="flex mb-4">
            <h3 class="mr-3 text-base text-80 font-bold">{{card.name}}</h3>
            <select-control
                    v-if="ranges.length > 0"
                    @change="handleChange"
                    class="ml-auto min-w-24 h-6 text-xs no-appearance bg-40"
                    :options="ranges"
                    :selected="selectedRangeKey"
            />
        </div>
        <div :id="card.uriKey" class="pin rounded-b-lg ct-chart"
             style="top: 60%" v-bind:style="{ height: card.height }"/>
    </loading-card>
</template>

<script>
    import Highcharts from 'highcharts'

    export default {
        name: 'BaseChartMetric',
        props: {
            loading: Boolean,
            options: {},
            card: {
                name: '',
                height: "400px",
                uriKey: ""
            },
            ranges: {type: Array, default: () => []},
            selectedRangeKey: [String, Number]
        },
        watch: {
            selectedRangeKey: function (newRange, oldRange) {
                this.reload();
            },

            options: function (newData, oldData) {
                this.reload();
            },
        },

        mounted() {
            this.reload();
        },

        methods: {
            handleChange(event) {
                this.$emit('selected', event.target.value)
            },
            loadGradient() {
                if (this.options && this.options.others && this.options.others.gradient) {
                    alert(1);
                    Highcharts.setOptions({
                        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
                            return {
                                radialGradient: {
                                    cx: 0.5,
                                    cy: 0.3,
                                    r: 0.7
                                },
                                stops: [
                                    [0, color],
                                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                                ]
                            };
                        })
                    });
                }
            },
            reload() {
                if (this.options && this.options.chart) {
                    this.loadGradient();
                    new Highcharts.chart(this.options);
                }
            }
        },
    }
</script>
