import { render, fireEvent, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react'
import List from '../../components/List'

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']}/>)

    screen.logTestingPlaygroundURL()

    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Mayk')).toBeInTheDocument()
  })

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]}/>)
    
    const inputElement = getByPlaceholderText('Novo item')
    const addButton = getByText('Adicionar')

    fireEvent.change(inputElement, { target: { value: 'Novo' } })
    fireEvent.click(addButton)

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument()
    })

    expect(await findByText('Novo')).toBeInTheDocument()
  })

  it('should be able to add new item to the list', async () => {
    const { getByText, getAllByText, queryByText } = render(<List initialItems={['Diego']} />)
    
    const removeButtons = getAllByText('Remover')

    fireEvent.click(removeButtons[0])

    await waitForElementToBeRemoved(() => getByText('Diego'))

    await waitFor(() => {
      expect(queryByText('Diego')).not.toBeInTheDocument()
    })
  })
})