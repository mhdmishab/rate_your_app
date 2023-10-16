import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';
import { useDispatch} from 'react-redux';
import { getDataSlice } from '../slice/Slice';

function PageData() {

  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null)
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
 
  const handlePagination = (newPage, pageSize) => {
    setPage(newPage);
  }

  useEffect(() => {
    dispatch(getDataSlice(page)).then((response) => {
      console.log(response)
      setReviews(response?.payload.data.reviews);
      setTotal(response?.payload.data.totalReviews)
    }).catch((error) => {
      console.error(error);
      message.error(error?.payload.message);
    })
  }, [page,dispatch])
  
  return (

    <div className="w-full h-full pb-5" style={{
      backgroundImage: 'url(https://i.pinimg.com/564x/7c/dd/b5/7cddb51d57cf7d6ba124907ce67825f7.jpg)',
      backgroundSize: 'cover',
      width: '100%',
      height: reviews?.length > 3 ? '100%' : '100vh',
    }}>
      {reviews?.length>0 ? (
        <div className='flex-col justify-center items-center'>
          <div className="p-5 flex justify-center flex-wrap">
            {reviews?.map((review) => (
              <div key={review._id} className="card w-96 bg-blue-100 text-primary-content m-2">
                <h2 className="card-title text-purple-600 flex-col mt-2">Review</h2>
                <div className="card-body text-black flex-col justify-center">
                  <div className='flex'>
                    <p className='flex justify-start'>Usage</p><p>:</p><span className='flex justify-start'>{review.usage}</span>
                  </div>
                  <span className='flex items-center justify-center'>-------------------------------------------------</span>
                  <div className='flex'>
                    <p>Goals obtained</p><p>:</p> <span className=''>{review.goal.map((goal) => (
                      <div key={goal} className='flex justify-end'>{`${goal} `}</div>
                    ))}</span>
                  </div>
                  <span className='flex items-center justify-center'>-------------------------------------------------</span>
                  <div className='flex justify-between'>
                    <p>Rating</p><p>:</p> <span>{review.rating}</span>
                  </div>
                  <span className='flex items-center justify-center'>-------------------------------------------------</span>
                  {review.suggestion ? (
                    <>
                      <div className='flex justify-between'>
                        <p>Suggestion</p><p>:</p><span className='flex justify-end'>{review.suggestion}</span>
                      </div>
                      <span className='flex items-center justify-center'>-------------------------------------------------</span>
                    </>
                  ) : null}
                  <div className='flex justify-between'>
                    <p>Dob</p><p>:</p> <span>{review.dob}</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-warning pointer-events-none">{review.rating}</button>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <Pagination showSizeChanger={false} defaultPageSize={9} defaultCurrent={1} current={page} total={total} onChange={handlePagination} />
            </div>

            <div className='flex justify-center mt-4'>

              <button className="btn btn-secondary" onClick={handleClick}>Add another response</button>
            </div>
          
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-full mt-56'>
          <div>No Records</div>
          <div className='flex justify-center mt-4'>
            <button className="btn btn-secondary" onClick={handleClick}>Add New Response</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PageData
