// 开场淡入动画
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// 粒子背景初始化
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#6699ff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      outModes: "out"
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80 },
      push: { quantity: 4 }
    }
  },
  background: {
    color: "#f5f7fa"
  }
});
