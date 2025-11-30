const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "2508-FTB-CT-WEB-PT";
const COMBINED_URL = `${BASE_URL}/${COHORT}`;

async function fetchAllEvents() {
  try {
    const response = await fetch(`${COMBINED_URL}/events`);
    if (!response.ok) throw new Error("Failed to fetch events");
    const data = await response.json();
    state.events = data;
    render();
  } catch (error) {
    console.error("Error fetching events:", error);
    renderError("Error fetching events. Please try again later.");
  }
}

(async function init() {
  try {
    render();
    await fetchAllEvents();
  } catch (err) {
    state.error = `Initialization failed ${err.message}`;
    render();
  }
})();
