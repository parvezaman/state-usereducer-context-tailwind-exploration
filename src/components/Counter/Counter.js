import Display from '../Display/Display'
import Body from '../Body/Body'

export const Counter = () => {

    return (
        <div className="grid grid-rows-2 gap-16 justify-items-center">
            <Display />
            <Body />
        </div>
    )
}
