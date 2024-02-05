"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import AppTable from "@/components/app.table";
import { Container } from "react-bootstrap";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container style={{ minHeight: "calc(100vh - 106px)" }}>
          {children}
        </Container>
        <AppFooter />
        <ToastContainer />
      </body>
    </html>
  );
}
