import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div sx={{ bgcolor: 'success.main' }}>
      <p>Hello from home page</p>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
