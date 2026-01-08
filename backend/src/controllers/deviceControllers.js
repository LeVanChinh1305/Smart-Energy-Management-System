export const getDevice = (req, res) => { // lấy thông tin thiết bị
    res.status(200).send('Hello word!');
}
export const updateDevice = (req, res) => { // cập nhật thông tin thiết bị
    res.send('PUT request to the homepage');
}
export const deleteDevice = (req, res) => { // xóa thiết bị
    res.status(200).json("DELETE request to the homepage");
}
export const createDevice = (req, res) => { // tạo thiết bị
    res.send('POST request to the homepage');
}
