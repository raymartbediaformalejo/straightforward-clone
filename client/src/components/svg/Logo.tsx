import { SVGProps } from "react";

type LogoProps = {
  color: "black" | "white" | "inherit";
  svgProps?: SVGProps<SVGSVGElement>;
};

const Logo = ({ color = "white", svgProps }: LogoProps) => {
  return (
    <svg
      width="254"
      height="24"
      viewBox="0 0 254 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.68 23L11.048 0.439999H15.048L25.416 23H20.424L18.4687 18.4672L16.6725 14.232H16.68L13.064 5.72H13L9.49094 14.1291L7.80445 18.104H7.784L5.704 23H0.68ZM33.1258 23V0.439999H43.4297C45.9471 0.439999 47.8884 1.08 49.2538 2.36C50.6191 3.61867 51.3018 5.37867 51.3018 7.64C51.3018 9.90133 50.6191 11.672 49.2538 12.952C47.8884 14.232 45.9471 14.872 43.4297 14.872H38.0858V23H33.1258ZM38.0858 11.032H42.5978C45.2218 11.032 46.5338 9.90133 46.5338 7.64C46.5338 5.42133 45.2218 4.312 42.5978 4.312H38.0858V11.032ZM60.1357 23V0.439999H75.5918V4.312H64.8717V9.592H74.8877V13.496H64.8717V19.128H75.5918V23H60.1357ZM85.2708 23V0.439999H100.503V4.312H90.2308V9.816H99.7988V13.688H90.2308V23H85.2708ZM115.032 23V4.536H107.576V0.439999H127.448V4.536H119.992V23H115.032ZM135.635 23V0.439999H140.594V9.496H151.09V0.439999H156.051V23H151.09V13.624H140.594V23H135.635ZM166.363 23V0.439999H181.819V4.312H171.099V9.592H181.115V13.496H171.099V19.128H181.819V23H166.363ZM191.498 23V0.439999H196.458V23H191.498ZM204.135 23L214.503 0.439999H218.503L228.871 23H223.879L221.916 18.4498L220.124 14.232H220.135L216.519 5.72H216.455L213.417 13H213.4L210 21H210.009L209.159 23H204.135ZM244.363 23.352C242.593 23.352 240.918 23.128 239.339 22.68C237.782 22.232 236.481 21.624 235.436 20.856L236.876 16.952C237.878 17.656 239.02 18.2107 240.299 18.616C241.601 19.0213 242.955 19.224 244.363 19.224C245.899 19.224 246.998 18.9893 247.66 18.52C248.342 18.0293 248.684 17.4213 248.684 16.696C248.684 16.0773 248.449 15.5867 247.979 15.224C247.51 14.8613 246.689 14.552 245.516 14.296L241.899 13.528C237.867 12.6747 235.852 10.584 235.852 7.256C235.852 5.82667 236.235 4.57867 237.003 3.512C237.771 2.424 238.838 1.58133 240.203 0.983999C241.59 0.386666 243.19 0.0879993 245.003 0.0879993C246.561 0.0879993 248.022 0.311999 249.387 0.759998C250.753 1.208 251.883 1.83733 252.779 2.648L251.339 6.296C249.59 4.90933 247.467 4.216 244.971 4.216C243.628 4.216 242.582 4.48267 241.835 5.016C241.11 5.528 240.747 6.2 240.747 7.032C240.747 7.65067 240.971 8.152 241.419 8.536C241.867 8.92 242.646 9.22933 243.755 9.464L247.371 10.232C251.51 11.128 253.579 13.1547 253.579 16.312C253.579 17.72 253.195 18.9573 252.427 20.024C251.681 21.0693 250.614 21.8907 249.227 22.488C247.862 23.064 246.241 23.352 244.363 23.352Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
