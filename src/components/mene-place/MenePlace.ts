import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Status } from '../../enums/status.enum';

@customElement('mene-place')
export class MenePlace extends LitElement {

  @property({type: String})
  id: string = '0';

  @property({type: String})
  status: string = Status.avaible;

  onChange() {
    this.status = this.status === Status.selected ? Status.avaible : Status.selected ;
    this.#emitPlaceStatusChanged();
  }

  render() {
    return this.status !== Status.void ?
    html`
    <input type="checkbox"
    ?disabled=${ this.status === Status.disabled || this.status === Status.reserved }
    ?checked=${ this.status === Status.reserved }
    .value=${ this.id }
    @change=${ this.onChange }>` : null;
  }


  #emitPlaceStatusChanged() {
    this.dispatchEvent(new CustomEvent('place-status-changed', {
      detail: {
        id: this.id,
        status: this.status
      },
      bubbles: true,
      composed: true
    }));
  }
}
