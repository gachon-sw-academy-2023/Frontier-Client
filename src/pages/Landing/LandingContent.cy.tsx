import React from "react";
import LandingContent from "./LandingContent";

describe("<LandingContent />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<LandingContent />);
    });
});
