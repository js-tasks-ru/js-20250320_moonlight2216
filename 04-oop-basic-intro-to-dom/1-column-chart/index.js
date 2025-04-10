export default class ColumnChart {
  chartHeight = 50;
  constructor(props = {}) {
    const {
      data = [],
      label = "",
      value = 0,
      link = "",
      formatHeading = (value) => value,
    } = props;
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading;
    this.element = this.createElement();
  }

  createLinkTemplate() {
    if (this.link) {
      return `<a class="column-chart__link" href = ${this.link}>View all</a>`;
    } else {
      return "";
    }
  }

  getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map((item) => {
      return {
        percent: ((item / maxValue) * 100).toFixed(0) + "%",
        value: String(Math.floor(item * scale)),
      };
    });
  }

  createChartTemplate() {
    return this.getColumnProps(this.data)
      .map(
        ({ value, percent }) =>
          `<div style="--value: ${value}" data-tooltip=${percent}></div>`
      )
      .join("");
  }

  createTemplate() {
    return `
      <div class="dashboard__chart_sales">
    <div class="column-chart" style="--chart-height: 50">
      <div class="column-chart__title">
        Total ${this.label}
        ${this.createLinkTemplate()}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(
          this.value
        )} </div>
        <div data-element="body" class="column-chart__chart">
        ${this.createChartTemplate()}


        </div>
      </div>
    </div>
  </div>
    `;
  }
  createElement() {
    const element = document.createElement("div");
    element.innerHTML = this.createTemplate();
    element.classList.add("column-chart_loading");

    return element;
  }

  update(newData) {
    this.data = newData;
    this.element.innerHTML = this.createTemplate();
  }

  destroy() {
    this.remove();
  }
  remove() {
    this.element.remove();
  }
}
