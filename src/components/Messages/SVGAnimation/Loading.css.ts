import styled from "styled-components";

export const MainLoading = styled.div<{ $sizesvg?: string }>`
  svg {
    animation: animationSVG 2s infinite;
    color: ${(props) => props.$sizesvg};
  }
  @keyframes animationSVG {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
