import { errorHandler } from "../middlewares/errorHandler.js";
import { addMongooseData, getMongooseData, reviewMongooseCount } from "../repository/repository.js";



export const addFormData = async (req, res) => {
    try {


        console.log("here in addform Data")
        const formData = req.body;
        console.log(formData)

        await addMongooseData(formData);

        return res.status(200).json(({
            success: true,
            message: "Data saved successfully"

        }))

    } catch (error) {
        errorHandler(error);
    }

}

export const getData = async (req, res) => {
    try {
        const page = req.params.page;
        const reviews = await getMongooseData(page);
        const totalReviews = await reviewMongooseCount();
        console.log(totalReviews);

        return res.status(200).json(({
            success: true,
            message: "Data saved successfully",
            reviews,
            totalReviews

        }))
    } catch (error) {
        errorHandler(error)
    }
}


