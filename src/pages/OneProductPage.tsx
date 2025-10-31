// src/pages/ProductPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product, Category } from "@/models/types"; // adjust import path if needed
import OneProduct from "@/components/OneProduct";
import Layout from "@/components/layout/Layout";

export default function ProductPage() {
  return <>
  <Layout>
    <OneProduct/>
    </Layout>
  </>
}
