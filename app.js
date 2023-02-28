const attendanceForm = document.querySelector("#attendance__form");

const submitFormHandler = async (e) => {
  e.preventDefault();
  const fullname = e.target.fullname.value;
  const checkbox = e.target.checkbox.checked;

  try {
    const response = await fetch("https://randomuser.me/api/", {
      method: "GET",
      // body: JSON.stringify({ fullname, checkbox }),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    if (!response.ok) {
      throw new Error("Someting went wrong");
    }
    console.log("The response is", response);
    const responseBody = await response.json();
    console.log("The response body is ", responseBody);
    const success = document.querySelector(".success");

    success.classList.remove("hidden");

    setTimeout(() => {
      success.classList.add("hidden");
    }, 4000);
  } catch (error) {
    console.log(error);
    const failed = document.querySelector(".error").classList.remove("hidden");
    console.log(error.message);
  }
};
attendanceForm.addEventListener("click", submitFormHandler);

const close__modal = document.querySelector(".close__modal");

close__modal.addEventListener("click", function () {
  const failed = document.querySelector(".error").classList.add("hidden");
});
