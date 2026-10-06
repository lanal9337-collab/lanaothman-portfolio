// Small reveal effect that keeps the page lightweight and static-host friendly.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section > *").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
