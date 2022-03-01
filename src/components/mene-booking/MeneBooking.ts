import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Floor } from '../../interfaces/floor.interface';

@customElement('mene-booking')
export class MeneBooking extends LitElement {

  @property({type: Array})
  floors: Floor[] = [];

  render() {
    return html `

      ${this.floors.map(
        (item) =>
        html `
        <div>
          <h3>${item.name}</h3>
        </div>
        <div>
          <mene-floor .id=${item.id} .places=${item.places}></mene-floor>
        </div>
        `
      )}
    `;
  }

}
