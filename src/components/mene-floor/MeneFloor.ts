import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Place } from '../../interfaces/place.interface';

@customElement('mene-floor')
export class MeneFloor extends LitElement {
  static styles = css`
    :host > div {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({type: String})
  id: string = '';

  @property({type: Array})
  places: Place[][] = [];

  render() {
    return html `
      <div>
        ${this.places.map(
          (row) =>
          html `<mene-row .places=${row}></mene-row>`
        )}
      </div>
    `;
  }

}
