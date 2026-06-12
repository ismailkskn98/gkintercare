export function cn(...inputs) {
  const classes = [];

  function append(input) {
    if (!input) return;

    if (Array.isArray(input)) {
      input.forEach(append);
      return;
    }

    if (typeof input === "object") {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
      return;
    }

    classes.push(input);
  }

  inputs.forEach(append);
  return classes.join(" ");
}
