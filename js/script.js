const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", function () {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  mobileNav.classList.toggle("hidden", isOpen);
  mobileNav.classList.toggle("flex", !isOpen);

  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );

  menuIcon.textContent = isOpen ? "☰" : "✕";
});

mobileNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("flex");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation");
    menuIcon.textContent = "☰";
  });
});
const testimonials = [
  {
    name: "Rita Brown",
    role: "VP Marketing at Bowl",
    text: "I was planning on doing a DIY project at home since I had more time now and didn't want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. Whenever I got stuck, I just did the Quick Call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
  },
  {
    name: "James Wilson",
    role: "Property Investor",
    text: "Beacon One Capital helped us transform our property into a modern commercial space. Their team understood our goals and made the entire process smooth and professional.",
  },
  {
    name: "Rita Brown",
    role: "VP Marketing at Bowl",
    text: "Their team helped us create a space that supports our business and community. The entire experience was professional, collaborative, and genuinely rewarding.",
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    text: "From the initial planning to the final details, the team was committed to quality and communication. We are delighted with the results of our property transformation.",
  },
  {
    name: "Michael Davis",
    role: "Commercial Property Owner",
    text: "The team understood our vision and helped us make the most of our property. Their attention to detail and practical approach made a real difference.",
  },
];

const avatars = document.querySelectorAll(".customer-avatar");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const reviewRole = document.getElementById("reviewRole");

let currentSlide = 2;

function showTestimonial(index) {
  currentSlide = (index + testimonials.length) % testimonials.length;

  const testimonial = testimonials[currentSlide];

  reviewText.textContent = testimonial.text;
  reviewName.textContent = testimonial.name;
  reviewRole.textContent = testimonial.role;

  avatars.forEach(function (avatar, i) {
    const active = i === currentSlide;

    avatar.classList.toggle("opacity-100", active);
    avatar.classList.toggle("opacity-50", !active);
    avatar.classList.toggle("scale-110", active);
    avatar.classList.toggle("ring-2", active);
    avatar.classList.toggle("ring-white", active);
  });
}

document.getElementById("prevBtn").addEventListener("click", function () {
  showTestimonial(currentSlide - 1);
});

document.getElementById("nextBtn").addEventListener("click", function () {
  showTestimonial(currentSlide + 1);
});

avatars.forEach(function (avatar) {
  avatar.addEventListener("click", function () {
    showTestimonial(Number(avatar.dataset.slide));
  });
});

showTestimonial(currentSlide);
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = newsletterForm.querySelector("input").value;

  alert("Thank you for subscribing!");

  newsletterForm.reset();
});
