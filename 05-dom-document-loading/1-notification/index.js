export default class NotificationMessage {
  constructor(message = "", props = {}) {
    const { duration = 0, type = "" } = props;
    this.header = "Notification";
    this.type = type;
    this.duration = duration ?? 1000;
    this.message = message;
    this.element = null;
    this.timerId = null;
    this.show();
  }

  show() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="notification ${this.type}" style="--value:20s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.header}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
  </div>`;
    this.element = wrapper.firstElementChild;
    const body = document.querySelector("body");
    if (this.element) {
      body.append(this.element);
    }
  }

  destroy() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }

  remove() {
    this.timerId = setTimeout(() => this.destroy(), this.duration);
  }
}
