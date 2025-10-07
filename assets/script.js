console.log("صفحة آراء العملاء جاهزة للعمل!");

// تحديد العناصر
const form = document.querySelector("form");
const reviewsContainer = document.querySelector(".reviews");

// تحميل التعليقات القديمة من localStorage
window.addEventListener("load", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach(review => addReviewToPage(review.name, review.text));
});

// عند إرسال التعليق
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("review").value.trim();

  if (name && text) {
    addReviewToPage(name, text);

    // حفظ التعليق في localStorage
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.push({ name, text });
    localStorage.setItem("reviews", JSON.stringify(savedReviews));

    form.reset();
  }
});

// دالة لإضافة التعليق في الصفحة
function addReviewToPage(name, text) {
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  reviewDiv.innerHTML = `
    <img src="assets/images/user1.png" alt="${name}">
    <p><strong>${name}</strong>: ${text}</p>
  `;
  reviewsContainer.appendChild(reviewDiv);
}
