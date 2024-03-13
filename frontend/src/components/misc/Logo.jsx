import * as React from 'react';
import { rem } from '@mantine/core';
const Logo = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
      height: rem(props.size),
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: '#1D66DB',
      }}
      d="M256,10.449C120.386,10.449,10.449,120.386,10.449,256S120.386,501.551,256,501.551 S501.551,391.614,501.551,256S391.614,10.449,256,10.449z M256.133,454.398c-109.645,0-198.531-88.885-198.531-198.531 S146.487,57.337,256.133,57.337c109.644,0,198.531,88.885,198.531,198.531S365.777,454.398,256.133,454.398z"
    />
    <path
      style={{
        fill: '#5AB8FF',
      }}
      d="M125.463,106.411c-41.589,36.391-67.861,89.852-67.861,149.456c0,13.156,1.293,26.01,3.734,38.451 l194.795-112.465L125.463,106.411z"
    />
    <g>
      <path
        style={{
          fill: '#0084FF',
        }}
        d="M320.232,67.917c-20.109-6.857-41.668-10.581-64.099-10.581c-50.042,0-95.752,18.522-130.67,49.075 l130.669,75.442h0.001h-0.001l64.1,36.993V67.917z"
      />
      <path
        style={{
          fill: '#0084FF',
        }}
        d="M61.337,294.318c13.731,69.955,64.192,126.736,130.483,149.425V293.006v-74.023L61.337,294.318z"
      />
    </g>
    <g>
      <path
        style={{
          fill: '#5AB8FF',
        }}
        d="M320.232,67.917v150.928l0.351,0.204l-0.351-0.204v74.28l130.74-75.486 C437.289,147.506,386.698,90.579,320.232,67.917z"
      />
      <path
        style={{
          fill: '#5AB8FF',
        }}
        d="M256.133,330.134L256.133,330.134l-64.313-37.128v150.737c20.172,6.902,41.805,10.655,64.313,10.655 c49.96,0,95.605-18.46,130.5-48.924L256.133,330.134L256.133,330.134z"
      />
    </g>
    <path
      style={{
        fill: '#0084FF',
      }}
      d="M454.663,255.867c0-13.078-1.279-25.855-3.692-38.228L256.133,330.134l130.5,75.339 C428.32,369.081,454.663,315.552,454.663,255.867z"
    />
    <path d="M161.373,270.193c-5.771,0-10.449,4.678-10.449,10.449v3.781c0,5.771,4.678,10.449,10.449,10.449 c5.77,0,10.449-4.678,10.449-10.449v-3.781C171.822,274.871,167.143,270.193,161.373,270.193z" />
    <path d="M161.373,301.305c-5.771,0-10.449,4.679-10.449,10.449v65.125c0,5.771,4.678,10.449,10.449,10.449 c5.77,0,10.449-4.678,10.449-10.449v-65.125C171.822,305.984,167.143,301.305,161.373,301.305z" />
    <path d="M437.019,74.981C388.668,26.628,324.38,0,256,0S123.332,26.628,74.981,74.981S0,187.62,0,256s26.628,132.668,74.981,181.019 S187.62,512,256,512s132.668-26.628,181.019-74.981S512,324.38,512,256S485.372,123.332,437.019,74.981z M256,491.102 C126.365,491.102,20.898,385.635,20.898,256S126.365,20.898,256,20.898S491.102,126.365,491.102,256S385.635,491.102,256,491.102z" />
    <path d="M256.133,46.888c-115.231,0-208.98,93.748-208.98,208.98s93.748,208.98,208.98,208.98s208.98-93.748,208.98-208.98 S371.364,46.888,256.133,46.888z M439.137,212.408l-108.456,62.62V83.206C384.49,106.528,425.335,154.286,439.137,212.408z  M202.268,286.974v-61.956l53.864-31.099l53.65,30.976v62.199l-53.65,30.977L202.268,286.974z M309.783,75.595v125.167 l-165.849-95.753c31.344-23.372,70.184-37.223,112.199-37.223C274.768,67.786,292.773,70.523,309.783,75.595z M126.927,119.32 l108.308,62.533L69.32,277.645c-0.829-7.148-1.269-14.412-1.269-21.778C68.051,202.15,90.692,153.625,126.927,119.32z  M73.183,299.545l108.188-62.462v191.351C127.735,405.107,87.015,357.49,73.183,299.545z M202.268,436.077V311.104l48.696,28.113 c0.013,0.006,0.024,0.014,0.034,0.02l117.141,67.628c-31.311,23.287-70.077,37.084-112.009,37.084 C237.42,443.949,219.341,441.188,202.268,436.077z M385.174,392.567l-108.144-62.433l165.943-95.811 c0.81,7.073,1.241,14.259,1.241,21.544C444.214,309.665,421.505,358.254,385.174,392.567z" />
  </svg>
);
export default Logo;