import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Place } from '../../interfaces/place.interface';



  /**
   * Mene-row
   *
   * The responsabilities of the component have:
   *
   * 1. Render a list of MenePlaces
   * 2. Display the places on row
   * 2. Handle the visibility of the places
   * 3. Listen the status changed from the menePlaces and update the places (this is necesary because the props from arrays are inmutables)
   */
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

  /**
   * A Places list
   *
   * @type {Array<Place>}
   */
  @property({type: Array})
  places: Place[] = [];

  /**
   * Method to render the html content`.
   * @return {TemplateResult} The cumulative level of awesomeness.
   */
  render(): TemplateResult {
    const places = this.#renderPlaces(this.places);
    return html `${places}`;
  }

  /**
   * Event handler method to listen placeStatusChanged event`.
   * @event placeStatusChanged
   * @param {CustomEvent} event Custom Event object
   * @return {void}
   */
  onPlaceStatusChanged(event: CustomEvent): void {
    this.#updatePlace(event.detail.id, event.detail.status);
  }

  /**
   * Search an place on the places and if it is finded then update the status `.
   * @param {string} id Place id
   * @param {string} newStatus New status to set on the place
   * @return {void}
   */
  #updatePlace(id: string, newStatus: string): void {
    const placeFounded = this.places.find(place => place.id === id);

    if(placeFounded) {
      placeFounded.status = newStatus;
    }
  }

  /**
   * Render method to build the row.
   * @param {Place} places An a places list
   * @return {Array<TemplateResult>}
   */
  #renderPlaces(places: Place[]): TemplateResult[] {
    const row: TemplateResult[] = [];

    places.forEach((place) => {
      row.push(place.status ?
        html `<mene-place .place="${place}" @placeStatusChanged=${this.onPlaceStatusChanged}></mene-place>` :
        html `<span class="void"></span>`
      )
    });

    return row;
  }

}
