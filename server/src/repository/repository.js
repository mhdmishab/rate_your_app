import { Datas } from "../model/model.js";

export const addMongooseData = (data) => {
    try {
        const { usage, goal, rating, suggestion, formattedDate } = data;

        console.log(usage, goal, rating, suggestion, formattedDate)
        const NewDatas = new Datas({
            usage,
            goal,
            rating,
            suggestion,
            dob: formattedDate
        })
        NewDatas.save();
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getMongooseData = async (page) => {
    try {
        const skip = (page - 1) * (9);
        const response = await Datas.find().skip(skip).limit(9).sort({ date: -1 });
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const reviewMongooseCount = async () => {
    try {
        const response = (await Datas.find()).length;
        return response

    } catch (error) {
        console.log(error)
        throw error;
    }
}