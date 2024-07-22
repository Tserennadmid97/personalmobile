import { useState } from "react";

const navigation = [
  {
    name: "About",
    link: "/test",
  },
  {
    name: "Works",
    link: "/test1",
  },
  {
    name: "Testimonials",
    link: "/test2",
  },
  {
    name: "Contact",
    link: "/test3",
  },
];

export function Header() {

  return (
    <main>
  <div>
    {navigation.map((nav) => (
      <Header key={nav.link}/>
    ))};
  </div>

    </main>
  );
  };


