import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Place } from '../../interfaces/place.interface';

  /**
   * Mene-Booking
   *
   * The responsabilities of the component have:
   *
   * 1. Render a mene-rows
   * 2. Display the rows in column
   */
@customElement('mene-booking')
export class MeneBooking extends LitElement {
  static styles = css`
    :host > div {
      display: flex;
      flex-direction: column;
    }
  `;

  /**
   * A Places of Places
   *
   * @type {Array<Place>}
   */
    @property({type: Array})
    places: Place[][] = [];


    /**
     * Method to render the html content`.
     * @return {TemplateResult} The component .
     */
    render(): TemplateResult {
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
