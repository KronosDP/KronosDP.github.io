/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

let determineThemeSetting = () => "dark";
let determineComputedTheme = () => "dark";

const browserPref = 'dark';

let setTheme = () => {
  $("html").attr("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

var toggleTheme = () => {
  setTheme();
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files
  // scssLarge is the single sidebar/nav breakpoint: $large in /_sass/_themes.scss,
  // used via @include breakpoint($large) in /_sass/layout/_sidebar.scss.
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Set theme to dark
  setTheme();

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // The old "Follow" dropdown (.author__urls-wrapper button) and its resize
  // restore handler are gone: the sidebar is a pill nav now, and the only
  // mobile nav affordance is the masthead hamburger, which is wired up in
  // assets/js/plugins/jquery.greedy-navigation.js.

  // Animate the skill bars in as they scroll into view.
  //
  // A bar's real width is its CSS default; only rows we park with .is-pending
  // start at zero (see _sass/layout/_components.scss). That direction matters:
  // an empty bar reads as "no skill at all", so a missed reveal must degrade to
  // "no animation", never to a wrong value. Anything still pending gets swept
  // clear below.
  var skillRows = document.querySelectorAll(".skill-row");
  if (skillRows.length > 0) {
    var revealRow = function (row) {
      row.classList.remove("is-pending");
    };
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      Array.prototype.forEach.call(skillRows, function (row) {
        row.classList.add("is-pending");
      });

      var skillObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealRow(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0 });

      Array.prototype.forEach.call(skillRows, function (row) {
        skillObserver.observe(row);
      });

      // Safety sweep: reveal any row that is at or above the fold but still
      // pending. Rows genuinely below the fold are left to the observer so
      // they keep their scroll-in animation.
      var sweepSkillRows = function () {
        Array.prototype.forEach.call(skillRows, function (row) {
          if (row.classList.contains("is-pending") &&
              row.getBoundingClientRect().top < window.innerHeight) {
            revealRow(row);
            skillObserver.unobserve(row);
          }
        });
      };
      $(window).on("load", sweepSkillRows);
      setTimeout(sweepSkillRows, 1200);
    }
  }

  // Scroll reveal system for .reveal-on-scroll elements
  var revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length > 0) {
    var revealEl = function (el) {
      el.classList.add("is-revealed");
    };
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReduced && "IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealEl(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      Array.prototype.forEach.call(revealElements, function (el) {
        revealObserver.observe(el);
      });

      var sweepRevealElements = function () {
        Array.prototype.forEach.call(revealElements, function (el) {
          if (!el.classList.contains("is-revealed") &&
              el.getBoundingClientRect().top < window.innerHeight) {
            revealEl(el);
            revealObserver.unobserve(el);
          }
        });
      };
      $(window).on("load", sweepRevealElements);
      setTimeout(sweepRevealElements, 800);
    } else {
      Array.prototype.forEach.call(revealElements, function (el) {
        revealEl(el);
      });
    }
  }

  // Stat counter roll-up animation
  var counterElements = document.querySelectorAll(".stat-counter");
  if (counterElements.length > 0) {
    var prefersReducedMotionCounter = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var animateCounter = function (el) {
      var target = parseFloat(el.getAttribute("data-target"));
      if (isNaN(target)) return;
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1400; // ms
      var startTime = null;

      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        var current = (ease * target).toFixed(decimals);

        if (suffix === "%") {
          el.innerHTML = current + '<span class="stat-card__unit">%</span>';
        } else {
          el.textContent = current + suffix;
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    if (!prefersReducedMotionCounter && "IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      Array.prototype.forEach.call(counterElements, function (el) {
        counterObserver.observe(el);
      });
    }
  }

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
