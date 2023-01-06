import {render,screen,fireEvent} from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-ejemplo'
import { useCounter } from '../../src/Hooks/useCounter';
import { useFetch } from '../../src/Hooks/useFetch'

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('MultipleCustomHooks', () => { 

    useCounter.mockReturnValue({
        Count : 1,
        incrementar : jest.fn()
    })
    beforeEach(()=>{
        jest.clearAllMock
    })
   
    test('should componente por defecto', () => { 
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null,
        })
        render( <MultipleCustomHooks />);
        expect (screen.getByText('Loading...')).toBeTruthy();
        const nextButton = screen.getByRole('button',{name: 'Next quote'});
        expect (nextButton.disabled).toBeTruthy();
        // screen.debug()
     })

     test('should mostrar un quote', () => { 
        useFetch.mockReturnValue({
            data:[{author: 'Eduardo', quote:'Hola mundo'}],
            isLoading:false,
            hasError:null,
        })
        render( <MultipleCustomHooks />);
        expect (screen.getByText('Hola mundo')).toBeTruthy();
        expect (screen.getByText('Eduardo')).toBeTruthy();
        // const nextButton = screen.getByRole('button',{name: 'Next quote'});
        // expect (nextButton.disabled).toBeFalsy();
        //screen.debug()
      })

      test('should debe incrementar el numero', () => { 
        useFetch.mockReturnValue({
            data:[{author: 'Eduardo', quote:'Hola mundo'}],
            isLoading:false,
            hasError:null,
        })
        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button',{name: 'Next quote'});
        fireEvent.click(nextButton)
        const { incrementar} = useCounter()
        expect(incrementar).toHaveBeenCalled()
       })
 })