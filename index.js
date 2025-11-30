const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "2508-FTB-CT-WEB-PT"(async function init() {
  try {
    render();
    await fetchAllEvents();
  } catch (err) {
    state.error = `Initialization failed ${err.message}`;
    render();
  }
})();
