"use client"
import Homepage from "../../pages/Homepage/homepage";
import Header from "../../pages/common/Header/header";
import Footer from "../../pages/common/Footer/footer";
import AboutPage from "../../pages/AboutUs/AboutPage";
import { useState } from "react";
import BlogsPage from "../../pages/Blogs/blogs";

export default function Home() {
  const [page,pageupd]=useState("Home")
  return (
    <>
    <Header pageupd={pageupd}/>
    {page=="Home"?<Homepage/>:page=="AboutUs"?<AboutPage/>:<BlogsPage/>}
    <Footer pageupd={pageupd}/>
    </>
  )}