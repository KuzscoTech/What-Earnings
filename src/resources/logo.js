import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function Logo(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#F5ECDE" d="M0 0h30v30H0z" />
      <Path fill="#323232" d="M30 0h30v30H30zM0 30h30v30H0z" />
      <Path fill="#F5ECDE" d="M30 30h30v30H30z" />
      <Path
        d="M12.496 15.464V20h9.48v3H8.896V5.504h12.648v3h-9.048v3.96h8.376v3h-8.376z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M51.52 53h-3.24l-2.928-13.656L42.496 53h-3.24l-4.944-17.496h3.816l2.712 13.104 2.712-13.104h3.552l2.832 13.128 2.616-13.128h3.816L51.52 53z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={15.5}
          y1={-2}
          x2={15.5}
          y2={31}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#323232" />
          <Stop offset={1} stopColor="#D5AA5E" />
          <Stop offset={1} stopColor="#323232" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={45.5}
          y1={28}
          x2={45.5}
          y2={61}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#323232" />
          <Stop offset={0.979} stopColor="#D9B062" />
          <Stop offset={1} stopColor="#796847" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Logo;
