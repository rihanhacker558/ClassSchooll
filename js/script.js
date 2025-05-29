document.addEventListener("DOMContentLoaded", () => {
  const structureBtn = document.getElementById("StructureBtn");
  const scheduleBtn = document.getElementById("scheduleBtn");
  const structureSection = document.getElementById("structure");
  const scheduleSection = document.getElementById("schedule");

  const setActive = (activeBtn, inactiveBtn) => {
    activeBtn.classList.add("active");
    inactiveBtn.classList.remove("active");
  };

  structureBtn.addEventListener("click", () => {
    structureSection.classList.remove("hidden");
    scheduleSection.classList.add("hidden");
    setActive(structureBtn, scheduleBtn);
  });

  scheduleBtn.addEventListener("click", () => {
    scheduleSection.classList.remove("hidden");
    structureSection.classList.add("hidden");
    setActive(scheduleBtn, structureBtn);
  });

  setActive(structureBtn, scheduleBtn);
  structureSection.classList.remove("hidden");
  scheduleSection.classList.add("hidden");
});