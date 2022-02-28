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
        html `<mene-floor .id=${item.id} .name=${item.name} .places=${item.places}></mene-floor>`
      )}
    `;
  }

}
