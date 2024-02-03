import { UseCounterContext } from '../../context/countetContext';

const Body = () => {
    const { currentCount, setCurrentCount } = UseCounterContext()

    const handleIncrement = () => {
        if (currentCount >= 0) {
            setCurrentCount((prev) => prev + 1);
        }
    }

    const handleDecrement = () => {
        if (currentCount > 0) {
            setCurrentCount((prev) => prev - 1);
        }

    }

    return (
        <div className='grid grid-cols-2 gap-12'>
            <button onClick={handleIncrement} type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10'>Increment (+)</button>
            <button onClick={handleDecrement} type="button" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-10'>Decrement (-)</button>
        </div>
    )
}

export default Body