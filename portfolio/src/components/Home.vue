<template>
  <div class="background--custom"></div>
</template>
<style>
.background--custom {
  background: linear-gradient(90deg, #114df0, #030303, #f00300);
  background-size: 300% 300%;
  animation: gradient 8s alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
@keyframes gradient {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
</style>
