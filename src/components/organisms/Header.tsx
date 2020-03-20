import * as React from 'react';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';
import { Logo } from '@/components/molecules/Logo';
// import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <Logo />
        <div className="settings">
          <ul>
            <li className="settings__add">
              {/* <ImageButton image={FaPlus} /> */}
              {/* <button
                data-testid="quick-add-task-action"
                aria-label="Quick and task"
                type="button"
              >
                +
              </button> */}
            </li>
            <li className="settings__darkmode">
              {/* <ImageButton image={FaPizzaSlice} /> */}
              {/* <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
              >
                <FaPizzaSlice />
              </button> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
