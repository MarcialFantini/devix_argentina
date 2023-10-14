export const smoothScrollToElement = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop - 70,
    });
  }
};
