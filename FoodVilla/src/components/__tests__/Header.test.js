import { render } from "@testing-library/react"
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("when rendered initially user should not be logged in", () => {
    const header = render(
        <StaticRouter>
            <Header/>
        </StaticRouter>
    );
    const loginStatus = header.getByTestId("login-status");
    expect(loginStatus.innerHTML).toBe("Log In");
})

test("Header logo should render", () => {
    const header = render(
        <StaticRouter>
            <Header/>
        </StaticRouter>
    );
    const logo = header.getByTestId("logo");
    expect(logo).toBeTruthy();
});

