
import { useState } from "react";


const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60,
}



const ResourceForm = (props) => {

    const [form, setForm] = useState(props.initialData || DEFAULT_DATA);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    const resetForm = () => {setForm(DEFAULT_DATA)}

    const submitForm = () => {
        props.onFormSubmit(form);
    }


    return(
        
            <div className="resource-form">
                <form>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input 
                                value={form.title} 
                                onChange={handleChange} 
                                name="title"
                                className="input" type="text" placeholder="Title"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea 
                                value={form.description} 
                                onChange={handleChange} 
                                name="description"
                                className="textarea" placeholder="Learn Technologies"></textarea>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Link</label>
                        <div className="control">
                            <input 
                                value={form.link} 
                                onChange={handleChange} 
                                name="link"
                                className="input" type="text" placeholder="https://domain.com"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Priority</label>
                        <div className="control">
                            <div className="select">
                            <select 
                                value={form.priority}
                                onChange={handleChange} 
                                name="priority"
                            >
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Time To Finish</label>
                        <div className="control">
                            <input 
                                value={form.timeToFinish} 
                                onChange={handleChange} 
                                name="timeToFinish"
                                className="input" type="number" placeholder="60"/>
                        </div>
                        <p className="help">time in minutes</p>
                    </div>


                    <div className="field is-grouped">
                        <div className="control">
                            <button 
                                onClick={() => {props.onFormSubmit(form)}}
                                // onClick={submitForm}
                                type="button" 
                                className="button is-link"
                            >Submit</button>
                        </div>
                        <div className="control">
                            <button onClick={resetForm}     type="button"   className="button is-link is-light">Reset Form</button>
                        </div>
                    </div>

                </form>

            </div>
        
    )

}


export default ResourceForm;


