import React, { useState } from 'react';
import '@mui/material/styles';
import Selector from '../components/Selector';
import MultiSelector from '../components/MultiSelector';
import UserRating from '../components/UserRating';
import UserTextArea from '../components/UserTextArea';
import DobCalender from '../components/DobCalender';
import * as Yup from 'yup';
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDataSlice } from '../slice/Slice';

function PageForm() {

    const [usage, setUsage] = useState('');
    const [goal, setGoal] = useState([]);
    const [rating, setRating] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [date, setDate] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading}=useSelector((state)=>state.dataSlice);

    const usageSchema = Yup.string().required('Usage is required');
    const goalSchema = Yup.array()
        .of(Yup.string().required('At least one goal is required'))
        .min(1, 'At least one goal is required');
    const ratingSchema = Yup.string().required('Rating is required');
    const suggestionSchema = Yup.string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? null : value))
        .matches(/^[^\d]+$|^$/, 'Suggestion should not contain only numbers')
        .max(50,"maximum 50 letters allowed");

    const dateSchema = Yup.date()
        .required('Date of Birth is required')
        .max(new Date(), 'Oops, You are not born yet.');

    const handleSubmit = async () => {
        try {
            await usageSchema.validate(usage);
            await goalSchema.validate(goal);
            await ratingSchema.validate(rating);
            await suggestionSchema.validate(suggestion);
            await dateSchema.validate(date);

            const formattedDate = date.format('D-MMM-YYYY');
            console.log(formattedDate)

            const formData = {
                usage, goal, rating, suggestion, formattedDate
            }

             dispatch(addDataSlice({formData})).then((response) => {
                console.log(response);
                message.success(response.payload.data.message);
                navigate('/ratings')

            }).catch((err) => {
                console.error(err);
                message.error(err.payload.data.message);
            })

        } catch (err) {
            message.error(err.message);
         
            console.error(err.message);
        }
    }

    return (
        <div className='flex justify-around w-full h-screen'>
            <div className='flex-1' style={{
                backgroundImage: 'url(https://i.pinimg.com/564x/7c/dd/b5/7cddb51d57cf7d6ba124907ce67825f7.jpg)',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
            }}>
                <div className='flex-1 flex justify-center mt-5 w-full h-[650px]'>
                    <div className="card w-96 glass flex-col items-center justify-center bg-white-100">
                        <h4 className='font-semibold text-white text-2xl m-3'>Rate Your App</h4>
                        <Selector usage={usage} setUsage={setUsage} />
                        <MultiSelector goal={goal} setGoal={setGoal} />
                        <UserRating rating={rating} setRating={setRating} />
                        <UserTextArea suggestion={suggestion} setSuggestion={setSuggestion} />
                        <DobCalender date={date} setDate={setDate} />

                        <button className="m-2 btn btn-success" style={{ width: '300px' }} onClick={handleSubmit}>{loading?<span>Loading</span>:<span>Submit</span>}</button>
                        <button className="m-2 btn btn-secondary mb-10" style={{ width: '300px' }} onClick={() => { navigate('/ratings') }}>View Reviews</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageForm;

