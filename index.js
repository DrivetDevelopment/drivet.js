const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

const endpoints = require('./endpoints.json');
let version = require("./package.json").version;

async function getContent(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  }
  catch (e) {
    return `Package Error: ${e}`;
  }
}

class DrivetClient {
  constructor() {
    this.fun = {};
    this.facts = {};
    this.images = {};
    this.misc = {};
    let baseURL = 'https://api.drivet.xyz';
    Object.keys(endpoints.fun).forEach(async (endpoint) => {
      this.fun[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.fun[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.facts).forEach(async (endpoint) => {
      this.facts[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.facts[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.images).forEach(async (endpoint) => {
      this.images[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.images[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
    Object.keys(endpoints.misc).forEach(async (endpoint) => {
      this.misc[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.misc[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
      };
    });
  }
}

module.exports = { DrivetClient, version };