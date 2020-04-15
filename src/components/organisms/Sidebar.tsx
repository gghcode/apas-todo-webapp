import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { Projects } from './Projects';
import { AddProject } from './AddProject';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 266px;
  height: calc(100vh);
  padding-top: 74px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: $generic-border;
  background-color: #fafafa;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SidebarMiddleWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: $generic-border;
  padding-left: 10px;
  cursor: pointer;

  span {
    color: #0000008a;
    margin-right: 10px;

    svg.hidden-projects {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
  }

  h2 {
    margin: 0;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 20px;
  }
`;

const SidebarList = styled.ul`
  &.active,
  &:hover {
    font-weight: bold;
    background-color: white;
  }
`;

const SidebarListItem = styled.li`
  list-style-type: none;
  color: #333;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  line-height: 1.5;
  font-size: 15px;
  padding-left: 0;
  padding-right: 0;
`;

const SidebarListItemWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 0 10px 10px;
  width: 100%;

  span:first-of-type {
    margin-right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
      color: #555;
    }
  }
`;

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <SidebarWrapper>
      <SidebarList>
        <SidebarListItem className={true ? 'active' : undefined}>
          <SidebarListItemWrapper tabIndex={0}>
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </SidebarListItemWrapper>
        </SidebarListItem>
        <SidebarListItem className={false ? 'active' : undefined}>
          <SidebarListItemWrapper tabIndex={0} role="button">
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </SidebarListItemWrapper>
        </SidebarListItem>
        <SidebarListItem className={false ? 'active' : undefined}>
          <SidebarListItemWrapper tabIndex={0} role="button">
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </SidebarListItemWrapper>
        </SidebarListItem>
      </SidebarList>
      <SidebarMiddleWrapper role="button" tabIndex={0}>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </SidebarMiddleWrapper>
      <ul className="sidebar__projects">
        {showProjects && <Projects projects={[]} />}
      </ul>
      {showProjects && <AddProject shouldShow={false} />}>
    </SidebarWrapper>
  );
};
