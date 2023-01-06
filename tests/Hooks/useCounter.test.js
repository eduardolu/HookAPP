import{renderHook,act} from '@testing-library/react'
import { useCounter } from '../../src/Hooks/useCounter'


describe('useCounter', () => { 
    const {result} = renderHook( ()=> useCounter());
    const {Count, decrementar, incrementar, reniciar}= result.current
    const inicioValor = 100;
    
    test('should retornar valor defecto', () => { 
        expect (Count).toBe(10);
        expect (incrementar).toEqual(expect.any(Function));
        expect (decrementar).toEqual(expect.any(Function));
        expect (reniciar).toEqual(expect.any(Function));

     }) 
     
     test('should devolver valor iniciar si es distinto de 10', () => { 
        const {result} = renderHook( ()=> useCounter(inicioValor));
        expect (result.current.Count).toBe(inicioValor);
      })

      test('should incremento', () => { 
        const {result} = renderHook( ()=> useCounter());
        const {Count, decrementar, incrementar, reniciar}= result.current
        act(()=> {
            incrementar();
            incrementar(2);
        })
        expect (result.current.Count).toBe(13);
       })
       test('should decremento', () => { 
        const {result} = renderHook( ()=> useCounter());
        const {Count, decrementar, incrementar, reniciar}= result.current
        act(()=> {
            decrementar();
            decrementar(2);
        })
        expect (result.current.Count).toBe(7);
       })
       test('should reser', () => { 
        const {result} = renderHook( ()=> useCounter(inicioValor));
        const {Count, decrementar, incrementar, reniciar}= result.current
        act(()=> {
            reniciar();
        })
        expect (result.current.Count).toBe(inicioValor);
       })
 })