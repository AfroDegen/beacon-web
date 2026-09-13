alert("Beacon JS loaded");

const button = document.getElementById("runAudit");
const output = document.getElementById("output");

if (!button) {
  alert("runAudit button not found");
}

button?.addEventListener("click", async () => {
  alert("Button clicked");

  const business_name =
    document.getElementById("businessName")?.value?.trim();

  const city =
    document.getElementById("city")?.value?.trim();

  const category =
    document.getElementById("category")?.value?.trim();

  if (!business_name || !city || !category) {
    output.textContent =
      "Please enter Business Name, City and Category.";
    return;
  }

  output.textContent = "Running Beacon Audit...";

  try {
    const response = await fetch(
      "https://beacon-api-production-f494.up.railway.app/audit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          business_name,
          city,
          category
        })
      }
    );

    const data = await response.json();

    output.textContent =
      JSON.stringify(data, null, 2);

  } catch (error) {
    output.textContent =
      `Error: ${error instanceof Error ? error.message : String(error)}`;

    console.error(error);
  }
});
