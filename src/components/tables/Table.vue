<script setup lang="ts">
import type { ITable, TdThComponent } from '@/shared/lib/table';

defineProps<{ table: ITable }>();

const hasHTMLElement = (
  el: TdThComponent | HTMLElement | string | number | null | undefined
) => {
  if (!el) return false;
  return !(typeof el === 'string' || typeof el === 'number' || el instanceof HTMLElement);
};
</script>

<template>
  <table
    :class="['table', table.cssClass]"
    table=""
  >
    <thead :class="['table__head', table.header.cssClass]">
      <tr :class="['table__head-tr', table.header.row.cssClass]">
        <th
          :class="['table__head-th', cell.cssClass]"
          v-for="cell in table.header.row.cells"
        >
          <component
            v-if="hasHTMLElement(cell.component)"
            :is="cell.component"
          />
          <template v-else>{{ cell.component }}</template>
        </th>
      </tr>
    </thead>
    <tbody :class="['table__body', table.body.cssClass]">
      <tr
        :class="['table__body-tr', row.cssClass]"
        v-for="row in table.body.rows"
      >
        <td
          :class="['table__body-td', td.cssClass]"
          v-for="td in row.cells"
        >
          <component
            v-if="hasHTMLElement(td.component)"
            :is="td.component"
          />
          <template v-else>{{ td.component }}</template>
        </td>
      </tr>
    </tbody>
  </table>
  <!--  <table>-->
  <!--    <thead>-->
  <!--      <tr>-->
  <!--        <th class="number-column">№</th>-->
  <!--        <th class="team-column">Клуб</th>-->
  <!--        <th>И</th>-->
  <!--        <th>В</th>-->

  <!--        <th class="hide-only-mobile overtime-win-column">ВО/ВБ</th>-->
  <!--        <th>П</th>-->
  <!--        <th class="hide-only-mobile overtime-lose-column">ПО/ПБ</th>-->
  <!--        <th class="hide-only-mobile">ШЗ</th>-->
  <!--        <th class="hide-only-mobile">ШП</th>-->
  <!--        <th>РШ</th>-->
  <!--        <th>О</th>-->
  <!--      </tr>-->
  <!--    </thead>-->
  <!--    <tbody>-->
  <!--      <tr class="">-->
  <!--        <td>1</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/88"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/40.png?v=1703856162" />-->
  <!--            <span>ЦСКА 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>18</td>-->
  <!--        <td class="hide-only-mobile">15</td>-->
  <!--        <td class="hide-tablet">16</td>-->

  <!--        <td class="hide-only-mobile">1</td>-->
  <!--        <td class="hide-tablet">2</td>-->
  <!--        <td class="hide-only-mobile">2</td>-->
  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-only-mobile">111</td>-->
  <!--        <td class="hide-only-mobile">34</td>-->
  <!--        <td>77</td>-->
  <!--        <td>32</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>2</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/118"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/24.png?v=1703805685" />-->
  <!--            <span>Динамо 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>20</td>-->
  <!--        <td class="hide-only-mobile">13</td>-->
  <!--        <td class="hide-tablet">16</td>-->

  <!--        <td class="hide-only-mobile">3</td>-->
  <!--        <td class="hide-tablet">4</td>-->
  <!--        <td class="hide-only-mobile">4</td>-->
  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-only-mobile">81</td>-->
  <!--        <td class="hide-only-mobile">49</td>-->
  <!--        <td>32</td>-->
  <!--        <td>32</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>3</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/130"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/64.png?v=1704115447" />-->
  <!--            <span>Локомотив - 2004 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>19</td>-->
  <!--        <td class="hide-only-mobile">13</td>-->
  <!--        <td class="hide-tablet">13</td>-->

  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-tablet">6</td>-->
  <!--        <td class="hide-only-mobile">5</td>-->
  <!--        <td class="hide-only-mobile">1</td>-->
  <!--        <td class="hide-only-mobile">77</td>-->
  <!--        <td class="hide-only-mobile">43</td>-->
  <!--        <td>34</td>-->
  <!--        <td>27</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>4</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/97"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/60.png?v=1704114624" />-->
  <!--            <span>Спартак 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>19</td>-->
  <!--        <td class="hide-only-mobile">11</td>-->
  <!--        <td class="hide-tablet">13</td>-->

  <!--        <td class="hide-only-mobile">2</td>-->
  <!--        <td class="hide-tablet">6</td>-->
  <!--        <td class="hide-only-mobile">5</td>-->
  <!--        <td class="hide-only-mobile">1</td>-->
  <!--        <td class="hide-only-mobile">80</td>-->
  <!--        <td class="hide-only-mobile">65</td>-->
  <!--        <td>15</td>-->
  <!--        <td>27</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>5</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/114"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/63.png?v=1704115429" />-->
  <!--            <span>Локомотив 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>20</td>-->
  <!--        <td class="hide-only-mobile">9</td>-->
  <!--        <td class="hide-tablet">12</td>-->

  <!--        <td class="hide-only-mobile">3</td>-->
  <!--        <td class="hide-tablet">8</td>-->
  <!--        <td class="hide-only-mobile">8</td>-->
  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-only-mobile">73</td>-->
  <!--        <td class="hide-only-mobile">63</td>-->
  <!--        <td>10</td>-->
  <!--        <td>24</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>6</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/164"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img-->
  <!--              src="https://s3.fhmoscow.com/club/logo/66337.png?v=1756887902"-->
  <!--            />-->
  <!--            <span>Крылья Советов 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>21</td>-->
  <!--        <td class="hide-only-mobile">6</td>-->
  <!--        <td class="hide-tablet">7</td>-->

  <!--        <td class="hide-only-mobile">1</td>-->
  <!--        <td class="hide-tablet">14</td>-->
  <!--        <td class="hide-only-mobile">7</td>-->
  <!--        <td class="hide-only-mobile">7</td>-->
  <!--        <td class="hide-only-mobile">67</td>-->
  <!--        <td class="hide-only-mobile">67</td>-->
  <!--        <td>0</td>-->
  <!--        <td>21</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>7</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/196"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img-->
  <!--              src="https://s3.fhmoscow.com/club/logo/46581.png?v=1733391440"-->
  <!--            />-->
  <!--            <span>Северная звезда 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>20</td>-->
  <!--        <td class="hide-only-mobile">6</td>-->
  <!--        <td class="hide-tablet">9</td>-->

  <!--        <td class="hide-only-mobile">3</td>-->
  <!--        <td class="hide-tablet">11</td>-->
  <!--        <td class="hide-only-mobile">9</td>-->
  <!--        <td class="hide-only-mobile">2</td>-->
  <!--        <td class="hide-only-mobile">57</td>-->
  <!--        <td class="hide-only-mobile">83</td>-->
  <!--        <td>-26</td>-->
  <!--        <td>20</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>8</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/106"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img src="https://s3.fhmoscow.com/club/logo/11.png?v=1703801137" />-->
  <!--            <span>Академия Михайлова (Новомосковск) 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>20</td>-->
  <!--        <td class="hide-only-mobile">4</td>-->
  <!--        <td class="hide-tablet">8</td>-->

  <!--        <td class="hide-only-mobile">4</td>-->
  <!--        <td class="hide-tablet">12</td>-->
  <!--        <td class="hide-only-mobile">10</td>-->
  <!--        <td class="hide-only-mobile">2</td>-->
  <!--        <td class="hide-only-mobile">56</td>-->
  <!--        <td class="hide-only-mobile">65</td>-->
  <!--        <td>-9</td>-->
  <!--        <td>18</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>9</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/533"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img-->
  <!--              src="https://s3.fhmoscow.com/club/logo/66961.png?v=1758096154"-->
  <!--            />-->
  <!--            <span>Академия Атлант 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>20</td>-->
  <!--        <td class="hide-only-mobile">4</td>-->
  <!--        <td class="hide-tablet">4</td>-->

  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-tablet">16</td>-->
  <!--        <td class="hide-only-mobile">14</td>-->
  <!--        <td class="hide-only-mobile">2</td>-->
  <!--        <td class="hide-only-mobile">39</td>-->
  <!--        <td class="hide-only-mobile">84</td>-->
  <!--        <td>-45</td>-->
  <!--        <td>10</td>-->
  <!--      </tr>-->
  <!--      <tr class="">-->
  <!--        <td>10</td>-->
  <!--        <td>-->
  <!--          <a-->
  <!--            href="/team/386"-->
  <!--            class="team-cell"-->
  <!--          >-->
  <!--            <img-->
  <!--              src="https://s3.fhmoscow.com/club/logo/31112.png?v=1725431504"-->
  <!--            />-->
  <!--            <span>Химик 2009</span>-->
  <!--          </a>-->
  <!--        </td>-->
  <!--        <td>21</td>-->
  <!--        <td class="hide-only-mobile">0</td>-->
  <!--        <td class="hide-tablet">1</td>-->

  <!--        <td class="hide-only-mobile">1</td>-->
  <!--        <td class="hide-tablet">20</td>-->
  <!--        <td class="hide-only-mobile">17</td>-->
  <!--        <td class="hide-only-mobile">3</td>-->
  <!--        <td class="hide-only-mobile">36</td>-->
  <!--        <td class="hide-only-mobile">124</td>-->
  <!--        <td>-88</td>-->
  <!--        <td>5</td>-->
  <!--      </tr>-->
  <!--    </tbody>-->
  <!--  </table>-->
</template>

<style scoped lang="scss">
.table {
  border-collapse: collapse; /* Схлопывает границы в одну */
  border: none; /* Убирает границу у таблицы */

  td,
  tr,
  th {
    border: none; /* Убирает границы у ячеек и строк */
  }

  th,
  td {
    padding: 6px;
    text-align: left;
  }

  tr {
    border-radius: 4px;
    background-color: #d3cfcf;
    border-color: #d3cfcf;
  }

  &__head {
    &-tr {
    }
    &-th {
    }
  }
  &__body {
    &-tr {
    }
    &-td {
    }
  }
}
</style>
