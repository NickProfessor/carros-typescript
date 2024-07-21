import { CarroController } from "../controllers/carro-controller.ts";

const controller = new CarroController();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adicionaCarro();
});
