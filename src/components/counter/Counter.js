import {useDispatch,useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/state/counter/counterSlice';


function Counter() {

  const  count= useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='card'>
        <div className="card-header bg-secondary">
           <h4 className="text-white">My Counter App</h4>
        </div>
        <div className="card-body">
            <h1>{count}</h1>
        </div>
        <div className="my-4">
            <div className="mx-2 btn btn-success" onClick={()=>{dispatch(increment())}}>Increase</div>
            <div className="mx-2 btn btn-danger" onClick={()=>{dispatch(decrement())}}>Decrease</div>
        </div>

    </div>
  )
}

export default Counter