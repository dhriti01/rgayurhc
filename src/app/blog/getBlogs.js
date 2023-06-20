"use server";
import { DOMParser } from "xmldom";

export async function fetchData() {
  const url = process.env.BLOG_URL;

  const res = await fetch(url, { next: { revalidate: 10 } }).then((data) => {
    if (!data.ok) {
      // This will activate the closest `error.js` Error Boundary
      return null;
    }
    //console.log(data);
    return data.text();
  });

  if (res === null) return [];

  const parser = new DOMParser();
  const node = parser.parseFromString(res, "text/xml").documentElement;
  const blogs = node.getElementsByTagName("item");

  const loadedBlogs = [];

  for (let i = 0; i < blogs.length; i++) {
    const titleElement = blogs[i].getElementsByTagName("title");
    if (!titleElement || !titleElement[0].textContent) {
      continue;
    }
    const title = titleElement[0].textContent;

    const linkElement = blogs[i].getElementsByTagName("link");
    if (!linkElement || !linkElement[0].textContent) {
      continue;
    }
    const link = linkElement[0].textContent;

    const tagElement = blogs[i].getElementsByTagName("category");
    if (!tagElement || !tagElement[0].textContent) {
      continue;
    }
    var tag = tagElement[0].textContent;
    tag = tag.replace(/^./, tag[0].toUpperCase());

    const dateElement = blogs[i].getElementsByTagName("pubDate");
    if (!dateElement || !dateElement[0].textContent) {
      continue;
    }
    const date = dateElement[0].textContent;

    var encodedContent = blogs[i].getElementsByTagNameNS("*", "encoded");

    if (!encodedContent || !encodedContent.item(0)) {
      continue;
    }

    var content = encodedContent.item(0);
    if (!content || !content.textContent) {
      continue;
    }

    const parser = new DOMParser();
    const parsedContent = parser.parseFromString(
      content.textContent,
      "text/html"
    );

    const img = parsedContent.getElementsByTagName("img");
    if (!img) {
      console.log("no img");
      continue;
    }

    const imgUrl = img[0].getAttribute("src");
    if (!imgUrl) {
      console.log("no src");
      continue;
    }

    var subtitle = parsedContent.getElementsByTagName("p");
    if (!subtitle || !subtitle[0].textContent) {
      //console.log("no content");
      continue;
    }
    subtitle = subtitle[0].textContent;
    if (subtitle.length > 100) subtitle = subtitle.substring(0, 100) + "...";

    const blog = {
      title,
      subtitle,
      link,
      tag,
      date: new Date(date),
      img: imgUrl,
    };

    loadedBlogs.push(blog);
  }

  console.log(loadedBlogs);

  return loadedBlogs;
}
