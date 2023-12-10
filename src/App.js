import { useDispatch, useSelector } from "react-redux"
import { deleteReview } from "./reviewSlice"

export default function App() {
  const dispatch = useDispatch()

  const listOfReviews = useSelector( state => state.reviews.reviewList )

  return (
    <div>
      <h3>Books</h3>
      
      <h3>Reviews</h3>
      { listOfReviews.map(review => (
        <div key={review.id}>
          { review.text }
          <button onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}