import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Status } from '../../enums/status.enum';

@customElement('mene-place')
export class MenePlace extends LitElement {
  static styles = css`
  :host > .void {
    opacity: 0;
    pointer-events: none;
  }
`;

  @property({type: String})
  id: string = '0';

  @property({type: String})
  status: string = Status.avaible;

  onChange() {
    this.status = this.status === Status.selected ? Status.avaible : Status.selected ;
    this.#emitPlaceStatusChanged();
  }

  render() {
    return html`
    <input type="checkbox"
    class=${ this.status === Status.void ? 'void' : ''}
    ?disabled=${ this.status === Status.disabled || this.status === Status.reserved }
    ?checked=${ this.status === Status.reserved }
    .value=${ this.id }
    @change=${ this.onChange }>`;
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
