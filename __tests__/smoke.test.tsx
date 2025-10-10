import { render, screen } from "@testing-library/react"

function Title() {
  return <h1>PT Nusantara Global Exports</h1>
}

test("renders brand title", () => {
  render(<Title />)
  expect(screen.getByText(/Nusantara Global Exports/i)).toBeInTheDocument()
})
