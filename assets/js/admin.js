const CollapseBtn = document.querySelector("#collapse-btn"),
  HeaderNav = document.querySelector(".header-nav"),
  SidebarNav = document.querySelector(".sidebar-nav"),
  MainContent = document.querySelector(".ex-v-content"),
  backdrop = document.createElement("div");
backdrop.className = "sidebar-nav-backdrop";

CollapseBtn.addEventListener("click", () => {
  if (window.innerWidth > 980) {
    if (!HeaderNav.classList.contains("header-nav-collapse")) {
      HeaderNav.classList.add("header-nav-collapse");
      HeaderNav.classList.remove("header-nav-ex-collapse");
      SidebarNav.classList.add("sidebar-nav-collapse");
      SidebarNav.classList.remove("sidebar-nav-ex-collapse");
      MainContent.classList.add("main-v-collapse");
    } else {
      HeaderNav.classList.remove("header-nav-collapse");
      SidebarNav.classList.remove("sidebar-nav-collapse");
      MainContent.classList.remove("main-v-collapse");
    }
  } else {
    if (!HeaderNav.classList.contains("header-nav-ex-collapse")) {
      HeaderNav.classList.add("header-nav-ex-collapse");
      HeaderNav.classList.remove("header-nav-collapse");
      SidebarNav.classList.add("sidebar-nav-ex-collapse");
      SidebarNav.classList.remove("sidebar-nav-collapse");
      document.body.appendChild(backdrop);
      document.body.classList.add("body-main--no-scrolll");
      setTimeout(() => {
        backdrop.classList.add("fade-show");
      }, 150);
    } else {
      HeaderNav.classList.remove("header-nav-ex-collapse");
      SidebarNav.classList.remove("sidebar-nav-ex-collapse");
    }
  }
});
backdrop.addEventListener("click", function () {
  HeaderNav.classList.remove("header-nav-ex-collapse");
  HeaderNav.classList.remove("header-nav-collapse");
  SidebarNav.classList.remove("sidebar-nav-ex-collapse");
  SidebarNav.classList.remove("sidebar-nav-collapse");
  document.body.classList.remove("body-main--no-scrolll");
  backdrop.classList.remove("fade-show");
  setTimeout(() => {
    backdrop.remove();
  }, 250);
});

const RefreshBtn = document.querySelector(".refresh-btn");
RefreshBtn.addEventListener("click", function () {
  RefreshBtn.classList.add("get-animation");
  setTimeout(() => {
    window.location.reload();
  }, 500);
});
