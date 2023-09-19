import styled from "styled-components";

export const HamburgerMenuContainer = styled.div`
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: -1.5rem;
    margin-right: -1.5rem;
    .top {
      stroke-dasharray: 40 121;
    }

    .bottom {
      stroke-dasharray: 40 205;
    }
  }
  .active .top {
    stroke-dashoffset: -68px;
  }

  .active .bottom {
    stroke-dashoffset: -68px;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 10;
  }
  .menu-light {
    path {
      stroke: #ffffff;
    }
  }
`;
