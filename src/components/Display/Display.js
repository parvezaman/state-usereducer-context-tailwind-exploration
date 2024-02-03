import { UseCounterContext } from '../../context/countetContext'

const Display = () => {
    const { currentCount } = UseCounterContext()
    return (
        <div className="flex w-full justify-evenly">
            <div>
                <h1 className='text-header-title'>contextApi</h1>
                <h1 className='text-blue-8xl'>
                    {currentCount}
                </h1>
            </div>
            <div>
                <h1 className='text-header-title'>
                    useReducer
                </h1>
                <h1 className='text-blue-8xl'>
                    {currentCount}
                </h1>
            </div>
        </div>
    );

}

export default Display