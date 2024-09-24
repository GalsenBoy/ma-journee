﻿import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export const Wave = () => {
  return (
    <Svg
      //   style={{ position: "absolute",
      viewBox="0 0 1000 100"
      fill="#4BA764"
    >
      <Path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></Path>
      <Path
        d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z"
        opacity=".5"
      ></Path>
      <Path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></Path>
      <Path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></Path>
    </Svg>
    // </View>
  );
};

{
  /* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#4BA764'><path d='M0 1v99c134.3 0 153.7-99 296-99H0Z' opacity='.5'></path><path d='M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z' opacity='.5'></path><path d='M617 1v86C372 119 384 1 196 1h421Z' opacity='.5'></path><path d='M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z'></path></svg> */
}
