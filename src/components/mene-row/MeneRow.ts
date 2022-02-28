import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Place } from '../../interfaces/place.interface';

@customElement('mene-row')
export class MeneRow extends LitElement {
  static styles = css`
    :host {
      display: flex
    }
  `;

  @property({type: Array})
  places: Place[] = [];

  render() {
    return html `
      ${this.places.map(place =>
        html `<mene-place .id=${place.id} .status=${place.status}> </mene-place>`
      )}
    `;
  }

}
