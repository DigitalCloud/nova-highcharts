<template>
    <BaseChartMetric
            @selected="handleRangeSelected"
            :card="card"
            :options="options"
            :title="title"
            :ranges="card.ranges"
            :selected-range-key="selectedRangeKey"
            :loading="loading"
    />
</template>

<script>
    import BaseChartMetric from './Base/Chart';
    import {Minimum} from 'laravel-nova'

    export default {
        name: 'ChartMetric',
        mixins: [],
        components: {
            BaseChartMetric,
        },
        props: {
            card: {
                type: Object,
                required: true,
            },
            resourceName: {
                type: String,
                default: '',
            },
            resourceId: {
                type: [Number, String],
                default: '',
            },
            lens: {
                type: String,
                default: '',
            },
        },

        data: () => ({
            loading: true,
            options: {},
            title: '',
            selectedRangeKey: null,
        }),

        created() {
            if (this.hasRanges) {
                this.selectedRangeKey = this.card.ranges[0].value
            }
        },

        mounted() {
            this.fetch()
        },

        methods: {
            handleRangeSelected(key) {
                this.selectedRangeKey = key;
                this.fetch()
            },

            fetch() {
                this.loading = true;
                Minimum(Nova.request().get(this.metricEndpoint, this.metricPayload)).then(({data: {value}}) => {
                        this.options = value;
                        this.loading = false
                    }
                )
            },
        },

        computed: {
            hasRanges() {
                return this.card.ranges.length > 0
            },

            metricPayload() {
                const payload = {
                    params: {
                        timezone: this.userTimezone,
                        twelveHourTime: this.usesTwelveHourTime,
                    },
                };

                if (this.hasRanges) {
                    payload.params.range = this.selectedRangeKey
                }

                return payload
            },

            metricEndpoint() {
                const lens = this.lens !== '' ? `/lens/${this.lens}` : ''
                if (this.resourceName && this.resourceId) {
                    return `/nova-api/${this.resourceName}${lens}/${this.resourceId}/metrics/${
                        this.card.uriKey
                        }`
                } else if (this.resourceName) {
                    return `/nova-api/${this.resourceName}${lens}/metrics/${this.card.uriKey}`
                } else {
                    return `/nova-api/metrics/${this.card.uriKey}`
                }
            },
        },
    }
</script>
