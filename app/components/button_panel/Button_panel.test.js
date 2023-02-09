import * as React from 'react';
import { render } from '@testing-library/react';
import { ButtonPanel } from './button_panel.tsx';

describe('ButtonPanel', () => {
  it('should render the correct number of buttons', () => {
    const numberOfButtons = 3;
    const { getAllByRole } = render(
      <ButtonPanel
        numberOfButtons={numberOfButtons}
        arrayOfLinks={['link1', 'link2', 'link3']}
        arrayOfNames={['name1', 'name2', 'name3']}
      />
    );
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(numberOfButtons);
  });
});

describe('ButtonPanel', () => {
  it('should open the correct link in a new window when a button is clicked', () => {
    const arrayOfLinks = ['link1', 'link2', 'link3'];
    const { getAllByRole } = render(
      <ButtonPanel
        numberOfButtons={3}
        arrayOfLinks={arrayOfLinks}
        arrayOfNames={['name1', 'name2', 'name3']}
      />
    );
    const buttons = getAllByRole('button');
    fireEvent.click(buttons[1]);
    // Wait for the new window to open
    waitFor(() => {
      // Check that the new window contains the correct link
      expect(window.open).toHaveBeenCalledWith(arrayOfLinks[1]);
    });
  });
});

it('should render the correct button text', () => {
const arrayOfNames = ['name1', 'name2', 'name3'];
const { getAllByRole } = render(
    <ButtonPanel
    numberOfButtons={3}
    arrayOfLinks={['link1', 'link2', 'link3']}
    arrayOfNames={arrayOfNames}
    />
);
const buttons = getAllByRole('button');
expect(buttons.map(button => button.textContent)).toEqual(arrayOfNames);
});

it('should render the correct aria-label for each button', () => {
const arrayOfNames = ['name1', 'name2', 'name3'];
const { getAllByRole } = render(
    <ButtonPanel
    numberOfButtons={3}
    arrayOfLinks={['link1', 'link2', 'link3']}
    arrayOfNames={arrayOfNames}
    />
);
const buttons = getAllByRole('button');
expect(buttons.map(button => button.getAttribute('aria-label'))).toEqual(arrayOfNames);
});

it('should render the correct href for each button', () => {
const arrayOfLinks = ['link1', 'link2', 'link3'];
const { getAllByRole } = render(
    <ButtonPanel
    numberOfButtons={3}
    arrayOfLinks={arrayOfLinks}
    arrayOfNames={['name1', 'name2', 'name3']}
    />
);
const buttons = getAllByRole('button');
expect(buttons.map(button => button.querySelector('a').getAttribute('href'))).toEqual(arrayOfLinks);
});

it('should set the target attribute of the a element to _blank', () => {
const { getAllByRole } = render(
    <ButtonPanel
    numberOfButtons={3}
    arrayOfLinks={['link1', 'link2', 'link3']}
    arrayOfNames={['name1', 'name2', 'name3']}
    />
);
const buttons = getAllByRole('button');
expect(buttons.map(button => button.querySelector('a').getAttribute('target'))).toEqual(['_blank', '_blank', '_blank']);
});