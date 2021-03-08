import { defineConfig } from "umi";

import proxy from "./config/proxy";
import routes from "./config/routes";
import { name } from "./package.json";

// ref: https://umijs.org/config/
export default defineConfig({
  proxy,
  routes,
  nodeModulesTransform:{type:"none"},
  devServer: {
    port: 7005
  },
  dva: {},
  antd: {},
  title: name,
  sass: {
    implementation: require('node-sass'),
  }
})
