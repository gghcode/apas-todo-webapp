import * as React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="APAS" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick and task"
                type="button"
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
