const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')


if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        // show light icom
        themeToggleLightIcon.classList.remove('hidden')
      } else {
        themeToggleDarkIcon.classList.remove('hidden')
      }

      // listen for toggle button click
      themeToggleBtn.addEventListener('click', toggleMode)

      function toggleMode(){
        // toggle icon
         themeToggleDarkIcon.classList.toggle('hidden')
         themeToggleLightIcon.classList.toggle('hidden')
      }

      