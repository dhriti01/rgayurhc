"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "./getBlogs";
import BlogBanner from "./components/BlogBanner";
import BlogList from "./components/BlogList";
import NoMatch from "./components/NoMatch";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../customTheme";

//import { blogData } from "@/data/blogs";

export default function Home() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setBlogData(data);
      console.log(data);
    })();
  }, []);

  const [search, setSearch] = useState({
    isSearch: false,
    searchStr: "",
    subBlogs: [],
  });

  function searchNote(event) {
    const value = event.target.value;
    const allBlogs = blogData;
    setSearch({
      isSearch: true,
      searchStr: value,
      subBlogs: allBlogs.filter((blog) => {
        return (
          blog.title.match(new RegExp(value, "i")) ||
          blog.subtitle.match(new RegExp(value, "i")) ||
          blog.tag.match(new RegExp(value, "i"))
        );
      }),
    });
  }

  function clearSearch() {
    setSearch({
      isSearch: false,
      searchStr: "",
      subBlogs: [],
    });
  }

  return (
    <>
      <Box className="backgroundBox">
        <BlogBanner
          onSearch={searchNote}
          onClear={clearSearch}
          value={search.searchStr}
        />
        {search.isSearch ? (
          search.subBlogs.length > 0 ? (
            <BlogList blogs={search.subBlogs} />
          ) : (
            <NoMatch />
          )
        ) : (
          <BlogList blogs={blogData} />
        )}
      </Box>
    </>
  );
}
