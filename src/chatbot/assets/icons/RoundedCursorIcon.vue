<template>
  <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1401 3.46001L7.11012 6.46001C1.04012 8.49001 1.04012 11.8 7.11012 13.82L9.79012 14.71L10.6801 17.39C12.7001 23.46 16.0201 23.46 18.0401 17.39L21.0501 8.37001C22.3901 4.32001 20.1901 2.11001 16.1401 3.46001ZM16.4601 8.84001L12.6601 12.66C12.5101 12.81 12.3201 12.88 12.1301 12.88C11.9401 12.88 11.7501 12.81 11.6001 12.66C11.3101 12.37 11.3101 11.89 11.6001 11.6L15.4001 7.78001C15.6901 7.49001 16.1701 7.49001 16.4601 7.78001C16.7501 8.07001 16.7501 8.55001 16.4601 8.84001Z"
      fill="url(#paint0_linear_70_64)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_70_64"
        x1="0.656217"
        y1="3.19282"
        x2="20.8508"
        y2="21.7175"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="isActive ? '#CF53AC' : '#555555'" />
        <stop offset="1" :stop-color="isActive ? '#6693AC' : '#555555'" />
      </linearGradient>
    </defs>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
