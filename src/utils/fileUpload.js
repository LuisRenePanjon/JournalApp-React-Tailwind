export const fileUpload = async (file) => {
    const cloudUrl = process.env.REACT_APP_CLOUD_URL;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUD_UPLOAD_PRESET);

    try {
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });
        const json = await res.json();
        return json.secure_url;    
    } catch (error) {
        console.log(error);
        throw error;
    }
}