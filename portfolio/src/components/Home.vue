<template>
  <div>
    <svg
      class="background--custom"
      id="demo"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        fill="#8ac5ee"
        fill-opacity="0.4"
        d="M-100 -100L200 -100L200 50L-100 50Z"
        style="animation: path0 3.4246575342465753s linear infinite alternate"
      />
      <path
        fill="#f5261f"
        fill-opacity="0.1"
        d="M-100 -100L200 -100L200 80L-100 80Z"
        style="animation: path1 62.5s linear infinite alternate"
      />
      <path
        fill="#6e4973"
        fill-opacity="0.2"
        d="M-100 -100L200 -100L200 90L-100 90Z"
        style="animation: path2 26.31578947368421s linear infinite alternate"
      />
    </svg>
  </div>
</template>

<style>
path {
  transform-origin: 50% 0%;
}
.background--custom {
  background-color: #ffffff;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
}
@keyframes path0 {
  0% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
@keyframes path1 {
  0% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
@keyframes path2 {
  0% {
    transform: rotate(50deg);
  }
  100% {
    transform: rotate(-50deg);
  }
}
</style>
