exports = {   apps: [
  {
    name: 'downtik.app',
    exec_mode: 'cluster',
    einstances: '1',
    script: './.output/server/index.mjs',
    env: {
      PORT: 4301
    }
  },
],
};
