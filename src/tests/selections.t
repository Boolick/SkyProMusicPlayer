import React from "react";
 
import { setupApiStore } from "./testUtils";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { trackApi } from "../components/trackApi";
import SelectionsPage from "../screens/SelectionsPage";

const BASE_API_URL = "https://629470d963b5d108c18b87da.mockapi.io";

// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
  rest.get(`${BASE_API_URL}/selection/`, (req, res, ctx) => {
    return res(
      ctx.json([{ completed: false, id: "1", title: "My first selection" }])
    );
  }),
];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store
const storeRef = setupApiStore(trackApi);

describe("Player feature", () => {
  // Поднимаем тестовый сервер перед запуском тестов
  beforeAll(() => server.listen());

  // Чистим обработчики между тестами
  afterEach(() => server.resetHandlers());

  // Отрубаем сервер после выполнения тестов.
  // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
  afterAll(() => server.close());

  it("should show requested data", async () => {
    render(<SelectionsPage selectionId={1}   />, { wrapper: storeRef.wrapper });

    // Проверяем начальное состояние компонента
    screen.getByText("Loading...");

    // Ждем ответа от сервера. Как только он придет,
    // отрисуется пункт списка
    expect(await screen.findByText(/my first seleciton/i)).toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
 