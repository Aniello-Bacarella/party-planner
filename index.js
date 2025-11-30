const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "2508-FTB-CT-WEB-PT";
const COMBINED_URL = `${BASE_URL}/${COHORT}`;

let state = {
  events: [],
  selectedEvent: null,
};

async function fetchAllEvents() {
  try {
    const response = await fetch(`${COMBINED_URL}/events`);
    if (!response.ok) throw new Error("Failed to fetch events");
    const data = await response.json();
    state.events = data.data;
    render();
  } catch (error) {
    console.error("Error fetching events:", error);
    renderError("Error fetching events. Please try again later.");
  }
}

async function fetchEventbyId(id) {
  try {
    const response = await fetch(`${COMBINED_URL}/events/${id}`);
    if (!response.ok) throw new Error("Failed to fetch event details");
    const data = await response.json();
    state.selectedEvent = data;
    render();
  } catch (error) {
    console.error("Error fetching event details:", error);
    renderError("Error fetching event deatails. Please try again later.");
  }
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = "";

  root.appendChild(EventList(state.events));
  root.appendChild(EventDetails(state.selectedEvent));
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
