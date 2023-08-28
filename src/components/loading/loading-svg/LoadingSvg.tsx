import { LoadingSvgContainer, LoadingText } from "./LoadingSvg.styles";

export const LoadingSvg = () => {
  return (
    <LoadingSvgContainer>
      <LoadingText>Loading</LoadingText>
      <svg
        version="1.1"
        id="L3"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <circle
          fill="none"
          stroke="#000000"
          strokeWidth="1"
          cx="50"
          cy="50"
          r="43"
          style={{ opacity: 0.5 }}
        />
        <circle
          fill="#000000"
          stroke="#000000"
          strokeWidth="1"
          cx="8"
          cy="50"
          r="2"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </LoadingSvgContainer>
  );
};
