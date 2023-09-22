import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main text="Ola Main" />)

    expect(screen.getByText('Ola Main')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
