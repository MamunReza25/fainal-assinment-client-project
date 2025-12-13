import axios from "axios"

export const imageUpload = async imageData => {
    const formData = new FormData()
    formData.append('image', imageData)

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_HOST_KEY}`,
        formData
    )
    return data?.data?.display_url
};
// save Or Update Users account
export const saveOrUpdateUsers = async (usersData) => {
    const { data } = await axios.post(`${import.meta.env.VITE_baseURL}/users`, usersData)
    return data;
};