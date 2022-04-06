import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Status } from '../../enums/status.enum';
import { Place } from '../../interfaces/place.interface';


  /**
   * Mene-Place
   *
   * The responsabilities of the component have:
   *
   * 1. Render an input checkbox
   * 2. Disable the input when property status is disabled or reserved
   * 3. Checked the input when property status is reserved
   * 4. Emit and event placeStatusChanged when the status changes
   */
@customElement('mene-place')
export class MenePlace extends LitElement {

  /**
   * Place Item
   *
   * @type {Object<Place>}
   */
  @property({type: Object})
  place: Place = {} as Place;

  /**
   * Event handler method on change`.
   * @event onChange
   * @return {void}
   */
  onChange(): void {
    this.place.status = this.place.status === Status.selected ? Status.avaible : Status.selected ;
  }

  /**
   * Method to render the html content`.
   * @return {TemplateResult} The cumulative level of awesomeness.
   */
  render(): TemplateResult {
    return html`
    <input type="checkbox"
    ?disabled=${ this.place.status === Status.disabled || this.place.status === Status.reserved }
    ?checked=${ this.place.status === Status.reserved }
    .value=${ this.id }
    @change=${ this.onChange }>`;
  }

}
