<template>
  <el-card>
    <div ref="chart"></div>
  </el-card>
</template>
<script>
  import echarts from 'echarts'

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    }
  }

  let data = [];
  let now = +new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  let options = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [{
      name: '模拟数据',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data
    }]
  }

  export default {
    data() {
      return {chart: null, intervalId: null}
    },
    created() {
      this.$root.contentTitle = 'Bar Charts Example'
      this.$root.contentBreadcrumbs = [
        {
          text: 'Index',
          path: '/'
        },
        {
          text: 'Bar Charts Example'
        }
      ]
    },
    mounted() {
      let that = this

        let chart = echarts.init(that.$refs.chart, null, {
          height: 600
        })
        chart.setOption(options)
        that.chart = chart


      this.intervalId = setInterval(function () {
        for (let i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        that.chart.setOption({series: [{data: data}]});
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.intervalId)
    }
  }
</script>
