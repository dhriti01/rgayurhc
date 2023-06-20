let blogData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2023, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 5, 3),
    link: "https://www.medium.com",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tag: "Diabetes",
    date: new Date(2022, 11, 3),
    link: "https://www.medium.com",
  },
];

blogData = blogData.sort(function (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

export { blogData };
