export default function printFormOneSubmit(form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    Array.from(event.target.elements).forEach(el => {
      console.log("Tnput Type :", el.type);
      console.log("Name: ", el.name);
      console.log("value: ", el.value);
    });
  });
}
