import { env } from "process";
import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //  env:{
  //       TMDB_API_TOKEN = process.env.TMDB_API_TOKEN,
  //       TMDB_API_KEY = process.env.TMDB_API_KEY,
  //       TMDB_IMAGE_SERVICE_URL = process.env.TMDB_IMAGE_SERVICE_URL,
  //       TMDB_BASE_URL = process.env.TMDB_BASE_URL,
  //    },
};

export default nextConfig;
