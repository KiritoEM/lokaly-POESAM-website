const scrollSection = (id: string) => {
  const section = document.querySelector(`#${id}`);
  if (section) {
    const offset = 120;
    const position =
      section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    console.log(id);
  }
};

export default scrollSection;
