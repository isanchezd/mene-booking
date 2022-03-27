import { html, TemplateResult } from 'lit';
import '../src/components/mene-booking/MeneBooking.js';
import { Status } from '../src/enums/status.enum.js';
import { MenePlace, MeneRow } from '../src/index.js';
import { Place } from '../src/interfaces/place.interface.js';


interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  places: Place[][]
}

export default {
  title: 'MeneBooking',
  component: 'mene-booking',
  subcomponents: { MeneRow, MenePlace },
};

const Template: Story<ArgTypes> = (args: ArgTypes) => html`<mene-booking .places=${args.places}></mene-booking>`;



export const Avaible = Template.bind({});
Avaible.args = {
  places: [
    [
      {
        id: '1',
        status: Status.avaible
      }
    ],
    [
      {
        id: '2',
        status: Status.avaible
      }
    ]
  ]
}

export const Disabled = Template.bind({})
Disabled.args = {
  places: [
    [
      {
        id: '1',
        status: Status.disabled
      }
    ],
    [
      {
        id: '2',
        status: Status.disabled
      }
    ]
  ]
}

export const Reserved = Template.bind({})
Reserved.args = {
  places: [
    [
      {
        id: '1',
        status: Status.reserved
      }
    ],
    [
      {
        id: '2',
        status: Status.reserved
      }
    ]
  ]
}

export const Empty = Template.bind({})
Empty.args = {
  places: [
    [
      {
        id: '1',
        status: ''
      }
    ],
    [
      {
        id: '2',
        status: ''
      }
    ]
  ]
}
