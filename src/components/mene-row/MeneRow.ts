import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Place } from '../../interfaces/place.interface';

@customElement('mene-row')
export class MeneRow extends LitElement {
  static styles = css`
    :host {
      display: flex
    }

    :host > .void {
      opacity: 0;
      pointer-events: none;
      width: 20px;
    }
  `;

  @property({type: Array})
  places: Place[] = [];

  render() {
    return html `
      ${this.places.map(place => place.status ?
               html `<mene-place .id=${place.id} .status=${place.status}> </mene-place>` :
               html `<span class="void"></span>`
      )}
    `;
  }

}
