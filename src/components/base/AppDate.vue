<template>
    <span :title="convertToDate()">
        {{timeDiffFromNow()}}
    </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
    props: {
        timestamp: {
            required: true,
            type: Number
        }
    },
    methods: {
        timeDiffFromNow () {
            return dayjs.unix(this.timestamp).fromNow()
        },
        convertToDate () {
            return dayjs.unix(this.timestamp).format('llll') // localized date format, see dayjs doc
        }
    }
}
</script>

<style scoped>

</style>>