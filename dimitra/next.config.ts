import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    api_key: 'AIzaSyD6i1H967AaI7mmIh8DvAR_GRI3U6O3qdA',
    authDomain: 'headbodyscript.firebaseapp.com',
    databaseURL: 'https://headbodyscript-default-rtdb.firebaseio.com',
    projectId: 'headbodyscript',
    storageBucket: 'headbodyscript.appspot.com',
    messagingSenderId: '561751453459',
    appId: '1:561751453459:web:8daaf437c21f3841cff4e6',
    measurementId: 'G-LKY12PWXSD',

    GITHUB_ID: 'Ov23ligVsLevlRKdk0pW',
    GITHUB_SECRET: 'a868d0882de7729f238f5a0934050cf68d4b6a63',
    NEXTAUTH_URL: 'http://localhost:3000/',
    JWT_SECRET: '09e4339ce52ca496f538b911dc064ccc'
  },
}

export default nextConfig;
