import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { addMessage } from "./messageSlice"

export default function MessageForm() {
    // Step 1: get the dispatch function
    const dispatch = useDispatch()

    // Formik gives us values as a parameter
    const handleSubmit = (values, { resetForm }) => {
        // The old non-redux way to do it
        // addMessage(values)

        // Step 2: we dispatch an action object with the payload set to the values from our formik form
        dispatch( addMessage( values ) )
        
        resetForm()
    }

    return (
        <Formik 
            initialValues={{
                text: "I'm the best",
                author: "",
                private: false
            }}
            onSubmit={handleSubmit}
        >
            <Form className="d-flex align-items-center gap-2 mt-4">
                {/* step 2: tie the piece of state to the input */}
                <Field type="text" 
                    className="form-control"
                    name="text"
                />
                <Field type="text" 
                    className="form-control"
                    name="author"
                />
                <div className="form-check">
                    <Field
                        type="checkbox" 
                        className="form-check-input"
                        name="private"
                    />
                    <label className="form-check-label">Private</label>
                </div>
                <button className="btn btn-sm btn-success" type="submit">Send</button>
            </Form>
        </Formik>
    )
}