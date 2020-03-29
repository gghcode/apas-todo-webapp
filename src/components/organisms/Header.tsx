import * as React from 'react';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';
import { Logo } from '@/components/molecules/Logo';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  border-bottom: solid 1px #ca2100;
  background-color: #db4c3f;
  transition: height 200ms ease-in;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  height: 44px;
  z-index: 400;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

const Nav = styled.nav`
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 922px;
  margin: auto;
  height: 44px;
`;

const ImageWrapper = styled.div`
  padding-left: 8px;
  grid-area: 1 / 1;
`;

const LogoImage = styled.img`
  width: 24px;
`;

const va = (align: string = 'center') => css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @if ${align} != 'center' {
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
  } @else {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

const SettingsWrapper = styled.div`
  grid-area: 1 / 2;
  text-align: right;

  ul {
    margin: 0;
    padding: 0;
    float: right;
  }

  ul li {
    ${va()}

    list-style-type: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    float: left;

    &:hover {
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const transparentButton = css`
  background-color: transparent;
  border: 0;
`;

const SettingsAdd = styled.li`
  margin-right: 15px;
  font-size: 30px;

  button {
    ${transparentButton}
    color: white;
    cursor: pointer;
  }
`;

const SettingsDarkMode = styled.li`
  button {
    ${transparentButton}
    color: white;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Nav className="container">
        <ImageWrapper>
          <LogoImage src="/images/logo.png" alt="Todoist" />
        </ImageWrapper>
        <SettingsWrapper>
          <ul>
            <SettingsAdd>
              <button aria-label="Quick and task" type="button">
                +
              </button>
            </SettingsAdd>
            <SettingsDarkMode>
              <button type="button">
                <FaPizzaSlice />
              </button>
            </SettingsDarkMode>
          </ul>
        </SettingsWrapper>
      </Nav>
    </HeaderWrapper>
  );
};
