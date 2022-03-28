import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Status } from '../../enums/status.enum';


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
   * Place Id
   *
   * @type {String}
   */
  @property({type: String})
  id: string = '0';

  /**
   * Status
   *
   * @type {String}
   */
  @property({type: String})
  status: string = Status.avaible;

  /**
   * Event handler method on change`.
   * @event onChange
   * @return {void}
   */
  onChange(): void {
    this.status = this.status === Status.selected ? Status.avaible : Status.selected ;
    this.#emitPlaceStatusChanged(this.id, this.status);
  }

  /**
   * Method to render the html content`.
   * @return {TemplateResult} The cumulative level of awesomeness.
   */
  render(): TemplateResult {
    return html`
    <input type="checkbox"
    ?disabled=${ this.status === Status.disabled || this.status === Status.reserved }
    ?checked=${ this.status === Status.reserved }
    .value=${ this.id }
    @change=${ this.onChange }>`;
  }

  /**
   * Method to emit a placeStatusChanged event`.
   * @param {String} id Place identifier
   * @param {String} id Status place
   * @return {void}
   */
  #emitPlaceStatusChanged(id: string, status: string): void {
    const detail = {
        id,
        status
    };
    this.dispatchEvent(new CustomEvent('placeStatusChanged', {
      detail,
      bubbles: true,
      composed: true
    }));
  }
}
