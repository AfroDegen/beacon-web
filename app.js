const button =
  document.getElementById("runAudit");

button.addEventListener("click", async () => {

  const business_name =
    document.getElementById(
      "businessName"
    ).value;

  const city =
    document.getElementById(
      "city"
    ).value;

  const category =
    document.getElementById(
      "category"
    ).value;

  document.getElementById("output")
    .textContent =
    "Running Beacon Audit...";

  try {

    const response =
      await fetch(
        "https://beacon-api-production-f494.up.railway.app/audit",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            business_name,
            city,
            category
          })
        }
      );

    const data =
      await response.json();

    document.getElementById(
      "output"
    ).textContent =
      JSON.stringify(
        data,
        null,
        2
      );

  } catch (error) {

    document.getElementById(
      "output"
    ).textContent =
      `Error: ${error.message}`;
  }
});
