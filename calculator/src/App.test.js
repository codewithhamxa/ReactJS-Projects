import { render, screen } from "@testing-library/react";

import Reservationform from "./Componentes/Reservationform";

test('Renders the Reservation heading', () => {
    render(<Reservationform />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})