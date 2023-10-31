<script>
  import CardHomeClem from "../components/CardHomeClem.svelte";
</script>

<div class="slider-thumb-1" />
<div class="slider-thumb-2" />
<div class="slider-thumb-3" />
<CardHomeClem />

<style>
  .slider-thumb-1::before {
    opacity: 0.7;
    position: absolute;
    content: "";
    left: 5%;
    top: 20%;
    width: 350px;
    height: 450px;
    background: linear-gradient(#e3f2fb, #30b3df);
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape 5s linear infinite;
  }
  @keyframes sliderShape {
    0%,
    100% {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }
  .slider-thumb-2::before {
    opacity: 0.7;
    position: absolute;
    content: "";
    left: 73%;
    top: 17%;
    width: 380px;
    height: 350px;
    background: linear-gradient(#30b3df, #e3f2fb);
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape 5s linear infinite;
  }
  @keyframes sliderShape {
    0%,
    100% {
      border-radius: 38% 47% 65% 48% / 40% 40% 60% 60%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 67% 45% 38% 56% / 25% 34% 75% 75%;
      transform: translate3d(0, 8px, 0) rotateZ(0.05deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateZ(0.03deg);
    }
    67% {
      border-radius: 100% 55% 55% 100% / 100% 100% 55% 55%;
      transform: translate3d(0, -4px, 0) rotateZ(0.04deg);
    }
  }
  .slider-thumb-3::before {
    opacity: 0.7;
    position: absolute;
    content: "";
    left: 55%;
    top: 75%;
    width: 150px;
    height: 145px;
    background: linear-gradient(#e3f2fb, #30b3df);
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: 0;
    -webkit-animation: sliderShape 5s linear infinite;
  }
  @keyframes sliderShape {
    0%,
    100% {
      border-radius: 38% 47% 65% 48% / 40% 40% 60% 60%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 67% 45% 38% 56% / 25% 34% 75% 75%;
      transform: translate3d(0, 8px, 0) rotateZ(0.05deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateZ(0.03deg);
    }
    67% {
      border-radius: 100% 55% 55% 100% / 100% 100% 55% 55%;
      transform: translate3d(0, -4px, 0) rotateZ(0.04deg);
    }
  }
</style>
