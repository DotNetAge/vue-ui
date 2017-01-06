<template>
  <div>
    <h1>选择器</h1>
    <hr>
    <h2>日期选择器 - &lt;uk-datepicker&gt;</h2>
    <hr>
    <h3>示例</h3>
    <div class="uk-form">
      <uk-datepicker></uk-datepicker>
    </div>
    <code-block>{{usages.basic}}</code-block>
    <h3>属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>Option</th>
        <th>Possible value</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>weekstart</code></td>
        <td>integer (0..6)</td>
        <td>1</td>
        <td>Start of the week</td>
      </tr>
      <tr>
        <td><code>i18n</code></td>
        <td>JSON object</td>
        <td>{ months:['January',...], weekdays:['Sun',..,'Sat'] }</td>
        <td>Language string definitions</td>
      </tr>
      <tr>
        <td><code>format</code></td>
        <td>any combination of DD, MM and YYYY</td>
        <td>'YYYY-MM-DD'</td>
        <td>Date format string</td>
      </tr>
      <tr>
        <td><code>offsettop</code></td>
        <td>integer</td>
        <td>5</td>
        <td>Offset to the input value</td>
      </tr>
      <tr>
        <td><code>minDate</code></td>
        <td>bool (false to ignore the option)<br>
          string (date as in <code>format</code>)<br>
          integer (offset in days from current date)
        </td>
        <td>false</td>
        <td>Min. date</td>
      </tr>
      <tr>
        <td><code>maxDate</code></td>
        <td>bool (false to ignore the option)<br>
          string (date as in <code>format</code>)<br>
          integer (offset in days from current date)
        </td>

        <td>false</td>
        <td>Max. date</td>
      </tr>
      <tr>
        <td><code>pos</code></td>
        <td>'auto', 'top', 'bottom'</td>
        <td>'auto'</td>
        <td>Position of the datepicker</td>
      </tr>
      </tbody>
    </table>


    <h2>时间选择器 - &lt;uk-timepicker&gt;</h2>
    <hr>
    <h3>示例</h3>
    <div class="uk-form">
      <uk-timepicker></uk-timepicker>
    </div>
    <code-block>{{usages.timepicker}}</code-block>
    <h3>属性</h3>
    <div class="uk-overflow-container">
      <table class="uk-table uk-table-striped uk-table-condensed">
        <thead>
        <tr>
          <th>Option</th>
          <th>Possible value</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><code>format</code></td>
          <td>'24h' or '12h'</td>
          <td>'24h'</td>
          <td>Defines the preferred time notation</td>
        </tr>
        <tr>
          <td><code>start</code></td>
          <td>Integer between 0 and 24</td>
          <td>0</td>
          <td>Start time</td>
        </tr>
        <tr>
          <td><code>end</code></td>
          <td>Integer between 0 and 24</td>
          <td>24</td>
          <td>End time</td>
        </tr>
        </tbody>
      </table>
    </div>


    <!--<h2>对象选择器 - &lt;uk-itempicker&gt;</h2>-->
    <!--<hr>-->
    <!--<p>-->
      <!--<uk-itempicker :items="[-->
      <!--{label:'item1',value:'item1'},-->
      <!--{label:'item2',value:'item2'},-->
      <!--{label:'item3',value:'item3'},-->
      <!--{label:'item4',value:'item4'},-->
      <!--{label:'item5',value:'item5'},-->
      <!--{label:'item6',value:'item6'},-->
      <!--{label:'item7',value:'item7'}-->
      <!--]">-->
      <!--</uk-itempicker>-->
    <!--</p>-->
    <!--<hr>-->
  </div>
</template>
<script>
  export default{
    data () {
      return {
        usages: {
          basic: `<uk-datepicker :weekstart="1"
  :i18n="{ months:['January',...], weekdays:['Sun',..,'Sat'] }"
  format="YYYY-MM-DD"
  :offsettop="5"
  :minDate="false"
  :maxDate="false"
  pos="auto|top|bottom"
></uk-datepicker>`,
          timepicker: `<uk-timepicker format="12h"
            :start="0"
            :end="24"
></uk-timepicker>`
        }
      }
    }
  }
</script>
