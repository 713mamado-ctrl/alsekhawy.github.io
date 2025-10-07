// كود تفاعلي لإضافة تعليق جديد فورًا أسفل التعليقات
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("input");
  const opinionInput = form.querySelector("textarea");
  const reviewsSection = document.querySelector(".reviews");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // منع تحديث الصفحة

    const name = nameInput.value.trim();
    const opinion = opinionInput.value.trim();

    if (name && opinion) {
      const newReview = document.createElement("div");
      newReview.classList.add("review");
      newReview.innerHTML = `
        <img src="assets/images/user1.png" alt="${name}">
        <p><strong>${name}:</strong> ${opinion}</p>
      `;

      reviewsSection.appendChild(newReview);

      // تفريغ الحقول بعد الإرسال
      nameInput.value = "";
      opinionInput.value = "";
    }
  });
});
